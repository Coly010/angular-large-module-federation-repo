import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote92',
  exposes: {
    './Module': 'apps/remotes/remote92/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
