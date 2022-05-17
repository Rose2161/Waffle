import {eventsTest} from '@ethereum-waffle/chai/test';
import {OptimismProvider} from '../src/provider';

describe('Optimism: changeEtherBalance matcher', () => {
  const provider = new OptimismProvider();

  eventsTest(provider);
});
