import { Comfortaa } from "next/font/google";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const features = [
	{
		name: "Solo or Group Walks",
		description:
			"Your pup can enjoy a solo adventure or join a lively group of fellow canine pals. We will adapt to your pet's social needs, ensuring they have a great time on their outing.",
		icon: "🐾",
	},
	{
		name: "Diverse Locations",
		description:
			"Our walks take place in a variety of scenic locations to provide your dog with a new and stimulating environment during each outing. From local parks to picturesque trails, we keep it fresh and exciting.",
		icon: "🌳",
	},
	{
		name: "60 Minutes of Fun",
		description:
			"Every walk with us is a full 60 minutes of exercise, play, and exploration. Your furry friend will return home happy and satisfied, ready for a cozy nap after their adventure.",
		icon: "⏰",
	},
	{
		name: "Second Dog Discount",
		description:
			"We know that many pet lovers have more than one furry pal. That's why we're pleased to offer a special discount for families with more than one furry friend. Quality care for all your dogs is our priority.",
		icon: "🐕‍🦺",
	},
];

export default function Walking() {
	return (
		<section className={`${comfortaa.className} bg-amber-50 py-24 sm:py-32`}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className={`${dynaPuff.className} mt-2 text-3xl  tracking-tight text-lime-900 sm:text-4xl`}>
						Discover Our Tail-Wagging Walks
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						We believe that a great walk is more than just a stroll – it&apos;s
						an opportunity for your pup to explore, socialize, and stay active.
						Contact us today to book a walk that suits your pet&apos;s needs,
						and let the tail-wagging adventures begin!
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
