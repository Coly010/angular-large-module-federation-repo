import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote59',
  exposes: {
    './Module': 'apps/remotes/remote59/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
