import { Comfortaa } from "next/font/google";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const features = [
	{
		name: "Interactive Play",
		description:
			"We will guide your puppy through interactive play sessions, complete with exciting toys and stimulating activities. These sessions are designed to keep your pup active, curious, and entertained.",
		icon: "🏈",
	},
	{
		name: "Physical and Mental Exercise",
		description:
			"Playtime is not only fun but also essential for your puppy's physical and mental well-being. It helps them develop coordination, learn problem-solving skills, and expend their abundant energy in a healthy way.",
		icon: "🧠",
	},
	{
		name: "Happiness & Confidence Bulding",
		description:
			"Regular playtime is a great way to boost your puppy's happiness and confidence. It allows them to explore their surroundings, interact with others, and create positive associations with new experiences.",
		icon: "🌱",
	},
	{
		name: "Behavioral Benefits",
		description:
			"Engaging in playtime sessions as a puppy can contribute to better behavior as an adult dog. By providing an outlet for their energy and curiosity, these sessions help reduce the risk of boredom-related problems and destructive behavior.",
		icon: "🐕",
	},
];

export default function PuppyPlay() {
	return (
		<section className={`${comfortaa.className} bg-amber-50 py-24 sm:py-32`}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2
						className={`${dynaPuff.className} mt-2 text-3xl  tracking-tight text-lime-900 sm:text-4xl`}
					>
						Elevate Your Pup&apos;s Day with Playtime Delights
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						We believe in making every moment count for your beloved dogs
						younger month&apos;s. That&apos;s why we offer puppy playtime. Treat
						your furry friend to a some quality time that enriches their day,
						builds confidence and helps instill good behaviour traits. Creating
						a strong foundation for your pup&apos;s future is essential so they
						can explore the joys of the world.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-lg font-semibold leading-7 text-lime-900">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg text-5xl">
										{feature.icon}
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
					<div className="mx-auto max-w-2xl lg:text-center"></div>
				</div>
			</div>
		</section>
	);
}
