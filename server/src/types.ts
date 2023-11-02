import express from 'express';
import jwt from 'jsonwebtoken';
import User from './entity/User';

export interface ContextType {
  req: express.Request;
  res: express.Response;
  currentUser?: User;
  jwtPayload?: jwt.JwtPayload;
}
