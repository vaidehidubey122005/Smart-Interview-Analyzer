import { Outlet } from "react-router-dom"
import Footer from "@/components/footer"
import Header from "@/components/header"
export const PublicLayout = () => {
    return(
        <div className="w-full">
        { /* This is the public layout that includes the header and footer */ }
        <Header />
        <Outlet />
        <Footer />
        </div>
    )
}