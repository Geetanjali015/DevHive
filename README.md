
# DevHive - AI-Powered Collaboration Platform

DevHive is an intelligent collaboration platform designed to connect students, developers, universities, and companies through AI-driven profile enrichment, skill-based team formation, and real-time project collaboration. This project leverages Django (Python), Supabase (PostgreSQL + Realtime), and AI agents hosted on Hugging Face Spaces to create a seamless backend system powering a Next.js + Vite frontend.

---

## 🚀 Features

- **GitHub OAuth Authentication** – Secure login via GitHub with minimal access scopes.
- **AI Profile Enrichment** – NLP-powered resume parsing and GitHub profiling to create a comprehensive “Developer DNA.”
- **Skill-Based Team Matching** – Match users using skill embeddings and explainable AI.
- **AI Project Ideation** – Generate personalized project ideas and bootstrap GitHub repositories.
- **Real-Time Collaboration** – Chat, notifications, and co-pilot assistance for live development.
- **Company & University Dashboards** – Custom workflows for internal project management and academic oversight.

---

## 🧠 AI Agents

| Agent | Purpose |
|-------|---------|
| `GitHub Profiler` | Extracts tech stack & experience from GitHub data |
| `Resume Reader` | Parses uploaded resumes using NLP |
| `Skill Matcher` | Finds optimal teammate matches based on vector similarity |
| `Match Explainer` | Generates natural language explanations for team suggestions |
| `Idea Generator` | Recommends project ideas tailored to team skills |
| `Repo Bootstrapper` | Auto-generates GitHub repo structures & README |
| `Dev Co-Pilot` | Provides inline code assistance |
| `GitHub Tracker` | Monitors activity and sends inactivity alerts |
| `Feedback Agent` | Generates personalized student feedback for faculty |

---

## 📦 Tech Stack

- **Frontend:** Next.js,Typecript, Tailwind CSS
- **Backend:** Django, Django REST Framework
- **Database:** Supabase (PostgreSQL + pgvector)
- **AI Agents:** SentenceTransformer, spaCy, Hugging Face, Google Generative AI
- **Authentication:** GitHub OAuth
- **Storage:** Supabase Storage 
- **Real-Time:** Supabase Realtime for team chat and alerts

---


## 🛠️ Setup & Installation

Follow these steps to get the DevHive backend up and running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/himanibhammar/DevHive2.0.git
cd devhive2.0
```

### 2. Install Dependencies

Make sure you have **Python 3.10+** and `pip` installed. Then, install the required Python packages:

```bash
pip install -r requirements.txt
```

