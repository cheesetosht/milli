import type { PropsWithChildren } from "react";
import { View, type ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";

type StackProps = PropsWithChildren<{
  direction?: "row" | "column";
  gap?: keyof typeof spacingMap;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  flex?: ViewStyle["flex"];
  padding?: keyof typeof spacingMap;
  style?: ViewStyle | ViewStyle[];
}>;

const spacingMap = {
  none: 0,
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  xl: 0,
  "2xl": 0,
  "3xl": 0,
  "4xl": 0,
} as const;

export const Stack = ({
  direction = "column",
  gap,
  align,
  justify,
  flex,
  padding,
  style,
  children,
}: StackProps) => {
  styles.useVariants({});
  return (
    <View
      style={[
        styles.base(direction, gap, align, justify, flex, padding),
        ...(Array.isArray(style) ? style : style ? [style] : []),
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create((theme) => ({
  base: (
    direction: StackProps["direction"],
    gap: StackProps["gap"],
    align: StackProps["align"],
    justify: StackProps["justify"],
    flex: StackProps["flex"],
    padding: StackProps["padding"],
  ) => ({
    flexDirection: direction,
    gap: gap ? theme.spacing[gap] : 0,
    alignItems: align,
    justifyContent: justify,
    flex,
    padding: padding ? theme.spacing[padding] : 0,
  }),
}));
