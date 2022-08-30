import colors from 'windicss/colors';
import { defineConfig } from 'vite-plugin-windicss';
import plugin from 'windicss/plugin';

const windi = {
  presets: [],
  attributify: true,
  darkMode: 'class',
  extract: {
    include: ['./**/*.html', './**/*.vue', './**/*.js'],
  },
  safelist: [
    'fade-enter-active',
    'fade-leave-active',
    'fade-enter',
    'fade-leave-to',
    'left-enter-active',
    'left-leave-active',
    'right-enter-active',
    'right-leave-active',
    'left-enter-from',
    'left-leave-to',
    'right-enter-from',
    'right-leave-to',
    'slid-menu-enter-active',
    'slid-menu-leave-active',
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['arial'],
        serif: ['serif'],
        sans: ['sans-serif'],
      },
      outline: {},
      screens: {
        450: '450px',
        sm: '640px',
        md: '769px',
        lg: '1024px',
        1050: '1050px',
        1140: '1140px',
        xl: '1280px',
        '2xl': '1536px',
        1250: '1250px',
        1314: '1314px',
        1440: '1440px',
        1465: '1465px',
        1600: '1600px',
        1920: '1920px',
      },
      colors: {
        black: colors.black,
        white: colors.white,
        yellow: {
          light: '#fffaed',
          fff8f0: '#fff8f0',
          ffd071: '#ffd071',
        },
        gray: {
          dark: '#737373',
          333: '#333333',
          '272b36': '#272b36',
          '3b3b3b': '#3b3b3b',
          '4f4e4e': '#4f4e4e',
          454343: '#454343',
          565962: '#565962',
          797777: '#797777',
          777: '#777777',
          707070: '#707070',
          666: '#666666',
          919191: '#919191',
          b2b2b2: '#b2b2b2',
          bebebe: '#bebebe',
          d6d6d6: '#d6d6d6',
          e0e0e0: '#e0e0e0',
          e9e9e9: '#e9e9e9',
          ededed: '#ededed',
          f5f5f5: '#f5f5f5',
          bbb: '#bbb',
          ddd: '#ddd',
          d3d3d3: '#d3d3d3',
        },
        blue: {
          '2d6ab9': '#2d6ab9',
          '468ae9': '#468ae9',
          '337ab7': '#337ab7',
          '2196f3': '#2196f3',
          '1d8bf1': '#1d8bf1',
          e5f2ff: '#e5f2ff',
          '05aaff': '#05aaff',
          d0e8ff: '#d0e8ff',
          '2296f3': '#2296f3',
          '005fe2': '#005fe2',
        },
        pink: {
          e84989: '#e84989',
          d35887: '#d35887',
          ea6e9d: '#ea6e9d',
          f091b7: '#f091b7',
          f7b1cd: '#f7b1cd',
          f89ebd: '#f89ebd',
          fdecf3: '#fdecf3',
          fdeaf2: '#fdeaf2',
          ffaacc: '#ffaacc',
          ff86b7: '#ff86b7',
        },
        red: {
          d82e55: '#d82e55',
          aa0d31: '#aa0d31',
        },
        green: {
          '42E0C7': '#42E0C7',
          '31b27c': '#31b27c',
          '6cbcb1': '#6cbcb1',
          '80ccba': '#80ccba',
        },
        orange: {
          ff8800: '#ff8800',
        },
        dark: {
          'layouts-1': '#181b1f',
          'layouts-2': '#23282e',
        },
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      transitionProperty: {
        width: 'width',
        transform: 'transform',
        'max-height': 'max-height',
        position: 'right top left bottom',
      },
      animation: {},
      keyframes: {},
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      bottom: '-10px 0 10px -2px rgba(0, 0, 0, 0.7)',
      right: '0 10px 10px -2px rgba(0, 0, 0, 0.7)',
      base: '0 0 5px rgba(0, 0, 0, 0.3)',
      menu: '3px 3px 10px rgba(0, 0, 0, 0.34)',
      ready: '0 0 0 3px #f89ebd inset',
      unready: '0 0 0 3px #e5f2ff inset',
      selected: '0 0 0 2px #1d8bf1 inset',
    },
  },
  shortcuts: {
    'performance-up': {
      'will-change': 'transform',
      transform: 'translateZ(0)',
    },
    'input-outline-none': {
      'box-shadow': '0 0 0 rgba(255, 255, 255, 0)',
    },
    'user-select-none': {
      'user-select': 'none',
    },
    'block-border-bottom': {
      'border-bottom': '1px solid #e0e0e0',
    },
    'block-border-top': {
      'border-top': '1px solid #e0e0e0',
    },
    'page-content': 'w-full absolute top-0 left-0 pt-32px',
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.shadow-right': {
          'box-shadow': '10px 0 10px -5px rgba(0, 0, 0, 0.2)',
        },
        '.shadow-left': {
          'box-shadow': '-10px 0 10px -5px rgba(0, 0, 0, 0.2)',
        },
        '.shadow-bottom': {
          'box-shadow': '0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        },
        '.shadow-windowbox': {
          'box-shadow': '0 0 5px rgba(0, 0, 0, 0.3)',
        },
        '.shadow-info-layout': {
          'box-shadow': '0 3px 6px rgba(0, 0, 0, 0.3)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '@keyframes skeleton-loading': {
          to: {
            'background-position-x': '-20%',
          },
        },
        '.skeleton': {
          'background-color': '#ededed',
          background: 'linear-gradient(100deg, rgba(#fff, 0) 40%, rgba(#fff, 0.2) 50%, rgba(#fff, 0) 60%) #ededed',
          'background-size': '200% 100%',
          'background-position-x': '180%',
          animation: '1.3s skeleton-loading ease-in-out infinite',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar': {
          '&::-webkit-scrollbar-track': {
            'border-radius': '10px',
            'background-color': '#fff',
          },
          '&::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
            'background-color': '#fff',
          },
          '&::-webkit-scrollbar-thumb': {
            'border-radius': '10px',
            'background-color': '#e84989',
          },
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        '.flex-start-center': {
          display: 'flex',
          'justify-content': 'flex-start',
          'align-items': 'center',
        },
        '.flex-end-center': {
          display: 'flex',
          'justify-content': 'flex-end',
          'align-items': 'center',
        },
        '.flex-space-between': {
          display: 'flex',
          'justify-content': 'space-between',
          'align-items': 'center',
        },
        '.flex-space-around': {
          display: 'flex',
          'justify-content': 'space-around',
          'align-items': 'center',
        },
      };
      addUtilities(newUtilities);
    }),

    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
};

export default defineConfig(windi);
