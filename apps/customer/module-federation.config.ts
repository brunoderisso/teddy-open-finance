import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'customer',
  exposes: {
    './Routes': 'apps/customer/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
