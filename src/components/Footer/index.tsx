import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            odio laborum tenetur voluptatem voluptatibus veniam nisi quod rem
            quas at laudantium repudiandae ut deserunt blanditiis, distinctio ab
            eligendi, dolor error
            <p>Evogym All Rights Reserved</p>
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Home</p>
          <p className="my-5">About Us</p>
          <p className="my-5">Services</p>
          <p className="my-5">Contact</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact</h4>
          <p className="my-5">Email: info@evogym.com</p>
          <p className="my-5">Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
