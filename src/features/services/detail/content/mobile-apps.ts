import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const mobileApps: PracticeDraft = {
  slug: 'mobile-apps',
  crumb: 'Mobile Apps',
  meta: {
    title: 'Mobile App Development',
    description:
      'Native-feel iOS and Android apps with durable release pipelines, offline-aware flows, and ownership your team can run.',
  },
  hero: {
    eyebrow: 'Mobile App Development',
    title: 'Mobile products that feel native—and stay shippable after handoff.',
    body: 'We build iOS and Android experiences people actually use offline and on the go, with release pipelines, store readiness, and documentation your team can operate.',
    highlights: [
      { label: 'Platforms', value: 'iOS + Android' },
      { label: 'Store-ready builds', value: 'CI-driven' },
      { label: 'Decision demos', value: 'Weekly' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'iOS applications', body: 'Swift-first experiences tuned for Apple Human Interface patterns and App Store review.' },
      { title: 'Android applications', body: 'Kotlin and Material-aware apps that behave well across device classes.' },
      { title: 'Cross-platform options', body: 'Shared code where it pays off—without sacrificing platform feel where it matters.' },
      { title: 'Offline-aware flows', body: 'Sync, queues, and conflict handling for field and travel use cases.' },
      { title: 'Push & notifications', body: 'Reliable messaging tied to real events—not noisy spam.' },
      { title: 'Release pipelines', body: 'TestFlight, Play tracks, and CI so shipping is routine.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Store accounts, code, and pipelines stay yours.',
    body: 'Certificates, signing, and repository access live under your organization. We leave runbooks for releases, crash triage, and store updates so mobile does not become a mystery vendor skill.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams that need mobile that survives the store.',
    columns: [
      [
        'Product teams extending a web product into mobile',
        'Field ops needing offline-capable staff tools',
        'Consumer brands launching a focused companion app',
      ],
      [
        'Startups validating mobile as a primary channel',
        'Enterprises replacing brittle hybrid shells',
        'Teams tired of release tribal knowledge',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in mobile.',
    items: [
      { title: 'Platform respect', body: 'Navigation, gestures, and typography follow platform norms users already know.' },
      { title: 'Offline is a first-class path', body: 'We design for flaky networks instead of pretending connectivity is perfect.' },
      { title: 'Release is a product', body: 'CI, beta tracks, and crash reporting ship with the app—not after launch week.' },
      { title: 'Thin clients, clear APIs', body: 'Business rules live where they can be tested and evolved safely.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From concept to store submission.',
    steps: [
      { number: '01', title: 'Define the jobs', body: 'Which mobile moments matter most—and which can stay on web.' },
      { number: '02', title: 'Prototype critical flows', body: 'Validate navigation and offline paths before heavy build.' },
      { number: '03', title: 'Build & beta', body: 'Internal and TestFlight/Play tracks with crash and analytics wiring.' },
      { number: '04', title: 'Launch & handoff', body: 'Store assets, review notes, and an ops playbook for updates.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'End-to-end mobile delivery.',
    body: 'Design collaboration, native or cross-platform engineering, and the backend contracts mobile depends on.',
    items: [
      'iOS (Swift) development',
      'Android (Kotlin) development',
      'Cross-platform (React Native / Flutter)',
      'Auth & secure storage',
      'Offline sync patterns',
      'Push notification systems',
      'App Store / Play readiness',
      'Crash & analytics setup',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Mobile tooling we trust in production.',
    body: 'Chosen for stability, hiring pool, and long-term maintainability.',
    items: ['Swift / SwiftUI', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'Fastlane', 'TestFlight', 'Play Console'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Mobile that fits how people work and shop.',
    rows: [
      { label: 'Consumer apps', body: 'Onboarding, accounts, and core journeys optimized for retention—not feature count.' },
      { label: 'Field & ops apps', body: 'Barcode, location, and offline capture for teams away from desks.' },
      { label: 'Companion apps', body: 'Mobile slices that deepen an existing web or SaaS product.' },
      { label: 'Internal mobile', body: 'Secure staff tools with MDM-friendly distribution options.' },
    ],
  },
  excellence: {
    eyebrow: 'Technical excellence',
    title: 'Quality users feel between taps.',
    items: [
      { title: 'Startup time', body: 'Cold starts and splash paths measured and trimmed.' },
      { title: 'Battery & network', body: 'Background work that respects OS limits.' },
      { title: 'Secure defaults', body: 'Keychain/Keystore, certificate pinning where warranted.' },
      { title: 'Store discipline', body: 'Privacy labels, permissions, and review-safe architecture.' },
    ],
  },
  faq: [
    {
      id: 'native',
      question: 'Native or cross-platform—how do you decide?',
      answer:
        'By product surface and team. Deep platform UX or heavy device APIs often favor native; shared business apps can win with React Native or Flutter. We recommend explicitly before build.',
    },
    {
      id: 'backend',
      question: 'Do you build the API layer too?',
      answer:
        'Yes. Mobile quality depends on clear contracts, auth, and sync. We build or extend backends as part of the same engagement when needed.',
    },
    {
      id: 'store',
      question: 'Do you handle App Store and Play submission?',
      answer:
        'We prepare builds, metadata, privacy disclosures, and review notes, and can manage submission with your accounts. Accounts and signing keys remain yours.',
    },
    {
      id: 'maintain',
      question: 'What happens after launch?',
      answer:
        'We can stay for iteration or hand off fully. Either way you get release pipelines, crash tooling, and docs so OS updates do not freeze the product.',
    },
    {
      id: 'start',
      question: 'How long to a first beta?',
      answer:
        'Many focused apps reach an internal beta in six to ten weeks after discovery. Scope and integrations drive the plan we share up front.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Mobile'),
  },
  banner: banner('Let’s scope the mobile product your users will actually open.'),
};
