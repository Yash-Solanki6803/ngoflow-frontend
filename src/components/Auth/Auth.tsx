import { useState } from "react";
import { Register } from "./Register";
import { Login } from "./Login";

export const Auth = () => {
  const [authType, setAuthType] = useState<"login" | "register">("login");

  if (authType === "login") {
    return <Login setAuthType={setAuthType} />;
  } else {
    return <Register setAuthType={setAuthType} />;
  }
};
