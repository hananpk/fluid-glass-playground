import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FluidGlass } from "./FluidGlass";

const LiquidGlassElement = ({ controls }) => {
  return (
    <div className="fixed top-[250px] md:top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
      <div className="mb-4">
        <FluidGlass
          padding="20px 40px"
          borderRadius={controls?.borderRadius}
          tintColor={controls?.tintColor}
          blurAmount={controls?.blurAmount}
          displacementScale={controls?.displacementScale}
          saturation={controls.saturation}
          elasticity={controls?.elasticity}
        >
          <div className="md:w-[400px] w-[300px]">
            <h3 className="text-3xl font-bold">Hello World</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              incidunt pariatur similique obcaecati consectetur, veniam
              accusamus praesentium debitis quos neque asperiores reiciendis rem
              consequuntur, reprehenderit aspernatur repellendus voluptates
              ipsam adipisci?
            </p>
          </div>
        </FluidGlass>
      </div>
      <div className="flex gap-4">
        <FluidGlass
          padding="20px"
          borderRadius={controls?.borderRadius}
          tintColor={controls?.tintColor}
          blurAmount={controls?.blurAmount}
          displacementScale={controls?.displacementScale}
          saturation={controls.saturation}
          elasticity={controls?.elasticity}
        >
          <FaPhoneAlt />
        </FluidGlass>
        <FluidGlass
          padding="20px"
          borderRadius={controls?.borderRadius}
          tintColor={controls?.tintColor}
          blurAmount={controls?.blurAmount}
          displacementScale={controls?.displacementScale}
          saturation={controls.saturation}
          elasticity={controls?.elasticity}
        >
          <HiOutlineMail />
        </FluidGlass>
      </div>
    </div>
  );
};

export default LiquidGlassElement;
