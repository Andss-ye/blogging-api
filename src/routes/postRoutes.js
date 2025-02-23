import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Aqui estaran todos los posts" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Post con id ${req.params.id}` });
});

router.post("/", (req, res) => {
    res.json({ message: "Post creado", data: req.body });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Post con id ${req.params.id} actualizado`, data: req.body });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Post con id ${req.params.id} eliminado` });
});

export default router;