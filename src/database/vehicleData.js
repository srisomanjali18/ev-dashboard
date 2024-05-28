const vehicleData = [
    {
        vehicleId: "KA1234",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 80,
    },
    {
        vehicleId: "KA1235",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 6,
    },

    {
        vehicleId: "KA1236",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 70,
    },
    {
        vehicleId: "KA1237",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 90,
    },
    {
        vehicleId: "KA1238",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 60,
    },
    {
        vehicleId: "KA1239",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 40,
    },
    {
        vehicleId: "KA1240",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Meenakshi Travels",
        battery_level: 30,
    },
    {
        vehicleId: "KA1241",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 20,
    },
    {
        vehicleId: "KA1242",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 10,
    },
    {
        vehicleId: "KA1243",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 100,
    },
    {
        vehicleId: "KA1244",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 90,
    },
    {
        vehicleId: "KA1245",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 80,
    },
    {
        vehicleId: "KA1246",
        no_of_trips: 456,
        trip_kms: 5443,
        avg_trip: 4,
        avg_kms: 30,
        avg_work_hours: 8,
        avg_charging_time: 3.2,
        co2_emission: 231,
        vendor_name: "Orange Travels",
        battery_level: 70,
    }
]

// function to count the number of vehicles who have battery level less than 10 (discharged state)
function countDischargedVehicles() {
    let count = 0;
    vehicleData.forEach(vehicle => {
        if(vehicle.battery_level < 10) {
            count++;
        }
    });
    return count;
}

// function to count the number of vehicles who have battery level greater than 80 (fully charged state, long range)
function countFullyChargedVehicles() {
    let count = 0;
    vehicleData.forEach(vehicle => {
        if(vehicle.battery_level > 80) {
            count++;
        }
    });
    return count;
}

// function to count the number of vehicles who have battery level between 40 and 80 (partially charged state, medium range)
function countMediumChargedVehicles() {
    let count = 0;
    vehicleData.forEach(vehicle => {
        if(vehicle.battery_level > 40 && vehicle.battery_level < 80) {
            count++;
        }
    });
    return count;
}

// function to count the number of vehicles who have battery level between 10  (partially charged state, short range)
function countShortChargedVehicles() {
    let count = 0;
    vehicleData.forEach(vehicle => {
        if(vehicle.battery_level > 10 && vehicle.battery_level < 40) {
            count++;
        }
    });
    return count;
}


export { countDischargedVehicles, countFullyChargedVehicles, countMediumChargedVehicles, countShortChargedVehicles };

export default vehicleData;