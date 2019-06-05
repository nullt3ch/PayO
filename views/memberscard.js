import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  SafeAreaView,
  Dimensions,
  Button
} from "react-native";

const cardHeight = 200;
const cardTitle = 45;
const cardPadding = 10;

const { height } = Dimensions.get("window");
const cards = [
  {
    name: "Club",
    cardNumber: "0021",
    color: "#1c1c1c",
    price: "30 CHF"
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
                onPress={() => alert('This is a button!')}
                title="Añadir Membresias"
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
                      		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                          <View style={[styles.card]}>
                      <Image
                        // style={styles.stretch}
                        source={require('../assets/tarjeta2.png')}
                      />
                      {/* <Text style={styles.nameText}>{card.name}</Text>
                      <Text style={styles.textBold}>{card.cardNumber}</Text> */}
                    </View>
                          </TouchableWithoutFeedback>
                 
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
        fontSize: 20,
        color: '#fff',
      },
      textBold: {
        paddingTop: 0,
        paddingLeft: 270,
        flex: 1,
        fontWeight: '700',
        fontSize: 21,
        color: '#fff',
      }
    });