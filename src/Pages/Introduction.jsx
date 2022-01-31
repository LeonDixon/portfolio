import React from "react";
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import "@fontsource/fira-mono";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Introduction = () => {
  const jobColour = useColorModeValue("gruvbox.orange", "gruvbox.yellowdark");

  return (
    <Box className="Introduction" h="100vh">
      <Box position="relative" h="100%" w="100%">
        <MotionVStack
          position="absolute"
          // margin='0 auto'
          // display='inline'
          left='0'
          top='40%'
        >
          <Box>
            <MotionBox
              opacity="0"
              initial={{y: '-20px'}}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
              <Text fontFamily="Fira Mono">
                Hi, my name is
              </Text>
            </MotionBox>
            <MotionBox
              opacity="0"
              initial={{y: '-15px'}}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.15, duration: 1 },
              }}
            >
              <Heading as="h1" size="h1">
                <Box as="span" color="#456588">
                  &lt;
                </Box>
                Leon Dixon
                <Box as="span" color="#456588">
                  /&gt;
                </Box>
              </Heading>
            </MotionBox>
            <MotionBox opacity='0' initial={{y: '10px'}} animate={{ opacity: 1 ,y: 0, transition: { delay: 0.3, duration: 1 } }}>
              <Heading as="h2" color={jobColour} size="h2">
                Full Stack Developer
              </Heading>
            </MotionBox>
            <MotionBox w={['100%%', '100%', '60%']} opacity='0' initial={{y: '15px'}} animate={{ opacity: 1 ,y: 0, transition: { delay: 0.45, duration: 1 } }}>
              <Text>
                I'm am currently working at Bet365 in the System Sports Team, I am focused on improving the customers experience and product functionality.
              </Text>
            </MotionBox>
          </Box>
        </MotionVStack>
      </Box>
    </Box>
  );
};

export default Introduction;
