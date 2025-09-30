// const users=;
import { useState } from "react";
const Use=()=>{

    const [users,setUsers]=useState([
    {name:"Alice" , age:40},
    {name:"Bob" , age:45},
    {name:"Ann" , age:30},
    {name:"James" , age:46},]
    )
 
    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    users.map((current,index)=>{
                        return(
                            <li key={index}>
                                {current.name} - {current.age}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Use