import { Link } from "react-router-dom";

const EFFECTIVE_DATE = "September 12, 2026";
const CONTACT_EMAIL = "connect@handilapp.com";

function Terms() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <TermsHeader />

      <section className="px-5 py-14 sm:px-6 md:px-12 md:py-24">
        <article className="mx-auto max-w-5xl space-y-8">
          <div className="rounded-[32px] bg-slate-950 p-7 text-lg leading-8 text-slate-300 shadow-xl sm:p-10">
            These Terms of Service govern your access to and use of Handil&apos;s
            websites, applications, communication services, careers services,
            early-access features, and related products and services.
          </div>

          <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 leading-7 text-amber-900">
            <p className="font-black">Legal review notice</p>

            <p className="mt-2">
              These Terms should be reviewed by qualified Indian legal counsel
              before commercial launch, particularly after Handil&apos;s final
              legal entity, registered office, commercial model, user age
              structure, intermediary classification, and production
              architecture are finalized.
            </p>
          </div>

          <TermsSection number="01" title="Acceptance of These Terms">
            <p>
              By accessing or using Handil, creating an account, submitting a
              job application, or otherwise using a Handil service, you agree to
              these Terms and acknowledge our{" "}
              <Link
                to="/privacy-policy"
                className="font-bold text-sky-600 hover:text-sky-700"
              >
                Privacy Notice
              </Link>
              .
            </p>

            <p>
              If you do not agree to these Terms, you should not access or use
              the service.
            </p>
          </TermsSection>

          <TermsSection
            number="02"
            title="Compliance with Applicable Indian Laws"
          >
            <p>
              Handil intends to operate its services in accordance with
              applicable laws, rules, regulations, notifications, directions,
              and lawful requirements of India.
            </p>

            <p>
              Depending on the nature of the service, these may include:
            </p>

            <TermsList
              items={[
                "The Information Technology Act, 2000 and applicable rules issued under it.",
                "The Digital Personal Data Protection Act, 2023 and applicable Digital Personal Data Protection Rules.",
                "Applicable intermediary, digital-service, and online-platform requirements.",
                "Cybersecurity obligations and directions issued by CERT-In and other competent authorities.",
                "Applicable consumer-protection laws, rules, and guidelines.",
                "Applicable commercial-communication and electronic-communication requirements.",
                "Other applicable statutory, regulatory, judicial, or governmental requirements.",
              ]}
            />

            <p>
              Handil may modify its services, policies, security measures,
              operational procedures, or these Terms where reasonably necessary
              to comply with applicable law or a lawful direction from a
              competent authority.
            </p>
          </TermsSection>

          <TermsSection number="03" title="Eligibility">
            <p>
              Unless Handil expressly states otherwise for a particular service,
              you must be at least 18 years old to create or use a Handil
              account.
            </p>

            <p>
              If Handil later offers a service to children or minors, additional
              age-verification, parental-consent, privacy, and safety
              requirements may apply.
            </p>

            <p>
              If you use Handil on behalf of an organization, you represent that
              you have authority to accept these Terms on behalf of that
              organization.
            </p>
          </TermsSection>

          <TermsSection number="04" title="Your Account">
            <TermsList
              items={[
                "Provide accurate and current information where required.",
                "Protect passwords, access credentials, recovery information, and authenticated devices.",
                "Do not knowingly allow unauthorized people to use your account.",
                "Notify Handil promptly if you suspect unauthorized account activity.",
                "Keep relevant account and recovery information reasonably current.",
                "Use Handil only in accordance with applicable law and these Terms.",
              ]}
            />

            <p>
              You are responsible for activity performed through your account
              except where applicable law provides otherwise.
            </p>
          </TermsSection>

          <TermsSection number="05" title="License to Use Handil">
            <p>
              Subject to these Terms, Handil grants you a limited,
              non-exclusive, non-transferable, revocable license to use the
              service for its intended purpose.
            </p>

            <p>
              This license does not transfer ownership of Handil&apos;s
              software, designs, interfaces, trademarks, documentation,
              algorithms, systems, branding, or other intellectual property.
            </p>
          </TermsSection>

          <TermsSection number="06" title="Connections and Identity">
            <p>
              Handil may provide methods for discovering or connecting with
              users, including usernames, QR codes, contact information, or
              other identifiers.
            </p>

            <p>
              You must not use identity or connection features to impersonate
              another person, deceive users, collect information unlawfully, or
              circumvent another person&apos;s privacy choices.
            </p>

            <p>
              The availability and exact behavior of identity and connection
              features may change as Handil evolves.
            </p>
          </TermsSection>

          <TermsSection number="07" title="Acceptable Use">
            <p>You agree not to use Handil to:</p>

            <TermsList
              items={[
                "Violate applicable law or another person's legal rights.",
                "Harass, threaten, exploit, stalk, impersonate, or deceive another person.",
                "Distribute malware, malicious code, or intentionally harmful content.",
                "Attempt unauthorized access to accounts, devices, systems, networks, or data.",
                "Bypass authentication, security, privacy, rate-limit, or abuse-prevention controls.",
                "Interfere with the availability, integrity, security, or operation of Handil.",
                "Scrape, crawl, reverse engineer, or automatically extract information except where permitted by law or expressly authorized.",
                "Send spam, scams, fraudulent messages, or unlawful unsolicited communications.",
                "Upload or distribute unlawful, infringing, abusive, or malicious content.",
                "Use Handil to facilitate fraud, exploitation, cybercrime, or other harmful activity.",
              ]}
            />
          </TermsSection>

          <TermsSection number="08" title="User Content">
            <p>
              You retain ownership of content that you lawfully create and
              submit through Handil.
            </p>

            <p>
              You grant Handil a limited license to host, store, process,
              transmit, reproduce, synchronize, and display your content only as
              reasonably necessary to provide, secure, maintain, or improve the
              service, comply with your instructions, or comply with applicable
              law.
            </p>

            <p>
              You are responsible for ensuring that you have all necessary
              rights and permissions to upload, send, or share content.
            </p>
          </TermsSection>

          <TermsSection
            number="09"
            title="Illegal, Harmful and Prohibited Content"
          >
            <p>
              Handil must not be used to create, transmit, distribute, host, or
              facilitate content or activity prohibited by applicable law.
            </p>

            <p>
              Where Handil receives a legally valid notice, court order,
              governmental direction, regulatory instruction, or other binding
              legal request concerning content or activity, Handil may take
              action necessary to comply with applicable law.
            </p>

            <p>
              Such action may include restricting access, preserving relevant
              records, suspending functionality, removing content where
              technically applicable, or cooperating with competent authorities
              where legally required.
            </p>
          </TermsSection>

          <TermsSection
            number="10"
            title="Storage, Synchronization and Deletion"
          >
            <p>
              Handil may provide local-device storage, cloud storage,
              synchronization, or hybrid storage options depending on the
              feature and product version.
            </p>

            <p>
              Storage and deletion behavior may depend on your settings, device
              state, synchronization status, backup cycles, recipients, and the
              technical architecture of the service.
            </p>

            <p>
              Deleting content from your account or device may not immediately
              remove every synchronized, recipient-held, cached, security, or
              backup copy.
            </p>

            <p>
              Handil may retain limited information where reasonably necessary
              for security, fraud prevention, legal compliance, dispute
              resolution, cybersecurity investigation, or another permitted
              purpose.
            </p>
          </TermsSection>

          <TermsSection number="11" title="Privacy and Data Protection">
            <p>
              Handil&apos;s collection and processing of personal data is
              described in our{" "}
              <Link
                to="/privacy-policy"
                className="font-bold text-sky-600 hover:text-sky-700"
              >
                Privacy Notice
              </Link>
              .
            </p>

            <p>
              Handil intends to process personal data in accordance with
              applicable Indian data-protection laws, including the Digital
              Personal Data Protection Act, 2023 and applicable rules, to the
              extent those provisions are in force and apply to the relevant
              processing.
            </p>

            <p>
              Where processing is based on consent, Handil intends to provide
              appropriate information about the purpose of processing and a
              mechanism to withdraw consent where required.
            </p>

            <p>
              Subject to applicable law, users may have rights to access
              information about processing, request correction, completion,
              updating or erasure of personal data, withdraw consent, and raise
              a grievance.
            </p>

            <p>
              Privacy and data-protection requests may be submitted to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-bold text-sky-600 hover:text-sky-700"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </TermsSection>

          <TermsSection number="12" title="Consent">
            <p>
              Certain optional Handil features or processing activities may
              require your consent.
            </p>

            <p>
              Where consent is required, Handil intends to request it through a
              clear affirmative action and identify the relevant purpose.
              Optional unrelated purposes should not be unnecessarily bundled.
            </p>

            <p>
              You may withdraw consent to consent-based processing where
              applicable. Withdrawal will not affect processing lawfully
              completed before withdrawal.
            </p>
          </TermsSection>

          <TermsSection number="13" title="Careers and Job Applications">
            <p>
              Information submitted through Handil&apos;s careers service is
              provided for recruitment and employment-evaluation purposes.
            </p>

            <p>
              Submission of an application does not guarantee an interview,
              employment offer, employment relationship, or response.
            </p>

            <p>
              Applicants should provide accurate information and should not
              submit confidential third-party information unless authorized to
              do so.
            </p>

            <p>
              Applicant-data handling and retention are described in the
              Privacy Notice.
            </p>
          </TermsSection>

          <TermsSection number="14" title="Early Access and Beta Features">
            <p>
              Handil may make certain products or features available as early
              access, beta, preview, experimental, or testing functionality.
            </p>

            <p>
              These features may be incomplete, contain defects, change
              materially, become unavailable, or be discontinued.
            </p>

            <p>
              Beta or early-access functionality should not be relied upon for
              emergency, life-critical, or other high-risk communication.
            </p>
          </TermsSection>

          <TermsSection number="15" title="Third-Party Services">
            <p>
              Handil may depend on third-party providers for hosting, databases,
              storage, authentication, communications, monitoring,
              cybersecurity, recruitment, analytics, or other operational
              services.
            </p>

            <p>
              Third-party products and websites may be governed by their own
              terms and privacy policies.
            </p>

            <p>
              Handil is not responsible for independent third-party services
              except to the extent required by applicable law or contractual
              obligations.
            </p>
          </TermsSection>

          <TermsSection number="16" title="Cybersecurity">
            <p>
              Handil intends to implement reasonable technical,
              organizational, and administrative safeguards designed to protect
              its systems and personal data.
            </p>

            <p>
              Handil may monitor systems, maintain logs, investigate security
              events, preserve evidence, and take defensive action where
              reasonably necessary to protect the service or comply with
              applicable cybersecurity requirements.
            </p>

            <p>
              Where an incident is reportable under applicable Indian law or
              cybersecurity directions, Handil intends to comply with the
              relevant reporting requirements.
            </p>
          </TermsSection>

          <TermsSection number="17" title="Personal Data Breaches">
            <p>
              Handil intends to maintain procedures for investigating,
              containing, documenting, and responding to personal-data breaches.
            </p>

            <p>
              Where legally required, Handil intends to notify affected
              individuals, the Data Protection Board of India, CERT-In, or
              another competent authority in accordance with applicable legal
              requirements.
            </p>
          </TermsSection>

          <TermsSection
            number="18"
            title="Government and Regulatory Requests"
          >
            <p>
              Handil may cooperate with courts, regulatory authorities,
              law-enforcement agencies, CERT-In, the Data Protection Board of
              India, or other competent governmental authorities where required
              by applicable law.
            </p>

            <p>
              Handil may preserve or disclose information where required by a
              legally valid request, court order, regulatory direction, or other
              binding legal process.
            </p>

            <p>
              Where legally permitted, Handil intends to evaluate such requests
              for legal validity, scope, and authority.
            </p>
          </TermsSection>

          <TermsSection number="19" title="Consumer Protection">
            <p>
              Handil intends to present material information regarding its
              services, pricing, subscriptions, limitations, and user choices in
              a clear and non-deceptive manner where applicable.
            </p>

            <p>
              Handil does not intend to use deceptive interface practices,
              hidden charges, forced actions, misleading cancellation
              mechanisms, or other practices prohibited by applicable
              consumer-protection law.
            </p>
          </TermsSection>

          <TermsSection
            number="20"
            title="Commercial and Promotional Communications"
          >
            <p>
              Handil may send service-related communications necessary to
              operate an account or service.
            </p>

            <p>
              Promotional or optional communications will be sent in accordance
              with applicable consent, communication, and consumer-protection
              requirements.
            </p>

            <p>
              Where applicable, users will be provided with a mechanism to opt
              out of optional promotional communications.
            </p>
          </TermsSection>

          <TermsSection number="21" title="Artificial Intelligence">
            <p>
              Handil may introduce AI-assisted features in the future.
            </p>

            <p>
              AI-generated output may be incomplete, inaccurate, or unsuitable
              for a particular purpose. Users should independently review
              important output before relying on or sharing it.
            </p>

            <p>
              AI-assisted features should not be treated as substitutes for
              professional legal, medical, financial, safety, or other
              regulated advice unless expressly designed and authorized for that
              purpose.
            </p>
          </TermsSection>

          <TermsSection number="22" title="Intellectual Property">
            <p>
              Handil and its licensors retain ownership of the service,
              software, interfaces, branding, documentation, designs, systems,
              and other intellectual property belonging to them.
            </p>

            <p>
              “Handil,” its logos, branding, and associated marks may not be
              copied or used without authorization except where permitted by
              applicable law.
            </p>
          </TermsSection>

          <TermsSection number="23" title="Feedback">
            <p>
              You may voluntarily submit product ideas, suggestions, questions,
              or feedback.
            </p>

            <p>
              Unless otherwise agreed, Handil may use voluntary feedback to
              evaluate and improve its products without an obligation to
              compensate you.
            </p>

            <p>
              This does not give Handil ownership of personal data contained in
              feedback or remove obligations imposed by applicable privacy law.
            </p>
          </TermsSection>

          <TermsSection number="24" title="Service Changes">
            <p>
              Handil may add, modify, suspend, replace, or discontinue features
              as the product evolves.
            </p>

            <p>
              Where reasonably practicable and legally required, Handil may
              provide notice of material changes that substantially affect
              users.
            </p>
          </TermsSection>

          <TermsSection number="25" title="Suspension and Termination">
            <p>
              Handil may restrict, suspend, or terminate access where reasonably
              necessary to:
            </p>

            <TermsList
              items={[
                "Protect users, Handil systems, or the public.",
                "Investigate suspected fraud, abuse, illegal content, or cybersecurity threats.",
                "Address material violations of these Terms.",
                "Comply with applicable law, court orders, or lawful governmental directions.",
                "Prevent unauthorized access or significant service disruption.",
              ]}
            />

            <p>
              You may stop using Handil and, where supported, request account
              deletion subject to applicable retention requirements.
            </p>
          </TermsSection>

          <TermsSection number="26" title="Service Availability">
            <p>
              Handil aims to provide a reliable service but does not guarantee
              uninterrupted, error-free, secure, or universally available
              operation.
            </p>

            <p>
              Availability may be affected by maintenance, outages, network
              conditions, third-party dependencies, security events, or other
              circumstances.
            </p>
          </TermsSection>

          <TermsSection number="27" title="No Emergency Communication">
            <p>
              Unless Handil expressly introduces and certifies a service for
              emergency use, Handil is not an emergency communications service.
            </p>

            <p>
              Do not rely on Handil to contact emergency services or communicate
              information where delay, failure, or interruption could create
              immediate danger.
            </p>
          </TermsSection>

          <TermsSection number="28" title="Disclaimers">
            <p>
              To the extent permitted by applicable law, Handil may be provided
              on an “as available” basis during development, early access, or
              beta stages.
            </p>

            <p>
              Nothing in these Terms excludes warranties, rights, remedies, or
              protections that cannot lawfully be excluded.
            </p>
          </TermsSection>

          <TermsSection number="29" title="Limitation of Liability">
            <p>
              To the extent permitted by applicable law, Handil will not be
              liable for indirect, incidental, special, consequential, or
              punitive losses arising solely from use or inability to use the
              service.
            </p>

            <p>
              Nothing in these Terms limits liability where such limitation is
              prohibited by applicable law.
            </p>

            {/* LEGAL REVIEW:
                Counsel should draft the final liability cap
                based on Handil's entity, commercial model,
                subscriptions, consumer law, and markets. */}
          </TermsSection>

          <TermsSection number="30" title="Governing Law and Disputes">
            <p>
              These Terms are intended to operate subject to applicable laws of
              India.
            </p>

            <p>
              Handil will specify final governing-law, jurisdiction,
              dispute-resolution, and consumer-remedy provisions after its
              legal entity, registered office, and commercial operating
              structure are finalized.
            </p>

            {/* LEGAL REVIEW:
                Do not insert a specific court,
                arbitration seat, or jurisdiction until
                company registration and counsel review are complete. */}
          </TermsSection>

          <TermsSection number="31" title="Grievances and Contact">
            <p>
              Questions, privacy concerns, complaints, abuse reports, and
              grievances may be sent to:
            </p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-black text-slate-950">
                Handil Support & Grievance Contact
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-block font-bold text-sky-600 hover:text-sky-700"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <p>
              Additional legally required entity, registered-address,
              grievance-officer, nodal-contact, or compliance-contact details
              will be published where applicable.
            </p>
          </TermsSection>

          <TermsSection number="32" title="Changes to These Terms">
            <p>
              Handil may update these Terms as the product, applicable law,
              regulatory requirements, or business changes.
            </p>

            <p>
              Where changes materially affect users, Handil may provide notice
              through the application, website, email, or another appropriate
              method before the updated Terms become applicable where required.
            </p>
          </TermsSection>
        </article>
      </section>
    </main>
  );
}

function TermsHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-20 text-white sm:px-6 md:px-12 md:pb-24 md:pt-24">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-5xl">
        <p className="font-black uppercase tracking-[0.24em] text-sky-400">
          Rules for using Handil
        </p>

        <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
          Terms of Service
        </h1>

        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
          The terms governing access to and use of Handil.
        </p>

        <p className="mt-6 text-sm font-semibold text-slate-400">
          Effective: {EFFECTIVE_DATE}
        </p>
      </div>
    </header>
  );
}

function TermsSection({ number, title, children }) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
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

function TermsList({ items }) {
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

export default Terms;