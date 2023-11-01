import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote17',
  exposes: {
    './Module': 'apps/remotes/remote17/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
