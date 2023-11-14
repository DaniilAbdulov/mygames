const games = [
    {
        id: 0,
        front: {
            img: "https://iwant.games/wp-content/uploads/alan-wake-thumb-400x600.jpg",
            title: "Alan Wake",
        },
        login: "abdulovdb",
        isFromSteam: true,
    },
    {
        id: 1,
        front: {
            img: "https://iwant.games/wp-content/uploads/assassins-creed-invictus-thumb-400x600.jpg",
            title: "Assassin’s creed",
        },
        login: "abdulovdb",
        isFromSteam: true,
    },
    {
        id: 2,
        front: {
            img: "https://iwant.games/wp-content/uploads/assassins-creed-2-thumb-400x600.jpg",
            title: "Assassin’s creed 2",
        },
        login: "abdulovdb",
        isFromSteam: true,
    },
    {
        id: 3,
        front: {
            img: "https://iwant.games/wp-content/uploads/assassins-creed-syndicate-thumb-400x600.jpg",
            title: "Assassin’s creed: Syndicate",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
    {
        id: 4,
        front: {
            img: "https://iwant.games/wp-content/uploads/assassins-creed-unity-thumb-400x600.jpg",
            title: "Assassin’s creed: Unity",
        },
        login: "abdulovdb",
        isFromSteam: true,
    },
    {
        id: 5,
        front: {
            img: "https://iwant.games/wp-content/uploads/batman-arkham-asylum-thumb-400x600.jpg",
            title: "Batman: Arkham Asylum",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
    {
        id: 6,
        front: {
            img: "https://iwant.games/wp-content/uploads/batman-arkham-city-thumb2-400x600.jpg",
            title: "Batman: Arkham City",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
    {
        id: 7,
        front: {
            img: "https://iwant.games/wp-content/uploads/batman-arkham-knight-thumb-400x600.jpg",
            title: "Batman: Arkham Knight",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
    {
        id: 8,
        front: {
            img: "",
            title: "Call of Juarez Gunslinger",
        },
        login: "abdulovdb",
        isFromSteam: true,
    },
    {
        id: 10,
        front: {
            img: "https://iwant.games/wp-content/uploads/control-thumb-1-468x702.jpg",
            title: "Control",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
    {
        id: 11,
        front: {
            img: "",

            title: "Counter - Strike",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 12,

        front: {
            img: "",

            title: "Counter - Strike: Condition-zero",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 13,

        front: {
            img: "",

            title: "Counter - Strike: Source",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 14,

        front: {
            img: "https://iwant.games/wp-content/uploads/death-stranding-thumb-400x600.jpg",

            title: "Death Stranding",
        },

        login: "abdulovdb",

        isFromSteam: false,
    },

    {
        id: 15,

        front: {
            img: "https://iwant.games/wp-content/uploads/deus-ex-human-revolution-thumb-468x702.jpg",

            title: "Deus Ex: Human Revolution",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 16,

        front: {
            img: "https://iwant.games/wp-content/uploads/dishonored-thumb-400x600.jpg",

            title: "Dishonored - Definitive Edition",
        },

        login: "abdulovdb",

        isFromSteam: false,
    },

    {
        id: 17,

        front: {
            img: "https://iwant.games/wp-content/uploads/fallout-3-thumb-400x600.jpg",

            title: "Fallout 3",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 18,

        front: {
            img: "",

            title: "Far Cry 3",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 19,

        front: {
            img: "https://iwant.games/wp-content/uploads/farming-simulator-19-thumb-400x600.jpg",

            title: "Farming Simulator 19",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 20,

        front: {
            img: "https://iwant.games/wp-content/uploads/grand-theft-auto-3-thumb-400x600.jpg",

            title: "GTA III",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 21,

        front: {
            img: "",

            title: "GTA IV",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 22,

        front: {
            img: "https://iwant.games/wp-content/uploads/gta-san-andreas-thumb-400x600.jpg",

            title: "GTA San Andreas",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 23,

        front: {
            img: "https://iwant.games/wp-content/uploads/gta-vice-city-thumb-400x600.jpg",

            title: "GTA Vice City",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 24,

        front: {
            img: "https://iwant.games/wp-content/uploads/grand-theft-auto-v-thumb-1-400x600.jpg",

            title: "GTA V",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 25,

        front: {
            img: "",

            title: "Hitman: Codename 47",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 26,

        front: {
            img: "",

            title: "Hitman 2: Silent Assassin",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 27,

        front: {
            img: "",

            title: "Hitman: Contracts",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 28,

        front: {
            img: "",

            title: "Hitman: Blood Money",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 29,

        front: {
            img: "",

            title: "Hitman",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 30,

        front: {
            img: "",

            title: "Hitman 2",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 31,

        front: {
            img: "",

            title: "Hitman: Sniper Challenge",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 32,

        front: {
            img: "",

            title: "LEGO Batman The Videogame",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 33,

        front: {
            img: "",

            title: "LEGO Batman 2",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 34,

        front: {
            img: "",

            title: "LEGO Batman 3",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 35,

        front: {
            img: "https://iwant.games/wp-content/uploads/mafia-thumb-400x600.jpg",

            title: "Mafia",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 36,

        front: {
            img: "https://iwant.games/wp-content/uploads/mafia-definitive-edition-2020-thumb-1-468x702.jpg",

            title: "Mafia: Definitive Edition",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 37,

        front: {
            img: "https://iwant.games/wp-content/uploads/Metal-Gear-Solid-Ground-Zeroes.jpg",

            title: "Metal gear solid V Ground zeroes",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 38,

        front: {
            img: "https://iwant.games/wp-content/uploads/Metal-Gear-Solid-5-The-Phantom-Pain.jpg",

            title: "Metal gear solid V The phantom pain",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 39,

        front: {
            img: "https://iwant.games/wp-content/uploads/metro-redux-thumb-400x600.jpg",

            title: "Metro 2033 Redux",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 41,

        front: {
            img: "https://iwant.games/wp-content/uploads/metro-last-light-thumb-400x600.jpg",

            title: "Metro Last Night Redux",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 42,

        front: {
            img: "https://iwant.games/wp-content/uploads/nba-2k21-thumb-400x600.jpg",

            title: "NBA 2K21",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 43,

        front: {
            img: "https://iwant.games/wp-content/uploads/outlast-thumb-400x600.jpg",

            title: "Outlast",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 44,

        front: {
            img: "https://iwant.games/wp-content/uploads/saints-row-the-third-remastered-thumb-400x600.jpg",

            title: "Saints Row The Third Remastered",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 45,

        front: {
            img: "",

            title: "Star Wars: Battlefront 2",
        },

        login: "Notorious.ADB",

        isFromSteam: false,
    },

    {
        id: 46,

        front: {
            img: "https://iwant.games/wp-content/uploads/the-sims-4-thumb-400x600.jpg",

            title: "The Sims 4",
        },

        login: "abdulovdb",

        isFromSteam: true,
    },

    {
        id: 47,
        front: {
            img: "",
            title: `Tom Clancy's Splinter Cell Blacklist`,
        },
        login: "abdulovdb2",
        isFromSteam: true,
    },
    {
        id: 48,
        front: {
            img: "",
            title: "Watch Dogs",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },

    {
        id: 49,
        front: {
            img: "https://iwant.games/wp-content/uploads/watch-dogs-2-thumb-468x702.jpg",
            title: "Watch Dogs2",
        },
        login: "Notorious.ADB",
        isFromSteam: false,
    },
];
export default games;
