import type { PropsWithChildren } from "react";
import { View, type ViewProps, type ViewStyle } from "react-native";

type BoxProps = PropsWithChildren<
  ViewProps & {
    flex?: ViewStyle["flex"];
    padding?: ViewStyle["padding"];
    margin?: ViewStyle["margin"];
    backgroundColor?: ViewStyle["backgroundColor"];
    borderRadius?: ViewStyle["borderRadius"];
  }
>;

export const Box = ({
  flex,
  padding,
  margin,
  backgroundColor,
  borderRadius,
  style,
  children,
  ...rest
}: BoxProps) => (
  <View
    style={[{ flex, padding, margin, backgroundColor, borderRadius }, style]}
    {...rest}
  >
    {children}
  </View>
);
