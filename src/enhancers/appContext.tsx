import React from "react"
import { withContext } from "with-context"


export const AppContext = React.createContext({})
export const AppContextProvider = AppContext.Provider
export const withAppContext = withContext(AppContext)
