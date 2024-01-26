import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import "./App.css";
import { API } from "aws-amplify";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startside from './sider/Startside';
import EndreHund from './sider/EndreHund';
import Profil from './sider/Profil';
import Meny from './sider/Meny';

function App({ signOut }) {
  return (
      <Router>
          <div className="App">
              <Meny />
              <Routes>
                  <Route path="/" element={<Startside />} />
                  <Route path="/endrehund" element={<EndreHund />} />
                  <Route path="/profil" element={<Profil />} />
              </Routes>
          </div>
      </Router>
  );
}

export default withAuthenticator(App);