const { check } = require('express-validator');

exports.userSignupValidator = [
  // Form field: 'username'
  check('name')
    .isLength({ min: 1 })
    .trim()
    .withMessage('name cannot be empty.'),
  // .matches(/^[a-zA-Z0-9_]+$/, 'i')
  // .withMessage('Username must be alphanumeric, and can contain underscores'),
  // Form field: 'email'
  check('email')
    .isEmail()
    .withMessage('It must be an email')
    .isLength({ min: 4, max: 100 })
    .withMessage(
      'Email address must be between 4-100 characters long, please try again.'
    )
    .trim()
    .normalizeEmail(),

  // Form field: 'password'
  check('password')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must be between 8, max: 100-100 characters long.')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,}$/,
      'i'
    )
    .withMessage(
      'Password must include one lowercase character, one uppercase character, a number, and a special character.'
    )

  // Form field: 'confirmPassword'
];

// check('confirmPassword')
//     .isLength({ min: 8, max: 100 })
//     .equals('password') // **This must be exactly equal to the value in 'password'**
//     .withMessage('Confirm password is required.')

exports.userSigninValidator = [
  check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
  check('password')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must be at least 8 characters long')
];
