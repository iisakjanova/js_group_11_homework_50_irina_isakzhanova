const Movie = props => {
    return (
        <div className="movie">
            <h3>{props.name}</h3>
            <p>Year: {props.year}</p>
            <div className="movie-img-container">
                <img className="movie-img" src={props.img} alt={props.name}/>
            </div>
        </div>
    );
};

const movies = (
    <div className="movies">
        <Movie name="Harry Potter and the Deathly Hallows"
               year="2011"
               img="https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/d3f9695e-d0e3-44cf-96fd-1be581d23948/960x960"
        />
        <Movie name="The Hitman's Bodyguard"
               year="2017"
               img="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/89c46805-06aa-4c2c-8aa0-79e0c298ba20/960x960"
        />
        <Movie name="Guardians of the Galaxy"
               year="2014"
               img="https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0ff5a81e-5bfe-4e67-9726-593664818f01/800x800"
        />
    </div>
);

const container = document.getElementById('app');
ReactDOM.render(movies, container);