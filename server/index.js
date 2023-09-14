import cors from "cors"
import express from "express"

const app = express()
app.use(cors())

app.get("/summary/:id", (req, res) => {
  const idVideo = req.params.id

  res.send("ID do Vídeo => " + idVideo)
})

app.listen(3333, () => console.log("Server is Working!"))
