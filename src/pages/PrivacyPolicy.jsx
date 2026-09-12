

const EFFECTIVE_DATE = "September 12, 2026";
const PRIVACY_EMAIL = "connect@handilapp.com";

const RETENTION_ITEMS = [
  {
    data: "Early-access information",
    retention:
      "Until the early-access purpose is completed, you withdraw consent, or up to 12 months after the relevant launch campaign ends, unless a longer period is legally required.",
  },
  {
    data: "Website feedback",
    retention:
      "Generally up to 24 months, unless the feedback remains necessary for product development, security, dispute resolution, or legal compliance.",
  },
  {
    data: "Careers applications",
    retention:
      "Generally up to 12 months after the recruitment decision, unless you consent to longer retention or a longer period is required for legal or operational purposes.",
  },
  {
    data: "Support and grievance records",
    retention:
      "For as long as reasonably necessary to resolve the request and maintain appropriate compliance records.",
  },
  {
    data: "Security and technical logs",
    retention:
      "For a period reasonably necessary for security, fraud prevention, troubleshooting, cybersecurity compliance, and service reliability.",
  },
  {
    data: "Account and service data",
    retention:
      "For the duration of your account and thereafter only as long as reasonably necessary for deletion processing, security, legal compliance, dispute resolution, or another permitted purpose.",
  },
];

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <LegalHeader />

      <section className="px-5 py-14 sm:px-6 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <PrivacyNavigation />

          <article className="min-w-0 space-y-8">
            <LegalIntroduction>
              This Privacy Notice explains how Handil collects, uses, stores,
              shares, protects, and manages personal data when you use our
              website, applications, careers services, early-access programs,
              feedback tools, messaging features, and related services.
            </LegalIntroduction>

            <ReviewNotice>
              This Privacy Notice is intended to reflect Handil&apos;s current
              privacy approach and should be reviewed by qualified Indian legal
              counsel before commercial launch and whenever Handil materially
              changes its services or data-processing practices.
            </ReviewNotice>

            <LegalSection id="who-we-are" number="01" title="Who We Are">
              <p>
                Handil is developing a communication platform designed around
                privacy, intentional communication, organization, user control,
                and safer digital interactions.
              </p>

              <p>
                Where applicable, Handil may act as a Data Fiduciary for
                purposes of Indian data-protection law when it determines the
                purpose and means of processing personal data.
              </p>

              <p>
                Privacy questions, rights requests, consent withdrawal requests,
                grievances, and other privacy-related matters may be sent to{" "}
                <a
                  href={`mailto:${PRIVACY_EMAIL}`}
                  className="font-bold text-sky-600 hover:text-sky-700"
                >
                  {PRIVACY_EMAIL}
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection
              id="legal-framework"
              number="02"
              title="Compliance with Indian Laws"
            >
              <p>
                Handil intends to operate and process personal data in
                accordance with applicable laws, rules, regulations,
                notifications, directions, and lawful requirements of the
                Government of India and competent Indian authorities.
              </p>

              <p>
                Depending on the nature of the service and processing activity,
                applicable requirements may include:
              </p>

              <LegalList
                items={[
                  "The Digital Personal Data Protection Act, 2023 and applicable Digital Personal Data Protection Rules.",
                  "The Information Technology Act, 2000 and applicable rules issued under it.",
                  "Applicable Information Technology intermediary and digital-service rules.",
                  "Cybersecurity requirements, directions, and reporting obligations issued by CERT-In or another competent authority.",
                  "Applicable consumer-protection laws and regulations.",
                  "Applicable requirements concerning electronic communications, commercial communications, and digital services.",
                  "Other applicable statutory, regulatory, judicial, or governmental requirements.",
                ]}
              />

              <p>
                Handil may update its services, security controls, procedures,
                notices, or policies where reasonably necessary to comply with
                changes in applicable law or lawful directions issued by a
                competent authority.
              </p>
            </LegalSection>

            <LegalSection
              id="information-we-collect"
              number="03"
              title="Personal Data We May Collect"
            >
              <LegalSubsection title="Account and identity information">
                <LegalList
                  items={[
                    "Name, display name, username, profile information, and account identifiers.",
                    "Email address and, where required by a feature, phone number.",
                    "Authentication, account-recovery, and security-related information.",
                    "Account settings and preferences.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Connections and communication">
                <LegalList
                  items={[
                    "Usernames, QR-based connection information, connection requests, and relationship information required to provide connection features.",
                    "Messages, files, photos, videos, documents, notes, and other content you intentionally create, send, upload, save, or manage through Handil.",
                    "Conversation metadata reasonably necessary to deliver, synchronize, organize, secure, or maintain communications.",
                    "Information required to support local, cloud, or hybrid storage choices where such features are offered.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Device and technical information">
                <LegalList
                  items={[
                    "Device type, operating system, app version, browser type, language, region, and time-zone information.",
                    "IP address and network-related information.",
                    "Crash reports, diagnostic information, security events, and performance logs.",
                    "Identifiers required for authentication, notifications, fraud prevention, abuse prevention, and service security.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Website and early-access information">
                <LegalList
                  items={[
                    "Email addresses submitted to join an early-access or launch-notification list.",
                    "Consent records associated with an early-access subscription where consent is the applicable basis for processing.",
                    "Feedback, suggestions, feature requests, and information voluntarily submitted through website forms.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Careers and recruitment information">
                <LegalList
                  items={[
                    "Name, email address, phone number, and contact information.",
                    "Resume or curriculum vitae.",
                    "Employment history, current employer, job title, years of experience, and notice period.",
                    "LinkedIn, GitHub, portfolio, or other professional links you choose to provide.",
                    "Cover letters and information voluntarily submitted as part of an application.",
                    "Application status, source, interview information, and recruitment-related communications.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Support, grievances, and rights requests">
                <LegalList
                  items={[
                    "Messages and information submitted to customer support.",
                    "Privacy requests, grievances, complaints, and correspondence.",
                    "Information reasonably necessary to verify and respond to a request.",
                  ]}
                />
              </LegalSubsection>
            </LegalSection>

            <LegalSection
              id="purposes"
              number="04"
              title="Why We Process Personal Data"
            >
              <p>Handil may process personal data to:</p>

              <LegalList
                items={[
                  "Create, authenticate, secure, and maintain accounts.",
                  "Enable connection, identity, and communication features.",
                  "Deliver messages, files, media, and other communications.",
                  "Synchronize supported information across devices.",
                  "Provide local, cloud, or hybrid storage functionality where offered.",
                  "Organize and retrieve conversations and content.",
                  "Send service, security, account, and transactional notifications.",
                  "Provide early-access or launch notifications that you requested.",
                  "Receive and analyze product feedback.",
                  "Process employment applications and manage recruitment.",
                  "Respond to support requests, privacy-rights requests, and grievances.",
                  "Detect fraud, abuse, unauthorized access, cybersecurity incidents, and other threats.",
                  "Monitor reliability, diagnose errors, and improve performance.",
                  "Comply with applicable laws, regulations, directions, court orders, and lawful governmental requests.",
                  "Protect Handil, our users, and others from misuse or harm.",
                ]}
              />

              <p>
                Handil intends to collect only personal data that is reasonably
                necessary for the stated purpose.
              </p>
            </LegalSection>

            <LegalSection
              id="consent"
              number="05"
              title="Consent and Permitted Processing"
            >
              <p>
                Where Handil relies on consent, we intend to request consent in
                clear and understandable language and identify the purpose for
                which personal data is requested.
              </p>

              <p>
                Consent-based processing should use a clear affirmative action.
                Optional purposes should not be pre-selected or unnecessarily
                bundled with unrelated purposes.
              </p>

              <p>
                Where applicable, you may withdraw consent for consent-based
                processing. Handil intends to provide a mechanism that is
                reasonably comparable in ease to the mechanism used to provide
                consent.
              </p>

              <p>
                Withdrawal does not invalidate processing that lawfully occurred
                before withdrawal. Handil may continue processing where
                applicable law permits or requires such processing.
              </p>

              <p>
                Handil may also process personal data without separate consent
                where applicable law recognizes another permitted basis or
                legitimate use.
              </p>
            </LegalSection>

            <LegalSection
              id="early-access"
              number="06"
              title="Early Access and Communications"
            >
              <p>
                If you submit your email address to join Handil&apos;s
                early-access list, we may use it to provide information about
                Handil&apos;s launch, availability, invitations, product
                announcements, and related early-access updates.
              </p>

              <p>
                Where consent is required, these communications will be based on
                your affirmative choice.
              </p>

              <p>
                You may withdraw your consent or unsubscribe from optional
                communications at any time.
              </p>
            </LegalSection>

            <LegalSection
              id="careers"
              number="07"
              title="Careers and Applicant Privacy"
            >
              <p>
                Personal data submitted through Handil&apos;s careers pages may
                be used to evaluate applications, communicate with candidates,
                conduct interviews, make recruitment decisions, prevent fraud
                or misuse, and maintain appropriate recruitment records.
              </p>

              <p>
                Applicant information may be accessible to personnel and
                service providers who reasonably require access for recruitment,
                technical administration, security, or legal compliance.
              </p>

              <p>
                Handil does not intend to make applicant resumes or application
                information publicly accessible.
              </p>
            </LegalSection>

            <LegalSection
              id="sharing"
              number="08"
              title="Third Parties and Service Providers"
            >
              <p>
                Handil may use third-party service providers to operate portions
                of the service. These may support:
              </p>

              <LegalList
                items={[
                  "Cloud hosting and infrastructure.",
                  "Database and file-storage services.",
                  "Authentication and account security.",
                  "Email and transactional communications.",
                  "Push notifications.",
                  "Monitoring, error reporting, and cybersecurity operations.",
                  "Customer support.",
                  "Recruitment and careers functionality.",
                  "Analytics, where enabled and legally permitted.",
                ]}
              />

              <p>
                Providers should receive only information reasonably necessary
                to perform their services and should be subject to appropriate
                contractual, confidentiality, security, and data-protection
                obligations.
              </p>

              <p>
                Handil may also disclose information where required by
                applicable law, court order, regulatory requirement, lawful
                governmental direction, or where reasonably necessary to
                investigate abuse, protect rights or safety, or maintain the
                security of the service.
              </p>

              <p>
                Handil does not intend to sell personal data in exchange for
                money.
              </p>
            </LegalSection>

            <LegalSection
              id="international"
              number="09"
              title="International Processing"
            >
              <p>
                Handil and its service providers may process information in
                locations outside the state or country in which you reside.
              </p>

              <p>
                Where applicable Indian law imposes restrictions on
                cross-border transfers or processing, Handil intends to comply
                with those restrictions and applicable governmental
                requirements.
              </p>
            </LegalSection>

            <LegalSection
              id="retention"
              number="10"
              title="Data Retention"
            >
              <p>
                Handil aims not to retain personal data longer than reasonably
                necessary for the purpose for which it was collected, applicable
                legal requirements, cybersecurity obligations, fraud prevention,
                dispute resolution, or another permitted purpose.
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200">
                {RETENTION_ITEMS.map((item, index) => (
                  <div
                    key={item.data}
                    className={`p-5 sm:p-6 ${
                      index !== RETENTION_ITEMS.length - 1
                        ? "border-b border-slate-200"
                        : ""
                    }`}
                  >
                    <p className="font-black text-slate-950">{item.data}</p>
                    <p className="mt-2 leading-7 text-slate-600">
                      {item.retention}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                When personal data is no longer required, Handil intends to
                delete, anonymize, or securely dispose of it, subject to backup
                cycles and lawful retention requirements.
              </p>
            </LegalSection>

            <LegalSection
              id="security"
              number="11"
              title="Security Safeguards"
            >
              <p>
                Handil intends to maintain reasonable administrative, technical,
                and organizational safeguards appropriate to the nature and risk
                of the personal data processed.
              </p>

              <LegalList
                items={[
                  "Encryption in transit for production services.",
                  "Appropriate encryption or equivalent safeguards for stored information where applicable.",
                  "Authentication and access controls.",
                  "Role-based and least-privilege access where appropriate.",
                  "Secure management of credentials, tokens, keys, and application secrets.",
                  "Logging, monitoring, and security-event review.",
                  "Secure software-development and vulnerability-management practices.",
                  "Backup and recovery controls.",
                  "Restrictions on access to recruitment and confidential personal data.",
                  "Measures intended to prevent unauthorized public access to private files and personal data.",
                ]}
              />

              <p>
                No electronic service can guarantee absolute security. Users
                should protect credentials and devices and report suspected
                unauthorized access promptly.
              </p>
            </LegalSection>

            <LegalSection
              id="cybersecurity"
              number="12"
              title="Cybersecurity and Regulatory Reporting"
            >
              <p>
                Handil intends to maintain procedures for identifying,
                investigating, containing, documenting, and responding to
                cybersecurity incidents and personal-data breaches.
              </p>

              <p>
                Where an incident is subject to mandatory reporting under
                applicable Indian law, including applicable CERT-In directions,
                Handil intends to report the incident to the appropriate
                authority within the legally required timeframe.
              </p>

              <p>
                Handil may maintain security records, logs, incident evidence,
                and other information where reasonably required for
                cybersecurity, investigation, compliance, and regulatory
                purposes.
              </p>
            </LegalSection>

            <LegalSection
              id="breaches"
              number="13"
              title="Personal Data Breaches"
            >
              <p>
                Where applicable privacy law requires notification following a
                personal-data breach, Handil intends to notify affected
                individuals and the competent authority, including the Data
                Protection Board of India where applicable, in the manner and
                timeframe required by law.
              </p>

              <p>
                Handil may also take reasonable steps to contain the incident,
                protect affected individuals, preserve evidence, investigate the
                cause, and prevent recurrence.
              </p>
            </LegalSection>

            <LegalSection
              id="rights"
              number="14"
              title="Your Privacy Rights"
            >
              <p>
                Subject to applicable law and permitted exceptions, you may have
                rights relating to your personal data, including:
              </p>

              <LegalList
                items={[
                  "Access information regarding personal data being processed.",
                  "Request correction of inaccurate or misleading personal data.",
                  "Request completion or updating of incomplete or outdated personal data.",
                  "Request erasure of personal data where applicable.",
                  "Withdraw consent where processing is based on consent.",
                  "Raise a grievance regarding Handil's processing of personal data.",
                  "Nominate another individual to exercise applicable rights in circumstances recognized by law.",
                ]}
              />

              <p>
                Handil may request reasonable information necessary to verify
                your identity before acting on a request.
              </p>
            </LegalSection>

            <LegalSection
              id="rights-request"
              number="15"
              title="How to Exercise Your Rights"
            >
              <p>
                You may submit a privacy-rights request, correction request,
                deletion request, or consent-withdrawal request by contacting:
              </p>

              <ContactCard />

              <p>
                Please provide sufficient information for Handil to identify the
                relevant account or interaction and understand the nature of the
                request.
              </p>

              <p>
                Handil may introduce an online privacy-rights request form as the
                service develops.
              </p>
            </LegalSection>

            <LegalSection
              id="grievance"
              number="16"
              title="Grievance Redressal"
            >
              <p>
                If you have a concern regarding Handil&apos;s handling of
                personal data, privacy practices, account security, or another
                data-protection matter, you may contact:
              </p>

              <ContactCard title="Handil Privacy & Grievance Contact" />

              <p>
                Handil intends to review grievances and respond within the
                timeframe required under applicable law.
              </p>

              <p>
                Where applicable, you may also have rights to pursue remedies
                before the Data Protection Board of India or another competent
                authority after using Handil&apos;s grievance process where
                required.
              </p>
            </LegalSection>

            <LegalSection
              id="children"
              number="17"
              title="Children and Minors"
            >
              <p>
                Unless Handil expressly announces otherwise for a particular
                service, Handil&apos;s public service is intended for users who
                are at least 18 years old.
              </p>

              <p>
                If Handil introduces services intended for children, Handil
                intends to implement age-appropriate safeguards and obtain
                verifiable consent from a parent or lawful guardian where
                required.
              </p>

              <p>
                Handil does not intend to knowingly engage in prohibited
                tracking, behavioural monitoring, or targeted advertising
                involving children.
              </p>
            </LegalSection>

            <LegalSection
              id="trackers"
              number="18"
              title="Cookies, Analytics and Trackers"
            >
              <p>
                Handil may use technologies necessary to operate, secure, and
                maintain the website and service.
              </p>

              <p>
                If Handil introduces optional analytics, advertising, or other
                non-essential tracking technologies requiring consent, Handil
                intends not to activate such technologies until the required
                consent has been obtained.
              </p>

              <p>
                Where applicable, users will be given appropriate controls to
                manage optional tracking preferences.
              </p>
            </LegalSection>

            <LegalSection
              id="automated"
              number="19"
              title="Automated and AI-Assisted Features"
            >
              <p>
                Handil may introduce artificial-intelligence-assisted or
                automated functionality as the product evolves.
              </p>

              <p>
                Before such features process personal data, Handil intends to
                review the relevant purpose, data flow, service providers,
                security implications, user notice, retention period, and
                applicable consent or other legal requirements.
              </p>
            </LegalSection>

            <LegalSection
              id="government"
              number="20"
              title="Government and Law-Enforcement Requests"
            >
              <p>
                Handil may disclose information where required by applicable
                law, a valid court order, lawful governmental direction,
                regulatory requirement, or another legally binding request.
              </p>

              <p>
                Where legally permitted, Handil intends to evaluate requests for
                validity, scope, and legal authority and disclose only
                information reasonably required to comply with the request.
              </p>
            </LegalSection>

            <LegalSection
              id="changes"
              number="21"
              title="Changes to This Privacy Notice"
            >
              <p>
                Handil may update this Privacy Notice as the product,
                technology, legal requirements, regulatory obligations, or
                business practices evolve.
              </p>

              <p>
                Where a change materially affects how personal data is
                processed, Handil may provide notice through the website,
                application, email, or another appropriate channel and seek
                fresh consent where required.
              </p>
            </LegalSection>

            <LegalSection id="contact" number="22" title="Contact Us">
              <ContactCard />

              <p className="text-sm text-slate-500">
                Handil&apos;s final legal entity name, registered business
                address, and any additional legally required grievance or
                compliance contact information will be published when
                finalized.
              </p>

              {/* LEGAL REVIEW:
                  Add final company legal entity name,
                  registered/business address,
                  grievance officer details if required,
                  and any India-specific statutory disclosures
                  before commercial launch. */}
            </LegalSection>
          </article>
        </div>
      </section>
    </main>
  );
}

function LegalHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-20 text-white sm:px-6 md:px-12 md:pb-24 md:pt-24">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-[1300px]">
        <p className="font-black uppercase tracking-[0.24em] text-sky-400">
          Trust & Transparency
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
          Privacy Notice
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          How Handil handles personal data and the choices available to you.
        </p>

        <p className="mt-6 text-sm font-semibold text-slate-400">
          Effective: {EFFECTIVE_DATE}
        </p>
      </div>
    </header>
  );
}

function PrivacyNavigation() {
  const links = [
    ["who-we-are", "Who We Are"],
    ["legal-framework", "Indian Laws"],
    ["information-we-collect", "Data We Collect"],
    ["purposes", "Why We Use Data"],
    ["consent", "Consent"],
    ["careers", "Careers"],
    ["sharing", "Third Parties"],
    ["retention", "Retention"],
    ["security", "Security"],
    ["rights", "Your Rights"],
    ["grievance", "Grievances"],
    ["children", "Children"],
    ["contact", "Contact"],
  ];

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-500">
          On this page
        </p>

        <nav className="mt-5 space-y-1">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function LegalIntroduction({ children }) {
  return (
    <div className="rounded-[32px] bg-slate-950 p-7 text-lg leading-8 text-slate-300 shadow-xl sm:p-9">
      {children}
    </div>
  );
}

function ReviewNotice({ children }) {
  return (
    <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 leading-7 text-amber-900">
      <p className="font-black">Legal review notice</p>
      <p className="mt-2">{children}</p>
    </div>
  );
}

function LegalSection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sm font-black text-sky-600">
          {number}
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-black leading-tight sm:text-3xl">
            {title}
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalSubsection({ title, children }) {
  return (
    <div>
      <h3 className="font-black text-slate-950">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function LegalList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ContactCard({ title = "Handil Privacy Team" }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="font-black text-slate-950">{title}</p>

      <a
        href={`mailto:${PRIVACY_EMAIL}`}
        className="mt-2 inline-block font-bold text-sky-600 hover:text-sky-700"
      >
        {PRIVACY_EMAIL}
      </a>
    </div>
  );
}

export default PrivacyPolicy;