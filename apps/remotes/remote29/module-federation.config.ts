import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote29',
  exposes: {
    './Module': 'apps/remotes/remote29/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
