function highlightCode() {
  var codes = document.querySelectorAll('code');
  Array.prototype.forEach.call(codes, function (code, i) {
    hljs.highlightBlock(code);
  });
}
document.addEventListener('DOMContentLoaded', function() {
  var column = document.querySelector('.previews>*:last-child');
  if (typeof hljs === 'object') {
    highlightCode();
  }
});
