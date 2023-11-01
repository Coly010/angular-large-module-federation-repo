import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote82',
  exposes: {
    './Module': 'apps/remotes/remote82/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
