import db from "../../../firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export default async (req, res) => {
  //  create get request
  if (req.method === "GET") {
    res.status(200).json({ name: "welcome to the blog entry api" });
  }
  if (req.method === "POST") {
    if (req.body.title && req.body.content) {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: req.body.title,
        content: req.body.content,
        html: req.body.html,
        fid: req.body.fid,
        date: req.body.date,
        author: req.body.author,
      });
      res
        .status(200)
        .json({ message: `document written with id ${docRef.id}` });
    } else {
      res.status(400).json({ message: "Title and Content Mission" });
    }
  }
};
