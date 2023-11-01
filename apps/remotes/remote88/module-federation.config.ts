import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote88',
  exposes: {
    './Module': 'apps/remotes/remote88/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
