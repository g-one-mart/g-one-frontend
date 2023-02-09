import {Routes ,Route} from 'react-router-dom'
import './index.css';
import HomePage from "../HomePage"
import ProductPage from "../ProductPage"

import LoginPage from "../LoginPage"
import ProductInsert from "../ProductInsert"

import CartPage from "../CartPage"


const Component = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />

                <Route path="/login" element={<LoginPage/>} />
                <Route path="/ProductInsert" element={<ProductInsert/>} />
                

                <Route path="/cart" element={<CartPage/>} />
>>>>>>> 1efbe0cd7c6a50f5e7ff5026e597cf26cbc8e5d3
            </Routes>
        </>
    );

}

export default Component;



