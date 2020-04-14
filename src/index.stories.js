import React from "react";
import { Button } from "./Button";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
  parameters: {
    info: {
      inline: true,
      text: `
    description or documentation about my component, supports markdown
 
    ~~~js
    <Button>Click Here</Button>
    ~~~`,
    },
  },
};

export const withAButton = () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "Hello Storybook")}
  </button>
);
export const withText = () => (
  <Button backgroundColor={text("backgroundColor", "peru")}>
    {" "}
    Hello World
  </Button>
);

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
