import React from "react";
import { motion } from "framer-motion";
import { Box, Heading, useStyleConfig } from "@chakra-ui/react";

const MotionBox = motion(Box);

function Card(props) {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("Card", { variant });

  return <Box sx={styles} {...rest} />;
}

const BoxCard = ({header, Contents}) => {
  return (
  <MotionBox
      initial={{ opacity: 0, y: "100" }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
      viewport={{ once: true }}
    >
      <Card variant="default">
        <Box pb="3">
          <MotionBox
            initial={{ opacity: 0, y: "-100" }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.75, duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <Heading as="h2" size="h2" variant="cardTitle">
              { header }
            </Heading>
          </MotionBox>
        </Box>
        <MotionBox
          initial={{ opacity: 0, y: "100" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.7 },
          }}
          viewport={{ once: true }}
        >
          <Card variant="innerText">
            <Contents />
          </Card>
        </MotionBox>
      </Card>
    </MotionBox>
  )
};

export default BoxCard;
