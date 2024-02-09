import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {generateClient} from "aws-amplify/api";
import moment from "moment";
import {updateHund} from "../graphql/mutations";
import InputColor from 'react-input-color';
import {getHund} from "../graphql/queries";

const client = generateClient()


const EndreHUnd = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hundid = searchParams.get('id');
    const [hund, setHund] = useState({
        navn: '',
        dato: '',
        rase: '',
        farge: '',
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchHund().then(r => {setHund({
            ...hund,
            navn: r.navn,
            dato: r.bursdag,
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
            const updatedHund = await client.graphql({
                query: updateHund,
                variables: {
                    input: {
                        "id": hundid,
                        "navn": hund.navn,
                        "bursdag": hund.dato,
                        "rase": hund.rase,
                        "farge": hund.farge,
                    }
                }
            });
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
            <h1>Endre Hund</h1>
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
                    <button type="submit">Endre hund</button>
                </div>
            </form>
        </div>
    );
};

export default EndreHUnd;