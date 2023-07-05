document.addEventListener('DOMContentLoaded', function() {
    let questions = document.getElementsByClassName('concern');
    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function() {
        this.classList.toggle('expanded');
      });
    }
  });
  