import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/shared/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Silver Axis collects, uses, protects, and shares personal information.',
};

const SECTIONS: LegalSection[] = [
  {
    title: 'Information we collect',
    paragraphs: [
      'We collect information you choose to provide when you contact us, request a proposal, apply for a role, or work with us. We may also receive limited technical and usage information when you visit our website.',
    ],
    bullets: [
      'Contact details, such as your name, work email, phone number, company, and job title.',
      'Project information, including requirements, files, messages, feedback, and commercial details.',
      'Recruitment information, such as your résumé, portfolio, employment history, and interview notes.',
      'Technical information, including browser type, device type, approximate location, referring page, and website activity.',
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use personal information only where it is reasonably necessary to operate our business, provide requested services, protect our systems, and communicate with you.',
    ],
    bullets: [
      'Respond to enquiries, prepare proposals, and manage client relationships.',
      'Plan, deliver, support, and improve our software and professional services.',
      'Process applications and communicate with candidates.',
      'Maintain website security, diagnose technical issues, and understand performance.',
      'Meet legal, accounting, and contractual obligations.',
    ],
  },
  {
    title: 'Legal grounds for processing',
    paragraphs: [
      'Depending on where you are located, we rely on one or more lawful grounds: performing a contract, taking steps at your request before a contract, pursuing legitimate business interests, complying with a legal obligation, or acting with your consent.',
    ],
  },
  {
    title: 'How we share information',
    paragraphs: [
      'We do not sell personal information. We may share it with trusted service providers that support hosting, communications, analytics, recruitment, accounting, or project delivery. These providers may use the information only to perform services for us.',
      'We may also disclose information when required by law, to protect rights or safety, during a business reorganisation, or with your direction or consent.',
    ],
  },
  {
    title: 'International transfers',
    paragraphs: [
      'Silver Axis and its service providers may process information in countries other than the country where it was collected. Where required, we use appropriate contractual and organisational safeguards for these transfers.',
    ],
  },
  {
    title: 'Retention',
    paragraphs: [
      'We retain personal information only for as long as needed for the purpose for which it was collected, including contractual, legal, accounting, security, and dispute-resolution requirements. Retention periods vary by record type and relationship.',
    ],
  },
  {
    title: 'Security',
    paragraphs: [
      'We use reasonable technical and organisational measures designed to protect personal information against unauthorised access, alteration, disclosure, or loss. No internet-based system can be guaranteed completely secure.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'Your rights depend on your location and may include access, correction, deletion, restriction, objection, portability, withdrawal of consent, and the right to complain to a data protection authority.',
      'To make a request, contact us using the details below. We may need to verify your identity before completing it.',
    ],
  },
  {
    title: 'Children and external services',
    paragraphs: [
      'Our website and services are intended for businesses and are not directed to children. We do not knowingly collect personal information from children.',
      'Our website may link to services operated by other organisations. Their privacy practices are governed by their own notices, and we are not responsible for those services.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may update this policy as our services or legal obligations change. The effective date above identifies the latest version.',
      'Questions or privacy requests can be sent to info@silveraxisltd.com. You may also write to Silver Axis in Lahore, Pakistan.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      effectiveDate="1 August 2026"
      introduction="This policy explains how Silver Axis collects, uses, shares, and protects personal information when you visit our website, contact us, apply to work with us, or use our services."
      sections={SECTIONS}
    />
  );
}
