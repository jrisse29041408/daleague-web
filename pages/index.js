import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { initializeApollo } from '../apollo/client'
import { SignUpButton } from '../components/SignUpButton';

function Index() {
  return (
    <div>
      <SignUpButton to="/signUp"/>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Index
