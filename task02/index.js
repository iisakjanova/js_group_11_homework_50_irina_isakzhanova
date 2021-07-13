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

const ContentCard = props => {
    return (
        <div className="content-card">
            <img src={props.img}/>
            <h4 className="card-title"><a className="card-title-link" href="#">{props.title}</a></h4>
            <p className="card-text">{props.shortText}</p>
        </div>
    );
};

const Content = props => {
    return (
        <div className="content">{props.children}</div>
    );
};

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer-inner container">
                <span>{props.copyright}</span>
                <span>phone: {props.phone}</span>
            </div>
        </div>
    );
};

const navigationText = ["Home", "About", "Contact us"];
const sidebarText = ["Cakes", "Pies", "Cookies", "Buns", "Sweet bread", "Candies", "Ice cream", "Other sweets"];

const webPage = (
    <div className="site">
        <Header logo="~ biscuit ~" navigation={navigationText}/>
        <div className="content-block">
            <Sidebar title="Category" navigation ={sidebarText}/>
            <Content>
                <ContentCard title="Cheesecake with spicy tangerines"
                             shortText="An interesting recipe for curd cheesecake on a pillow of chocolate brownie and topped with aromatic spicy tangerines in syrup."
                             img="https://www.gastronom.ru/binfiles/images/20170205/mb9e7bef.jpg"
                />
                <ContentCard title="Butterfly Cake"
                             shortText="A completely versatile cake that suits any occasion, from weddings to children's parties, and at any time of the year."
                             img="https://www.gastronom.ru/binfiles/images/20160128/bab922a7.jpg"
                />
                <ContentCard title="Raspberry mousse cake"
                             shortText="A delicacy based on airy raspberry mousse enclosed in a ring of the most delicate biscuit and covered with aromatic berry jelly."
                             img="https://www.gastronom.ru/binfiles/images/20180312/m2fdb3f0.jpg"
                />
                <ContentCard title="Chocolate cake with spicy cherries"
                             shortText="The cake is easy to prepare and tastes very juicy and incredibly tender."
                             img="https://www.gastronom.ru/binfiles/images/20210430/m561a725.jpg"
                />
                <ContentCard title="Raspberry curd cake"
                             shortText="It is not just a dessert, but a real hymn to the sunny summer!"
                             img="https://www.gastronom.ru/binfiles/images/00000162/00093768.jpg"
                />
                <ContentCard title="Strawberry cream cake"
                             shortText="There is no sugar in the filling of this delicacy - a small amount of jam or jam is responsible for the sweetness."
                             img="https://www.gastronom.ru/binfiles/images/20160623/b477e6ff.jpg"
                />
            </Content>
        </div>
        <Footer copyright="© 2021 Biscuit LLC. All Rights Reserved." phone="0777 777 777"/>
    </div>
);

const container = document.getElementById('app');
ReactDOM.render(webPage, container);
