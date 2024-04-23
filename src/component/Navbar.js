
import NavLogo from "./../assest/logo/NavLogo.svg";
import "./Navbar.css";
import Button from "./Button"


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-main">
                    <div className="nav-title">
                        <img src={NavLogo} alt="GeekFood-logo"></img>
                        <h1>GeekFoods</h1>
                    </div>

                    <div>
                        <ul className="nav-list">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Quote</a></li>
                            <li><a href="/">Restaurant</a></li>
                            <li><a href="/">Foods</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className="nav-button">
                        <Button>Get Started</Button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;