import DS from 'ember-data';

export default DS.Model.extend({
    memberNumber: DS.attr('sring'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    dob: DS.attr('string'),
    ssn: DS.attr('string'),
    email: DS.attr('string'),
    gender: DS.attr('string'),
    streetAddress: DS.attr('string'),
    state: DS.attr('string'),
    homePhone: DS.attr('string'),
    city: DS.attr('string'),
    country: DS.attr('string'),
    countryCode: DS.attr('string'),
    maritalStatus: DS.attr('string'),
    employer: DS.attr('string'),
    occupation: DS.attr('string'),
    military: DS.belongsTo('military'),
    identification: DS.hasMany('identification'),
    product:DS.hasMany('product')
});
