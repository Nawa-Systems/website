import type { Locale } from '../data/site';
export type { Locale };

export function getLocaleFromUrl(url: URL): Locale {
  const segment = url.pathname.split('/')[1];
  return segment === 'en' ? 'en' : 'ar';
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

// Given the current pathname (e.g. /ar/services) return the equivalent path
// in the other locale (e.g. /en/services). Route structure is kept symmetric
// between ar/en specifically so this swap is always valid.
export function localizedPath(pathname: string, target: Locale): string {
  const parts = pathname.split('/');
  parts[1] = target;
  return parts.join('/') || `/${target}`;
}

const dict = {
  ar: {
    skipToContent: 'تخطَّ إلى المحتوى',
    languageSwitch: 'English',
    startProject: 'ابدأ مشروعك',
    contactUs: 'تواصل معنا',
    footerRights: 'Nawa — نواة',
    footerTagline: 'شركة هندسة برمجيات مقرها الخليل، فلسطين.',
    footerDesc: 'شركة هندسة برمجيات من الخليل، فلسطين. نبني البرمجيات المخصّصة والبنية السحابية والأتمتة، ونربط الأنظمة القائمة ونحدّثها.',
    footerServices: 'الخدمات',
    footerCompany: 'نواة',
    footerContact: 'تواصل',
    navWork: 'الأعمال',
    navAbout: 'من نحن',
    navInsights: 'مقالات',
    navContact: 'تواصل معنا',
    email: 'البريد الإلكتروني',
    phone: 'هاتف',
    whatsapp: 'واتساب',
    github: 'جيتهاب',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط',
    notFoundTitle: 'الصفحة غير موجودة',
    notFoundBody: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    backHome: 'العودة إلى الرئيسية',
  },
  en: {
    skipToContent: 'Skip to content',
    languageSwitch: 'العربية',
    startProject: 'Start a project',
    contactUs: 'Contact us',
    footerRights: 'Nawa — نواة',
    footerTagline: 'A software engineering company based in Hebron, Palestine.',
    footerDesc: 'A software engineering company in Hebron, Palestine. We build custom software, cloud infrastructure and automation, and connect and modernize existing systems.',
    footerServices: 'Services',
    footerCompany: 'Nawa',
    footerContact: 'Contact',
    navWork: 'Work',
    navAbout: 'About',
    navInsights: 'Insights',
    navContact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    privacy: 'Privacy',
    terms: 'Terms',
    notFoundTitle: 'Page not found',
    notFoundBody: "The page you're looking for doesn't exist or has moved.",
    backHome: 'Back to home',
  },
} as const;

export function t(locale: Locale) {
  return dict[locale];
}
