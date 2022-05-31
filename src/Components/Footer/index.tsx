import React, { FC } from "react";
import { StyledFooter, StyledIcon, StyledIconDiv, StyledMediaDiv } from './style'
import MediaCard, { MediaCardProps } from '../MediaCard'

interface FooterDeps {
  IconUrl : string,
  Media: MediaCardProps[]
}

export const Footer: FC<FooterDeps> = ({ IconUrl, Media }) => (
  <StyledFooter>
    <StyledIconDiv>
      <StyledIcon src={IconUrl} />
    </StyledIconDiv>
    <StyledMediaDiv>
      {
        Media.map(media => (
          <MediaCard url={media.url} description={media.description} />
        ))
      }
    </StyledMediaDiv>
  </StyledFooter>
)

export default Footer