import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-[#4338CA] text-white w-full py-8">
      <div className="flex flex-col mb-8 ml-8">
        <div className="flex">
          <Film className="text-white mr-2" />
          <p className="text-2xl font-bold">Movie Z</p>
        </div>
        <p className="mb-4">© 2024 Movie Z. All Rights Reserved</p>
      </div>
      <section className="flex flex-wrap justify-between gap-12 px-8">
        <div className="flex flex-col items-start text-sm space-y-4">
          <p className="font-semibold">Contact Information</p>
          <div className="flex items-center space-x-2">
            <Mail className="text-white" />
            <div>
              <p>Email:</p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="text-white" />
            <div>
              <p>Phone:</p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>

    
        <div className="flex flex-col items-start text-sm space-y-2">
          <p className="font-semibold">Follow us</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </section>
    </div>
  );
}
