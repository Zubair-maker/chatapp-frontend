/* eslint-disable react-hooks/rules-of-hooks */
import { Drawer, Grid } from "@mui/material";
import Title from "../shared/Title";
import Header from "./Header";
import ChartList from "../specific/ChartList";
import { samepleChats, sampleUsers } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";
import { useMyChatsQuery } from "../../redux/rtk/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsMobile } from "../../redux/reducers/uiSlice";
import { useErrors } from "../../hooks/hooks";

const AppLayout = () => (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const params = useParams();
    const chatId = params.chatId;

    const dispatch = useDispatch();
    const { isMobile } = useSelector((state) => state.ui);
    const { user, loading} = useSelector((state) => state.auth);
    console.log("user", user);

    const { isLoading, isError, data, error } = useMyChatsQuery("");
    // console.log("data", data);
    useErrors([{ isError, error }]);

    const handleDeleteChat = (e, chatId, groupChat) => {
      e.preventDefault();
      console.log("delete,chat", chatId, groupChat);
    };

    const handleMobileClose = () => {
      dispatch(setIsMobile(false));
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
            {isLoading ? (
              <h3>Loading ChatsList..</h3>
            ) : (
              <ChartList
                chats={data?.chats}
                chatId={chatId}
                handleDeleteChat={handleDeleteChat}
              />
            )}
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
            <Profile user={user} loading={loading}/>
          </Grid>
        </Grid>

        {isLoading ? (
          <h3>Loading ChatList</h3>
        ) : (
          <Drawer open={isMobile} onClose={handleMobileClose}>
            <ChartList
              w="70vw"
              chats={data?.chats}
              chatId={chatId}
              handleDeleteChat={handleDeleteChat}
            />
          </Drawer>
        )}
      </>
    );
  };
};

export default AppLayout;
