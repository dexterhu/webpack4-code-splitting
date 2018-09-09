import React from 'react'

const HelloWorld = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Hello World!</h1>
          <p className="lead">Hello world is quite possibly the stupidest application known to man kind yet for some reason developers, some of the smartest people on the planet, insist on rebuilding this application in as many languages as they can.</p>
          <hr className="my-4" />
          <p>It is a phenomenon that will be discussed in history books for years to come - this I am certain.</p>
          <p className="lead">
            <button className="btn btn-primary btn-lg">Learn more</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelloWorld
