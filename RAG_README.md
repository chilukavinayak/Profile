# RAG (Retrieval-Augmented Generation) Reference Design

This document provides a compact reference design for RAG pipelines and how the sample projects in `projects/` implement the pattern.

Core Concepts
-------------
- Ingest: Collect documents (PDFs, HTML, CSV, DB dumps) and extract text.
- Embeddings: Convert passages into vectors using an embeddings model.
- Vector DB: Store vectors in FAISS / Weaviate / pgvector / Pinecone / OpenSearch embeddings.
- Retriever: Query the vector DB to get top-k relevant passages.
- Prompting: Combine retrieved passages with prompt templates; add safety/filters.
- LLM: Generate responses grounded by retrieved context.
- Post-processing: Sanitize, add citations/explainability, and enforce policies.

Common Components & Tools
-------------------------
- LangChain: orchestration of retriever + prompt templates + chains
- FastAPI: lightweight API server for embeddings/retrieval/LLM endpoints
- Vector DBs: FAISS (local), Weaviate (managed), pgvector (Postgres)
- Embeddings: OpenAI embeddings, or open alternatives (Llama2 embeddings, etc.)
- LLMs: OpenAI, Anthropic, or self-hosted Llama-family models
- Orchestration: Kubernetes + Docker for production-grade deployments
- Session State: Redis for short-term conversational state

Security, Safety & Compliance
-----------------------------
- Auditability: Include retrieved citations and explainability snippets in responses.
- Data minimization: Only retrieve and send minimal context required for response.
- Access control: Authz on vector store queries and document access.
- Sandbox & Escalation: For operations that affect external systems, use a sandbox and require human approval for critical actions.

How the Sample Projects Use RAG
-------------------------------
- Medical Diagnosis RAG Chatbot: FAISS for local pilot, strong explainability snippets, EHR sandbox integration for patient data.
- Realtime Voice AI Agent with RAG: Streaming ASR + vector retrieval (Weaviate) + streaming LLM responses with partial transcripts.
- AI-Powered Text-to-SQL RAG Chatbot: pgvector stores schema & example queries; retriever retrieves schema-aware examples to reduce SQL errors.
- Air India RAG Chatbot Development: OpenSearch + embeddings for fast retrieval across multilingual policies and live flight data grounding.

Local Dev Tips
--------------
1. Start a small vector DB (FAISS or pgvector) and index a few documents.
2. Use a test LLM key or a small local model for cheaper iteration.
3. Add prompt templates that always include a "CITATIONS:" section to show sources.
4. Implement a sandbox run for any action that executes external commands or queries.

Next Steps
----------
- Fill each project's folder with ingestion scripts, example data, and a `docker-compose.yml` or Kubernetes manifests when ready.
- Add CI checks for scanning prompts and detecting unsafe patterns.
