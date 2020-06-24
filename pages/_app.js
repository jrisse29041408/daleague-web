import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../apollo/client";
// import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
