const form = document.getElementById("form")
const input = form.querySelector("#url")
const content = document.getElementById("content")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const videoURL = input.value

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo parece não ser um shorts.")
  }

  const [_, params] = videoURL.split("shorts/")
  const [videoID] = params.split("?si")

  content.textContent = "Obtendo o texto aúdio..."
})
