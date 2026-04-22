"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {motion} from 'motion/react'



export default function Navbar(){

  const location = usePathname();

  const handleContactClick = (e) => {
    if (location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

return(
<motion.nav
initial={{y:-100, opacity:0}}
animate={{y:0, opacity: 1}}
transition={{duration:0.6, ease:"easeOut"}}
className="fixed top-0 left-0 right-0 z-50"
>
<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
  <div></div>
  <div className="flex gap-8">
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/" className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-accent/10">
        Home
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
      </Link>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/blog" className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-accent/10">
        Blog
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
      </Link>
    </motion.div>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/#contact" onClick={handleContactClick} className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-accent/10">
        Contact
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full"></span>
      </Link>
    </motion.div>
  </div>
</div>

</motion.nav>
);

}