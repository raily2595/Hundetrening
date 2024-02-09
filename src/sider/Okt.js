import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { repetisjonsByOektID} from "../graphql/queries";
import {deleteRepetisjon} from "../graphql/mutations";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
import {generateClient} from "aws-amplify/api";
const client = generateClient()

const Okt = () => {
    const [repetisjoner, setRepetisjoner] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const oktid = searchParams.get('id');
    const navigate = useNavigate();

    useEffect(() => {
        fetchRep().then(r => {setRepetisjoner(r)});
    }, []);

    async function fetchRep() {
        const oneRep = await client.graphql({
            query: repetisjonsByOektID,
            variables: { oektID: oktid }
        });
        console.log(oneRep);
        return oneRep?.data?.repetisjonsByOektID?.items
    }

    async function deletedRep({ id }) {
        const newOkter = repetisjoner.filter((rep) => rep.id !== id);
        const deletedRepetisjon = await client.graphql({
            query: deleteRepetisjon,
            variables: {
                input: {
                    id: "YOUR_RECORD_ID"
                }
            }
        });
        fetchRep().then(r => {setRepetisjoner(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/nyRep?id=' + oktid)}>Legg til Repetisjon</button>
            <button onClick={() => navigate("/endreOkt")}>Endre Økt</button>
            <View margin="3rem 0">
                {repetisjoner.map((rep) => (
                    <Flex
                        key={rep.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{rep.fokus}</Text>
                        <Button variation="link" onClick={() => deletedRep(rep)}>Slett repetisjon</Button>
                        <button onClick={() => navigate('/endreRepetisjon?id=' + rep.id)}>Endre repetisjon</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};

export default Okt;