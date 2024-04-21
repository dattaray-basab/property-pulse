import { NextApiHandler } from 'next';
import { authOptions } from '@/utils/authOptions';
import NextAuth, { NextAuthOptions } from 'next-auth';

const handler: NextApiHandler = (req, res) =>
  NextAuth(req, res, authOptions as NextAuthOptions);

export { handler as GET, handler as POST };
