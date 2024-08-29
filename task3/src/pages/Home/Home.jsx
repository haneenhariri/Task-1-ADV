import Best from "../../components/Best/Best";
import Contact from "../../components/Contact/Contact";
import Featured from "../../components/Featured/Featured";
import Hero from "../../components/Hero/Hero";
import OrangCard from "../../components/OrangCard/OrangCard";
import ViewSection from "../../components/ViewSection/ViewSection";
import Properties from "../../components/Properties/Properties";

export default function Home() {
  return (
    <>
       <Hero/>
       <Featured/>
       <ViewSection/>
       <OrangCard/>
       <Best/>
       <Properties/>
       <Contact/>
    </>
  )
}
