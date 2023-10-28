import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function SimpleCTA() {
	return (
		<div className={`${comfortaa.className} bg-amber-50`}>
			<div className="mx-auto max-w-7xl py-12 sm:px-6 sm:py-12 lg:px-8">
				<div className="relative isolate overflow-hidden bg-lime-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
					<h2 className="mx-auto max-w-2xl text-3xl tracking-tight text-amber-50 sm:text-4xl">
          Embark on a Paw-some Adventure with Us Today!
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-xl leading-8 text-gray-300">
						Get in touch to book your meet and greet.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="/book"
							className="rounded-md bg-amber-50 px-3.5 py-2.5 text-lg font-semibold text-lime-900 shadow-sm hover:bg-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-50"
						>
							Book Now
						</a>
						<a
							href="/services"
							className="text-lg font-semibold leading-6 text-amber-50 hover:text-amber-100"
						>
							Learn more <span aria-hidden="true">→</span>
						</a>
					</div>
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
								<stop stopColor="#bef264" />
								<stop offset={1} stopColor="#d9f99d" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}
