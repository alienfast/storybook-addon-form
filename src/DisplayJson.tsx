import * as React from 'react'
import ReactJson from 'react-json-view'
import { convert, styled, themes } from '@storybook/theming'

const Container = styled.div({
  padding: convert(themes.normal).layoutMargin,
})

export const DisplayJson = (props: { o: object }) => {
  const { o } = props
  if (o && Object.keys(o).length) {
    return (
      <Container>
        <ReactJson src={o} />
      </Container>
    )
    // <pre>{JSON.stringify(o, null, 2)}</pre>
  }

  return null
}
