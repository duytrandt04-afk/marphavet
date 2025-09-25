import { Animated, StyleSheet } from "react-native";
import React from "react";

type Props = {
  headerHeight: Animated.AnimatedInterpolation<number>;
  titleOpacity: Animated.AnimatedInterpolation<number>;
  titleTranslateY: Animated.AnimatedInterpolation<number>;
};

const Header = ({ headerHeight, titleOpacity, titleTranslateY }: Props) => {
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: headerHeight,
        },
      ]}
    >
      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleOpacity,
            transform: [{ translateY: titleTranslateY }],
          },
        ]}
      >
        Home
      </Animated.Text>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
