import {Routes ,Route} from 'react-router-dom'
import './index.css';
import HomePage from "../HomePage"
import ProductPage from "../ProductPage"
import CartPage from "../CartPage"
import OrdersPage from "../OrdersPage"
import CheckoutPage from "../CheckoutPage"

const Component = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/orders" element={<OrdersPage/>} />
                <Route path="/checkout" element={<CheckoutPage/>} />
            </Routes>
        </>
    );

}

export default Component;



