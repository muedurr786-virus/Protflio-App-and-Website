import { Project, ExperienceItem, AwardItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_product_design_1793974104317.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'luminary-financial-os',
    title: 'Luminary Financial OS',
    subtitle: 'Institutional wealth management platform & multi-market trading interface',
    client: 'Luminary Capital Global',
    year: '2025',
    category: 'product',
    categoryLabel: 'Product Design & Fintech',
    role: 'Lead Product Designer',
    description: 'Re-architected an algorithmic wealth management interface handling $1.2B daily asset volume. Designed complex multi-currency order books, real-time depth charts, and automated portfolio rebalancing workflows with WCAG AA compliance.',
    coverImage: '/src/assets/images/project_financial_os_1793974105222.jpg',
    secondaryImages: [
      '/src/assets/images/hero_product_design_1793974104317.jpg',
    ],
    accentColor: '#6366F1',
    bentoSpan: 'col-span-1 lg:col-span-2 row-span-1 lg:row-span-2',
    featured: true,
    metrics: [
      { value: '$1.2B+', label: 'Asset Volume', context: 'Transacted through redesign in first 180 days' },
      { value: '38%', label: 'Task Velocity', context: 'Reduction in order execution latency for traders' },
      { value: '99.4%', label: 'Error Prevention', context: 'Zero catastrophic trade submission incidents' },
    ],
    tags: ['Fintech Systems', 'Information Architecture', 'WCAG AA', 'Design Tokens', 'Data Visualization'],
    tools: ['Figma', 'Protopie', 'TypeScript', 'Tailwind CSS', 'Highcharts'],
    caseStudy: {
      problem: 'Enterprise portfolio managers were juggling 4 disparate fragmented tools with inconsistent hotkeys, cognitive overload from clutter, and high execution error risks on critical $500k+ trades.',
      solution: 'Crafted a unified dark-mode command cockpit with modular docking panes, high-contrast tabular figures, predictive trade verification guards, and sub-100ms keyboard navigation shortcuts.',
      roleDescription: 'Spearheaded 16 user research sessions across hedge funds in NYC & Zurich, mapped complex algorithmic workflows, designed high-fidelity interactive component libraries, and supervised engineering handoff.',
      duration: '6 Months',
      team: ['Lead Product Designer', '2 Product Managers', '5 Frontend Engineers', '1 Quant Strategist'],
      tokens: [
        { name: '--surface-canvas', value: '#080A11', role: 'Primary deep background', type: 'color' },
        { name: '--surface-panel', value: '#111524', role: 'Elevated container surface', type: 'color' },
        { name: '--accent-indigo', value: '#6366F1', role: 'Primary intent and CTAs', type: 'color' },
        { name: '--emerald-trade', value: '#10B981', role: 'Positive yield and executions', type: 'color' },
        { name: '--rose-trade', value: '#F43F5E', role: 'Negative delta indicator', type: 'color' },
        { name: '--radius-panel', value: '12px', role: 'Standard window boundary', type: 'radius' },
      ],
      keyFeatures: [
        {
          title: 'Dynamic Liquidity Heatmap',
          description: 'Custom canvas-accelerated order book visualization with micro-scale depth indicators and real-time bid-ask spread tracking.'
        },
        {
          title: 'Fail-Safe Execution Shield',
          description: 'Two-stage modal verification pattern with automatic slippage tolerance alerts and physical hardware key authorization support.'
        },
        {
          title: 'Adaptive Multi-Screen Workspaces',
          description: 'Persistent workspace layouts that seamlessly auto-reposition across single ultra-wide and dual 4K monitor arrays.'
        }
      ],
      researchInsights: [
        'Traders look at screens for 9+ hours daily; standard saturated palettes cause severe optical fatigue by 2:00 PM.',
        'Speed is paramount, but accidental executions cause immense panic. Critical actions needed distinctive tactile weight.',
        'Data density must be controllable: power traders prefer compact 28px rows, while executives need high-level summaries.'
      ],
      outcomes: [
        'Adopted by 48 institutional firms across North America and Europe within 6 months of rollout.',
        'Net Promoter Score increased from +18 to +64 among veteran portfolio directors.',
        'Featured in Design Systems Collective as an exemplary dark-mode financial workbench.'
      ],
      testimonial: {
        quote: 'The clarity and ergonomic precision transformed our trading desk. We shaved critical seconds off complex derivative entries without a single compliance oversight.',
        author: 'Elena Rostova',
        role: 'Chief Investment Officer',
        company: 'Luminary Global'
      }
    }
  },
  {
    id: 'aura-spatial-interface',
    title: 'Aura Spatial Glass OS',
    subtitle: 'Spatial interface system & depth interaction language for 3D headsets',
    client: 'Aura Spatial Labs',
    year: '2025',
    category: 'spatial',
    categoryLabel: 'Spatial Computing & 3D UI',
    role: 'Principal Spatial Systems Designer',
    description: 'Pioneered a glassmorphic spatial design language for vision-based computing. Formulated optical refraction guidelines, eye-tracking target hierarchies, and volumetric spatial anchors for collaborative 3D workspaces.',
    coverImage: '/src/assets/images/project_spatial_design_1793974104588.jpg',
    secondaryImages: [
      '/src/assets/images/hero_product_design_1793974104317.jpg',
    ],
    accentColor: '#38BDF8',
    bentoSpan: 'col-span-1 lg:col-span-1 row-span-1 lg:row-span-1',
    featured: true,
    metrics: [
      { value: '44ms', label: 'Gaze Lock Latency', context: 'Average response time for eye-tracking hover states' },
      { value: '3.2x', label: 'Interaction Comfort', context: 'Reduction in arm fatigue over extended 45-minute spatial sessions' },
      { value: '100%', label: 'Dynamic Contrast', context: 'Adaptive background luminance compensation across real environments' }
    ],
    tags: ['VisionOS', 'Spatial Audio', 'Optics & Refraction', 'Hand Tracking', 'Volumetric Canvas'],
    tools: ['Blender', 'Reality Composer Pro', 'Figma Spatial', 'SwiftUI', 'Unity'],
    caseStudy: {
      problem: 'Conventional flat 2D skeuomorphic interfaces feel heavy, opaque, and claustrophobic when rendered directly into physical living rooms and collaborative office environments.',
      solution: 'Formulated dynamic physics-based glass materials that react in real-time to room ambient light, paired with gaze-directed depth parallax and micro-haptic spatial audio cues.',
      roleDescription: 'Authored complete spatial ergonomics specifications, built 3D prototype rigs in Unity and Reality Composer, and established minimum angular touch target sizes (60 arcminutes).',
      duration: '4 Months',
      team: ['Spatial Design Director', '2 Unity Engineers', '1 Audio Spatializer'],
      tokens: [
        { name: '--glass-material', value: 'rgba(255,255,255,0.06)', role: 'Standard spatial substrate', type: 'color' },
        { name: '--rim-glow', value: 'rgba(56,189,248,0.3)', role: 'Gaze convergence indicator', type: 'color' },
        { name: '--depth-layer-1', value: '0.8m z-distance', role: 'Active foreground pane', type: 'spacing' },
        { name: '--radius-spatial', value: '24px', role: 'Organic continuous corner curve', type: 'radius' },
      ],
      keyFeatures: [
        {
          title: 'Ambient Luminance Compensation',
          description: 'Shaders that continuously sample the camera pass-through stream to adjust text weight and border translucency for legible contrast against bright walls.'
        },
        {
          title: 'Micro-Pinch Velocity Targeter',
          description: 'Dynamic hit-box expansion when eye gaze lingers on small controls, reducing miss-clicks by 72%.'
        }
      ],
      researchInsights: [
        'Users experience severe disorientation if floating windows lag behind head orientation by more than 12ms.',
        'Pure black surfaces in augmented reality look like unnatural holes in the physical world; tinted specular reflections create grounded presence.'
      ],
      outcomes: [
        'Granted 2 design patents for spatial gaze target auto-expansion.',
        'Selected as showcase spatial UI framework for enterprise AR pilot cohorts.'
      ]
    }
  },
  {
    id: 'kroma-kinetic-identity',
    title: 'Kroma Brand & Kinetic Identity',
    subtitle: 'Brand architecture, generative motion system, and editorial publication',
    client: 'Kroma Architectural Foundry',
    year: '2024',
    category: 'branding',
    categoryLabel: 'Brand Identity & Editorial',
    role: 'Creative & Art Director',
    description: 'Comprehensive brand revitalization for an architectural foundry. Engineered a custom variable typeface, printed monograph system, tactile physical collateral, and responsive kinetic web presence.',
    coverImage: '/src/assets/images/project_brand_kinetic_1793974106411.jpg',
    secondaryImages: [
      '/src/assets/images/hero_product_design_1793974104317.jpg',
    ],
    accentColor: '#D97706',
    bentoSpan: 'col-span-1 lg:col-span-1 row-span-1 lg:row-span-1',
    featured: true,
    metrics: [
      { value: '300%', label: 'Press Reach', context: 'Editorial features in Wallpaper*, Dezeen, and Fast Company' },
      { value: '184%', label: 'Inbound Inquiries', context: 'Tier-1 architectural firm contract requests in 90 days' },
      { value: '10,000+', label: 'Typeface Downloads', context: 'Architects and agencies utilizing custom open specimen' }
    ],
    tags: ['Brand Strategy', 'Typography Design', 'Print Monograph', 'Motion Systems', 'Creative Direction'],
    tools: ['Glyphs 3', 'Cinema 4D', 'InDesign', 'Illustrator', 'Figma'],
    caseStudy: {
      problem: 'A prestigious 40-year-old architectural foundry was perceived as an antiquated supplier rather than an avant-garde engineering partner for world-class cultural institutions.',
      solution: 'Rebuilt the identity around the intersection of raw material weight and digital precision, marrying heavy tactile dark stationery with sleek dynamic web animation.',
      roleDescription: 'Directed brand voice, designed custom variable font Kroma Grotesk, supervised physical foil stamping and blind debossing print production, and led digital interactive guidelines.',
      duration: '5 Months',
      team: ['Art Director', '1 Type Designer', '1 Motion Designer', '1 Print Technologist'],
      tokens: [
        { name: '--foundry-noir', value: '#121214', role: 'Architectural charcoal black', type: 'color' },
        { name: '--warm-bone', value: '#E8E5DF', role: 'Raw cast stone neutral', type: 'color' },
        { name: '--bronze-foil', value: '#C99757', role: 'Metallic precision touchpoint', type: 'color' },
        { name: '--grid-modular', value: '24px', role: 'Rigid architectural baseline', type: 'spacing' },
      ],
      keyFeatures: [
        {
          title: 'Custom Variable Typeface',
          description: 'A 9-axis variable typeface echoing the angular structural trusses of modern cantilever architecture.'
        },
        {
          title: 'Tactile Monograph Specimen',
          description: 'A 240-page hardcover printed on Japanese unbleached paper featuring high-contrast black slate product staging.'
        }
      ],
      researchInsights: [
        'Pritzker Prize-winning architectural partners care deeply about sensory weight, paper grade, and typographic integrity.'
      ],
      outcomes: [
        'Awarded Red Dot: Best of the Best 2024 for Brand & Communication Design.',
        'Won Awwwards Site of the Day for the digital interactive monograph experience.'
      ],
      testimonial: {
        quote: 'The identity positioned us directly at the vanguard of modern structural art. Our client caliber shifted overnight.',
        author: 'Julian Vane',
        role: 'Managing Principal',
        company: 'Kroma Foundry'
      }
    }
  },
  {
    id: 'verve-health-ecosystem',
    title: 'Verve Health & Cognitive Tracker',
    subtitle: 'Mobile application & WatchOS health monitoring system with circadian flow',
    client: 'Verve BioTechnologies',
    year: '2024',
    category: 'mobile',
    categoryLabel: 'Mobile & Wearable Design',
    role: 'Staff Product Designer',
    description: 'Designed an ambient iOS and watchOS ecosystem tracking autonomic nervous system balance, HRV recovery, and cognitive flow state. Replaced anxious health graphs with calming, actionable biological guidance.',
    coverImage: '/src/assets/images/project_wearable_health_1793974105831.jpg',
    secondaryImages: [
      '/src/assets/images/project_financial_os_1793974105222.jpg',
    ],
    accentColor: '#10B981',
    bentoSpan: 'col-span-1 lg:col-span-2 row-span-1 lg:row-span-1',
    featured: true,
    metrics: [
      { value: '4.9★', label: 'App Store Rating', context: 'Over 85,000 verified member reviews' },
      { value: '71%', label: 'Day-30 Retention', context: 'Exceeding industry benchmark of 24% for health apps' },
      { value: '2.4M', label: 'Sleep Sessions', context: 'Analyzed with circadian wave visualization' }
    ],
    tags: ['iOS 18 Guidelines', 'WatchOS Complications', 'Biometric Viz', 'Micro-Interactions', 'Dark Mode Ergonomics'],
    tools: ['Figma', 'Protopie', 'SwiftUI', 'After Effects', 'Lottie'],
    caseStudy: {
      problem: 'Existing health trackers bombard stressed users with alarming red graphs and intimidating raw medical jargon, triggering health anxiety rather than healthy behavior change.',
      solution: 'Re-imagined health metrics into serene, living biological rings that softly adapt hue based on circadian time of day, delivering actionable guidance in plain human language.',
      roleDescription: 'Led end-to-end design for iOS and WatchOS apps, designed dynamic live activities and interactive lock-screen widgets, and partnered with cardiologists to validate sleep stage models.',
      duration: '7 Months',
      team: ['Staff Product Designer', 'Medical Advisor', '2 iOS Engineers', '1 ML Biostatistician'],
      tokens: [
        { name: '--serene-bg', value: '#0A0D14', role: 'Calm nocturnal dark canvas', type: 'color' },
        { name: '--circadian-teal', value: '#14B8A6', role: 'High autonomic balance & recovery', type: 'color' },
        { name: '--circadian-amber', value: '#F59E0B', role: 'Active cognitive load phase', type: 'color' },
        { name: '--radius-card', value: '20px', role: 'Soft tactile container curvature', type: 'radius' },
      ],
      keyFeatures: [
        {
          title: 'Circadian Phase Horizon',
          description: 'A dynamic organic gradient wave that maps your body temperature and melatonin dip throughout the 24-hour cycle.'
        },
        {
          title: 'Haptic Breath Pacer',
          description: 'Sub-audible Apple Watch Taptic engine pulses that synchronize diaphragmatic breathing to stabilize elevated heart rates.'
        }
      ],
      researchInsights: [
        'Users checking their phone in bed at night need zero pure white pixels; all typography must be warm, muted, and glare-free.'
      ],
      outcomes: [
        'Apple Design Award Nominee 2025 in Health & Well-being Category.',
        'Acquired over 450,000 paid subscribers within 12 months.'
      ],
      testimonial: {
        quote: 'Verve is the first tracker that brings genuine tranquility instead of panic. The craftsmanship of the UI sets a new industry standard.',
        author: 'Dr. Marcus Thorne',
        role: 'Neuroscientist & Author',
        company: 'Cognitive Health Institute'
      }
    }
  },
  {
    id: 'nexus-design-system',
    title: 'Nexus Multi-Brand Design System',
    subtitle: 'Unified enterprise token architecture, component foundry & Figma library',
    client: 'Global Cloud Platform',
    year: '2024',
    category: 'systems',
    categoryLabel: 'Design Systems & Infrastructure',
    role: 'Principal Design Systems Architect',
    description: 'Built a foundational design system serving 140+ product teams and 1,200 engineers. Engineered semantic W3C design tokens, WCAG AAA compliant color curves, and automated Figma-to-Code sync.',
    coverImage: '/src/assets/images/hero_product_design_1793974104317.jpg',
    secondaryImages: [
      '/src/assets/images/project_spatial_design_1793974104588.jpg',
    ],
    accentColor: '#8B5CF6',
    bentoSpan: 'col-span-1 lg:col-span-1 row-span-1 lg:row-span-1',
    featured: false,
    metrics: [
      { value: '140+', label: 'Product Squads', context: 'Building production features on Nexus' },
      { value: '45%', label: 'Sprint Speedup', context: 'Reduction in UI engineering delivery time' },
      { value: '0', label: 'Accessibility Bugs', context: 'Zero WCAG violations across all audited components' }
    ],
    tags: ['Design Tokens', 'Figma Variables', 'Component API', 'Accessibility', 'Automation'],
    tools: ['Figma Tokens', 'Storybook', 'TypeScript', 'GitHub Actions', 'Style Dictionary'],
    caseStudy: {
      problem: 'Over 12 fragmented sub-products had created 48 redundant button implementations, inconsistent focus rings, and an unsustainable backlog of accessibility defects.',
      solution: 'Architected a multi-tier token hierarchy (Global > Semantic > Component) with strict contract typing, automated contrast linting, and seamless theme switching.',
      roleDescription: 'Directed the core systems guild, established token taxonomy, created interactive documentation site, and trained 120 designers in token-first workflows.',
      duration: '8 Months',
      team: ['Design Systems Architect', '3 Core Engineers', '1 Tech Writer'],
      tokens: [
        { name: '--color-primary-base', value: '#8B5CF6', role: 'Global intent primary', type: 'color' },
        { name: '--color-bg-surface-1', value: '#0F121E', role: 'First elevation layer', type: 'color' },
        { name: '--spacing-unit', value: '4px', role: 'Universal spatial grid increment', type: 'spacing' },
        { name: '--radius-md', value: '8px', role: 'Standard interactive corner', type: 'radius' },
      ],
      keyFeatures: [
        {
          title: 'Automated Token Pipeline',
          description: 'GitHub Action linking Figma REST API variables directly into production CSS variables and iOS Swift enums in seconds.'
        },
        {
          title: 'Algorithmic Contrast Matrix',
          description: 'Dynamic APCA contrast validation guaranteeing legible text regardless of custom enterprise customer theme overrides.'
        }
      ],
      researchInsights: [
        'Design systems fail when designers feel restricted; our system prioritizes composable slot architecture over rigid monoliths.'
      ],
      outcomes: [
        'Consolidated 48 button variations down to 1 robust, accessible master component.',
        'Adopted by 100% of engineering squads across enterprise cloud suite.'
      ]
    }
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    period: '2023 — Present',
    role: 'Staff Product & Systems Designer',
    company: 'Luminary Systems Studio',
    location: 'San Francisco, CA / Remote',
    description: 'Guiding core product architecture, design tokens, and next-generation desktop & spatial interfaces for high-scale enterprise software products.',
    highlights: [
      'Led the design of a flagship financial cockpit handling over $1.2B in weekly capital transactions.',
      'Architected cross-platform design tokens supporting Web, macOS, iOS, and VisionOS.',
      'Mentored a team of 8 product designers and led weekly systems design critique.'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Senior Product Designer',
    company: 'Verve BioTechnologies',
    location: 'New York, NY',
    description: 'Directed end-to-end user experience for wearable biometric products and mobile applications across iOS and WatchOS platforms.',
    highlights: [
      'Created Apple Design Award nominated health visualization system with 85,000+ 5-star reviews.',
      'Engineered interactive prototype testing rigs that accelerated clinical trial onboarding by 52%.',
      'Collaborated closely with Swift/iOS engineers to implement sub-pixel fluid gesture physics.'
    ]
  },
  {
    period: '2019 — 2021',
    role: 'Brand & Interaction Designer',
    company: 'Monolith Design Agency',
    location: 'London, UK',
    description: 'Delivered brand identities, custom typography, 3D motion systems, and editorial web experiences for architectural and cultural clients.',
    highlights: [
      'Authored brand identities and interactive monographs for international cultural institutions.',
      'Won Red Dot Award for Communication Design and two Awwwards Site of the Day honors.',
      'Constructed physical and digital product showcases bridging typography and 3D rendering.'
    ]
  }
];

export const AWARDS: AwardItem[] = [
  { year: '2025', title: 'Apple Design Award Nominee', organization: 'Apple Inc.', project: 'Verve Health & Circadian Flow' },
  { year: '2024', title: 'Red Dot: Best of the Best', organization: 'Red Dot Design Museum', project: 'Kroma Brand Identity' },
  { year: '2024', title: 'Site of the Day', organization: 'Awwwards', project: 'Architectural Monograph' },
  { year: '2023', title: 'FWA of the Day', organization: 'Favorite Website Awards', project: 'Aura Spatial 3D Interface' },
  { year: '2022', title: 'Fast Company Innovation Award', organization: 'Fast Company', project: 'Cognitive Health Experience' }
];

export const TESTIMONIALS = [
  {
    quote: 'Rarely do you encounter a designer who operates with equal brilliance across high-level systems architecture and the sub-pixel tactile details of interactive motion.',
    author: 'Marcus Vance',
    role: 'VP of Product Engineering',
    company: 'Luminary Systems',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'Their work on our design system paid for itself within the first quarter. Our engineering sprint velocity doubled and our accessibility defects dropped to zero.',
    author: 'Sarah Jenkins',
    role: 'Head of Design',
    company: 'Aura Spatial Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    quote: 'The visual poise and typographic discipline brought an immense level of authority to our global launch. Truly an elite craftsman.',
    author: 'Julian Vane',
    role: 'Managing Principal',
    company: 'Kroma Foundry',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export const DESIGN_PHILOSOPHY = [
  {
    number: '01',
    title: 'Systems Over Silos',
    description: 'Great interfaces are not isolated page layouts; they are living, composable token ecosystems where typography, spatial math, and interaction physics reinforce one another.'
  },
  {
    number: '02',
    title: 'Zero Cognitive Friction',
    description: 'We eliminate gratuitous eye candy and decorative clutter. Every visual element, hairline border, and micro-interaction must serve human decision-making under real cognitive conditions.'
  },
  {
    number: '03',
    title: 'Sub-Pixel Tactility & Motion',
    description: 'Software should feel responsive to human biology. Spring curves, haptic feedback, and spatial depth ground the digital medium in sensory confidence.'
  },
  {
    number: '04',
    title: 'Code-Informed Craft',
    description: 'Designing with a deep understanding of browser compositors, CSS variables, and rendering engines ensures that visionary design concepts arrive intact in production.'
  }
];
