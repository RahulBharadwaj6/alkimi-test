import Header from "@/components/Header";
import Body from "@/components/Body";
import AboutUs from "@/components/AboutUs";
import Slider from "@/components/Slider";
import BottomSection from "@/components/BottomSection";
import AccordionSection from "@/components/AccordionSection";

export default function Home() {
	return (
		<main className="">
			<Header />
			<Body />
			<AboutUs />
			<Slider />
			<BottomSection />
			<AccordionSection />
		</main>
	);
}
