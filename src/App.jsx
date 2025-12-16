import { FluidGlass } from "./components/FluidGlass";
import FluidGlassControls from "./components/FluidGlassControls";
import { SectionOne, SectionTwo } from "./components/Sections";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <FluidGlassControls />
      <SectionOne />
      <SectionTwo />

      {/* github */}
      <div className="fixed top-4 md:bottom-4 right-4 ">
        <FluidGlass
          padding="20px"
          borderRadius={99}
          tintColor="#ffffff35"
          blurAmount={1}
          displacementScale={-40}
          saturation={1.2}
          elasticity={8}
        >
          <span className="text-lg">
            <a href="https://github.com/hananpk" target="_blank">
              <FaGithub />
            </a>
          </span>
        </FluidGlass>
      </div>
    </>
  );
}

export default App;
