import {Routes ,Route} from 'react-router-dom'
import './index.css';
import HomePage from "../HomePage"
import ProductPage from "../ProductPage"

// import LoginPage from "../LoginPage"
import ProductInsert from "../ProductInsert"

import CartPage from "../CartPage"


const Component = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />

                
                <Route path="/ProductInsert" element={<ProductInsert/>} />
                

                <Route path="/cart" element={<CartPage/>} />
               

            </Routes>
        </>
    );

}

export default Component;



