import { AppProvider } from '../context';
import Header from './header';
import Footer from './footer';

const Layout = ({children, headerFooter , yoast_head_json}) => {
	const { header, footer } = headerFooter || {};
	return (
		<AppProvider>
			<div>
				<Header header={header} yoast_head_json={yoast_head_json}/>
				<main className="container mx-auto py-4 min-h-50vh">
					{children}
				</main>
				<Footer footer={footer}/>
			</div>
		</AppProvider>
	)
}

export default Layout
