import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './navbar';
import { Home } from './home';
import { Contact } from '../pages/contact';
import {ShopcontextProvider} from '../Context/shop-context';
import { Cart } from '../pages/cart';


export default function App() {
    return (
        <div className='App'>
            <ShopcontextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/cart' element={<Cart />} />
                    </Routes>
                </Router>
            </ShopcontextProvider>
        </div>
    );
}