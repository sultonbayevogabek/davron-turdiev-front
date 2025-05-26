import { Component } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

type Seat = {
  id: string,
  tariff: 'vip' | 'premium',
  status: 'free' | 'on-hold' | 'reserved',
  client?: {
    name: string,
    phone: string,
    reservedAt: string,
  },
}

@Component({
  selector: 'app-book',
  imports: [
    NgTemplateOutlet,
    NgClass
  ],
  templateUrl: './book.component.html'
})

export class BookComponent {
  seats: {
    left: Seat[][],
    center: Seat[][],
    right: Seat[][]
  } = {
    left: [
      [
        {
          id: '3-K',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-L',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-M',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-N',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '4-K',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-L',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-M',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-N',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-O',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '5-K',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-L',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-M',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-N',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-O',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '6-K',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-L',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-M',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-N',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-O',
          tariff: 'premium',
          status: 'free'
        }
      ]
    ],
    center: [
      [
        {
          id: '1-A',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-B',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-C',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-D',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-E',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-F',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-G',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-H',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-I',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-J',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-K',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '1-L',
          tariff: 'vip',
          status: 'free'
        }
      ],
      [
        {
          id: '2-A',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-B',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-C',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-D',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-E',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-F',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-G',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-H',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-I',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-J',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-K',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-L',
          tariff: 'vip',
          status: 'free'
        },
        {
          id: '2-M',
          tariff: 'vip',
          status: 'free'
        }
      ],
      [
        {
          id: '3-A',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-B',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-C',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-D',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-E',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-F',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-G',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-H',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-I',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-J',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '4-A',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-B',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-C',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-D',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-E',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-F',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-G',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-H',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-I',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-J',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '5-A',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-B',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-C',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-D',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-E',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-F',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-G',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-H',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-I',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-J',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '6-A',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-B',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-C',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-D',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-E',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-F',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-G',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-H',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-I',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-J',
          tariff: 'premium',
          status: 'free'
        }
      ]
    ],
    right: [
      [
        {
          id: '3-O',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-P',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-Q',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '3-R',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '4-P',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-Q',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-R',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '4-S',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '5-P',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-Q',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-R',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-S',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '5-T',
          tariff: 'premium',
          status: 'free'
        }
      ],
      [
        {
          id: '6-P',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-Q',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-R',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-S',
          tariff: 'premium',
          status: 'free'
        },
        {
          id: '6-T',
          tariff: 'premium',
          status: 'free'
        }
      ]
    ]
  };

  selectSeat(seat: Seat) {
    console.log(seat);
  }
}
