import { Outlet } from "react-router-dom"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Container } from "lucide-react"
export const MainLayout = () => {
    return(
        <div className="flex flex-col h-screen">
        { /* This is the public layout that includes the header and footer */ }
        <Header />
        <Container className="flex-grow">
            <main className="flex-grow">
                <Outlet />
            </main>
            
        </Container>
        
        <Footer />
        </div>
    )
}