import { Route, Routes } from "react-router-dom";

import Signin from "src/pages/signin";
import Signup from "src/pages/signup";
import Home from "src/pages/home";
import SavedSearchs from "src/pages/savedSearchs";
import MainLayout from "src/components/layout/mainLayout";

import GuardLayout from "./components/layout/guardLayout";

import routes from "src/constants/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<GuardLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.savedsearchs} element={<SavedSearchs />} />
          </Route>
        </Route>
        <Route element={<GuardLayout isGuestPage />}>
          <Route path={routes.signin} element={<Signin />} />
          <Route path={routes.signup} element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
