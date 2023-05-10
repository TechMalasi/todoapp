import { addTask } from "./localdb";

export default function handler(req, res) {
  if (req.method === "POST") {
    let data = req.body;

    addTask(data);

    res.status(200).json({ msg: "success", data: data });
  } else if (req.method === "GET") {
    res.status(200).json({ msg: "This is get API" });
  }
}
