import {Link, Outlet} from "react-router-dom";
import paths from "../../routes/paths.ts";

const Layout = () => {
    return (
        <>
            <header className="header">
                <h1>Store Management App</h1>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><Link to={paths.homepage} className="nav-link">Home</Link></li>
                        <li><Link to={paths.addProduct} className="nav-link">Add Product</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <div className="container">
                <Outlet/>
                </div>
            </main>
            <footer className="footer">
                <h4>Author: Dawid Holisz</h4>
            </footer>
        </>
    );
};

export default Layout;
