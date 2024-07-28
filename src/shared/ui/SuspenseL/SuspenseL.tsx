import { FC, ReactNode, Suspense } from "react"
import { SuspenseLAny } from "./Any/SuspenseLAny";
import { Loading } from "../Loading/Loading";
import { SuspenseLQuery } from "./Query/SuspenseLQuery";

interface SuspenseLProps{
    children: ReactNode,
}

export default function SuspenseL({children}: SuspenseLProps) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}

SuspenseL.Any = SuspenseLAny
SuspenseL.Query = SuspenseLQuery