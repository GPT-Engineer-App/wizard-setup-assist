import React from "react";
import { Box, Container, Heading, Select, Text, FormLabel, Input, Button, CheckboxGroup, Checkbox, VStack, HStack, Tooltip, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Textarea } from "@chakra-ui/react";
import { FaStethoscope } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box boxShadow="md" p={5} mt={5} borderRadius="md" bg="white">
        <Heading as="h1" size="xl" textAlign="center" mb={5}>
          AI Project Setup Wizard
        </Heading>
        <VStack spacing={5} align="stretch">
          {/* Step 1: Selecting the Domain */}
          <Box>
            <FormLabel htmlFor="domain">Step 1: Selecting the Domain</FormLabel>
            <Select id="domain" placeholder="Select domain">
              <option value="healthtech">Healthtech</option>
              <option value="banking">Banking</option>
              <option value="retail">Retail</option>
              {/* More options can be added here */}
            </Select>
          </Box>

          {/* Step 2: Defining the Primary Task */}
          <Box>
            <FormLabel htmlFor="task">Step 2: Defining the Primary Task</FormLabel>
            <Textarea id="task" placeholder="Type your task in natural language or select from common tasks" />
          </Box>

          {/* Step 3: Data Specification */}
          <Box>
            <FormLabel htmlFor="data">Step 3: Data Specification</FormLabel>
            <Select id="data" placeholder="Select data input method">
              <option value="upload">Upload Dataset</option>
              <option value="connect">Connect to Data Source</option>
              <option value="synthetic">Use Synthetic Data</option>
            </Select>
            {/* Additional form fields for connection details would be conditionally rendered based on the selection */}
          </Box>

          {/* Step 4: Compliance and Privacy */}
          <Box>
            <FormLabel>Step 4: Compliance and Privacy</FormLabel>
            <CheckboxGroup colorScheme="green">
              <HStack>
                <Checkbox value="hipaa">HIPAA</Checkbox>
                <Checkbox value="gdpr">GDPR</Checkbox>
                {/* More checkboxes for other compliances */}
              </HStack>
            </CheckboxGroup>
          </Box>

          {/* Step 5: Model Preferences */}
          <Box>
            <FormLabel>Step 5: Model Preferences</FormLabel>
            <VStack align="stretch">
              <HStack>
                <Text>Accuracy</Text>
                <Tooltip label="High accuracy models may be slower" hasArrow placement="top">
                  <IconButton aria-label="info" icon={<FaInfoCircle />} size="xs" />
                </Tooltip>
              </HStack>
              <Slider aria-label="slider-ex-1" defaultValue={50}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="tomato" as={FaStethoscope} />
                </SliderThumb>
              </Slider>
              {/* Additional sliders for other preferences */}
            </VStack>
          </Box>

          {/* Submit Button */}
          <Button colorScheme="blue" size="lg">
            Complete Setup
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
