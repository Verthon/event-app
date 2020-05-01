import styled from 'styled-components'
import { ReactComponent as DateRangeIcon } from '../../assets/icons/date_range.svg'
import { ReactComponent as LocationOnIcon } from '../../assets/icons/location_on.svg'
import { Theme } from '../../theme/Theme'

const Logo = styled.img`
  width: 120px;
  margin: 1.2rem 1rem 1rem 1rem;
`

const Wrapper = styled.div`
  padding: 1rem;
  color: ${({ theme }: Theme) => theme.colors.primary};
`
const ImagePlaceholder = styled.div`
  width: 100%;
  background: var(--ion-color-gray-4);
  min-height: 300px;
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`
const InfoWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
`
const EntryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${({ theme }: Theme) => theme.fontSizes.title};
  font-weight: ${({ theme }: Theme) => theme.fontWeights.bold};
  margin: 1rem 0 2rem 0;
`
const LocationIcon = styled(LocationOnIcon)`
  width: 1rem;
  align-self: flex-start;
  margin: 0 1rem 0 0;

  #Primary-Color {
    fill: ${({ theme }: Theme) => theme.colors.primary};
  }

  #Secondary-Color {
    fill: ${({ theme }: Theme) => theme.colors.white};
  }
`

const DateIcon = styled(DateRangeIcon)`
  width: 1rem;
  align-self: flex-start;
  margin: 0 1rem 0 0;

  #Primary-Color {
    fill: ${({ theme }: Theme) => theme.colors.primary};
  }

  #Secondary-Color {
    fill: ${({ theme }: Theme) => theme.colors.white};
  }
`
const Localization = styled.p`
  margin: 0 0 0.5rem 0;
  display: flex;
  flex-direction: column;
`
const Street = styled.p`
  margin: 0;
  color: ${({ theme }: Theme) => theme.colors.text};
`
const Date = styled.time`
  margin: 0 0 0.5rem 0;
`
const Time = styled.time`
  display: block;
  color: ${({ theme }: Theme) => theme.colors.text};
`

const Label = styled.h2`
  margin: 1rem 0 0.5rem 0;
  font-weight: 500;
  font-size: 1rem;
`
const Description = styled.p`
  line-height: 1.5;
  margin: 0.25rem 0;
  color: ${({ theme }: Theme) => theme.colors.text};
`
const Category = styled.span`
  font-size: ${({ theme }: Theme) => theme.fontSizes.small};
  border-radius: 5px;
  padding: 0.15rem 0.5rem;
`

const Separator = styled.hr`
  margin: 2rem 0;
  background-color: var(--ion-color-gray-4);
`

export const Styled = {
  Wrapper,
  ImagePlaceholder,
  Image,
  InfoWrapper,
  EntryWrapper,
  LocationIcon,
  DateIcon,
  Localization,
  Street,
  Date,
  Time,
  Label,
  Description,
  Category,
  Separator,
  Logo,
  Title,
}