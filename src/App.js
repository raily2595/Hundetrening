import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import Meny from "./sider/Meny";
import Startside from "./sider/Startside";
import Profil from "./sider/Profil";
import NyTrening from "./sider/NyTrening";
import NyKonkurranse from "./sider/NyKonkurranse";
import NyttKurs from "./sider/NyttKurs";
import NyHund from "./sider/NyHund";
import Trening from "./sider/Trening";
import NyOkt from "./sider/NyOkt";
import Okt from "./sider/Okt";
import NyRep from "./sider/NyRep";
import Konkurranse from "./sider/Konkurranse";
import NyttLop from "./sider/NyttLop";
import Kurs from "./sider/Kurs";
import EndreRepetisjon from "./sider/EndreRepetisjon";
import EndreHund from "./sider/EndreHund";
import EndreKonkurranse from "./sider/EndreKonkurranse";
import EndreLop from "./sider/EndreLop";
import EndreOkt from "./sider/EndreOkt";
import EndreTrening from "./sider/EndreTrening";
import Treninger from "./sider/Treninger";
import Kurser from "./sider/Kurser";
import Konker from "./sider/Konker";
import EndreKurs from "./sider/EndreKurs";
import {Hund} from "./models";


const App = ({ signOut }) => {
  return (
      <Router>
          <Flex>
              <Meny />
              <Button onClick={signOut}>Logg ut</Button>
          </Flex>
          <Routes>
              <Route path="/" element={<Startside />} />
              <Route path="/profil" element={<Profil />} />

              <Route path="/nytrening" element={<NyTrening />} />
              <Route path="/endreTrening" element={<EndreTrening />} />
              <Route path="/trening" element={<Trening />} />
              <Route path="/treninger" element={<Treninger />} />

              <Route path="/nykonk" element={<NyKonkurranse />} />
              <Route path="/endreKonkurranse" element={<EndreKonkurranse/>} />
              <Route path="/konkurranse" element={<Konkurranse />} />
              <Route path="/konker" element={<Konker />} />

              <Route path="/nyttkurs" element={<NyttKurs />} />
              <Route path="/endreKurs" element={<EndreKurs />} />
              <Route path="/kurs" element={<Kurs />} />
              <Route path="/kurser" element={<Kurser />} />

              <Route path="/nyhund" element={<NyHund />} />
              <Route path="/endreHund" element={<EndreHund />} />
              <Route path="/hund" element={<Hund />} />

              <Route path="/nyokt" element={<NyOkt />} />
              <Route path="/endreOkt" element={<EndreOkt />} />
              <Route path="/okt" element={<Okt />} />

              <Route path="/nyrep" element={<NyRep />} />
              <Route path="/endreRepetisjon" element={<EndreRepetisjon />} />

              <Route path="/nyttlop" element={<NyttLop />} />
              <Route path="/endreLop" element={<EndreLop />} />

          </Routes>
      </Router>
  );
};

export default withAuthenticator(App);