import React from "react";
import ToDo from "./todo";

const getList = async () => {
  let list = await fetch("http://localhost:8089/api/todo/localdb", {
    cache: "no-store",
  });
  let res = await list.json();

  new Promise((resolve, reject) => {

    setTimeout(()=>{

    },5000)

  })

  console.log("res .....", res);
  return res;
};

const ToDoList = async () => {
  let db_tasks = await getList();

  return (
    <div className="my-6">
      <ul className="list-none">
        {db_tasks &&
          db_tasks.map((item, index) => {
            return (
              <div key={index}>
                <li className="my-4 p-0">
                  <ToDo task={item} />
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
