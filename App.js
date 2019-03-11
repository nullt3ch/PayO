// import * as React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { LogInScreen } from './views/login.js';
import { RegisterScreen } from './views/register.js';
import { MenuScreen } from './views/menu.js';
import { PhoneScreen } from './views/phone.js';
import { TestScreen } from './views/test.js';
import { VerScreen } from './views/verification.js';
import { PaymentScreen } from './views/payments.js';
import { CheckOutScreen } from './views/checkout.js';
import { PayListScreen } from './views/payments-list.js';
// import { AddCCardScreen } from './views/addccard.js';
const logInNavigation = createStackNavigator({

	LogIn: { screen: LogInScreen },
	// AddCCard: { screen: AddCCardScreen },
	Verification: { screen: VerScreen },
	PayList : { screen: PayListScreen },
	Payment: { screen: PaymentScreen },
	Menu: { screen: MenuScreen },
	Register: { screen: RegisterScreen },
	CheckOut: { screen: CheckOutScreen },
	Phone: { screen: PhoneScreen },
	//Test: { screen: TestScreen },
});

const App = createAppContainer(logInNavigation);

export default App;