import { server } from "./server.js"

const form = document.getElementById("form")
const input = form.querySelector("#url")
const content = document.getElementById("content")

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo parece não ser um shorts.")
  }

  const [_, params] = videoURL.split("shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto aúdio..."

  const transcription = await server.get("/summary/" + videoID)

  content.textContent = "Realizando o resumo..."

  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })

  content.textContent = summary.data.result
})
