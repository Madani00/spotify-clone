import React, { useEffect } from "react";
import Login from "./components/LoginPage";
import Spotify from "./components/Spotify";
import { reducerCases } from "./utils/Cnsts";
import { useStateProvider } from "./utils/StateProvider";

export default function App() {
  const [{ token }, dispatch] = useStateProvider(); // 3
  useEffect(() => {
    // // hash : to get the token in the browser search
      const hash = window.location.hash;
      console.log(hash)
      if (hash) {
        // const token = hash.substring(1).split("&")[0].split("=")[1];
        const params = new URLSearchParams(hash.substring(1));
        const token = params.get("access_token");
        dispatch({action: reducerCases.SET_TOKEN, token});
      }
    }, [token, dispatch]);   // 3
  return (
    <div>
      {
        token ? <Spotify /> : <Login /> // if the token is not null we have spotify componets , otherwise loginpage component      
      }
  
    </div>
  );
}