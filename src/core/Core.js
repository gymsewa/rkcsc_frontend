import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext/AppContext";

const Core = () => {
  const appContext = useContext(AppContext);

  const loginEmailPass = async (email, password, setSigninClicked) => {
    console.log("Login attempt started");

    if (!email || !password) {
      console.error("Please enter both email and password");
      return;
    }

    const data = {
      email: email,
      password: password,
    };

    console.log("data", data);

    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + "/api/v1/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      console.log("Full login response:", response);

      if (response.data.data) {
        console.log("Login successful:", response.data.data);

        appContext.setUserInfo((prev) => ({
          ...prev,
          sessionId: response.data.data.accessToken,
        }));
        setSigninClicked(false);
      }
    } catch (error) {
      console.error("Login Error:", {
        message: error.message,
        response: error.response ? error.response.data : "No response",
        status: error.response ? error.response.status : "No status",
      });

      if (error.response) {
        if (error.response.data.message === "Wrong Password!") {
          console.log("Are you sure that password was correct? 🥲");
        } else if (
          error.response.data.message ===
          "Email or username doesn't exist or not verified"
        ) {
          console.log(error.response.data.message);
        }
      } else if (error.request) {
        console.error("No response received from server");
      } else {
        console.error("Error setting up login request:", error.message);
      }
    }
  };

  const signupEmailPass = async (
    firstName,
    phoneNumber,
    email,
    password,
    firmName,
    docs,
    setSigninClicked
  ) => {
    if (!firstName || !phoneNumber || !email || !password) {
      console.error("Please fill in all required fields");
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return null;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      console.error("Invalid phone number");
      return null;
    }

    // let signupData = {
    //   firstName: firstName,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   password: password,
    // };

    const userType = firmName && docs ? "member" : "user";
    var signupData;

    if (userType === "member") {
      signupData = {
        firstName: firstName,
        phone: phoneNumber,
        email: email,
        password: password,
        firmName: firmName,
        docs: docs,
      };
    } else {
      signupData = {
        firstName: firstName,
        phone: phoneNumber,
        email: email,
        password: password,
      };
    }

    console.log("sign up data", signupData);

    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + `/api/v1/auth/signup/${userType}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: signupData,
      });

      console.log("Full signup response:", response);

      if (response.data) {
        console.log("Signup response data:", response.data);

        if (response.data.data?.accessToken) {
          console.log("User successfully signed up with access token");

          appContext.setUserInfo((prev) => ({
            ...prev,
            sessionId: response.data.data.accessToken,
          }));

          setSigninClicked(false);
        } else if (response.data.data) {
          console.log("Here is the payment link",response.data.data);
          const paymentUrl = response.data.data;
        
        window.location.href = paymentUrl;
          setSigninClicked(false);
        } else {
          console.warn("Unexpected signup response structure");
        }
      } else {
        console.error("No data in signup response");
      }
    } catch (error) {
      console.error("Signup Error:", {
        message: error.message,
        response: error.response ? error.response.data : "No response",
        status: error.response ? error.response.status : "No status",
      });

      if (error.response) {
        console.error("Bad Request: ", error.response.data.message);
      } else if (error.request) {
        console.error("No response received from server during signup");
      } else {
        console.error("Error setting up signup request:", error.message);
      }
    }
  };

  const memSignupEmailPass = async (
    firstName,
    phoneNumber,
    email,
    password,
    firmName,
    docs,
    setSigninClicked
  ) => {
    if (!firstName || !phoneNumber || !email || !password) {
      console.error("Please fill in all required fields");
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      return null;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      console.error("Invalid phone number");
      return null;
    }

    // let signupData = {
    //   firstName: firstName,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   password: password,
    // };

    const signupData = {
      firstName: firstName,
      phone: phoneNumber,
      email: email,
      password: password,
      firmName: firmName,
      docs: docs,
    };

    console.log("sign up data", signupData);

    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + `/api/v1/auth/signup/member`,
        headers: {
          "Content-Type": "application/json",
        },
        data: signupData,
      });

      console.log("Full signup response:", response);

      if (response.data) {
        console.log("Signup response data:", response.data);

        if (response.data.data?.accessToken) {
          console.log("User successfully signed up with access token");

          appContext.setUserInfo((prev) => ({
            ...prev,
            sessionId: response.data.data.accessToken,
          }));

          setSigninClicked(false);
        } else if (response.data.data) {
          console.log("Signed up successfully, but no access token");
          setSigninClicked(false);
        } else {
          console.warn("Unexpected signup response structure");
        }
      } else {
        console.error("No data in signup response");
      }
    } catch (error) {
      console.error("Signup Error:", {
        message: error.message,
        response: error.response ? error.response.data : "No response",
        status: error.response ? error.response.status : "No status",
      });

      if (error.response) {
        console.error("Bad Request: ", error.response.data.message);
      } else if (error.request) {
        console.error("No response received from server during signup");
      } else {
        console.error("Error setting up signup request:", error.message);
      }
    }
  };

  const handleGetProfile = async () => {};

  return {
    loginEmailPass,
    signupEmailPass,
  };
};
export default Core;
