import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,DS.NoKeyMixin,{
  primaryKey: 'memberNumber',
  attrs: {
    military: {
      embedded: 'always',
      noKey: true
    }
  }
});
