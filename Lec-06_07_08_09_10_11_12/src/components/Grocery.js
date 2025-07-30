import Shimmer from "./Shimmer";
const Grocery = () => {

    return(
        <div>
             <h1> This is supposed to be another big Component which needs to be bundled !</h1>
             <h2> This would be done by applying lazy loading to reduce the execution time taken by the browser to load </h2>
             
             <Shimmer />
        </div>

    );
}


export default Grocery