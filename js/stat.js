'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;
  var columnWidth = 40;
  var spaceBetween = 50;
  var step = histogramHeight / (getMaxElement(times) - 0);

  // тень облака

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // облако

  ctx.fillStyle = 'white';
  ctx.strokeStyle = '#FF6FF3';
  ctx.lineWidth = 4;
  ctx.strokeRect(98, 8, 424, 274);
  ctx.fillRect(100, 10, 420, 270);

  // текст о победе

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 220, 40, 420);
  ctx.fillText('Список результатов:', 220, 60, 420);

  var initialX = 160;
  var initialY = 80;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'rgba(0, 30, 255,' + Math.random() + ')';
    }

    ctx.fillRect(initialX + (columnWidth + spaceBetween) * i, (histogramHeight - times[i] * step) + initialY, columnWidth, times[i] * step);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (columnWidth + spaceBetween) * i, histogramHeight + 100);
    ctx.fillText(Math.floor(times[i]), initialX + (columnWidth + spaceBetween) * i, (histogramHeight - times[i] * step) + initialY - 5);
  }
};
var getMaxElement = function (arr) {
  var maxItem = -1;
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (item > maxItem) {
      maxItem = item;
    }
  }
  return maxItem;
};
