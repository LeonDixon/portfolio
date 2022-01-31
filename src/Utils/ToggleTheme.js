import React from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  useColorMode,
} from "@chakra-ui/react";


const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <IconButton
        bg='transparent'
        fontSize={["4xl"]}
        _hover={{ transform: "scale(1.2)" }}
        onClick={toggleColorMode}
        icon={
          colorMode === "light" ? (
            <MoonIcon color="gruvbox.bgdark" />
          ) : (
            <SunIcon color="gruvbox.bglight" />
          )
        }
      />
  );
};

export default ToggleTheme;
