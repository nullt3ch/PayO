// import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LogInScreen } from './views/login.js';
import { RegisterScreen } from './views/register.js';
import { MenuScreen } from './views/menu.js';
import { PhoneScreen } from './views/phone.js';
import { TestScreen } from './views/test.js';
import { VerScreen } from './views/verification.js';


const logInNavigation = createStackNavigator({
	Verification: { screen: VerScreen },
	//Test: { screen: TestScreen },
	LogIn: { screen: LogInScreen },
	Menu: { screen: MenuScreen },
	Register: { screen: RegisterScreen },
	Phone: { screen: PhoneScreen },
});

const App = createAppContainer(logInNavigation);

export default App;