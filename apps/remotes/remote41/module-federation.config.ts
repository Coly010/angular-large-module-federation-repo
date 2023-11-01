import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote41',
  exposes: {
    './Module': 'apps/remotes/remote41/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
