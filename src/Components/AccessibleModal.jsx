import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccessibleModal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-6 rounded-lg"
            role="dialog"
            aria-modal="true"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              aria-label="Close modal"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
