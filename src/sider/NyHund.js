import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {generateClient} from "aws-amplify/api";
import moment from "moment";
import { createHund } from "../graphql/mutations";
import InputColor from 'react-input-color';

const client = generateClient()


const NyHund = () => {
    const [hund, setHund] = useState({
        navn: '',
        dato: moment().format('YYYY-MM-DD'),
        titler: [],
        rase: '',
        farge: '#5e72e4',
    });
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHund((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = e => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setHund((prevState) => ({
            ...prevState,
            dato: newDate,
        }));
    };

    const handleFargeChange = (color) => {
        // Oppdater fargeverdien i hund-tilstanden når fargen endres
        setHund({
            ...hund,
            farge: color.hex,
        });
    };

    async function lastopp() {
        try {
            const newHund = await client.graphql({
                query: createHund,
                variables: {
                    input: {
                        "navn": hund.navn,
                        "bursdag": hund.dato,
                        "titler": hund.titler,
                        "rase": hund.rase,
                        "farge": hund.farge,
                    }
                }
            });
            console.log(newHund);
            navigate('/profil');

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
            <h1>Ny Hund</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="navn">Navn: </label>
                    <input
                        type="text"
                        id = "navn"
                        name= "navn"
                        value= {hund.navn}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dato">Bursdag:</label>
                    <input
                        type="date"
                        id= "dato"
                        name= "dato"
                        value={hund.dato}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rase">Rase: </label>
                    <input
                        type="text"
                        id = "rase"
                        name= "rase"
                        value= {hund.rase}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Gjenkjenningsfarge: </label>
                    <InputColor
                        initialValue={hund.farge}
                        onChange={handleFargeChange}
                        placement="right"
                    />
                    <div
                        style={{
                            width: 50,
                            height: 50,
                            marginTop: 20,
                            backgroundColor: hund.farge.rgba,
                        }}
                    />
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Avbryt</button>
                    <button type="submit">Lag ny hund</button>
                </div>
            </form>
        </div>
    );
};

export default NyHund;