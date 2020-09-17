import passport from 'passport';
import {
  Profile,
  Strategy as GoogleStrategy,
  // VerifyCallback,
} from 'passport-google-oauth20';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../config/keys';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: Profile
      // done: VerifyCallback
    ) => {
      console.log(`accessToken: ${accessToken}`);
    }
  )
);