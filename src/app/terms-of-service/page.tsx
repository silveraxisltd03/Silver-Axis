import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/shared/components/layout/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing access to the Silver Axis website and professional services.',
};

const SECTIONS: LegalSection[] = [
  {
    title: 'Acceptance of these terms',
    paragraphs: [
      'These terms govern your use of the Silver Axis website. By accessing the website, you agree to these terms. If you engage us for professional services, the signed proposal, statement of work, or other written agreement between us will also apply and will take priority if there is a conflict.',
    ],
  },
  {
    title: 'Our services',
    paragraphs: [
      'Silver Axis provides product strategy, design, software development, automation, staff augmentation, and related technology services. The scope, schedule, deliverables, responsibilities, and acceptance process for paid work will be defined in a written agreement.',
      'Website descriptions are general information and do not constitute a binding offer, guarantee, or commitment to provide a particular service.',
    ],
  },
  {
    title: 'Your responsibilities',
    bullets: [
      'Provide timely, accurate information, access, decisions, and feedback required for delivery.',
      'Ensure that materials and instructions you provide are lawful and do not infringe third-party rights.',
      'Maintain appropriate security for your accounts, systems, credentials, and authorised users.',
      'Use our website and services lawfully and avoid interference, misuse, or unauthorised access.',
    ],
  },
  {
    title: 'Fees and payment',
    paragraphs: [
      'Fees, currencies, taxes, invoicing schedules, expenses, and payment deadlines will be stated in the applicable agreement. Unless that agreement says otherwise, invoices are payable by the stated due date and approved third-party costs are charged to the client.',
      'Late or disputed payments may affect delivery schedules. We may pause work after reasonable notice when an undisputed invoice remains overdue.',
    ],
  },
  {
    title: 'Intellectual property',
    paragraphs: [
      'Each party retains ownership of materials, methods, tools, software, and intellectual property it owned or developed independently before the engagement.',
      'Ownership and licence rights for project deliverables will be stated in the applicable agreement. Unless agreed otherwise, transfer of client-specific deliverables is conditional on full payment. Silver Axis may continue using general knowledge, skills, reusable tools, and non-confidential techniques developed during the work.',
    ],
  },
  {
    title: 'Third-party technology',
    paragraphs: [
      'Projects may use open-source software, cloud platforms, application programming interfaces, libraries, or other third-party services. Those items remain subject to their own terms, licences, availability, and fees. We are not responsible for changes made by their providers.',
    ],
  },
  {
    title: 'Confidentiality',
    paragraphs: [
      'Each party must protect non-public business, technical, and commercial information received from the other and use it only for the relevant relationship. This obligation does not apply to information that is public through no breach, already lawfully known, independently developed, or lawfully received from another source.',
    ],
  },
  {
    title: 'Warranties and disclaimers',
    paragraphs: [
      'We will perform agreed professional services with reasonable care and skill. Any additional warranty, support period, service level, or remedy must be stated in the applicable agreement.',
      'To the extent permitted by law, the website is provided as available and without implied warranties of uninterrupted operation, fitness for a particular purpose, or freedom from all errors.',
    ],
  },
  {
    title: 'Liability',
    paragraphs: [
      'Neither party is liable for indirect, incidental, special, punitive, or consequential loss, including lost profits, revenue, data, or business opportunity, except where such limitations are prohibited by law.',
      'Any financial liability cap and exclusions applicable to professional services will be set out in the relevant agreement. Nothing in these terms excludes liability that cannot lawfully be excluded.',
    ],
  },
  {
    title: 'Suspension and termination',
    paragraphs: [
      'We may restrict website access where necessary for security, maintenance, suspected misuse, or legal compliance. Professional engagements may be ended as described in the applicable agreement.',
      'Terms concerning payment, intellectual property, confidentiality, liability, and any provisions intended to survive will continue after termination.',
    ],
  },
  {
    title: 'Governing law and disputes',
    paragraphs: [
      'Unless a signed agreement specifies otherwise, these terms are governed by the laws of Pakistan. The parties will first attempt to resolve any dispute through good-faith discussion before starting formal proceedings.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may update these terms from time to time. The effective date above identifies the latest version, and continued website use after an update means the revised terms apply.',
      'Questions about these terms can be sent to info@silveraxisltd.com or addressed to Silver Axis in Lahore, Pakistan.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      effectiveDate="1 August 2026"
      introduction="These terms explain the rules for using the Silver Axis website and the principles that apply when you engage with our technology services."
      sections={SECTIONS}
    />
  );
}
