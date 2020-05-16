export enum Statuses {
	stopped ,
	started
}

/* app types*/
export type RobotsModel ={
	id: string
	code: string
	status: string
}

export type AppState ={
	robots: Array<RobotsModel> | null
}
