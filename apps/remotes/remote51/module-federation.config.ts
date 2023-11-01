import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote51',
  exposes: {
    './Module': 'apps/remotes/remote51/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
