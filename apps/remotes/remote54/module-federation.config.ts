import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote54',
  exposes: {
    './Module': 'apps/remotes/remote54/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
