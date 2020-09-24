import { Router } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, FRONTEND_URL } from '../config/keys';

const router = Router();

router
  .get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  )
  .get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/auth/google/fail',
    }),
    (req, res) => {
      const { user } = req;
      const token = jwt.sign(
        {
          data: user,
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.cookie('jwt', token);
      res.redirect(FRONTEND_URL);
    }
  )
  .get('/google/fail', (req, res) => {
    res.send('cannot get google account info');
  })
  .get('/google/logout', (req, res) => {
    res.clearCookie('jwt').send('logged out');
  });

export default router;
