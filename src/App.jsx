import './index.css'
import Homepage from './pages/Homepage'
import { BrowserRouter as Router,Routes, Route } from 'react-router'
import Aboutpage from './pages/Aboutpage'
import Portfoliopage from './pages/Portfoliopage'


function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<Aboutpage />} />
                <Route path='/portfolio' element={<Portfoliopage/>}/>
            </Routes>
        </Router>
       
    );

}

export default App
