import React from "react";
import Shimmer from "./Shimmer";
class UserClass extends React.Component {

    //We write super(props) in class components to pass props to the parent React.Component constructor, which initializes this.props.
    //This allows us to access props inside the constructor and throughout the component using this.props.
    //super(props) initializes the parent class (React.Component) with those props.
    //After that, you can safely use this.props.name anywhere in the User class (like in render()).
    constructor(props){
        // console.log("child2Constructor");
        super(props);  //muat call super constructor before using the 'this' key
        this.state={
            count1 : 20,
            salary : 50000,
            githubData:{},
        }
    }

    // i can also make the componentDidMount itself as async,but not recommended

    componentDidMount()
    {
        // console.log("child2Mount")

        let apiCall = async () => {

            const data = await fetch("https://api.github.com/users/suryam13");
            const json = await data.json();
            //  console.log(json)

            //updating the state variable 
            this.setState(
                {
                    githubData:json
                }
            )
        }

        apiCall();

    }

    render(){
        // console.log("child2Render");
        // const {name} = this.props;   // extracting from props received from the component
        // const {count1} = this.state; //extracting from the state variable

        //destructuring githubData

        //show casing shimmer UI when the object is empty
        //    if (Object.keys(this.state.githubData).length === 0)
        //      return <Shimmer />

        const{name,avatar_url} = this.state.githubData;
        return (
            <div className="user-card w-[250px] p-4 m-4  bg-[#fff3cd] rounded-2xl shadow-2xl hover:bg-[#facc15] hover:scale-[1.03]  transition-all duration-300 ease-in-out">
       

            {/* <h2>Name : {this.props.name}</h2>
            <h3>Salary : {this.state.salary}</h3> */}
            <h2> Name : {name}</h2>
            <img src={avatar_url} style={{width:100,height:100}}/>
            <h3>Salary : {this.state.salary}</h3>
            <button onClick={ ()=> {
                this.setState(
                    {
                        salary:this.state.salary+1000
                    }
                )
            } } className=" my-[5px] w-[100px] bg-green-200 hover:bg-green-300 text-black rounded-xl transition-all duration-300 shadow-md hover:shadow-lg "> IncSalary : </button>

            <h3>Location : Mumbai</h3>
            <h4>Contact : @suryamdec13</h4>
            </div>
        );
    }
}

export default UserClass;
//This is a Class Based Component


