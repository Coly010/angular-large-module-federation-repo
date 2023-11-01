import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote38',
  exposes: {
    './Module': 'apps/remotes/remote38/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
