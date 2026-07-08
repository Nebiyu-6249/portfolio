export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    items: [
      "RAG",
      "Prompt Engineering",
      "Embeddings & Vector Databases",
      "AI Agents & Tool Calling",
      "Fine-Tuning (QLoRA)",
      "Multimodal Systems",
      "Model Evaluation",
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "LangChain",
      "LangGraph",
      "HuggingFace",
      "OpenAI API",
      "Claude API",
      "CrewAI",
      "Gradio",
      "Dialogflow",
      "Git",
      "AWS",
      "Nginx",
      "Netlify",
      "Docker",
    ],
  },
  {
    title: "Programming",
    items: ["Python", "TypeScript / JavaScript", "Java", "C / C++", "SQL"],
  },
  {
    title: "Web & Data",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "Django",
      "Tailwind CSS",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "NumPy",
      "Pandas",
      "Scikit-learn",
    ],
  },
];
