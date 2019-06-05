import React, { Component } from "react";
import { View, SafeAreaView, StyleSheet, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
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
const s = StyleSheet.create({
  container: {
    backgroundColor: "#F28705",
    marginTop: 0,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

const USE_LITE_CREDIT_CARD_INPUT = false;

export class AddCCardScreen extends Component {
  static navigationOptions = nOptions

  _onChange = formData => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, " "));
    // alert(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
		 
				<SafeAreaView style={specificStyles.container}>
				 <StatusBar barStyle="light-content"/>
					<Animatable.View animation="fadeInUpBig" easing="ease-in-out-back" useNativeDriver={true} style={[specificStyles.textContainer, {paddingTop: 100}]}>
					  <View style={s.container}>
              <CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

                onFocus={this._onFocus}
                onChange={this._onChange} />
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