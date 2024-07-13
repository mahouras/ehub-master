// Definición de la interfaz Movie para representar una película
export interface Movie {
    id: string;          // Identificador único de la película
    name: string;        // Nombre de la película
    genre: string;       // Género al que pertenece la película
    image: string;       // URL de la imagen de la película
    releaseYear: string; // Año de lanzamiento de la película
    about: string;       // Descripción breve de la trama o sinopsis de la película
}

// Array de objetos Movie que contiene datos de películas específicas
export const movies: Movie[] = [
    {
        id: '1',
        name: 'Jojo Rabbit',
        genre: 'Dark Comedy',
        image: 'https://es.web.img3.acsta.net/pictures/20/01/17/08/50/0932472.jpg',
        releaseYear: '2019',
        about: 'Jojo "Rabbit" Betzler es un niño alemán solitario de las Juventudes Hitlerianas que descubre secretos familiares durante la Segunda Guerra Mundial.'
    },
    {
        id: '2',
        name: 'Everything Everywhere All at Once',
        genre: 'Dark Comedy',
        image: 'https://m.media-amazon.com/images/I/91B+PZghFGL._AC_UF1000,1000_QL80_.jpg',
        releaseYear: '2022',
        about: 'Evelyn, una inmigrante china en EE.UU., se ve envuelta en una aventura interdimensional para salvar el mundo.'
    },
    {
        id: '3',
        name: 'Past Lives',
        genre: 'Romance',
        image: 'https://m.media-amazon.com/images/M/MV5BOTkzYmMxNTItZDAxNC00NGM0LWIyODMtMWYzMzRkMjIyMTE1XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_.jpg',
        releaseYear: '2023',
        about: 'Nora y Hae Sung, amigos de la infancia separados por la emigración, se reencuentran en Nueva York años después.'
    },
    {
        id: '4',
        name: 'Treasure Planet',
        genre: 'Adventure',
        image: 'https://m.media-amazon.com/images/M/MV5BNGI0N2EzZDktNDY3OS00NWFmLTgxZjEtMTc1OTNlMzQxNDZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
        releaseYear: '2001',
        about: 'Jim, un joven surfista solar, lidera una búsqueda de tesoros intergaláctica con la ayuda de amigos inusuales.'
    },
    {
        id: '5',
        name: 'Inside Out 2',
        genre: 'Adventure',
        image: 'https://m.media-amazon.com/images/I/81OxUOV+7qL._AC_UF894,1000_QL80_.jpg',
        releaseYear: '2024',
        about: 'Secuela donde Riley, ahora adolescente, explora nuevas emociones dentro de su mente en una nueva aventura animada.'
    },
    {
        id: '6',
        name: '100 days of summer',
        genre: 'Romance',
        image: 'https://m.media-amazon.com/images/I/91MfoP5HS2L._AC_UF894,1000_QL80_.jpg',
        releaseYear: '2009',
        about: 'Una comedia romántica que sigue la búsqueda de un joven escritor de tarjetas de felicitación por el amor verdadero.'
    },
];

// Array de cadenas que representa los géneros disponibles en las películas
export const genres: string[] = ['Dark Comedy', 'Romance', 'Adventure'];
