var protocol = window.location.protocol,
    pathname = window.location.pathname.replace(/index\.html$/, ''),
    host = window.location.host,
    readmeLocation = protocol + "//" + host + pathname;

if (readmeLocation[readmeLocation.length - 1] !== '/') {
  readmeLocation += '/';
}

readmeLocation += 'README.md';

render(readmeLocation)
  .then(function(){
    $('#loading').remove();
  });