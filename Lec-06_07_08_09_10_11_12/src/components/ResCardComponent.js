
const ResCardComponent = (props) => {

    // or either we can destructure the props
    // const {data} = props;

    //or either we can do it in the parameter list also
    // ({data})
    
    const {data} = props
    
    //destructuring it in data so now data is a object
    //note the name of the parameter has to be same as what the argument was been passed.

    return (
        <div className='m-4 p-4 w-[250px] h-[400px]  bg-[#fff3cd] rounded-2xl shadow-2xl hover:bg-[#facc15] hover:scale-[1.03]  transition-all duration-300 ease-in-out'>
            
          <div className="ml-[15px]">
            <img className='res-img h-45 w-45 rounded-lg' alt='oops :(' src={data.image} />
            

            <h4 className='shop-text font-bold  py-3'> {props.data?.resName} </h4>
            <h4 className='shop-text'> {data.famousItems.join(',')} </h4>
            <h4 className='shop-text' > {data.rating} stars</h4>
            <h4 className='shop-text'> Price : ₹{data.price}</h4>
            <h4 className=""> Get in  {data.estimatedDelivery}</h4>
            </div>
        </div>
    );
}




//Higher Order Component - a function which takes a component and returns a slightly modified component

export const withPromotedLabel = (Resy) => {
    // console.log(Resy)  //Resy is the component which has to be attached 

    return (props) => { //here we returning a component

        // below we have written a component which is nothing but a function which returns JSX
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg m-1.5 mx-4.5 p-2 z-1"> Promoted </label>
                <Resy {...props} />  
                {/* passing the props as it is to the resCardComponent */}
            </div>
        );
    } 
} 


export default ResCardComponent;
