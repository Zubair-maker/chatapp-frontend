import { Menu } from "@mui/material";
import React from "react";

const FileMenuDialog = (props) => {
  return (
    <Menu anchorEl={props.anchorEl}>
      <div style={{ width: "10rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        dolores voluptate quibusdam fugiat tempore eaque repellendus a delectus
        laborum recusandae? Consectetur accusamus velit animi veritatis earum
        quod voluptatum iste qui.
      </div>
    </Menu>
  );
};

export default FileMenuDialog;
