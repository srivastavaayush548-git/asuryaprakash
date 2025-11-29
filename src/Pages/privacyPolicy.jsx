import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-12 md:pt-14 relative">
      {/* Background */}
      <div
        className="fixed inset-0 top-12 md:top-14 -z-10 bg-[#F3F3F3]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-8">
            PRIVACY POLICY
          </h1>

          {/* Content */}
          <div className=" p-6 md:p-8 ">
            <div className="prose prose-lg max-w-none text-black space-y-6">
              <p>
                India TV Interactive Media Pvt. Ltd. (India TV) respects the privacy of it's users and is committed to protect it in all respects. The information about the user as collected by (India TV) is: (a) information supplied by users and (b) information automatically tracked while navigation (Information).
              </p>

              <p>
                By using (India TV)'s website or its services, you consent to collection, storage, and use of the personal information you provide (including any changes thereto as provided by you) for any of the services that we offer.
              </p>

              <h2 className="text-2xl font-bold text-black mt-8 mb-4">USER INFORMATION</h2>

              <p>
                To avail certain sites / services on our websites, users may be required to provide certain information for the registration process namely:- a) your name, b) email address, c) sex, d) age, e) PIN code, password etc., and / or your occupation, interests, and the like.. The Information as supplied by the users enables us to improve our sites and provide you the most user-friendly experience.
              </p>

              <p>
                All required information is service dependent and (India TV) may use the above said User information to, maintain, protect, and improve its services (including advertising services) and for developing new services
              </p>

              <p>
                Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
              </p>

              <h2 className="text-2xl font-bold text-black mt-8 mb-4">COOKIES</h2>

              <p>
                India TV includes links to other websites. Such sites are governed by their respective privacy policies, which are beyond our control. Once you leave our servers (you can tell where you are by checking the URL in the location bar on your browser), use of any information you provide is governed by the privacy policy of the operator of the site you are visiting. That policy may differ from ours. If you can't find the privacy policy of any of these sites via a link from the site's homepage, you should contact the site directly for more information.
              </p>

              <p>
                Our web servers automatically collect limited information about your computer's connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data — such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come.
              </p>

              <h2 className="text-2xl font-bold text-black mt-8 mb-4">INFORMATION SHARING</h2>

              <p>
                India TV shares the sensitive personal information with any third party without obtaining the prior consent of the User in the following limited circumstances:
              </p>

              <p>
                a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.
              </p>

              <p>
                b) India TV proposes to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
              </p>

              <h2 className="text-2xl font-bold text-black mt-8 mb-4">INFORMATION SECURITY</h2>

              <p>
                We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure or destruction of data. These include internal reviews of our data collection, storage and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store data.
              </p>

              <p>
                All information gathered on India TV is securely stored within the India TV controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access.
              </p>

              <p>
                However the internet is an ever evolving medium. We may change our privacy policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be.
              </p>

              <p>
                We use third-party advertising companies to serve ads when you visit our Web site. These companies may use information (not including your name, address, email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you. In the event you have any grievance relating to the processing of information provided by you, you may contact our write at the following address:
              </p>

              <p className="font-semibold">
                B 30 India Tv Broadcast Centre, Sector 85, Noida, UP 201 301.
              </p>

              <p>
                We request you to please provide the following information in your complaint:-
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>(a) Identification of the information provided by you</li>
                <li>(b) Clear statement as to whether the information is personal information or sensitive personal information</li>
                <li>(c) Your address, telephone number or e-mail address.</li>
                <li>(e) A statement that you have a good-faith belief that the information has been processed incorrectly or disclosed without authorization, as the case may be.</li>
                <li>(f) A statement, under penalty of perjury, that the information in the notice is accurate, and that the information being complained about belongs to you.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

