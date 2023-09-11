import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Unsubscribe = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const email = queryParams.get("email");
  const code = queryParams.get("code");
  console.log("email", email);
  console.log("code", code);
  const [unsubscribeStatus, setUnsubscribeStatus] = useState("");

  const handleUnsubscribe = async () => {
    if (email) {
      const values = {
        email: email,
        code: code,
      };
      try {
        const response = await axios.post(
          "https://backend.intellattract.ai/email/unsubscribe/",
          values
        );
        console.log("response", response);
        setUnsubscribeStatus(response.data.msg);
        console.log("response", response);
      } catch (error) {
        console.error("Error unsubscribing:", error);
        setUnsubscribeStatus("error");
      }
    }
  };
  return (
    <div className="unsubscribe-div">
      <h1>Wonderbots AI Email Subscription</h1>
      {unsubscribeStatus === "Unsubscribed" && (
        <h2 style={{ color: "green" }}>
          You have successfully unsubscribed from Wonderbots AI emails
        </h2>
      )}
      <div className="unsubscribe-btn">
        <Button className="btn-primary" onClick={handleUnsubscribe}>
          Unsubscribe
        </Button>
      </div>
      {/* <p>Email: {email}</p>
      <p>Code: {code}</p> */}
    </div>
  );
};
export default Unsubscribe;
