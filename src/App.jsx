import './index.css'
import Homepage from './pages/Homepage'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router'
import Aboutpage from './pages/Aboutpage'
import Portfoliopage from './pages/Portfoliopage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function AnimatedRoutes() {
    const location = useLocation()
    const shouldReduceMotion = useReducedMotion()
    const isProjectRoute = location.pathname === '/portfolio'
        || location.pathname === '/projects'
        || location.pathname.startsWith('/projects/')

    return(
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={location.pathname}
                initial={isProjectRoute ? { opacity: 0, y: shouldReduceMotion ? 0 : 14 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={isProjectRoute ? { opacity: 0, y: shouldReduceMotion ? 0 : -8 } : undefined}
                transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: 'easeOut' }}
            >
            <Routes location={location}>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path="/portfolio" element={<Portfoliopage />} />
                <Route path="/projects" element={<Portfoliopage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            </Routes>
            </motion.div>
        </AnimatePresence>
       
    );

}

function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    )
}

export default App
