import React, { useEffect, useState } from 'react'
import Heatmap from '../../components/Heatmap/Heatmap'
import Table from '../../components/Table/Table'
import vehicleData from '../../database/vehicleData'
import './Dashboard.css'

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
            Header : 'Comment',
            accessor : 'comment'        
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

    const [data, setData] = useState(vehicleData)
    const [originalData] = useState(vehicleData)
    const [searchValue, setSearchValue] = useState('')

    const search = () => {
        const filteredData = originalData.filter((item) => {
            return item.vehicleId.toLowerCase().includes(searchValue.toLowerCase()) || item.vendor_name.toLowerCase().includes(searchValue.toLowerCase()) || item.vehicleId.includes(searchValue)
        })
        setData(filteredData)
    }

    useEffect(() => {
        if (searchValue === '') {
            setData(originalData)
        }
    }, [searchValue])

    return (
        <>
            <Heatmap />
            <div className="table-container">
                <form className="search-space"
                    onSubmit={(e) => {
                        e.preventDefault()
                        search()
                    }}
                >
                    <input type="text" placeholder="Enter Vehicle ID/vendor name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <button>Search</button>
                </form>
                <Table columns={columns} data={data} />
            </div>
        </>
    )
}

export default Dashboard