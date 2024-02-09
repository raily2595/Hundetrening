import React, {useEffect, useState} from "react";
import {generateClient} from "aws-amplify/api";
import moment from "moment/moment";
import {useLocation, useNavigate} from "react-router-dom";
import {updateHendelse, updateKurs} from "../graphql/mutations";
import Select from "react-select";
import {getHendelse, getKurs} from "../graphql/queries";

const client = generateClient()


const EndreKurs = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const kursid = searchParams.get('id');
    const [kursHendelsId, setKursHenID] = useState('');
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
    const [kursholder, setKursholder] = useState('')
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

        const oneKurs = await client.graphql({
            query: getKurs,
            variables: { id: kursid }
        });

        setKursholder(oneKurs?.data?.getKurs?.kursholder)
        setKursHenID(oneKurs?.data?.getKurs?.kursHendelseId)

        const oneHendelse = await client.graphql({
            query: getHendelse,
            variables: { id: kursHendelsId }
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

    const handleKursholderChange = (e) => {
        setKursholder(e.target.value);
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

            const updatedKurs = await client.graphql({
                query: updateKurs,
                variables: {
                    input: {
                        "kursholder": kursholder,
                        "kursHendelseId": kursHendelsId,
                        "Oekter": []
                    }
                }
            });
            navigate('/kurs?id=' + kursid);

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
            <h1>Endre Kurs</h1>
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
                    <label htmlFor="kursholder">Kursholder: </label>
                    <input
                        type="text"
                        id = "kursholder"
                        name= "kursholder"
                        value= {kursholder}
                        onChange={handleKursholderChange}
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
                    <button type="submit">Endre kurs</button>
                </div>
            </form>
        </div>
    );
};

export default EndreKurs;