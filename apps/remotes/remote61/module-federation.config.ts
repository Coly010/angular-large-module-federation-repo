import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote61',
  exposes: {
    './Module': 'apps/remotes/remote61/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
