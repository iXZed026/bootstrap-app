import React, { useEffect, useState } from 'react';
import "./ServicesCardBox.css"

export const ServicesCardBox = (props) => {

  let [count, setCount] = useState(0);

  useEffect(() => {

    let interval = setInterval(() => {
      if (Math.round(window.scrollY) > 1100) {
        if (count <= props.view) {
          setCount(count + 1);
        }
      }
    }, props.view < 35 ? 100 : 25);

    return () => {
      clearInterval(interval)
    }


  }, [count])

  return (


    <div className="card bg-transparent border-light pt-5 rounded-4">
      <div className="text-center">
        {props.img}
      </div>
      <div className="card-body text-center">
        <h2 className="card-title text-white">{count}</h2>
        <h6 className="card-title text-white">{props.title}</h6>
      </div>
    </div>
  )
}
