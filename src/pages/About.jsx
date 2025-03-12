import { RiDoubleQuotesL } from "react-icons/ri";

function About() {
  const stasistics = [
    { label: "Satisfied Customers", value: 99 },
    { label: "Exclusive Products", value: 12 },
    { label: "New Products", value: 5 },
  ];

  return (
    <section className="">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 bg-white rounded-2xl my-6">
          {/* container */}
          <div className="flex flex-col xl:flex-row gap-10">
            {/* left side */}
            <div className="flex-1 relative">
              <div className="bg-blue-500/80 h-[250px] rounded-3xl rounded-tr-[155px] w-[488px]"> {/* remove h after img */}
                <img src={""} alt="" />
              </div>
              <div className="bg-white absolute bottom-0 left-16 max-w-xs p-4 rounded-2xl flex-center flex-col shadow-sm">
                <span className="relative bottom-8 p-3 text-white size-12 flex items-center rounded-full bg-blue-500/80">
                  <RiDoubleQuotesL className="text-2xl"/>
                </span>
                <p className="text-center relative bottom-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore aliquid doloremque obcaecati!
                </p>
              </div>
            </div>
            {/* right side */}
            <div className="flex flex-1 justify-center flex-col">
              <span className="text-[18px] text-blue-500 font-semibold">Lorem, ipsum dolor.</span>
              <h2 className="h2 max-w-[472px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque aspernatur omnis amet placeat iusto debitis!
              </p>
              {/* statistics container */}
              <div className="flex flex-wrap gap-4">
                {stasistics.map((statistic, index) => (
                  <div key={index} className="bg-gray-200/80 text-blue-500 p-4 rounded-lg">
                    <div className="flex items-center gap-1">
                      <h3 className="h3">{statistic.value}k</h3>
                      <h4 className="font-bold text-[22px]">+</h4>
                    </div>
                    <p>{statistic.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
