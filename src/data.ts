export const Currency = {
  GEL: 'GEL',
  EUR: 'EUR',
  USD: 'USD',
};

export const GAMES = [
  {
    id: 1,
    name: 'Mortal Kombat',
    description: 'Naked men fight with other naked men',
    version: 'X',
    price: 1000,
    tags: ['Fights', 'Blood'],
    forKids: false,
    currency: Currency.GEL,
  },
  {
    id: 2,
    name: 'Some Racing',
    price: 700,
    tags: ['Cars', 'Drive', 'StreetRacing'],
    forKids: true,
    currency: Currency.USD,
  },
  {
    id: 3,
    name: 'FIFA',
    description: 'Many people run after a ball on a huge field',
    forKids: true,
    currency: Currency.EUR,
  },
];
