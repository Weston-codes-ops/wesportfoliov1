import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Mail } from "lucide-react";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL
const CONTACT_EMAIL_DISPLAY =
  import.meta.env.VITE_CONTACT_EMAIL_DISPLAY
const LINKEDIN_URL =
  import.meta.env.VITE_LINKEDIN_URL;
const EMAIL_SUBJECT = encodeURIComponent("Hi Weston, let's connect");
const EMAIL_BODY = encodeURIComponent(
  "Hi Weston,\n\nI'd love to reach out about..."
);

export default function ContactDrawer({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 left-0 h-full w-80 max-w-[85%] bg-white z-50 shadow-2xl border-r border-gray-100 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close contact panel"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 p-6 flex flex-col gap-4">
              <p className="text-gray-600 mb-2 text-sm">
                Reach out through any of the channels below.
              </p>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Briefcase size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-500">Connect with me</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`}
                className="flex items-center gap-4 p-4 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-zinc-800 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-500">{CONTACT_EMAIL_DISPLAY}</p>
                </div>
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
