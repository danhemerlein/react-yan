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

const reactYanOverrides = {
  fontFamily: 'serif',
  headlineOneFontSize: '60px'
}

export const decorators = [
  (Story) => {
    return (
      <>
        <ReactYanOverrideProvider value={reactYanOverrides}>
          <GlobalReset />
          <div className="storybook-wrapper">
            <Story />
          </div>
        </ReactYanOverrideProvider>
      </>
    );
  },
];

