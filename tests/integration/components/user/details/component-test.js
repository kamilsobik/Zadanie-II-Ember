import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { faker } from '@faker-js/faker';

module('Integration | Component | user/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    faker.setLocale('pl');

    const user = {
      id: faker.random.numeric(),
      username: faker.name.firstName(),
      password: faker.internet.password(20),
      email: faker.internet.email(),
      photoURL: faker.image.avatar(),
    };

    this.set('user', user);
    await render(hbs`<User::Details  @user={{this.user}}/>`);

    assert.dom('[data-test-username]').hasText(user.username);
    assert.dom('[data-test-id]').hasText(user.id.toString());
    assert.dom('[data-test-email]').hasText(user.email);
    assert.dom('[data-test-password]').hasText(user.password);
  });
});
