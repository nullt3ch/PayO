import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native';
import * as Animatable from 'react-native-animatable';

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
export class PayListScreen extends React.Component {
  
    static navigationOptions = nOptions
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={specificStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
                <SafeAreaView style={specificStyles.container}>
                <StatusBar barStyle="light-content"/>
                    <Animatable.View animation="fadeInUpBig" easing="ease-in-out-back" useNativeDriver={true} style={[specificStyles.textContainer, {paddingTop: 100}]}>
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                        />
                    </Animatable.View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            );
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