import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url'

const appDir = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['munimunileather.dissonant.info'],
  output: 'standalone',
  outputFileTracingRoot: appDir,
  turbopack: {
    root: appDir,
  },
}

export default withPayload(nextConfig)
