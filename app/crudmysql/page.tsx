import React from "react"
import executeQuery from "./mysqldb"

 const Page = async () =>  {

const result = await executeQuery("select * from student", [])
console.log("Rezultatul este:", result)
    return (
    
    <div>
    {JSON.stringify(result)}
    <table className="table-auto border-spacing-2 border border-collapse  border-cyan-50 border-separate">
       <tbody>
        <tr>
            <th  className="border border-slate-700">Name</th>
            <th  className="border border-slate-700">Age</th>
            <th  className="border border-slate-700">Location</th>
            <th  className="border border-slate-700">Id</th>
        </tr>
       {result.map(h => (<tr key={h.id}><td className="border border-slate-700">{h.name}</td><td className="border border-slate-700">{h.age}</td><td className="border border-slate-700">{h.location}</td><td className="border border-slate-700">{h.id}</td></tr>))}


        </tbody>
    </table>
    
    </div>
    
    )
}

export default Page;