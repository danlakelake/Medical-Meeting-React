function Brands() {
  return (
    <div className="mx-auto w-[90%] max-w-4xl overflow-hidden bg-white py-10 md:py-11 text-xl text-gray-brands md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-4 md:rounded-full md:shadow-lg md:px-20">
      <div className="brands-mask overflow-hidden">
        <div className="flex w-max animate-[brands-scroll_40s_linear_infinite]">
          <div className="flex shrink-0 gap-17 pr-17">
            <span>colorlib.</span>
            <span>AWWWARDS</span>
            <span>Forbes</span>
            <span>dribbble</span>
            <span>99designs</span>
          </div>

          <div className="flex shrink-0 gap-17 pr-17">
            <span>colorlib.</span>
            <span>AWWWARDS</span>
            <span>Forbes</span>
            <span>dribbble</span>
            <span>99designs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
