const Quote = () => {
  return (
    <section className="relative flex flex-col justify-between h-[80vh] bg-gradient-to-l from-[#0a1628] via-[#0a1628] to-[#111d35]">
      <div className="absolute left-0 bottom-0 lg:w-[75%] flex flex-col justify-between lg:p-16 md:p-10 p-5 text-white space-y-20">
        <div className="w-12 h-1 bg-[#9b1c1c] rounded-full"/>
        <h1 className="lg:text-7xl md:text-6xl text-4xl leading-tight">"Great Leaders Don't Create Followers, They Create More Leaders."</h1>
        <div>
          <p className="font-semibold text-lg">John C. Maxwell</p>
          <span className="text-white/50 text-sm">Author & Leadership Expert</span>
        </div>
      </div>
    </section>
  );
};

export default Quote;
