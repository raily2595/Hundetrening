import {generateClient} from "aws-amplify/api";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {listHunds} from "../graphql/queries";
import {createLoep} from "../graphql/mutations";
import Select from "react-select";

const client = generateClient()

const NyttLop = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const konkurranseid = searchParams.get('id');
    const [hunder , setHunder] = useState([])
    const [lop, setLop] = useState({
        fokus: '',
        egenvurdering: '',
        resultat: '',
        notat: '',
        dommer: '',
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
        setLop((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSelectChange = (selectedOption) => {
        setLop({ ...lop, hund: selectedOption.value });
    };

    async function lastopp() {
        try {
            const newLoep = await client.graphql({
                query: createLoep,
                variables: {
                    input: {
                        "fokus": lop.fokus,
                        "egenvurdering": lop.egenvurdering,
                        "resultat": lop.resultat,
                        "notat": lop.notat,
                        "dommer": lop.dommer,
                        "konkurranseID": konkurranseid,
                        "hundID": lop.hund.id
                    }
                }
            });
            navigate('/konkurranse?id=' + konkurranseid);

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
                        value= {lop.fokus}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="egenvurdering">Egenvurdering: </label>
                    <textarea
                        id="egenvurdering"
                        name="egenvurdering"
                        value={lop.egenvurdering}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="resultat">Resultat: </label>
                    <input
                        type="text"
                        id = "resultat"
                        name= "resultat"
                        value= {lop.resultat}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="notat">Notat: </label>
                    <textarea
                        id="notat"
                        name="notat"
                        value={lop.notat}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="dommer">Dommer: </label>
                    <input
                        type="text"
                        id = "dommer"
                        name= "dommer"
                        value= {lop.dommer}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hund">Hvilken hund:</label>
                    <Select
                        id="hund"
                        name="hund"
                        value={{ value: lop.hund, label: lop.hund.navn }}
                        onChange={handleSelectChange}
                        options={hunder.map((hund) => ({ value: hund, label: hund.navn }))}
                        required
                    />
                </div>

                <div>
                    <button onClick={() => navigate('/konkurranse?id=' + konkurranseid)}>Avbryt</button>
                    <button type="submit">Lag nytt Løp</button>
                </div>
            </form>
        </div>
    );
};

export default NyttLop;
