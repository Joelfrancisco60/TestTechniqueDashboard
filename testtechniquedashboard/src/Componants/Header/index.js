import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import flagFr from "./flags/Flag_of_France.svg"
import flagUSA from "./flags/Flag_of_the_United_States.svg"

const Header = () => {
    const [hospitalName, setHospitalName] = useState('');
    const { i18n } = useTranslation();

    const currentLanguage = i18n.language;

    useEffect(() => {
        fetch('./data_exemple1.JSON')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setHospitalName(data[0].name);
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement des données de l\'hôpital:', error);
            });
    }, []);

    const changeLanguage = () => {
        const newLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
            <div>
                <h1 className="text-lg font-bold">{hospitalName}</h1>
            </div>
            <div className="flex">
                <img
                    src={currentLanguage === 'fr' ? flagUSA : flagFr}
                    alt={currentLanguage === 'fr' ? 'Switch to English' : 'Passer en français'}
                    className="w-6 h-6 cursor-pointer object-cover"
                    onClick={changeLanguage}
                />
            </div>
        </header>
    );
};

export default Header;
