import * as React from 'react'
import ReactJson from 'react-json-view'

export const DisplayJson = (props: { o: object }) => {
  const { o } = props
  if (o && Object.keys(o).length) {
    return (
      <div>
        <br />
        <ReactJson src={o} />
      </div>
    )
    // <pre>{JSON.stringify(o, null, 2)}</pre>
  }

  return null
}
