import { Comfortaa } from "next/font/google";
import { DynaPuff } from "next/font/google";

const dynaPuff = DynaPuff({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const features = [
{
  name: "Lunchtime Moments",
  description:
  "Keep your pet's furry belly comfortably full. We will ensure your pet enjoys a satisfying lunch that you've lovingly prepared. It's a perfect opportunity for your furry friend to relish their own food and create a stronger bond us.",
  icon: "🍽️",
},
  {
    name: "Playtime Galore",
		description:
    "Your dog will have the time of their life with our engaging playtime sessions. Whether they love a game of fetch, chasing their favorite toy, or just enjoying some belly rubs, we'll provide the play they crave.",
		icon: "🥎",
  },
  {
    name: "Bathroom Breaks",
    description:
      "We know that when nature calls, it's crucial to answer. We are here to ensure your pup gets a well-timed bathroom break, ensuring their comfort, cleanliness and overall wellbeing.",
    icon: "🚽",
  },
	{
		name: "Flexible Duration",
		description:
			"Our bathroom break, playtime, and lunchtime visits are designed to be flexible. You can choose the duration that suits your pet's needs, starting from a minimum of 30 minutes and extending upwards. We understand that every pet is unique, and we're here to cater to their needs.",
		icon: "⏰",
	},
];

export default function Visits() {
	return (
		<section className={`${comfortaa.className} bg-amber-50 py-24 sm:py-32`}>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2
						className={`${dynaPuff.className} mt-2 text-3xl  tracking-tight text-lime-900 sm:text-4xl`}
					>
						Indulge Your Pup with Extra Special Moments
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Our goal is to provide your pet with personalized care that leaves
						them wagging their tail with joy. That&apos;s why we offer home
						visits that go beyond a quick stop in. Whether you just need us to
						nip in for a quick bathroom break or to serve up a spot of lunch we
						always take time to make sure our visit is as enriching as possible.
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
