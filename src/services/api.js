const api = {
    navigation: [
        {
            "name": "Bio",
            "onclick": "bio"
        },
        {
            "name": "Services",
            "onclick": "services"
        },
        {
            "name": "Briefcase",
            "onclick": "briefcase"
        }
    ],
    buttons_bar: [
        {
            "name": "ig",
            "link": "https://instagram.com/kevincastromm"
        },
        {
            "name": "gh",
            "link": "https://github.com/kevinkag"
        },
        {
            "name": "in",
            "link": "https://www.linkedin.com/in/kevin-martinez-538a99222/"
        },
        {
            "name": "tw",
            "link": "https://twitter.com/KevinMa61701437"
        },
        {
            "name": "tg",
            "link": "https://telegram.com"
        }
    ],
    bio: {
        info: "Soy Kevin, tengo 21 años resido en Caracas, Venezuela. Soy desarrollador web y mobile, " +
            "me incorporé en el mundo de la programacion hace " +
            "apróximadamente 4 años, empecé con PHP, luego tuve una pequeña experiencia en " +
            "el desarrollo de applicaciones mobile con Android Studio, posteriormente me interesé en JavaScript " +
            "por lado del servidor, utilicé el entorno NodeJS y ExpressJS, me di cuenta que me gustaba" +
            "más el front-end, y opté por utilizar en un periodo corto AngularJS hasta que conocí la maravillosa libreria " +
            "que actualmente domino llamada ReactJS."
    },
    briefcase: [
        {
            name: 'GitHub Users',
            img_url: 'portafolio-users.png',
            description: 'App de usuarios de github en ReactJS, utilicé redux, bootstrap, axios, metodología atomic design.',
            url: 'https://kevinkag.github.io/users-github/',
        },
        {
            name: 'Pokedex',
            img_url: 'portafolio-poke.png',
            description: 'Enciclopedia electrónica de pókemons en ReactJS, utilicé redux, bootstrap, axios, metodología atomic design para el manejo de componentes.',
            url: 'https://kevinkag.github.io/poke-app/'
        },
    ]
}

export default api