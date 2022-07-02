import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  username: faker.name.firstName(),
  password: faker.internet.password(20),
  email: faker.internet.email(),
  photoURL: faker.image.avatar(),
});
