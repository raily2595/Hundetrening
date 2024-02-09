import {generateClient} from "aws-amplify/api";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getLoep, listHunds} from "../graphql/queries";
import {updateLoep} from "../graphql/mutations";
import Select from "react-select";

const client = generateClient()

const EndreLop = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lopid = searchParams.get('id');
    const [hunder , setHunder] = useState([])
    const [lop, setLop] = useState({
        fokus: '',
        egenvurdering: '',
        resultat: '',
        notat: '',
        dommer: '',
        hund: '',
        konkurranseid: '',
    });
    const navigate = useNavigate()

    useEffect(() => {
        fetchHunder().then(r => {setHunder(r)});
        fetchLop().then(r => {setLop({
            ...lop,
            fokus: r.fokus,
            egenvurdering: r.egenvurdering,
            resultat: r.resultat,
            notat: r.notat,
            dommer: r.dommer,
            hund: r.hund,
            konkurranseid: r.konkurranseID
        })})
    }, []);

    async function fetchHunder() {
        let allHundsResponds = await client.graphql({
            query: listHunds
        });
        console.log(allHundsResponds);
        return allHundsResponds?.data?.listHunds?.items
    }

    async function fetchLop() {
        const oneLoep = await client.graphql({
            query: getLoep,
            variables: { id: lopid }
        });
        return oneLoep?.data?.getLoep
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
            const updatedLoep = await client.graphql({
                query: updateLoep,
                variables: {
                    input: {
                        "id": lopid,
                        "fokus": lop.fokus,
                        "egenvurdering": lop.egenvurdering,
                        "resultat": lop.resultat,
                        "notat": lop.notat,
                        "dommer": lop.dommer,
                        "hundID": lop.hund.id
                    }
                }
            });
            navigate('/konkurranse?id=' + lop.konkurranseid);

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
                    <button onClick={() => navigate('/konkurranse?id=' + lop.konkurranseid)}>Avbryt</button>
                    <button type="submit">Endre Løp</button>
                </div>
            </form>
        </div>
    );
};

export default EndreLop;
