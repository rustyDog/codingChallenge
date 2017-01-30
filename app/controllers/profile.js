import Ember from 'ember';


export default Ember.Controller.extend({
  editBasic: false,
  editMilitary: false,
  editContact: false,
  editId: false,
  editProducts: false,
  firstName: '',
  lastName: '',
  dob: '',
  ssn: '',
  email: '',
  gender: '',
  streetAddress: '',
  state: '',
  homePhone: '',
  city: '',
  country: '',
  countryCode: '',
  maritalStatus: '',
  employer: '',
  occupation: '',
  military: '',
  identification: '',
  product:'',
  actions: {
        toggleEditBasic() {
          /*if (this.editBasic === true) {
            this.get('model').rollbackAttribute();
          }*/
          Ember.$.each(this.get('model'), function(a, b){
            console.log(a + " - " + b);
          });
          this.toggleProperty('editBasic');
        },
        saveMember() {
          Ember.$.post("http://localhost:8080/saveMember", this.get('model'), function(data){
            alert("success");
          }, "jsonp").fail(function(data){
            console.log("************ FAIL **************");
            Ember.$.each(data, function(k, v){
              console.log(k + " - " + v);
            });
            console.log("\n\n\nresponseJSON:")
            Ember.$.each(data.responseJSON, function(k, v){
              console.log(k + " - " + v);
            });
            console.log("************ END FAIL ************");
          });
          this.toggleProperty('editBasic');
        }
  }
});
