import Link from 'next/link'

// eslint-disable-next-line camelcase
export async function getStaticProps() {
  return {
    props: {
      world: 'world',
      time: new Date().getTime(),
    },
  }
}

export default ({ world, time }) => (
  <>
    <p>hello {world}</p>
    <span>time: {time}</span>
    <Link href="/">
      <a id="home">to home</a>
    </Link>
    <br />
    <Link href="/something">
      <a id="something">to something</a>
    </Link>
  </>
)
