import React, { Component } from "react";
import "./index.css";

class Cart extends Component {

     constructor(props) {
          super(props);
          this.state = {
          clicks: 0,
          show: true
          };
     }
     
     IncrementItem = () => {
          this.setState({ clicks: this.state.clicks + 1 });
     }
     DecreaseItem = () => {
          if(this.state.clicks === 0){
               this.setState({
                    clicks:0
               });
          }else {
               this.setState({
                    clicks: this.state.clicks - 1
               });
          }
     }
     
     render() {
          return (
               <>
                    <div id="cartpage">
                         <div id="cartproductoutbox">
                              <div id="cartproducts">
                                   <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="cartproductimage"/>
                                   <div id="cartproductrm">
                                        <h1 id="cartproductname">
                                             Boat Headset
                                        </h1>
                                        <p id="cartproductdeliveryposition">
                                             <span id="cartproductdelivery1">
                                                  Delivery expected by <span id="cartproductdelivery2">7th Feb</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span id="cartproductprice1">
                                                  &#8377; 599 <span id="cartproductprice2">&#8377; 900</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button onClick={this.DecreaseItem} id="cartproductbutton1" type="button">
                                                       -
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton2" type="button">
                                                       { this.state.clicks }
                                                  </button>
                                             </span>
                                             <span>
                                                  <button onClick={this.IncrementItem} id="cartproductbutton3" type="button">
                                                       +
                                                  </button>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button id="cartproductbutton4" type="button">
                                                       Cancel
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton5" type="button">
                                                       View
                                                  </button>
                                             </span>
                                        </p>
                                   </div>
                              </div>
                              <div id="cartproducts">
                                   <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="cartproductimage"/>
                                   <div id="cartproductrm">
                                        <h1 id="cartproductname">
                                             Boat Headset
                                        </h1>
                                        <p id="cartproductdeliveryposition">
                                             <span id="cartproductdelivery1">
                                                  Delivery expected by <span id="cartproductdelivery2">7th Feb</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span id="cartproductprice1">
                                                  &#8377; 599 <span id="cartproductprice2">&#8377; 900</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button onClick={this.DecreaseItem} id="cartproductbutton1" type="button">
                                                       -
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton2" type="button">
                                                       { this.state.clicks }
                                                  </button>
                                             </span>
                                             <span>
                                                  <button onClick={this.IncrementItem} id="cartproductbutton3" type="button">
                                                       +
                                                  </button>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button id="cartproductbutton4" type="button">
                                                       Cancel
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton5" type="button">
                                                       View
                                                  </button>
                                             </span>
                                        </p>
                                   </div>
                              </div>
                              <div id="cartproducts">
                                   <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="cartproductimage"/>
                                   <div id="cartproductrm">
                                        <h1 id="cartproductname">
                                             Boat Headset
                                        </h1>
                                        <p id="cartproductdeliveryposition">
                                             <span id="cartproductdelivery1">
                                                  Delivery expected by <span id="cartproductdelivery2">7th Feb</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span id="cartproductprice1">
                                                  &#8377; 599 <span id="cartproductprice2">&#8377; 900</span>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button onClick={this.DecreaseItem} id="cartproductbutton1" type="button">
                                                       -
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton2" type="button">
                                                       { this.state.clicks }
                                                  </button>
                                             </span>
                                             <span>
                                                  <button onClick={this.IncrementItem} id="cartproductbutton3" type="button">
                                                       +
                                                  </button>
                                             </span>
                                        </p>
                                        <p>
                                             <span>
                                                  <button id="cartproductbutton4" type="button">
                                                       Cancel
                                                  </button>
                                             </span>
                                             <span>
                                                  <button id="cartproductbutton5" type="button">
                                                       View
                                                  </button>
                                             </span>
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div id="cartprices">
                              <div id="cartprice1">
                                   <span>
                                        Delivery Address:
                                   </span>
                                   <input type="text" placeHolder="Pincode" id="cartpricepinbox"/>
                                   <p>
                                        <input type="text" placeHolder="Address" id="cartpriceaddressbox"/>
                                   </p>
                              </div>
                              <hr/>
                              <table id="carttableprice">
                                   <tr>
                                        <td>
                                             Price (2 products)
                                        </td>
                                        <td className="carttablepriceright">
                                             &#8377; 2700
                                        </td>
                                   </tr>
                                   <tr>
                                        <td>
                                             Discount
                                        </td>
                                        <td className="carttablepriceright">
                                             &#8377; 699
                                        </td>
                                   </tr>
                                   <tr>
                                        <td>
                                             Delivery Charges
                                        </td>
                                        <td className="carttablepriceright">
                                             0
                                        </td>
                                   </tr>
                              </table>
                              <hr id="carttphr"/>
                              <table id="carttablepricetotal">
                                   <tr>
                                        <td>
                                             Total Amount
                                        </td>
                                        <td className="carttablepriceright">
                                             &#8377; 2100
                                        </td>
                                   </tr>
                              </table>
                         </div>
                    </div>
               </>
          );
     }
}

export default Cart;