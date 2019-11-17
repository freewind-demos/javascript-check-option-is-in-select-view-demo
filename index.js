function isInSelectView(option) {
  const select = option.parentElement;
  const realTopOffset = option.offsetTop - select.offsetTop;
  return (select.scrollTop < (realTopOffset + option.offsetHeight))
    && (select.scrollTop + select.clientHeight > realTopOffset)
}

function checkSelectedOptionInSelectView() {
  const mySelect = document.getElementById('my-select')
  const selectedOption = mySelect.options[mySelect.selectedIndex]
  console.log("### selectedOption", selectedOption);
  console.log("### in view?", isInSelectView(selectedOption));
}

