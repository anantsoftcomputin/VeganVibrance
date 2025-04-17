"use client";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ajaxCall from "@/helpers/ajaxCall";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  MapPin,
  ArrowRight,
  Smartphone,
  Leaf,
  Utensils,
  Users,
  ChefHat,
  HeartPulse,
} from "lucide-react";

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await ajaxCall("/message/message/", {
        method: "POST",
        data: { ...data, site: "3" },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Message sent successfully! 🌱");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="py-12 min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="relative py-16 sm:py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block border border-green-600 py-1 px-3 rounded-full bg-gradient-to-br from-green-700 via-green-600 to-green-700 bg-clip-text text-transparent font-medium text-sm mb-4">
              CONNECT WITH US
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
              Get Personalized Vegan Lifestyle Guidance
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our plant-based nutritionists are here to help you transition to
              and thrive on a vegan diet with delicious, nourishing recipes.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="md:col-span-7 bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-500 hover:shadow-xl border border-green-100">
              <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 text-green-600 mr-3" />
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <Controller
                        name="name"
                        control={control}
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            id="name"
                            className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-colors"
                            placeholder="Your name"
                          />
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="email"
                            id="email"
                            className="pl-10 w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-colors"
                            placeholder="your@email.com"
                          />
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    What can we help with?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Utensils className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                      name="subject"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          id="subject"
                          className="pl-10 w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-colors"
                          placeholder="Meal planning, nutrition advice, etc."
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="message"
                        rows="5"
                        className="w-full py-3 px-4 bg-gray-50 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-green-300 transition-colors"
                        placeholder="Tell us about your plant-based journey..."
                      />
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            <div className="md:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-gray-800 transform transition-all duration-500 hover:shadow-xl border border-green-100">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-3" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-green-600 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">
                        Email our nutrition team
                      </p>
                      <a
                        href="mailto:nourish@veganvibrance.com"
                        className="text-gray-700 hover:underline"
                      >
                        nourish@veganvibrance.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-green-600 rounded-full mr-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">
                        For urgent inquiries
                      </p>
                      <a
                        href="tel:+91 96385 44455"
                        className="text-gray-700 hover:underline"
                      >
                        +91 96385 44455
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-green-600 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Visit our office</p>
                      <address className="not-italic text-gray-700">
                        Alkapuri, Vadodara, Gujarat, India 390007
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 transform transition-all duration-500 hover:shadow-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <Leaf className="h-6 w-6 text-green-600 mr-3" />
                  Vegan Living FAQs
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href=""
                      className="flex items-center text-gray-700 hover:text-green-700 group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500 transform transition-transform group-hover:translate-x-1" />
                      <span>Transitioning to a plant-based diet</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center text-gray-700 hover:text-green-700 group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500 transform transition-transform group-hover:translate-x-1" />
                      <span>Meeting nutritional needs on a vegan diet</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center text-gray-700 hover:text-green-700 group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500 transform transition-transform group-hover:translate-x-1" />
                      <span>Vegan meal planning for families</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center text-gray-700 hover:text-green-700 group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500 transform transition-transform group-hover:translate-x-1" />
                      <span>Sustainable and ethical eating choices</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg p-6 overflow-hidden transform transition-all duration-500 hover:shadow-xl border border-green-100">
            <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-green-600 mr-3" />
              Find Us
            </h3>
            <div className="h-80 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
              <iframe
                title="Vegan Vibrance Kitchen"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.169202432397!2d73.16878167596472!3d22.309439742562773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5873e594259%3A0xda3dc91c20f4beec!2sAnant%20Soft%20Computing!5e0!3m2!1sen!2sin!4v1731308281495!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
