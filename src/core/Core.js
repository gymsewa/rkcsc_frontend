import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import AppContext from "../AppContext/AppContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Core = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  const notify = (text, time) => {
    toast.dismiss();

    toast.info(text, {
      toastId: "random1",
      closeButton: false,
      position: "top-center",
      autoClose: time ? time : 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const loginEmailPass = async (
    email,
    password,
    setSigninClicked,
    setShowGlobalLoader
  ) => {
    console.log("Login attempt started");
    setShowGlobalLoader(true);

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
        const userDataresp = await getUserData(
          response.data?.data?.accessToken
        );
        console.log("LOG USER DATA : ", userDataresp);
        console.log("orders Data:", userDataresp.orderData);
        console.log("orders Data:", userDataresp.walletData);

        if (userDataresp) {
          appContext.setUserInfo((prev) => ({
            ...prev,
            firstName: userDataresp?.userData?.firstName,
            phoneNumber: userDataresp?.userData?.phoneNumber,
            email: userDataresp?.userData?.email,
            picture: userDataresp?.userData?.photoUrl,
            username: userDataresp?.userData?.username,
            accountType: userDataresp?.userData?.accountType,
            orders: userDataresp?.orderData,
            userId: userDataresp?.userData?._id,
            sessionId: response.data?.data?.accessToken,
          }));

          if (userDataresp?.userData?.accountType === "member") {
            appContext.setUserInfo((prev) => ({
              ...prev,
              wallet: userDataresp?.userData?.wallet,
              firmName: userDataresp?.userData?.firmName,
              walletHistory: userDataresp?.walletData,
            }));
          }

          if (
            userDataresp?.userData?.accountType === "admin" ||
            appContext.userInfoVal.accountType === "pseudoAdmin"
          ) {
            navigate("/adminRk");
            notify("Admin Login Successfully", 2000);
          }
        }

        if (userDataresp?.userData?.accountType !== "admin") {
          notify("Login Successfully", 2000);
        }
        setSigninClicked(false);
        setShowGlobalLoader(false);
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
          notify("Are you sure that password was correct? 🥲", 2000);
        } else if (
          error.response.data.message ===
          "Email or username doesn't exist or not verified"
        ) {
          console.log(error.response.data.message);
          notify(error.response.data.message, 2000);
        }
      } else if (error.request) {
        console.error("No response received from server");
      } else {
        console.error("Error setting up login request:", error.message);
      }
    } finally {
      setShowGlobalLoader(false);
    }
  };

  const signupEmailPass = async (
    firstName,
    phoneNumber,
    email,
    password,
    firmName,
    docs,
    setSigninClicked,
    setShowGlobalLoader
  ) => {
    setShowGlobalLoader(true);

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

    const formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("phone", phoneNumber);
    formData.append("email", email);
    formData.append("password", password);

    if (firmName) {
      formData.append("firmName", firmName);
    }

    if (docs && docs instanceof File) {
      formData.append("file", docs);
    } else if (docs && typeof docs === "string") {
      const fileBlob = dataURItoBlob(docs);
      formData.append("file", fileBlob, "document.pdf");
    }

    const userType = firmName && docs ? "member" : "user";

    try {
      const response = await axios({
        method: "post",
        url: process.env.REACT_APP_BASE_URL + `/api/v1/auth/signup/${userType}`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      });

      console.log("Full signup response:", response);

      if (response.data) {
        console.log("Signup response data:", response.data);

        if (response.data.data?.accessToken) {
          console.log("User successfully signed up with access token");
          const userDataresp = await getUserData(
            response.data?.data?.accessToken
          );
          console.log("LOG USER DATA: ", userDataresp.userData);

          if (userDataresp) {
            appContext.setUserInfo((prev) => ({
              ...prev,
              firstName: userDataresp?.userData?.firstName,
              phoneNumber: userDataresp?.userData?.phoneNumber,
              email: userDataresp?.userData?.email,
              picture: userDataresp?.userData?.photoUrl,
              username: userDataresp?.userData?.username,
              accountType: userDataresp?.userData?.accountType,
              orders: userDataresp?.orderData,
              userId: userDataresp?.userData?._id,
              sessionId: response.data?.data?.accessToken,
            }));
          }

          setSigninClicked(false);
          setShowGlobalLoader(false);
          notify("Signed up successfully!", 2000);
        } else if (response.data.data) {
          console.log("Here is the payment link", response.data.data);
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
      if (
        error.response.data.message &&
        error.response.data.message.includes(
          "account already exists with phoneNumber"
        )
      ) {
        notify("Account already exists with this phoneNumber", 2000);
      }
      if (
        error.response.data.message &&
        error.response.data.message.includes(
          "account already exists with email"
        )
      ) {
        notify("Account already exists with this email", 2000);
      }

      if (error.response) {
        console.error("Bad Request: ", error.response.data.message);
      } else if (error.request) {
        console.error("No response received from server during signup");
      } else {
        console.error("Error setting up signup request:", error.message);
      }
    } finally {
      setShowGlobalLoader(false);
    }
  };

  function dataURItoBlob(dataURI) {
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

  const getUserData = async (sessionId) => {
    console.log("session id get profile", sessionId);

    let config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + `/api/v1/user/get_profile`,
      headers: {
        Authorization: "Bearer " + sessionId,
      },
    };
    try {
      const response = await axios.request(config);
      if (response.data?.data) {
        return response.data.data;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  //Admin Endpoints

  const getAllUsers = async (userType) => {
    console.log("all user called with", userType);

    let config = {
      method: "GET",
      maxBodyLength: Infinity,
      url:
        process.env.REACT_APP_BASE_URL + `/api/v1/admin/getAllUser/${userType}`,
      headers: {
        Authorization: `Bearer ${appContext.userInfoVal.sessionId}`,
      },
    };
    try {
      const response = await axios.request(config);
      if (response.data?.data) {
        // console.log("all user response",response.data?.data);
        return response.data?.data;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const deleteAndVerify = async (userId, action) => {
    console.log("all user called with", userId, action);

    let config = {
      method: "GET",
      maxBodyLength: Infinity,
      url:
        process.env.REACT_APP_BASE_URL +
        `/api/v1/admin/deleteUser/${userId}/${action}`,
      headers: {
        Authorization: `Bearer ${appContext.userInfoVal.sessionId}`,
      },
    };
    try {
      const response = await axios.request(config);
      if (response.data?.data) {
        return response.data?.data;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const getAdminAllOrders = async (
    paymentFilter = null,
    orderFilter = "All"
  ) => {
    try {
      // Prepare query parameters
      const queryParams = new URLSearchParams();

      // Add payment filter if specified
      if (paymentFilter) {
        queryParams.append("payment", paymentFilter);
      }

      // Add order status filter if specified and not "All"
      if (orderFilter !== "All") {
        queryParams.append("order", orderFilter);
      }

      // Construct the URL with query parameters
      const url = `${process.env.REACT_APP_BASE_URL}/api/v1/order/pseudo${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`;
      
      console.log("endpoint",url);

      const config = {
        method: "GET",
        url: url,
        headers: {
          Authorization: `Bearer ${appContext.userInfoVal.sessionId}`,
        },
      };

      const response = await axios.request(config);

      if (response.data?.data?.orderList) {
        return response.data.data;
      }

      return null;
    } catch (error) {
      console.error("Error fetching orders:", error);
      return null;
    }
  };

  return {
    loginEmailPass,
    signupEmailPass,
    getAllUsers,
    deleteAndVerify,
    getAdminAllOrders,
  };
};
export default Core;
