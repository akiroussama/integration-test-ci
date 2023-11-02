import User, { hashPassword, verifyPassword, getSafeAttributes } from '../User';

describe('User', () => {
  it('should create a User with correct properties', () => {
    const user = new User();
    user.email = 'test@example.com';
    user.role = 'admin';
    expect(user).toHaveProperty('email', 'test@example.com');
    expect(user).toHaveProperty('role', 'admin');
  });

  it('should hash and verify password correctly', async () => {
    const plainPassword = 'password';
    const hashedPassword = await hashPassword(plainPassword);
    const isPasswordValid = await verifyPassword(plainPassword, hashedPassword);
    expect(isPasswordValid).toBe(true);
  });

  it('should return safe attributes', () => {
    const user = new User();
    user.email = 'test@example.com';
    user.hashedPassword = 'hashedPassword';
    const safeUser = getSafeAttributes(user);
    expect(safeUser).toHaveProperty('hashedPassword', undefined);
  });
});
