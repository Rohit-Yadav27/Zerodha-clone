import OpenAccount from "../OpenAccount";
import Awards from "./Awards";
import Eduction from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Hero from "./Hero";

export default function HomePage(){
    return(
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Eduction/>
        <OpenAccount/>
        </>
    )
}