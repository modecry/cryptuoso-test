import React from "react"
import RobotContainer from "components/сontainers/Robot/"
// components
import MainLayout from "components/MainLayout"
// next
import { useRouter } from "next/router"


const RobotPage: React.FunctionComponent = () => {
	const router = useRouter()
	return (
		<MainLayout title={`Robot | ${router.query?.id}`}>
			<RobotContainer robotId={router.query?.id as string}/>
		</MainLayout>)
}


export default RobotPage
