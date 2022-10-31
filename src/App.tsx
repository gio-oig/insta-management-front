import { Route, Routes } from "react-router-dom";

import Signin from "src/pages/signin";
import Signup from "src/pages/signup";
import Home from "src/pages/home";

import GuestGuard from "./components/guardGuest/guardGuest";

import routes from "src/constants/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route
          path={routes.signin}
          element={
            <GuestGuard>
              <Signin />
            </GuestGuard>
          }
        />
        <Route
          path={routes.signup}
          element={
            <GuestGuard>
              <Signup />
            </GuestGuard>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
