import { SiCentos } from 'react-icons/si';
import { GiIsland } from 'react-icons/gi';
import '../styles/scrollOption.css';

function Scroll() {
  const state = {
    icons: [
      {
        id: 1,
        iconName: 'Arctic',
        Image: <SiCentos />,
      },
      {
        id: 2,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 3,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 4,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 5,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 6,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 7,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 8,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 9,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 10,
        iconName: 'Island',
        Image: <GiIsland />,
      },
      {
        id: 12,
        iconName: 'Island',
        Image: <GiIsland />,
      },
    ],
  };

  const iconsImage = state.icons;
  return (
    <>
      <div className="flex overflow-x-scroll scroll-smooth border-b shadow" id="scrollBar">
        {iconsImage.map((i) => (
          <div key={i.id} className="flex flex-col items-center py-3 px-3 text-gray-500 hover:text-black hover:border-b-2 focus:border-b active:border-pink-500">
            <span className="text-3xl">{i.Image}</span>
            <span className="text-xs pt-1 font-bold">{i.iconName}</span>
          </div>
        ))}
      </div>

    </>
  );
}

export default Scroll;
