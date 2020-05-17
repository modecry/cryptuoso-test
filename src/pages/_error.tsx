import React from "react"
// components
import MainLayout from "components/MainLayout"
import ErrorComponent from "components/ErrorComponent"
// contants
import { ERROR_MESSAGES } from "contants/ERROR_MESSAGES"


const Page404: React.FunctionComponent = () =>
	<MainLayout title="404 | Страница не найдена !">
		<ErrorComponent message={ERROR_MESSAGES.NOT_FOUND_PAGE} buttonPath={"/"} buttonText={"На главную"}/>
	</MainLayout>

export default Page404
