import { PropsWithChildren } from "react";

import { WrapperGap } from '@/shared/ui/Wrapper/Gap/WrapperGap';
import { Header } from '@/widgets/Header/Header';
import { Footer } from "@/widgets/Footer/Footer";


export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <WrapperGap>
            <Header />
            {children}
            <Footer />
        </WrapperGap>
    )
}
