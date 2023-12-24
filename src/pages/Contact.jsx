import Hero from "../components/Hero"

function Contact() {
  return (
    <>
      <Hero name="CONTACT ME" details="SAY HELLO TO ME" />
      <section className="py-20">
        <div className="container">
          <h3 className="font-bold text-[2rem] mb-1">Contact me</h3>
          <form action="" className="mt-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-28">
              <label className="form-control w-full">
                <span className="label-text text-base font-bold">Name</span>
                <input type="text" placeholder="Type here" className="border-b-2 border-black w-full py-2" />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-base font-bold">Email</span>
                <input type="text" placeholder="Type here" className="border-b-2 border-black w-full py-2" />
              </label>
            </div>
            <label className="form-control w-full mt-10 md:mt-16">
              <span className="label-text text-base font-bold">Message</span>
              <input type="text" placeholder="Type here" className="border-b-2 border-black w-full py-2" />
            </label>
            <div className="flex flex-col justify-center items-center mt-16 md:mt-20 md:flex-row">
              <button
                to="/contact"
                className="p-3 px-10 text-black bg-[#D9D9D9] text-base text-center w-full md:w-fit">
                  Contact me
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact