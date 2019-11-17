function isInSelectView(option) {
  const select = option.parentElement;
  return (select.scrollTop < option.offsetTop)
    && (select.scrollTop + select.clientHeight > option.offsetTop)
}

function checkSelectedOptionInSelectView() {
  const mySelect = document.getElementById('my-select')
  const selectedOption = mySelect.options[mySelect.selectedIndex]
  console.log("### selectedOption", selectedOption);
  console.log("### in view?", isInSelectView(selectedOption));
}

