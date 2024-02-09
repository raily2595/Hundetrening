import {generateClient} from "aws-amplify/api";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteKurs} from "../graphql/mutations";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
import {listKurs} from "../graphql/queries";

const client = generateClient()

const Kurser = () => {
    const navigate = useNavigate();
    const [kurser, setKurser] = useState([])

    useEffect(() => {
        fetchKurser().then(r => {setKurser(r)});
    }, []);

    async function fetchKurser() {
        // List all items
        const allKurss = await client.graphql({
            query: listKurs
        });
        console.log(allKurss);
        return allKurss?.data?.listKurss?.items
    }

    async function deletedKurs({ id }) {
        const newKurser = kurser.filter((kurs) => kurs.id !== id);
        const deletedKurs = await client.graphql({
            query: deleteKurs,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchKurser().then(r => {setKurser(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/nykurs')}>Legg til Kurs</button>
            <View margin="3rem 0">
                {kurser.map((kurs) => (
                    <Flex
                        key={kurs.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{kurs.fokus}</Text>
                        <button onClick={() => navigate('/Kurs?id=' + kurs.id)}>Vis Kurs</button>
                        <Button variation="link" onClick={() => deletedKurs(kurs)}>Slett kurs</Button>
                        <button onClick={() => navigate('/endreKurs?id=' + kurs.id)}>Endre Kurs</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};
export default Kurser;