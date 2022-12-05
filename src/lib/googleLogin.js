import jwt_decode from "jwt-decode";

export const GoogleLogin = (loginUrl) => {
  // tihs line will solve google is not define problem
  const google = window.google;

  const handleCallbackResponse = (response) => {
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject);

    // localStorage can only store String
    localStorage.setItem("userInfo", JSON.stringify(userObject));

    window.location.replace(loginUrl);
  };

  google.accounts.id.initialize({
    /* global google */
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_KEY,
    referrerPolicy: {
      policy: "strict-origin-when-cross-origin",
    },
    callback: handleCallbackResponse,
  });

  google.accounts.id.renderButton(document.getElementById("loginBtn"), {
    theme: "outline",
    size: "large",
  });
};
