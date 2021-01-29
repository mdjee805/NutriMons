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
          TabProfile: {
            screens: {
              TabProfileScreen: 'Profile',
            },
           },
           TabLogin: {
            screens: {
              TabLoginScreen: 'Login',
            },
           },
           TabRegister: {
            screens: {
              TabRegisterScreen: 'Register',
            },
           },
           TabTamagotchi: {
             screens: {
               TabTamagotchiScreen: 'Tamagotchi',
             },
           },
           TabMeal: {
             screens: {
               TabMealScreen: 'Meal',
              },
           },
           TabAddMeal: {
             screens: {
               TabAddMealScreen: 'AddMeal',
              },
           },
           TabMealPlan: {
             screens: {
               TabMealPlanScreen: 'MealPlan',
              },
           },
           TabBarcode: {
             screens: {
               TabBarcodeScreen: 'ScanBarcode',
              },
           },
           TabWater: {
             screens: {
               TabWaterScreen: 'Water',
              },
            },
            TabExercise: {
              screens: {
                TabExerciseScreen: 'Exercise',
              },
              },
            TabNutrientInformation: {
              screens: {
                TabNutrientInformationScreen: 'NutrientInformation',
              },
            },
            TabNutrientOverview: {
              screens: {
                TabNutrientOverviewScreen: 'NutrientOverview',
              },
            },
            TabShop: {
              screens: {
                TabShopScreen: 'Shop',
              },
            },
          },
        },
      NotFound: '*',
    },
  },
};
