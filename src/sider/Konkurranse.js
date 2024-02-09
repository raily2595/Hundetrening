import React, {useEffect, useState} from "react";
import {generateClient} from "aws-amplify/api";
import {useLocation, useNavigate} from "react-router-dom";
import {loepsByKonkurranseID} from "../graphql/queries";
import {deleteLoep} from "../graphql/mutations";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
const client = generateClient()

const Konkurranse = () => {
    const [loper, setLoper] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const konkurranseid = searchParams.get('id');
    const navigate = useNavigate();

    useEffect(() => {
        fetchLoper().then(r => {setLoper(r)});
    }, []);

    async function fetchLoper() {
        // Get a specific item
        const oneLoep = await client.graphql({
            query: loepsByKonkurranseID,
            variables: { konkurranseID: konkurranseid }
        });
        console.log(oneLoep);
        return oneLoep?.data?.loepsByKonkurranseID?.items
    }

    async function deletedLoep({ id }) {
        const newLoper = loper.filter((lop) => lop.id !== id);
        const deletedLoep = await client.graphql({
            query: deleteLoep,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchLoper().then(r => {setLoper(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/NyttLop?id=' + konkurranseid)}>Legg til Løp</button>
            <button onClick={() => navigate("/endreKonkurranse")}>Endre Konkurranse</button>
            <View margin="3rem 0">
                {loper.map((lop) => (
                    <Flex
                        key={lop.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{lop.fokus}</Text>
                        <Button variation="link" onClick={() => deletedLoep(lop)}>Slett løp</Button>
                        <button onClick={() => navigate("/endreLop")}>Endre Løp</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};
export default Konkurranse;