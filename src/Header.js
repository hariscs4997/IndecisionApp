


   const render= () =>{
        const r=(
            <div>
       
            <nav className="nav-wrapper">
                    <div className="container">
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                        className="fas fa-bars fa-1x"></i></span></button>
                    <a href="/" id="nav-title"><img src="../../static/summitforhopelogo.PNG" className="img-logo"/></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">

                        <ul className="right">
                            <li><a href="/" className="nav-links">Home</a></li>
                            <li><a href="/Team" className="nav-links">Team</a></li>
                            <li><a href="/Events" className="nav-links">Events</a></li>
                            <li><a href="/Summits" className="nav-links">Past Summits</a></li>
                            <li><a href="/Contact" className="nav-links">Contact Us</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <style jsx>{`
                    nav {
                        height: 100px !important;
                        line-height: 100px !important;
                    }
                
                `}</style>
            </div>
                )
                ReactDOM.render(r,document.getElementById("app"))
           
    }

render();