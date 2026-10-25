import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  { id: "introduction", number: "01", title: 'Introduction' },
  { id: "about-handil", number: "02", title: 'About Handil' },
  { id: "age-eligibility", number: "03", title: 'Age Eligibility' },
  { id: "account-registration-and-security", number: "04", title: 'Account Registration and Security' },
  { id: "acceptable-use", number: "05", title: 'Acceptable Use' },
  { id: "messages-and-user-content", number: "06", title: 'Messages and User Content' },
  { id: "message-encryption-and-recovery", number: "07", title: 'Message Encryption and Recovery' },
  { id: "contact-permissions", number: "08", title: 'Contact Permissions' },
  { id: "optional-birthday-reminders", number: "09", title: 'Optional Birthday Reminders' },
  { id: "privacy-and-personal-data", number: "10", title: 'Privacy and Personal Data' },
  { id: "account-deletion", number: "11", title: 'Account Deletion' },
  { id: "account-deletion-and-privacy-requests-without-signing-in", number: "12", title: 'Account Deletion and Privacy Requests Without Signing In' },
  { id: "reporting-problems-and-grievances", number: "13", title: 'Reporting Problems and Grievances' },
  { id: "account-restriction-and-termination", number: "14", title: 'Account Restriction and Termination' },
  { id: "intellectual-property", number: "15", title: 'Intellectual Property' },
  { id: "service-availability", number: "16", title: 'Service Availability' },
  { id: "future-services-and-pricing", number: "17", title: 'Future Services and Pricing' },
  { id: "disclaimer-and-liability", number: "18", title: 'Disclaimer and Liability' },
  { id: "changes-to-these-terms", number: "19", title: 'Changes to These Terms' },
  { id: "governing-law-and-jurisdiction", number: "20", title: 'Governing Law and Jurisdiction' },
  { id: "contact-information", number: "21", title: 'Contact Information' },
];

function LegalHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-5 pb-16 pt-20 text-white sm:px-6 md:px-12 md:pb-20 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1260px]">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Trust &amp; Transparency</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Terms &amp; Conditions</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">The rules and responsibilities that help keep Handil simple, secure, and respectful for everyone.</p>
        <div className="mt-7 flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
          <span className="rounded-full border border-white/20 px-3 py-1.5">Last updated: 24 October 2026</span>
        </div>
      </div>
    </header>
  );
}

function LegalSection({ id, number, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-b border-slate-200 pb-11 pt-2 last:border-b-0">
      <div className="mb-6 flex items-start gap-4">
        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sm font-bold text-sky-700">{number}</span>
        <h2 id={`${id}-title`} className="pt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      </div>
      <div className="space-y-5 text-[15px] leading-8 text-slate-600 sm:text-base">{children}</div>
    </section>
  );
}

function TermsNavigation({ activeId }) {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Terms & Conditions sections" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="mb-4 px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">On this page</p>
        <div className="space-y-0.5">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={activeId === s.id ? "location" : undefined} className={`block rounded-lg px-3 py-2 text-sm leading-5 transition ${activeId === s.id ? "bg-sky-50 font-semibold text-sky-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"}`}>
              {s.number}. {s.title}
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

export default function Terms() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <LegalHeader />
      <div className="mx-auto max-w-[1260px] px-5 pb-24 pt-10 sm:px-6 md:px-12 md:pt-14">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link to="/" className="hover:text-sky-700">Home</Link><span aria-hidden="true">/</span><span className="font-medium text-slate-900">Terms &amp; Conditions</span>
          <span className="ml-auto"><Link to="/privacy-policy" className="font-medium text-sky-700 hover:underline">Privacy Policy →</Link></span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[265px_minmax(0,1fr)]">
          <TermsNavigation activeId={activeId} />
          <div className="min-w-0">
            <label htmlFor="terms-section" className="mb-2 block text-sm font-semibold text-slate-700 lg:hidden">Jump to a section</label>
            <select id="terms-section" value={activeId} onChange={(e) => { const id = e.target.value; setActiveId(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="mb-8 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 lg:hidden">
              {SECTIONS.map((s) => <option key={s.id} value={s.id}>{s.number}. {s.title}</option>)}
            </select>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 md:p-12">
              <div className="mb-12 border-b border-slate-200 pb-9">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Handil · Terms &amp; Conditions</p>
                <p className="mt-4 text-base leading-8 text-slate-600">These Terms govern your use of Handil, operated by SHORI TECHNOLOGIES PRIVATE LIMITED.</p>
                <p className="mt-3 text-sm text-slate-500">For questions about these Terms: <a className="font-semibold text-sky-700 hover:underline" href="mailto:connect@handilapp.com">connect@handilapp.com</a></p>
              </div>
              <div className="space-y-11">
                <LegalSection id="introduction" number="01" title="Introduction">
                <p>Welcome to Handil.</p>
                <p>Handil is a messaging and information-management platform operated by <strong className="font-semibold text-slate-900">SHORI TECHNOLOGIES PRIVATE LIMITED</strong>, a company registered in India.</p>
                <p>These Terms &amp; Conditions ("Terms") govern your access to and use of the Handil mobile application and associated services.</p>
                <p>By registering or using Handil, you agree to comply with these Terms.</p>
                <p>If you do not agree, please do not create an account or use the application.</p>
                </LegalSection>
                <LegalSection id="about-handil" number="02" title="About Handil">
                <p>Handil is designed to make communication simple, secure, and organized.</p>
                <p>At launch, Handil provides:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Account registration using phone-number verification.</li>
                  <li className="pl-1">One-to-one text messaging.</li>
                  <li className="pl-1">User profile creation and management.</li>
                  <li className="pl-1">Contact-related functionality.</li>
                  <li className="pl-1">Optional birthday information and reminders.</li>
                  <li className="pl-1">Available messaging and information-management features.</li>
                </ul>
                <p>Additional features may be introduced in future updates.</p>
                <p>Handil is free to use at launch. Internet and mobile network charges from your service provider may apply.</p>
                </LegalSection>
                <LegalSection id="age-eligibility" number="03" title="Age Eligibility">
                <p><strong className="font-semibold text-slate-900">Handil is intended for people aged 18 years or older.</strong></p>
                <p>Users must confirm that they are at least 18 years old during account registration.</p>
                <p>Handil does not provide a separate service or account mode for minors.</p>
                <p>You must not register or use Handil if you are under 18.</p>
                <p>The optional birthday field is provided for birthday reminders and is not used to independently verify your age.</p>
                <p>A user's age declaration may not independently establish their actual age. We may take appropriate measures if we become aware that an account does not satisfy our eligibility requirements.</p>
                </LegalSection>
                <LegalSection id="account-registration-and-security" number="04" title="Account Registration and Security">
                <p>To register, you must provide a valid mobile phone number and complete verification using a one-time password (OTP).</p>
                <p>You may also provide profile information, including:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Display name.</li>
                  <li className="pl-1">Username.</li>
                  <li className="pl-1">Profile photo.</li>
                  <li className="pl-1">Optional birthday information.</li>
                  <li className="pl-1">Other profile details supported by the app.</li>
                </ul>
                <p>You agree to provide accurate information and to use a phone number you are authorized to register.</p>
                <p>You are responsible for protecting your account and verification credentials.</p>
                <p>Never share an OTP with anyone.</p>
                <p>If you suspect unauthorized account access, contact connect@handilapp.com.</p>
                </LegalSection>
                <LegalSection id="acceptable-use" number="05" title="Acceptable Use">
                <p>You agree to use Handil lawfully and respectfully.</p>
                <p>You must not:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Send spam, fraudulent communications, or scams.</li>
                  <li className="pl-1">Harass, threaten, bully, or intimidate others.</li>
                  <li className="pl-1">Impersonate individuals or organizations.</li>
                  <li className="pl-1">Share information that violates another person's privacy or lawful rights.</li>
                  <li className="pl-1">Distribute illegal, exploitative, or otherwise prohibited content.</li>
                  <li className="pl-1">Send malicious links, malware, or harmful software.</li>
                  <li className="pl-1">Attempt unauthorized access to accounts, messages, or systems.</li>
                  <li className="pl-1">Exploit security vulnerabilities or disrupt Handil's services.</li>
                  <li className="pl-1">Violate intellectual property rights.</li>
                  <li className="pl-1">Use the service for activities prohibited by applicable law.</li>
                </ul>
                <p>Handil may take appropriate action against violations in accordance with applicable law.</p>
                </LegalSection>
                <LegalSection id="messages-and-user-content" number="06" title="Messages and User Content">
                <p>Handil enables one-to-one text messaging.</p>
                <p>You retain the rights you lawfully hold in the content you create and share.</p>
                <p>You are responsible for the content you send and the recipients to whom you send it.</p>
                <p>You grant Handil a limited, non-exclusive permission to process, transmit, store, and manage your content as necessary to provide the service, maintain security, and comply with applicable legal obligations.</p>
                <p>This permission does not transfer ownership of your messages to Handil.</p>
                <p>Recipients may retain copies of messages you have shared with them.</p>
                <p>Deleting an account does not necessarily delete content previously saved on another person's device.</p>
                </LegalSection>
                <LegalSection id="message-encryption-and-recovery" number="07" title="Message Encryption and Recovery">
                <p>Handil uses end-to-end encryption for supported chat messages.</p>
                <p>Messages are encrypted on the sender's device for the intended recipient, and encrypted messages are stored on Handil's backend infrastructure.</p>
                <p>Private keys are maintained on user devices, while public keys support encrypted communication.</p>
                <p>Handil also maintains an account-specific encrypted key backup to support key recovery when an application is reinstalled.</p>
                <p>Key recovery depends on the availability and successful restoration of the required backup and recovery material.</p>
                <p>If recovery is unsuccessful, new encryption keys may be generated, and previously encrypted messages may become unreadable on that device.</p>
                <p>Signing out on the same device does not automatically remove locally stored keys.</p>
                <p>Account deletion initiates removal of the associated encrypted key backup.</p>
                <p>Additional information about encryption and personal data processing is available in our Terms & Conditions.</p>
                </LegalSection>
                <LegalSection id="contact-permissions" number="08" title="Contact Permissions">
                <p>Handil may request access to contacts stored on your phone for contact-related functionality.</p>
                <p>Your device's contact list is processed locally and is not synchronized or uploaded to Handil servers.</p>
                <p>You can manage or disable contact permission through your phone's operating-system settings.</p>
                <p>Disabling this permission may affect contact-related features.</p>
                </LegalSection>
                <LegalSection id="optional-birthday-reminders" number="09" title="Optional Birthday Reminders">
                <p>Handil offers birthday reminders to help users remember the birthdays of their peers.</p>
                <p>Providing birthday information is optional.</p>
                <p>Users may enter a birthday without including the year. If the year is omitted, it is not stored.</p>
                <p>Users can select who is allowed to see their birthday:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Everyone.</li>
                  <li className="pl-1">Accepted Contacts.</li>
                  <li className="pl-1">Selected People Only.</li>
                  <li className="pl-1">Nobody.</li>
                </ul>
                <p><strong className="font-semibold text-slate-900">Accepted Contacts is the default birthday visibility setting.</strong></p>
                <p>Birthday reminders and the Birthdays Today feature respect these visibility settings.</p>
                <p>Selecting Nobody prevents birthday visibility and reminders from being shared with other users through this feature.</p>
                <p>Users may remove their birthday information.</p>
                </LegalSection>
                <LegalSection id="privacy-and-personal-data" number="10" title="Privacy and Personal Data">
                <p>Your use of Handil involves processing personal information.</p>
                <p>Our Terms & Conditions explains what information is collected, how it is used, how it is protected, how long it is retained, and how users can submit privacy requests.</p>
                <p>Handil does not share personal information with advertising partners at launch.</p>
                <p>Please review our Terms & Conditions before registering.</p>
                </LegalSection>
                <LegalSection id="account-deletion" number="11" title="Account Deletion">
                <p>Handil provides an account deletion option inside the app.</p>
                <p>To delete your account, navigate to:</p>
                <p><strong className="font-semibold text-slate-900">Settings → Privacy &amp; Security → Delete My Account</strong></p>
                <p>The account deletion process is designed to remove associated profile information, messages sent by the user, relevant account records, and the account's encrypted key backup.</p>
                <p>On the device used to delete the account, locally stored chats, notes, and keys are also cleared.</p>
                <p>Deletion is subject to the successful completion of the relevant operations and applicable legal retention requirements.</p>
                <p>Deletion does not automatically remove:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Messages sent by other users.</li>
                  <li className="pl-1">Copies previously saved on other people's devices.</li>
                  <li className="pl-1">Local information on another signed-in device until that device synchronizes or the application is removed.</li>
                </ul>
                <p>Further information is available in our Terms & Conditions.</p>
                </LegalSection>
                <LegalSection id="account-deletion-and-privacy-requests-without-signing-in" number="12" title="Account Deletion and Privacy Requests Without Signing In">
                <p>Users may submit account deletion and other privacy requests through:</p>
                <p><a href="https://handil.vercel.app/contact" className="font-medium text-sky-700 hover:underline">https://handil.vercel.app/contact</a></p>
                <p>Select the appropriate request category and provide the requested contact information.</p>
                <p>Submitting a form does not automatically delete an account. Requests are reviewed and handled through Handil's support process.</p>
                <p>For assistance, contact connect@handilapp.com.</p>
                </LegalSection>
                <LegalSection id="reporting-problems-and-grievances" number="13" title="Reporting Problems and Grievances">
                <p>Users may report suspected misuse, harassment, unauthorized access, privacy concerns, or technical issues through Handil's available support and grievance channels.</p>
                <p><strong className="font-semibold text-slate-900">Email:</strong> connect@handilapp.com</p>
                <p><strong className="font-semibold text-slate-900">Public Contact Page:</strong> https://handil.vercel.app/contact</p>
                <p>We will review reports and respond according to applicable legal requirements, including any shorter deadlines applicable to specific categories of complaints.</p>
                </LegalSection>
                <LegalSection id="account-restriction-and-termination" number="14" title="Account Restriction and Termination">
                <p>Handil may restrict, suspend, or terminate accounts where reasonably necessary because of:</p>
                <ul className="list-disc space-y-2 pl-6 marker:text-sky-500">
                  <li className="pl-1">Violations of these Terms.</li>
                  <li className="pl-1">Fraudulent or illegal activity.</li>
                  <li className="pl-1">Security threats.</li>
                  <li className="pl-1">Misuse of Handil services.</li>
                  <li className="pl-1">Valid legal orders or statutory obligations.</li>
                </ul>
                <p>We will provide applicable notice or review opportunities where legally required.</p>
                </LegalSection>
                <LegalSection id="intellectual-property" number="15" title="Intellectual Property">
                <p>The Handil name, branding, application software, proprietary designs, and related materials are owned by or licensed to SHORI TECHNOLOGIES PRIVATE LIMITED.</p>
                <p>You may not reproduce, distribute, or commercially exploit these materials without authorization, except where permitted by applicable law.</p>
                </LegalSection>
                <LegalSection id="service-availability" number="16" title="Service Availability">
                <p>Handil aims to provide reliable and secure services.</p>
                <p>However, temporary interruptions may occur because of maintenance, updates, network failures, infrastructure issues, or circumstances outside our reasonable control.</p>
                <p>Handil does not guarantee uninterrupted or error-free availability.</p>
                </LegalSection>
                <LegalSection id="future-services-and-pricing" number="17" title="Future Services and Pricing">
                <p>Handil is free to use at launch.</p>
                <p>We may introduce additional features, paid services, or subscriptions in the future.</p>
                <p>Applicable pricing and additional terms will be disclosed before users purchase such services.</p>
                </LegalSection>
                <LegalSection id="disclaimer-and-liability" number="18" title="Disclaimer and Liability">
                <p>Handil seeks to maintain appropriate standards of functionality, reliability, and security.</p>
                <p>To the extent permitted by applicable law, liability may be limited for losses that are remote, unforeseeable, or otherwise lawfully excludable.</p>
                <p>Nothing in these Terms excludes statutory consumer rights or liabilities that cannot lawfully be excluded.</p>
                </LegalSection>
                <LegalSection id="changes-to-these-terms" number="19" title="Changes to These Terms">
                <p>We may update these Terms to reflect changes in services, business practices, or legal obligations.</p>
                <p>Updated Terms will be made available through the application or official website.</p>
                <p>We will provide additional notice or request renewed agreement where required by law.</p>
                </LegalSection>
                <LegalSection id="governing-law-and-jurisdiction" number="20" title="Governing Law and Jurisdiction">
                <p>These Terms are governed by the laws of India.</p>
                <p>Subject to mandatory statutory jurisdictions and applicable consumer rights, disputes may be brought before the competent courts in Hyderabad, Telangana, India.</p>
                </LegalSection>
                <LegalSection id="contact-information" number="21" title="Contact Information">
                <p><strong className="font-semibold text-slate-900">Company:</strong> SHORI TECHNOLOGIES PRIVATE LIMITED</p>
                <p><strong className="font-semibold text-slate-900">Registered Address:</strong> 10 - 101/2/6 Libra Avenue, Nadergul, Rangareddy, Telangana 501510, India</p>
                <p><strong className="font-semibold text-slate-900">Website:</strong> https://handilapp.com/</p>
                <p><strong className="font-semibold text-slate-900">Support Email:</strong> connect@handilapp.com</p>
                <p><strong className="font-semibold text-slate-900">Grievance Contact:</strong> connect@handilapp.com</p>
                </LegalSection>
              </div>
              <footer className="mt-10 border-t border-slate-200 pt-7 text-sm text-slate-500">
                Handil — Built to be Simple. Secure. Organized.
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
