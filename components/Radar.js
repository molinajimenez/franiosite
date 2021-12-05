import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import styles from '../styles/Home.module.css';

const Radar = (props) => {
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

    const captions = {
        // columns
        programming: 'Programming skills',
        design: 'Design',
        communication: 'Communication skills',
        speed: 'Speed to learn new things',
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
          fontSize: 24,
          fontFamily: 'sans-serif'
        }),
        dotProps: () => ({
          className: 'dot',
        }),
        rotation: 0
      };
    return (
        <div className={styles.center}>
            <RadarChart
                captions={captions}
                data={data}
                size={800}
                options={defaultOptions}
            />
        </div>

    );
}

export default Radar;