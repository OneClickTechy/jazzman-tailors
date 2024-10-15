const AddressBar = () => {
  return (
    <address className="flex justify-end items-center p-4 gap-2 divide-x-2 divide-black sm:hidden md:flex">
      <p className="pl-2 text-nowrap md:text-[80%] lg:text-[100%]">
        <strong>Phone:</strong> <a href="tel:+919787849625" className="hover:text-green-600">+91 97878 49625</a>
      </p>
      <p className="pl-2 text-nowrap md:text-[80%] lg:text-[100%]">
        <strong>Email:</strong>
        <a href="mailto:jazzmantailors.theni@gmail.com" className="hover:text-red-600">
          jazzmantailors.theni@gmail.com
        </a>
      </p>
      <p className="pl-2 text-nowrap md:text-[80%] lg:text-[100%]">
        <strong>Working Hours:</strong>{" "}
        <time dateTime="09:00">Mon – Sat: 9.00 am</time> –{" "}
        <time dateTime="20:00">8.00 pm</time>
      </p>
    </address>
  );
};

export default AddressBar;
