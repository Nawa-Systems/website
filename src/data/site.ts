// Centralized company facts, navigation, services, and project metadata.
// Page prose (headlines, body copy) lives in the pages themselves, not here.

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ar';

export const company = {
  nameAr: 'نواة',
  nameEn: 'Nawa',
  nameFullAr: 'Nawa — نواة',
  nameFullEn: 'Nawa — نواة',
  domain: 'nawa.systems',
  github: 'https://github.com/Nawa-Systems',
  githubOrg: 'Nawa-Systems',
  email: 'support@nawa.systems',
  phone: '+972599914084',
  phoneDisplay: '+972 59 991 4084',
  whatsapp: '+972595248812',
  whatsappUrl: 'https://wa.me/972595248812',
  // TODO(verify): confirm exact Facebook URL against source docs before publish.
  facebook: null as string | null,
  location: {
    ar: 'الخليل، فلسطين',
    en: 'Hebron, Palestine',
  },
} as const;

export const contactLinks = {
  email: `mailto:${company.email}`,
  phone: `tel:${company.phone}`,
  whatsapp: company.whatsappUrl,
  github: company.github,
  facebook: company.facebook, // null until verified; render conditionally
};

export type ServiceSlug = 'custom-software' | 'cloud-infrastructure' | 'automation' | 'modernization-integration';

export interface ServiceEntry {
  slug: ServiceSlug;
  nameAr: string;
  nameEn: string;
}

// The four canonical service lines. No additions, no fragmentation.
export const services: ServiceEntry[] = [
  { slug: 'custom-software', nameAr: 'تطوير برمجيات مخصصة', nameEn: 'Custom Software Development' },
  { slug: 'cloud-infrastructure', nameAr: 'السحابة والبنية التحتية', nameEn: 'Cloud & Infrastructure' },
  { slug: 'automation', nameAr: 'الأتمتة', nameEn: 'Automation' },
  { slug: 'modernization-integration', nameAr: 'تحديث الأنظمة والتكامل', nameEn: 'Software Modernization & Integration' },
];

export interface NavItem {
  slug: string; // path segment relative to /{locale}/, '' = home
  labelAr: string;
  labelEn: string;
}

// Insights is intentionally omitted here (structural page exists, but is not
// linked from nav until there is real published content).
export const navItems: NavItem[] = [
  { slug: '', labelAr: 'الرئيسية', labelEn: 'Home' },
  { slug: 'services', labelAr: 'الخدمات', labelEn: 'Services' },
  { slug: 'work', labelAr: 'أعمالنا', labelEn: 'Work' },
  { slug: 'about', labelAr: 'من نحن', labelEn: 'About' },
  { slug: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
];

export type ProjectOwnership = 'product' | 'client';

export interface ProjectEntry {
  slug: 'rihab' | 'magic-car';
  nameAr: string;
  nameEn: string;
  ownership: ProjectOwnership;
  ownershipLabelAr: string;
  ownershipLabelEn: string;
  summaryAr: string;
  summaryEn: string;
  heroImage: string; // basename without extension, under /work/{slug}/
}

export const projects: ProjectEntry[] = [
  {
    slug: 'rihab',
    nameAr: 'رحاب',
    nameEn: 'Rihab',
    ownership: 'product',
    ownershipLabelAr: 'منتج نواة',
    ownershipLabelEn: 'A Nawa product',
    summaryAr: 'سوق رقمي متعدد المتاجر لفلسطين، من بناء وتشغيل نواة.',
    summaryEn: 'A multi-vendor digital marketplace for Palestine, built and operated by Nawa.',
    heroImage: 'marketplace-home',
  },
  {
    slug: 'magic-car',
    nameAr: 'ماجيك كار',
    nameEn: 'Magic Car',
    ownership: 'client',
    ownershipLabelAr: 'مشروع عميل',
    ownershipLabelEn: 'Client project',
    summaryAr: 'تكامل تطبيقات الطلب مع نظام ERP قائم لدى العميل، دون استبدال أنظمته.',
    summaryEn: "Ordering apps integrated with the client's existing ERP, without replacing it.",
    heroImage: 'product-catalog',
  },
];

// Founder identity is confirmed via founder.png but no approved name/title
// exists in any source document. Centralized here as a single TODO so the
// gap is visible in one place instead of scattered across pages.
export const founder = {
  photo: '/founder/founder',
  nameAr: null as string | null, // TODO: confirm founder name before publish
  nameEn: null as string | null, // TODO: confirm founder name before publish
  titleAr: null as string | null, // TODO: confirm founder title before publish
  titleEn: null as string | null, // TODO: confirm founder title before publish
};
