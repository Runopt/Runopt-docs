---
sidebar_position: 3
---

# Authentication & User Management

Learn how to manage your Runopt account, understand authentication methods, and troubleshoot login issues.

## Account Creation

### Sign Up Process
1. Visit [https://core.runopt.co](https://core.runopt.co)
2. Click "Sign Up" in the top navigation
3. Fill in the registration form:
   - **Email Address**: Your primary email for account access
   - **OTP**: An OTP will be sent to the primary email address above. Check mail and enter the OTP in the form.
   - **Password**: Create a password. Follow the password requirements below.
   
4. Account will be created(*)

### Password Requirements (*)
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- Special characters recommended but not required

## Signing In

### Standard Login
1. Navigate to [https://core.runopt.co](https://core.runopt.co)
2. Enter your email address
3. Enter your password
4. Click "Sign In"
5. You'll be redirected to your dashboard

### Remember Me
- Check "Remember Me" to stay logged in for 30 days
- Uncheck for session-based login (logs out when browser closes)

### Forgot Password
1. Click "Forgot Password?" on the login page
2. Enter your email address
3. Check your email for password reset link
4. Click the link and create a new password
5. Sign in with your new password

## Account Management

### Profile Settings
Access your profile settings from the user menu (top right):

1. **Personal Information**
   - Update email address
   - Change password
   - Add profile picture

{/* 
2. **Company Information**
   - Company name
   - Industry/sector
   - Company size

3. **Preferences**
   - Units (metric/imperial)
   - Time zone
   - Language
   - Notification settings
*/}

### Subscription Management
- View current subscription plan
- Upgrade or downgrade plans
- View billing history
- Update payment information

## Security Features

### Session Management
- **Automatic Logout**: Sessions expire after 24 hours of inactivity (*)
- **Multiple Sessions**: You can be logged in on multiple devices (*)
- **Session History**: View active sessions in your profile

{/* TO-DO
### Two-Factor Authentication (Coming Soon)
- SMS-based verification
- Authenticator app support
- Backup codes for account recovery
*/}

### Account Security (*)
- **Login Notifications**: Email alerts for new logins
- **Password History**: Prevents reuse of recent passwords
- **Account Lockout**: Temporary lockout after failed attempts

## API Authentication (*)

### API Keys
For programmatic access to Runopt:

1. **Generate API Key**
   - Go to Profile Settings > API Keys
   - Click "Generate New Key"
   - Copy and securely store your key

2. **Using API Keys**
   ```bash
   curl -H "Authorization: Bearer YOUR_API_KEY" \
        https://api.runopt.co/v1/properties/search
   ```

3. **Key Permissions**
   - Read access to your projects
   - Write access for data upload
   - Admin access for account management

### Rate Limits
- **Free Tier**: 100 requests per hour
- **Pro Tier**: 1,000 requests per hour
- **Enterprise**: Custom limits

## Troubleshooting

### Common Login Issues

**"Invalid email or password"**
- Check for typos in email address
- Ensure caps lock is off
- Try the "Forgot Password" option

**"Account not verified"**
- Check your email for verification link
- Check spam/junk folder
- Request new verification email

**"Account locked"**
- Wait 15 minutes for automatic unlock
- Contact support if issue persists

**"Session expired"**
- Simply log in again
- Check "Remember Me" for longer sessions

### Browser Issues

**Login page not loading**
- Clear browser cache and cookies
- Try incognito/private browsing mode
- Check internet connection

**Features not working after login**
- Refresh the page
- Clear browser cache
- Try a different browser

### API Issues

**"Invalid API key"**
- Verify your API key is correct
- Check if key has expired
- Ensure proper Authorization header format

**"Rate limit exceeded"**
- Wait for rate limit reset
- Upgrade your subscription for higher limits
- Implement request caching

## Best Practices

### Password Security
- Use a unique password for Runopt
- Enable password manager
- Change password regularly
- Never share your password

### Account Security
- Log out from shared computers
- Use "Remember Me" only on personal devices
- Monitor login notifications
- Report suspicious activity

### API Security
- Store API keys securely
- Rotate keys regularly
- Use environment variables
- Never commit keys to version control

## Getting Help

### Contact Support
- **Email**: support@runopt.co
- **Response Time**: Within 24 hours
- **Priority Support**: Available for Pro and Enterprise users

### Self-Service
- Check this documentation
- Visit our documentation for help
- Review [GitHub issues](https://github.com/Runopt/issues)

### Account Recovery
If you can't access your account:
1. Try "Forgot Password" first
2. Contact support with your email address
3. Provide proof of account ownership
4. Support will help you regain access

## Next Steps

- **[Zoning Analysis](../zoning-analysis/overview.md)** - Start analyzing properties
- **[API Reference](../api-reference/authentication.md)** - Learn about API integration
- **[Core Product](../core-product/real-estate-feasibility-analysis)** - Real estate feasibility analysis
