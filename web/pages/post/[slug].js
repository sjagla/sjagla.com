// [slug].js
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import client from '../../client'
import BlogLayout from '../../components/BlogLayout'
import { Waypoint } from 'react-waypoint'
import ChangeBackground from '../../components/ChangeBackground'
import Image from 'next/image'


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    postImage,
    postDescription,
    authorImage,
    body = []
  } = props

  return (
    <BlogLayout siteTitle={title} postImage={postImage} postDescription={postDescription}>
        <Waypoint
          onEnter={({ event }) => {
            ChangeBackground('#FBFBFB');
          }}
        ></Waypoint>
        <BlockContent
          blocks={body}
          imageOptions={{ fit: 'max' }}
          {...client.config()}
        />
    </BlogLayout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "title": title->title,
  "postDescription": description,
  "postImage": mainImage.asset->url,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post