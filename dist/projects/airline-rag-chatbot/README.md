# Air India RAG Chatbot Development

Overview
--------
Prototype RAG chatbot for airline customer support that grounds answers with policy documents, FAQs, and live flight data.

Key Components
--------------
- Document ingestion: policies, FAQs, manuals
- Embeddings: OpenSearch/Elastic + embeddings
- Retriever: semantic retrieval with metadata (route, language)
- LLM: LangChain + response templates
- Escalation: CSR handoff flow and audit logs

Tech Stack
----------
Python, FastAPI, OpenSearch/Elastic, LangChain, Docker, Kubernetes

Run / Demo
--------
See `../../RAG_README.md` for setup, indexing docs, and running a demo chat session.
