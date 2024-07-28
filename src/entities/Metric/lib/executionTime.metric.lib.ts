import { IExecutionTime } from "../model/executionTime.metric.model";

export const getTextByExecutionTime = (executionTime: IExecutionTime) => {
    const {title} = executionTime
    if (title === '0')
        return 'Сразу'
    return `${title} рабочих дня`
}