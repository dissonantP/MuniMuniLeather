import { defineConfig, loadEnv } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    databaseDriverOptions: {
      connection: {
        ssl: false,
      },
    },
    http: {
      storeCors: process.env.STORE_CORS || 'http://localhost:5173',
      adminCors: process.env.ADMIN_CORS || 'http://localhost:9000',
      authCors: process.env.AUTH_CORS || 'http://localhost:9000,http://localhost:5173',
      jwtSecret: process.env.JWT_SECRET || 'development-jwt-secret',
      cookieSecret: process.env.COOKIE_SECRET || 'development-cookie-secret',
    },
  },
})
