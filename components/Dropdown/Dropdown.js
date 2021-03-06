class Dropdown {
  constructor(dropdown) {
    
    // Assign this.element to the dropdown element
    //this.element;
    this.element = dropdown;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    // this.button = this.element.querySelector();
    this.dropdownButton = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    //this.content;
    this.dropdownContent = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.dropdownButton.addEventListener('click', () => {
      this.toggleContent()
    });
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    //this.content;
    this.dropdownContent.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));