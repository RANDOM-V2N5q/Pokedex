import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0070B8',
    primaryDark: '#004588',
    white: '#ffffff',
    card: '#ffffff',
    pokemon: {
      background: {
        black: '#1B1B1B',
        blue: '#0070B8',
        brown: '#6F4E37',
        gray: '#808080',
        green: '#5E8C31',
        pink: '#D98695',
        purple: '#8E4585',
        red: '#CC474B',
        white: '#EAEAEA',
        yellow: '#F5E050',
      },
      types: {
        bug: '#568203',
        dark: '#0E0212',
        dragon: '#002147',
        electric: '#FFC800',
        fairy: '#DE6FA1',
        fighting: '#8B0000',
        fire: '#FF4500',
        flying: '#ACACE6',
        ghost: '#BEBEBE',
        grass: '#006600',
        ground: '#AF6E4D',
        ice: '#87CEFA',
        normal: '#976D6D',
        poison: '#702670',
        psychic: '#32174D',
        rock: '#967117',
        steel: '#5F8A8B',
        water: '#1974D2',
      },
      stats: {
        hp: '#FD3A4A',
        attack: '#FFC800',
        defense: '#4CBB17',
        specialAttack: '#FF7800',
        specialDefence: '#0067A5',
        speed: '#59260B',
      },
    },
  },
};

export const CustomDarkTheme = {
  ...DarkTheme,
};
