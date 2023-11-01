import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote48',
  exposes: {
    './Module': 'apps/remotes/remote48/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
