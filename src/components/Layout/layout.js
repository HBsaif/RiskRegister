import NavBar from "./navbar";
import Footer from "./footer";
function Layout({children}){
    return(
        <div className="container">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;