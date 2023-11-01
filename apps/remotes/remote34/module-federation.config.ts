import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote34',
  exposes: {
    './Module': 'apps/remotes/remote34/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
