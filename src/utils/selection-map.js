export default function selectionMap({ series, films }) {
  return {
    series: [
      {
        title: 'Documentaries',
        data: series.filter((item) => item.genre === 'documentaries'),
      },
      {
        title: 'Comedies',
        data: series.filter((item) => item.genre === 'comedies'),
      },
      {
        title: 'Children',
        data: series.filter((item) => item.genre === 'children'),
      },
    ],
  };
}
