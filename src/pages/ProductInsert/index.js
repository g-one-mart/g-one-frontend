import React from 'react';
import {useState} from 'react';
import './index.css' ;
const Component = ()=> {
    const [productname, setProductName] = useState("");
const [productprice,setProductPrice] = useState("");
const [productdiscription, setProductDiscription] = useState("");
const [allEntry, setAllEntry] = useState([]);

 const submitForm = ()=>{
    const newEntry = {text1: text1, text2: text2, text3: text3,};
    setAllEntry([...allEntry, newEntry]);
 }
  return (
    <>
    <div>
      
      
      <form action="" onSubmit={submitForm} className="form">
           <div className="Login">
           <h1>Add A Product</h1>
        </div>
        <div>
            
                
    
                <input type="text"  className="mail" name="text1" autoComplete="off" 
                value={text1}
                onChange={(e)=> setProductName(e.target.value)}
                placeholder="Enter Product Name"
                />
            
                <input type="text" className="pass" name="text2" id="password" autoComplete="off"
                value={text2}
                onChange={(e)=>setProductPrice(e.target.value)}
                placeholder="Enter Product Price"
                />
                <input type="text3" className="pass" name="text3" id="password" autoComplete="off"
                value={text3}
                onChange={(e)=>setProductDiscription(e.target.value)}
                placeholder="Enter Product Description"
                />
            </div>
            <button type="submit" className="butt">Add Product</button>
           </form>
    </div>
    </>
  )
}

export default Component;
