import React from "react";
import "./index.css";

const CheckoutPage = () => {
     
     return (
          <>
               <div className="container-fluid">
                    {/* {Data.map(post => {
                         return ( */}
                              <div className="addressbox">
                                   <div className="addressheading">
                                        <h2>
                                             Delivery Address
                                        </h2>
                                   </div>
                                   <div className="addressbody">
                                        <p>
                                             Haldia, West Bengal, India
                                        </p>
                                        <hr/>
                                        <p>
                                             Patna, Bihar, India
                                        </p>
                                        <hr/>
                                        <p>
                                             Delhi, India
                                        </p>
                                        <hr/>
                                        <p>
                                             Mumbai, India
                                        </p>
                                   </div>
                              </div>
                         {/* )
                    })} */}
               </div>
               <div className="container-fluid">
                    {/* {Data.map(post => {
                         return ( */}
                              <div className="coproductbox">
                                   <div className="coproductheading">
                                        <h2>
                                             Your Cart
                                        </h2>
                                   </div>
                                   <div className="coproductbody">
                                        <table id="coproductcart">
                                             <tr>
                                                  <td>
                                                       <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="coproductimage"/>
                                                  </td>
                                                  <td>
                                                       <p>
                                                            Boat Headset
                                                       </p>
                                                  </td>
                                                  <td>
                                                       5 pcs
                                                  </td>
                                                  <td>
                                                       &#8377; 599
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="coproductimage"/>
                                                  </td>
                                                  <td>
                                                       <p>
                                                            Boat Headset
                                                       </p>
                                                  </td>
                                                  <td>
                                                       5 pcs
                                                  </td>
                                                  <td>
                                                       &#8377; 599
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="coproductimage"/>
                                                  </td>
                                                  <td>
                                                       <p>
                                                            Boat Headset
                                                       </p>
                                                  </td>
                                                  <td>
                                                       5 pcs
                                                  </td>
                                                  <td>
                                                       &#8377; 599
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td>
                                                       <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="coproductimage"/>
                                                  </td>
                                                  <td>
                                                       <p>
                                                            Boat Headset
                                                       </p>
                                                  </td>
                                                  <td>
                                                       5 pcs
                                                  </td>
                                                  <td>
                                                       &#8377; 599
                                                  </td>
                                             </tr>
                                        </table>
                                        <hr/>
                                        <table id="coproducttotalprice">
                                             <tr>
                                                  <td className="copricehead">
                                                       <h4>
                                                            Total Price
                                                       </h4>
                                                  </td>
                                                  <td className="copricebody">
                                                       &#8377; 2396
                                                  </td>
                                             </tr>
                                             <tr>
                                                  <td className="copricehead">
                                                       <h4>
                                                            Provided Discount
                                                       </h4>
                                                  </td>
                                                  <td className="copricebody">
                                                       &#8377; 196
                                                  </td>
                                             </tr>
                                             <hr/>
                                             <tr>
                                                  <td className="copricehead">
                                                       <h4>
                                                            You Pay
                                                       </h4>
                                                  </td>
                                                  <td className="copricebody">
                                                       &#8377; 2200
                                                  </td>
                                             </tr>
                                        </table>
                                        <hr/>
                                        <div id="coptbuttonpos">
                                             <button id="coptpbutton">
                                                  Proceed to Payment
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         {/* )
                    })} */}
               </div>
          </>
     );
}

export default CheckoutPage;