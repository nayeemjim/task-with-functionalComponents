import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Newsletter CTA */}
      <div className="mx-auto mt-16 mb-10 max-w-6xl rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 p-10 text-center text-white">
        <h2 className="mb-3 text-[38px] font-semibold md:text-3xl">
          Ready to Hire Smarter?
        </h2>
        <p className="mb-12 text-[16px]">
          Unlock Exclusive Insights. Subscribe to Our Newsletter
        </p>
        <button className="rounded-full bg-yellow-400 px-6 py-2 text-xl font-medium text-black transition hover:bg-yellow-300">
          Join Now
        </button>
      </div>

      {/* Footer content */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4">
        {/* Logo & About */}
        <div>
          <div className="mb-4 flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-yellow-400"></div>
            <h3 className="text-lg font-semibold">Logo</h3>
          </div>
          <p className="mb-4 text-sm text-gray-600">
            SalesRank AI offers a comprehensive suite of AI-powered solutions to
            help you find expert sales professionals who can elevate every
            aspect of your business...
          </p>
          <div className="mt-4 flex space-x-4">
            <Facebook className="h-4 w-4 cursor-pointer hover:text-blue-600" />
            <Twitter className="h-4 w-4 cursor-pointer hover:text-blue-400" />
            <Linkedin className="h-4 w-4 cursor-pointer hover:text-blue-700" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-semibold">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Service</li>
            <li>Agency</li>
            <li>Case Study</li>
            <li>Resource</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* License */}
        <div>
          <h4 className="mb-4 font-semibold">Licence</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Privacy Policy</li>
            <li>Copyright</li>
            <li>Email Address</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>(406) 555-0120</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>Hey@boostit.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="mt-1 h-4 w-4 text-blue-600" />
              <span>
                2927 Westheimer Rd. Santa Ana,
                <br />
                Illinois 85486
              </span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
