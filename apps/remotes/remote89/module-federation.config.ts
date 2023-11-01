import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote89',
  exposes: {
    './Module': 'apps/remotes/remote89/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
