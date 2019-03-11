import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';

const pColor = '#F28705';
const placeHolderColor = '#fff';
const nOptions = {
	headerStyle: {
        title: 'Home',
		height: 30,
		borderBottomWidth: 0,
		backgroundColor: pColor,
	},
	headerTintColor: '#fff',
};
export class PaymentScreen extends React.Component {
    state = {
        spinner: true
    };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                spinner: false
            });
        }, 3000);
    }
    static navigationOptions = nOptions
    render() {
        const { navigation } = this.props;
    
    const qrcode = navigation.getParam('code', 'Hola');

    return (
   
        <KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
     
            <SafeAreaView style={specificStyles.container}>
             <StatusBar barStyle="light-content"/>
                <Animatable.View animation="fadeInUpBig" easing="ease-in-out-back" useNativeDriver={true} style={[specificStyles.textContainer, {paddingTop: 100}]}>
                {/* <Text style={[specificStyles.texts]}>qrcode: {qrcode}</Text> */}
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={specificStyles.spinnerTextStyle}
                />
                <Text style={[specificStyles.texts]}>Negocio</Text>
                    
                    <TextInput value="$30.00" placeholderTextColor={placeHolderColor}  onChangeText={userEmail=>this.setState({userEmail})} returnKeyType="next" style={[specificStyles.input]} onSubmitEditing={() => this.emailInput.focus()} keyboardType="phone-pad" autoCapitalize="none" autoCorrect={false} ref={(phone) => this.phoneInput = phone}/>
                    
                    <View style={specificStyles.buttonContainer}>
                         <TouchableOpacity style={[specificStyles.button]} onPress={this.goToReview}>
                            <Text style={specificStyles.buttonText}>PAGAR</Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        // style={styles.stretch}
                        source={require('../assets/tarjeta2.png')}
                      />
                </Animatable.View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
       );
	  }
      goToReview = () => {
          const { navigate } = this.props.navigation;
          navigate('CheckOut');
      }
    }

    const specificStyles = StyleSheet.create({
        spinnerTextStyle: {
            color: '#FFF'
          },
        container: {
            flex: 1,
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
            backgroundColor: '#fff',
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
        texts: {
			height: 40,
			fontSize: 30,
			color: '#000',
			marginLeft: 150,
			borderColor: '#fff',
			textAlignVertical: 'top',
			textShadowRadius: 2,
			textShadowColor: 'rgba(0, 0, 0, .3)',
			textShadowOffset: {width: 0, height: 1},
	        shadowOpacity: .4,
			shadowRadius: 3,
			shadowColor: 'rgba(0,0,0,.4)',
		},
    });