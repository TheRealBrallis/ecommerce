export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          name: 'detail',
          title: 'Detail',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            }, 
            {
              title: 'Info',
              name: 'info',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          name:'size',
          title: 'Size',
          type: 'string'
        }
      ]
    }
  ]
}