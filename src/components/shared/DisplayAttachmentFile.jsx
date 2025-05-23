import React, { memo } from "react";
import { transformImage } from "../../lib/feature";
import { FileOpen } from "@mui/icons-material";

const DisplayAttachmentFile = (file, url) => {
  const components = {
    video: <video src={url} preload="none" width="200px" controls />,
    image: (
      <img
        src={transformImage(url, 200)}
        alt="Attachment"
        width="150"
        height="150"
        style={{ objectFit: "contain" }}
      />
    ),
    audio: <audio src={url} preload="none" controls />,
    default: <FileOpen />,
  };
  return components[file] || components.default;
};

export default DisplayAttachmentFile;
