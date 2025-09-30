import React, {useEffect, useState} from 'react';
import AwesomeSlider from "react-awesome-slider";
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// @ts-ignore
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import styles from './Slider.module.scss'
import BackButton from "../back-button/BackButton";

type SliderPropsType = {
    array: string[]
}

const Slider: React.FC<SliderPropsType> = ({array}) => {

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
                    interval={false}
                    infinite
                >
                    {array.map(a => <div key={a.toString()} data-src={a}/>)}

                </AutoplaySlider>)}
            {!matches && (<div className={styles.album}>
                    {array.map(a => <img key={a.toString()} src={a} alt={a.toString()} className={styles.image}/>)}
                </div>
            )}
            <BackButton/>
        </div>
    );
};

export default Slider;