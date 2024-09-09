import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTranslation } from 'react-i18next';

const HospitalizationsChart = ({ monthlyHospitalizations, months, selectedMonth, selectedYear, years, dispatch, setMonth, setYear }) => {
    const { t } = useTranslation();
    
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/2">
            <div className="flex flex-wrap space-x-4 items-center">
                <div className="flex items-center space-x-2">
                    <label>{t('Month')} :</label>
                    <select
                        value={selectedMonth}
                        onChange={(e) => dispatch(setMonth(e.target.value))}
                        className="p-2 border rounded-md"
                    >
                        <option value="All">{t('All')}</option>
                        {months.map(month => (
                            <option key={month} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center space-x-2">
                    <label>{t('Year')} :</label>
                    <select
                        value={selectedYear}
                        onChange={(e) => dispatch(setYear(e.target.value))}
                        className="p-2 border rounded-md"
                    >
                        <option value="All">{t('All')}</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>
            <h2 className="text-xl font-semibold">{t('Hospitalizations')}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={monthlyHospitalizations}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name={t('Hospitalizations')} dataKey="value" stroke="#1f2937" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HospitalizationsChart;
