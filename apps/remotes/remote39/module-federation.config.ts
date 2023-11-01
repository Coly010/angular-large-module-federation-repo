import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote39',
  exposes: {
    './Module': 'apps/remotes/remote39/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
