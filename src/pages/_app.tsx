import React from "react"
// styles
import "./styles.css"
// next
import { AppProps } from "next/app"
import App from "next/app"
// enhancers
import withApollo from "enhancers/withApollo"
import { AppContextProvider } from "enhancers/appContext"
// types
import { AppState } from "constants/types/app"
// fakeData
import fakeData from "constants/fakeData.json"


/**
 *  Основной компонент приложения
 */
class AppGlobal extends App<{},AppState> {
	state: AppState = {
		robots: fakeData,
	}

	/* Метод изменения стейта приложения*/
	changeAppState = (propName: string, value: any): void => {
		const newState: AppState = { ...this.state, [propName]: value }
		this.setState(newState)
	}

	render() {
		const { Component, pageProps }: AppProps = this.props
		return (
			<AppContextProvider
				value={{ ...this.state, changeAppState: this.changeAppState }}
			>
				<Component {...pageProps} />
			</AppContextProvider>)
	}
}


export default withApollo(AppGlobal)
