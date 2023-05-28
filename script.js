
function newItem(){

    //jquery code replaces JS
    //1. Adding a new item to the list of items: 
       let li = $('<li></li>');
       let inputValue = $("input").val();
       li.append(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }
    
     //2. Crossing out an item from the list of items:
        function deleteItem() {
             li.toggleClass("strike")
         };
    
         li.on("dblclick", function deleteItem() {li.toggleClass("strike")
        });
    
     //3(i). Adding the delete button "X": 
       let deleteButton = $('<deleteButton></deleteButton>');
         deleteButton.append(document.createTextNode('X'));
         li.append(deleteButton);
    
         deleteButton.on("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.addClass("delete");
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    