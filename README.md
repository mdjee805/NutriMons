Project Description
Abstract: NutriMons is an app that will allow users to keep track of and work towards their health goals while being rewarded with resources to take care of a virtual pet for meeting those goals.
NutriMons is at its core a health app, with which users track and plan their nutrient intake, which is linked to a Tamagotchi, a digital pet, that they can take care of.
According to a Gallup poll, about ⅓ of Americans use or have used health apps in the past. However, almost half of them no longer use them, and the plurality of health app users are under 55. In addition, most health apps only let users track their exercise or nutrients. Our app will allow users to track their weight, nutrient intake, and exercise and take care of a digital pet in one app as well as link in-game rewards to reaching their goals.

NutriMons aims to also take market share in the health app space via targeting the ⅔ of Americans that have never used a health app as well as the older demographics with a simple, intuitive design, large buttons, and large text options. In addition, we will poach users from other health apps via our all-in-one design and inclusion of a minigame. We will also reduce user attrition with our Tamagotchi addition, which will give users motivation to exercise and eat well, as hitting their goals will reward them in-game. 

With widespread adoption, NutriMons will increase the proportion of the U.S.A., or even the world, that uses health apps, increasing their overall health. In addition, we will retain a user base and increase motivation to continue using the app and staying or becoming healthy with our addition of the digital pet.


Features

Major features include:
Nutrient, exercise, and water tracking
Diet and training regimen recommendation system
Graphical visuals demonstrating user progress over time
An integrated barcode scanner, allowing users to quickly enter consumed foods
Meal and exercise saving
Reminders and warnings when the user is low or high on particular nutrients
Tamagotchi game mode

Installation (~30 minutes)
Install node.js - this will take > 5 minutes
Be sure to check ‘automatically install the necessary tools’
It will open up a command prompt, press a key twice to let it install needed files
A powershell window will open, give it permission to install chocolatey
If the installer stalls for > 5 minutes, close and reopen the node.js installer and click on ‘change’
Install Expo CLI: via command line on Windows or other platform equivalent, run ‘npm install -g expo-cli’, it should take ~5 minutes
Install Git 
(recommended): click on ‘use Windows’ default console window’ when prompted
Pull the latest version of NutriMons 
Create a new folder ‘mkdir NutriMons’
Navigate to folder ‘cd NutriMons’
Initialize a git repository ‘git init’
Pull the repository ‘git pull https://github.com/mdjee805/NutriMons’
Install required node.js packages (probably missing some)
Navigate to NutriMons folder if not still in it ‘cd NutriMons’
Add Expo CLI package ‘npm add expo’
Add pie chart package ‘npm install react-minimal-pie-chart’
Add barcode scanner package ‘npm i react-webcam-barcode-scanner’
Add dropdown menu package ‘npm install react-select-search’, ‘npm install react-hook-form’, ‘npm install react-native-popup-menu’
Start hosting
From command line in the NutriMons folder, run ‘npm start’ or ‘expo start’
Press ‘w’ after it finishes loading to view on web
Scan the barcode to view on mobile
If on Android, install the Expo app and scan the QR code
If on IOS, simply scan the QR code



How to ‘make it move’ (recommend using Visual Studio, ~30 minutes)
Navigate to the NutriMons folder in File Explorer ‘C:\Users\[Username]\NutriMons’
Open ‘types.tsx’
In BottomTabParamList add a new Tab type ‘TabExample: undefined;
Make a new tabparamlist below BottomTabParamList ‘export type TabExampleParamList = { TabExampleScreen: undefined; }’
Go to ~/NutriMons/navigation
In ‘BottomTabNavigator.tsx’
At the top, import a screen from the appropriate folder ‘import TabExampleScreen from ../screens/TabExampleScreen;’
just below the above, add the appropriate param list to import { ... } ‘import TabExampleParamList’
In <BottomTabNavigator>, add a new <BottomTab.Screen> pointing to a new navigator for your screen
Further below, add a new ‘const TabStack’ and ‘Navigator’ pointing to your screen
In ‘LinkingConfiguration.ts’, add in a new View type and your screen ‘TabExample: { … },’
In index.tsx
Add ‘import ExampleScreen from ‘../screens/ExampleScreen’;’
In return, add your screen in as a new <Stack.Screen> within the <Stack.Navigator>
Go to ~/NutriMons/screens
Duplicate one of the existing screens and rename it ‘TabExampleScreen.tsx’
Open it and rename the ‘export default function’ to your new name ‘export default function TabExample() {‘
Edit the code within the ‘return’ as you wish to change content
Edit the code within ‘const mealPlan = StyleSheet.create({’ to change local styling
Go to ~/NutriMons/assets
Go to styles/styles.tsx
This is the global stylesheet and will affect all screens
Go to images
These are images used in each screen
Components
We used:
Node.js
Expo package
Minimal Pie Chart package
Barcode Scanner package
A dropdown menu package
Expo CLI
Expo Android app
Git

How to Contribute
As described in the tutorial, “How to ‘Make it Move’”, you may pull from the git repo, make local changes and use it for personal activities.
Contact us if you want to be added as a contributor to push.

Support
You can contact us at: BAMM.Tamagotchi@gmail.com