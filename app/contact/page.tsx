import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <section className="relative w-full h-96 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Contact Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Send us a message and we&apos;ll
              respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Info Cards */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "info@ameyaamedia.com",
                link: "mailto:info@ameyaamedia.com",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 96000 51312",
                link: "tel:+919600051312",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Chennai, India 600 116",
                link: "#",
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link key={index} href={item.link}>
                  <div className="bg-card p-8 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground text-center mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-center">
                      {item.content}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Find Us
            </h2>
            <div className="rounded-lg overflow-hidden border border-border h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.015635753126!2d80.23048!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f87f5f5f5f5%3A0x1234567890abcdef!2sChennai%2C%20Tamil%20Nadu%20600116!5e0!3m2!1sen!2sin!4v1234567890123"
              ></iframe>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Visit our office in Chennai, India. We&apos;re open Monday through
              Friday, 10 AM to 6 PM IST.
            </p>
          </div>
        </section>

        {/* FAQ Section 
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What's the best way to reach you?",
                answer:
                  "You can reach us via email at hello@ameyaa.com for general inquiries, or use the contact form above. We typically respond within 24-48 business hours.",
              },
              {
                question:
                  "Do you accept collaboration and partnership inquiries?",
                answer:
                  "Absolutely! We're always interested in exploring meaningful collaborations. Please mention your inquiry in the contact form and we'll be in touch.",
              },
              {
                question: "Can I sponsor content or advertise on the platform?",
                answer:
                  "Yes, we offer sponsorship and advertising opportunities. Please reach out with details about your brand, and we'll discuss potential partnerships.",
              },
              {
                question: "How can I contribute to the blog?",
                answer:
                  "We accept guest posts and contributions from our community. If you're interested, please send us your pitch with a brief bio and topic idea.",
              },
              {
                question: "What's your response time for inquiries?",
                answer:
                  "We aim to respond to all inquiries within 24-48 business hours. During peak times, it may take up to 3 business days.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>*/}

        {/* CTA Section */}
        <section className="bg-muted/30 p-12 rounded-lg text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Whether you have a question about our
            content, want to collaborate, or just want to say hello, we&apos;re
            here for you.
          </p>
          <Link href="#contact-form">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </section>
      </div>
    </div>
  );
}
