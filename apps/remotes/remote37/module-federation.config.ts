import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote37',
  exposes: {
    './Module': 'apps/remotes/remote37/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
