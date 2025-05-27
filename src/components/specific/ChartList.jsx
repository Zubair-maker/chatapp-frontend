import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = (props) => {
  console.log("AppLayout->ChatList");

  const newwMessagesAlert = [{ chatId: "1", count: 4 }];
  return (
    <Stack width={props.w} direction="column" overflow={"auto"}>
      {props.chats.map((data, index) => {
        const { avatar, groupChat, _id, name, members } = data;
        const newMessageAlert = newwMessagesAlert.find(
          (item) => item.chatId === _id
        );
        const isOnline = members.some((member) =>
          props.onlineUsers.includes(_id)
        );
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            groupChat={groupChat}
            name={name}
            _id={_id}
            key={_id}
            sameSender={props.chatId === _id}
            handleDeleteChat={props.handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;
