import React from "react";
import { createRoot } from "react-dom/client";
import { AppContainer } from "react-hot-loader";
import Counter from "./counter";

const container = document.getElementById("react-root");
const root = createRoot(container);

// root.render(
//   <AppContainer>
//     <Counter />
//   </AppContainer>
// );

const render = (Component) => {
  root.render(
    <AppContainer>
      <Component />
    </AppContainer>
  );
};

render(Counter);

if (module.hot) {
  module.hot.accept("./counter.js", () => {
    const NextRootContainer = require("./counter").default;
    render(NextRootContainer);
  });
}
