import {useId} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { ChevronDown } from 'lucide-react';

export default function AccordionItem({question, answer, isOpen, onToggle}) {
    const contentId = useId();
    const buttonId = useId();

    return(
        <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-200 overflow-hidden bg-gray-300">
        <button
          id={buttonId}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          type='button'
          className="w-full flex justify-evenly items-center p-4 font-normal text-center text-black hover:bg-gray-50 transition-colors"
        >
          <span className='text-center'>{question}</span>
          <motion.span
            animate={{
              rotate: isOpen ? 180 : 0,
              y: [0, -5, 0],
            }}
            transition={{
              rotate: { type: "spring", stiffness: 260, damping: 20 },
              y: {
                duration: 30,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            <ChevronDown />
          </motion.span>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden w-full "
          >
            <div className="p-4 bg-gray-50 text-gray-600 border-2 border-zinc-800 w-full text-center">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    )

}