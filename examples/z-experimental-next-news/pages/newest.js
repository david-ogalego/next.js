import React from 'react'
import Page from '../components/page'
import Stories from '../components/stories'
import getStories from '../lib/get-stories'

// eslint-disable-next-line camelcase
export async function getStaticProps() {
  const page = 1
  const stories = await getStories('newstories', { page })
  return { props: { page, stories } }
}

function Newest({ page, stories }) {
  const offset = (page - 1) * 30
  return (
    <Page>
      <Stories page={page} offset={offset} stories={stories} />
    </Page>
  )
}

export default Newest
