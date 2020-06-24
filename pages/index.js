import { client as apolloClient } from "../apollo/client";
import { SignUpButton } from "../components/SignUpButton";

function Index() {
	return (
		<div>
			<SignUpButton to="/signUp" />
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}

export default Index;
