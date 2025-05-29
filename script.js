// The module path to fiddles accepts all the common variations:
//
// - @jsfiddle/[fiddle].js
// - @jsfiddle/[user]/[fiddle].js
// - @jsfiddle/[user]/[fiddle]/[version].js
// - @jsfiddle/[user]/[fiddle]/latest.js
//
// You need to remember to add `.js` at the end.

import FiddleModule from "@jsfiddle/rLd4uyep.js"

function calculateAndPlot() {
  const l1 = parseFloat(document.getElementById('lambda1').value);
  const l2 = parseFloat(document.getElementById('lambda2').value);
  const l3 = parseFloat(document.getElementById('lambda3').value);

  if (isNaN(l1) || isNaN(l2) || isNaN(l3) || l1 < 0 || l2 < 0 || l3 < 0) {
    alert('Пожалуйста, введите корректные неотрицательные значения λ');
    return;
  }

  const N = l1 + l2 + l3;

  // Создаем данные для графика: x от 0 до 10, y от N до N+10
  const labels = [];
  const data = [];
  for (let i = 0; i <= 10; i++) {
    labels.push(i.toString());
    data.push(N + i);
  }

  const ctx = document.getElementById('myChart').getContext('2d');

  // Уничтожаем предыдущий график, если он есть
  if (window.myChartInstance) {
    window.myChartInstance.destroy();
  }

  // Создаем новый график
  window.myChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Значения N + i',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'x'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Значение'
          },
          beginAtZero: false
        }
      }
    }
  });
}

  // Отобразить формулу с помощью KaTeX
  katex.render(formula, document.getElementById('formulaOutput'), {
    throwOnError: false
  });
