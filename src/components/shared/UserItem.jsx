import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import React, { memo } from "react";

const UserItem = (props) => {
  console.log("Search -> UserItem", props);
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
        // {...styling}
      >
        <Avatar src={props.user.avatar} />

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
          {props.user.name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: props.isMemberAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: props.isMemberAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={() => props.handler(props.user._id)}
          disabled={props.handlerIsLoading}
        >
          {props.isMemberAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

const MemoizedUserItem = memo(UserItem);

export default MemoizedUserItem;
