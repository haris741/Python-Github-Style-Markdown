## GitHub Style: Python Syntax Highlighter for Web

GitHub style: Python syntax highlighter is a lightweight, responsive syntax highlighting library for websites.

### How to use ?

* Download `main.js` and `style.css`. You can rename these files, if you want.

* Link external stylesheet and script using link and script tags respectively. [(YouTube: Watch demo)](https://www.youtube.com/watch?v=BtczLv0jMzQ) 

*  Make sure that script tag is present just above the closing `</body>` tag.

* Enclose your python code in a `<pre></pre>` tag.

  ```html
  <!-- Add link tag in head section to include external stylesheet -->
  <pre class='code-snippet'>
      <!-- Your Python Code Here -->
  </pre>
  <!-- Add script tag at the end of the page to include javascript code -->
  ```

* Add `'code-snippet'` class to the pre tag.

* You can add as many such snippets as you want.
