import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, DynaPuff } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const dynapuff = DynaPuff({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Paws Outdoors",
	description: "Dog walking and pet services in North Norfolk and Broadland",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-amber-50`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
