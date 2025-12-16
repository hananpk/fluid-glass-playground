import {
  CodeBlock,
  Icon,
  createShikiAdapter,
  Float,
  IconButton,
  Span,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";

export const CodeSnippet = ({ controls }) => {
  const file = {
    code: `
import { FluidGlass } from "fluid-glass-react";

  <FluidGlass
    borderRadius={${controls.borderRadius}}
    tintColor="${controls.tintColor}"
    blurAmount={${controls.blurAmount}}
    displacementScale={${controls.displacementScale}}
    saturation={${controls.saturation}}
    elasticity={${controls.elasticity}}
  >
    <h1 className="text-5xl">Hello World</h1>
  </FluidGlass>
`,
    language: "js",
    title: "App.js",
  };

  const installFile = {
    code: "npm install fluid-glass-react",
    language: "bash",
    title: "npm install fluid-glass-react",
  };
  return (
    <div className="fixed right-4 top-10 hidden md:block">
      <CodeBlock.Root
        code={installFile.code}
        language={installFile.language}
        display="inline-flex"
        className="border border-white/15 mb-4 w-full"
        size="lg"
      >
        <CodeBlock.Content className="w-full">
          <Float placement="middle-end" offsetX="6" zIndex="1">
            <CodeBlock.CopyTrigger asChild>
              <IconButton variant="ghost" size="2xs">
                <CodeBlock.CopyIndicator />
              </IconButton>
            </CodeBlock.CopyTrigger>
          </Float>
          <CodeBlock.Code pe="10">
            <Span color="fg.muted" ms="4" userSelect="none">
              $
            </Span>
            <CodeBlock.CodeText display="inline-block" />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
      <CodeBlock.AdapterProvider value={shikiAdapter}>
        <CodeBlock.Root
          code={file.code}
          language={file.language}
          className="border border-white/15 mb-4 w-full"
          size="lg"
        >
          <CodeBlock.Header>
            <CodeBlock.Title>
              <Icon as={FaReact} color="blue.300" />
              {file.title}
            </CodeBlock.Title>
          </CodeBlock.Header>
          <CodeBlock.Content>
            <CodeBlock.Code>
              <CodeBlock.CodeText />
            </CodeBlock.Code>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </CodeBlock.AdapterProvider>
    </div>
  );
};

const shikiAdapter = createShikiAdapter({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json"],
      themes: ["github-dark"],
    });
  },
  theme: "github-dark",
});
