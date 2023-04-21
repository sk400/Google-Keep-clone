import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login here
        // console.log("Successful login:", result.user);
      })
      .catch((error) => {
        // Handle login error here
        console.error("Login error:", error);
      });
  };

  return (
    <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          mb: 3,
        }}
      >
        <img
          alt="logo"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          style={{
            width: "50px",
          }}
        />
        <Typography fontSize="24px" color="white" fontWeight="">
          Keeper
        </Typography>
      </Stack>

      <div className="shadow-2xl">
        <button
          type="button"
          className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
          onClick={handleSignIn}
        >
          <FcGoogle className="mr-4" /> Sign in with google
        </button>
      </div>
    </div>
  );
}

export default Login;
