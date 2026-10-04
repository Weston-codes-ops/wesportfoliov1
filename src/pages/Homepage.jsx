import { useState } from 'react'
import { Link } from 'react-router'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'
import WestonsImage from '../assets/images/Weston.jpg'
import ContactDrawer from '../components/ContactDrawer'

export default function Homepage() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return(
<section className='grid grid-cols-1 md:grid-cols-2 h-screen'>
    <ContactDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    <motion.div
      className='p-6 h-screen'
      initial={{ x: -48, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className='ml-7 mt-4'>
        <Link to="/">
          <Home size={32} />
        </Link>
      </div>
      <div className='flex flex-col p-4 my-48'>
        <div className='justify-center items-center flex flex-col'>  
      <h1 className='text-2xl font-inter font-semibold'>WESTON SMITH</h1>
    
      <p className='font-roboto'>I love tech and creativity</p>
      </div>
      <nav className='flex flex-row mt-4 justify-center space-x-4'>
        <Link to="/portfolio" className='text-black underline hover:text-blue-400 active:text-purple-600'>portfolio</Link>
        <Link to="/about" className='text-black underline hover:text-blue-400 active:text-purple-600'>about</Link>
        <button
          onClick={() => setDrawerOpen(true)}
          className='text-black underline hover:text-blue-400 active:text-purple-600'
        >
          contacts
        </button>
      </nav>
      </div>

    </motion.div>
    <motion.div
      className='bg-zinc-900 p-4 h-screen ml-16 w-xl'
      initial={{ x: -48, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
    >
      <div className='flex justify-center items-center h-full'>
        <img src={WestonsImage} alt="Weston's image" className="object-cover rounded-lg shadow-lg" />
      </div>
    </motion.div>
</section>
  )

}
