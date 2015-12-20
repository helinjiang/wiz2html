hexo.markedRenderer = {
  init: function() {
    console.log("hexo.markedRenderer init!");
    // Called before rendering
  },
  complete: function(html) {
    console.log("hexo.markedRenderer complete!");
    // Called after rendered

    // Deal with html here ...

    return html;
  },
  heading: function(text, level) {
    // Default method can be accessed via:
    // this._super.heading(text, level)
    return "Your custom heading format"
  }
};