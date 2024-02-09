import strings from './../strings.json';
import React from "react";
import {Divider, Menu, MenuItem} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
const Meny = () => {
    const navigate = useNavigate()
    const handleStartside = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/');
    };
    const handleTrening = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/treninger');
    };
    const handleNyTrening = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/nytrening');
    };
    const handleKonk = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/konker');
    };
    const handleNyKonk = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/nykonk');
    };
    const handleKurs = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/kurser');
    };
    const handleNyKurs = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/nyttkurs');
    };
    const handleProfil = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/profil');
    };

    const handleNyHund = () => {
        // Naviger til den andre siden når onSuccess utløses
        navigate('/nyhund');
    };
    return (
        <div>
            <Menu
                menuAlign="start"
            >
                <MenuItem onClick={handleStartside}>
                    {strings.startside}
                </MenuItem>
                <MenuItem onClick={handleTrening}>
                    {strings.trening}
                </MenuItem>
                <MenuItem onClick={handleNyTrening}>
                    {strings.nytrening}
                </MenuItem>
                <MenuItem onClick={handleKonk}>
                    {strings.konkurranse}
                </MenuItem>
                <MenuItem onClick={handleNyKonk}>
                    {strings.nykonk}
                </MenuItem>
                <MenuItem onClick={handleKurs}>
                    {strings.kurs}
                </MenuItem>
                <MenuItem onClick={handleNyKurs}>
                    {strings.nyttkurs}
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfil}>
                    {strings.profil}
                </MenuItem>
                <MenuItem onClick={handleNyHund}>
                    {strings.nyhund}
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Meny;