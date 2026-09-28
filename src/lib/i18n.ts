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
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    whatsapp: 'واتساب',
    github: 'جيتهاب',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
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
    email: 'Email',
    phone: 'Phone',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    notFoundTitle: 'Page not found',
    notFoundBody: "The page you're looking for doesn't exist or has moved.",
    backHome: 'Back to home',
  },
} as const;

export function t(locale: Locale) {
  return dict[locale];
}
