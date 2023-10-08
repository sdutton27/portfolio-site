import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import ColorAnimation from '../../components/ColorAnimation/ColorAnimation'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function Color() {
    useEffect(()=>{
        console.log('mount is happening')
        const color = getColorOfDay();
        getColorAPI(color);
    }, [])

    const getDayOfYear = () => {
        // console.log(dayjs())
        // console.log(dayjs().get('date'))
        const dayOfYear = require('dayjs/plugin/dayOfYear')
        dayjs.extend(dayOfYear)
        return dayjs(dayjs().get('year') + "-" + (dayjs().get('month') + 1) + "-" + dayjs().get('date')).dayOfYear();
    }

    const hslToHex = (h, s, l) => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `${f(0)}${f(8)}${f(4)}`;
    }

    const getColorOfDay = () => {
        // const doy = getDayOfYear();
        // const r = Math.round(-255 * Math.sin (doy/116.2) + 255)
        // const g = Math.round(255 * Math.sin (doy/116.2))
        // const b = Math.round(-127.5 * Math.sin (doy/58.1) + 127.5)
        
        // return("Red: " + r + " Green: " + g + " Blue: " + b)

        // so it stays consistent throughout the day:
        // saturation is: doy * month * year % 100
        // lightness is: doy * day * year % 100
        const doy = getDayOfYear();
        if (doy <= 360) {
            const color = hslToHex(doy, 100, (doy * dayjs().get('year')) % 100);
            //const color = hslToHex(282, 100, (282 * 2023) % 100);
            return color;
        // once the hue has reached its limit at 360, fill in the rest of the dates
        } else if (doy == 361) {
            return "000000";
        } else if (doy == 362) {
            return "333333";
        } else if (doy == 363) {
            return "666666";
        } else if (doy == 364) {
            return "aaaaaa";
        } else if (doy == 365) {
            return "cccccc";
        } else if (doy == 366) {
            return "ffffff";
        }
        
    }

    const getColorAPI = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/id?hex=${color}`);
        const data = await res.json();
        console.log(data);
        // const articles = data.articles
        // this.setState({ articles: articles })
    };

    return (
        <div>
            <Typography> Color </Typography>
            {getColorOfDay()}
            
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <ambientLight intensity={Math.PI} />
                {/* <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} /> */}
                {/* <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} /> */}
                {/* <pointLight position={[-15, -15, -15]} decay={0} intensity={Math.PI} /> */}
                
                <ColorAnimation position={[0, 0, 0]} color={`#${getColorOfDay()}`} />
                <OrbitControls />
            </Canvas>

        </div>
    )
}
