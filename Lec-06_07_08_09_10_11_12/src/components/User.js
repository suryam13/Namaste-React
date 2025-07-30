import { useState } from "react";

const User = (props) => {

    const [age,setAge]=useState(20);

    return (
        <div className="user-card w-[250px] p-4 m-4  bg-[#fff3cd] rounded-2xl shadow-2xl hover:bg-[#facc15] hover:scale-[1.03]  transition-all duration-300 ease-in-out" >
            <h2>Name : {props.name}</h2>
            <h3>Age : {age}</h3>
            <h3>Location : Mumbai</h3>
            <h4>Contact : @suryamdec13</h4>
        </div>
    )
}

export default User;

//This is a Functional Component

