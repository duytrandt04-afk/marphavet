import Header from "@/components/layout/Header";
import { useRef } from "react";
import { Animated, Platform, Text, View } from "react-native";

const HEADER_HEIGHT = Platform.OS === "ios" ? 54 : 40;

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);
  const headerTranslateY = useRef(new Animated.Value(0)).current;
  const headerTranslateYValue = useRef(0);
  const snapScrollYStart = useRef(0); 

  scrollY.addListener(({ value }) => {
    if (value <= 0) {
      headerTranslateY.setValue(0);
      headerTranslateYValue.current = 0;
      lastScrollY.current = value;
      return;
    }
    
    const scrollDelta = value - lastScrollY.current;

    let newTranslateY = headerTranslateYValue.current - scrollDelta;
    
    if (newTranslateY < -HEADER_HEIGHT) {
      newTranslateY = -HEADER_HEIGHT;
    } else if (newTranslateY > 0) {
      newTranslateY = 0;
    }

    headerTranslateY.setValue(newTranslateY);
    headerTranslateYValue.current = newTranslateY;
    lastScrollY.current = value;
  });

  const handleScrollBeginDrag = (e: any) => {
    snapScrollYStart.current = e.nativeEvent.contentOffset.y;
  };
  
  const handleScrollEnd = (e: any) => {
    const currentTranslateY = headerTranslateYValue.current;
    const scrollYEnd = e.nativeEvent.contentOffset.y;
    const scrollDelta = scrollYEnd - snapScrollYStart.current;

    let toValue;
    if (scrollDelta > 0) {
      toValue = -HEADER_HEIGHT; 
    } else {
      toValue = 0; 
    }
    
    if (currentTranslateY !== toValue) {
      Animated.timing(headerTranslateY, {
        toValue: toValue,
        duration: 250,
        useNativeDriver: false,
      }).start(() => {
        headerTranslateYValue.current = toValue;
      });
    }
  };
  
  const headerHeight = headerTranslateY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0],
    outputRange: [0, HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const titleOpacity = headerTranslateY.interpolate({
    inputRange: [-HEADER_HEIGHT / 1.5, 0],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const titleTranslateY = headerTranslateY.interpolate({
    inputRange: [-HEADER_HEIGHT, 0],
    outputRange: [-20, 0],
    extrapolate: "clamp",
  });

  return (
    <View className="flex-1 bg-white">
      <Header
        headerHeight={headerHeight}
        titleOpacity={titleOpacity}
        titleTranslateY={titleTranslateY}
      />

      <Animated.ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT + 10,
          paddingHorizontal: 20,
          paddingBottom: 5,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        
        onScrollBeginDrag={handleScrollBeginDrag} 
        onScrollEndDrag={handleScrollEnd}
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
      >
        {Array.from({ length: 100 }).map((_, idx) => (
          <Text key={idx} className="text-base leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dignissim ipsum in quam facilisis, vitae tincidunt purus bibendum.
          </Text>
        ))}
      </Animated.ScrollView>
    </View>
  );
}