import { useEffect } from "react";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import Alert from "./components/layout/Alert";
import { loadUser } from "./redux/actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Alert />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
