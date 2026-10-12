document.querySelector('DIV#add_item').addEventListener('click', () => {
  const item = document.createElement('li');
  item.textContent = 'Item';
  document.querySelector('UL.my_list').appendChild(item);
});
