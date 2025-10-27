import React, { useState } from "react";
import "./globals.css";
import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const cards = [
    {
      title: "Beautiful UI Components",
      description:
        "A modern set of reusable UI elements built with React and Tailwind CSS. Perfect for dashboards, landing pages and admin panels.",
      image:
        "https://designerup.co/blog/content/images/2025/01/Screenshot-2025-01-07-at-1.39.59-AM.png",
    },
    {
      title: "Responsive & Accessible",
      description:
        "Design tokens and responsive utilities ensure components look great on any device and respect accessibility best practices.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Animated Interactions",
      description:
        "Framer Motion provides smooth, natural animations for modern UIs — used across buttons, cards, and modal transitions.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const showToast = (text, color = "indigo") => {
    setToast({ text, color });
    setTimeout(() => setToast(null), 2600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-blue from-indigo-400 to-pink-400 flex items-center justify-center shadow-lg">
            <span className="font-extrabold">A</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight">Abdullah UI</h1>
            <p className="text-xs text-gray-300/70">
              React + Tailwind component set
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            onClick={() => showToast("Saved to library!")}
          >
            Save
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsModalOpen(true)}
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-400 leading-tight"
          >
            Modern, responsive React components — ready for production
          </motion.h2>

          <p className="mt-4 text-gray-200/90 max-w-2xl">
            Clean design, polished interactions, and easy customization. This
            demo showcases Buttons, Cards, and Modals built with Tailwind and
            Framer Motion.
          </p>

          <div className="mt-4 flex gap-3">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <Button variant="primary" onClick={() => setIsModalOpen(true)}>
                Try the Modal
              </Button>
              <Button
                variant="primary"
                onClick={() => showToast("Primary Button Clicked!", "primary")}
              >
                Primary
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  showToast("Secondary Button Clicked!", "secondary")
                }
              >
                Secondary
              </Button>
              <Button
                variant="danger"
                onClick={() => showToast("Danger Button Clicked!", "danger")}
              >
                Danger
              </Button>
            </motion.div>
          </div>
        </div>

        {/* quick preview cards */}
        <div className="w-full md:w-96 grid grid-cols-1 gap-4">
          <div className="bg-white/3 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <p className="text-sm text-gray-200 mb-3">Quick Preview</p>
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-400 to-pink-400 flex items-center justify-center shadow-md">
                UI
              </div>
              <div>
                <p className="font-semibold">Buttons & Interactions</p>
                <p className="text-xs text-gray-300/70">
                  Hover, focus and click states included
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
        <h3 className="text-xl font-semibold mb-6">Components Showcase</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Card
              key={i}
              title={c.title}
              description={c.description}
              image={c.image}
              onCta={() => showToast(`${c.title} — opened preview`)}
            />
          ))}
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-6 sm:px-8 py-8 text-center text-sm text-gray-300/80">
        © {new Date().getFullYear()} Abdullah UI — Built with React, Tailwind &
        Framer Motion
      </footer>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Abdullah UI"
      >
        <p className="mb-4">
          This customizable UI kit is responsive, animated and ready to use in
          projects. Use the components via the{" "}
          <code className="rounded px-1 bg-white/6 text-xs">
            src/components
          </code>{" "}
          folder.
        </p>
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={() => {
              setIsModalOpen(false);
              showToast("Enjoy the kit!");
            }}
          >
            Awesome — thanks
          </Button>
        </div>
      </Modal>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed right-6 bottom-6 bg-white/8 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl shadow-lg text-sm text-white"
        >
          {toast.text}
        </motion.div>
      )}
    </div>
  );
}
