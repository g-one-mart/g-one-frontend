import "./index.css"

const Component = () =>{
    return (<>
        <div class="card1">
            <div style={{padding:"10px 10px 10px 10px"}}>
                <img src="https://cdn.shopclues.com/images1/thumbnails/112930/320/320/151885535-112930695-1653064733.jpg" width="240px" height="240px"/>
            </div>
            <div className="cardTitle">
                <h5>
                    Boat Headphone
                </h5>
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"20px",marginTop:'4px'}}>
                <div style={{color:"white",padding:"4px 14px"}} class="discountTag">
                    20%
                </div>
                <div style={{marginRight:"20px"}}>
                  <span style={{fontSize:"24px",fontWeight:"600"}}>
                  ₹599  
                  </span>                  
                  &nbsp;
                    <span style={{fontSize:"18px",color:"rgba(100,100,100)"}}>
                      <strike>₹900</strike>
                    </span>
                </div>
            </div>
        </div>
    </>);
}

export default Component;