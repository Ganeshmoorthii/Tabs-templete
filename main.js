let aboutButtonEl = document.getElementById('aboutButton');
let timeToVisitButtonEl = document.getElementById('timeToVisitButton');
let attractionsButtonEl = document.getElementById('attractionsButton');
let aboutTabEl = document.getElementById('aboutTab');
let timeToVisitTabEl = document.getElementById('timeToVisitTab');
let attractionsTabEl = document.getElementById('attractionsTab');

timeToVisitButtonEl.addEventListener('click', function() {
    aboutButtonEl.style.backgroundColor = '#dae2ec';
    timeToVisitButtonEl.style.backgroundColor = 'white';
    attractionsButtonEl.style.backgroundColor = '#dae2ec';
    aboutTabEl.style.display = 'none';
    timeToVisitTabEl.style.display = 'block';
    attractionsTabEl.style.display = 'none';
});
aboutButtonEl.addEventListener('click', function() {
    aboutButtonEl.style.backgroundColor = 'white';
    timeToVisitButtonEl.style.backgroundColor = '#dae2ec';
    timeToVisitButtonEl.style.backgroundColor = '#dae2ec';
    aboutTabEl.style.display = 'block';
    timeToVisitTabEl.style.display = 'none';
    attractionsTabEl.style.display = 'none';
});
attractionsButtonEl.addEventListener('click', function() {
    aboutButtonEl.style.backgroundColor = '#dae2ec';
    timeToVisitButtonEl.style.backgroundColor = '#dae2ec';
    attractionsButtonEl.style.backgroundColor = 'white';
    aboutTabEl.style.display = 'none';
    timeToVisitTabEl.style.display = 'none';
    attractionsTabEl.style.display = 'block';
});
