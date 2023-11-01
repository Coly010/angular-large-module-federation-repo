import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote66',
  exposes: {
    './Module': 'apps/remotes/remote66/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
