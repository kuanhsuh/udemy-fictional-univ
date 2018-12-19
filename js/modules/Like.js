import $ from 'jquery';

class Like {
  constructor() {
    this.events();
  }

  events() {
    $(".like-box").on("click", this.ourClickDispatcher.bind(this))
  }

  //methods
<<<<<<< HEAD
  ourClickDispatcher(e) {
    var currentLikeBox = $(e.target).closest(".like-box");
    if(currentLikeBox.attr('data-exists') == 'yes') {
      this.deleteLike(currentLikeBox);
    } else {
      this.createLike(currentLikeBox)
    }
  }

  createLike(currentLikeBox) {
    $.ajax({
      beforeSend: (xhr) => {xhr.setRequestHeader('X-WP-Nonce', universityData.nonce)},
      url: universityData.root_url + '/wp-json/university/v1/manageLike',
      type: 'POST',
      data: {
        'professorId': currentLikeBox.data('professor')
      },
      success: (response) => {
        currentLikeBox.attr('data-exists', 'yes');
        var likeCount = parseInt(currentLikeBox.find(".like-count").html(), 10);
        likeCount++
        currentLikeBox.find(".like-count").html(likeCount)
        currentLikeBox.attr("data-like", response)
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  deleteLike(currentLikeBox) {
    $.ajax({
      beforeSend: (xhr) => {xhr.setRequestHeader('X-WP-Nonce', universityData.nonce)},
      url: universityData.root_url + '/wp-json/university/v1/manageLike',
      type: 'DELETE',
      data: {'like': currentLikeBox.attr('data-like')},
      success: (response) => {
        currentLikeBox.attr('data-exists', 'no');
        var likeCount = parseInt(currentLikeBox.find(".like-count").html(), 10);
        likeCount--
        currentLikeBox.find(".like-count").html(likeCount)
        currentLikeBox.attr("data-like", '')
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    });
=======
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
>>>>>>> 8de261c6d943244f39ed1f627a5ac04bdecadff3
  }
}

export default Like;