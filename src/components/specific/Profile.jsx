import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment/moment";

const Profile = (props) => {
  console.log("Applayout->Profile", props);

  if (props?.isLoading || !props.user)
    return (
      <h3 style={{ color: "white", textAlign: "center" }}>
        Loading Profile...
      </h3>
    );

  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        src={props?.user?.image}
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={props?.user?.bio} />
      <ProfileCard
        heading={"UserName"}
        text={props?.user?.username}
        Icon={<UserNameIcon />}
      />
      <ProfileCard
        heading={"Name"}
        text={props?.user?.name}
        Icon={<FaceIcon />}
      />
      <ProfileCard
        heading={"Joined"}
        text={moment(props?.user?.createdAt).fromNow()}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}

    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
