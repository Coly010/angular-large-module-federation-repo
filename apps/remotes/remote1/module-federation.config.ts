import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Module': 'apps/remotes/remote1/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
