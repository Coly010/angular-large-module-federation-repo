import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote78',
  exposes: {
    './Module': 'apps/remotes/remote78/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
