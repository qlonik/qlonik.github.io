import type { CardProps } from '@material-ui/core/Card'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { experimentalStyled as styled } from '@material-ui/core/styles'
import type { TypographyProps } from '@material-ui/core/Typography'
import Typography from '@material-ui/core/Typography'
import Head from 'next/head'
import * as React from 'react'

import type { LinkProps } from '../src/components/link'
import { Link } from '../src/components/link'

const Container = styled('div')`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled('main')`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled(
  React.forwardRef<HTMLSpanElement, TypographyProps>(function Title(p, ref) {
    return <Typography variant="h1" ref={ref} {...p} />
  }),
)`
  line-height: 1.15;
  font-size: 4rem;
  font-weight: 500;
`

const Subtitle = styled(Typography)`
  line-height: 1.5;
  font-size: 1.5rem;
  margin: 1rem 0;
`

const Code = styled(
  React.forwardRef<HTMLSpanElement, TypographyProps>(function Code(p, ref) {
    return <Typography variant="code" ref={ref} {...p} />
  }),
)`
  font-size: 1.1rem;
  padding: 0.75rem;
  border-radius: 5px;
  background: #fafafa;
`

const Grid = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`

const CardLink = styled(
  React.forwardRef<HTMLAnchorElement, LinkProps>(function CardLink(p, ref) {
    return <Link underline="none" ref={ref} {...p} />
  }),
)`
  margin: 1rem;

  flex-basis: 45%;
  text-align: left;
  color: inherit;
`

const Tile = styled(
  React.forwardRef<HTMLDivElement, CardProps>(function Tile(p, ref) {
    return <Card ref={ref} {...p} sx={{ boxShadow: 0, ...p.sx }} />
  }),
)`
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  :hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`

const TileTitle = styled(
  React.forwardRef<HTMLSpanElement, TypographyProps>(function TileTitle(
    p,
    ref,
  ) {
    return <Typography variant="h5" gutterBottom ref={ref} {...p} />
  }),
)`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 500;
`

const TileContent = styled(Typography)`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`

const Footer = styled('footer')`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-left: 0.5rem;
    height: 1em;
  }
`

export default function Home(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </Title>

        <Subtitle>
          Get started by editing <Code>pages/index.tsx</Code>
        </Subtitle>

        <Grid>
          <CardLink href="https://nextjs.org/docs">
            <Tile>
              <CardContent>
                <TileTitle>Documentation &rarr;</TileTitle>
                <TileContent>
                  Find in-depth information about Next.js features and API.
                </TileContent>
              </CardContent>
            </Tile>
          </CardLink>

          <CardLink href="https://nextjs.org/learn">
            <Tile>
              <CardContent>
                <TileTitle>Learn &rarr;</TileTitle>
                <TileContent>
                  Learn about Next.js in an interactive course with quizzes!
                </TileContent>
              </CardContent>
            </Tile>
          </CardLink>

          <CardLink href="https://github.com/vercel/next.js/tree/master/examples">
            <Tile>
              <CardContent>
                <TileTitle>Examples &rarr;</TileTitle>
                <TileContent>
                  Discover and deploy boilerplate example Next.js projects.
                </TileContent>
              </CardContent>
            </Tile>
          </CardLink>

          <CardLink href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Tile>
              <CardContent>
                <TileTitle>Deploy &rarr;</TileTitle>
                <TileContent>
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </TileContent>
              </CardContent>
            </Tile>
          </CardLink>
        </Grid>
      </Main>

      <Footer>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </Link>
      </Footer>
    </Container>
  )
}
