import React, { useEffect } from "react"
import MainLayout from "components/MainLayout"
// containers
import HomeContainer from "components/сontainers/Home/"
// services
import WindowScrollService from "services/WindowScrollService"
import LocalStorageService from "services/LocalStorageService"

const Index: React.FunctionComponent = () => {

	/* use effect для подписки и отписки запоминания позиции скролла*/
	useEffect(() => {
		const scrollPosition = LocalStorageService.getItem("scroll_Y")
		if (scrollPosition) {
			WindowScrollService.scrollTo(scrollPosition)
		}

		WindowScrollService.subscribeToListenScroll(WindowScrollService.scrollHandler)
		return () => {
			WindowScrollService.unsubscribeListenScroll(WindowScrollService.scrollHandler)
		}

	},[])

	return (
		<MainLayout title={"Robots List"}>
			<HomeContainer />
		</MainLayout>
	)
}


export default Index
