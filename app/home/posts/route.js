import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  @service store;

  async model() {
    const posts = await this.store.findAll('post');
    return posts;
  }
}
