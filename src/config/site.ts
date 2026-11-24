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
      tagline: 'Autism & pediatric therapy session tracker for parents and therapists.',
      category: 'Parenting & Productivity',
      description: 'A calm, precise calendar for Speech, OT, ABA, Special Education and Physiotherapy schedules — with 1-to-1 makeup adjustments, day notes, class reminders and a prepaid session ledger.',
      detailedDescription: [
        'Cadence Care replaces scattered chats, paper diaries and confusing prepaid fee maths with one clear calendar for every child and every therapist.',
        'Parents and therapists register once with their role, and the app tailors itself automatically — complete with biometric sign-in, native Android class reminders and Google Cloud app backup.'
      ],
      features: [
        'Multi-child & multi-therapist schedules (Daily, Weekly, Monthly)',
        'Visual 1-to-1 missed-to-makeup adjustments with cross-referenced dates',
        'Calendar day notes, class push reminders & Present / Absent tracking',
        'Prepaid advance session ledger per therapist',
        'Biometric sign-in and automatic Android cloud backup'
      ],
      status: 'released',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.flipedylabs.cadence_care',
      privacyPolicyUrl: '/privacy/cadence-care',
      supportUrl: '/support?app=cadence-care',
      version: '1.2.1',
      tags: ['Android', 'Parenting', 'Therapy Tracker', 'Offline-First'],
      privacySections: [
        {
          title: 'Scope & Intended Audience',
          paragraphs: [
            'This policy applies to the Android application Cadence Care (package com.flipedylabs.cadence_care), published by Flipedy Labs. Cadence Care is a scheduling, attendance and session-ledger organiser intended for adult parents, guardians and therapists aged 18 and over. It is not directed at children and is not intended to be operated by children.'
          ]
        },
        {
          title: 'Data You Enter Stays on Your Device',
          paragraphs: [
            'Names, child profiles, therapist details, schedules, attendance records, day notes and prepaid session ledger entries are stored locally in the app\'s private storage on your device. Flipedy Labs does not operate servers for the free edition of Cadence Care and does not receive, view, sell or share this information.'
          ],
          bullets: [
            'Accounts in the free edition are created locally on your device; they are not cloud accounts held by Flipedy Labs.',
            'Android Auto Backup is enabled so your app data can be backed up, encrypted, to your own Google account and restored when you reinstall or switch phones. This is handled by Google under your Google account settings, and you can turn it off at any time in Android Settings.'
          ]
        },
        {
          title: 'Permissions & Why We Use Them',
          bullets: [
            'Notifications (POST_NOTIFICATIONS) and start-up (RECEIVE_BOOT_COMPLETED, WAKE_LOCK, VIBRATE): to deliver scheduled class reminders on your phone so sessions can be marked Present or Absent on time, including after a restart.',
            'Biometric (USE_BIOMETRIC): optional fingerprint or face unlock. Verification is performed entirely by Android; Cadence Care never accesses or stores biometric data.',
            'Internet, network state and Advertising ID (INTERNET, ACCESS_NETWORK_STATE, AD_ID): used only to load advertisements in the free edition.'
          ]
        },
        {
          title: 'Advertising (Google AdMob)',
          paragraphs: [
            'The free edition of Cadence Care shows banner advertisements served by Google AdMob, limited to family-appropriate content (maximum rating: PG). To serve, limit and measure ads and to prevent fraud, Google may collect your device\'s Advertising ID, approximate location derived from IP address, ad interaction data and diagnostic information. This collection is performed by Google, not Flipedy Labs.',
            'You can learn how Google uses this data at https://policies.google.com/technologies/partner-sites. You can reset or delete your Advertising ID, or opt out of personalised ads, from Android Settings → Google → Ads (or Settings → Privacy → Ads, depending on your device).'
          ]
        },
        {
          title: 'Data Retention & Deletion',
          paragraphs: [
            'Because your data is stored on your device, you control it completely. You can edit or delete entries inside the app at any time. To erase all Cadence Care data, go to Android Settings → Apps → Cadence Care → Storage → Clear storage, or uninstall the app. Backed-up copies can be removed from your Google account backup settings.'
          ]
        },
        {
          title: 'Changes to This Policy',
          paragraphs: [
            'We may update this policy when we release new features or companion editions such as Cadence Care Prime. Updates will be published on this page with a revised date.'
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
