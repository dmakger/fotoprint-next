import { PropsWithChildren } from "react";

import { WrapperGap } from '@/shared/ui/Wrapper/Gap/WrapperGap';
import { Header } from '@/widgets/Header/Header';


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <WrapperGap>
            <Header />
            {children}
        </WrapperGap>
    )
}
