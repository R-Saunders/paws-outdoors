/* eslint-disable @next/next/no-img-element */
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function HeroAbout() {
	return (
		<section
			className={`${comfortaa.className} overflow-hidden bg-amber-50 my-24 p-4`}
		>
			<div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
					<div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8 flex flex-col justify-center">
						<h2 className="text-3xl font-bold tracking-tight text-lime-900 sm:text-4xl">
							About Paw&apos;s Outdoors
						</h2>
						<p className="mt-6 text-2xl leading-8 text-lime-800">
							Our Passion for Pets
						</p>
						<p className="mt-6 text-2xl leading-7 text-gray-600">
							At Paw&apos;s Outdoors, our love for animals in all their diverse
							forms is the driving force behind what we do. We believe that
							every pet, regardless of its size or shape, deserves to be cared
							for with boundless affection and attention.
						</p>
					</div>
					<div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
						<div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
							<img
								src="/dog-5.jpg"
								alt=""
								className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
							/>
						</div>
						<div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
							<div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
								<img
									src="/cat-1.jpg"
									alt=""
									className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
									style={{ objectPosition: "95px" }}
								/>
							</div>
							<div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
								<img
									src="/dogs-3.jpg"
									alt=""
									className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
							<div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
								<img
									src="/chickens-2.jpg"
									alt=""
									className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
