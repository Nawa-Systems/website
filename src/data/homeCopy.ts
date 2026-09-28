import type { Locale } from './site';

interface HomeCopy {
  heroKicker: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  processTitle: string;
  process: { step: string; label: string }[];
  servicesTitle: string;
  servicesIntro: string;
  servicesCta: string;
  workTitle: string;
  workIntro: string;
  workCta: string;
  principlesTitle: string;
  principles: { title: string; body: string }[];
  founderCta: string;
  contactTitle: string;
  contactBody: string;
  contactCta: string;
}

const copy: Record<Locale, HomeCopy> = {
  ar: {
    heroKicker: 'Nawa — نواة',
    heroTitle: 'شريك هندسي يملك تسليم البرمجيات من الفكرة إلى الإنتاج',
    heroBody:
      'نواة شركة هندسة برمجيات مقرها الخليل، فلسطين. نفهم مشكلتك التجارية، ونصمم الحل المناسب لحجمها الفعلي، ونتحمّل مسؤولية تسليمه — لا مجرد تنفيذ ما يُطلب.',
    heroPrimaryCta: 'ابدأ مشروعك',
    heroSecondaryCta: 'تعرّف على خدماتنا',
    processTitle: 'كيف نعمل',
    process: [
      { step: '01', label: 'الاكتشاف وفهم المشكلة' },
      { step: '02', label: 'تصميم الحل والبنية' },
      { step: '03', label: 'البناء والاختبار' },
      { step: '04', label: 'النشر والتسليم' },
    ],
    servicesTitle: 'الخدمات',
    servicesIntro: 'أربعة خطوط خدمة، كل واحد منها يعالج مشكلة هندسية محددة.',
    servicesCta: 'كل الخدمات',
    workTitle: 'أعمالنا',
    workIntro: 'رحاب منتج تملكه نواة. ماجيك كار مشروع لعميل. كل مشروع موسوم بطبيعته بوضوح.',
    workCta: 'كل الأعمال',
    principlesTitle: 'مبادئ هندسية',
    principles: [
      { title: 'التعقيد يخدم غرضاً', body: 'لا نبني بنية أو أتمتة أو تكاملاً أكبر مما يحتاجه المشروع فعلاً.' },
      { title: 'الجودة تتناسب مع المخاطرة', body: 'أداة داخلية صغيرة لا تحتاج نفس صرامة نظام تجاري حرج، والعكس صحيح.' },
      { title: 'النظام القائم يبقى مصدر الحقيقة', body: 'في التكامل، لا نستبدل ما يعمل — نربط بأمان ونحافظ على القرارات الحساسة عند مصدرها.' },
      { title: 'نتحمّل التسليم كاملاً', body: 'من الاكتشاف إلى النشر، نواة تملك النتيجة، لا مجرد ساعات عمل.' },
    ],
    founderCta: 'اقرأ المزيد عنا',
    contactTitle: 'لديك مشروع؟',
    contactBody: 'راسلنا مباشرة. لا فريق مبيعات، فقط رد شخصي على كل استفسار.',
    contactCta: 'تواصل معنا',
  },
  en: {
    heroKicker: 'Nawa — نواة',
    heroTitle: 'An engineering partner that owns delivery from idea to production',
    heroBody:
      'Nawa is a software engineering company based in Hebron, Palestine. We understand your business problem, design a solution sized to it, and take responsibility for delivering it — not just executing what was asked.',
    heroPrimaryCta: 'Start a project',
    heroSecondaryCta: 'See our services',
    processTitle: 'How we work',
    process: [
      { step: '01', label: 'Discovery and understanding the problem' },
      { step: '02', label: 'Solution and architecture design' },
      { step: '03', label: 'Build and test' },
      { step: '04', label: 'Deploy and handover' },
    ],
    servicesTitle: 'Services',
    servicesIntro: 'Four service lines, each addressing a specific engineering problem.',
    servicesCta: 'All services',
    workTitle: 'Work',
    workIntro: 'Rihab is a product Nawa owns. Magic Car is client work. Every project is clearly labeled by nature.',
    workCta: 'All work',
    principlesTitle: 'Engineering principles',
    principles: [
      { title: 'Complexity serves a purpose', body: 'We do not build infrastructure, automation, or integration larger than a project actually needs.' },
      { title: 'Quality proportional to risk', body: 'A small internal tool does not need the same rigor as a business-critical system, and vice versa.' },
      { title: 'The existing system stays the source of truth', body: "In integration work, we don't replace what works — we connect safely and keep sensitive decisions at their source." },
      { title: 'We own full delivery', body: 'From discovery to deployment, Nawa owns the outcome, not just the hours worked.' },
    ],
    founderCta: 'Read more about us',
    contactTitle: 'Have a project?',
    contactBody: 'Reach us directly. No sales team — just a personal reply to every inquiry.',
    contactCta: 'Contact us',
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}
