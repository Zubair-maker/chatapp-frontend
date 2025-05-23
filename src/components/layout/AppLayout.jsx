import { Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChartList from "../specific/ChartList";
import { samepleChats, sampleUsers } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";

const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    
    const params = useParams();
    const chatId = params.chatId;

    const handleDeleteChat = (e, chatId, groupChat) => {
      e.preventDefault();
      console.log("delete,chat", chatId, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"} className="applayout">
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height="100%"
          >
            <ChartList
              chats={samepleChats}
              chatId={chatId}
              onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            lg={6}
            height={"100%"}
            className="WrappedComponent"
          >
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba(0,0,0,0.85)",
            }}
          >
            <Profile sampleUsers={sampleUsers}/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
