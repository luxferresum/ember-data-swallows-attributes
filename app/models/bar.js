import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  foos: DS.hasMany('foo'),

  totalFoos: computed('foos.@each.quantity', {
    get() {
      return this.foos
        .map(f => f.get('quantity'))
        .reduce((a,b) => a + b, 0);
    }
  }),
});
