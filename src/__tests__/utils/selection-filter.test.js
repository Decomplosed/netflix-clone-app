import { selectionFilter } from '../../utils';

test('selectionFilter with legitimate data', () => {
  const series = [
    {
      title: 'Documentaries',
      data: [
        {
          id: 'series-1x',
          title: 'Tiger King',
          description:
            'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
          genre: 'documentaries',
          maturity: '18',
          slug: 'tiger-king',
        },
      ],
    },
  ];
  const films = [
    {
      id: 'film-1x',
      title: 'The Prestige',
      description: 'Great film...',
      genre: 'drama',
      maturity: '15',
      slug: 'the-prestige',
    },
  ];

  const slides = selectionFilter({ series, films });
});
