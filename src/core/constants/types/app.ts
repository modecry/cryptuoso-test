/* ===== Global  констаты которые используются по всему приложению ===== */

/* Статусы робота*/
export enum Statuses {
	stopped ,
	started
}

/* Интерфейс модели робота */
export interface RobotsModel{
	id: string
	code: string
	status: string
}

/* Интерфейс модели стейта*/
export interface AppState{
	robots: Array<RobotsModel> | null
}

/* Интерфейс модели контекста*/
export interface AppContextTypes {
	state: AppState
	setAppState: (field: string,value: any) => void
}
