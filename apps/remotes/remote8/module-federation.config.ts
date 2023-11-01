import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote8',
  exposes: {
    './Module': 'apps/remotes/remote8/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
