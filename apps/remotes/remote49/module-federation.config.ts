import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote49',
  exposes: {
    './Module': 'apps/remotes/remote49/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
