"use client"
import mysqldb from "../mysqldb"
import { useFormStatus, useFormState } from "react-dom"
import { mysqlserveraction } from "../../actions"

// http://localhost:3000/crudmysql/insertuser



export default function Page() {
    const { pending } = useFormStatus()
    const initialState = {
        message: null,
    }
    const [state, formAction] = useFormState(mysqlserveraction, initialState)

    return (
        <>

            <p>This is insert user page...</p>


            <form action={formAction} method="post" >
                <input type="text" name="name1" id="Enter student name" className="text-gray-500" />
                <br /><br />
                <input type="text" name="age1" id="Enter student age" className="text-gray-500" />
                <br /><br />
                <input type="text" name="location1" id="Enter student location" className="text-gray-500" />
                <br /><br />
                <div>{state?.message ? <h3>{state?.message}</h3> : null}</div>
                <button type="submit" name="submit" id="submit" value="insert">{pending ? "Inserting..." : "Insert"}</button>
                <br /><br />
                <button
                    type="submit"
                    name="submit"
                    id="submit"
                    value="update"
                >
                    {pending ? "Updating ..." : "Update"}
                </button>
                <br /><br />
                <button
                    type="submit"
                    name="submit"
                    id="submit"
                    value="delete"
                >
                    {pending ? "Deleting..." : "Delete"}
                </button>

            </form>






        </>
    )
}