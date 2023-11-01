import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote74',
  exposes: {
    './Module': 'apps/remotes/remote74/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
