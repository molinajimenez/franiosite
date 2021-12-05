import { useEffect, useState } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import styles from '../styles/Home.module.css';
import { Text } from "@chakra-ui/react"
const Radar = (props) => {
    const [isMobile, setIsMobile] = useState(false)
    const [fontSize, setFontsize] = useState(24)
    const [chartSize, setChartsize] = useState(800)
    const data = [
        {
            data: {
                programming: 0.7,
                design: 0.5,
                communication: 0.9,
                speed: 0.67,
                enth: 0.9
            },
            meta: { color: 'blue' }
        }
    ];

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
            setChartsize(300)
            setFontsize(14)
        } else {
            setIsMobile(false)
            setChartsize(800)
            setFontsize(24)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    const captions = {
        // columns
        programming: 'Programming skills',
        design: 'Design',
        communication: 'Communication skills',
        speed: 'Learning speed',
        enth: 'Enthusiasm'
    };
    const defaultOptions = {
        size: 800,
        axes: true,
        scales: 3,
        captions: true,
        captionMargin: 50,
        dots: false,
        zoomDistance: 1.2,
        setViewBox: (options) => `-${options.captionMargin} 0 ${options.size + options.captionMargin * 2} ${options.size}`, // custom viewBox ?
        axisProps: () => ({ className: 'axis' }),
        scaleProps: () => ({ className: 'scale', fill: 'none' }),
        shapeProps: () => ({ className: 'shape' }),
        captionProps: () => ({
            className: 'caption',
            textAnchor: 'middle',
            fontSize: fontSize,
            fontFamily: 'sans-serif'
        }),
        dotProps: () => ({
            className: 'dot',
        }),
        rotation: 0
    };
    return (
        <div className={styles.center}>
            <Text pt="1.3rem" color="black" justifyContent="center" as="h3" fontSize="5xl">Skills</Text>
            <RadarChart
                captions={captions}
                data={data}
                size={chartSize}
                options={defaultOptions}
            />
        </div>

    );
}

export default Radar;