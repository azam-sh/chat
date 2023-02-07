const express = require("express");
const contactRoutes = require("./contact/routes");
const messageRoutes = require("./message/routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

// const contacts = [
//   {
//     id: 1,
//     name: "Alex",
//     lastname: "Murphy",
//     img: "./bezos.jpg",
//   },
//   {
//     id: 2,
//     name: "Morgan",
//     lastname: "Stone",
//     img: "./rock.jpg",
//   },
//   {
//     id: 3,
//     name: "John",
//     lastname: "Smith",
//     img: "./smith.jpg",
//   },
//   {
//     id: 4,
//     name: "Patrick",
//     lastname: "Kane",
//     img: "./tom.jpg",
//   },
//   {
//     id: 5,
//     name: "Lisa",
//     lastname: "Son",
//     img: "./swift.jpg",
//   },
// ];


app.use("/contacts", contactRoutes.router);
app.use("/messages", messageRoutes.router);

// app.get("/messages", (req: Request, res: Response) => {
//   pool.query("SELECT * FROM messages", (error: any, results: QueryResult) => {
//     if (error) throw error;
//     res.status(200).json(results.rows);
//   });
// });

// app.post("/messages", (req: Request, res: Response) => {
//   const { recieverId, senderId, content } = req.body;
//   pool.query(
//     `INSERT INTO messages ("recieverId", "senderId", "content") VALUES ($1, $2, $3)`,
//     [recieverId, senderId, content],
//     (error: any, results: QueryResult) => {
//       if (error) throw error;
//       res.status(201).send("Message created successfully!");
//     }
//   );
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
