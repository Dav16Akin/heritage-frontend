import React from "react";

const Quote = () => {
  return (
    <section className="relative flex flex-col justify-between h-[80vh] bg-linear-to-l from-black via-black to-blue-700">
      <div className="absolute left-0 bottom-0 w-[70%] flex flex-col justify-between p-16 text-white space-y-20">
        <h1 className="text-7xl">"Great Leaders Don't Create Followers, They Create More Leaders."</h1>
        <p>John Doe</p>
      </div>
    </section>
  );
};

export default Quote;
