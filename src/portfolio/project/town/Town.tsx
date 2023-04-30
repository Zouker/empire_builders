import React from 'react';
import town_01 from './../../../assets/image/town/town_01.jpg'
import town_02 from './../../../assets/image/town/town_02.jpg'
import town_03 from './../../../assets/image/town/town_03.jpg'
import Slider from "../../../common/components/slider/Slider";

const Town = () => {

    return (
        <Slider array={[town_01, town_02, town_03]}/>
    );
};

export default Town;