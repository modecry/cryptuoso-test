import RobotContainer from "components/сontainers/Robot/"
// next
import Head from "next/head"
import { useRouter } from "next/router"


export default (): React.FunctionComponent => {
	const router = useRouter()
	return (
		<>
			<Head>
				 <title>{`Robot: ${router.query.id}`}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			</Head>
			<RobotContainer id={router.query.id}/>
		</>
	)
}
