"use server"
import { revalidatePath } from "next/cache"
import executeQuery from "./crudmysql/mysqldb"


export const mysqlserveraction = async (prevState, formData) => {

    const name2 = formData.get("name1")
    const age2 = formData.get("age1")
    const location2 = formData.get("location1")
    const bname = formData.get("submit")


    if (bname === "insert") {
        if (name2 != "" && age2 != "" && location2 != "") {
            const result = await executeQuery("insert into student(name, age, location) values(?,?,?)", [name2, age2, location2])


            if (result.affectedRows) {
                revalidatePath("/crudmysql/insertuser")
                return { message: "Record inserted." }
            }
            else {
                revalidatePath("/crudmysql/insertuser")
                return { message: "Record not inserted." }
            }
        }
        else {
            revalidatePath("/crudmysql/insertuser")
            return { message: "Field cannot be empty!" }
        }
    }
    else if (bname === "update") {
        if (name2 != "" && age2 != "" && location2 != "") {
            const result = await executeQuery(
                "update student set name=?, age=?, location=? where name=?",
                [name2, age2, location2, name2]
            );
            if (result.affectedRows) {
                revalidatePath("/crudmysql/insertuser");
                return { message: "Record Updated" };
            } else {
                revalidatePath("/crudmysql/insertuser");
                return { message: "Record not Updated" };
            }
        } else {
            revalidatePath("/crudmysql/insertuser");
            return { message: "Field can not be empty" };
        }
    } else if (bname === "delete") {
        if (name2 != "") {
            const result = await executeQuery("delete from student where name=?", [
                name2,
            ]);
            if (result.affectedRows) {
                revalidatePath("/crudmysql/insertuser");
                return { message: "Record Deleted" };
            } else {
                revalidatePath("/crudmysql/insertuser");
                return { message: "Record not Deleted" };
            }
        } else {
            revalidatePath("/crudmysql/insertuser");
            return { message: "Student name can not be empty" };
        }
    }
}