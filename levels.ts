export interface Level {
  id: number // unique and persistent identifier of a level
  answer: string
  sources: [string, string, string, string]
}

export type Levels = { [index: string]: Level }

// tools: https://onlinerandomtools.com/shuffle-lines
// https://bcrypt.online/

export const levelData: Levels = {
  1: {
    id: 1,
    answer: 'winkel',
    sources: ['30258', '1873', '1943', '2109'],
  },
  2: {
    id: 2,
    answer: 'klima',
    sources: ['100130', '74653', '199618', '74653'],
  },
  3: {
    id: 3,
    answer: 'bruch',
    sources: ['26315', '1389', '49468', '1935'],
  },
  4: {
    id: 4,
    answer: 'redox',
    sources: ['145927', '145927', '157600', '128778'],
  },
  5: {
    id: 5,
    answer: 'code',
    sources: ['57628', '85858', '70106', '70180'],
  },
  6: {
    id: 6,
    answer: 'zelle',
    sources: ['71631', '137664', '69555', '65162'],
  },
  7: {
    id: 7,
    answer: 'dreisatz',
    sources: ['38156', '24369', '24369', '1769'],
  },
  8: {
    id: 8,
    answer: 'periode',
    sources: ['152324', '2113', '2115', '161873'],
  },
  9: {
    id: 9,
    answer: 'pixel',
    sources: ['93484', '94377', '59123', '93484'],
  },
  10: {
    id: 10,
    answer: 'plastik',
    sources: ['224615', '124045', '141140', '108660'],
  },
  11: {
    id: 11,
    answer: 'stress',
    sources: ['134818', '165214', '139066', '134867'],
  },
  12: {
    id: 12,
    answer: 'ableitung',
    sources: ['1805', '1304', '26407', '2215'],
  },
  13: {
    id: 13,
    answer: 'forensik',
    sources: ['202261', '203166', '204711', '223573'],
  },
  14: {
    id: 14,
    answer: 'sinn',
    sources: ['70830', '64749', '77390', 'serlo'],
  },
  15: {
    id: 15,
    answer: 'klasse',
    sources: ['57028', '176564', '176662', '64636'],
  },
  16: {
    id: 16,
    answer: 'latein',
    sources: ['212396', '213865', '228337', '110111'],
  },
  17: {
    id: 17,
    answer: 'tangente',
    sources: ['24518', '1647', '64134', '2213'],
  },
  18: {
    id: 18,
    answer: 'vier',
    sources: ['1337', '1875', '95696', '71317'],
  },
  19: {
    id: 19,
    answer: 'atom',
    sources: ['77187', '154653', '154653', '127465'],
  },
  20: {
    id: 20,
    answer: 'prozent',
    sources: ['1377', '1627', '38457', '2193'],
  },
}
