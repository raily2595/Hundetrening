import {generateClient} from "aws-amplify/api";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {listKonkurranses} from "../graphql/queries";
import {deleteKonkurranse} from "../graphql/mutations";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";

const client = generateClient()

const Konker = () => {
    const navigate = useNavigate();
    const [konker, setKonker] = useState([])

    useEffect(() => {
        fetchKonker().then(r => {setKonker(r)});
    }, []);

    async function fetchKonker() {
        // List all items
        const allKonkurranses = await client.graphql({
            query: listKonkurranses
        });
        console.log(allKonkurranses);
        return allKonkurranses?.data?.listKonkurranses?.items
    }

    async function deletedKonk({ id }) {
        const newKonker = konker.filter((konk) => konk.id !== id);
        const deletedKonkurranse = await client.graphql({
            query: deleteKonkurranse,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchKonker().then(r => {setKonker(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/nykonk')}>Legg til Konkurranse</button>
            <View margin="3rem 0">
                {konker.map((konk) => (
                    <Flex
                        key={konk.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{konk.fokus}</Text>
                        <button onClick={() => navigate('/konkurranse?id=' + konk.id)}>Vis Konkurranse</button>
                        <Button variation="link" onClick={() => deletedKonk(konk)}>Slett Konkurranse</Button>
                        <button onClick={() => navigate('/endreKonkurranse?id=' + konk.id)}>Endre Konkurranse</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};
export default Konker;