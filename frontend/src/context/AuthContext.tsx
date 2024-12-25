import { createContext, useState, useEffect, useContext } from "react";
import { FirebaseAuthHelper } from "../helpers/firebaseAuthentication";

const AuthContext = createContext({ idToken: "" });

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props: any) => {
  const [idToken, setIdToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await FirebaseAuthHelper.getAnonymousToken();
        setIdToken(token!);
      } catch (error) {
        console.error("Error fetching idToken", error);
        setIdToken("");
      }
    };

    getToken();
  }, []);

  return (
    <AuthContext.Provider value={{ idToken }}>
      {props.children}
    </AuthContext.Provider>
  );
};
