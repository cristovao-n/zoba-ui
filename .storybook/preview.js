import "../src/styles/reset.scss";
import "../src/components/alert/styles.scss";
import "../src/components/form-components/switch/styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
