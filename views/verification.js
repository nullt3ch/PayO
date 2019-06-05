import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


const pColor = '#F28705';
const placeHolderColor = '#ccc';
const nOptions = {
	headerStyle: {
		height: 30,
		borderBottomWidth: 0,
		backgroundColor: pColor,
	},
	headerTintColor: '#fff',
};
export class VerScreen extends React.Component {
	static navigationOptions = nOptions
	
	state = {
		code: '',
	  };
	  pinInput = React.createRef();
	  
	  _checkCode = (code) => {
		const { navigate } = this.props.navigation;

		if (code == '1234') {
		 	this.pinInput.current.shake()
			.then(() => this.setState({ code: '' }));
			navigate('Menu');
		}
	  }
	
	  render() {
		const { code } = this.state;
		return (
			<KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		 
				<SafeAreaView style={specificStyles.container}>
				 <StatusBar barStyle="light-content"/>
					<Animatable.View animation="fadeInUpBig" easing="ease-in-out-back" useNativeDriver={true} style={[specificStyles.textContainer, {paddingTop: 100}]}>
						<View style={specificStyles.buttonContainer}>
							<Text style={[specificStyles.input]}>Pin de acceso</Text>
							<SmoothPinCodeInput
								ref={this.pinInput}
								value={code}
								onTextChange={code => this.setState({ code })}
								onFulfill={this._checkCode}
								onBackspace={() => console.log('No more back.')}
								/>
						</View>
					</Animatable.View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
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
			color: '#fff',
			marginLeft: 30,
			paddingLeft: 10,
			marginRight: 30,
			paddingRight: 10,
			marginBottom: 10,
			borderColor: '#fff',
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
			marginTop: 1,
			marginLeft: 100,
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