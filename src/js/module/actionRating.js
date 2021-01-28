const actionRating = () => {
  if (document.querySelector('.star-rating--form')) {

    let stars = document.querySelectorAll('.star-rating--form');

    for (let starItem of stars) {

      let stars = starItem.querySelectorAll('.star-rating__item');
      const getNodeIndex = elm => [...elm.parentNode.children].indexOf(elm);
      let rating = parseInt(starItem.getAttribute('data-rating'));

      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('star-rating__item--active');
      }

      const setRating = function (ev) {
        let span = ev.currentTarget;
        let stars = starItem.querySelectorAll('.star-rating__item');
        let match = false;
        let num = 0;

        stars.forEach(function(star, index){
          if(match){
            star.classList.remove('star-rating__item--active');
          }else{
            star.classList.add('star-rating__item--active');
          }

          if(star === span){
            match = true;
            num = index + 1;
          }
        });
        starItem.setAttribute('data-rating', num);
      };
      if (!starItem.classList.contains('rating-static')) {
        stars.forEach(function(star, index){
          star.addEventListener('click', setRating);
          star.addEventListener('mouseenter', function () {

            let x;
            let e;
            let t = getNodeIndex(this) + 1;
            for ( x of stars) x.classList.add('star-rating__item--active');
            for (e = stars.length - 1; e >= t; e--) {
              starItem.querySelectorAll('.star-rating__item')
                [e]
                .classList
                .remove('star-rating__item--active');
            }
          });
          star.addEventListener('mouseleave', function () {
            let rating = parseInt(starItem.getAttribute('data-rating'));
            for ( let i of stars) i.classList.remove('star-rating__item--active');
            for (let t = 0; t < rating; t++) {
              stars[t].classList.add('star-rating__item--active');
            }
          });
        });
      }
    }
  }
}

export {actionRating}
