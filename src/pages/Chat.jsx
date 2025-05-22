import { Stack, IconButton } from "@mui/material";
import { AttachFile, Send as SendIcon } from "@mui/icons-material";
import AppLayout from "../components/layout/AppLayout";

import { useRef } from "react";
import { InputBox } from "../components/styles/StyleComponent";
import FileMenuDialog from "../components/dialog/FileMenuDialog";
import { sampleMessage } from "../constants/sampleData";
import Message from "../components/shared/Message";

const user = {
  _id: "abcdefg",
  name: "John Doe",
};

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        bgcolor={"#d6b3b340"}
        spacing={"1rem"}
        height={"90%"}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {sampleMessage.map((message) => (
          <Message message={message} user={user} key={message._id} />
        ))}
      </Stack>
      <form style={{ height: "10%", padding: "0px 4px" }}>
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: "1rem",
              rotate: "30deg",
            }}
          >
            <AttachFile />
          </IconButton>
          <InputBox type="text" placeholder="Type message here..." />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "#ea7070",
              color: "white",
              marginLeft: "2rem",
              padding: "8px",
              rotate: "340deg",
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <FileMenuDialog />
    </>
  );
};

const WrappedChat = AppLayout()(Chat);

export default WrappedChat;
