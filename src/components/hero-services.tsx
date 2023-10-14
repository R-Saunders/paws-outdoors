import Image from "next/image";
import { Caveat, Comfortaa } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function HeroServices() {
	return (
		<section className={`${comfortaa.className} flex md:flex-nowrap flex-wrap lg:max-h-screen pt-24`}>
				<Image
					src="/nova-tongue.jpg"
          height={500}
          width={780}
					alt="Nova the border collie licking his nose"
          className="object-cover md:w-1/2"
				/>
			<div className="px-4 py-4 flex flex-col gap-4 lg:gap-6 l:gap-8 justify-center md:w-2/4">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl xl:text-8xl">
					Your Pet&apos;s Second Best Friend
				</h1>
				<p className="text-xl leading-8 text-gray-600 lg:text-3xl xl:text-4xl">
					At Paw&apos;s Outdoors it&apos;s not just about making sure your best
					friend is fed and walked, we&apos;re your pet&apos;s second best
					friend.
				</p>
			</div>
		</section>
	);
}
