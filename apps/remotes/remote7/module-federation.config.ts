import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote7',
  exposes: {
    './Module': 'apps/remotes/remote7/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
