import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  currently: DS.attr(),
  hourly: DS.attr(),
  daily: DS.attr(),

});
