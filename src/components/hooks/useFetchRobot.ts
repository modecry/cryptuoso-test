// types
import { RobotsModel } from "contants/types/app"
// graphql
import { useQuery } from "@apollo/react-hooks"
import GET_ROBOTS from "graphQL/GET_ROBOTS"

/**
 * Пользовательский хук фетчинга данных по запросу роботов
 * @return robotsdData
 */
const useFetchRobots = (): robotsdData => useQuery(GET_ROBOTS)

/* robots data types*/
export type robotsdData = {
	loading: boolean // флаг загрузки
	error: boolean // флаг ошибки
	data: {robots: Array<RobotsModel>} // массив возвращемых роботов
}

export default useFetchRobots
