// import {FC} from 'react'
import { Helmet } from "react-helmet";
import Section1 from "../components/Home/Section1";
import Section10 from "../components/Home/Section10";
import Section2 from "../components/Home/Section2";
import Section3 from "../components/Home/Section3";
import Section4 from "../components/Home/Section4";
import Section5 from "../components/Home/Section5";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import Section8 from "../components/Home/Section8";
import Section9 from "../components/Home/Section9";



const Home = () => {
    return (


        <>
                <Helmet>
        <title>Home</title>
    </Helmet>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
        </>
    )
}

export default Home;