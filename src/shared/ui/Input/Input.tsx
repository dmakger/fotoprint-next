import { ReactNode } from "react"
import { InputText } from "./Text"

interface InputProps {
    children: ReactNode
}

export default function Input({children}: InputProps) {
    return (
        {children}
    )
}

Input.Text = InputText
