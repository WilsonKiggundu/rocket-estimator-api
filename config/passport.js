import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import jwtConfig from './jwt';
import settings from '../settings';

passport.use(new Strategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtConfig.secret,
    ignoreExpiration: true,
    issuer: settings.AUTH_SERVICE,
  }, (jwtPayload, done) => done(),
));
