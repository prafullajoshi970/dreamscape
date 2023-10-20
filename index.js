document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more-button');
    const hiddenParagraphs = document.querySelectorAll('.hiddenpara');
    let isHidden = true;
  
    readMoreButton.addEventListener('click', function() {
      hiddenParagraphs.forEach(paragraph => {
        paragraph.style.display = isHidden ? 'block' : 'none';
      });
      
      readMoreButton.textContent = isHidden ? 'Read Less' : 'Read More';
      isHidden = !isHidden;
    });
  });

  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  