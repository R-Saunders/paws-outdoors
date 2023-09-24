import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function HeroHome() {
	return (
		<section className={`${comfortaa.className} relative bg-[url(/nova-wall-lake-district.jpg)] bg-cover bg-center bg-no-repeat`}>
			<div className="absolute inset-0 from-amber-50/50 to-amber-50/50 bg-gradient-to-b sm:bg-transparent backdrop-blur-sm sm:from-amber-50/50 sm:to-amber-50/25 sm:bg-gradient-to-r"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div className="max-w-xl text-center sm:text-left">
					<h1 className="text-3xl font-extrabold sm:text-5xl text-lime-900">
						Pet care
						<strong className="block font-extrabold text-lime-900">
							You can trust.
						</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							href="#"
							className="block w-full rounded bg-lime-900 px-12 py-3 text-sm font-medium text-amber-50 shadow hover:bg-lime-800 focus:outline-none focus:ring active:bg-lime-700 sm:w-auto"
						>
							Get In Touch
						</a>

						<a
							href="#"
							className="block w-full rounded bg-amber-50 px-12 py-3 text-sm font-medium text-lime-900 shadow hover:text-lime-700 focus:outline-none focus:ring active:text-lime-700 sm:w-auto"
						>
							Find Out More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

// bg-[url('/nova-wall-lake-district.jpg')]
