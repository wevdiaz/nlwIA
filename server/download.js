import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID

  console.log("Realizando o download do vídeo - " + videoID)

  ytdl(videoURL, {
    quality: "lowestaudio",
    filter: "audioonly",
  })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000

      if (seconds > 60) {
        throw new Error(
          "Não foi possível fazer o download. Este vídeo tem mais de 60 segundos."
        )
      }
    })
    .on("end", () => {
      console.log("Download finalizado!")
    })
    .on("error", (err) => {
      "Não foi possível fazer o download desse vídeo. Detalhes do Error: ", err
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
