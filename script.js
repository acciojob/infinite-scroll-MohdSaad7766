const list = document.getElementById('infi-list');
let count = 1;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Infinite scroll
list.addEventListener('scroll', () => {
  const buffer = 10;
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - buffer) {
    addItems(2);
  }
});
