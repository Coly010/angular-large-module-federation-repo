import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote71',
  exposes: {
    './Module': 'apps/remotes/remote71/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
