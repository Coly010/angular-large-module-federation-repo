import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote28',
  exposes: {
    './Module': 'apps/remotes/remote28/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
