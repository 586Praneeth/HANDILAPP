import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const EFFECTIVE_DATE = "August 1, 2026";
const SUPPORT_EMAIL = "support@handilapp.com";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <LegalHeader
        title="Privacy Policy"
        description="How Handil collects, uses, protects and manages personal information."
      />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <PrivacyNavigation />

          <article className="space-y-8">
            <LegalIntroduction>
              This Privacy Policy explains how Handil collects, uses, stores,
              shares and protects information when you access or use our
              websites, mobile applications and related services.
            </LegalIntroduction>

            <LegalNotice>
              This page is an initial policy template. Before launching Handil,
              update every section so it accurately describes the product’s
              actual technical and business practices.
            </LegalNotice>

            <LegalSection id="who-we-are" number="01" title="Who We Are">
              <p>
                Handil is developing a mobile communication platform designed
                around user control, privacy, organization and dependable
                communication.
              </p>

              <p>
                In this Privacy Policy, “Handil,” “we,” “our” and “us” refer to
                the company operating the Handil services.
              </p>

              <p>
                Questions about this Privacy Policy may be sent to{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-bold text-sky-600 hover:text-sky-700"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </LegalSection>

            <LegalSection
              id="information-we-collect"
              number="02"
              title="Information We Collect"
            >
              <p>
                The information Handil collects depends on the features you use,
                the permissions you provide and how you interact with the
                service.
              </p>

              <LegalSubsection title="Account information">
                <LegalList
                  items={[
                    "Name, display name or username.",
                    "Email address and phone number.",
                    "Account identifiers and authentication information.",
                    "Profile information that you choose to provide.",
                    "Account settings and preferences.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Communication and product information">
                <LegalList
                  items={[
                    "Information required to deliver communication and collaboration features.",
                    "Content, files, images, videos or documents that you choose to upload, send, save or manage through Handil.",
                    "Bookmarks, organizational choices, storage selections and related product preferences.",
                    "Information about recipients, participants or interactions where required to provide the requested feature.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Device and technical information">
                <LegalList
                  items={[
                    "Device type, operating system and application version.",
                    "Language, region and time-zone settings.",
                    "IP address and approximate network information.",
                    "Application logs, error reports, crash information and diagnostic data.",
                    "Identifiers required for security, notifications, fraud prevention or service operation.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Usage information">
                <LegalList
                  items={[
                    "Features viewed or used.",
                    "Pages and screens visited.",
                    "Interaction timestamps and session information.",
                    "Performance, reliability and application-response information.",
                    "Referral, campaign or acquisition information where permitted.",
                  ]}
                />
              </LegalSubsection>

              <LegalSubsection title="Support and feedback">
                <LegalList
                  items={[
                    "Messages sent to customer support.",
                    "Feedback, survey responses and feature requests.",
                    "Screenshots, recordings or files voluntarily shared when requesting support.",
                    "Information submitted through early-access, careers or contact forms.",
                  ]}
                />
              </LegalSubsection>
            </LegalSection>

            <LegalSection
              id="how-we-use-information"
              number="03"
              title="How We Use Information"
            >
              <p>Handil may use information to:</p>

              <LegalList
                items={[
                  "Create, authenticate and maintain user accounts.",
                  "Provide communication, organization, storage and account-management features.",
                  "Deliver notifications and service-related messages.",
                  "Process user requests and maintain application state.",
                  "Synchronize information across supported devices.",
                  "Secure accounts, investigate suspicious activity and prevent abuse.",
                  "Diagnose errors, crashes and performance problems.",
                  "Maintain, test and improve the service.",
                  "Respond to support requests and feedback.",
                  "Measure product adoption and understand how features perform.",
                  "Comply with applicable legal obligations.",
                  "Protect the rights, safety and integrity of Handil, its users and others.",
                ]}
              />

              <p>
                Handil should collect and use only the information reasonably
                necessary for clearly identified purposes.
              </p>
            </LegalSection>

            <LegalSection
              id="legal-bases"
              number="04"
              title="Legal Bases for Processing"
            >
              <p>
                Where applicable law requires a legal basis, Handil may process
                information based on:
              </p>

              <LegalList
                items={[
                  "Performance of a contract when processing is necessary to provide the service you requested.",
                  "Consent when you have affirmatively agreed to a particular use.",
                  "Legitimate interests such as security, service improvement and fraud prevention, where those interests are not overridden by your rights.",
                  "Compliance with legal obligations.",
                  "Protection of vital interests or other lawful grounds recognized by applicable law.",
                ]}
              />

              <p>
                You may withdraw consent where processing depends on consent,
                subject to legal and technical limitations.
              </p>
            </LegalSection>

            <LegalSection
              id="sharing"
              number="05"
              title="How Information May Be Shared"
            >
              <p>
                Handil does not sell personal information in exchange for money.
                Update this statement if the company’s actual practices differ
                or if applicable law defines “sale” or “sharing” more broadly.
              </p>

              <p>Information may be disclosed to:</p>

              <LegalList
                items={[
                  "Service providers supporting hosting, storage, authentication, notifications, analytics, security, customer support and application operations.",
                  "Other users when sharing is necessary for a feature that you intentionally use.",
                  "Professional advisers such as attorneys, accountants, auditors and insurers.",
                  "Government authorities or other parties when disclosure is required by law or necessary to protect rights, safety and security.",
                  "A successor organization in connection with a merger, financing, acquisition, restructuring or sale of assets, subject to appropriate protections.",
                ]}
              />

              <p>
                Service providers should receive only the information required
                to perform their contracted responsibilities.
              </p>
            </LegalSection>

            <LegalSection
              id="third-party-services"
              number="06"
              title="Third-Party Services"
            >
              <p>
                Handil may rely on third-party providers for cloud
                infrastructure, database services, authentication, storage,
                notifications, analytics, error monitoring, email delivery and
                customer support.
              </p>

              <p>
                Before launch, list or accurately describe the categories of
                providers used by Handil. Review each provider’s privacy,
                security, retention and international-transfer practices.
              </p>

              <p>
                Third-party websites or services accessed through Handil may
                operate under their own privacy policies.
              </p>
            </LegalSection>

            <LegalSection
              id="storage-security"
              number="07"
              title="Storage and Security"
            >
              <p>
                Handil uses administrative, technical and organizational
                safeguards intended to protect information against unauthorized
                access, alteration, disclosure, loss or misuse.
              </p>

              <p>Depending on the service architecture, safeguards may include:</p>

              <LegalList
                items={[
                  "Encryption in transit.",
                  "Access controls and authentication requirements.",
                  "Secure credential and secret-management practices.",
                  "Monitoring, logging and vulnerability-management processes.",
                  "Backups and recovery procedures.",
                  "Restricted access based on operational need.",
                ]}
              />

              <p>
                No method of electronic transmission or storage is completely
                secure. Handil cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection
              id="retention"
              number="08"
              title="Data Retention"
            >
              <p>
                Handil retains information only for as long as reasonably
                necessary to provide the service, satisfy the purposes described
                in this policy, comply with legal obligations, resolve disputes
                and enforce agreements.
              </p>

              <p>
                Retention periods may depend on the type of information, account
                status, user choices, legal requirements, security needs and
                technical backup cycles.
              </p>

              <p>
                Before launch, define specific retention periods for account
                information, uploaded content, logs, analytics, deleted items,
                backups, support records and job applications.
              </p>
            </LegalSection>

            <LegalSection
              id="user-controls"
              number="09"
              title="Your Choices and Controls"
            >
              <p>
                Depending on available functionality and applicable law, users
                may be able to:
              </p>

              <LegalList
                items={[
                  "Review or update account and profile information.",
                  "Manage notification permissions.",
                  "Manage device permissions through operating-system settings.",
                  "Control storage, download or synchronization preferences.",
                  "Delete selected content.",
                  "Request account deletion.",
                  "Opt out of certain analytics or marketing communications.",
                  "Withdraw consent where processing is based on consent.",
                ]}
              />

              <p>
                Some information may need to be retained for security, fraud
                prevention, legal compliance or legitimate operational reasons.
              </p>
            </LegalSection>

            <LegalSection
              id="privacy-rights"
              number="10"
              title="Privacy Rights"
            >
              <p>
                Depending on your location, you may have rights concerning your
                personal information, including the right to:
              </p>

              <LegalList
                items={[
                  "Request access to personal information.",
                  "Request correction of inaccurate information.",
                  "Request deletion of certain information.",
                  "Request restriction of processing.",
                  "Object to certain processing.",
                  "Request data portability.",
                  "Withdraw consent.",
                  "Appeal certain privacy-request decisions where applicable.",
                  "Lodge a complaint with an appropriate data-protection authority.",
                ]}
              />

              <p>
                To submit a privacy request, contact{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-bold text-sky-600 hover:text-sky-700"
                >
                  {SUPPORT_EMAIL}
                </a>
                . Handil may need to verify your identity before processing a
                request.
              </p>
            </LegalSection>

            <LegalSection
              id="children"
              number="11"
              title="Children’s Privacy"
            >
              <p>
                Handil is not intended for children under the minimum age
                permitted by applicable law unless the service is specifically
                designed and authorized for them.
              </p>

              <p>
                Handil does not knowingly collect personal information from
                children in violation of applicable law. Contact us if you
                believe a child has provided information improperly.
              </p>

              <p>
                Before launch, establish the product’s minimum age and implement
                any required consent, age-assurance and parental-control
                processes.
              </p>
            </LegalSection>

            <LegalSection
              id="international-transfers"
              number="12"
              title="International Data Transfers"
            >
              <p>
                Handil and its service providers may process information in
                countries other than the country in which a user resides.
              </p>

              <p>
                Where required, Handil will use recognized safeguards for
                international transfers and provide additional information
                about relevant transfer mechanisms.
              </p>
            </LegalSection>

            <LegalSection
              id="ai"
              number="13"
              title="Artificial Intelligence Features"
            >
              <p>
                Handil may introduce AI-assisted capabilities in the future.
                Before any AI feature is launched, this policy must clearly
                explain:
              </p>

              <LegalList
                items={[
                  "What information is processed by the AI feature.",
                  "Whether information is sent to an external model provider.",
                  "Whether prompts or outputs are retained.",
                  "Whether data is used to train or improve models.",
                  "What user controls, safeguards and limitations apply.",
                  "Whether automated decisions materially affect users.",
                ]}
              />

              <p>
                Do not publish claims about AI privacy or training practices
                until the actual architecture and provider agreements have been
                confirmed.
              </p>
            </LegalSection>

            <LegalSection
              id="changes"
              number="14"
              title="Changes to This Policy"
            >
              <p>
                Handil may update this Privacy Policy as the product, technology
                or legal requirements change.
              </p>

              <p>
                When material changes are made, Handil may provide notice
                through the application, website, email or another appropriate
                method. The effective date at the top of this page will be
                updated.
              </p>
            </LegalSection>

            <LegalSection id="contact" number="15" title="Contact Us">
              <p>
                Questions, concerns and privacy requests may be sent to:
              </p>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-black text-slate-950">Handil Privacy Team</p>

                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-2 inline-block font-bold text-sky-600 hover:text-sky-700"
                >
                  {SUPPORT_EMAIL}
                </a>

                <p className="mt-3 text-sm text-slate-500">
                  Add Handil’s legal entity name and business mailing address
                  before launch.
                </p>
              </div>
            </LegalSection>
          </article>
        </div>
      </section>
    </main>
  );
}

function PrivacyNavigation() {
  const links = [
    ["who-we-are", "Who We Are"],
    ["information-we-collect", "Information We Collect"],
    ["how-we-use-information", "How We Use Information"],
    ["sharing", "Information Sharing"],
    ["storage-security", "Storage and Security"],
    ["retention", "Data Retention"],
    ["user-controls", "Your Controls"],
    ["privacy-rights", "Privacy Rights"],
    ["children", "Children’s Privacy"],
    ["contact", "Contact Us"],
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

function LegalHeader({ title, description }) {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-28 text-white md:px-12 md:pb-24 md:pt-32">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-[1300px]">
        <Link
          to="/"
          className="inline-flex rounded-2xl bg-white p-3 transition hover:-translate-y-0.5"
          aria-label="Go to Handil home page"
        >
          <Logo />
        </Link>

        <p className="mt-14 font-black uppercase tracking-[0.24em] text-sky-400">
          Trust and transparency
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-7xl">{title}</h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        <p className="mt-8 text-sm font-semibold text-slate-400">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </div>
    </header>
  );
}

function LegalIntroduction({ children }) {
  return (
    <div className="rounded-[32px] bg-slate-950 p-7 text-lg leading-8 text-slate-300 md:p-10">
      {children}
    </div>
  );
}

function LegalNotice({ children }) {
  return (
    <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 leading-7 text-amber-900">
      <p className="font-black">Important launch notice</p>
      <p className="mt-2">{children}</p>
    </div>
  );
}

function LegalSection({ id, number, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[36px] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 font-black text-sky-600">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-black md:text-3xl">{title}</h2>

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
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default PrivacyPolicy;