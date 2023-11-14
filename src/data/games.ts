interface Game {
  id: number;
  img: string;
  title: string;
  login: string;
  isFromSteam: boolean;
}

const games: Game[] = [
  {
    id: 0,
    img: 'https://iwant.games/wp-content/uploads/alan-wake-thumb-400x600.jpg',
    title: 'Alan Wake',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 1,
    img: 'https://iwant.games/wp-content/uploads/assassins-creed-invictus-thumb-400x600.jpg',
    title: 'Assassin’s creed',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 2,
    img: 'https://iwant.games/wp-content/uploads/assassins-creed-2-thumb-400x600.jpg',
    title: 'Assassin’s creed 2',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 3,
    img: 'https://iwant.games/wp-content/uploads/assassins-creed-syndicate-thumb-400x600.jpg',
    title: 'Assassin’s creed: Syndicate',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 4,
    img: 'https://iwant.games/wp-content/uploads/assassins-creed-unity-thumb-400x600.jpg',
    title: 'Assassin’s creed: Unity',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 5,
    img: 'https://iwant.games/wp-content/uploads/batman-arkham-asylum-thumb-400x600.jpg',
    title: 'Batman: Arkham Asylum',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 6,
    img: 'https://iwant.games/wp-content/uploads/batman-arkham-city-thumb2-400x600.jpg',
    title: 'Batman: Arkham City',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 7,
    img: 'https://iwant.games/wp-content/uploads/batman-arkham-knight-thumb-400x600.jpg',
    title: 'Batman: Arkham Knight',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 8,
    img: '',
    title: 'Call of Juarez Gunslinger',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 10,
    img: 'https://iwant.games/wp-content/uploads/control-thumb-1-468x702.jpg',
    title: 'Control',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 11,
    img: '',
    title: 'Counter - Strike',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 12,
    img: '',
    title: 'Counter - Strike: Condition-zero',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 13,
    img: '',
    title: 'Counter - Strike: Source',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 14,
    img: 'https://iwant.games/wp-content/uploads/death-stranding-thumb-400x600.jpg',
    title: 'Death Stranding',
    login: 'abdulovdb',
    isFromSteam: false,
  },
  {
    id: 15,
    img: 'https://iwant.games/wp-content/uploads/deus-ex-human-revolution-thumb-468x702.jpg',
    title: 'Deus Ex: Human Revolution',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 16,
    img: 'https://iwant.games/wp-content/uploads/dishonored-thumb-400x600.jpg',
    title: 'Dishonored - Definitive Edition',
    login: 'abdulovdb',
    isFromSteam: false,
  },
  {
    id: 17,
    img: 'https://iwant.games/wp-content/uploads/fallout-3-thumb-400x600.jpg',
    title: 'Fallout 3',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 18,
    img: '',
    title: 'Far Cry 3',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 19,
    img: 'https://iwant.games/wp-content/uploads/farming-simulator-19-thumb-400x600.jpg',
    title: 'Farming Simulator 19',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 20,
    img: 'https://iwant.games/wp-content/uploads/grand-theft-auto-3-thumb-400x600.jpg',
    title: 'GTA III',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 21,
    img: '',
    title: 'GTA IV',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 22,
    img: 'https://iwant.games/wp-content/uploads/gta-san-andreas-thumb-400x600.jpg',
    title: 'GTA San Andreas',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 23,
    img: 'https://iwant.games/wp-content/uploads/gta-vice-city-thumb-400x600.jpg',
    title: 'GTA Vice City',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 24,
    img: 'https://iwant.games/wp-content/uploads/grand-theft-auto-v-thumb-1-400x600.jpg',
    title: 'GTA V',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 25,
    img: '',
    title: 'Hitman: Codename 47',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 26,
    img: '',
    title: 'Hitman 2: Silent Assassin',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 27,
    img: '',
    title: 'Hitman: Contracts',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 28,
    img: '',
    title: 'Hitman: Blood Money',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 29,
    img: '',
    title: 'Hitman',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 30,
    img: '',
    title: 'Hitman 2',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 31,
    img: '',
    title: 'Hitman: Sniper Challenge',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 32,
    img: '',
    title: 'LEGO Batman The Videogame',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 33,
    img: '',
    title: 'LEGO Batman 2',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 34,
    img: '',
    title: 'LEGO Batman 3',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 35,
    img: 'https://iwant.games/wp-content/uploads/mafia-thumb-400x600.jpg',
    title: 'Mafia',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 36,
    img: 'https://iwant.games/wp-content/uploads/mafia-definitive-edition-2020-thumb-1-468x702.jpg',
    title: 'Mafia: Definitive Edition',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 37,
    img: 'https://iwant.games/wp-content/uploads/Metal-Gear-Solid-Ground-Zeroes.jpg',
    title: 'Metal gear solid V Ground zeroes',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 38,
    img: 'https://iwant.games/wp-content/uploads/Metal-Gear-Solid-5-The-Phantom-Pain.jpg',
    title: 'Metal gear solid V The phantom pain',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 39,
    img: 'https://iwant.games/wp-content/uploads/metro-redux-thumb-400x600.jpg',
    title: 'Metro 2033 Redux',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 41,
    img: 'https://iwant.games/wp-content/uploads/metro-last-light-thumb-400x600.jpg',
    title: 'Metro Last Night Redux',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 42,
    img: 'https://iwant.games/wp-content/uploads/nba-2k21-thumb-400x600.jpg',
    title: 'NBA 2K21',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 43,
    img: 'https://iwant.games/wp-content/uploads/outlast-thumb-400x600.jpg',
    title: 'Outlast',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 44,
    img: 'https://iwant.games/wp-content/uploads/saints-row-the-third-remastered-thumb-400x600.jpg',
    title: 'Saints Row The Third Remastered',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 45,
    img: '',
    title: 'Star Wars: Battlefront 2',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 46,
    img: 'https://iwant.games/wp-content/uploads/the-sims-4-thumb-400x600.jpg',
    title: 'The Sims 4',
    login: 'abdulovdb',
    isFromSteam: true,
  },
  {
    id: 47,
    img: '',
    title: `Tom Clancy's Splinter Cell Blacklist`,
    login: 'abdulovdb2',
    isFromSteam: true,
  },
  {
    id: 48,
    img: '',
    title: 'Watch Dogs',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
  {
    id: 49,
    img: 'https://iwant.games/wp-content/uploads/watch-dogs-2-thumb-468x702.jpg',
    title: 'Watch Dogs2',
    login: 'Notorious.ADB',
    isFromSteam: false,
  },
];
export default games;
