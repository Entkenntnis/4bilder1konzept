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
  answerLength: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
  answerHash: string // use 9 rounds for good performance
  id: number // unique and persistent identifier of a level
}

// tools: https://onlinerandomtools.com/shuffle-lines
// https://bcrypt.online/

export const Levels: { [index: string]: Level } = {
  1: {
    images: {
      imageA: '/images/1A.png',
      imageB: '/images/1B.png',
      imageC: '/images/1C.png',
      imageD: '/images/1D.png',
    },
    letters: ['D', 'F', 'E', 'G', 'Q', 'H', 'Ä', 'E', 'K', 'A', 'R', 'Z'],
    answerLength: 6,
    answerHash: '$2y$09$3u9xxZQ3mCMISEyZF6Fot.66J76t9kB9DBkd/uQi1YyTKNAP/nsQu',
    id: 1,
  },
  2: {
    images: {
      imageA: '/images/2A.png',
      imageB: '/images/2B.png',
      imageC: '/images/2C.png',
      imageD: '/images/2D.png',
    },
    letters: ['L', 'P', 'A', 'M', 'Ö', 'M', 'U', 'S', 'D', 'E', 'E', 'D'],
    answerLength: 5,
    answerHash: '$2y$09$LrUDXtg34QpUJ20TluTXLOOLHKylFjErZT1fmDNRv7ol5fHCYHw8u',
    id: 2,
  },
  3: {
    images: {
      imageA: '/images/3A.png',
      imageB: '/images/3B.png',
      imageC: '/images/3C.png',
      imageD: '/images/3D.png',
    },
    letters: ['L', 'U', 'I', 'E', 'W', 'S', 'Z', 'E', 'P', 'L', 'Ü', 'R'],
    answerLength: 5,
    answerHash: '$2y$09$9MVWOgsYdnLaTTwg9FVJ7ewoue7kzr1G9.tal8BhvN7R9.chgdyyW',
    id: 3,
  },
  4: {
    images: {
      imageA: '/images/4A.png',
      imageB: '/images/4B.png',
      imageC: '/images/4C.png',
      imageD: '/images/4D.png',
    },
    letters: ['M', 'S', 'C', 'H', 'Y', 'E', 'I', 'M', 'S', 'X', 'R', 'T'],
    answerLength: 11,
    answerHash: '$2y$09$56ttEpQIIlMemnV6d6xESufu9iRiH2yk7jNh5daCSAmwKF5ouq3cW',
    id: 4,
  },
  5: {
    images: {
      imageA: '/images/5A.png',
      imageB: '/images/5B.png',
      imageC: '/images/5C.png',
      imageD: '/images/5D.png',
    },
    letters: ['A', 'S', 'I', 'G', 'H', 'E', 'D', 'K', 'N', 'W', 'P', 'L'],
    answerLength: 6,
    answerHash: '$2y$09$ksCXz2jgmuBAVLcU5JQLLOPQ8axUkSbxzRNcmJGJ9U66kx2nnCYla',
    id: 5,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
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
    id: -1,
  },
  19: {
    images: {
      imageA: '/images/test.png',
      imageB: '/images/test.png',
      imageC: '/images/test.png',
      imageD: '/images/test.png',
    },
    letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    answerLength: 4,
    answerHash: '$2y$09$zW9rN6HmXWNaEB5lCjdELu9EuAHzWQgkcSjYaUK1w18oBmvUrMJJ2',
    id: -1,
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
    id: -1,
  },
}
