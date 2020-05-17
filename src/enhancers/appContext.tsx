import React, { useState, createContext } from "react"
import { withContext } from "with-context"
// types
import { AppState } from "contants/types/app"

export const AppContext = createContext({})

/**
 * Компонент провайдер для передачи конекста
 * @param props {any}
 */
export const AppContextProvider: React.FunctionComponent = (props: any) => {
	const IntitalAppState: AppState = { robots: null }
	const [state,setState] = useState(IntitalAppState)

	/**
	 *  Функця установки стейта в приложение
	 * @param field {string} - строковое название поля стейта
	 * @param value {any} - значение поля
	 * @return void
	 */
	const setAppState = (field: string,value: any): void => {
		const newstate: AppState = { ...state,[field]: value }
		setState(newstate)
	}

	return (
		<AppContext.Provider
			value={{ state,setAppState }}
		>
			{props.children}
		</AppContext.Provider>
	)
}


export const withAppContext = withContext(AppContext)
