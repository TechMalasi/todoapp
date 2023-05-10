import { deleteTask } from "./localdb";

export default function handler(req, res) {
  // console.log("m===",req.method)
  if (req.method == "POST") {
    console.log("enter update", req.body);

    deleteTask(JSON.parse(req.body));

    res.status(200).json({status:true,msg:"Task Deleted Successfully", data: req.body });
  }
}
