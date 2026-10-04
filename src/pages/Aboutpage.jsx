import { useState } from "react";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import AccordionItem from "../components/AccordionItem";
import { aboutFaq } from "../lib/contentLoader";


export default function Aboutpage() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

return (
    <motion.section
        className="min-h-screen"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
    >
        <div className="mx-auto mt-6 w-full max-w-3xl px-5 sm:px-8">
            <Link to="/" aria-label="Home">
            <Home size={32} />
            </Link>
        </div>

       <div className="mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-3xl flex-col space-y-7 px-5 pb-12 pt-5 sm:px-8">
        <div className='mt-5 flex flex-col items-center space-y-2'>
            <p className='underline pr-3'>About me</p>
            <h1 className='text-xl font-semibold font-inter'>WESTON SMITH</h1>
        </div>

        <div className='w-full space-y-1'>
            {aboutFaq.map((faq) => (
                <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}/>
            ))}
        </div>
       </div>
    </motion.section>
)

}