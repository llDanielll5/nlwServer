import express from "express";

const app = express();

app.get("/", (req: any, res: any) => {
  return res.json([
    {
      id: 1,
      name: "John Doe",
      email: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "",
    },
    {
      id: 3,
      name: "Joana Doe",
      email: "",
    },
  ]);
});

app.listen(1234);
