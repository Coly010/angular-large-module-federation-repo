import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote20',
  exposes: {
    './Module': 'apps/remotes/remote20/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
