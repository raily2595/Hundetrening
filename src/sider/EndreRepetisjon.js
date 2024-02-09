import {generateClient} from "aws-amplify/api";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import { updateRepetisjon} from "../graphql/mutations";
import {getRepetisjon} from "../graphql/queries";

const client = generateClient()
const EndreRepetisjon = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const repid = searchParams.get('id');
    const navigate = useNavigate();
    const [rep, setRep] = useState({
        repnavn: '',
        represultat: '',
        repnotat: '',
        repoktid: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRep((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        lastned().then(r => {
            console.log(r)
            setRep({
                ...rep,
                repnavn: r.navn,
                represultat: r.resultat,
                repnotat: r.notat,
                repoktid: r.oektID
            });
        });
    }, []);

    async function lastned() {
        try {
            // Get a specific item
            const oneRepetisjon = await client.graphql({
                query: getRepetisjon,
                variables: { id: repid }
            });
            console.log("kake")
            console.log(oneRepetisjon)
            return oneRepetisjon?.data?.getRepetisjon
        } catch (err){
            console.log("Error ",err);
        }
    }
    async function lastopp() {
        try {
            console.log(rep.repoktid)
            console.log(rep.repnavn)
            console.log(rep.represultat)
            console.log(rep.repnotat)
            const updatedRepetisjon = await client.graphql({
                query: updateRepetisjon,
                variables: {
                    input: {
                        "id": repid,
                        "navn": rep.repnavn,
                        "resultat": rep.represultat,
                        "notat": rep.repnotat,
                        "oektID": rep.repoktid
                    }
                }
            });
            console.log(updatedRepetisjon)
            navigate('/okt?id=' + rep.repoktid);

        } catch (err) {
            console.log("Error ",err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        lastopp();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="repnavn">Navn: </label>
                    <input
                        type="text"
                        id = "repnavn"
                        name= "repnavn"
                        value= {rep.repnavn}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="represultat">Resultat: </label>
                    <input
                        type="text"
                        id = "represultat"
                        name= "represultat"
                        value= {rep.represultat}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="repnotat">Notat: </label>
                    <textarea
                        id="repnotat"
                        name="repnotat"
                        value={rep.repnotat}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={() => navigate('/okt?id=' + rep.repoktid)}>Avbryt</button>
                    <button type="submit">Endre Repetisjon</button>
                </div>
            </form>
        </div>
    );
};
export default EndreRepetisjon;