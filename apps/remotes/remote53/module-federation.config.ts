import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote53',
  exposes: {
    './Module': 'apps/remotes/remote53/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
