# Realtime Voice AI Agent with RAG

Overview
--------
Streaming voice assistant that transcribes audio, retrieves context with a vector DB, and generates grounded spoken responses using a RAG pipeline.

Key Components
--------------
- Ingestion: WebRTC audio streams
- ASR: Whisper or streaming ASR
- Retriever: Weaviate / FAISS
- LLM: streaming LLM + LangChain
- TTS: neural voice synthesis
- Session state: Redis

Tech Stack
----------
WebRTC, Whisper/ASR, LangChain, Weaviate, Redis, Docker, Kubernetes

Run / Demo
--------
See `../../RAG_README.md` for the RAG reference design and steps to stand up local vector DB and demo pipelines.
