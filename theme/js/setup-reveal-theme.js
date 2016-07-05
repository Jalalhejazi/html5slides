/* globals Reveal, hljs */
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
function setupRevealJs() {
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: false,
    slideNumber: 'c / t',
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    

    


    //**********************************************************
    // Optional reveal.js plugins
    //**********************************************************

    dependencies: [{
      src: 'lib/js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    }, {
      src: 'js/plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'js/plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'js/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    }, {
      src: 'js/plugin/zoom-js/zoom.js',
      async: true
    }, {
      src: 'js/plugin/notes/notes.js',
      async: true
    }]
  });
}
