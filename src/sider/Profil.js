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
import {Link, useNavigate} from "react-router-dom";
import ColoredBox from "./ColeredBox";

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
            <h1>Min Profil</h1>
            {hunder.length === 1 ?(
                <h2>Min Hund</h2>
            ) : (
                <h2>Mine Hunder</h2>
            )}
            <View margin="3rem 0">
                {hunder.map((hund) => (
                    <Flex
                        key={hund.id || hund.navn}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ColoredBox color={hund.farge} />
                        <Text as="strong" fontWeight={700}>{hund.navn}</Text>
                        <button onClick={() => navigate('/hund?id=' + hund.id)}>Vis hund</button>
                    </Flex>
                ))}
            </View>
            <Button onClick={handleDeleteUser}>Slett bruker</Button>
        </View>
    );
};

export default Profil;