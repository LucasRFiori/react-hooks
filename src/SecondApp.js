import React, { useEffect, useState } from 'react';


export default function GeoLocation() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        navigator.geolocation.watchPosition(handlePositionReceived)
    }, [])
    //Realizando desestruturação
    function handlePositionReceived({coords}){
        const {latitude, longitude} = coords;
        setLocation({ latitude, longitude })
    }
    return(
        <>
        <hr />
            Latitude:{location.latitude} <br />
            Longitude: {location.longitude}
            
        </>
    )

}