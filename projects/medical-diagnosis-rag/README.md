# Medical Diagnosis RAG Chatbot

Overview
--------
A retrieval-augmented generation (RAG) assistant that combines clinical documents, knowledge bases, and patient metadata with an LLM to produce grounded, auditable medical suggestions.

Key Components
--------------
- Ingest: clinical PDFs, guidelines, EHR sandbox exports
- Embeddings & Vector DB: FAISS / pgvector
- Retriever: semantic search with metadata filters
- LLM & Prompts: LangChain prompt templates + safety layers
- API: FastAPI serving secure endpoints

Tech Stack
----------
Python, FastAPI, LangChain, FAISS, OpenAI/Hosted LLM, PostgreSQL, Docker, Kubernetes

Run / Demo
--------
This repo contains architecture notes and examples. See `../../RAG_README.md` for the RAG reference design and local run hints.

Security & Compliance
---------------------
This project demonstrates design patterns for auditable responses (explainability snippets), data minimization, and EHR sandbox integration for testing only.
