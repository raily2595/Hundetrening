import React, {useEffect, useState} from "react";
import {listHunds} from "../graphql/queries";
import {generateClient} from "aws-amplify/api";
import strings from './../strings.json';
import {Link} from "react-router-dom";

const client = generateClient()

const Startside = () => {
    const [hunder, setHunder] = useState([]);
    const [ingenhunder, setIngenHunder] = useState(false)
    useEffect(() => {
        fetchHunder().then(r => {setHunder(r)});
        if (hunder.length !== 0){
            setIngenHunder(false)
        }
        else {
            setIngenHunder(true)
        }
    }, [hunder]);

    async function fetchHunder() {
        let allHundsResponds = await client.graphql({
            query: listHunds
        });
        return allHundsResponds?.data?.listHunds?.items
    }

    return (
        <main>
            <div className="main-content">
                <h1>Hei</h1>
                {ingenhunder ?  (
                        <Link
                            className="menu-button"
                            to="/nyhund"
                        >
                            {strings.nyhund}
                        </Link>
                ) : (
                    <div></div>
                )}
            </div>
        </main>
    );
};

export default Startside;