import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMonth, setYear } from '../../actions';
import OverviewSection from './OverviewSection';
import DoctorsChart from './DoctorsChart';
import HospitalizationsChart from './HospitalizationsChart';

const DashBoard = () => {
    const [dataExemple1, setDataExemple1] = useState(null);
    const dispatch = useDispatch();

    const selectedMonth = useSelector((state) => state.date.month);
    const selectedYear = useSelector((state) => state.date.year);

    useEffect(() => {
        fetch('./data_exemple1.JSON')
            .then(response => response.json())
            .then(data => {
                setDataExemple1(data);
                if (data.length > 0) {
                    dispatch(setMonth("All"));
                    dispatch(setYear("All"));
                }
            })
            .catch(error => {
                console.error("Error loading the JSON file:", error);
            });
    }, [dispatch]);

    if (!dataExemple1) {
        return <div className="text-center text-gray-500">No valid hospital data</div>;
    }

    const hospitalData = dataExemple1[0];
    const doctorSpecialtiesData = hospitalData.doctorSpecialties.map(specialty => ({
        name: specialty.specialty,
        numberOfDoctors: specialty.numberOfDoctors || 0
    }));

    const monthlyHospitalizations = hospitalData.monthlyHospitalizations.filter(item =>
        (selectedMonth === 'All' || item.month === selectedMonth) &&
        (selectedYear === 'All' || item.year.toString() === selectedYear)
    );

    const months = [...new Set(hospitalData.monthlyHospitalizations.map(item => item.month))];
    const years = [...new Set(hospitalData.monthlyHospitalizations.map(item => item.year.toString()))];

    return (
        <div className="flex flex-col h-screen p-4 space-y-4">
            <OverviewSection hospitalData={hospitalData} />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                <DoctorsChart doctorSpecialtiesData={doctorSpecialtiesData} />
                <HospitalizationsChart 
                    monthlyHospitalizations={monthlyHospitalizations}
                    months={months}
                    selectedMonth={selectedMonth}
                    selectedYear={selectedYear}
                    years={years}
                    dispatch={dispatch}
                    setMonth={setMonth}
                    setYear={setYear}
                />
            </div>
        </div>
    );
};

export default DashBoard;
