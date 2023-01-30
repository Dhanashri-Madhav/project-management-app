import dotenv from 'dotenv'

dotenv.config()
export const DBSTRING: string = (process.env.DB as string);

export const PORT = process.env.PORT

export const jwtSecret: string = (process.env.jwtSecret as string)

export const TokenExpirtTime = process.env.TOKEN_EXPIRE_TIME