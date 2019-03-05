import * as React from 'react';
import { Text, View, SafeAreaView,AsyncStorage, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';

const pColor = '#F28705';
const placeHolderColor = '#CCC';
const nOptions = {
	headerStyle: {
		height: 30,
		borderBottomWidth: 0,
		backgroundColor: pColor,
	},
	headerTintColor: '#FFF',
};
export class LogInScreen extends React.Component {
	static navigationOptions = nOptions
	constructor(props) {
		super(props);
		this.state = { userEmail: '', password: ''}
		this.clearData = this.clearData.bind(this)
		this.persistData = this.persistData.bind(this)
	}
	
	persistData(){
		let user = this.state.userEmail;
		AsyncStorage.setItem('user', user)
		this.setState({userEmail: user,persistedSession: user})
	}
	check(){
		AsyncStorage.getItem('user').then((user) => {
			this.setState({userEmail: user, persistedSession: user})
		})
	}
	componentWillMount(){
		this.check();
		// alert(this.state.persistedSession)
	}
	clearData(){
		AsyncStorage.clear();
		this.setState({persistedSession:''})
	}
	render() {
	
		const { navigate } = this.props.navigation;
		return (
			<KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		 		
				<SafeAreaView style={specificStyles.container}>
				 <StatusBar barStyle="light-content"/>
					<Animatable.View animation="fadeInDown" easing="ease-in-out-back" useNativeDriver={true} style={specificStyles.logoContainer}>
						<Image style={[specificStyles.logo]} source={require('./../assets/logo_white.png')}/>
					</Animatable.View>
					<Animatable.View animation="fadeInUp" delay={300} easing="ease-in-out-back" useNativeDriver={true} style={specificStyles.textContainer}>
						<TextInput 
							placeholder="Email" 
							placeholderTextColor={placeHolderColor}  
							onChangeText={userEmail=>this.setState({userEmail})} 
							returnKeyType="next" 
							style={[specificStyles.input]} onSubmitEditing={() => this.passwordInput.focus()} 
							keyboardType="email-address" 
							autoCapitalize="none" 
							autoCorrect={false} 
							ref={(email) => this.emailInput = email}/>
						<TextInput 
							placeholder="Password" 
							placeholderTextColor={placeHolderColor} 
							onSubmitEditing={this.login} 
							onChangeText={password=>this.setState({password})} 
							returnKeyType="go" 
							secureTextEntry 
							style={[specificStyles.input]} 
							ref={(input) => this.passwordInput = input}/>
						<View style={specificStyles.buttonContainer}>
							<TouchableOpacity style={[specificStyles.button]} onPress={(this.login)}>
								<Text style={specificStyles.buttonText}>LOGIN</Text>
							</TouchableOpacity>
							 <TouchableOpacity style={[specificStyles.button]} onPress={() => navigate('Register')}>
								<Text style={specificStyles.buttonText}>REGISTER</Text>
							</TouchableOpacity>
						</View>

						<Text style={[specificStyles.forgotText]} onPress={() => navigate('Forgot')}>¿Olvidaste tu contraseña?</Text>
					</Animatable.View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
			</KeyboardAvoidingView>

		);
	}
	
	login = () => {
		
		const user = this.state.userEmail;
		const pass = this.state.password;
		const { navigate } = this.props.navigation;
		fetch('http://apipayo.nulltch.com/Login.php',{
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				email: user,
				password: pass
			})
		})
		.then((response)=>response.json())
			.then((responseJson)=>{
				if(responseJson == "ok"){
					this.emailInput.clear();
					this.passwordInput.clear();
					this.persistData();
					alert(this.state.persistedSession);
					this.setState({userEmail: user})
					navigate('Menu');
				}
				else{
					alert(responseJson);
				}
			})
			.catch((error)=>{
				console.error(error);
			});
	
	}
	
	
}

const specificStyles = StyleSheet.create({
	container: {
		flex: 1,
		// top: -37,
		// height: '110.1%',
		backgroundColor: pColor,
	},
	textContainer: {
		marginTop: 50,
		marginBottom: 10,

	},
	logoContainer: {
		top: 20,
		height: 103,
		flexGrow: 1,
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 300,
		height: 103,
	},
	input: {
		height: 40,
		marginTop: 5,
		fontSize: 18,
		color: '#FFF',
		marginLeft: 30,
		paddingLeft: 10,
		marginRight: 30,
		paddingRight: 10,
		marginBottom: 10,
		borderColor: '#FFF',
		paddingHorizontal: 5,
		borderBottomWidth: 2,
		textAlignVertical: 'top',


		textShadowRadius: 2,
		textShadowColor: 'rgba(0, 0, 0, .3)',
		textShadowOffset: {width: 0, height: 1},

		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: .4,
		shadowRadius: 3,
		shadowColor: 'rgba(0,0,0,.4)',
	},
	buttonContainer: {
		marginTop: 10,
	},
	button: {
		backgroundColor: '#FFF',
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 0,
		paddingVertical: 15,
		paddingHorizontal: 10,
	},
	buttonText: {
		color: pColor,
		fontWeight: '700',
		textAlign: 'center',
	},
	forgotText: {
		marginTop: 10,
		color: '#FFF',
		marginTop: 200,
		fontWeight: '700',
		textAlign: 'center',
	}
});