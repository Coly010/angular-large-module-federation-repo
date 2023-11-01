import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote80',
  exposes: {
    './Module': 'apps/remotes/remote80/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
