import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote87',
  exposes: {
    './Module': 'apps/remotes/remote87/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
