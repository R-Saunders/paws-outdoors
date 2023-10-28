import Image from "next/image";
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function HeroServices() {
	return (
		<section
			className={`${comfortaa.className} flex md:flex-nowrap flex-wrap lg:max-h-screen pt-24 h-screen`} style={{maxHeight: "800px"}}
		>
			<div className="md:w-1/2 relative w-screen md:h-full h-96">
				<Image
					src="/nova-tongue.jpg"
					fill={true}
					alt="Nova the border collie licking his nose"
					className="object-cover"
				/>
			</div>
			<div className="px-8 py-4 flex flex-col gap-4 lg:gap-6 l:gap-8 justify-center md:w-2/4 items-center xl:max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight text-lime-900 sm:text-6xl max-w-xl">
					Your Pet&apos;s Second Best Friend
				</h1>
				<p className="text-xl leading-8 text-gray-600 lg:text-2xl max-w-xl">
					At Paw&apos;s Outdoors it&apos;s not just about making sure your best
					friend is fed and walked, we&apos;re your pet&apos;s second best
					friend.
				</p>
			</div>
		</section>
	);
}
