import { useState, useCallback } from "react";
import { Box, Text, VStack, HStack, Slider } from "@chakra-ui/react";
import { SketchPicker } from "react-color";
import LiquidGlassElement from "../components/LiquidGlassElement";
import { CodeSnippet } from "./CodeSnippet";

const FluidGlassControls = () => {
  const [controls, setControls] = useState({
    borderRadius: 35,
    elasticity: 8,
    saturation: 1.2,
    blurAmount: 1,
    displacementScale: -40,
    tintColor: "#ffffff35",
  });

  const rgbToString = ({ r, g, b, a = 1 }) => `rgba(${r}, ${g}, ${b}, ${a})`;

  const updateControl = useCallback((key, value) => {
    setControls((prev) =>
      prev[key] === value ? prev : { ...prev, [key]: value }
    );
  }, []);

  return (
    <>
      {/* LEFT CONTROLS */}
      <Box
        position="fixed"
        top={{ base: "80%", md: "50%" }}
        left={{ base: 0, md: "16px" }}
        transform="translateY(-50%)"
        w={{ base: "100%", md: "430px" }}
        bg="blackAlpha.400"
        backdropFilter="blur(20px)"
        p={{ base: 4, md: 8 }}
        borderRadius="2xl"
        zIndex={10}
      >
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
          {/* Border Radius */}
          <div>
            <HStack justify="space-between" mb={2}>
              <Text color="white">Border Radius</Text>
              <Text color="whiteAlpha.700">{controls.borderRadius}</Text>
            </HStack>

            <Slider.Root
              value={[controls.borderRadius]}
              min={0}
              max={100}
              onValueChange={(e) => updateControl("borderRadius", e.value[0])}
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
              </Slider.Control>
            </Slider.Root>
          </div>

          {/* Elasticity */}
          <div>
            <HStack justify="space-between" mb={2}>
              <Text color="white">Elasticity</Text>
              <Text color="whiteAlpha.700">{controls.elasticity}</Text>
            </HStack>

            <Slider.Root
              value={[controls.elasticity]}
              min={0}
              max={12}
              onValueChange={(e) => updateControl("elasticity", e.value[0])}
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
              </Slider.Control>
            </Slider.Root>
          </div>

          {/* Saturation */}
          <div>
            <HStack justify="space-between" mb={2}>
              <Text color="white">Saturation</Text>
              <Text color="whiteAlpha.700">
                {controls.saturation.toFixed(1)}
              </Text>
            </HStack>

            <Slider.Root
              value={[controls.saturation]}
              min={0}
              max={2}
              step={0.1}
              onValueChange={(e) => updateControl("saturation", e.value[0])}
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
              </Slider.Control>
            </Slider.Root>
          </div>

          {/* Blur Amount */}
          <div>
            <HStack justify="space-between" mb={2}>
              <Text color="white">Blur Amount</Text>
              <Text color="whiteAlpha.700">{controls.blurAmount}</Text>
            </HStack>

            <Slider.Root
              value={[controls.blurAmount]}
              min={0}
              max={400}
              onValueChange={(e) => updateControl("blurAmount", e.value[0])}
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
              </Slider.Control>
            </Slider.Root>
          </div>

          {/* Displacement Scale */}
          <div>
            <HStack justify="space-between" mb={2}>
              <Text color="white">Displacement Scale</Text>
              <Text color="whiteAlpha.700">{controls.displacementScale}</Text>
            </HStack>

            <Slider.Root
              value={[controls.displacementScale]}
              min={-100}
              max={100}
              onValueChange={(e) =>
                updateControl("displacementScale", e.value[0])
              }
            >
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumb />
              </Slider.Control>
            </Slider.Root>
          </div>

          {/* Tint Color */}
          <div className="flex items-start justify-between w-full">
            <HStack justify="space-between" mb={2}>
              <Text color="white">Tint Color</Text>
            </HStack>

            <SketchPicker
              color={controls.tintColor}
              presetColors={[]}
              onChangeComplete={(c) =>
                setControls((p) => ({
                  ...p,
                  tintColor: rgbToString(c.rgb),
                }))
              }
            />
          </div>
        </div>
      </Box>

      {/* PREVIEW */}
      <LiquidGlassElement controls={controls} />

      {/* CODE */}
      <CodeSnippet controls={controls} />
    </>
  );
};

export default FluidGlassControls;
