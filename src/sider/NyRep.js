import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {createRepetisjon} from "../graphql/mutations";
import {generateClient} from "aws-amplify/api";

const client = generateClient()
const NyRep = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const oktid = searchParams.get('id');
    const navigate = useNavigate();
    const [rep, setRep] = useState({
        navn: '',
        resultat: '',
        notat: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRep((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    async function lastopp() {
        try {
            const newRepetisjon = await client.graphql({
                query: createRepetisjon,
                variables: {
                    input: {
                        "navn": rep.navn,
                        "resultat": rep.resultat,
                        "notat": rep.notat,
                        "oektID": oktid
                    }
                }
            });
            navigate('/okt?id=' + oktid);

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
                    <label htmlFor="navn">Navn: </label>
                    <input
                        type="text"
                        id = "navn"
                        name= "navn"
                        value= {rep.navn}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="resultat">Resultat: </label>
                    <input
                        type="text"
                        id = "resultat"
                        name= "resultat"
                        value= {rep.resultat}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="notat">Notat: </label>
                    <textarea
                        id="notat"
                        name="notat"
                        value={rep.notat}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={() => navigate('/okt?id=' + oktid)}>Avbryt</button>
                    <button type="submit">Lag ny Repetisjon</button>
                </div>
            </form>
        </div>
    );
};

export default NyRep;