const input_item = document.querySelector('#input-type');
const add_button = document.querySelector('#add-btn');
const list_container = document.querySelector('#list-container');
const delete_all = document.querySelector('#delete_all');

add_button.addEventListener("click", () => {
    const input_value = input_item.value.trim();
    if (input_value !== "") {
        const input_text = document.createElement('div');
        input_text.className = 'list-item';

        const text_value = document.createElement('span');
        text_value.textContent = input_value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        deleteButton.addEventListener("click", () => {
            list_container.removeChild(input_text);
        });
        input_text.appendChild(text_value);
        input_text.appendChild(deleteButton);
        list_container.appendChild(input_text);

        input_item.value = "";
    }
    else {
        alert("please enter something:");
    }
})
delete_all.addEventListener("click", () => {
    if (list_container.children.length > 0) {
        list_container.innerHTML = '';
    }
    else{
        alert("list is empty:")
    }

})
input_item.addEventListener("keypress",(Event)=>{
    if(Event.key==="Enter"){
        add_button.click()
    }
})