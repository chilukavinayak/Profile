'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react'
import content from '@/content/data.json'
import { cn } from '@/lib/utils'

interface Command {
  input: string
  output: string
  timestamp: Date
}

const AVAILABLE_COMMANDS = ['whoami', 'skills', 'experience', 'projects', 'contact', 'help', 'clear', 'download-resume']

export function Terminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState('')
  const [commands, setCommands] = useState<Command[]>([
    {
      input: '',
      output: `Welcome! Type 'help' to see available commands.`,
      timestamp: new Date(),
    },
  ])
  const [suggestion, setSuggestion] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [commands])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output = ''

    switch (trimmedCmd) {
      case 'whoami':
        output = content.terminal.commands.whoami
        break
      case 'skills':
        output = content.terminal.commands.skills
        break
      case 'experience':
        output = content.terminal.commands.experience
        break
      case 'projects':
        output = content.terminal.commands.projects
        break
      case 'contact':
        output = content.terminal.commands.contact
        break
      case 'help':
        output = content.terminal.commands.help
        break
      case 'clear':
        setCommands([])
        setInput('')
        return
      case 'download-resume':
        window.open('/resume.pdf', '_blank')
        output = 'Opening resume download...'
        break
      default:
        if (trimmedCmd) {
          output = `Command not found: ${cmd}. Type 'help' for available commands.`
        } else {
          return
        }
    }

    setCommands((prev) => [
      ...prev,
      { input: cmd, output, timestamp: new Date() },
    ])
    setInput('')
    setSuggestion('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (suggestion) {
        setInput(suggestion)
        setSuggestion('')
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)

    // Auto-complete suggestion
    if (value) {
      const match = AVAILABLE_COMMANDS.find((cmd) =>
        cmd.startsWith(value.toLowerCase()) && cmd !== value.toLowerCase()
      )
      setSuggestion(match || '')
    } else {
      setSuggestion('')
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-dark shadow-lg transition-transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TerminalIcon className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Terminal window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? '48px' : '400px',
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] overflow-hidden rounded-xl border border-white/20 bg-cyber-darker/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <TerminalIcon className="h-4 w-4 text-cyber-cyan" />
                <span className="text-sm font-medium text-white">vinayak@portfolio:~</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded p-1 text-white/60 transition-colors hover:bg-red-500/20 hover:text-red-400"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Terminal content */}
            {!isMinimized && (
              <>
                <div
                  ref={scrollRef}
                  className="h-[280px] overflow-y-auto p-4 font-mono text-sm"
                >
                  {commands.map((cmd, index) => (
                    <div key={index} className="mb-4">
                      {cmd.input && (
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-cyber-cyan">➜</span>
                          <span className="text-cyber-purple">~</span>
                          <span className="text-white">{cmd.input}</span>
                        </div>
                      )}
                      <div className="whitespace-pre-wrap pl-6 text-white/80">
                        {cmd.output}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-cyber-cyan">➜</span>
                    <span className="text-cyber-purple">~</span>
                    <div className="relative flex-1">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent text-white outline-none"
                        placeholder="Type a command..."
                        autoComplete="off"
                        spellCheck={false}
                      />
                      {/* Suggestion ghost text */}
                      {suggestion && (
                        <span className="pointer-events-none absolute left-0 top-0 text-white/30">
                          {input}
                          {suggestion.slice(input.length)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Quick commands */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {['whoami', 'skills', 'projects', 'contact'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleCommand(cmd)}
                        className="rounded bg-white/5 px-2 py-1 text-xs text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
