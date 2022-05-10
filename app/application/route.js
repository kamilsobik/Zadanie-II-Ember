import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel() {
    const user1 = this.store.createRecord('user', {
      id: 1,
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      isAdmin: true,
    });
    const user2 = this.store.createRecord('user', {
      id: 2,
      username: 'user',
      password: 'user123',
      email: 'user@user.com',
    });
    user1.save();
    user2.save();

    const post1 = this.store.createRecord('post', {
      id: 1,
      owner: user1,
      title: 'Tytuł testowy 1',
      body: 'Zawartość testowa 1',
      isDeleted: false,
    });
    const post2 = this.store.createRecord('post', {
      id: 2,
      owner: user1,
      title: 'Tytuł testowy 2',
      body: 'Zawartość testowa 2',
      isDeleted: false,
    });
    const post3 = this.store.createRecord('post', {
      id: 3,
      owner: user2,
      title: 'Tytuł testowy 3',
      body: 'Zawartość testowa 3',
      isDeleted: false,
    });
    post1.save();
    post2.save();
    post3.save();
  }
}
