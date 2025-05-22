import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../styles/StyleComponent";
import { memo } from "react";
import AvatarCard from "./AvatarCard";

const ChatItem = (props) => {
  console.log("ChatList -> ChatItem", props);
  return (
    <Link
      sx={{
        padding: "0",
      }}
      to={`/chat/${props._id}`}
      onContextMenu={(e) =>
        props.handleDeleteChat(e, props._id, props.groupChat)
      }
    >
      <div
        // initial={{ opacity: 0, y: "-100%" }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ delay: 0.1 * index }}

        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          backgroundColor: `${props.sameSender ? "black" : "unset"}`,
          color: `${props.sameSender ? "white" : "unset"}`,
          position: "relative",
          padding: "0.5rem",
        }}
      >
        <AvatarCard avatar={props.avatar} />

        <Stack>
          <Typography>{props.name}</Typography>
          {props.newMessageAlert && (
            <Typography>{props.newMessageAlert.count} New Message</Typography>
          )}
        </Stack>

        {props.isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </Link>
  );
};

const MemoizedChatItem = memo(ChatItem);
export default MemoizedChatItem;
