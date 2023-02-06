import "./index.css"
import CardContainer from '../../components/CardContainer'
const Component = () =>{
    return (<>
                <div className="productPage">
                    <div className="productImg">
                        <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" 
                        style={{width:"100%",height:"100%"}} alt="not availabe"/>
                    </div>
                    <div className="productDetails">
                        <h4>Boat Headset..</h4>
                        <div className="itemSold">
                            Item sold : 44
                        </div>
                        <div style={{display:"flex",alignItems:'flex-end',gap:'4px'}}>
                            <div style={{fontSize:"26px",fontWeight:"500"}}>
                                ₹599 
                            </div>                            
                            <div style={{fontWeight:"500",color:"gray",fontSize:"16px",marginBottom:"6px"}}>
                                <strike>
                                    ₹900 
                                </strike>
                                &nbsp;
                                <span style={{color:"green"}}>
                                    20% Off
                                </span>
                            </div>
                        </div>

                        <div className="productDetailsFeatures">
                            <div>
                                Free Delivery
                            </div>
                            <div>
                                1 year warranty
                            </div>                            
                        </div>
                        <div className="productDetailsFeatures">
                            <div>
                                7 days replacement
                            </div>                            
                        </div>

                        <button className="addToCartButton">
                            Add to Cart                            
                        </button>
                    </div>                    
                </div>
                <CardContainer />

            </>);
}

export default Component;