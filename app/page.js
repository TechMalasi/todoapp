import Image from "next/image";
import { Ingrid_Darling } from "next/font/google";
import AddNewToDo from "./add-task-to-do";
import ToDoList from "./to-do-list";

const addTask=()=>{
  console.log("Adding..... Task")
}

export default function Home() {
 return  <div className="border-2 mx-auto text-center w-[700px]">

    <AddNewToDo/>
    <ToDoList/>

  </div>;
}
