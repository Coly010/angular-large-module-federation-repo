import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote65',
  exposes: {
    './Module': 'apps/remotes/remote65/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
