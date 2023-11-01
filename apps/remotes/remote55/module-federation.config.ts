import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote55',
  exposes: {
    './Module': 'apps/remotes/remote55/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
