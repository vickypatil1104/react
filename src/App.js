import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import userContext from "./Utils/userContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "./ReduxStore/Store";

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "vicky patil",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <Provider store={Store}>
        <userContext.Provider value={{ userData: userName, setUserName }}>
          <Navbar />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </>
  );
}

export default App;
