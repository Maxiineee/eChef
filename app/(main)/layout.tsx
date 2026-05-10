import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
    const isAuthenticated = !! (await auth.api.getSession({ headers: await headers() }));
    return (
        <div className="flex flex-col w-full">
            <Header className="hidden sm:flex p-6" isAuthenticated={isAuthenticated} />
            <HeaderMobile className="sm:hidden" />
            <div className="mb-24 sm:mb-0">
                {children}
            </div>
            <Footer className="sm:hidden" />
        </div>
    )
}