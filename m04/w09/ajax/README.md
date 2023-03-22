# M04 - W09

## AJAX

## Topics to cover

* [X] 1. What is AJAX?
* [X] 2. How to use AJAX?
    * [X] 2.1 XML-HTTP-Request Object
    * [X] 2.2 Fetch
    * [X] 2.3 JQuery
* [X] 3. The AJAX Workflow

### 1. What is AJAX
---
AJAX = _Asynchronous JavaScript and XML_. Thanks to AJAX, web applications can send and receive data asynchronously without requiring a browser refresh.

![Ajax Workflow](https://github.com/C-Shi/lhl-flex-lecture/blob/main/module_4/ajax/image/ajax.png?raw=true)


The widespread use of AJAX was one of the factors that led to Web 2.0. It originally retrieved data sent using XML, but modern applications use JSON instead.

### 2. How to use Ajax?
---

We have different options to send an AJAX request:

#### 2.1 Legacy way of sending AJAX using `XMLHttpRequest`

The [XMLHttpRequest object](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) is available to use at any time when working with JavaScript in a browser:

```js
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhhtp.responseText);
  } else if (this.readyState == 4 && this.status >= 400) {
    console.log('http error')
  }
}
xhttp.onerror = function() {
  console.log('There is a network error')
}
xtttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true)
xhttp.send()
```

#### 2.2 Modern AJAX with Promise based library: fetch

AJAX is always implemented using the XMLHttpRequest (XHR) object. Modern libraries (such as jQuery or axios) provide us with easy-to-use wrappers for the XHR object, so we can achieve more with less lines of code.

We can use the [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make AJAX requests:

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
```

#### 2.3 Modern AJAX with Promise based library: jQuery

[jQuery](https://jquery.com/) also gives us an API for making AJAX requests:

```js
jquery.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response))
  .catch(err => console.log(err))
```

### 3. Ajax Workflow
---

Every time we want to get data and modify something on our website, we can follow these steps:

1. Provide the inital HTML page
2. Determine and import the tool for AJAX
3. Determine when to fire an ajax request --> DOM event
4. Determine where and what to send in request
5. Determine the action upon receiving the response

![ajax design](https://github.com/C-Shi/lhl-flex-lecture/blob/main/module_4/ajax/image/ajax_design.png?raw=true)


