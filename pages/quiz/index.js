import { useEffect } from "react";
import Cookies from "js-cookie";

const Quiz = () => {
  useEffect(() => {
    const receiveMessage = (event) => {
      // Ensure that the message is coming from a trusted source
      if (event.origin !== "https://exam-userside.vercel.app") return;
      // Check the message type
      if (event.data.type === "login") {
        // Access the data sent from the iframe
        const { jwt_userID, userToken, jwt_firstName, jwt_lastName } =
          event.data;
        // Do something with the received data, for example, set cookies in the Next.js app
        Cookies.set("jwt_userID", jwt_userID, {
          expires: 7,
          domain: "exam-userside.vercel.app",
        });
        Cookies.set("jwt_userID", jwt_userID, {
          expires: 7,
          domain: "nextexam.vercel.app",
        });
        Cookies.set("userToken", userToken, {
          expires: 7,
          domain: "exam-userside.vercel.app",
        });
        Cookies.set("userToken", userToken, {
          expires: 7,
          domain: "nextexam.vercel.app",
        });
        Cookies.set("jwt_firstName", jwt_firstName, {
          expires: 7,
          domain: "exam-userside.vercel.app",
        });
        Cookies.set("jwt_firstName", jwt_firstName, {
          expires: 7,
          domain: "nextexam.vercel.app",
        });
        Cookies.set("jwt_lastName", jwt_lastName, {
          expires: 7,
          domain: "exam-userside.vercel.app",
        });
        Cookies.set("jwt_lastName", jwt_lastName, {
          expires: 7,
          domain: "nextexam.vercel.app",
        });
      }
    };
    // Add an event listener to listen for messages from the iframe
    window.addEventListener("message", receiveMessage, false);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        marginTop: "7%",
      }}
    >
      <iframe
        style={{ height: "100%", width: "100%" }}
        allow="true"
        allowTransparency={true}
        allowFullScreen={true}
        src="https://exam-userside.vercel.app"
        security="false"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default Quiz;
