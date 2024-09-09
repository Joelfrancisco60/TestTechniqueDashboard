import React from 'react';
import { useTranslation } from 'react-i18next';

const OverviewSection = ({ hospitalData }) => {
    const { t } = useTranslation();
    return (
        <div className="flex justify-center">
            <div className="bg-white shadow-lg p-6 rounded-lg text-center w-full lg:w-1/2">
                <h2 className="text-xl font-semibold">{t('Overview')} - {hospitalData.name}</h2>
                <p><strong>{t('Total Patients')}:</strong> {hospitalData.overview.totalPatients}</p>
                <p><strong>{t('Satisfaction Rate')}:</strong> {hospitalData.overview.satisfactionRate}</p>
                <p><strong>{t('Total Treatments')}:</strong> {hospitalData.overview.totalTreatments}</p>
                <p><strong>{t('Number of Doctors')}:</strong> {hospitalData.overview.numberOfDoctors}</p>
                <p><strong>{t('Number of Nurses')}:</strong> {hospitalData.overview.numberOfNurses}</p>
            </div>
        </div>
    );
};

export default OverviewSection;
