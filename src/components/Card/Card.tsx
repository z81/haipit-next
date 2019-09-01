import styled from "styled-components";

export const Card = styled.nav`
  background-color: #fff;
  padding: 20px;
  margin: .5em 1em;
  max-width: 640px;
  line-height: 1.2em;
  padding-bottom: 10px;
  word-break: break-word;
`

export const CardSubHeader = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 5px 0;
  line-height: 1.1em;
`

export const CardHeader = styled.nav`
  display: flex;
  font-size: 12px;
  > * {
    margin-right: 18px;
  }
`

export const CardFooter = styled.div`
  font-weight: bold;
  color: #818181;
  padding: 10px;
  padding-bottom: 5px;
`
