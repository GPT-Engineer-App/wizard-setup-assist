import React, { useState } from "react";
import { Box, Container, Heading, Text, FormLabel, Button, CheckboxGroup, Checkbox, VStack, HStack, Tooltip, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Textarea, SimpleGrid } from "@chakra-ui/react";
import { FaStethoscope } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Index = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedDataMethod, setSelectedDataMethod] = useState(null);
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
            <SimpleGrid columns={3} spacing={5}>
              {["healthtech", "banking", "retail"].map((domain) => (
                <Box key={domain} borderWidth="1px" borderRadius="md" p={5} boxShadow="md" bg={selectedDomain === domain ? "blue.100" : "white"} onClick={() => setSelectedDomain(domain)} cursor="pointer">
                  <Text textAlign="center">{domain.charAt(0).toUpperCase() + domain.slice(1)}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* Step 2: Defining the Primary Task */}
          <Box>
            <FormLabel htmlFor="task">Step 2: Defining the Primary Task</FormLabel>
            <Textarea id="task" placeholder="Type your task in natural language or select from common tasks" />
          </Box>

          {/* Step 3: Data Specification */}
          <Box>
            <FormLabel htmlFor="data">Step 3: Data Specification</FormLabel>
            <SimpleGrid columns={3} spacing={5}>
              {["upload", "connect", "synthetic"].map((method) => (
                <Box key={method} borderWidth="1px" borderRadius="md" p={5} boxShadow="md" bg={selectedDataMethod === method ? "green.100" : "white"} onClick={() => setSelectedDataMethod(method)} cursor="pointer">
                  <Text textAlign="center">{method.charAt(0).toUpperCase() + method.slice(1)} Dataset</Text>
                </Box>
              ))}
            </SimpleGrid>
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
