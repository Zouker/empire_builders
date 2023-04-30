import React, {useEffect, useState} from 'react';
import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import town_01 from './../../../assets/image/town/town_01.jpg'
import town_02 from './../../../assets/image/town/town_02.jpg'
import town_03 from './../../../assets/image/town/town_03.jpg'
import styles from './Town.module.scss'
import BackButton from "../../../common/components/back-button/BackButton";
// @ts-ignore
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

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
        <div className={styles.container}>
            {matches && (
                <AutoplaySlider
                    cssModule={AwesomeSliderStyles}
                    className={styles.slider}
                    play
                    cancelOnInteraction={false}
                    interval={6000}
                    infinite
                >
                    <div data-src={town_01}/>
                    <div data-src={town_02}/>
                    <div data-src={town_03}/>

                </AutoplaySlider>)}
            {!matches && (<div className={styles.album}>
                    <img src={town_01} alt={'town_01'} className={styles.image}/>
                    <img src={town_02} alt={'town_02'} className={styles.image}/>
                    <img src={town_03} alt={'town_03'} className={styles.image}/>
                </div>
            )}
            <BackButton/>
        </div>
    );
};

export default Town;