import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './navbar';
import { Home } from './home';
import {ShopcontextProvider} from '../Context/shop-context';
import { Cart } from '../pages/cart';
import Contact from './Contact';
import Checkout from '../pages/checkout';

export default function App() {
    return (
        <div className='App'>
            <ShopcontextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                    <Contact />
                </Router>
            </ShopcontextProvider>
        </div>
    );
}