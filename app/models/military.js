import DS from 'ember-data';


export default DS.Model.extend({
    branch: DS.attr('string'),
    status: DS.attr('string'),
    member: DS.belongsTo('member')
});
