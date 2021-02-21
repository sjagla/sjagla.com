export default {
  name: 'shot',
  title: 'Shot',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'show',
      title: 'Show',
      type: 'boolean'
    },
    {
      name: 'description',
      title: 'Article description',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAlt',
      title: 'Image alternative text',
      type: 'string'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}