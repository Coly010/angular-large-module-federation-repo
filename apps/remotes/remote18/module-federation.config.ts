import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote18',
  exposes: {
    './Module': 'apps/remotes/remote18/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
