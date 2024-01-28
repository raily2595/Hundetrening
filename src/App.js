import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import "./App.css";
import { listHunds } from './graphql/queries';
import { createHund, deleteHund } from './graphql/mutations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startside from './sider/Startside';
import EndreHund from './sider/EndreHund';
import Profil from './sider/Profil';
import Meny from './sider/Meny';
import {useEffect, useState} from "react";
import { generateClient } from "aws-amplify/api";
import {
    HundUpdateForm
} from './ui-components';

const client = generateClient()

const App = ({ signOut }) => {
    const [hunder, setHunder] = useState([]);

    useEffect(() => {
        fetchHunder().then(r => {setHunder(r)});
    }, []);

    async function fetchHunder() {
        let allHundsResponds = await client.graphql({
            query: listHunds
        });
        console.log(allHundsResponds);
        return allHundsResponds?.data?.listHunds?.items
    }

    async function nyHund(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        try {
            const newHund = await client.graphql({
                query: createHund,
                variables: {
                    input: {
                        "navn": form.get("navn"),
                        "bursdag": "1970-01-01",
                        "titler": [],
                        "rase": "Lorem ipsum dolor sit amet",
                        "farge": "Lorem ipsum dolor sit amet",
                        "bilde": "Lorem ipsum dolor sit amet",
                    }
                }
            });
            console.log('Post saved successfully!', newHund);
        } catch (error) {
            console.log('Error saving post', error);
        }
        await fetchHunder().then(r => {setHunder(r)});
        event.target.reset();
    }

    async function deletedHund({ id }) {
        const newHunder = hunder.filter((hund) => hund.id !== id);
        setHunder(newHunder);
        const deletedHund = await client.graphql({
            query: deleteHund,
            variables: {
                input: {
                    id: id
                }
            }
        });
    }

  return (
      <View classnavn="App">
          <Heading level={1}>My Hund App</Heading>
          <View as="form" margin="3rem 0" onSubmit={nyHund}>
              <Flex direction="row" justifyContent="center">
                  <TextField
                      name="navn"
                      placeholder="Hund navn"
                      label="navn"
                      labelHidden
                      variation="quiet"
                      required
                  />
                  <Button type="submit" variation="primary">
                      Lag hund
                  </Button>
              </Flex>
          </View>
          <Heading level={2}>Current Hunder</Heading>
          <View margin="3rem 0">
              {hunder.map((hund) => (
                  <Flex
                      key={hund.id || hund.navn}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                  >
                      <Text as="strong" fontWeight={700}>
                          {hund.navn}
                      </Text>
                      <Text as="span">{hund.rase}</Text>
                      <Button variation="link" onClick={() => deletedHund(hund)}>
                          Delete hund
                      </Button>
                      <HundUpdateForm hund={hund} onSuccess={() => {fetchHunder().then(r => {setHunder(r)})}}/>
                  </Flex>
              ))}
          </View>
          <Button onClick={signOut}>Sign Out</Button>
      </View>
  );
};

export default withAuthenticator(App);