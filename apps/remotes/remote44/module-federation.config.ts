import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote44',
  exposes: {
    './Module': 'apps/remotes/remote44/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
