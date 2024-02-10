import * as S from './styles'

const Main = ({
  title = 'React',
  description = 'Learning react'
}: {
  title: string
  description: string
}) => (
  <S.Wrapper>
    <h1>{title}</h1>
    <p>{description}</p>
  </S.Wrapper>
)

export default Main
