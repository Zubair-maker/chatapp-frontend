const fileFormat = (url = "") => {
  const fileExtn = url.split(".").pop().toLowerCase();

  const mediaType = {
    video: ["mp4", "webcm", "ogg"],
    audio: ["mp3", "wav"],
    image: ["png", "jpg", "jpeg", "gif"],
  };

  for (const [type, extn] of Object.entries(mediaType)) {
    if (extn.includes(fileExtn)) return type;
  }

  return "file";
};

const transformImage = (url = "", width = 100) => url;

export { fileFormat, transformImage };
