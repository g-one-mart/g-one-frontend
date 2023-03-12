import React from 'react';
import "./index.css";

const OrdersPage = (props) => {

     const renderTable = ({orderData}) => {
          if(orderData){
               return orderData.map((item) => {
                    return(
                         <tr key={item.id}>
                              <td className="orderbody">
                                   <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" alt="Product" id="orderproductimage"/>
                              </td>
                              <td className="orderbody">
                                   Boat Headset
                              </td>
                              <td className="orderbody">
                                   1
                              </td>
                              <td className="orderbody">
                                   &#8377; 599
                              </td>
                              <td className="orderbody">
                                   2nd February, 2022
                              </td>
                         </tr>
                    )
               })
          }
     }

     return(
          <div className="container-fluid">
               <table className="table table-hover orderproductoutbox">
                    <thead id="orderproducts">
                         <tr id="orderhead">
                              <th className="orderheading">
                                   Product Image
                              </th>
                              <th className="orderheading">
                                   Product Name
                              </th>
                              <th className="orderheading">
                                   Quantity
                              </th>
                              <th className="orderheading">
                                   Price
                              </th>
                              <th className="orderheading">
                                   Order Date
                              </th>
                         </tr>
                    </thead>
                    <tbody>
                         {renderTable(props)}
                    </tbody>
               </table>
          </div>
     )
}

export default OrdersPage;