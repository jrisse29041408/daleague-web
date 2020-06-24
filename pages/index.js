import { client as apolloClient } from "../apollo/client";
import { HomepageLayout } from "../components/Layout";

const Home = () => {
	return (
		<div>
			<HomepageLayout />
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}

export default Home;
