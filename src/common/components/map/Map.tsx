import React from 'react'
import {GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';
import styles from '../map/Map.module.scss'

const center = {
    lat: 41.26524824462355,
    lng: -70.1128984222177
};

const Map = () => {
    const key = process.env.REACT_APP_GOOGLE_KEY;
    if (!key) {
        throw new Error('Google token is not set');
    }
    return (
        <LoadScript
            googleMapsApiKey={key}
            libraries={['places']}
            language={'en'}
        >
            <GoogleMap
                center={center}
                zoom={17}
                mapContainerClassName={styles.map}
            >
                <MarkerF position={center}
                         title={'Empire builders Nantucket'}
                         label={'Empire Builders Nantucket'}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)