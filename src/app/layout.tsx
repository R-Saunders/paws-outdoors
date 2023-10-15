import "./globals.css";
import type { Metadata } from "next";
import { Inter, DynaPuff } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const inter = Inter({ subsets: ["latin"] });
export const dynapuff = DynaPuff({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Paws Outdoors",
	description:
		"Dog walking and pet services in the North Norfolk and Broadland area's",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-amber-50 flex flex-col items-center `}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
