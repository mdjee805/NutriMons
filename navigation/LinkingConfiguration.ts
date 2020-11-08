import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabDashboard: {
            screens: {
              TabDashboardScreen: 'Dashboard',
            },
          },
        },
      },
        /*screens: {
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
      Profile: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: 'Profile',
            },
          },
        },
      },
      Tamagotchi: {
        screens: {
          Tamagotchi: {
            screens: {
              TamagotchiScreen: 'Tamagotchi',
            },
          },
        },
      },
      Water: {
        screens: {
          Water: {
            screens: {
              WaterScreen: 'Water',
            },
          },
        },
      },
      Nutrient: {
        screens: {
          Nutrient: {
            screens: {
              NutrientScreen: 'Nutrient',
            },
          },
        },
      },
      Exercise: {
        screens: {
          Exercise: {
            screens: {
              ExerciseScreen: 'Exercise',
            },
          },
        },
      },*/
      NotFound: '*',
    },
  },
};
