import React from "react";

const Notification = ({ notification, onClose }) => {
  const isError = notification.toLowerCase().includes("failed");

  return (
    <div
      className={`fixed top-5 right-4 text-xl px-6 py-3 z-[1000] rounded-md shadow-md text-white ${
        isError ? "bg-red-500" : "bg-green-500"
      }`}
    >
      <p>{notification}</p>
    </div>
  );
};

export default Notification;