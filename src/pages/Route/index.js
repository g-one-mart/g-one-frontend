import {Routes ,Route} from 'react-router-dom'
import './index.css';
import HomePage from "../HomePage"
import ProductPage from "../ProductPage"
import LoginPage from "../LoginPage"
import ProductInsert from "../ProductInsert"
const Component = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/ProductInsert" element={<ProductInsert/>} />
                
            </Routes>
        </>
    );

}

export default Component;



