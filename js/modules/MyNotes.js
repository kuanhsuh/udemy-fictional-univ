import $ from 'jquery'


class MyNotes {
  constructor() {
    this.events();
  }

  events() {
    $(".delete-note").on("click", this.deleteNote);
  }

  deleteNote() {
    $.ajax({
      beforeSend: (xhr) => {xhr.setRequestHeader('X-WP-Nonce', universityData.nonce)},
      url: universityData.root_url + '/wp-json/wp/v2/note/89',
      type: 'DELETE',
      success: (response) => {
        console.log('success delete')
        console.log(response)
      },
      error: (err) => {
        console.log('SORRY')
        console.log(err)
      }
    });
  }
}

export default MyNotes;