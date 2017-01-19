import Ember from 'ember';

export default Ember.Controller.extend({
  memberNumber: '',
  actions: {
    performSearch() {
      this.transitionToRoute('results', `${this.get('memberNumber')}`);
    }
  }
});
