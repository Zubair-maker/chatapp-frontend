import { Button, Dialog, DialogTitle, Stack } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const AddMemberDialog = (props) => {
  const [selectedMember, setSelectedMember] = useState([]);
  const [members, setmembers] = useState(sampleUsers);
  const [isClose, setIsClose] = useState(false);

  const selectMemberHandler = (id) => {
    console.log("selectMemberHandler,id",id)
    setSelectedMember((prev) =>
      prev.includes(id) ? prev.filter((currEl) => currEl !== id) : [...prev, id]
    );
  };

  const addMemberSubmitHandler = () => {};
  const closeHandler = () => {
    setIsClose(false);
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={"1rem"} width={"25vw"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.map((i) => (
            <UserItem
              key={i._id}
              user={i}
              handler={selectMemberHandler}
              isMemberAdded={selectedMember.includes(i._id)}
            />
          ))}
        </Stack>
      </Stack>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        marginBottom={"15px"}
      >
        <Button color="error" onClick={closeHandler}>
          Cancel
        </Button>
        <Button onClick={addMemberSubmitHandler} variant="contained">
          Submit Changes
        </Button>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
