import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote68',
  exposes: {
    './Module': 'apps/remotes/remote68/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
