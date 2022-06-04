import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PostsListItemComponent extends Component {
  @tracked isShowCreateModal = false;

  @action
  onShowModal() {
    this.isShowCreateModal = true;
  }

  @action
  onHideModal() {
    this.isShowCreateModal = false;
  }
}
