const Movie = props => {
    return (
        <div className="movie">
            <h1>{props.name}</h1>
            <p>Year: {props.year}</p>
            <img src={props.img} alt={props.name}/>
        </div>
    );
};

const movies = (
    <div>
        <Movie name="Harry Potter and the Deathly Hallows"
               year="2011"
               img="https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/a402be7e-be87-4a39-b273-82b538d06e9b/800x800"
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