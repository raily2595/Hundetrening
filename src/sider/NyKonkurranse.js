import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {generateClient} from "aws-amplify/api";
import moment from "moment/moment";
import {createHendelse, createKonkurranse} from "../graphql/mutations";
import Select from "react-select";
const client = generateClient()


const NyKonkurranse = () => {
    const [hendelse, setHendelse] = useState({
        navn: '',
        sted: '',
        miljo: '',
        dato: moment().format('YYYY-MM-DD'),
        gren:'Agility',
        handleliste: '',
        pakkeliste: ''
    });
    const navigate = useNavigate()

    const options = [
        { value: 'Agility', label: 'Agility' },
        { value: 'Rallydighet', label: 'Rallylydighet' },
        { value: 'Lydighet', label: 'Lydighet' },
        { value: 'Nosework', label: 'Nosework' },
        { value: 'Smeller', label: 'Smeller' },
        { value: 'Blodspor', label: 'Blodspor' },
        { value: 'Freestyle', label: 'Freestyle' },
        { value: 'Bruks', label: 'Bruks' },
        { value: 'Hverdagslydighet', label: 'Hverdagslydighet' },
        { value: 'Andre ting', label: 'Andre ting' },
    ];
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setHendelse((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setHendelse((prevState) => ({
            ...prevState,
            gren: selectedOption.value,
        }));
    };

    const handleDateChange = e => {
        const newDate = moment(new Date(e.target.value)).format('YYYY-MM-DD');
        setHendelse((prevState) => ({
            ...prevState,
            dato: newDate,
        }));
    };

    async function lastopp() {
        console.log("Kake")
        try {
            console.log("pølse")
            const newHendelse = await client.graphql({
                query: createHendelse,
                variables: {
                    input: {
                        "navn": hendelse.navn,
                        "sted": hendelse.sted,
                        "miljoe": hendelse.miljo,
                        "dato": hendelse.dato,
                        "type": hendelse.gren,
                        "handleliste": hendelse.handleliste,
                        "pakkeliste": hendelse.pakkeliste
                    }
                }
            });
            console.log("pølse1")
            console.log("Hendelse laget", newHendelse.data.createHendelse)
            const newKonkurranse = await client.graphql({
                query: createKonkurranse,
                variables: {
                    input: {
                        "konkurranseHendelseId": newHendelse.data.createHendelse.id,
                    }
                }
            });
            navigate('/konkurranse?id=' + newKonkurranse.data.createKonkurranse.id.toString());

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
            <h1>Ny Konkurranse</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="navn">Navn: </label>
                    <input
                        type="text"
                        id = "navn"
                        name= "navn"
                        value= {hendelse.navn}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="sted">Sted: </label>
                    <input
                        type="text"
                        id = "sted"
                        name= "sted"
                        value= {hendelse.sted}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="miljo">Beskrivelse av miljøet: </label>
                    <input
                        type="text"
                        id = "miljo"
                        name= "miljo"
                        value= {hendelse.miljo}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dato">Dato:</label>
                    <input
                        type="date"
                        id= "dato"
                        name= "dato"
                        value={hendelse.dato}
                        onChange={handleDateChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gren">Hvilken gren ønsker du å trene:</label>
                    <Select
                        id="gren"
                        name="gren"
                        value={{ value: hendelse.gren, label: hendelse.gren }}
                        onChange={handleSelectChange}
                        options={options}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="handleliste">Handleliste: </label>
                    <textarea
                        id="handleliste"
                        name="handleliste"
                        value={hendelse.handleliste}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="pakkeliste">Pakkeliste: </label>
                    <textarea
                        id="pakkeliste"
                        name="pakkeliste"
                        value={hendelse.pakkeliste}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={() => navigate("/")}>Avbryt</button>
                    <button type="submit">Lag ny konkurranse</button>
                </div>
            </form>
        </div>
    );
};

export default NyKonkurranse;