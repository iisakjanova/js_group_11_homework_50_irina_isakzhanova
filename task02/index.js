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

const Sidebar = props => {
    return (
        <div className="sidebar">
            <p className="sidebar-title">{props.title}</p>
            <ul className="list">
                {props.navigation.map(item => (
                    <li className="list-item"><a className="sidebar-link" href="#">{item}</a></li>
                ))}
            </ul>
        </div>

    );
};

const navigationText = ["Home", "About", "Contact us"];
const sidebarText = ["Cakes", "Pies", "Cookies", "Buns", "Sweet bread", "Candies", "Ice cream", "Other sweets"];

const webPage = (
    <div className="site">
        <Header logo="biscuit" navigation={navigationText}/>
        <div className="content">
            <Sidebar title="Category" navigation ={sidebarText}/>
        </div>
    </div>
);

const container = document.getElementById('app');
ReactDOM.render(webPage, container);
