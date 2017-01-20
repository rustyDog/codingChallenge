import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
      let searchCriteria = params.search_data.split("*");
      let firstName = searchCriteria[0];
      let lastName = searchCriteria[1];
      let email = searchCriteria[2];
      let dob = searchCriteria[3];
      let homePhone = searchCriteria[4];
      return Ember.$.get(
      `http://localhost:8080/searchForMember/firstName=${firstName}/lastName=${lastName}/email=${email}/dob=${dob}/homePhone=${homePhone}`);
    }
});
