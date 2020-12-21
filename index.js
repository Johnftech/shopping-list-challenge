// dynamically add and remove html elements and apply styles
// link to external jquery library
// link to local js file
// use this event delegation
// do not alter the css or html files other than linking js scripts

// requirements
/* user can:
-- enter items to purchase by entering text, 
hit return or click the add item button to add entered value
-- check and uncheck items on list by clicking the check button
-- delete items from list
-- 
*/
function handleShoppingListFormInput() {
    // append the list here
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        //console.log('Hey! this button works!');
        // variables 
        const itemToAdd = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        console.log(`this is the item to add value: ${itemToAdd}`);
        $('.shopping-list').append($(
            `<li>
                <span class="shopping-item">${itemToAdd}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        ));
    });
    // delete and check off event listeners
    // delete item
    $('.shopping-list').on('click', '.shopping-item-delete', event => {
        $(event.currentTarget).closest('li').remove();
        //$(event.currentTarget).remove();
    });
    // check off item
    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        console.log('this is the check button');
        $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked'); 
    });
    // refactor
    /*
    $('.shopping-list').on('click', '.shopping-item-controls', event => {
        event.stopPropagation();
        //console.log('this is a button within shopping item controls');
        console.log($(event.currentTarget));
        const toggleItem = $('.shopping-item-toggle');
        const deleteItem = $('.shopping-item-delete');
        console.log(event.children);
        if (event.children === toggleItem) {
            console.log('this is toggle');

        }
        //$(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        //$(event.currentTarget).closest('li').remove();
        

    });
    */
}

function main() {
    handleShoppingListFormInput();
    // callback functions here
}
// insert callback here
$(main);