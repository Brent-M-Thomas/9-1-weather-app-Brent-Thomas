import Ember from 'ember';

export function currentDate(params/*, hash*/) {
  return moment().format(params['dddd MMM Do']);
}

export default Ember.Helper.helper(currentDate);
