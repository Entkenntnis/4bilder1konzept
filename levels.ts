import Level from './pages/play/[id]'

type Char =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  | 'Ä'
  | 'Ö'
  | 'Ü'
  | 'ß'

export interface Level {
  images: {
    imageA: string
    imageB: string
    imageC: string
    imageD: string
  }
  letters: [
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char,
    Char
  ]
  answerLength: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  answerHash: string
}

export const Levels: { [index: string]: Level } = {
  1: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  2: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  3: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  4: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  5: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  6: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  7: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  8: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  9: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  10: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  11: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  12: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  13: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  14: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  15: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  16: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  17: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  18: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
  20: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
  },
}
