import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote32',
  exposes: {
    './Module': 'apps/remotes/remote32/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
