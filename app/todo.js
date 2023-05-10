"use client"
import React from 'react'
import { useRouter } from "next/navigation";




const updateTask = async (id, isCompleted,router) => {
  await fetch("http://localhost:8089/api/todo/update", {
    method: "POST",
    "mode":"no-cors",
    body: JSON.stringify({ id, isCompleted}),
  });

  router.refresh();


};

const deleteTask = async (id,router) => {
  await fetch("http://localhost:8089/api/todo/delete", {
    method: "POST",
    "mode":"no-cors",
    body: JSON.stringify({id}),
  });

  router.refresh();


};



const ToDo = ({task}) => {
  let router = useRouter();
    return (
        <div key={task.id} className="w-[600px] border-0 flex flex-row">
          <input
            type="checkbox"
            className="mx-4 p-1 text-sm"
            onChange={(e) => updateTask(task.id, e.target.checked,router)}
            checked={task.isCompleted}
          />
          <div className="text-lg w-[100%] border-0">{task.title} [ {task.isCompleted?'Completed':'Pending'}]</div>


          <button className="mx-10 border-2 rounded-sm px-5" onClick={()=>{deleteTask(task.id,router)}}>Delete</button>
        </div>
      );
}

export default ToDo