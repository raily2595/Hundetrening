import "@aws-amplify/ui-react/styles.css";
import {
    Button,
    Flex,
    Heading,
    Text,
    View,
} from "@aws-amplify/ui-react";
import { listHunds } from '../graphql/queries';
import { deleteHund } from '../graphql/mutations';
import React, {useEffect, useState} from "react";
import { generateClient } from "aws-amplify/api";
import { deleteUser } from 'aws-amplify/auth';
import strings from "../strings.json";
import { useNavigate} from "react-router-dom";

const client = generateClient()

const Profil = () => {
    const [hunder, setHunder] = useState([]);
    const navigate = useNavigate();

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

    async function handleDeleteUser() {
        try {
            await deleteUser();
        } catch (error) {
            console.log(error);
        }
    }

    async function deletedHund({ id }) {
        const newHunder = hunder.filter((hund) => hund.id !== id);
        const deletedHund = await client.graphql({
            query: deleteHund,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchHunder().then(r => {setHunder(r)});
    }

    return (
        <View classnavn="Profil">
            <Heading level={1}>Min profil</Heading>
            <Heading level={2}>Dine hunder</Heading>
            <View margin="3rem 0">
                {hunder.map((hund) => (
                    <Flex
                        key={hund.id || hund.navn}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{hund.navn}</Text>
                        <Button variation="link" onClick={() => deletedHund(hund)}>Delete hund</Button>
                        <button onClick={() => navigate('/endreHund?id=' + hund.id)}>{strings.oppHund}</button>
                    </Flex>
                ))}
            </View>
            <Button onClick={handleDeleteUser}>Slett bruker</Button>
        </View>
    );
};

export default Profil;