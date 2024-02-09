import React, {useEffect, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import {generateClient} from "aws-amplify/api";
import {Button, Flex, Text, View} from "@aws-amplify/ui-react";
import {deleteOekt} from "../graphql/mutations";
import {oektsByTreningID} from "../graphql/queries";

const client = generateClient()

const Trening = () => {
    const [okter, setOkter] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const treningsid = searchParams.get('id');
    const navigate = useNavigate();

    useEffect(() => {
        fetchOkter().then(r => {setOkter(r)});
    }, []);

    async function fetchOkter() {
        const oneOekt = await client.graphql({
            query: oektsByTreningID,
            variables: { treningID: treningsid }
        });
        console.log(oneOekt);
        return oneOekt?.data?.oektsByTreningID?.items
    }

    async function deletedOekt({ id }) {
        const newOkter = okter.filter((okt) => okt.id !== id);
        const deletedOekt = await client.graphql({
            query: deleteOekt,
            variables: {
                input: {
                    id: id
                }
            }
        });
        fetchOkter().then(r => {setOkter(r)});
    }

    return (
        <div>
            <button onClick={() => navigate('/NyOkt?treningsid=' + treningsid)}>Legg til Økt</button>
            <button onClick={() => navigate("/endreTrening")}>Endre Trening</button>
            <View margin="3rem 0">
                {okter.map((okt) => (
                    <Flex
                        key={okt.id}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>{okt.fokus}</Text>
                        <Button variation="link" onClick={() => deletedOekt(okt)}>Slett økt</Button>
                        <button onClick={() => navigate('/endreOkt?id=' + okt.id)}>Endre Økt</button>
                    </Flex>
                ))}
            </View>
        </div>
    );
};

export default Trening;