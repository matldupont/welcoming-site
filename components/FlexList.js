import React from 'react'
import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  text-align: left;
  justify-content: center;
  padding: 5rem;

  & > * {
    margin-right: 2rem;
    margin-bottom: 1rem;
  }

  ${props => props.dark && `
    background: #f7f7f7;
    color: #333;
  `}

  ${props => props.center && `
    text-align: center;
  `}
`