import "./index.css"
import Card1 from '../Cards/Card1'
const Component = () =>{
    return (<>
             <div className="cardContainer-div">
                <h3 style={{marginLeft:"10px"}}>Electronics</h3>
                <hr/>
                <div className="cardContainer">
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                    <Card1 />
                </div>
             </div>
        </>);
}

export default Component;