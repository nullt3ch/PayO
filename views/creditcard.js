import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Animated,
  SafeAreaView,
  Dimensions,
  Button
} from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";

const cardHeight = 200;
const cardTitle = 45;
const cardPadding = 10;

const { height } = Dimensions.get("window");
const cards = [
  {
    name: "Visa",
    cardNumber: "4769",
    cardOwner: "HUGO OSWALDO O PANTOJA",
    expDate: "11/22",
    color: "#a9d0b6",
    price: "30 CHF",
    src: "tarjeta1.png",
  }
  ,
  {
    name: "Mastercard",
    cardNumber: "2386",
    cardOwner: "HUGO ORTIZ PANTOJA",
    expDate: "08/20",
    color: "#1c1c1c",
    price: "85 CHF",
    src: "tarjeta2.png",
  }
];
export default class TestScreen extends React.Component  {
    state = {
        y: new Animated.Value(0)
      };
    
      render() {
        const { y } = this.state;
        return (
            <SafeAreaView style={styles.root}>
            <Button
                style={styles.button}
                onPress={() =>  this.props.navigation.navigate('AddCCard')}
                title="Añadir Tarjetas"
                color="#fff"
                /> 
            <View style={styles.container}>
              <View style={StyleSheet.absoluteFill}>
                {cards.map((card, i) => {
                  const inputRange = [-cardHeight, 0];
                  const outputRange = [
                    cardHeight * i,
                    (cardHeight - cardTitle) * -i
                  ];
                  if (i > 0) {
                    inputRange.push(cardPadding * i);
                    outputRange.push((cardHeight - cardPadding) * -i);
                  }
                  const translateY = y.interpolate({
                    inputRange,
                    outputRange,
                    extrapolateRight: "clamp"
                  });
                  return (
                    <Animated.View
                      key={card.name}
                      style={{ transform: [{ translateY }] }}
                    >
                        
                      <View
                        style={[styles.card]}>
                         <Image
                          source={require('../assets/tarjeta1.png')}
                        />
                      
                    </View>
                    </Animated.View>
                  );
                })}
              </View>
              <Animated.ScrollView
                scrollEventThrottle={16}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: { y }
                      }
                    }
                  ],
                  { useNativeDriver: true }
                )}
              />
            </View>
          </SafeAreaView>
        );
      }
    }
    module.exports = TestScreen;
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        margin: 10
      },
      button: {
        paddingBottom: 100,
        fontWeight: '500',
      },
      container: {
        flex: 1
      },
      content: {
        height: height * 2
      },
      card: {
        height: cardHeight,
        borderRadius: 10,
        borderWidth: 0,
        borderColor: '#fff',
        textShadowRadius: 2,
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: {width: 0, height: 1},
      },
      nameText: {
        paddingTop: 15,
        paddingLeft: 15,
        flex: 1,
        fontWeight: '700',
        fontSize: 22,
        color: '#fff',
      },
      textBold: {
        paddingTop: 15,
        paddingLeft: 270,
        flex: 1,
        fontWeight: '700',
        fontSize: 21,
        color: '#fff',
      },
      expText: {
        paddingTop: 0,
        paddingLeft: 140,
        flex: 1,
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
      },
      ownerText: {
        paddingLeft: 15,
        paddingBottom: 15,
        fontWeight: '500',
        fontSize: 18,
        color: '#fff',
      },
    });