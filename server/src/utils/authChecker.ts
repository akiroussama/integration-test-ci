import jwt from 'jsonwebtoken';
import { env } from '../env';
import datasource from '../db';
import User from '../entity/User';
import { ContextType } from '../types';

export const authChecker = async (
  { context }: { context: ContextType },
  roles
) => {
  const tokenInHeaders = context.req.headers.authorization?.split(' ')[1];
  const tokenInCookie = context.req.cookies?.token;
  const token = tokenInHeaders ?? tokenInCookie;

  console.log({ tokenInCookie, tokenInHeaders, token });

  try {
    let decoded;
    if (typeof token !== 'undefined')
      decoded = jwt.verify(token, env.JWT_PRIVATE_KEY);
    if (typeof decoded === 'object') context.jwtPayload = decoded;
  } catch (err) {}

  let user = null;
  if (context.jwtPayload !== null && typeof context.jwtPayload !== 'undefined')
    user = await datasource
      .getRepository(User)
      .findOne({ where: { id: context.jwtPayload.userId } });

  if (user === null) return false;

  context.currentUser = user;
  return roles.length === 0 || roles.includes(user.role);
};
