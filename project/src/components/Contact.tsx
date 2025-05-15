import React, { useState, useRef } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_tvq02xm',
        'template_dlpfiw5',
        formRef.current,
        'TE8G0w_ZT1GKOMNX1'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experts is ready to assist you with any inquiries about our services.
            Reach out to us and experience the Maxys Brokers difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-navy-900 text-white p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+971569848947</p>
                    <p className="text-gray-300 font-medium mt-1">Available 24/7 for urgent matters</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">maxysbroker99@gmail.com</p>
                    <p className="text-gray-300">ops@maxysbrokers.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Working Hours (Dubai Time)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
                <p className="text-gray-600 mt-4 font-medium">
                  Our team is reachable 24/7 for urgent inquiries and support.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Send us a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                    placeholder="Please describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 text-white py-3 px-6 rounded-md font-medium transition-colors
                    ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-red-700'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;