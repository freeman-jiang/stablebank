import { Box } from "native-base";
import { InterfaceBoxProps } from "native-base/lib/typescript/components/primitives/Box";
import React from "react";

interface Props extends InterfaceBoxProps {
  active?: boolean;
}

export const Dot = (props: Props) => {
  const { active, ...rest } = props;
  return (
    <Box
      bg={active ? "gray.800" : "gray.400"}
      boxSize={2}
      rounded="full"
      {...rest}
    />
  );
};
