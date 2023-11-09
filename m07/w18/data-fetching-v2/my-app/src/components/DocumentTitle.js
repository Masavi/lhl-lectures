import { useState, useEffect } from 'react';

function DocumentTitle(props) {
  const [title, setTitle] = useState("TITLE FROM FIRST RENDER");

  useEffect(
    () => { document.title = title; },
    [title] // <- dependencies list
  )

  /*
    We have three ways of using the dependecies list:
     1) Leaving the array as empty "[]"
        -> Executes ONLY ONCE AFTER FIRST RENDER
     2) Adding dependencies to the array "[var1, var2, var3, ...]"
        -> Executes EVERY TIME THAT A DEPENDENCY CHANGES
     3) NOT defining an array of dependencies, leaving as "undefined"
        -> Executes EVERY TIME THAT THE COMPONENT RENDERS
        -> This can lead into infinite loops of rendering
  */

  return (
    <>
      <h2>Document Title Component 🧩</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text" />
    </>
  )
}

export default DocumentTitle;
