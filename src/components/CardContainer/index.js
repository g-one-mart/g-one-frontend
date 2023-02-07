import "./index.css"
import Card1 from '../Cards/Card1'

const Component = () =>{

    var products =[
        {name:"Boat Headset",
          originalPrice:"900",
          priceAfterDiscount:"599" ,
          imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        },
        {name:"Boat Headset",
          originalPrice:"900",
          priceAfterDiscount:"599" ,
          imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        },
        {name:"Boat Headset",
          originalPrice:"900",
          priceAfterDiscount:"599" ,
          imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        },
        {name:"Boat Headset",
          originalPrice:"900",
          priceAfterDiscount:"599" ,
          imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        },
        {name:"Boat Headset",
        originalPrice:"900",
        priceAfterDiscount:"599" ,
        imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        },
        {name:"Boat Headset",
          originalPrice:"900",
          priceAfterDiscount:"599" ,
          imgUrl:"https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
        }
    ];

    return (<>
             <div className="cardContainer-div">
                <h3 style={{marginLeft:"10px"}}>Electronics</h3>
                <hr/>
                <div className="cardContainer">
                    {
                        products.map((product)=>(
                            <Card1 product={product}/>
                        ))
                    }
                </div>
             </div>
        </>);
}

export default Component;