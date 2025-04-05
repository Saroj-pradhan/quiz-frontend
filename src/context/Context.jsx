import React, { createContext, useEffect, useState } from "react";
export const Datacont = createContext();
import axios from "../utils/Axios";

function Context(props) {
  const [user, setuser] = useState("");
  const [utoken, setutoken] = useState("");
  const [isloggedin, setlogin] = useState(false);

  function afterlogrun() {
    axios
      .get("/user/getquiz", {
        headers: {
          token: `Bearer ${utoken}`, // Send token in headers
        },
        
      })
      .then((res) => {
        setuser(res.data.message);
        console.log(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()=>{
    const afterrefresh = sessionStorage.getItem("usertoken");
    if (afterrefresh) {
      setlogin(true);
      setutoken(afterrefresh);  
    }
  },[])
  useEffect(() => {
    if(isloggedin){
    afterlogrun();
    }
  }, [ isloggedin]);

  return (
    <div>
      <Datacont.Provider
        value={{ user, setuser, isloggedin, setlogin, utoken, setutoken }}
      >
        {props.children}
      </Datacont.Provider>
    </div>
  );
}

export default Context;
