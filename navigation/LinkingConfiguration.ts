import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabBryan: {
            screens: {
              TabBryanScreen: 'Bryan',
            },
          },
          TabAlissa: {
            screens: {
              TabAlissaScreen: 'Alissa',
            },
          },
          TabMichael: {
            screens: {
              TabMichaelScreen: 'Michael',
            },
          },
          TabMinh: {
            screens: {
              TabMinhScreen: 'Minh',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
