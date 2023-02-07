import {Routes ,Route} from 'react-router-dom'
import './index.css';
import HomePage from "../HomePage"
import ProductPage from "../ProductPage"
import CartPage from "../CartPage"

const Component = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/cart" element={<CartPage/>} />
            </Routes>
        </>
    );

}

export default Component;



