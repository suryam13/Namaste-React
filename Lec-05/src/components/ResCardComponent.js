
const ResCardComponent = (props) => {

    // or either we can destructure the props
    // const {data} = props;

    //or either we can do it in the parameter list also
    // ({data})
    
    const {data} = props
    //destructuring it in data so now data is a object
    //note the name of the parameter has to be same as what the argument was been passed.

    return (
        <div className='res-card'>

            <img className='res-img' alt='oops :(' src={data.image} />

            <h4 className='shop-text'> {props.data?.resName} </h4>
            <h4 className='shop-text'> {data.menuName} </h4>
            <h4 className='shop-text'> {data.rating} </h4>
            

        </div>
    );
}

export default ResCardComponent;
