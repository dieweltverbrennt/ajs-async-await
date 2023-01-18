import read from './reader';
import json from './parser';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const gameSaving = await new GameSaving(JSON.parse(value));
      return gameSaving;
    } catch (error) {
      console.log(error);
    }
  }
}
