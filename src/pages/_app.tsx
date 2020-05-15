import React from "react"
// styles
import "./styles.css"
// next
import { AppProps } from "next/app"
import App from "next/app"
// enhancers
import withApollo from "enhancers/withApollo"
import { AppContextProvider } from "enhancers/appContext"

/**
 *  Основной компонент приложения
 */
class AppGlobal extends App<{},AppState> {
	state: AppState = {
		robots: null,
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

// Базовый интерфейс стейта
export interface AppState {
	robots: Array<any> | null // TODO: Прописать тип для объекта робота
}


export default withApollo(AppGlobal)
