import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-border']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
