import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {createOekt} from "../graphql/mutations";
import {listHunds} from "../graphql/queries";
import {generateClient} from "aws-amplify/api";
import Select from "react-select";

const client = generateClient()

const NyOkt = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const treningsid = searchParams.get('treningsid');
    const kursid = searchParams.get('kursid');
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
    }, []);

    async function fetchHunder() {
        let allHundsResponds = await client.graphql({
            query: listHunds
        });
        console.log(allHundsResponds);
        return allHundsResponds?.data?.listHunds?.items
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
            const newOekt = await client.graphql({
                query: createOekt,
                variables: {
                    input: {
                        "treningID": treningsid,
                        "fokus": okt.fokus,
                        "notat": okt.notat,
                        "kursID": kursid,
                        "hundID": okt.hund.id,
                        "egenvurdering": okt.egenvurdering
                    }
                }
            });
            navigate('/okt?id=' + newOekt.data.createOekt.id.toString());

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
                    <label htmlFor="egenvurdering">Egenvurdering: </label>
                    <textarea
                        id="egenvurdering"
                        name="egenvurdering"
                        value={okt.egenvurdering}
                        onChange={handleInputChange}
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
                    <button type="submit">Lag ny Økt</button>
                </div>
            </form>
        </div>
    );
};

export default NyOkt;