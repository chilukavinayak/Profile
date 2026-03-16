'use client'

import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'
import { lerp } from '@/lib/utils'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse * 0.5 + 0.5;
    
    float noise1 = snoise(uv * 3.0 + uTime * 0.1);
    float noise2 = snoise(uv * 5.0 - uTime * 0.15);
    float noise3 = snoise(uv * 2.0 + uTime * 0.05);
    
    float mouseDist = distance(uv, mouse);
    float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * 0.3;
    
    vec3 cyan = vec3(0.0, 0.96, 1.0);
    vec3 purple = vec3(0.72, 0.16, 0.97);
    vec3 darkBlue = vec3(0.039, 0.039, 0.059);
    
    float blend1 = noise1 * 0.5 + 0.5;
    float blend2 = noise2 * 0.5 + 0.5;
    
    vec3 color = mix(darkBlue, cyan, blend1 * 0.15 + mouseInfluence);
    color = mix(color, purple, blend2 * 0.1);
    
    color += cyan * mouseInfluence * 0.2;
    
    float vignette = 1.0 - smoothstep(0.3, 1.2, length(uv - 0.5));
    color *= vignette * 0.5 + 0.5;
    
    gl_FragColor = vec4(color, 1.0);
  }
`

function ShaderMesh() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mousePosition = useMousePosition()
  const { viewport } = useThree()

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  })

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial
      material.uniforms.uTime.value = state.clock.elapsedTime
      
      // Smooth mouse movement
      const targetX = (mousePosition.x / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 2 - 1
      const targetY = -(mousePosition.y / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 2 + 1
      
      material.uniforms.uMouse.value.x = lerp(material.uniforms.uMouse.value.x, targetX, 0.05)
      material.uniforms.uMouse.value.y = lerp(material.uniforms.uMouse.value.y, targetY, 0.05)
    }
  })

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  )
}

function WebGLCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      gl={{ 
        antialias: false, 
        alpha: false,
        powerPreference: 'high-performance',
      }}
      onError={(error) => {
        console.warn('WebGL error:', error)
      }}
    >
      <ShaderMesh />
    </Canvas>
  )
}

// Fallback gradient background when WebGL fails
function FallbackBackground() {
  return (
    <div 
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(184, 41, 247, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(10, 10, 15, 1) 0%, rgba(5, 5, 8, 1) 100%)
        `,
      }}
    />
  )
}

export function ShaderBackground() {
  const [hasWebGL, setHasWebGL] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check WebGL support
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setHasWebGL(false)
      }
    } catch (e) {
      setHasWebGL(false)
    }
  }, [])

  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10 bg-cyber-dark">
        <FallbackBackground />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 bg-cyber-dark">
      {hasWebGL ? (
        <Suspense fallback={<FallbackBackground />}>
          <WebGLCanvas />
        </Suspense>
      ) : (
        <FallbackBackground />
      )}
      
      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}
