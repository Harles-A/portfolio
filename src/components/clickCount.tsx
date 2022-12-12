import styles from './clickCount.module.scss'
import React, { useEffect, useState } from 'react'

type ClickCountProps = {

}

function ClickCount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Clicked the button ${count} times");

  });

  return ( 
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  )
}




export default ClickCount
