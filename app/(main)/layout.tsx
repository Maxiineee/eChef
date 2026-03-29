import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col w-full sm:gap-3">
            <Header className="hidden sm:flex p-6" />
            <HeaderMobile className="sm:hidden" />
            <div className="px-3 mb-24 sm:mb-0 sm:px-6">
                {children}
            </div>
            <Footer className="sm:hidden" />
        </div>
    )
}