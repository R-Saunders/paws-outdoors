import { Comfortaa } from "next/font/google";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const features = [
	{
		name: "Vet Appointments",
		description:
			"Whether it's a scheduled check-up, vaccinations, or any other medical needs, we've got your back. We'll arrange a convenient time to pick up your pet and ensure they get to their vet appointment promptly.",
		icon: "⚕️",
	},
	{
		name: "Holidaying Pet Owners",
		description:
			"If you're enjoying a vacation in the area and your pet needs a visit to the nearest suitable vet, don't worry. We can coordinate with the local vets to provide the care your pet needs while you relax and enjoy your holiday. We understand that emergencies can happen at any time, and we're here to assist.",
		icon: "🏕️",
	},
  {
    name: "Our Commitment",
    description:
      "Your pet's health and well-being are our top priority. Rest assured that we'll take care of their transportation needs with the same love and attention you provide. Contact us today to arrange pet transport services for your furry friend and ensure they receive the care they deserve.",
    icon: "🤝",
  },
	{
		name: "Affordable Pricing",
		description:
			"Our pricing is transparent and budget-friendly. We charge a flat rate of £10 per hour for the time taken, and an additional 50p per mile driven from the moment we collect your pet until their safe return.",
		icon: "🌟",
	},
];

export default function PetTaxi() {
	return (
		<section className={`${comfortaa.className} bg-amber-50 py-24 sm:py-32`}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2
						className={`${dynaPuff.className} mt-2 text-3xl  tracking-tight text-lime-900 sm:text-4xl`}
					>
						Pet Taxi Services
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						When it comes to taking care of your beloved furry friend, there
						might be times when you need to get them to the vet, and we&apos;re
						here to assist. If you are unable to take them yourself we will
						ensures that your pet reaches the vet safely and comfortably, all
						while giving you peace of mind.
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
