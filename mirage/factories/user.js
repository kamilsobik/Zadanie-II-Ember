import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  username() {
    return faker.name.firstName();
  },
  password() {
    return faker.internet.password(20);
  },
  email() {
    return faker.internet.email();
  },
  photoURL() {
    return faker.image.avatar();
  },
});
