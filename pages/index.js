import { client as apolloClient } from "../apollo/client";
import { IsntAuthLayout } from "../components/layout/IsntAuthLayout";

// TODO: check authenticated to decide what home page to load
const Home = () => {
	return (
		<div>
			<IsntAuthLayout />
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
