import React, { useState, createContext } from "react"
import { withContext } from "with-context"
// next
import { useRouter } from "next/router"

// types
import { AppState } from "constants/types/app"

export const AppContext = createContext({})

export const AppContextProvider: React.functionalComponent = (props: React.props) => {
	const IntitalAppState: AppState = { robots: null }
	const [state,setState] = useState(IntitalAppState)

	/* Функция установки стейта*/
	const setAppState = (field: string,value: any): void => {
		const newstate = { ...state,[field]: value }
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
