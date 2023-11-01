import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote50',
  exposes: {
    './Module': 'apps/remotes/remote50/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
