const hoverImageProduct = () => {

  $('.product-img')
    .on('mouseover', function(){
      $(this).children('img').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('img').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('img').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
}

export {hoverImageProduct}
