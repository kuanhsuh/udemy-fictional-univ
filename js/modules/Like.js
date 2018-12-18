import $ from 'jquery';

class Like {
  constructor() {
    this.events();
  }

  events() {
    $(".like-box").on("click", this.ourClickDispatcher.bind(this))
  }

  //methods
  ourClickDispatcher() {
    if($(".like-box").data('exists') == 'yes') {
      this.deleteLike();
    } else {
      this.createLike()
    }
  }

  createLike() {
    alert('create like')
  }

  deleteLike() {
    alert('delete like')
  }
}

export default Like;