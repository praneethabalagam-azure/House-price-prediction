export default function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Property Buyer",
      review:
        "The AI prediction helped me understand the actual market value before buying my home.",
    },
    {
      name: "Ananya Reddy",
      role: "Real Estate Agent",
      review:
        "A powerful tool that makes property valuation faster and more accurate.",
    },
    {
      name: "Vikram Patel",
      role: "Investor",
      review:
        "The insights and price trends helped me make better investment decisions.",
    },
  ];


  return (
    <section className="bg-[#0D0D0D] py-24 px-6">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-white">
            What Users Say
          </h2>

          <p className="text-gray-400 mt-3">
            Trusted by buyers, agents, and investors
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {reviews.map((item) => (

            <div
  key={item.name}
  className="bg-white rectangle-3xl p-8 
  shadow-xl hover:-translate-y-3 
  transition duration-300"
>

              <div className="text-cyan-400 text-4xl mb-5">
                "
              </div>


              <p className="text-black-300 leading-relaxed">
                {item.review}
              </p>


              <div className="mt-6">

                <h3 className="text-black font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-black-400">
                  {item.role}
                </p>

              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}