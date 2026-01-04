import fs from "node:fs";
export default function handler(req, res) {
  fs.readdir("blogdata", (err, data) => {
    console.log(data);
    data.forEach((item) => {
      console.log("items:", item);
      fs.readFile(("/blogdata", +item), () => {});
    });
    res.status(200).json(data);
  });
}
