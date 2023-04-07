import React, {useEffect, useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import town_01 from './../../../assets/image/town/town_01.jpg'
import town_02 from './../../../assets/image/town/town_02.jpg'
import town_03 from './../../../assets/image/town/town_03.jpg'
import styles from './Town.module.scss'
import BackButton from "../../../common/components/back-button/BackButton";

const Town = () => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 990px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(min-width: 990px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div>
            {matches && (
                <AutoplaySlider
                    className={styles.slider}
                    play={true}
                    cancelOnInteraction={false}
                    interval={6000}
                    infinite={true}
                >
                    <div data-src={town_01}/>
                    <div data-src={town_02}/>
                    <div data-src={town_03}/>

                </AutoplaySlider>)}
            {!matches && (<div className={styles.album}>
                    <img src={town_01} alt={'town_01'}/>
                    <img src={town_02} alt={'town_02'}/>
                    <img src={town_03} alt={'town_03'}/>
                </div>
            )}
            <BackButton/>
        </div>
    );


};

export default Town;