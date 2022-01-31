import { ReactYanOverrideProvider } from "../src/context/OverrideContext";
import GlobalReset from "../src/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => {
    return (
      <>
        <ReactYanOverrideProvider overrides={{'fontFamily': 'serif'}}>
          <GlobalReset />
          <div className="storybook-wrapper">
            <Story />
          </div>
        </ReactYanOverrideProvider>
      </>
    );
  },
];

