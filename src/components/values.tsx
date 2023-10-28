import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const features = [
	{
		name: "The Adventurous Soul",
		description:
			"Maria, the heart and soul of Paw's Outdoors, is not your typical animal enthusiast. She's a force of nature with an insatiable appetite for adventure and a deep love for taking on challenges. With her adventurous spirit and a zest for life, Maria's journey is as unique as the pets she cares for.",
		description2:
			"Her love for the great outdoors is undeniable. She's not one to shy away from new experiences, whether it's hiking through rugged terrain, camping under the stars, or exploring the uncharted. Her keen sense of adventure is part of what defines her",
		imageSrc: "/maria-nova-3.jpg",
		imageAlt: "Maria on a kayak with her border collie named Nova",
	},
	{
		name: "Her Loyal Companions",
		description:
			"Maria's journey wouldn't be complete without her two loyal dog companions by her side. They're more than just pets; they're her partners in adventure and her closest confidants. Together, they've shared countless remarkable moments and have forged an unbreakable bond.",
		description2:
			"This unique blend of adventure, love for animals, and fearless spirit is at the heart of Paw's Outdoors. When you choose us for your pet's care, you're not just choosing a service; you're embracing a one-of-a-kind journey with a founder who knows that every day is a new adventure waiting to be discovered. Join us in celebrating the extraordinary world of animals, and let Maria and her companions be your guides.",
		imageSrc: "/maria-with-nova-chester.jpg",
		imageAlt: "Maria with her dogs at the top of the mountain cat bells.",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function Values() {
	return (
		<section className={`${comfortaa.className} py-4 bg-amber-50 my-12`}>
			<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="relative isolate overflow-hidden mx-auto max-w-6xl text-center bg-lime-900 pt-8 pb-16 px-8 sm:px-16 text-amber-50 rounded-3xl shadow-3xl">
					<h2 className="text-4xl tracking-tight sm:text-4xl my-8">
						Meet the Founder
					</h2>
					<p className="mt-2 text-2xl">
						Behind Paw&apos;s Outdoors is Maria, a devoted animal enthusiast who
						not only talks the talk but also walks the walk. With two beautiful
						dogs as companions, Maria&apos;s commitment to animal welfare runs
						deep. But it doesn&apos;t stop at dogs, over the years she has cared
						for an eclectic menagerie of animals, from snakes to owls, hamsters
						to ferrets, and domestic birds among others.
					</p>
					<svg
						viewBox="0 0 1024 1024"
						className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
						aria-hidden="true"
					>
						<circle
							cx={512}
							cy={512}
							r={512}
							fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
								<stop stopColor="#485b31" />
								<stop offset={1} stopColor="#d9f99d" />
							</radialGradient>
						</defs>
					</svg>
				</div>

				<div className="mt-16 space-y-16 py-4">
					{features.map((feature, featureIdx) => (
						<div
							key={feature.name}
							className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
						>
							<div
								className={classNames(
									featureIdx % 2 === 0
										? "lg:col-start-1"
										: "lg:col-start-8 xl:col-start-9",
									"mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4"
								)}
							>
								<h3 className="text-3xl font-medium text-lime-900 my-12">
									{feature.name}
								</h3>
								<p className="mt-2 text-2xl text-gray-700 my-6">
									{feature.description}
								</p>
								{feature.description2 ? (
									<p className="mt-2 text-2xl text-gray-700 my-6">
										{feature.description2}
									</p>
								) : (
									<></>
								)}
							</div>
							<div
								className={classNames(
									featureIdx % 2 === 0
										? "lg:col-start-6 xl:col-start-5"
										: "lg:col-start-1",
									"flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8"
								)}
							>
								<div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-amber-50">
									<img
										src={feature.imageSrc}
										alt={feature.imageAlt}
										className="object-cover object-center"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
