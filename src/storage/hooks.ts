import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import { AppDispatch, RootState } from ".";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Сюда кидаем акшены с нового слайса
export const useActionCreators = () => {
    const dispatch = useAppDispatch()

    const actions = useMemo(
        () => ({

        }),
        [],
    )

    return useMemo(
        () => bindActionCreators(actions, dispatch),
        [actions, dispatch],
    )
}