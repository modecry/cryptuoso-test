import React from "react"
// apollo
import WithApollo from "next-with-apollo"
import ApolloClient, { InMemoryCache } from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"


/* Декоратор аполоо для апполо хуков*/
const withApollo = WithApollo(
	({ initialState }) => new ApolloClient({
		uri: "https://hasura.dev.cryptuoso.com/v1/graphql ",
		cache: new InMemoryCache().restore(initialState || {}),
	}),
	{
		render: ({ Page, props }) =>
			<ApolloProvider client={props.apollo}>
				<Page {...props} />
			</ApolloProvider>,

	}
)


export default withApollo
