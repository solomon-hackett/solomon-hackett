import { betterAuth } from 'better-auth';
import { twoFactor, username } from 'better-auth/plugins';
import { Pool } from 'pg';

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: "Solomon Hackett Portfolio",
  plugins: [username(), twoFactor()],
});
