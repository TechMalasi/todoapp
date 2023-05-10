import { promises as fs } from "fs";
import path from "path";

import { v4 } from "uuid";
export const updateTask = async (data) => {
  // console.log("d====",data);
  // return;

  var db_tasks = [];

  const jsonDirectory = path.join(process.cwd(), "json");
  db_tasks = await fs.readFile(jsonDirectory + "/db.json", "utf8");


  if(db_tasks)
  db_tasks = JSON.parse(db_tasks);


  let arr = [];

  db_tasks.map((item) => {
    let newtask = { ...item };

    if (item.id === data.id)
    {
        newtask = {
            id: item.id,
            title: item.title,
            isCompleted: data.isCompleted,
          };
      }

    arr.push(newtask);
  });


  await fs.writeFile(jsonDirectory + "/db.json", JSON.stringify(arr));

};

export const addTask = async (data) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const tasks = await fs.readFile(jsonDirectory + "/db.json", "utf8");
  let all_tasks=[];

  if(tasks)
  all_tasks = JSON.parse(tasks);

  let task = {
    id: v4(),
    title: data.title,
    isCompleted: false,
  };

  all_tasks.push(task);
  await fs.writeFile(jsonDirectory + "/db.json", JSON.stringify(all_tasks));

};

export const deleteTask = async (data) => {
  var db_tasks = [];

  const jsonDirectory = path.join(process.cwd(), "json");
  db_tasks = await fs.readFile(jsonDirectory + "/db.json", "utf8");

  db_tasks = JSON.parse(db_tasks);
  let arr = [];

  arr = db_tasks.filter((item) => {
    return item.id !== data.id;
  });



  await fs.writeFile(jsonDirectory + "/db.json", JSON.stringify(arr));

};

export default async function handler(req, res) {

    let result=[];
  const jsonDirectory = path.join(process.cwd(), "json");
  const db_tasks = await fs.readFile(jsonDirectory + "/db.json", "utf8");

  if(db_tasks)
   result = JSON.parse(db_tasks);

   console.log("m===", db_tasks);

  res.status(200).json(result);
}
