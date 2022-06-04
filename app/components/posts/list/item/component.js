import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class PostsListItemComponent extends Component {
  @service session;
  @service store;

  get currentUser() {
    return this.session.currentUser
  }

get currentPost() {
  return this.args.post
}

  @action 
  async onLike() {
    console.log('like');
    const createdLike = this.store.createRecord('like', {
      user: this.currentUser, 
      post: this.currentPost
    })
    await createdLike.save();
    }

  @action 
  async onDislike() {
    const like = this.currentUser.likes.find((like) => {
      return like.post.get('id') === this.currentPost.id;
    })
 await like.destroyRecord() 
  }

  get isAlreadyLikedByCurrenUser() {
    const { post } = this.args;
    const likeModel = this.currentUser.likes.find((like) => {
      return like.post.get('id') === this.currentPost.id;
    });
    const isLikeExists = Boolean(likeModel);
    return isLikeExists;
  }
}
