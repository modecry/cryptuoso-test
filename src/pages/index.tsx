import React, { useEffect } from "react"
import Layout from "components/Layout"
// next
import { useRouter } from "next/router"

// containers
import HomeContainer from "components/сontainers/Home/"
// services
import WindowScrollService from "services/WindowScrollService"
import LocalStorageService from "services/LocalStorageService"

const Index: React.FunctionComponent = () => {

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
		<Layout title={"Robots List"}>
			<HomeContainer />
		</Layout>
	)
}


export default Index
