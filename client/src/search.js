export const filter = () => {
  const search = document.getElementById('search').value;
  const regExp = new RegExp(search, 'gi');
  const list = document.querySelectorAll('#todo-list li');
  const listArr = [...list];
  for (let i = 0; i < listArr.length; i++) {
    const item = listArr[i].querySelector('span').innerText
    if (regExp.test(item)) {
      listArr[i].style.display = 'flex';
    } else {
      listArr[i].style.display = 'none';
    }
  }
}

export const Search = `
  <div id='search_box'>
    <label>
      검색: 
      <input type='text' id='search' placeholder='할 일 검색'/>
    </label>
  </div>
`;
