import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'products',
  exposes: {
    './Module': 'products/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
