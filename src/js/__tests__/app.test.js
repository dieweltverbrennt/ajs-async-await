import GameSavingLoader from '../app';

jest.setTimeout(15000);

const data = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  },
};

test('function load() should return correct data', async () => {
  const result = await GameSavingLoader.load();
  expect(result).toEqual(data);
});
