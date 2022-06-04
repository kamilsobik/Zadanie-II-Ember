import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostsListItemComponent extends Component {
  @service store;
  @service session;
  @tracked isShowCreateModal = false;
  @tracked title = '';
  @tracked content = '';

  get hasEmptyField() {
    return !(this.title && this.content);
  }

  @action onShowModal() {
    this.isShowCreateModal = true;
  }

  @action onHideModal() {
    this.isShowCreateModal = false;
    this.clearFields();
  }

  @action onTitleChange(event) {
    this.title = event.target.value;
  }

  @action onContentChange(event) {
    this.content = event.target.value;
  }

  @action
  async onSaveChange() {
    const post = {
      title: this.title,
      body: this.content,
      owner: this.session.currentUser,
    };
    const postModel = this.store.createRecord('post', post);
    await postModel.save();
    this.clearFields();
    this.isShowCreateModal = false;
  }

  clearFields() {
    this.title = '';
    this.content = '';
  }
}
