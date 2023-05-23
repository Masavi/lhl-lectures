import { useState, useEffect } from 'react';

const DocumentTitle = () => {
  const [title, setTitle] = useState('Document');
  const [button, setButton] = useState(false)

  /**
   * useEffect always receives two arguments:
   * 1) Callback, which is the action to execute depending on the dependencies list
   * 2) The dependencies list
   */
  useEffect(
    () => {
      console.log('UseEffect triggered!');
      document.title = title
    },
    [title]
  )
  /**
   * We have three ways of using the dependencies list:
   * 1) Leaving the array empty "[]"
   *      -> Executes ONLY ONCE AFTER FIRST RENDER
   * 2) Adding dependencies to the array "[var1, var2, varn...]"
   *      -> Executes EVERY TIME THAT A DEPENDENCY CHANGES
   * 3) NOT defining an array of dependencies "undefined"
   *      -> Executes EVERY TIME THAT SOMETHING CHANGES, WHATEVER CHANGES!
   *      -> this can lead into infinite loops of rendering
   */

  return (
    <>
      <h2>DocumentTitle Component 🧩</h2>
      <input
        onChange={(e) => { setTitle(e.target.value) }}
        value={title}
        type="text" />
      <br/>
      <button
        onClick={() => setButton(!button)}
        >Click me! I'm currently: { button ? 'ON' : 'OFF' }</button>
    </>
  )
}

export default DocumentTitle;
