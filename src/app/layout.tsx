import { css } from "@/styled-system/css";
import { Footer } from "@/ui/footer";
import { Navigation } from "@/ui/navigation";
import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
	title: "Uma Note",
	description: "競馬に関することを気ままに更新します",
	icons: [
		{
			rel: "icon",
			url: "/icon.png",
		},
		{
			rel: "apple-touch-icon",
			url: "/apple-touch-icon,png",
			sizes: "180x180",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
};

export default async function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				<Navigation />
				<main className={css({ minHeight: "100vh" })}>{children}</main>
				<div>{modal}</div>
				<Footer />
			</body>
		</html>
	);
}
