import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {updateOekt} from "../graphql/mutations";
import {getOekt, listHunds} from "../graphql/queries";
import {generateClient} from "aws-amplify/api";
import Select from "react-select";

const client = generateClient()

const EndreOkt = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const oktid = searchParams.get('id');
    const [hunder , setHunder] = useState([])
    const [okt, setOkt] = useState({
        fokus: '',
        egenvurdering: '',
        notat: '',
        hund: '',
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchHunder().then(r => {setHunder(r)});
        fetchOekter().then(r => {setOkt({
            ...okt,
            fokus: r.fokus,
            egenvurdering: r.egenvurdering,
            notat: r.notat,
            hund: r.hund
        });});
    }, []);

    async function fetchHunder() {
        let allHundsResponds = await client.graphql({
            query: listHunds
        });
        console.log(allHundsResponds);
        return allHundsResponds?.data?.listHunds?.items
    }

    async function fetchOekter() {
        const oneOekt = await client.graphql({
            query: getOekt,
            variables: { id: oktid }
        });
        return oneOekt?.data?.getOekt
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setOkt((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setOkt({ ...okt, hund: selectedOption.value });
    };

    async function lastopp() {
        try {
            const updatedOekt = await client.graphql({
                query: updateOekt,
                variables: {
                    input: {
                        "fokus": okt.fokus,
                        "egenvurdering": okt.egenvurdering,
                        "notat": okt.notat,
                        "hundID": okt.hund.id
                    }
                }
            });
            navigate('/okt?id=' + updatedOekt.data.updateOekt.id.toString());

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
                    <label htmlFor="fokus">Fokus: </label>
                    <input
                        type="text"
                        id = "fokus"
                        name= "fokus"
                        value= {okt.fokus}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hund">Hvilken hund ønsker du å trene:</label>
                    <Select
                        id="hund"
                        name="hund"
                        value={{ value: okt.hund, label: okt.hund.navn }}
                        onChange={handleSelectChange}
                        options={hunder.map((hund) => ({ value: hund, label: hund.navn }))}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="notat">Notat: </label>
                    <textarea
                        id="notat"
                        name="notat"
                        value={okt.notat}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Avbryt</button>
                    <button type="submit">Endre Økt</button>
                </div>
            </form>
        </div>
    );
};

export default EndreOkt;