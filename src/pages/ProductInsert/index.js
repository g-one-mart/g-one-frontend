import React from 'react';
// import {useState} from 'react';
import './index.css' ;
const Component = ()=> {
//     const [productname, setProductName] = useState("");
// const [productprice,setProductPrice] = useState("");
// const [productdiscription, setProductDiscription] = useState("");
// const [allEntry, setAllEntry] = useState([]);

//  const submitForm = ()=>{
//     const newEntry = {ranj: ranj, gone: gone, fron: fron,};
//     setAllEntry([...allEntry, newEntry]);
//  }
  return (
    <>
    <div>
      
      
      <form action=""  className="product">
           <div className="Login">
           <h1>Add A Product</h1>
        </div>
        <div>
            
                
    
                <input type="text"  className="ranj" name="ranj" autoComplete="off" 
                
                // onChange={(e)=> setProductName(e.target.value)}
                placeholder="Enter Product Name"
                />
            
                <input type="text" className="gone" name="gone" id="password" autoComplete="off"
                
                // onChange={(e)=>setProductPrice(e.target.value)}
                placeholder="Enter Product Price"
                />
                <input type="text" className="fron" name="fron" id="password" autoComplete="off"
                
                // onChange={(e)=>setProductDiscription(e.target.value)}
                placeholder="Enter Product Description"
                />
            </div>
            <button type="submit" className="add">Add Product</button>
           </form>
    </div>
    </>
  )
}

export default Component;
