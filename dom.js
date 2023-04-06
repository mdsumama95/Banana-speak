var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var inputEle = document.getElementById("submit");

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//edit btn
itemList.addEventListener('click', editItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
  
  const inputValue = document.getElementById('item').value;
  const description = document.getElementById('description').value;
  const li = document.createElement('li');
  li.className = 'list-group-item';

  const newText = document.createTextNode(inputValue)
  const descriptionNode = document.createTextNode(" "+ description)

  li.appendChild(newText);
  li.appendChild(descriptionNode);

  

  const deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete mr';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li
  li.appendChild(deleteBtn);
  
  const AddBtn = document.createElement('button');
  AddBtn.className = 'btn btn-success btn-sm float-right AddBtn mr-2';
  AddBtn.appendChild(document.createTextNode('edit'));

   li.appendChild(AddBtn);
   item.appendChild(li)

  // Append li to list
  
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
function editItem(e){
  if(e.target.classList.contains('add')){
    
      var li = e.target.parentElement;
      itemList.innerHTM += `<li>${inputEle.value}</li>`;
   
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // Get lis
  const items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}