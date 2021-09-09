import React from "react";
import { Text, Box, Stack, Button} from "@chakra-ui/react";

export default function Content() {
  return (
    <Box background="#F5F6FA" display="block" marginRight="auto" marginLeft="auto">
    <Box
    px="30px"
    py="40px"
    >
      <Box
      as="h6"
      marginLeft="230px"

      ><Text 
      fontSize="2xl"
      fontWeight="bold"
      fontFamily="Helvetica"
      as="h3">
          Dashboard
        </Text>
        <Text
        pt="2px"
        fontFamily="Helvetica"
        fontSize="sm"
        color="#525252"
        >
        Sed ut perspiciatis unde omnis iste natus error sit
        </Text>
        <hr
        style={{height:"1px", border:"none", backgroundColor:"#333"}}
        />

        <Box as="div">
            <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  boxShadow="sm"
                  border="1px"
                  rounded="30px"
                  borderColor="gray.300"
                  mt="10px"
                  backgroundColor="#007FFF"
                  height="138px"
                  width="300px"
                  opacity="1"
                  cursor="pointer"
            >
            <Text
            pt="24px"
            pl="30px"
            color="white"
            fontSize="xx-small"
            fontFamily="Helvetica"
            >Total Available balance</Text>

            <Text
            pt="10px"
            pl="30px"
            color="white"
            fontSize="x-large"
            fontWeight="bold"
            fontFamily="Helvetica"
            pb="10px"
            >
            $25,958,485
            </Text>

            <Stack ml="30px" spacing={4} direction="row">
                <Button
                size="sm"
                rounded="-3px"
                variant="outline"
                fontFamily="Helvetica"
                pt="5px"
                width="108px"
                >
                    <Text
                     textAlign="center"
                    fontSize="xx-small"
                    >
                        Fund wallet
                    </Text>
                </Button>

                <Button
                size="sm"
                rounded="-3px"
                variant="outline"
                fontFamily="Helvetica"
                pt="5px"
                width="108px"
                >
                    <Text
                    textAlign="center"
                    fontSize="xx-small"
                    >
                        Fund wallet
                    </Text>
                </Button>
            </Stack>
            </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
