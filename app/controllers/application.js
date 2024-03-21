import Controller from '@ember/controller';

import { headlessTable } from 'ember-headless-table';

export default class extends Controller {
  table = headlessTable(this, {
    columns: () => [
      { name: 'column A', key: 'A' },
      { name: 'column B', key: 'B' },
      { name: 'column C', key: 'C' },
    ],
    data: () => [
      {
        A: 'Apple',
        B: 'Berry',
        C: 'Cranberry',
      },
      {
        A: 'Avocado',
        B: 'Plantain',
        C: 'Cucumber',
      },
      {
        A: 'A Squash',
        B: 'Banana',
        C: 'Corn',
      },
    ],
  });
}