import { useState } from "react";
import { Home } from "lucide-react";
import { Link } from "react-router";
import AccordionItem from "../components/AccordionItem";
import { aboutFaq } from "../lib/contentLoader";


export default function Aboutpage() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

return (
    <section>
        <div className="ml-13 mt-10">
            <Link to="/">
            <Home size={32} />
            </Link>
        </div>

       <div className="h-screen mx-96 flex flex-col space-y-7">
        <div className='flex flex-col mx-30 mt-5 items-center space-y-2'>
            <p className='underline pr-3'>About me</p>
            <h1 className='text-xl font-semibold font-inter'>WESTON SMITH</h1>
        </div>

        <div className='space-y-1'>
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
    </section>
)

}