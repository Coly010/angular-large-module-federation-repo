import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote75',
  exposes: {
    './Module': 'apps/remotes/remote75/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
