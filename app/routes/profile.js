import Ember from 'ember';

export default Ember.Route.extend({
    editBasic: false,
    editMilitary: false,
    editContact: false,
    editId: false,
    editProducts: false,
    model(params) {
        return Ember.$.get("http://localhost:8080/members/"+params.member_id);
    }
});
