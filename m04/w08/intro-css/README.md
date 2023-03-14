# M04 - W08

## Intro to CSS

## Topics to cover in lecture

- [X] **0. Things that we can achieve with CSS**
  - 1.1 [CSS Zen Garden](http://www.csszengarden.com/)
  - 1.2 Crazy communities: [CSS Design Awards](https://www.cssdesignawards.com/), [CodePen](https://codepen.io/)...

- [X] **1. HTML Recap**
  - 1.1 Elements (_a.k.a. tags_)
  - 1.2 Semantic elements
  - 1.3 Inline vs Block elements

- [x] **2. Browsers' Developer Tools**
  - 2.1 Elements and styles tabs
  - 2.2 How to debug HTML and CSS

- [x] **3. Intro to CSS**
  - 3.1 Where to study CSS: https://www.w3schools.com/
  - 3.2 Inline vs Header vs File styles
  - 3.3 Selectors: Element vs. Class vs ID
  - 3.4 Specificity
  - 3.5 How to edit and play with CSS in the browser

- [x] **4. CSS Box Model**
  - 4.1 Box sizing: border-box vs content box
  - 4.2 [Interactive Box Model demo](https://codepen.io/psande/pen/nKOJyX)


- [x] **5. CSS Browser Reset**
  - 5.1 Browser's default stylings
  - 5.2 [CSS meyerweb reset](https://meyerweb.com/eric/tools/css/reset/)


- [X] **6. CSS Flexbox**
  - 6.1 What is Flexbox and why should we use it?
  - 6.2 [Flexbox cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


### 1. HTML Recap
---

#### 1.1 Elements

An HTML element is defined by a start tag, some content, and an end tag.

```html
<tagname>Content goes here...</tagname>
```

Examples of some HTML elements:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```


#### 1.2 Semantic elements

From [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
  > In programming, Semantics refers to the meaning of a piece of code — for example "what effect does running that line of JavaScript have?", or "what purpose or role does that HTML element have" (rather than "what does it look like?".)

HTML gives us access to many [semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) to better describe our documents. Consider:

  ```html
  <div>My Awesome Page</div>
  <div>
    <div>
      <img src="https://via.placeholder.com/150" />
      <div>A picture of me</div>
    </div>
  </div>
  <div>More about me</div>
  <div>Copyright &copy; 2019</div>
  ```

  Versus:

  ```html
  <header>My Awesome Page</header>
  <main>
    <figure>
      <img src="https://via.placeholder.com/150" />
      <figcaption>A picture of me</figcaption>
    </figure>
  </main>
  <aside>More about me</aside>
  <footer>Copyright &copy; 2019</footer>
  ```

By using semantics, we can convey the _meaning_ of our markup to other developers who read our code as well as people using assistive devices to browse our site

#### 1.3 Inline vs Block elements

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

An inline element does not start on a new line.

- An inline element only takes up as much width as necessary.

![Inline vs Block](https://javadesde0.com/wp-content/uploads/block-vs-inline-tags-html-2.png)

[You can review here which elements are inline and which are block](https://www.w3schools.com/html/html_blocks.asp)

### 2. DevTools
---
The Chrome DevTools are your best friend when developing client-side. Make heavy use of the `Elements` tab and the `Styles` section.

### 3. Intro to Cascading Style Sheets
---
CSS is a [programming language](https://notlaura.com/css-is-a-programming-language/) that allows us to style our webpages.

#### 3.1 Where to study CSS?

The best place to learn, review and check css examples is [w3schools](https://www.w3schools.com/). Use this website anytime you need to clarify something, or simply scroll through the website content to learn more about CSS.

#### 3.2 Inline vs Header vs File styles

Can be added inline, embedded in a style element, or stored in an external file and linked in the head of the HTML file:

- Inline

```html
<div style="width: 90px; height: 250px;"></div>
```

- Style Element

```html
<style>
  body {
    color: lawngreen;
  }
</style>
```

- External Stylesheet (recommended)

```css
/* styles.css */
body {
  background-color: lightsalmon;
}
```

```html
<!-- index.html -->
<link rel="stylesheet" href="./styles.css" />
```

#### 3.3 Selectors

CSS is based around using [selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) to apply certain styles to specific areas of the document

```css
/* syntax */
selector list {
  property: value;
}

/* we can select by element name */
div { ... }
/* comma separate to style multiple elements */
div, p, a, aside { ... }

/* by class name */
.my-class { ... }
/* element with a class name */
div.my-class { ... }

/* by id */
#my-id { ... }
/* element with id */
div#my-id { ... }
```

#### 3.4 Specificity

CSS styles are applied in order from least specific to most specific. This means that more-specific styles will overwrite less-specific styles:
* We can take advantage of this fact to make sure that the styles that we want are applied correctly
* Least specific to most specific: element => class => id => inline style

```css
/* example styles of increasing specificity */
/* element selector */
div {
  border-color: magenta;
}

/* element + class selector */
div.green-border {
  border-color: green;
}

/* element + id selector */
div#blue-border {
  border-color: blue;
}
```

![Specificity](https://raw.githubusercontent.com/tborsa/LighthouseLabs/master/lectures/Week3/Day1/Breakout/assets/specificity1.png)

### 4. CSS Box Model
---
The HTML elements on a web page can be considered `boxes`. These `boxes` consist of (from outside-in) margin, border, padding, and content:

* **Margin**: controls the space between elements
* **Border**: as it sounds, a border around the content and padding
* **Padding**: the space between the elements content and its border
* **Content**: the actual content of the element (eg. text or image)

![w3schools box model image](https://andydlindsay-portfolio.s3.amazonaws.com/lighthouse/box+model.png)
*Image taken from [w3schools](https://www.w3schools.com/css/css_boxmodel.asp)*

#### 4.1 Box Sizing

By default, the `width` and `height` of an element is only applied to its content. Any padding, border, and margin will then be **added** to the content width and height resulting in elements that take up more space than we had intended

Enter the `box-sizing` property which allows us to control this behaviour:
* If we set the `box-sizing` property to a value of `border-box`, then the `width` and `height` of the element will apply to the entire element (border, padding, and content) resulting in elements with more predictable dimensions

#### 4.2 Interactive Box Model Demo

To better understand the box model, you can play with the following [Interactive box model demo](http://guyroutledge.github.io/box-model/)

### 5. CSS Browser Reset
---

#### 5.1 Browser's default stylings

Browsers actually style every page that we visit using a special stylesheet called the **user agent stylesheet**. These styles are not consistent across browsers which can mean that our pages display differently on different browsers (obviously not ideal)

#### 5.2 Meyerweb reset

CSS resets are stylesheets that help to _reset_ or _normalize_ all styles on the page before we apply our own styles. This helps us present a more consistent style across various different browsers.

We can use different css resets, like the famous [Meyerweb's css reset](https://meyerweb.com/eric/tools/css/reset/).

We can simply download any css reset, like the Meyerweb's reset, copy and paste the code into our own `reset.css` file:

```css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

Then link that file into our own html to override the browser's default stylings:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Link the reset.css here -->
  <link rel="stylesheet" href="./reset.css">

  <!-- Add your custom css styles afterwards -->
  <link rel="stylesheet" href="./myStyles.css">

  <title>Title on the tab!</title>
</head>
<body>
  <h1>Welcome to my website!</h1>

</body>
</html>

```



### 6. CSS Flexbox
---

#### 6.1 What is Flexbox and why should we use it?

The Flexbox Layout (Flexible Box) module aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic.

The main idea behind the **flex layout** is to give the **container (parent element)** the ability to alter its **items’ (children elements)** width/height (and order) to best fill the available space (mostly to accommodate to all kind of display devices and screen sizes).

![Flex Container](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)

A flex container expands items to fill available free space or shrinks them to prevent overflow.

![Flex Items](https://css-tricks.com/wp-content/uploads/2018/10/02-items.svg)

By understanding which element is the parent or container, and which elements are the items or children of the container, we can play with flexbox's properties and create incredible responsive layouts.

#### 6.2 Flexbox cheatsheet

By following this [Flexbox complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) from the [css-tricks website](https://css-tricks.com/) you can start working with flexbox in no time.

## Extra content

- [CSS Zen Garden](http://www.csszengarden.com/)

- Crazy cool communities: [CSS Design Awards](https://www.cssdesignawards.com/) and [CodePen](https://codepen.io/)

- [Interactive Box Model demo](https://codepen.io/psande/pen/nKOJyX)

- [Meyerweb's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)

- [CSS Tricks Website](https://css-tricks.com/)

- [Flexbox Cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)