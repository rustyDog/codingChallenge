import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('search');
  this.route('results', { path: '/results/:search_data'});
  this.route('profile', { path: '/profile/:member_id'});
});

export default Router;
