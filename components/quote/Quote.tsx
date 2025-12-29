const Quote = () => {
  return (
    <section className="relative flex flex-col justify-between h-[80vh] bg-linear-to-l from-black via-black to-blue-700">
      <div className="absolute left-0 bottom-0 lg:w-[70%] flex flex-col justify-between lg:p-16 md:p-10 p-5  text-white space-y-20">
        <h1 className="lg:text-7xl md:text-6xl text-4xl">"Great Leaders Don't Create Followers, They Create More Leaders."</h1>
        <p>John Doe</p>
      </div>
    </section>
  );
};

export default Quote;
