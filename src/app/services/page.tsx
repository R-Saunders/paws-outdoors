import HeroServices from "@/components/hero-services";
import Walking from "@/components/walks";
import Visits from "@/components/visits";
import PuppyPlay from "@/components/puppy-play";

export default function Services() {
	return (
		<main className="w-full">
			<HeroServices />
			<Walking />
			<Visits />
			<PuppyPlay />
		</main>
	);
}
