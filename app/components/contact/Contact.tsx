import Button from "../button/Button";

const Contact: React.FC = () => {
  return (
    <section className="col-span-12 flex -z-20 text-white reveal-container items-center bg-black flex-col gap-6 py-64 ">
      <p className="text-sm">
        Have a project in mind?
      </p>
      <h2 className="text-5xl font-italiana text-center tracking-wide mb-4">
        Let's create <span className="italic">something great</span> together!
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Button color="black" href="mailto:hello_eugen14@proton.me">
          hello_eugen14@proton.me
        </Button>
      </div>
    </section>
  );
}

export default Contact;