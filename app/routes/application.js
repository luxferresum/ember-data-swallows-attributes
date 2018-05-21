import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({data: { type: 'bar', id: '1' }});
    const bar = this.store.peekRecord('bar', '1');

    return bar;
  }
});
