import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('http://proxy-server-bmt.herokuapp.com/' + params.lat + ',' + params.long);
  },


});
