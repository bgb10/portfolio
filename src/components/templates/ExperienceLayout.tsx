import { ExperienceType } from '@components/types'
import ExperienceListItem from '@components/organisms/experience/ExperienceListItem'
import Heading from '@components/molecules/Heading'

type ExperienceProps = {
  items: ExperienceType[]
}

const ExperienceLayout = (props: ExperienceProps) => (
  <>
    <Heading title="Experience" description="share my experience yeah!" />
    {props.items.map((item, index) => (
      <ExperienceListItem key={index} {...item} />
    ))}
  </>
)

export default ExperienceLayout