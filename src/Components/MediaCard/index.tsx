import React, { FC } from 'react'
import { StyledDescription, StyledImage, StyledWrapper } from './style'
import { Subtitle } from '../Typograph/Subtitle'

interface MediaCardProps {
  url: string,
  description: string
}

const MediaCard:FC<MediaCardProps> = ({ url, description }) => (
  <StyledWrapper>
    <StyledImage src={url} />
    <StyledDescription>
      <Subtitle mobile={false}> { description } </Subtitle>
    </StyledDescription>
  </StyledWrapper>
)

export default MediaCard