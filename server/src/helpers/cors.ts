import cors from 'cors';
import { env } from '../env';

export const corsOptions = {
  credentials: true,
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    const allowedOrigins = env.CORS_ALLOWED_ORIGINS.split(',');
    if (typeof origin === 'undefined' || allowedOrigins.includes(origin))
      return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
};

export const corsMiddleware = cors(corsOptions);
