import React from "react"
// styles
import "./styles.css"
// next
import { AppProps } from "next/app"
// enhancers
import withApollo from "enhancers/withApollo"
import { AppContextProvider } from "enhancers/appContext"


const AppGlobal = ({ Component, pageProps }: AppProps) =>
	<AppContextProvider>
		<Component {...pageProps} />
	</AppContextProvider>



export default withApollo(AppGlobal)
