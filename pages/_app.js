import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../apollo/client'
// import 'semantic-ui-css/semantic.min.css';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
