import React from "react"
import executeQuery from "./mysqldb"

 const Page = async () =>  {

const result = await executeQuery("select * from student", [])
console.log("Rezultatul este:", result)
    return (
    
    <div>
    {JSON.stringify(result)}
    <table>
       <tbody>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Id</th>
        </tr>
        {result.map(h => (<tr key={h.id}><td>{h.name}</td><td>{h.age}</td><td>{h.location}</td><td>{h.id}</td></tr>))}


        </tbody>
    </table>
    
    </div>
    
    )
}

export default Page;