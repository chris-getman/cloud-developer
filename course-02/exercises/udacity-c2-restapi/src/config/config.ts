export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.database,
    "host": process.env.host,
    "dialect": process.env.dialect,
    "aws_region": process.env.aws_region,
    "aws_profile": process.env.aws_profile,
    "aws_media_bucket": process.env.aws_media_bucket
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
