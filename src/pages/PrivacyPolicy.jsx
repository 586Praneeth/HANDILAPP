import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SECTIONS = [
  { id: "introduction", number: "01", title: 'Introduction' },
  { id: "information-we-collect", number: "02", title: 'Information We Collect' },
  { id: "how-we-use-personal-information", number: "03", title: 'How We Use Personal Information' },
  { id: "consent-and-user-choices", number: "04", title: 'Consent and User Choices' },
  { id: "end-to-end-encryption", number: "05", title: 'End-to-End Encryption' },
  { id: "birthday-privacy-and-reminders", number: "06", title: 'Birthday Privacy and Reminders' },
  { id: "age-eligibility", number: "07", title: 'Age Eligibility' },
  { id: "sharing-of-personal-information", number: "08", title: 'Sharing of Personal Information' },
  { id: "data-storage-and-international-processing", number: "09", title: 'Data Storage and International Processing' },
  { id: "data-retention", number: "10", title: 'Data Retention' },
  { id: "account-deletion", number: "11", title: 'Account Deletion' },
  { id: "privacy-requests-without-signing-in", number: "12", title: 'Privacy Requests Without Signing In' },
  { id: "your-privacy-rights", number: "13", title: 'Your Privacy Rights' },
  { id: "security-incidents", number: "14", title: 'Security Incidents' },
  { id: "third-party-services", number: "15", title: 'Third-Party Services' },
  { id: "changes-to-this-privacy-policy", number: "16", title: 'Changes to This Privacy Policy' },
  { id: "contact-information", number: "17", title: 'Contact Information' },
];

function LegalHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-5 pb-16 pt-20 text-white sm:px-6 md:px-12 md:pb-20 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-[1260px]">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Trust &amp; Transparency</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Privacy Policy</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">How Handil handles personal data, protects conversations, and helps you control your information.</p>
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

function PrivacyNavigation({ activeId }) {
  return (
    <aside className="hidden lg:block">
      <nav aria-label="Privacy policy sections" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
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

export default function PrivacyPolicy() {
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
          <Link to="/" className="hover:text-sky-700">Home</Link><span aria-hidden="true">/</span><span className="font-medium text-slate-900">Privacy Policy</span>
          <span className="ml-auto"><Link to="/terms" className="font-medium text-sky-700 hover:underline">Terms &amp; Conditions →</Link></span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[265px_minmax(0,1fr)]">
          <PrivacyNavigation activeId={activeId} />
          <div className="min-w-0">
            <label htmlFor="privacy-section" className="mb-2 block text-sm font-semibold text-slate-700 lg:hidden">Jump to a section</label>
            <select id="privacy-section" value={activeId} onChange={(e) => { const id = e.target.value; setActiveId(id); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }} className="mb-8 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 lg:hidden">
              {SECTIONS.map((s) => <option key={s.id} value={s.id}>{s.number}. {s.title}</option>)}
            </select>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9 md:p-12">
              <div className="mb-12 border-b border-slate-200 pb-9">
                <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Handil · Privacy Policy</p>
                <p className="mt-4 text-base leading-8 text-slate-600">Handil is operated by SHORI TECHNOLOGIES PRIVATE LIMITED. This is the complete Privacy Policy for our application and associated services.</p>
                <p className="mt-3 text-sm text-slate-500">For privacy inquiries: <a className="font-semibold text-sky-700 hover:underline" href="mailto:connect@handilapp.com">connect@handilapp.com</a></p>
              </div>
              <div className="space-y-11">
                <LegalSection id="introduction" number="01" title={'Introduction'}>
              <p>Handil is a messaging and information-management application operated by <strong className="font-semibold text-slate-900">SHORI TECHNOLOGIES PRIVATE LIMITED</strong>, a company registered in India.</p>
              <p>We believe users should understand how their personal information is collected, used, protected, and deleted.</p>
              <p>This Privacy Policy explains Handil&#x27;s personal data practices and the choices available to users.</p>
              <p>It applies to the Handil mobile application and associated services.</p>
              <p>This Policy also explains relevant privacy practices for the official Handil website, including website requests and other forms, where applicable. Website visitors should also review any separate cookie or analytics notice provided at the point of collection.</p>
              <p>Our approach is to explain what information is needed for a feature, why it is needed, and the available ways to control it. The protections and choices described below depend on the actual feature and relevant account settings.</p>
              <p>For privacy-related questions, contact <strong className="font-semibold text-slate-900">connect@handilapp.com</strong>.</p>
                </LegalSection>
                <LegalSection id="information-we-collect" number="02" title={'Information We Collect'}>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.1 Account Registration</h3>
              <p>To create a Handil account, you must provide a mobile phone number.</p>
              <p>Your phone number is used to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Create and identify your account.</li><li className="pl-1">Deliver and verify one-time passwords.</li><li className="pl-1">Authenticate your account.</li><li className="pl-1">Support account security and account-related functionality.</li></ul>
              <p>Handil uses MSG91 to support OTP verification.</p>
              <p>Your phone number is required for registration even if you choose to connect with other people through a username or QR code. The ability to connect without making your phone number central to the interaction does not mean Handil can register your account without a phone number.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.2 Profile Information</h3>
              <p>Handil processes profile information provided through its application, including:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Display name.</li><li className="pl-1">Username.</li><li className="pl-1">Profile photo.</li><li className="pl-1">Bio, where provided.</li><li className="pl-1">Optional birthday information.</li><li className="pl-1">Other account preferences and settings.</li></ul>
              <p>Profile information may be visible to other users according to the relevant application features and settings.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.3 Optional Birthday Information</h3>
              <p>Handil provides an optional birthday-reminder feature.</p>
              <p>You can provide your birthday to help permitted peers remember your birthday.</p>
              <p>You may provide the day and month without entering a year.</p>
              <p>If you turn off Include Year, your birth year is not stored, and your age is not displayed through the birthday feature.</p>
              <p>Providing birthday information is optional and is not required to use Handil&#x27;s core messaging service.</p>
              <p>You can remove your birthday information through the available profile settings.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.4 Messages and Conversation Information</h3>
              <p>When you use Handil, the service processes information necessary to provide one-to-one text messaging.</p>
              <p>This may include:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Encrypted chat messages.</li><li className="pl-1">Sender and recipient identifiers.</li><li className="pl-1">Message timestamps.</li><li className="pl-1">Message delivery information.</li><li className="pl-1">Conversation-related metadata.</li></ul>
              <p>Messages are encrypted on the sender&#x27;s device for the intended recipient.</p>
              <p>Supabase stores encrypted message content, rather than ordinary readable chat text.</p>
              <p>Message metadata and account information are distinct from the encrypted message content and may be processed for service operation.</p>
              <p><strong className="font-semibold text-slate-900">Understanding the difference:</strong> message content is the text that users exchange. Service information, such as account identifiers, timestamps and delivery status, helps route and operate communications and is not automatically protected by the same end-to-end encryption as message text.</p>
              <p>Conversation-related information is processed for the service purposes described in this Policy and any other applicable lawful purposes.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.5 Device Contacts</h3>
              <p>Handil may request permission to access contacts stored on your phone.</p>
              <p>Contacts are processed locally on your device to support contact-related functionality.</p>
              <p><strong className="font-semibold text-slate-900">Handil does not synchronize or upload your phone&#x27;s contact list to its servers.</strong></p>
              <p>You can allow, deny, or withdraw contact permission through your device settings.</p>
              <p>Denying contact permission does not, by itself, require you to upload your address book to continue using Handil. Some contact-dependent features may be unavailable if permission is denied. You can revisit the permission decision through your phone&#x27;s operating-system settings.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.6 Device, Security, and Technical Information</h3>
              <p>Handil and its infrastructure providers may process technical information necessary to operate and secure the service.</p>
              <p>Depending on configuration, this may include:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Device and application identifiers.</li><li className="pl-1">Device operating system and app version.</li><li className="pl-1">Network connection information.</li><li className="pl-1">IP addresses.</li><li className="pl-1">Authentication events.</li><li className="pl-1">Push-notification tokens.</li><li className="pl-1">Security records and system logs.</li></ul>
              <p>Handil does not currently use separately identified third-party product analytics or crash-reporting tools.</p>
              <p>Infrastructure providers may still generate operational and security records.</p>
              <p><strong className="font-semibold text-slate-900">Website usage and analytics:</strong> The Handil website may use analytics technologies when enabled. Information about any active analytics service, its purposes, and available privacy choices will be provided through this Policy or an accompanying website notice, as applicable.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">2.7 Support and Complaint Information</h3>
              <p>When you contact Handil or submit a request, we may collect:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Your name.</li><li className="pl-1">Email address.</li><li className="pl-1">Request or complaint description.</li><li className="pl-1">Relevant account information.</li><li className="pl-1">Supporting details that you choose to provide.</li></ul>
              <p>We use this information to investigate and respond to requests.</p>
                </LegalSection>
                <LegalSection id="how-we-use-personal-information" number="03" title={'How We Use Personal Information'}>
              <p>We process personal information for the following purposes:</p>
              <p><strong className="font-semibold text-slate-900">Account Creation and Authentication</strong></p>
              <p>To register accounts, verify mobile numbers, and support sign-in.</p>
              <p><strong className="font-semibold text-slate-900">Messaging</strong></p>
              <p>To transmit and deliver messages between users.</p>
              <p><strong className="font-semibold text-slate-900">Profile Management</strong></p>
              <p>To manage usernames, display names, profile photos, bios, and preferences.</p>
              <p><strong className="font-semibold text-slate-900">Birthday Reminders</strong></p>
              <p>To provide optional birthday visibility and reminder functionality.</p>
              <p><strong className="font-semibold text-slate-900">Contact Features</strong></p>
              <p>To support locally processed contact-related functionality.</p>
              <p><strong className="font-semibold text-slate-900">Account Security</strong></p>
              <p>To help prevent unauthorized access, suspicious activity, and misuse.</p>
              <p><strong className="font-semibold text-slate-900">Technical Operations</strong></p>
              <p>To operate, maintain, and troubleshoot the application.</p>
              <p><strong className="font-semibold text-slate-900">Customer Support and Grievances</strong></p>
              <p>To investigate issues, manage requests, and communicate responses.</p>
              <p><strong className="font-semibold text-slate-900">Legal Compliance</strong></p>
              <p>To fulfill applicable legal obligations and valid lawful requests.</p>
              <p>We will provide further notice and obtain additional consent where required before introducing unrelated processing purposes.</p>
              <p>Information used for one purpose is not automatically permission to use it for a different, unrelated purpose. Where a new feature changes the types of information collected or how it is used, Handil will assess whether updated notice and consent are required before enabling that processing.</p>
                </LegalSection>
                <LegalSection id="consent-and-user-choices" number="04" title={'Consent and User Choices'}>
              <p>Where consent is required, Handil seeks consent through an appropriate affirmative action for the relevant purpose.</p>
              <p>Users may exercise choices through application settings and available privacy controls.</p>
              <p>For example:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Phone contact permission can be managed through device settings.</li><li className="pl-1">Birthday information is optional.</li><li className="pl-1">Birthday visibility can be adjusted.</li><li className="pl-1">Birthday information can be removed.</li><li className="pl-1">Account deletion can be initiated within the application.</li></ul>
              <p>You may contact connect@handilapp.com regarding applicable privacy rights and consent withdrawal.</p>
              <p>Withdrawal of consent may affect functionality that depends on the information concerned.</p>
              <p><strong className="font-semibold text-slate-900">How choices work in practice:</strong> you may change device contact permissions in device settings and change or remove optional birthday information through the available profile controls. To request assistance with another privacy choice or withdrawal of consent, contact connect@handilapp.com.</p>
              <p>Withdrawing an optional permission may stop the related feature from working. It does not necessarily delete records already processed lawfully, information required for another valid purpose, or information retained to meet legal obligations. A request for erasure or account deletion is handled separately as described below.</p>
                </LegalSection>
                <LegalSection id="end-to-end-encryption" number="05" title={'End-to-End Encryption'}>
              <p>Handil uses end-to-end encryption for supported text messages.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">5.1 Message Encryption</h3>
              <p>Messages are encrypted on the sender&#x27;s phone for the intended recipient.</p>
              <p>The encrypted messages are stored through Handil&#x27;s backend infrastructure.</p>
              <p>The private key is maintained on the user&#x27;s device, and a public key is stored to support encrypted messaging.</p>
              <p>As a result, Handil staff cannot read ordinary message text directly from the encrypted records in the Supabase database.</p>
              <p><strong className="font-semibold text-slate-900">What encryption covers:</strong> this statement describes supported text-message content stored as ciphertext. It should not be read as a claim that all account information, profile information, message metadata, logs, or profile photos are end-to-end encrypted.</p>
              <p><strong className="font-semibold text-slate-900">Important limitation:</strong> The confidentiality of messages also depends on device security, encryption-key management, and the backup and recovery processes described below. The fact that stored messages are encrypted does not, by itself, establish who can access or restore encryption keys.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">5.2 Encryption Key Backup</h3>
              <p>Handil maintains an account-specific encrypted backup of encryption keys to support restoration after reinstalling the application.</p>
              <p>The backup is separate from the locally stored keys.</p>
              <p>An encrypted backup may help a user regain access to keys after reinstalling the application, but the security properties of that backup depend on how the backup is protected and how recovery is authorized. A server-stored backup is not equivalent to a guarantee that only the user can decrypt it.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">5.3 Signing Out and Reinstalling</h3>
              <p>Signing out on the same device does not remove the locally stored encryption keys.</p>
              <p>If you reinstall Handil and the encryption-key backup cannot be restored, new keys may be generated.</p>
              <p>Previously encrypted messages may then be unreadable on that device.</p>
              <p>Reinstalling Handil, changing devices, or losing device-held keys may affect your ability to read older messages. Restoration of message access is not guaranteed in every circumstance.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">5.4 Account Deletion</h3>
              <p>When you delete your account, Handil&#x27;s deletion process includes removal of your encrypted key backup.</p>
              <p>Locally stored keys on the phone used to delete the account are cleared.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">5.5 Profile Photos</h3>
              <p>Profile photos are stored separately in Supabase Storage.</p>
              <p><strong className="font-semibold text-slate-900">Profile photos are not covered by the end-to-end encryption applied to text messages.</strong></p>
              <p>They are handled according to the service&#x27;s storage access controls and applicable security measures.</p>
                </LegalSection>
                <LegalSection id="birthday-privacy-and-reminders" number="06" title={'Birthday Privacy and Reminders'}>
              <p>Handil offers a birthday-reminder feature that users can choose to enable.</p>
              <p>Providing birthday information is voluntary.</p>
              <p>You can choose whether to include the year.</p>
              <p>If Include Year is turned off, Handil does not store the birth year.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">Birthday Visibility Settings</h3>
              <p>You can choose who is permitted to see your birthday:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1"><strong className="font-semibold text-slate-900">Everyone:</strong> Available to users permitted under this visibility setting.</li><li className="pl-1"><strong className="font-semibold text-slate-900">Accepted Contacts:</strong> Available to your accepted contacts.</li><li className="pl-1"><strong className="font-semibold text-slate-900">Selected People Only:</strong> Available only to the people you select.</li><li className="pl-1"><strong className="font-semibold text-slate-900">Nobody:</strong> Your birthday is not shared with other users through this feature.</li></ul>
              <p>Accepted Contacts is the default setting.</p>
              <p>Birthday reminders and the Birthdays Today list are shown only to users permitted by your selected visibility setting.</p>
              <p>Selecting Nobody disables birthday sharing and reminders for other users.</p>
              <p>You can change your birthday visibility setting or remove your birthday information.</p>
              <p>The birthday field is not used as an independent verification that an account holder is 18 or older.</p>
              <p><strong className="font-semibold text-slate-900">What your selection changes:</strong> birthday visibility determines which other users can see your shared birthday through this feature and who may receive the corresponding reminders. Choosing Nobody turns off birthday sharing through this feature; it is distinct from deleting the birthday value from your profile, which you may do separately.</p>
                </LegalSection>
                <LegalSection id="age-eligibility" number="07" title={'Age Eligibility'}>
              <p>Handil is intended for users aged 18 and older.</p>
              <p>Users must confirm during registration that they are at least 18.</p>
              <p>Handil does not offer a separate account mode for minors.</p>
              <p>The optional birthday field is not an age-verification mechanism.</p>
              <p>If we become aware that an account does not satisfy our age eligibility requirements, we may take appropriate action consistent with applicable law.</p>
                </LegalSection>
                <LegalSection id="sharing-of-personal-information" number="08" title={'Sharing of Personal Information'}>
              <p>We process and share personal information only as needed for identified service purposes or as otherwise permitted or required by law.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.1 Supabase</h3>
              <p>Handil uses Supabase for application infrastructure, database services, and file storage.</p>
              <p>The primary database is located in:</p>
              <p><strong className="font-semibold text-slate-900">Canada (Central) — AWS ca-central-1</strong></p>
              <p>The Handil mobile application and admin panel use the same Supabase project.</p>
              <p>The information processed through Supabase depends on the application&#x27;s implementation and the relevant infrastructure services.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.2 MSG91</h3>
              <p>Handil uses MSG91 for OTP verification.</p>
              <p>Your mobile phone number and relevant verification information are provided to MSG91 as necessary to deliver verification services.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.3 Other Users</h3>
              <p>Other users may receive information that you intentionally share through Handil.</p>
              <p>They may also see profile information made visible by the application.</p>
              <p>Birthday information is shared according to your chosen birthday visibility settings.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.4 Advertising Partners</h3>
              <p><strong className="font-semibold text-slate-900">Handil does not share your personal information with advertising partners.</strong></p>
              <p>Handil does not use personal information for third-party targeted advertising at launch.</p>
              <p>This statement concerns Handil&#x27;s present advertising practices. It does not prevent service providers such as infrastructure and verification partners from processing information needed to deliver their contracted services. A future change to advertising-related processing would require an updated disclosure and any consent required by applicable law.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.5 Legal Authorities</h3>
              <p>Information may be disclosed when required by applicable law, valid legal process, or lawful orders of competent authorities.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">8.6 Business Transactions</h3>
              <p>If Handil undergoes a merger, acquisition, or restructuring, relevant information may be transferred where legally permitted and subject to applicable requirements.</p>
                </LegalSection>
                <LegalSection id="data-storage-and-international-processing" number="09" title={'Data Storage and International Processing'}>
              <p>Handil&#x27;s primary Supabase database is hosted in Canada (Central), AWS region ca-central-1.</p>
              <p>This means account and messaging-related information processed through that database may be stored outside India.</p>
              <p>Additional processing may occur through relevant infrastructure and verification service providers, depending on their service arrangements.</p>
              <p>We will comply with applicable requirements concerning international personal data processing and transfers.</p>
              <p>The location of the primary database does not necessarily establish the location of every system that processes data. Verification messages, service logs, backups and other infrastructure operations may involve additional providers or locations depending on configuration.</p>
                </LegalSection>
                <LegalSection id="data-retention" number="10" title={'Data Retention'}>
              <p>Handil stores account information and messages to provide its services.</p>
              <p>Account-related data and messages generally remain stored until the relevant account is deleted or an applicable request is reviewed and handled.</p>
              <p>Handil does not apply an additional automatic expiration timer to chats.</p>
              <p>Temporary OTP codes are used for sign-in and are not retained as part of a user&#x27;s ongoing account profile.</p>
              <p>Database backups and system logs are retained according to the applicable Supabase service plan, project configuration, and relevant legal obligations.</p>
              <p>Where required by law, certain information may be preserved for a legally mandated period.</p>
              <p><strong className="font-semibold text-slate-900">What retention means for users:</strong> removing a message from one device, deleting an account, and erasing all copies of related information are different actions. Data already delivered to a recipient&#x27;s device may remain under that person&#x27;s control, and backup copies or records subject to a lawful retention obligation may not be removed immediately.</p>
                </LegalSection>
                <LegalSection id="account-deletion" number="11" title={'Account Deletion'}>
              <p>Handil provides an in-app Delete Account feature.</p>
              <p>You can access it through:</p>
              <p><strong className="font-semibold text-slate-900">Settings → Privacy &amp; Security → Delete My Account</strong></p>
              <p>When account deletion is successfully completed, the process is designed to remove:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Profile information, including name, username, phone number, bio, and birthday.</li><li className="pl-1">Profile photo, subject to successful removal of the stored file.</li><li className="pl-1">Messages sent by the user.</li><li className="pl-1">Message reactions associated with the user.</li><li className="pl-1">Block records.</li><li className="pl-1">Scheduled messages.</li><li className="pl-1">Connect code.</li><li className="pl-1">Signed-in device record.</li><li className="pl-1">Push-notification token.</li><li className="pl-1">Feedback and analytics records associated with the user.</li><li className="pl-1">Reports filed by the user or filed about the user.</li><li className="pl-1">The account&#x27;s encrypted key backup.</li></ul>
              <p>The application also clears local chats, notes, and encryption keys from the device on which account deletion is initiated.</p>
              <p>Deletion of individual records and files is subject to successful completion of the relevant operations.</p>
              <h3 className="pt-3 text-lg font-semibold tracking-tight text-slate-900">What Account Deletion Does Not Automatically Remove</h3>
              <p>Deleting your Handil account does not necessarily remove:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Messages sent by other people.</li><li className="pl-1">Copies of messages already saved on recipients&#x27; devices.</li><li className="pl-1">Local information stored on another device until that device opens Handil again, synchronizes, or the application is removed.</li><li className="pl-1">Records that must be retained under applicable law.</li></ul>
              <p>If deletion fails or is incomplete, users may contact connect@handilapp.com for assistance.</p>
              <p><strong className="font-semibold text-slate-900">Before you delete:</strong> account deletion can affect access to your profile, saved information, encrypted key backup and local messages on the device where deletion is initiated. It does not guarantee that messages previously received and saved by other people will disappear from their devices. If you are uncertain about what will be removed, contact the support team before proceeding.</p>
                </LegalSection>
                <LegalSection id="privacy-requests-without-signing-in" number="12" title={'Privacy Requests Without Signing In'}>
              <p>You can submit a privacy or account-related request without being signed in.</p>
              <p>Visit:</p>
              <p><a href="https://handil.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="font-semibold text-sky-700 hover:underline">https://handil.vercel.app/contact</a></p>
              <p>Select either:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Delete my account.</li><li className="pl-1">Something else.</li></ul>
              <p>You will be asked to provide your name, email address, and a description of your request.</p>
              <p>Requests are reviewed through Handil&#x27;s administrative Contact queue.</p>
              <p>Submitting a request through this form does not automatically delete an account.</p>
              <p>We may need to verify account ownership before processing requests involving personal information or account deletion.</p>
              <p>Identity verification helps reduce the risk of information being disclosed, changed, or deleted at the request of someone who does not control the relevant account. We may ask for information reasonably necessary to verify ownership and process the request.</p>
              <p>Handil&#x27;s stated support target is to respond to applicable privacy requests within 30 days, subject to any shorter or otherwise mandatory legal timeframe.</p>
              <p>You may also contact:</p>
              <p><strong className="font-semibold text-slate-900">connect@handilapp.com</strong></p>
                </LegalSection>
                <LegalSection id="your-privacy-rights" number="13" title={'Your Privacy Rights'}>
              <p>Depending on applicable law and the commencement of relevant legal provisions, you may have rights to:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-sky-500"><li className="pl-1">Request information about personal data processed about you.</li><li className="pl-1">Request correction or updating of inaccurate information.</li><li className="pl-1">Request erasure of eligible personal data.</li><li className="pl-1">Withdraw consent where applicable.</li><li className="pl-1">Submit grievances concerning personal data processing.</li><li className="pl-1">Exercise other rights provided by applicable law.</li></ul>
              <p>To submit a privacy request, use the public Contact page or email connect@handilapp.com.</p>
              <p>We may take reasonable steps to verify your identity before processing the request.</p>
              <p>When you submit a request, please describe the action you are asking Handil to take and, where appropriate, identify the affected account. Handil will review the request in light of applicable rights, lawful exceptions, and any necessary identity checks.</p>
              <p>Depending on the request, the outcome may include providing information, correcting eligible account data, deleting eligible data, or explaining why a requested action cannot be completed.</p>
                </LegalSection>
                <LegalSection id="security-incidents" number="14" title={'Security Incidents'}>
              <p>Handil takes security incidents seriously.</p>
              <p>If we identify an incident affecting personal information, we will investigate, take appropriate remedial action, and notify users or competent authorities where required by applicable law.</p>
              <p>Notifications will be provided in accordance with applicable statutory requirements.</p>
              <p>A security report can be submitted to connect@handilapp.com. Include a clear description of the issue and any relevant information you can share safely. Please do not send passwords, one-time passwords, private encryption keys, or sensitive chat contents when reporting a concern.</p>
              <p>Where an incident creates a legal duty to notify affected individuals or authorities, Handil will follow the applicable notification requirements. Not every technical fault constitutes a reportable personal-data breach.</p>
                </LegalSection>
                <LegalSection id="third-party-services" number="15" title={'Third-Party Services'}>
              <p>Handil uses the following identified providers:</p>
              <p><strong className="font-semibold text-slate-900">Supabase:</strong> Application infrastructure, database, and storage.</p>
              <p><strong className="font-semibold text-slate-900">MSG91:</strong> Mobile OTP verification and delivery.</p>
              <p>Relevant providers may process information necessary to deliver their services.</p>
              <p>Handil remains responsible for meeting its applicable legal obligations concerning personal data processing.</p>
              <p>Service providers may have access to specific categories of data required to supply infrastructure or verification services. This does not mean every provider has access to readable private-message content. The information available to each provider depends on its role, technical permissions, and the actual configuration of Handil&#x27;s systems.</p>
                </LegalSection>
                <LegalSection id="changes-to-this-privacy-policy" number="16" title={'Changes to This Privacy Policy'}>
              <p>We may update this Privacy Policy to reflect changes in our services, features, security practices, infrastructure, or legal requirements.</p>
              <p>Updated versions will be made available through the Handil application or official website.</p>
              <p>We will provide additional notice or request consent where required by law.</p>
              <p>The publication date and last-updated date help users identify the current version. When a change is material, Handil may use an appropriate in-app notice, website notice, or another legally sufficient method to bring it to users&#x27; attention.</p>
                </LegalSection>
                <LegalSection id="contact-information" number="17" title={'Contact Information'}>
              <p><strong className="font-semibold text-slate-900">Legal Entity:</strong> SHORI TECHNOLOGIES PRIVATE LIMITED</p>
              <p><strong className="font-semibold text-slate-900">Registered Address:</strong> 10 - 101/2/6 Libra Avenue, Nadergul, Rangareddy, Telangana 501510, India</p>
              <p><strong className="font-semibold text-slate-900">Website:</strong> <a href="https://handilapp.com/" className="text-sky-700 hover:underline">https://handilapp.com/</a></p>
              <p><strong className="font-semibold text-slate-900">Support and Privacy Contact:</strong> connect@handilapp.com</p>
              <p><strong className="font-semibold text-slate-900">Privacy Request Page:</strong> <a href="https://handil.vercel.app/contact" target="_blank" rel="noopener noreferrer" className="text-sky-700 hover:underline">https://handil.vercel.app/contact</a></p>
              <p><strong className="font-semibold text-slate-900">Privacy and Grievance Contact:</strong> <a href="mailto:connect@handilapp.com" className="font-medium text-sky-700 hover:underline">connect@handilapp.com</a></p>
              <p>Users may also exercise applicable rights to complain or appeal before competent authorities.</p>
                </LegalSection>
              </div>
              <footer className="mt-10 border-t border-slate-200 pt-7 text-sm text-slate-500">
                Handil — Every message reflects your intention. Every byte of your data is under your control.
              </footer>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
