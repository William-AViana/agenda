test('devo conhecer as principais acertivas do jest', () => {
  const number = 12;
  expect(number).not.toBeNull();
});

test('Devo saber trabalhar com objetos', () => {
  const obj = { name: 'Will', email: 'will@email.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'Will');
  expect(obj.name).toBe('Will');

  // exemplos com objetos
  // const obj2 = { name: 'Will', email: 'will@email.com' };
  // expect(obj).toBe(obj2);
  // expect(obj).toBe(obj);
});
