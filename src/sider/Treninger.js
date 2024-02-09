import {generateClient} from "aws-amplify/api";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {listTrenings} from "../graphql/queries";
import {deleteTrening} from "../graphql/mutations";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";

const client = generateClient()

const Treninger = () => {
    const navigate = useNavigate();
    const [treninger, setTreninger] = useState([])

    useEffect(() => {
        fetchTreninger().then(r => {setTreninger(r)});
    }, []);

    async function fetchTreninger() {
        // List all items
        const allTrenings = await client.graphql({
            query: listTrenings
        });
        return allTrenings?.data?.listTrenings?.items
    }

    async function deletedTrening({ id }) {
        const newTreninger = treninger.filter((trening) => trening.id !== id);
        const deletedTrening = await client.graphql({
            query: deleteTrening,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchTreninger().then(r => {setTreninger(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/nytrening')}>Legg til Trening</button>
            <View margin="3rem 0">
                {treninger.map((trening) => (
                    <Flex
                        key={trening.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{trening.fokus}</Text>
                        <button onClick={() => navigate('/trening?id=' + trening.id)}>Vis trening</button>
                        <Button variation="link" onClick={() => deletedTrening(trening)}>Slett trening</Button>
                        <button onClick={() => navigate('/endreTrening?id=' + trening.id)}>Endre trening</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};
export default Treninger;