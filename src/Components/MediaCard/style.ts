import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  max-width: 324px;
  width: 20vw;
  max-height: 388px;
  height: 35vh;

  border-radius: 8px;
  background: var(--white-bg);


  overflow: hidden;


  box-shadow: 0px 3px 5px 1px black;
`

export const StyledImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const StyledDescription = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-word;

  text-align: justify;


`
