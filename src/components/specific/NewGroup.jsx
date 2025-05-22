import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UserItem from "../shared/UserItem";
import useInput from "../../hooks/inputHook";
import { sampleUsers } from "../../constants/sampleData";
import { useState } from "react";

const NewGroup = () => {
  const groupName = useInput();
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id) ? prev.filter((user) => user != id) : [...prev, id]
    );
  };
  console.log("selectedMember", selectedMembers);
  const submitHandler = () => {};

  const isLoading = false;
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.inputChangeHadler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {isLoading ? (
            <Skeleton />
          ) : (
            members.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={() => selectMemberHandler(i._id)}
                isMemberAdded={selectedMembers.includes(i._id)}
              />
            ))
          )}
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="text"
            color="error"
            size="large"
            onClick={"closeHandler"}
          >
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={submitHandler}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
