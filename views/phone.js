import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const pColor = '#fff';
const placeHolderColor = '#F28705';
const nOptions = {
	headerStyle: {
		height: 30,
		borderBottomWidth: 0,
		backgroundColor: pColor,
	},
	headerTintColor: '#F28705',
};
export class PhoneScreen extends React.Component {
	static navigationOptions = nOptions
	render() {
		this.state = {
			verification: '',
		};
		const { navigate } = this.props.navigation;
		return (
			 <KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		 
				<SafeAreaView style={specificStyles.container}>
				 <StatusBar barStyle="light-content"/>
					<Animatable.View animation="fadeInUpBig" easing="ease-in-out-back" useNativeDriver={true} style={[specificStyles.textContainer, {paddingTop: 100}]}>
						<TextInput placeholder="Código de verificación(s)" placeholderTextColor={placeHolderColor}  onChangeText={verification=>this.setState({verification})} returnKeyType="next" style={[specificStyles.input]} onSubmitEditing={() => this.lnameInput.focus()} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} ref={(name) => this.nameInput = name}/>
                        <View style={specificStyles.buttonContainer}>
							 <TouchableOpacity style={[specificStyles.button]} onPress={this.phone}>
								<Text style={specificStyles.buttonText}>ACEPTAR</Text>
							</TouchableOpacity>
						</View>
					</Animatable.View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
			</KeyboardAvoidingView>

		);
	}
	phone(){
		alert('Validado');
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
		color: '#F28705',
		marginLeft: 30,
		paddingLeft: 10,
		marginRight: 30,
		paddingRight: 10,
		marginBottom: 10,
		borderColor: '#F28705',
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
		backgroundColor: '#F28705',
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
		color: '#F28705',
		marginTop: 200,
		fontWeight: '700',
		textAlign: 'center',
	}
});