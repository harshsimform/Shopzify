import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const TextTransition = (props: { text: string }) => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const textColor = useColorModeValue("teal.400", "teal.200");

  const textStyles = {
    fontSize: "24px",
    fontWeight: "bold",
    color: textColor,
  };
  return (
    <>
      <Box
        overflow="hidden"
        fontSize={25}
        fontWeight={600}
        color="teal.400"
        justifyContent="space-between"
        position="absolute"
        top={4}
        left={1}
        right={0}
        zIndex={2}
        pointerEvents="none"
        userSelect="none"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showText ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text style={textStyles}>{props.text}</Text>
        </motion.div>
      </Box>
    </>
  );
};

export default TextTransition;
