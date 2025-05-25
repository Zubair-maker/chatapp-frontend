import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DeleteDialog = (props) => {
  return (
    <Dialog open onClose={props.handleClose}>
      <DialogTitle sx={{textAlign:"center"}}>Conform Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure to delete this group?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{alignSelf:"center"}}>
        <Button onClick={props.handleClose} sx={{color:""}}>No</Button>
        <Button onClick={props.deleteHandler} sx={{color:"red"}}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
