import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote99',
  exposes: {
    './Module': 'apps/remotes/remote99/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
