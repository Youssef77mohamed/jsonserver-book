import React from 'react'

export default function Test(props) {
  return (
    <div style={{background: '#eee', padding: '10px 30px'}}>
        {props.children}    
    </div>    
  )
}

Test.Title = function (props) {
    return (
        <h1>
            {props.children}
        </h1>
    )
}

Test.Description = function (props) {
    return (
        <p>
            {props.children}
        </p>
    )
}

Test.Footer = function (props) {
    return (
        <div>
            card footer
        </div>
    )
}
