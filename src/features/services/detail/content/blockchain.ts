import type { PracticeDraft } from '../types';
import { banner, insightPosts } from './_shared';

export const blockchain: PracticeDraft = {
  slug: 'blockchain',
  crumb: 'Blockchain',
  meta: {
    title: 'Blockchain Development',
    description:
      'Selective ledger and smart-contract work when trust and auditability matter—wallets, contracts, and integrations that fit your product.',
  },
  hero: {
    eyebrow: 'Blockchain Development',
    title: 'Ledger work only where trust and auditability truly need it.',
    body: 'We help you decide when on-chain is worth it, then implement the minimum viable trust layer—wallets, contracts, and integrations that fit your product story without crypto theatre.',
    highlights: [
      { label: 'Approach', value: 'Selective' },
      { label: 'Focus', value: 'Auditability' },
      { label: 'Handoff', value: 'Documented' },
    ],
  },
  involves: {
    eyebrow: 'The service',
    title: 'What this service involves',
    items: [
      { title: 'Feasibility & fit', body: 'Honest assessment of when a ledger helps—and when a database is enough.' },
      { title: 'Smart contracts', body: 'Focused Solidity or equivalent contracts with tests and clear upgrade paths.' },
      { title: 'Wallet flows', body: 'Connect, sign, and recovery UX that non-crypto users can survive.' },
      { title: 'Indexing & reads', body: 'Reliable off-chain reads so your product UI does not wait on the chain.' },
      { title: 'Integrations', body: 'Bridges between ERP, payments, and on-chain events without fragile glue.' },
      { title: 'Security review prep', body: 'Threat models and audit readiness before mainnet risk.' },
    ],
  },
  ownership: {
    eyebrow: 'Ownership',
    title: 'Keys, contracts, and repos under your control.',
    body: 'Deployment keys, contract ownership, and monitoring stay with you. We design for upgradeability and ops runbooks so chain components do not become unreachable vendor magic.',
  },
  audience: {
    eyebrow: 'The audience',
    title: 'Teams with a real trust problem—not a buzzword mandate.',
    columns: [
      [
        'Products that need shared, auditable settlement between parties',
        'Marketplaces exploring escrow or provenance on-chain',
        'Enterprises piloting tokenized assets with compliance constraints',
      ],
      [
        'Web3-adjacent products that still need serious backend craft',
        'Teams burned by overbuilt chain architecture',
        'Founders who want a thin on-chain layer and a strong off-chain product',
      ],
    ],
  },
  principles: {
    eyebrow: 'Our principles',
    title: 'What good looks like in blockchain work.',
    items: [
      { title: 'Minimum viable chain', body: 'Put on-chain only what must be shared, immutable, or settlement-critical.' },
      { title: 'UX over ideology', body: 'Users should feel the product benefit—not the cryptography.' },
      { title: 'Test like money is real', body: 'Fork tests, invariants, and staged deploys before mainnet.' },
      { title: 'Ops is part of design', body: 'Monitoring, pausing, and upgrades planned before launch day.' },
    ],
  },
  process: {
    eyebrow: 'How we deliver',
    title: 'From trust question to production contracts.',
    steps: [
      { number: '01', title: 'Challenge the need', body: 'Confirm the ledger solves a real problem versus a conventional system.' },
      { number: '02', title: 'Design the thin layer', body: 'Contracts, events, and off-chain services with clear boundaries.' },
      { number: '03', title: 'Build & harden', body: 'Tests, simulations, and audit prep on testnets.' },
      { number: '04', title: 'Deploy & operate', body: 'Mainnet playbooks, monitoring, and ownership transfer.' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Selective chain engineering.',
    body: 'Enough depth to ship safely—without forcing every feature onto a ledger.',
    items: [
      'Smart contract development',
      'Token & escrow patterns',
      'Wallet UX integration',
      'Event indexing',
      'Web2 ↔ Web3 bridges',
      'Testnet & mainnet ops',
      'Audit liaison support',
      'Threat modeling',
    ],
  },
  stack: {
    eyebrow: 'Toolkit',
    title: 'Chain tooling when it earns its place.',
    body: 'Mature stacks with strong testing ecosystems.',
    items: ['Ethereum / L2s', 'Solidity', 'Hardhat / Foundry', 'ethers.js', 'The Graph / indexers', 'OpenZeppelin', 'WalletConnect', 'Monitoring'],
  },
  solutions: {
    eyebrow: 'Solutions',
    title: 'Trust layers that serve the product.',
    rows: [
      { label: 'Settlement & escrow', body: 'Multi-party funds release with transparent rules and dispute hooks.' },
      { label: 'Provenance', body: 'Traceable asset or certificate histories for partners and auditors.' },
      { label: 'Access credentials', body: 'On-chain attestations paired with familiar off-chain auth.' },
      { label: 'Internal pilots', body: 'Controlled experiments with clear kill criteria and exit ramps.' },
    ],
  },
  excellence: {
    eyebrow: 'Technical excellence',
    title: 'Security posture over novelty.',
    items: [
      { title: 'Invariant tests', body: 'Properties that must never break under adversarial input.' },
      { title: 'Least privilege', body: 'Roles and pausability designed before deploy.' },
      { title: 'Upgrade caution', body: 'Explicit upgrade paths—or intentional immutability.' },
      { title: 'Key hygiene', body: 'Multisig and custody patterns matched to risk.' },
    ],
  },
  faq: [
    {
      id: 'need',
      question: 'How do I know if I need blockchain?',
      answer:
        'If multiple distrusting parties need a shared source of truth, or settlement must be independently verifiable, it may fit. If you only need a database with an audit log, we will say so.',
    },
    {
      id: 'audit',
      question: 'Do you include a security audit?',
      answer:
        'We prepare contracts for external audit and can coordinate with audit firms. For meaningful value at risk, an independent audit is strongly recommended before mainnet.',
    },
    {
      id: 'gas',
      question: 'How do you handle costs and scaling?',
      answer:
        'We prefer L2s and batching patterns when appropriate, keep on-chain state minimal, and measure costs during design—not after launch.',
    },
    {
      id: 'team',
      question: 'Can you work with our existing product team?',
      answer:
        'Yes. We typically own the chain slice while integrating with your web/mobile and backend teams through clear APIs and events.',
    },
    {
      id: 'start',
      question: 'How do engagements start?',
      answer:
        'With a fit workshop: threat model, stakeholders, and a go/no-go on chain scope—then a testnet MVP if it clears the bar.',
    },
  ],
  insights: {
    eyebrow: 'Thought leadership',
    title: 'Our knowledge sharing',
    posts: insightPosts('Blockchain'),
  },
  banner: banner('Not sure if you need a chain? Ask us for an honest fit call.'),
};
