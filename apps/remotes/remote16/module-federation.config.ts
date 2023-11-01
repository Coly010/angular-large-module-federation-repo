import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote16',
  exposes: {
    './Module': 'apps/remotes/remote16/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
