import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Crud Server Action",
	description: "Crud Server Action",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
