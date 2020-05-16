import { useRouter, NextRouter } from "next/router"


export default (): React.FunctionComponent => {
	const router = useRouter()
	return <p>Test id: {router.query.id}</p>
}
