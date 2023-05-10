import { updateTask } from "./localdb";

export default function handler(req, res) {
  console.log("b===",req.body)
  if (req.method == "POST") {

    updateTask(JSON.parse(req.body));

    res.status(200).json({status:true,msg:"Task updated Successfully", data: req.body });
  }
}
