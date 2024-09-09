import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const DoctorsChart = ({ doctorSpecialtiesData }) => {
    const { t } = useTranslation();
    
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2">
            <h2 className="text-xl font-semibold">{t('Medecins')}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={doctorSpecialtiesData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="numberOfDoctors" fill="#1f2937" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DoctorsChart;
