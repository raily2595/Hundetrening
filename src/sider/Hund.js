import {generateClient} from "aws-amplify/api";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getHund} from "../graphql/queries";
import {deleteHund} from "../graphql/mutations";
import {Button, Text} from "@aws-amplify/ui-react";
import strings from "../strings.json";
import ColoredBox from "./ColeredBox";

const client = generateClient()


const Hund = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hundid = searchParams.get('id');
    const [hund, setHund] = useState({
        navn: '',
        dato: '',
        titler: '',
        rase: '',
        farge: '',
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchHund().then(r => {setHund({
            ...hund,
            navn: r.navn,
            dato: r.dato,
            titler: r.titler,
            rase: r.rase,
            farge: r.farge
        })})
    }, []);

    async function fetchHund() {

        const oneHund = await client.graphql({
            query: getHund,
            variables: { id: hundid }
        });
        return oneHund?.data?.getHund
    }

    async function deletedHund({ id }) {
        const deletedHund = await client.graphql({
            query: deleteHund,
            variables: {
                input: {
                    id: id
                }
            }
        });
        navigate("/profil")
    }

    return (
        <div>
            <h1>{hund.navn} + sin profil</h1>
            <div>
                <label>Bursdag</label>
                <Text>{hund.dato}</Text>
            </div>
            <div>
                <label>Titler</label>
                <Text>{hund.titler}</Text>
            </div>
            <div>
                <label>Rase</label>
                <Text>{hund.rase}</Text>
            </div>
            <ColoredBox color={hund.farge} />
            <Button variation="link" onClick={() => deletedHund(hund)}>Delete hund</Button>
            <button onClick={() => navigate('/endreHund?id=' + hund.id)}>{strings.oppHund}</button>
            <button onClick={() => navigate("/profil")}>Tilbake</button>
        </div>
    );
};

export default Hund;