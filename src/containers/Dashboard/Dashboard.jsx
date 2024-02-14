import React from 'react'
import Heatmap from '../../components/Heatmap/Heatmap'
import Table from '../../components/Table/Table'
import vehicleData from '../../database/vehicleData'

function Dashboard() {
    const columns = [
        {
            Header: 'Vehicle',
            accessor: 'vehicleId'
        },
        {
            Header: 'No of Trips',
            accessor: 'no_of_trips'
        },
        {
            Header: 'Trip Kms',
            accessor: 'trip_kms'
        },
        {
            Header: 'Avg Trip',
            accessor: 'avg_trip'
        },
        {
            Header: 'Avg Kms',
            accessor: 'avg_kms'
        },
        {
            Header: 'Avg Work Hours',
            accessor: 'avg_work_hours'
        },
        {
            Header: 'Avg Charging Time',
            accessor: 'avg_charging_time'
        },
        {
            Header: 'CO2 Emission',
            accessor: 'co2_emission'
        },
        {
            Header: 'Vendor Name',
            accessor: 'vendor_name'
        },
        {
            Header: 'Battery Level',
            accessor: 'battery_level'
        }
    ]

    return (
        <>
            <Heatmap />
            <Table columns={columns} data={vehicleData} />
        </>
    )
}

export default Dashboard