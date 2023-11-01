import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote90',
  exposes: {
    './Module': 'apps/remotes/remote90/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
