import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote47',
  exposes: {
    './Module': 'apps/remotes/remote47/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
