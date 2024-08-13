import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BloodCompare from './pages/BloodCompare';
import BloodAPositive from './pages/BloodAPositive';
import BloodANegative from './pages/BloodANegative';
import BloodBPositive from './pages/BloodBPositive';
import BloodBNegative from './pages/BloodBNegative';
import BloodABPositive from './pages/BloodABPositive';
import BloodABNegative from './pages/BloodABNegative';
import BloodOPositive from './pages/BloodOPositive';
import BloodONegative from './pages/BloodONegative';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/compare" element={<BloodCompare/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path="/bloodA+" element={<BloodAPositive/>} />
                <Route path="/bloodA-" element={<BloodANegative />} />
                <Route path="/bloodB+" element={<BloodBPositive />} />
                <Route path="/bloodB-" element={<BloodBNegative />} />
                <Route path="/bloodAB+" element={<BloodABPositive />} />
                <Route path="/bloodAB-" element={<BloodABNegative />} />
                <Route path="/bloodO+" element={<BloodOPositive />} />
                <Route path="/bloodO-" element={<BloodONegative />} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
