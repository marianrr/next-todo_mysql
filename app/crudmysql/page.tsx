import React from "react"
import executeQuery from "./mysqldb"

 const Page = async () =>  {

const result = await executeQuery("select * from student", [])

    return (
    
    <div>
    {JSON.stringify(result)}
    
    </div>
    
    )
}

export default Page;