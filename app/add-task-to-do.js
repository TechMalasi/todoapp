"use client"
import React from 'react'
import { useRouter } from "next/navigation";



const addTask = async (router) => {

  let title = document.querySelector("#task");

  await fetch("http://localhost:8089/api/todo/addtask",{
    method: "POST",
    "headers":{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({title:title.value}),

  });

  router.refresh();
  // let result = await x.json();

  // console.log("Response",result.data[0].title);
};



const AddNewToDo = () => {
  let router = useRouter()
  return (
    <div>
    <input className="rounded-md w-80 p-2 my-4 border-2" type="text" id="task"/>
    <button onClick={()=>addTask(router)} className="border-2 px-4 py-2 mx-4 rounded-md">Add</button>

    </div>
  )
}

export default AddNewToDo