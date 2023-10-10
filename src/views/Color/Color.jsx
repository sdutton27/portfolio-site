import dayjs from 'dayjs'
import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import ColorAnimation from '../../components/ColorAnimation/ColorAnimation'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CircleType from 'circletype';
import PopupInfo from '../../components/PopupInfo/PopupInfo'
import './color.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

export default function Color() {
    const [colorOTDName, setColorOTDName] = useState("");
    const [monochrome, setMonochrome] = useState([])
    const [monochromeDark, setMonochromeDark] = useState([])
    const [monochromeLight, setMonochromeLight] = useState([])
    const [analogic, setAnalogic] = useState([])
    const [complement, setComplement] = useState([]);
    const [analogicComplement, setAnalogicComplement] = useState([]);
    const [triad, setTriad] = useState([]);
    const [quad, setQuad] = useState([]);

    useEffect(() => {
        console.log('mount is happening')
        const color = getColorOfDay();
        getColorAPI(color);
        getSchemesAPI(color);

        const circleType = new CircleType(document.getElementById('arc-text'));
        circleType.radius(190);
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
        // so it stays consistent throughout the day:
        // lightness is: doy * year % 100
        const doy = getDayOfYear();
        if (doy <= 360) {
            const color = hslToHex(doy, 100, (doy * dayjs().get('year')) % 100);
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

        setColorOTDName(data.name.value)
    };

    const getSchemesAPI = (color) => {
        getMonochromeScheme(color);
        getMonochromeDarkScheme(color);
        getMonochromeLightScheme(color);
        getAnalogicScheme(color);
        getComplementScheme(color);
        getAnalogicComplementScheme(color);
        getTriadScheme(color);
        getQuadScheme(color);
        // const analogic = await getScheme(color, "analogic");
    }

    // const getScheme = async (color, mode) => {
    //     const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}`);
    //     const data = await res.json();
    //     return data;
    // }

    const getMonochromeScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}`);
        const data = await res.json();
        setMonochrome(data.colors);
        // console.log(data.colors);
    }

    const getMonochromeDarkScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=monochrome-dark`);
        const data = await res.json();
        setMonochromeDark(data.colors);
        // console.log(data.colors);
    }

    const getMonochromeLightScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=monochrome-light`);
        const data = await res.json();
        setMonochromeLight(data.colors);
    }

    const getAnalogicScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=analogic`);
        const data = await res.json();
        setAnalogic(data.colors);
    }

    const getComplementScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=complement&count=2`);
        const data = await res.json();
        setComplement(data.colors);
    }

    const getAnalogicComplementScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=analogic-complement`);
        const data = await res.json();
        setAnalogicComplement(data.colors);
    }

    const getTriadScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=triad&count=3`);
        const data = await res.json();
        setTriad(data.colors);
    }

    const getQuadScheme = async (color) => {
        const res = await fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=quad&count=4`);
        const data = await res.json();
        setQuad(data.colors);
    }

    const showColorScheme = (scheme) => {
        // return scheme.map((data, index) => <Typography key={index}>{data.hex.value}</Typography>)
        return scheme.map((data, index) => <div className="scheme-color" style={{ width: "50px", height: "50px", borderRadius: "50%", margin: "5px", backgroundColor: `${data.hex.value}` }} key={index}></div>)
    };

    return (
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
            <Typography id="arc-text" sx={{ fontSize: "3rem", marginTop: "10px", fontWeight: "600", fontFamily: "Lora, sans-serif" }}>C O L O R</Typography>
            {/* {getColorOfDay()} */}

            <Canvas style={{ padding: "20px", margin: "0px 20px 20px 20px", width: "150px", borderRadius: "50%", boxShadow: `0px 0px 10px #${getColorOfDay()}` }}>
                <ambientLight intensity={Math.PI / 2} />
                <ambientLight intensity={Math.PI} />
                {/* <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} /> */}
                {/* <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} /> */}
                {/* <pointLight position={[-15, -15, -15]} decay={0} intensity={Math.PI} /> */}

                <ColorAnimation position={[0, 0, 0]} color={`#${getColorOfDay()}`} />
                <OrbitControls />
            </Canvas>

            <Typography sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "500", fontSize: "1.7rem" }}>Color of the Day:</Typography>
            <Typography sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "300", fontSize: "1.5rem", color: `#${getColorOfDay()}` }}>{colorOTDName}</Typography>

            <Typography sx={{ marginTop: "60px", fontFamily: "Work Sans, sans-serif", fontWeight: "500", fontSize: "1.5rem" }}>Color Schemes</Typography>

            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Monochrome</Typography>
                <PopupInfo placement={"bottom"} body={"same hue, different shades"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(monochrome)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Monochrome Dark</Typography>
                <PopupInfo body={"same hue, darker shades"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(monochromeDark)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Monochrome Light</Typography>
                <PopupInfo body={"same hue, lighter shades"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(monochromeLight)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Analogic</Typography>
                <PopupInfo body={"adjacent colors of a color"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(analogic)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Complement</Typography>
                <PopupInfo body={"opposing color of a color"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(complement)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Analogic Complement</Typography>
                <PopupInfo placement={"bottom-end"} body={"adjacent colors of opposing color"} />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(analogicComplement)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Triad</Typography>
                <PopupInfo body={"colors evenly spaced on color wheel"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(triad)}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography className="scheme-heading" >Quad</Typography>
                <PopupInfo body={"two evenly spaced sets of opposing colors"} />
                </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                {showColorScheme(quad)}
            </div>
            <Accordion id="accordion-1" sx={{ marginTop: "50px" }}>
                <AccordionSummary

                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="accordion-content-1"
                    id="accordion-header-1"
                >
                    <Typography className="accordion accordion-header">How is the color of the day selected?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion">
                        The color of the day is calculated using a formula
                        developed to ensure a unique color for every day of the year,
                        and in subsequent years. This formula is based on how far
                        through the year the current date is, as the beginning of
                        the year starts with red-hued colors, and as the year goes on,
                        it works its way through the rainbow.
                        The shades of the colors vary from day to day / year to year.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="accordion-content-2"
                    id="accordion-header-2"
                >
                    <Typography className="accordion accordion-header">How are the color schemes generated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion">
                        The color schemes are generated quickly by sending API requests to
                        (gathering data from) <a href="https://www.thecolorapi.com/" target="_blank" rel="noreferrer">The Color API</a>. The color schemes themselves
                        are based on color theory / the color wheel.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="accordion-content-3"
                    id="accordion-header-3"
                >
                    <Typography className="accordion accordion-header">What is <b>The Color API</b>?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion">
                        <a href="https://www.thecolorapi.com/" target="_blank" rel="noreferrer">The Color API</a> is an API (Application Programming Interface)
                        which lets us access pre-calculated data based on the color that is
                        selected to be the color of the day. This data includes the name of
                        the color & the various colors attributed to it based on
                        different color schemes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="accordion-content-4"
                    id="accordion-header-4"
                >
                    <Typography className="accordion accordion-header">Why colors?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="accordion">
                        As a full-stack developer, it is my job to be critical of
                        every aspect I put into the visuals of my designs-- one of these being color.
                        Color theory gives a mathematical reasoning for our human emotional response to a color or group of colors.
                        My more recent interest in color theory can be compared to my longterm love of music theory;
                        I have always enjoyed combining my love of the arts / creativity / psychology
                        with my aptitude for mathematics / patterns.
                        Therefore, I felt including color in my portfolio would not only be
                        a good way to demonstrate my technological ability to easily get information from an API,
                        but also expresses my interest in the psychology / mathematics of design.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
