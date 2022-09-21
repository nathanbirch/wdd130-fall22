function changeText() {
  let newText = 'hi there';
  let oldText = 'This is some sweet text in my div';

  let pageText = document.getElementById('divWithText').innerHTML;
  if (pageText === newText) {
    document.getElementById('divWithText').innerHTML = oldText;
  } else {
    document.getElementById('divWithText').innerHTML = newText;
  }
}
