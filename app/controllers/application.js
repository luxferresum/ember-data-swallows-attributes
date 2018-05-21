import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createNew() {
      this.store.createRecord('foo', { bar: this.model, quantity: 3 });
      this.model.foos.toArray().forEach(f => f.set('quantity', 5));
    },
    saveAll() {
      this.model.foos.toArray().forEach(f => f.save());
    }
  },
});
