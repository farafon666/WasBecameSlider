(function($) {
  // Получаем доступ к элементу слайдера на странице
  var $dragMe = $(".dragme"),
  // К слайдеру 
  $container = $('.sl-container'),
  // К картинке слева
  $viewAfter = $('.view-after');
  // Используем свойство draggable из библиотеки с интерфейсом, чтобы получить координаты сдвига слайдера
  $dragMe.draggable({
    containment: 'parent',
    drag: function() {
      // При перемещении слайдера меняем ширину картинки слева в стилях
      $viewAfter.css({
        width: parseFloat($(this).css('left')) + 5
      });
    }
  });
  // Добавляем реакцию на клик по картинке
  $container.on('click', function(event) {
    // Получаем координаты клика, чтобы сместить туда слайдер
    var eventLeft = event.pageX - $container.offset().left - 15;
    // Плавно сдвигаем слоайдер
    animateTo(eventLeft);
  });
  // Функция сдвига слайдера при клике, на входе получаем новые координаты границы картинок
  function animateTo(_left) {
    // Анимируем сдвиг слайдера
    $dragMe.animate({
      left: _left
    }, 'slow', 'linear');
    // Анимируем сдвиг картинки
    $viewAfter.animate({
      width: _left
    }, 'slow', 'linear');
  }
})(jQuery);