import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { VisuallyHiddenInput } from "../components/styles/StyleComponent";
import api from "../config/api";
import { userExist } from "../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [islogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [avatar, setAvatar] = useState({
    field: null,
    preview: "",
    error: "",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setAvatar({ file: null, preview: "", error: "Only image files allowed" });
      return;
    }
    const preview = URL.createObjectURL(file);
    setAvatar({ file, preview, error: "" });
  };

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  };

  const handleLogin = async (data) => {
    try {
      const resp = await api.post("user/login", {
        username: data.username,
        password: data.password,
      });
      dispatch(userExist(resp?.data?.user));
      toast.success(resp?.data.message);
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || "Something Went Wrong");
    }
  };

  const handleSignUp = async (formDataValues) => {
    const { name, bio, username, password } = formDataValues;
    console.log(formDataValues, avatar);

    if (!avatar.file) {
      toast.error("Please upload an avatar image");
      return;
    }
    const formData = new FormData();
    formData.append("avatar", avatar.file);
    formData.append("name", name);
    formData.append("bio", bio);
    formData.append("username", username);
    formData.append("password", password);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      await api.post(`user/create-user`, formData, config);
      toast.success("Signed up successfully!");
      reset();
      setAvatar({ file: null, preview: "", error: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {islogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                onSubmit={handleSubmit(handleLogin)}
              >
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  {...register("username", {
                    required: "UserName is required",
                  })}
                />
                {errors.username && (
                  <Typography color="error" variant="caption">
                    {errors.username.message}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <Typography color="error" variant="caption">
                    {errors.password.message}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  // disabled={"isLoading"}
                >
                  Login
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button
                  // disabled={"isLoading"}
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSubmit(handleSignUp)}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "9rem",
                      height: "9rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <>
                      <CameraAltIcon />

                      <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                      />
                    </>
                  </IconButton>
                </Stack>

                {avatar.error && (
                  <Typography
                    m={"1rem auto"}
                    width={"fit-content"}
                    display={"block"}
                    color="error"
                    variant="caption"
                  >
                    {avatar.error}
                  </Typography>
                )}

                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <Typography color="error" variant="caption">
                    {errors.name.message}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  {...register("bio", {
                    required: "Bio is required",
                  })}
                />
                {errors.bio && (
                  <Typography color="error" variant="caption">
                    {errors.bio.message}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  {...register("username", {
                    required: "UserName is required",
                  })}
                />
                {errors.username && (
                  <Typography color="error" variant="caption">
                    {errors.username.message}
                  </Typography>
                )}
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <Typography color="error" variant="caption">
                    {errors.password.message}
                  </Typography>
                )}
                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth

                  // disabled={"isLoading"}
                >
                  Sign Up
                </Button>

                <Typography textAlign={"center"} m={"10px"}>
                  OR
                </Typography>

                <Button fullWidth variant="text" onClick={toggleLogin}>
                  Login Instead
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
