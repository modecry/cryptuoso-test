import { useRouter, NextRouter } from "next/router"
import RobotContainer from "components/сontainers/Robot/"


export default (): React.FunctionComponent => {
	const router = useRouter()
	return <RobotContainer id={router.query.id}/>
}
