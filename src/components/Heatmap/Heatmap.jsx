import React, { useState } from 'react';
import vehicleData, { countDischargedVehicles, countFullyChargedVehicles, countMediumChargedVehicles, countShortChargedVehicles } from '../../database/vehicleData';
import SmallCard from '../Cards/SmallCard/SmallCard';
import ReactApexChart from 'react-apexcharts';
import './Heatmap.css';

//icons import 
import Lightning from '../../assets/Lightning';
import "../../assets/carimg.png"

function Heatmap() {
    const totalVehicles = vehicleData.length;
    const totalKm = vehicleData.reduce((acc, vehicle) => acc + vehicle.trip_kms, 0);
    const totalTrips = vehicleData.reduce((acc, vehicle) => acc + vehicle.no_of_trips, 0);
    const carbonEmmissionSaved = vehicleData.reduce((acc, vehicle) => acc + vehicle.co2_emission, 0);
    const avgTripsPerDay = vehicleData.reduce((acc, vehicle) => acc + vehicle.avg_trip, 0) / vehicleData.length;

    const avgKMPerTrip = totalKm / totalTrips;
    const avgWorkHours = vehicleData.reduce((acc, vehicle) => acc + vehicle.avg_work_hours, 0) / vehicleData.length;

    const [chartData, setChartData] = useState({
        series: [
            {
                data: [
                    { x: 'Long', y: countFullyChargedVehicles() },
                    { x: 'Medium', y: countMediumChargedVehicles() },
                    { x: 'Short', y: countShortChargedVehicles() },
                    { x: 'Discharged', y: countDischargedVehicles() }
                ]
            }
        ],
        options: {
            legend: {
                show: false
            },
            chart: {
                type: 'treemap'
            },
            colors: [
                '#3B93A5',
                '#F7B844',
                '#ADD8C7',
                '#FFFF23'
            ],
            title : {
                text: "Fleet Charge Levels",
                
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '24px',
                },
                formatter: function (text, op) {
                    return [text, op.value]
                },
                offsetY: -4
            },
        }
    });


    return (
        <>
            <div className="component_heatmap">
                <div className="head">
                    <SmallCard title="EVs" value={totalVehicles} icon={<Lightning />} />

                    <SmallCard title="Total Kms" value={totalKm} icon={<Lightning />} />

                    <SmallCard title="Total Trips" value={totalTrips} icon={<Lightning />} />

                    <SmallCard title="Carbon Emission Saved" value={carbonEmmissionSaved} icon={<Lightning />} />
                </div>

                <div className="utilization">
                    <h1>Utilization</h1>

                    <div className="cd1">
                        <div className="left">
                            <div className="icon">
                                <Lightning />
                            </div>
                        </div>
                        <div className="right">
                            <p className='title'>Trip/Day</p>
                            <p className='value'>{avgTripsPerDay}</p>
                        </div>
                    </div>

                    <div className="cd1">
                        <div className="left">
                            <div className="icon">
                                <Lightning />
                            </div>
                        </div>
                        <div className="right">
                            <p className='title'>KM/Trip</p>
                            <p className='value'>{avgKMPerTrip}</p>
                        </div>
                    </div>

                    <div className="cd1">
                        <div className="left">
                            <div className="icon">
                                <Lightning />
                            </div>
                        </div>
                        <div className="right">
                            <p className='title'>Daily Utilization</p>
                            <p className='value'>{avgWorkHours}</p>
                        </div>
                    </div>

                    <div className="bottom">
                        <img src="src\assets\carimg.png" alt="Car" />
                    </div>
                </div>

                <div className="map-container">
                    {/* <div className="title">Fleet Charge Status</div> */}
                    <div className="chart">
                        <ReactApexChart options={chartData.options} series={chartData.series} type="treemap" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heatmap