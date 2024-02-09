import React, {useEffect, useState} from "react";
import Select from 'react-select';
import moment from 'moment';
import {useLocation, useNavigate} from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import {updateHendelse} from '../graphql/mutations';
import {getHendelse, getTrening} from "../graphql/queries";

const client = generateClient()


const EndreTrening = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const treningid = searchParams.get('id');
    const [treningHendelseId, setTreningHenID] = useState('');
    const [hendelse, setHendelse] = useState({
        id: '',
        navn: '',
        sted: '',
        miljo: '',
        dato: '',
        gren:'',
        handleliste: '',
        pakkeliste: ''
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchHendelese().then(r => {setHendelse({
            ...hendelse,
            id: r.id,
            navn: r.navn,
            sted: r.sted,
            miljo: r.miljo,
            dato: r.dato,
            gren: r.gren,
            handleliste: r.handleliste,
            pakkeliste: r.pakkeliste
        })})
    }, []);

    async function fetchHendelese() {
        const oneTrening = await client.graphql({
            query: getTrening,
            variables: { id: treningid }
        });
        setTreningHenID(oneTrening?.data?.getTrening?.treningHendelseId)

        const oneHendelse = await client.graphql({
            query: getHendelse,
            variables: { id: treningHendelseId }
        });
        return oneHendelse?.data?.getHendelse
    }

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
        try {
            const updatedHendelse = await client.graphql({
                query: updateHendelse,
                variables: {
                    input: {
                        "id": hendelse.id,
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
            navigate('/trening?id=' + treningid);

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
            <h1>Endre Trening</h1>
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
                    <button type="submit">Endre trening</button>
                </div>
            </form>
        </div>
    );
};

export default EndreTrening;