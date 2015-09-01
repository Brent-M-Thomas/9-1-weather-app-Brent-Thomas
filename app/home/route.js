import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    findLocation: function() {
      var _this = this;
      navigator.geolocation.getCurrentPosition(success, error);
      function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        _this.transitionTo('home.weather', latitude, longitude);
      }

      function error() {
        _this.locationUnknown();
      }
    },

    locationUnknown: function() {
      return alert('Sorry, you are in the void.  There is no weather in the void.' +
        'Either that or you just haven\'t turned on location in your browser');
    }
  }
});
