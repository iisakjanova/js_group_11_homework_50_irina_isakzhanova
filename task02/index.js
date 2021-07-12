const Header = props => {
    return (
        <header className="header">
            <div className="container header-inner">
                <a className="logo" href="#">{props.logo}</a>
                <nav className="main-nav">
                    <ul className="list">
                        {props.navigation.map(item => (
                            <li className="list-item"><a className="nav-link" href="#">{item}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const navigationText = ["Home", "About", "Contact us"];

const webPage = (
    <div className="site">
        <Header logo="biscuit" navigation={navigationText}/>
    </div>
);

const container = document.getElementById('app');
ReactDOM.render(webPage, container);
