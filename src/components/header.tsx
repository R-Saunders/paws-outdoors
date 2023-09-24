"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Caveat, Comfortaa } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const navigation = [
	{ name: "Services", href: "/services" },
	{ name: "About Us", href: "/about-us" },
	{ name: "Book Now", href: "/book" },
];

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="absolute z-10 min-w-full text-lime-900">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<a
						href="#"
						className="-m-1.5 p-1.5 flex items-center justify-center gap-4"
					>
						{/* TODO - Replace with next/image */}
						<img className="h-16 w-auto" src="logo.svg" alt="" />
						<span className={`${caveat.className} text-5xl`}>
							Paws Outdoors
						</span>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 pt-4 text-lime-800 z-10"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className={`${comfortaa.className} hidden lg:flex lg:gap-x-12`}>
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-sm font-semibold leading-6 text-lime-900 px-2 py-1 hover:text-lime-700 last:bg-lime-900 rounded last:text-amber-50 last:hover:bg-lime-800 last:hover:text-amber-50"
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-20" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-amber-50  px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a
							href="#"
							className="-m-1.5 p-1.5 flex items-center justify-center gap-4"
						>
							{/* TODO - Replace with next/image */}
							<img className="h-16 w-auto" src="logo.svg" alt="" />
							<span className={`${caveat.className} text-5xl text-lime-900`}>
								Paws Outdoors
							</span>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 pt-4 text-lime-900 z-20"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-lime-900/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={`${comfortaa.className} -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-lime-900 hover:bg-amber-100`}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
