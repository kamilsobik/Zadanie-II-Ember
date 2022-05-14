import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class RegisterRoute extends Route {
  @service store;
  @storageFor('logged-as') loggedAs;
  @service router;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.transitionTo('home');
      return;
    }
  }

  model() {
    return this.store.createRecord('user');
  }
}
