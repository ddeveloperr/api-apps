import express from "express";


const app = express();

app.get("/", (req, res) => res.json({status: "NTask API"}));

app.listen(process.env.PORT, process.env.IP, () => console.log(`NTask API - Port ${process.env.PORT, process.env.IP}`));
