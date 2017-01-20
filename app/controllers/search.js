import Ember from 'ember';

export default Ember.Controller.extend({
  memberNumber: '',
  firstName: '',
  lastName: '',
  dob: '',
  email: '',
  homePhone: '',
  actions: {
    performSearch() {
      if (this.memberNumber !== '') {
        this.transitionToRoute('profile', `${this.get('memberNumber')}`);
      } else {
        let dob = this.dob;
        if (dob!==''){
          dob = dob.replace(/\//g, "-");
        }
        let memInfo = `${this.firstName}*${this.lastName}*${this.email}*${dob}*${this.homePhone}`;
        this.transitionToRoute('results', memInfo);
      }
    }
  }
});
