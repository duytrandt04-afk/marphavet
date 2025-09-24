import { ScrollView, Text, View, Animated, Platform } from "react-native";
import { useState, useRef } from "react";
import Header from "@/components/layout/Header";

export default function Home() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const lastScrollY = useRef(0);

  // Header height (adjust this to match your header height)
  const HEADER_HEIGHT = Platform.OS === 'ios' ? 88 : 72;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event: any) => {
        const currentScrollY = event.nativeEvent.contentOffset.y;
        const scrollDifference = currentScrollY - lastScrollY.current;
        
        // Only trigger animation if scroll difference is significant (reduces jitter)
        if (Math.abs(scrollDifference) > 5) {
          setIsScrollingDown(scrollDifference > 0 && currentScrollY > 50);
          lastScrollY.current = currentScrollY;
        }
      },
    }
  );

  // Animate header position
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  // Animate header opacity
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });

  return (
    <View className="flex-1 bg-white">
      {/* Animated Header */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transform: [{ translateY: headerTranslateY }],
          opacity: headerOpacity,
        }}
      >
        <Header title="Home" />
      </Animated.View>

      {/* Content with top padding to account for header */}
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: HEADER_HEIGHT, // Space for fixed header
          paddingHorizontal: 20,
          paddingBottom: 20,
          minHeight: '100%'
        }}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Smooth animation (60fps)
      >
        <Text className="text-base leading-6 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur at, illum animi quibusdam quos sed ad corrupti iure aliquid, pariatur provident similique quidem iusto accusamus explicabo consequuntur. Reprehenderit, omnis alias!
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </Text>
        
        <Text className="text-base leading-6 mb-4">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </Text>
      </ScrollView>
    </View>
  );
}