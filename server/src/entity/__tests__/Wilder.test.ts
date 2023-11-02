import Wilder from '../Wilder';

describe('Wilder', () => {
  it('should create a Wilder with correct properties', () => {
    const wilder = new Wilder();
    wilder.name = 'Test Wilder';
    wilder.city = 'Test City';
    wilder.bio = 'Test Bio';
    wilder.avatarUrl = 'Test Url';
    wilder.skills = [{ id: 1, name: 'Test Skill', votes: 0 }];

    expect(wilder).toHaveProperty('name', 'Test Wilder');
    expect(wilder).toHaveProperty('city', 'Test City');
    expect(wilder).toHaveProperty('bio', 'Test Bio');
    expect(wilder).toHaveProperty('avatarUrl', 'Test Url');
    expect(wilder).toHaveProperty('skills', [
      { id: 1, name: 'Test Skill', votes: 0 },
    ]);
  });
});
