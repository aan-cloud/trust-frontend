import { Routes, Route } from 'react-router-dom'; 
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={(<Home />)} />
            <Route path='/cart' element={(<Cart />)} />
        </Routes>
    );
};

export default AppRoutes;