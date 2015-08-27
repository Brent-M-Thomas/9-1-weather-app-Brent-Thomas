import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params1, params2) {
    url:'https://api.forecast.io/forecast/5cfe7655eca22173ee295c21dbc3108a' + params1,params2

  }
});
