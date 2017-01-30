import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return Ember.$.get("http://localhost:8080/members/"+params.member_id);
    }
});
