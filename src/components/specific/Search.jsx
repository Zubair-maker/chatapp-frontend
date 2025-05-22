import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import useInput from "../../hooks/inputHook";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";

const Search = () => {
  const [users, setUsers] = useState(sampleUsers);
  const addFriendHandler = async (id) => {
    console.log("addFriendHandler", id);
  };

  const search = useInput();

  const searchCloseHandler = () => {};

  let isLoadingSendFriendRequest = false;
  return (
    <Dialog open onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.inputChangeHadler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
