import type { SiteConfig } from '../types';

/**
 * Helper to ensure internal paths respect Astro's base URL
 * (e.g. /flipedylabs/ on GitHub Pages vs / on custom domain)
 */
export function formatUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (cleanPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${cleanPath}`;
}

/**
 * Central configuration for Flipedy Labs website.
 * All repeated studio strings, metadata, URLs, and apps are defined here.
 */
export const siteConfig: SiteConfig = {
  name: 'Flipedy Labs',
  tagline: 'Thoughtful software crafted for everyday clarity.',
  description: 'Flipedy Labs is an independent software studio creating practical mobile applications, intelligent utilities, and refined digital products designed to solve real problems.',
  siteUrl: 'https://saurabhben10.github.io/flipedylabs',
  email: 'saurabh.shrma@outlook.com',
  developerName: 'Flipedy Labs',
  copyrightYear: 2026,
  privacyLastUpdated: 'November 2026',
  githubUrl: 'https://github.com/saurabhben10/flipedylabs',
  googlePlayDeveloperUrl: 'https://play.google.com/store/apps/developer?id=Flipedy+Labs',
  navItems: [
    { label: 'Home', href: '/' },
    { label: 'Apps', href: '/apps' },
    { label: 'About', href: '/about' },
    { label: 'Support', href: '/support' },
    { label: 'Privacy', href: '/privacy' },
  ],
  apps: [
    {
      id: 'cadence-care',
      slug: 'cadence-care',
      name: 'Cadence Care',
      icon: 'cadence-care',
      tagline: 'Built with heart for autism parents & pediatric therapists — every session, sensory note & makeup class in one calm place.',
      category: 'Autism Parenting & Therapy Care',
      description: 'Raising an autistic child means coordinating Speech & AAC, Occupational Therapy (Sensory Integration), ABA, and Special Ed every single week. Cadence Care replaces scattered WhatsApp threads and notebook tallies with one calm, private therapy calendar.',
      detailedDescription: [
        'Sensory overwhelm days, sleep regressions, and sudden illnesses happen — and rescheduling shouldn\'t mean losing track of paid therapy hours. Cadence Care links every missed class 1-to-1 to its replacement makeup date in distinct Adjustment Violet, with instant single-tap cross-references so neither parents nor therapists ever lose count.',
        'Jot down daily therapy wins, regulation cues, or home-practice goals right on the calendar (\'N\' day badges), track multi-therapist prepaid session packages down to the exact session left, and rest easy knowing your child\'s records stay 100% private on your phone with confirmation-protected deletes, instant Undo, and Biometric Sign-In.'
      ],
      features: [
        'Tailored for Speech/AAC, OT & Sensory Integration, ABA, Special Ed & Physio',
        'Stress-free 1-to-1 sensory-day & illness makeup linking (Adjustment Violet)',
        'Daily therapy & home-carryover notes (\'N\' calendar badges) for every session',
        'Crystal-clear prepaid therapy package ledger — know every session & rupee left',
        'Multi-child & multi-therapist support (Daily, Weekly, or Monthly cadences)',
        '100% private on-device child records, Biometric Sign-In & Safe-Delete Undo protection'
      ],
      status: 'released',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.flipedylabs.cadence_care',
      privacyPolicyUrl: '/privacy/cadence-care',
      supportUrl: '/support?app=cadence-care',
      version: '1.2.2',
      tags: ['Autism Support', 'Speech & OT', 'ABA & SpEd', 'Private On-Device'],
      privacySections: [
        {
          title: 'Scope, Sensitivity & Intended Audience (Adults 18+)',
          paragraphs: [
            'This policy applies to the Android application Cadence Care (package com.flipedylabs.cadence_care), published by Flipedy Labs. We understand that families raising autistic and neurodivergent children entrust deeply personal routines to their daily organiser.',
            'Cadence Care is an attendance, makeup-session, and therapy-fee organiser built exclusively for adult parents, caregivers, and pediatric therapists aged 18 and over. The app is not directed at children and is not intended to be operated by children.'
          ]
        },
        {
          title: '100% Private On-Device Storage (No Cloud Upload in Free Edition)',
          paragraphs: [
            'Every child profile, therapy discipline, therapist schedule, attendance log, sensory/home-practice day note, and prepaid fee ledger entry you enter in Cadence Care Free Edition is stored strictly inside your Android phone\'s private application storage.',
            'Flipedy Labs does not operate backend servers for the Free Edition and never receives, views, sells, or shares your child\'s therapy records.'
          ],
          bullets: [
            'Accounts in the Free Edition are local on-device profiles so your role and preferences load automatically on your phone.',
            'Cloud backup and device-to-device cloud transfer are disabled in the Free Edition (allowBackup="false"). Encrypted Cloud Backup & 1-Tap Restore, along with live Parent ↔ Therapist cross-phone sync, will be offered exclusively in the upcoming standalone Cadence Care Prime app.'
          ]
        },
        {
          title: 'Permissions & Why We Use Them',
          bullets: [
            'Notifications (POST_NOTIFICATIONS) & Device Restart Schedule Sync (RECEIVE_BOOT_COMPLETED, WAKE_LOCK, VIBRATE): delivers timely local class reminders on your phone so you can mark sessions Present or Absent right after therapy.',
            'Biometric Unlock (USE_BIOMETRIC): optional Fingerprint or Face Unlock to keep your family\'s therapy ledger private on shared phones. Verification is handled strictly by Android hardware; Cadence Care never accesses or stores biometric data.',
            'Internet, Network State & Advertising ID (INTERNET, ACCESS_NETWORK_STATE, com.google.android.gms.permission.AD_ID): used solely to serve family-safe banner advertisements in the free edition.'
          ]
        },
        {
          title: 'Family-Safe Advertising (Google AdMob)',
          paragraphs: [
            'To keep Cadence Care free for families and independent therapists, the Free Edition displays a small bottom banner served by Google AdMob, strictly configured for family-appropriate content (maximum ad content rating: PG). To deliver, frequency-cap, and measure ads and prevent fraud, Google AdMob may collect your device\'s Android Advertising ID, coarse IP-based region, ad interaction signals, and SDK crash/performance diagnostics.',
            'You can review how Google processes partner-app data at https://policies.google.com/technologies/partner-sites, and you can reset/delete your Advertising ID or opt out of personalised ads anytime under Android Settings → Google → Ads.'
          ]
        },
        {
          title: 'Safe Deletion, Reset Protection & Full User Control',
          paragraphs: [
            'Because all therapy records reside locally on your device, you remain in complete control at all times:'
          ],
          bullets: [
            'Every individual delete inside the app asks for confirmation first and offers an instant Undo option to prevent accidental taps.',
            'You can wipe all profiles, sessions, notes, and payment records at any time from Profile & Settings → Danger Zone → Reset All Data (protected by a typed RESET safeguard), or permanently erase everything via Android Settings → Apps → Cadence Care → Storage → Clear storage, or by uninstalling the app.'
          ]
        },
        {
          title: 'Updates to This Policy',
          paragraphs: [
            'We may update this Privacy Policy as we refine Cadence Care or launch companion editions such as Cadence Care Prime. Any updates will be published at this URL with a revised date.'
          ]
        }
      ]
    },
    {
      id: 'nightjar',
      slug: 'nightjar',
      name: 'Nightjar',
      tagline: 'Intelligent schedule optimization and shift management for modern teams.',
      category: 'Productivity & Utilities',
      description: 'An intuitive, AI-assisted shift management tool designed to simplify complex work schedules, prevent burnout, and streamline shift coordination with effortless precision.',
      detailedDescription: [
        'Nightjar is designed to remove the friction from dynamic shift planning and rota management.',
        'With intelligent conflict detection, automated break planning, and zero-clutter mobile interfaces, Nightjar ensures working professionals and teams spend less time scheduling and more time getting things done.'
      ],
      features: [
        'Intelligent shift pattern detection & conflict avoidance',
        'Offline-first architecture with instantaneous local sync',
        'Custom shift rotation templates and exportable summaries',
        'Privacy-respecting local storage with zero unnecessary tracking'
      ],
      status: 'coming-soon',
      privacyPolicyUrl: '/privacy/nightjar',
      supportUrl: '/support?app=nightjar',
      version: '1.0.0-preview',
      tags: ['Android', 'Productivity', 'AI Tools', 'Offline-First']
    }
  ]
};

export const philosophyCards = [
  {
    title: 'Practical by design',
    description: 'Products should solve clear problems with direct, reliable utility rather than bloated feature lists.',
    iconName: 'target'
  },
  {
    title: 'AI where it helps',
    description: 'We leverage artificial intelligence strictly where it genuinely improves the user experience and automates repetitive friction.',
    iconName: 'sparkles'
  },
  {
    title: 'Built to evolve',
    description: 'Our software is engineered with modular, durable foundations so it can continuously improve based on real-world usage.',
    iconName: 'refresh-cw'
  },
  {
    title: 'User focused',
    description: 'Simple, frictionless interfaces and dependable functionality always take precedence over unnecessary complexity.',
    iconName: 'user-check'
  }
];

export const studioPrinciples = [
  {
    title: 'Zero Bloat',
    description: 'Clean, lightweight architecture engineered for instant startup, low battery consumption, and minimal memory footprint.'
  },
  {
    title: 'Privacy by Default',
    description: 'Transparent data practices. We do not sell data or monetize personal privacy. Offline functionality is prioritized whenever feasible.'
  },
  {
    title: 'Continuous Refinement',
    description: 'Rapid feedback loops, direct developer support, and consistent updates that actively respond to real user workflows.'
  }
];
