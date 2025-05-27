import { Search as SearchIcon } from "@mui/icons-material";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedEffect } from "../../hooks/hooks";
import { setIsSearch } from "../../redux/reducers/uiSlice";
import { useLazySearchUserQuery } from "../../redux/rtk/api";
import UserItem from "../shared/UserItem";

const Search = () => {
  const { isSearch } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [searchUser] = useLazySearchUserQuery();

  const [users, setUsers] = useState([]);
  console.log("users", users?.data);
  const [search, setSearch] = useState("");

  const addFriendHandler = async (id) => {
    console.log("addFriendHandler", id);
  };

  const searchCloseHandler = () => {
    dispatch(setIsSearch(false));
  };

  // prettier-ignore
  useDebouncedEffect(() => {
      const getSearch = async ()=>{
        try {
          const resp = await searchUser(search);
          setUsers(resp?.data)
        } catch (error) {
           console.log(error)
        }
      };
      getSearch();
  },[search],1000);

  let isLoadingSendFriendRequest = false;
  return (
    <Dialog open={isSearch} onClose={searchCloseHandler}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
          {!users?.data ? (
            <h4>Loading...</h4>
          ) : users.data.length === 0 ? (
            <h4>No users found</h4>
          ) : (
            users.data.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              />
            ))
          )}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
