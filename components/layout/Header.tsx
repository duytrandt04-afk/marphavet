import { Animated, StyleSheet } from "react-native";
import React from "react";

type Props = {
  headerHeight: Animated.AnimatedInterpolation<number>;
  logoOpacity: Animated.AnimatedInterpolation<number>;
  logoTranslateY: Animated.AnimatedInterpolation<number>;
};

const Header = ({ headerHeight, logoOpacity, logoTranslateY }: Props) => {
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: headerHeight,
        },
      ]}
    >
      <Animated.Image
        source={require('@/assets/images/logo.png')}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ translateY: logoTranslateY }],
          },
        ]}
      />
      
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
});
