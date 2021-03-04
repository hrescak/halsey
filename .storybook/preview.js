
import { addDecorator } from '@storybook/react';
import Layout from './lib/Layout';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);