import express from "express";
import path from "path";
const app = express();

app.get("/", (req, res) => {
  // res.json({message:'you are requesting for home route'})

  // console.log(path.resolve())

  //   const dir = path.resolve();
  //   const url = path.join(dir, "./index.html");

  const hero = "batman";

  //   res.sendFile(url,hero);

  const marvel = {
    name: "infinity war",
    showprice: 500,
  };

  res.render("./index.ejs", { marvel });
});

const port = 1000;

app.listen(port, () => console.log(`server is running on port ${port}`));
