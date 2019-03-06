import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
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
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF"
  }
  // ,
  // {
  //   name: "Juice",
  //   color: "#e9bbd1",
  //   price: "64 CHF"
  // },
  // {
  //   name: "Mighty Juice",
  //   color: "#eba65c",
  //   price: "80 CHF"
  // },
  // {
  //   name: "Sandwich",
  //   color: "#95c3e4",
  //   price: "85 CHF"
  // },
  // {
  //   name: "Combi",
  //   color: "#1c1c1c",
  //   price: "145 CHF"
  // },
  // {
  //   name: "Signature",
  //   color: "#a390bc",
  //   price: "92 CHF"
  // },
  // {
  //   name: "Coffee",
  //   color: "#fef2a0",
  //   price: "47 CHF"
  // }
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
                    <View style={[styles.card, { backgroundColor: card.color }]}>
                        <Text style={styles.textBold}>Hola</Text>
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
        borderRadius: 10
      },
      textBold: {
        flex: 1,
        fontWeight: '500',
        color: '#fff',
      },
    });