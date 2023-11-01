import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote35',
  exposes: {
    './Module': 'apps/remotes/remote35/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
