import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote11',
  exposes: {
    './Module': 'apps/remotes/remote11/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
