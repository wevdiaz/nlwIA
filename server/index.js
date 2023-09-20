import cors from "cors"
import express from "express"

import { download } from "./download.js"
import { transcribe } from "./transcribe.js"

const app = express()
app.use(cors())

app.get("/summary/:id", async (req, res) => {
  const idVideo = req.params.id

  await download(idVideo)
  const result = await transcribe()

  return res.json({ result })
})

app.listen(3333, () => console.log("Server is Working!"))
