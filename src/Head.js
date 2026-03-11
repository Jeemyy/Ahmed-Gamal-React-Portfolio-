import './style.css';
export default function Head(){
    return(
        <div>
            <header className="head" id="head">
                <div className="title">
                    <span id="l">{'{'}</span>
                    <span id="d">.</span>
                    <a href="#"> Jemy </a>
                    <span id="r">{'}'}</span>
                </div>
                <nav className="nav1">
                    <a href="#sec1" id="a1" onclick="">Home</a>
                    <a href="#sec2" id="a2" onclick="">About</a>
                    <a href="#sec3" id="a5" onclick="">Services</a>
                    <a href="#sec4" id="a3" onclick="">Courses</a>
                    <a href="#sec5" id="a4" onclick="">Contact Us</a>
                </nav>

                <div className="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="dropdown_menu">
                    <a href="#sec1" id="a1" onclick="">Home</a>
                    <a href="#sec2" id="a2" onclick="">About</a>
                    <a href="#sec3" id="a5" onclick="">Services</a>
                    <a href="#sec4" id="a3" onclick="">Courses</a>
                    <a href="#sec5" id="a4" onclick="">Contact Us</a>
                </div>
            </header>
        </div>
    )
}