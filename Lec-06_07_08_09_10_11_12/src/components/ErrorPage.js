import { useRouteError} from "react-router-dom";

const ErrorPage = ()=>{

    const err = useRouteError();

    console.log(err); //see on the console the object received
    return (
        
        <div>
            <h1>Oops,we met with an error {err.status} : {err.statusText} </h1>
        </div>
    )
}

export default ErrorPage;