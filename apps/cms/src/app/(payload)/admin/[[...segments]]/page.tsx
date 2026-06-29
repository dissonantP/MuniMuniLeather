import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap.js'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<Record<string, string | string[]>>
}

export const generateMetadata = ({ params }: Args): Promise<Metadata> =>
  generatePageMetadata({ config: configPromise, params })

export default function AdminPage({ params, searchParams }: Args) {
  return RootPage({ config: configPromise, importMap, params, searchParams })
}
