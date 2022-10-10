function MobileModal() {
  return (
    <>
      <div className="m-3 border-2 rounded-full w-8 h-8 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div>
        <p>Stays</p>
        <p>Experience</p>
      </div>
    </>
  );
}

export default MobileModal;
