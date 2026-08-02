import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const EFFECTIVE_DATE = "August 1, 2026";
const SUPPORT_EMAIL = "support@handilapp.com";

function Terms() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <TermsHeader />

      <section className="px-6 py-16 md:px-12 md:py-24">
        <article className="mx-auto max-w-5xl space-y-8">
          <div className="rounded-[32px] bg-slate-950 p-7 text-lg leading-8 text-slate-300 md:p-10">
            These Terms of Service govern access to and use of Handil’s
            websites, mobile applications and related services.
          </div>

          <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 leading-7 text-amber-900">
            <p className="font-black">Important launch notice</p>
            <p className="mt-2">
              This is an initial terms template. A qualified attorney should
              review the final terms based on Handil’s legal entity, launch
              countries, age requirements, subscriptions, content model,
              dispute process and actual product functionality.
            </p>
          </div>

          <TermsSection number="01" title="Acceptance of These Terms">
            <p>
              By creating an account, accessing or using Handil, you agree to
              these Terms of Service and acknowledge the Privacy Policy.
            </p>

            <p>
              Do not access or use the service if you do not agree to these
              terms.
            </p>
          </TermsSection>

          <TermsSection number="02" title="Eligibility">
            <p>
              You must meet the minimum legal age required in your location to
              use Handil.
            </p>

            <p>
              If you use Handil on behalf of an organization, you represent
              that you have authority to bind that organization to these terms.
            </p>

            <p>
              Handil may require additional consent or authorization where
              applicable law requires it.
            </p>
          </TermsSection>

          <TermsSection number="03" title="Your Account">
            <TermsList
              items={[
                "Provide accurate and current account information.",
                "Protect your password, access codes and authenticated devices.",
                "Do not allow unauthorized people to access your account.",
                "Notify Handil promptly if you suspect unauthorized activity.",
                "Keep your recovery and contact information current.",
                "Accept responsibility for activity conducted through your account, except where prohibited by law.",
              ]}
            />

            <p>
              Handil may use reasonable verification and security measures to
              protect accounts and users.
            </p>
          </TermsSection>

          <TermsSection number="04" title="License to Use Handil">
            <p>
              Subject to these terms, Handil grants you a limited,
              non-exclusive, non-transferable, revocable license to use the
              service for its intended personal or authorized business purpose.
            </p>

            <p>
              This license does not transfer ownership of Handil’s software,
              designs, trademarks, systems or intellectual property.
            </p>
          </TermsSection>

          <TermsSection number="05" title="Acceptable Use">
            <p>You agree not to use Handil to:</p>

            <TermsList
              items={[
                "Violate applicable law or the rights of another person.",
                "Harass, threaten, exploit, impersonate or deceive others.",
                "Distribute malware, malicious code or harmful files.",
                "Attempt unauthorized access to accounts, systems or data.",
                "Circumvent security, authentication, access or usage controls.",
                "Interfere with the availability, operation or integrity of the service.",
                "Use automated systems to scrape, overload or abuse Handil.",
                "Send spam or unsolicited bulk communication.",
                "Upload or distribute unlawful, infringing or abusive content.",
                "Use Handil to facilitate fraud or other harmful activity.",
                "Reverse engineer or copy the service except where applicable law permits it.",
              ]}
            />
          </TermsSection>

          <TermsSection number="06" title="User Content">
            <p>
              You retain ownership of content that you lawfully create and
              submit to Handil.
            </p>

            <p>
              You grant Handil a limited license to host, store, process,
              transmit, reproduce and display your content only as reasonably
              necessary to operate, secure and improve the service or comply
              with legal obligations.
            </p>

            <p>
              You are responsible for ensuring that you have the rights and
              permissions necessary to upload or share content.
            </p>
          </TermsSection>

          <TermsSection number="07" title="Content Storage and Deletion">
            <p>
              Handil may provide options for storing, downloading, organizing
              or deleting content. The exact behavior may depend on the feature,
              device, account status, synchronization state and backup cycle.
            </p>

            <p>
              Deleting content from one location may not immediately remove all
              backup or synchronized copies. Handil may retain limited
              information where required for security, legal compliance,
              dispute resolution or technical recovery.
            </p>

            <p>
              Before launch, these terms must be updated to match Handil’s
              actual cloud-bin, backup and permanent-deletion behavior.
            </p>
          </TermsSection>

          <TermsSection number="08" title="Privacy">
            <p>
              Handil’s collection and use of personal information is described
              in the{" "}
              <Link
                to="/privacy-policy"
                className="font-bold text-sky-600 hover:text-sky-700"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p>
              You are responsible for obtaining appropriate permission before
              uploading or sharing another person’s personal information.
            </p>
          </TermsSection>

          <TermsSection number="09" title="Third-Party Services">
            <p>
              Handil may integrate with or link to third-party services. Those
              services may have separate terms, privacy policies and technical
              requirements.
            </p>

            <p>
              Handil is not responsible for third-party products or services
              except to the extent required by applicable law.
            </p>
          </TermsSection>

          <TermsSection number="10" title="Early Access and Beta Features">
            <p>
              Certain services may be offered as beta, preview, testing or
              early-access functionality.
            </p>

            <p>
              These features may be incomplete, unavailable, changed or
              discontinued. They may contain defects and should not be relied
              upon for critical or emergency communication.
            </p>
          </TermsSection>

          <TermsSection number="11" title="Artificial Intelligence">
            <p>
              Handil may introduce AI-assisted features. AI output may be
              incomplete, inaccurate or inappropriate for a particular use.
            </p>

            <p>
              Users should review AI-generated output before relying on or
              sharing it. AI features must not be used as a substitute for
              professional legal, medical, financial or safety advice.
            </p>

            <p>
              This section must be revised when Handil’s actual AI architecture
              and product behavior are finalized.
            </p>
          </TermsSection>

          <TermsSection number="12" title="Intellectual Property">
            <p>
              Handil and its licensors retain ownership of the service,
              software, interfaces, branding, documentation and related
              intellectual property.
            </p>

            <p>
              “Handil,” associated logos and product branding may not be used
              without written permission.
            </p>
          </TermsSection>

          <TermsSection number="13" title="Feedback">
            <p>
              You may voluntarily provide ideas, suggestions or feedback.
              Handil may use that feedback without restriction or compensation,
              provided that it does not identify you publicly without
              permission.
            </p>
          </TermsSection>

          <TermsSection number="14" title="Service Changes">
            <p>
              Handil may add, modify, suspend or discontinue features as the
              product evolves.
            </p>

            <p>
              Where reasonably possible, Handil may provide notice before
              material changes that significantly affect users.
            </p>
          </TermsSection>

          <TermsSection number="15" title="Suspension and Termination">
            <p>
              Handil may restrict, suspend or terminate access when reasonably
              necessary to:
            </p>

            <TermsList
              items={[
                "Protect users, systems or the public.",
                "Investigate suspected abuse or security threats.",
                "Address violations of these terms.",
                "Comply with legal requirements.",
                "Prevent fraud, unauthorized access or service disruption.",
              ]}
            />

            <p>
              You may stop using Handil and request account deletion subject to
              the Privacy Policy and applicable retention requirements.
            </p>
          </TermsSection>

          <TermsSection number="16" title="Service Availability">
            <p>
              Handil aims to provide a dependable service but does not guarantee
              uninterrupted, error-free or universally available operation.
            </p>

            <p>
              Availability may be affected by maintenance, provider outages,
              network conditions, device limitations, security events and other
              factors outside Handil’s control.
            </p>
          </TermsSection>

          <TermsSection number="17" title="Disclaimers">
            <p>
              To the maximum extent permitted by applicable law, Handil is
              provided on an “as is” and “as available” basis.
            </p>

            <p>
              Handil disclaims warranties that are not expressly stated,
              including implied warranties of merchantability, fitness for a
              particular purpose and non-infringement, where such disclaimers
              are legally permitted.
            </p>

            <p>
              Some jurisdictions do not allow certain warranty exclusions, so
              parts of this section may not apply to you.
            </p>
          </TermsSection>

          <TermsSection number="18" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Handil and its
              affiliates will not be liable for indirect, incidental, special,
              consequential or punitive damages arising from use of or
              inability to use the service.
            </p>

            <p>
              The final limitation, liability cap and exclusions must be
              drafted by legal counsel based on Handil’s entity, product,
              pricing model and operating jurisdictions.
            </p>
          </TermsSection>

          <TermsSection number="19" title="Indemnification">
            <p>
              Where permitted by law, you agree to be responsible for claims,
              losses or expenses resulting from your unlawful use of Handil,
              violation of these terms or infringement of another person’s
              rights.
            </p>

            <p>
              The final scope of indemnification should be reviewed by legal
              counsel.
            </p>
          </TermsSection>

          <TermsSection number="20" title="Governing Law and Disputes">
            <p>
              The final terms must identify the governing law, jurisdiction,
              dispute-resolution procedure, arbitration provisions and any
              applicable consumer exceptions.
            </p>

            <p>
              Do not publish this section until Handil’s legal entity and
              principal place of business are confirmed and an attorney has
              reviewed the required language.
            </p>
          </TermsSection>

          <TermsSection number="21" title="Changes to These Terms">
            <p>
              Handil may update these terms as the service or legal requirements
              change.
            </p>

            <p>
              Material changes may be communicated through the application,
              website, email or another appropriate method. Continued use after
              the effective date may constitute acceptance where permitted by
              law.
            </p>
          </TermsSection>

          <TermsSection number="22" title="Contact">
            <p>Questions about these terms may be sent to:</p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-black text-slate-950">
                Handil Support
              </p>

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
          </TermsSection>
        </article>
      </section>
    </main>
  );
}

function TermsHeader() {
  return (
    <header className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-28 text-white md:px-12 md:pb-24 md:pt-32">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex rounded-2xl bg-white p-3 transition hover:-translate-y-0.5"
          aria-label="Go to Handil home page"
        >
          <Logo />
        </Link>

        <p className="mt-14 font-black uppercase tracking-[0.24em] text-sky-400">
          Rules for using Handil
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-7xl">
          Terms of Service
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          The responsibilities, permissions and conditions that apply when
          accessing or using Handil.
        </p>

        <p className="mt-8 text-sm font-semibold text-slate-400">
          Effective date: {EFFECTIVE_DATE}
        </p>
      </div>
    </header>
  );
}

function TermsSection({ number, title, children }) {
  return (
    <section className="rounded-[36px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
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

function TermsList({ items }) {
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

export default Terms;