import Layout from "@/components/Layout/Layout";

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (

		<Layout>

			{children}

		</Layout>
	);
}
