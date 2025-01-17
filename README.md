### Setup

- In .env file add your postgres db url
- run `npm i`, `npm run prisma:generate` and `npm run start:dev`

### Migration commands

- Generate prisma client: `npx prisma generate`
- Create migration: `npx prisma migrate dev --create-only`
- Run migration: `npx prisma migrate deploy`
- Check migration status: `npx prisma migrate status`

### Version

- Default API versions would be /v1. E.g. localhost:3000/v1
