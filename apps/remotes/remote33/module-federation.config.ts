import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote33',
  exposes: {
    './Module': 'apps/remotes/remote33/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
