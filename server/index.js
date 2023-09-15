import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

app.get("/summary/:id", (req, res) => {
  const idVideo = req.params.id

  download(idVideo)

  return res.json({ results: "Download realizado com sucesso" })
})

app.listen(3333, () => console.log("Server is Working!"))
