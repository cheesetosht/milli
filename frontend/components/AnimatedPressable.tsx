import { type ReactNode } from 'react';
import { Pressable, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const AnimatedPress = Animated.createAnimatedComponent(Pressable);

interface AnimatedPressableProps {
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  children: ReactNode;
  scaleDown?: number;
}

export default function AnimatedPressable({
  onPress,
  style,
  children,
  scaleDown = 0.97,
}: AnimatedPressableProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPress
      onPress={onPress}
      onPressIn={() => { scale.value = withSpring(scaleDown, { damping: 15, stiffness: 200 }); }}
      onPressOut={() => { scale.value = withSpring(1, { damping: 15, stiffness: 200 }); }}
      style={[style, animatedStyle]}
    >
      {children}
    </AnimatedPress>
  );
}
