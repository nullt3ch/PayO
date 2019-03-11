import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Spinner from 'react-native-loading-spinner-overlay';

const pColor = '#F28705';
const placeHolderColor = '#fff';
const nOptions = {
	headerLeft:null,
	headerStyle: {
        title: 'Home',
		height: 30,
		borderBottomWidth: 0,
		backgroundColor: pColor,
	},
	headerTintColor: '#fff',
};
export class CheckOutScreen extends React.Component {
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
                    textContent={'Procesando Pago...'}
                    textStyle={specificStyles.spinnerTextStyle}
                />
                    <View style={{flexDirection: 'row'}}>
                        <Text style={specificStyles.texts}>Nombre:</Text>
                        <Text style={specificStyles.textAmount}>Negocio</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={specificStyles.texts}>Cuenta:</Text>
                        <Text style={specificStyles.textAmount}>$23,70</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={specificStyles.texts}>IVA:</Text>
                        <Text style={specificStyles.textAmount}>$7,30</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={specificStyles.texts}>Total:</Text>
                        <Text style={specificStyles.textAmount}>$30,00</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={specificStyles.texts}>Tarjeta:</Text>
                        <Text style={specificStyles.textAmount}>2386</Text>
                    </View>
                    <View style={specificStyles.buttonContainer}>
                         <TouchableOpacity style={[specificStyles.button]} onPress={this.goToReview}>
                            <Text style={specificStyles.buttonText}>ACEPTAR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={specificStyles.buttonContainer}>
                         <TouchableOpacity style={[specificStyles.button]} onPress={this.factura}>
                            <Text style={specificStyles.buttonText}>FACTURA</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
       );
	  }
        goToReview = () => {
          const { navigate } = this.props.navigation;
          navigate('Menu');
        }
        factura = () => {
            alert('Factura');
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
			fontSize: 21,
			color: '#000',
			marginLeft: 100,
			borderColor: '#fff',
			textAlignVertical: 'top',
			textShadowRadius: 2,
			textShadowColor: 'rgba(0, 0, 0, .3)',
			textShadowOffset: {width: 0, height: 1},
	        shadowOpacity: .4,
			shadowRadius: 3,
			shadowColor: 'rgba(0,0,0,.4)',
        },
        textAmount: {
			height: 40,
			fontSize: 21,
			color: '#fff',
			marginLeft: 30,
			textAlign: 'justify',
			borderColor: '#fff',
			textShadowRadius: 2,
			textShadowColor: 'rgba(0, 0, 0, .3)',
			textShadowOffset: {width: 0, height: 1},
	        shadowOpacity: .4,
			shadowRadius: 3,
			shadowColor: 'rgba(0,0,0,.4)',
		},
    });