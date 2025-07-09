export interface FAQs {
  question: string;
  answer: string;
}
const faqs: FAQs[] = [
  {
    question: "Who are you, exactly?",
    answer:
      "We’re third‑year students from the Artificial Intelligence & Data Science department at AISSMS IOIT, Pune, working as a volunteer studio called 4O4DEvs.",
  },
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Anything that lets us learn and build: web apps (Next.js/React), basic ML prototypes, automation scripts, and college capstones.",
  },
  {
    question: "Do you charge for your work?",
    answer:
      "Yes, for peer‑to‑peer projects inside college and also external collaborations we agree on a nominal fee—or sometimes equity/credits—mainly to cover cloud costs.",
  },
  {
    question: "Ways to connect to you?",
    answer:
      "You can go through the Verification which is more professional and standard way to reach us, but you can also reach us on Discord (provided in footer) or DM us.",
  },
  {
    question: "Will you help me with my capstone idea?",
    answer:
      "Yes! We can mentor, brainstorm architecture, and pair‑program key modules. Just share a brief problem statement and timeline.",
  },
  {
    question: "Do you provide documentation and tests?",
    answer:
      "Yes—basic README, architecture diagram, and unit tests for core logic. We’ll add Swagger or Postman collections for APIs if requested.",
  },
  {
    question: "What happens after the hand‑off?",
    answer:
      "We give you full GitHub access, a short README, and a 30‑minute walkthrough call. Post‑handoff support is on an as‑available basis.",
  },
  {
    question: "Can you integrate AI features (chatbots, vision, etc.)?",
    answer:
      "Absolutely. We’ve shipped projects with OpenAI, Hugging Face, and custom PyTorch models. Let’s discuss your use‑case and latency/budget constraints.",
  },
  {
    question: "Is my project idea kept confidential?",
    answer:
      "Yes. We’re happy to sign a simple NDA. All private repos stay private and any public demos use scrubbed data unless you approve otherwise.",
  },
  {
    question: "I’m not from AISSMS—can I still collaborate?",
    answer:
      "Definitely. Most of our external partners are startups or fellow students from other colleges. Geography isn’t a blocker as long as we can align time zones.",
  },
];

export { faqs };
