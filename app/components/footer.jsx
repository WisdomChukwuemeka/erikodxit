export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white px-8 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ErikdotIT</h3>
            <p className="text-sm">Empowering learners worldwide with expert-led IT courses and hands-on training for real-world success.</p>
          <div className="flex gap-4 mt-2">
            {
          [
            { icon: "bi-facebook" },
            { icon: "bi-instagram" },
            { icon: "bi-twitter" },
            { icon: "bi-linkedin" }
          ].map((item, i) => {
            return (
              <div key={i} className="text-white text-xl hover:text-emerald-500">
                <i className={`bi ${item.icon} text-xl`}></i>
              </div>
              );
            })
          }
          </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 
            id="contact"
            className="font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-4 mt-2">
            {
          [
            { icon: "bi-envelope", info: "info@erikdotit.com" },
            { icon: "bi-telephone", info: "+234 812 345 6789" },
          ].map((item, i) => {
            return (
              <div key={i} className="text-white text-xl hover:text-emerald-500">
                <i className={`bi ${item.icon} text-xl`}></i>
                <span className="ml-2 text-sm">{item.info}</span>
              </div>
              );
            })
          }
          </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe to Newsletter</h4>
            <input type="email" placeholder="Your email" className="w-full bg-indigo-800 p-2 rounded-md mb-2 text-white placeholder-gray-400" />
            <button className="w-full bg-emerald-500 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 flex justify-center items-center text-sm border-t pt-4 border-indigo-800">
          <p>© 2024 ErikdotIT All rights reserved.</p>
        </div>
      </footer>
  );
}
