import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Auth0Lock from 'auth0-lock';

export default class LoginRoute extends Route {
  @service router;
  @service session;

  beforeModel() {
    const { isUserLoggedIn } = this.session;
    if (isUserLoggedIn) {
      this.router.transitionTo('home');
      return;
    }
  }
}
