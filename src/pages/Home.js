import Scroll from '../components/ScrollOption';
import HomeCard from '../components/HomeCard';

function Home() {
  const slides = [
    {
      id: 1,
      name: 'Under the Dome',
      availableDate: 'Sep 22 - 29',
      links: [
        { url: 'https://tse2.mm.bing.net/th?id=OIP.un7dydXABPwN1jqSKmwNbwHaD4&amp', title: 'beach' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.lEpksTWgGveeWLbDPM6IMAHaEB&amp', title: 'boat' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.a_7mHHATbhDYFGIeJ-kY6gHaD5&amp', title: 'forest' },
        { url: 'https://tse2.mm.bing.net/th?id=OIP.7joROtkGnBT7PoHoNjjYDgHaEU&amp', title: 'city' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.K0Rqe9h8qm4zkO2azodj4AHaE8&amp', title: 'italy' },
      ],

    },
    {
      id: 2,
      name: 'over the Dome',
      availableDate: 'Sep 22 - 29',
      links: [
        { url: 'https://tse2.mm.bing.net/th?id=OIP.7joROtkGnBT7PoHoNjjYDgHaEU&amp', title: 'beach' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.lEpksTWgGveeWLbDPM6IMAHaEB&amp', title: 'boat' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.a_7mHHATbhDYFGIeJ-kY6gHaD5&amp', title: 'forest' },
        { url: 'https://tse2.mm.bing.net/th?id=OIP.7joROtkGnBT7PoHoNjjYDgHaEU&amp', title: 'city' },
        { url: 'https://tse4.mm.bing.net/th?id=OIP.K0Rqe9h8qm4zkO2azodj4AHaE8&amp', title: 'italy' },
      ],

    },

  ];

  return (
    <>
      <Scroll />
      <HomeCard slides={slides} />
    </>
  );
}

export default Home;
