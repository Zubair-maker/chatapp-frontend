import { Box, Typography } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { fileFormat } from "../../lib/feature";
import DisplayAttachmentFile from "../shared/DisplayAttachmentFile";

const Message = (props) => {
  console.log("Chat->Message", props);
  const { attachments = [], sender, content, createdAt } = props.message;
  return (
    <div
      style={{
        alignSelf: sender._id === props.user._id ? "flex-end" : "flex-start",
        backgroundColor: "#cdc3bf",
        padding: "0.5rem",
        color: "black",
        borderRadius: "5px",
        width: "fit-content",
      }}
    >
      {!(sender._id === props.user._id) && (
        <Typography fontSize={"12px"} color={"chocolate"} variant="caption">
          {sender.name}
        </Typography>
      )}
      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, i) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <Box key={i}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferre"
                download
                style={{
                  color: "black",
                }}
              >
                {DisplayAttachmentFile(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography fontSize={"10px"} color={"brown"}>
        {moment(createdAt).fromNow()}
      </Typography>
    </div>
  );
};
const MemoMoizedMessage = memo(Message);

export default Message;
