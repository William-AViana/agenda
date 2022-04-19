test('devo conhecer as principais acertivas do jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
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
