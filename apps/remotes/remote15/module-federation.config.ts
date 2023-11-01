import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote15',
  exposes: {
    './Module': 'apps/remotes/remote15/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
