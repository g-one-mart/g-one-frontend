import "./index.css"

const Component = () =>{
    return (<>
        <div className="navBar">
            <div>   
                <img src="logo.jpeg" width="50px" height="50px"/>
            </div>
            <div className="searchBox">
                <div>
                    <input type="text" className="searchInput" placeholder="Search products, brands..."/>
                </div>
                <div>
                    <button className="searchButton"><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>

            </div>
            <div>
                <i class="fa fa-user fa-2x" aria-hidden="true"></i>
            </div>
        </div>      
    </>);
}

export default Component;