// Import all the necessary modules and functions
// ...
import { WilderResolver } from './resolver/WilderResolver';
import { SkillResolver } from './resolver/SkillResolver';
import { GradeResolver } from './resolver/GradeResolver';
import { UserResolver } from './resolver/UserResolver';
import { corsMiddleware } from './helpers/cors';
import { authChecker } from './utils/authChecker';
import { ContextType } from './types';
import { buildSchema } from 'type-graphql';

const start = async (): Promise<void> => {
  // ...
  app.use(corsMiddleware);
  // ...
  const schema = await buildSchema({
    resolvers: [WilderResolver, SkillResolver, GradeResolver, UserResolver],
    authChecker,
  });
  // ...
};

void start();
