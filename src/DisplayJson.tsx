import { convert, styled, themes } from '@storybook/theming'
import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Container = styled.div({
  padding: convert(themes.normal).layoutMargin,
})

export const DisplayJson = (props: { o: object }) => {
  const { o } = props
  if (o && Object.keys(o).length) {
    return (
      <Container>
        {/* <pre>{JSON.stringify(o, null, 2)}</pre> */}
        <SyntaxHighlighter language="json" style={a11yDark}>
          {JSON.stringify(o, null, 2)}
        </SyntaxHighlighter>
      </Container>
    )
  }

  return null
}
