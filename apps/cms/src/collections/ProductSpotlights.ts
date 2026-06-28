import type { CollectionConfig } from 'payload'

export const ProductSpotlights: CollectionConfig = {
  slug: 'product-spotlights',
  labels: {
    singular: 'Product Spotlight',
    plural: 'Product Spotlights',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'medusaProductId',
      type: 'text',
      required: true,
      admin: {
        description: 'Reference the product ID from Medusa until we add a deeper sync.',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
