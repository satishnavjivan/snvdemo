
export default function Home() {
	return (
		<><p>hi</p></>
	)
}
/*
export async function getStaticProps() {
	
	const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
	const { data: products } = await getProductsData();
	
	return {
		props: {
			headerFooter: headerFooterData?.data ?? {},
			products: products ?? {}
		},
		
		
		revalidate: 1,
	};
}*/
