import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLoginUserMutation, useSignupMutation } from "../redux/services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/slice";

const Register = () => {
  const _550 = useMediaQuery("(min-width:550px)");

  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [signup, signupData] = useSignupMutation();
  const [loginUser, loginData] = useLoginUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setLogin((pre) => !pre);
  };

  const handleSignup = () => {
    const body = { userName, email, password };
    signup(body);
  };

  const handleLogin = () => {
    const body = { email, password };
    loginUser(body);
  };

  useEffect(() => {
    if (signupData.data) {
      localStorage.setItem("token", JSON.stringify(signupData.data.token));
      dispatch(addToken(signupData.data.token));
      alert(signupData.data.msg);
      navigate("/");
    }
  }, [signupData, navigate]);

  useEffect(() => {
    if (loginData.data) {
      localStorage.setItem("token", JSON.stringify(loginData.data.token));
      dispatch(addToken(loginData.data.token));
      alert(loginData.data.msg);
      navigate("/");
    }
  }, [loginData, navigate]);

  useEffect(() => {
    if (loginData.error) {
      alert(loginData.error.data.msg);
    }
  }, [loginData.error]);

  useEffect(() => {
    if (signupData.error) {
      alert(signupData.error.data.msg);
    }
  }, [signupData.error]);

  return (
    <>
      <Box
        sx={{
          background: _550 ? 'url("register-bg.webp")' : "",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundSize: "100% 350px",
        }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          mb={10}
          mt={20}
          gap={3}
          maxWidth={"380px"}
          mx={"auto"}
        >
          <img src="/logo.png" alt="logo" className="logo" />
          <Typography fontWeight={700} textAlign={"center"}>
            Login with your instagram account
          </Typography>
          {login ? (
            ""
          ) : (
            <TextField
              label="userName"
              variant="filled"
              sx={{ width: "95%" }}
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
          <TextField
            label="email"
            variant="filled"
            sx={{ width: "95%" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="password"
            variant="filled"
            sx={{ width: "95%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            size="large"
            sx={{
              backgroundColor: "blue",
              color: "white",
              width: "95%",
              height: 60,
              "&:hover": {
                backgroundColor: "green",
              },
              "&:active": {
                backgroundColor: "blue",
              },
            }}
            onClick={login ? handleLogin : handleSignup}
          >
            {signupData.isLoading || loginData.isLoading ? (
              <CircularProgress color="success" />
            ) : login ? (
              "Login"
            ) : (
              "Signup"
            )}
          </Button>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"wrap"}
          >
            <Typography>
              {login ? "Don`t have an account ?" : "Already have an account ?"}{" "}
            </Typography>
            <Typography
              variant="button"
              sx={{
                ml: 1,
                color: "blue",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={handleToggle}
            >
              {" "}
              {login ? "Sign Up" : "Login"}{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Register;
