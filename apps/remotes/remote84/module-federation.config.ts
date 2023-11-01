import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote84',
  exposes: {
    './Module': 'apps/remotes/remote84/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
