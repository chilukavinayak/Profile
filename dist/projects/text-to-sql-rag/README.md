# AI-Powered Text-to-SQL RAG Chatbot

Overview
--------
Assistant that converts natural language to safe SQL by retrieving schema docs, example queries, and business rules via RAG before synthesizing SQL.

Key Components
--------------
- Retriever: pgvector (schema & examples)
- LLM: prompt templates that include retrieved examples and safety checks
- Sandbox: dry-run SQL execution environment
- API: FastAPI with auth and audit logs

Tech Stack
----------
Python, FastAPI, LangChain, pgvector, PostgreSQL, Docker

Run / Demo
--------
Follow the RAG reference in `../../RAG_README.md` for local setup and sandbox instructions.
