
function HomeCard(props) {
  const modal = props;
  const slideModal = modal.slides;
  let currentIndex = 0;

  const goToNext = () => {
    currentIndex += 1;
    console.log(currentIndex);
  };



  return (
    <div>
      {slideModal.map((i) => (
        <div className="relative h-full" key={i.id}>
          <button
            type="button"
            className="absolute top-1/3 anslate-x-2/4 translate-y-0 left-10 text-4xl text-white md:z-50 cursor-pointer"
          >
            ❰
          </button>
          <button
            onClick={goToNext}
            type="button"
            className="absolute top-1/3 translate-x-2/4 translate-y-0 right-16 text-4xl text-white md:z-50 cursor-pointer"
          >
            ❱
          </button>

          <img src={i.links[currentIndex].url} alt="Home" className=" w-80 rounded-3xl bg-cover bg-center m-5 sm:w-80" />
          <p className="text-center">
            {i.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HomeCard;
