import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { memo } from "react";
import { useErrors } from "../../hooks/hooks";
import { useGetMyNotificationQuery } from "../../redux/rtk/api";
import { useDispatch, useSelector } from "react-redux";
import { setIsNotification } from "../../redux/reducers/uiSlice";

const Notification = () => {
  const { isNotication } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useGetMyNotificationQuery();
  console.log("isNotication", isNotication);
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("friendRequestHandler", _id, accept);
  };
  // console.log("useGetMyNotificationQuery", data?.request);
  const closeNotifiction = () => {
    dispatch(setIsNotification(false));
  };
  useErrors([{ error, isError }]);
  return (
    <Dialog open={isNotication} onClose={closeNotifiction}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>

        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <>
            {data?.request?.length > 0 ? (
              data?.request?.map(({ sender, _id }) => (
                <NotificationItem
                  sender={sender}
                  _id={_id}
                  handler={friendRequestHandler}
                  key={_id}
                />
              ))
            ) : (
              <Typography textAlign={"center"}>0 notifications</Typography>
            )}
          </>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
NotificationItem.displayName = "NotificationItem";

export default Notification;
