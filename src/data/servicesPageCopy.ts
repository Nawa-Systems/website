import type { Locale } from './site';

// Services page copy aligned to Website Design v1 (What we build / How we approach it /
// Evidence). Substance matches the canonical servicesCopy.ts; no new claims.

export interface ServicePageEntry {
  index: string;
  anchor: string; // custom | cloud | automation | modernization
  concept: 'custom' | 'cloud' | 'automation' | 'modernization';
  title: string;
  lead: string;
  build: string[];
  approach: string;
  evidenceText: string;
  evidenceHref: 'work/rihab' | 'work/magic-car';
}
export interface StartStep { key: string; title: string; body: string }

export interface ServicesPageCopy {
  label: string;
  title: string;
  lead: string;
  navAria: string;
  navLabels: { anchor: string; index: string; label: string }[];
  whatWeBuild: string;
  howWeApproach: string;
  evidenceLabel: string;
  services: ServicePageEntry[];
  startLabel: string;
  startTitle: string;
  start: StartStep[];
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const copy: Record<Locale, ServicesPageCopy> = {
  en: {
    label: 'Services',
    title: 'Four capabilities, designed to work as one system.',
    lead: 'Most real problems cross all four: software that runs on infrastructure, talks to existing systems and replaces manual work. We scope them together so nothing falls between the gaps.',
    navAria: 'Services on this page',
    whatWeBuild: 'What we build',
    howWeApproach: 'How we approach it',
    evidenceLabel: 'Evidence',
    navLabels: [
      { anchor: 'custom', index: '01', label: 'Custom software development' },
      { anchor: 'cloud', index: '02', label: 'Cloud & infrastructure' },
      { anchor: 'automation', index: '03', label: 'Automation' },
      { anchor: 'modernization', index: '04', label: 'Modernization & integration' },
    ],
    services: [
      {
        index: '01', anchor: 'custom', concept: 'custom',
        title: 'Custom software development',
        lead: 'Web platforms, mobile apps and internal systems built around how your organization actually works — not around a template.',
        build: ['Customer-facing web platforms', 'iOS and Android apps', 'Admin and operations systems', 'Merchant and partner portals', 'APIs and back-end services', 'Arabic-first, bilingual interfaces'],
        approach: 'We model the business first — roles, states, money and exceptions — then build the interfaces on top. Truthful states (loading, empty, unavailable, failed) are designed, not left to chance.',
        evidenceText: 'Rihab — marketplace, merchant ops, admin', evidenceHref: 'work/rihab',
      },
      {
        index: '02', anchor: 'cloud', concept: 'cloud',
        title: 'Cloud & infrastructure',
        lead: 'Secure, scalable infrastructure with understandable cost, automated delivery and monitoring you can read.',
        build: ['Cloud architecture and environments', 'Containerized services', 'CI/CD pipelines', 'Media and file pipelines', 'Monitoring, logging, alerting', 'Backups and recovery plans'],
        approach: 'Infrastructure is code, reviewed like code, with environments kept reproducible, secrets managed deliberately, and cost ownership made clear.',
        evidenceText: 'Magic Car — S3 → Lambda → CloudFront media pipeline', evidenceHref: 'work/magic-car',
      },
      {
        index: '03', anchor: 'automation', concept: 'automation',
        title: 'Automation',
        lead: 'Automating repetitive work and data flows — with a human review step wherever a decision is needed.',
        build: ['Workflow and approval automation', 'Data import and sync pipelines', 'AI-assisted extraction with review', 'Notifications and announcements', 'Scheduled reports and reconciliations', 'Internal tools that remove manual steps'],
        approach: 'Automation proposes; people decide where it matters. Every automated step has a visible state, including failure, so nothing disappears silently.',
        evidenceText: 'Rihab — Facebook content → approved catalog product', evidenceHref: 'work/rihab',
      },
      {
        index: '04', anchor: 'modernization', concept: 'modernization',
        title: 'Software modernization & integration',
        lead: 'We modernize existing systems or build a modern layer around them — without replacing what works for no reason.',
        build: ['ERP and legacy system integration', 'Modern API layers over old systems', 'Resilient caches and sync', 'Incremental replacement plans', 'Data migration with verification', 'New interfaces on existing data'],
        approach: 'We decide what stays authoritative before writing code. Replacement is a business decision with a cost — not a default.',
        evidenceText: 'Magic Car — a modern trader layer around an existing ERP', evidenceHref: 'work/magic-car',
      },
    ],
    startLabel: 'How a project starts',
    startTitle: 'No quote before we understand the problem.',
    start: [
      { key: 'A', title: 'Conversation', body: 'You describe the problem, the systems involved and the constraints.' },
      { key: 'B', title: 'Scoped discovery', body: 'We study the workflow and existing systems and write down what we found.' },
      { key: 'C', title: 'Clear proposal', body: 'Scope, architecture direction, phases and a written agreement.' },
    ],
    ctaTitle: 'Not sure which of the four you need?',
    ctaLead: 'That’s normal. Describe the problem; we’ll work out the shape of the solution together.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'View our work',
  },
  ar: {
    label: 'الخدمات',
    title: 'أربع قدرات، مصمّمة لتعمل كنظام واحد.',
    lead: 'معظم المشكلات الحقيقية تمرّ بالأربع معًا: برمجيات تعمل على بنية تحتية، وتتكلّم مع أنظمة قائمة، وتستبدل عملًا يدويًا. نحدّد نطاقها معًا حتى لا يسقط شيء بين الفجوات.',
    navAria: 'الخدمات في هذه الصفحة',
    whatWeBuild: 'ما نبنيه',
    howWeApproach: 'كيف نتعامل معها',
    evidenceLabel: 'مثال',
    navLabels: [
      { anchor: 'custom', index: '01', label: 'البرمجيات المخصّصة' },
      { anchor: 'cloud', index: '02', label: 'السحابة' },
      { anchor: 'automation', index: '03', label: 'الأتمتة' },
      { anchor: 'modernization', index: '04', label: 'التحديث' },
    ],
    services: [
      {
        index: '01', anchor: 'custom', concept: 'custom',
        title: 'تطوير البرمجيات المخصّصة',
        lead: 'منصات ويب وتطبيقات جوّال وأنظمة داخلية مبنية حول طريقة عمل مؤسستك، لا حول قالب جاهز.',
        build: ['منصات ويب للعملاء', 'تطبيقات iOS و Android', 'أنظمة إدارة وتشغيل', 'بوابات للتجّار والشركاء', 'واجهات API وخدمات خلفية', 'واجهات عربية أولًا، ثنائية اللغة'],
        approach: 'نمذِجة العمل أولًا — الأدوار والحالات والمال والاستثناءات — ثم نبني الواجهات فوقها. الحالات الصادقة (التحميل، الفراغ، عدم التوفّر، الفشل) مصمَّمة، لا متروكة للصدفة.',
        evidenceText: 'رحاب — السوق وعمليات التجّار والإدارة', evidenceHref: 'work/rihab',
      },
      {
        index: '02', anchor: 'cloud', concept: 'cloud',
        title: 'السحابة والبنية التحتية',
        lead: 'بنية آمنة وقابلة للتوسّع، بتكلفة مفهومة ونشر آلي ومراقبة يمكن قراءتها.',
        build: ['معمارية سحابية وبيئات تشغيل', 'خدمات في حاويات', 'مسارات CI/CD', 'مسارات معالجة الوسائط والملفات', 'مراقبة وسجلات وتنبيهات', 'نسخ احتياطي وخطط تعافٍ'],
        approach: 'البنية التحتية كود، تُراجَع كما يُراجَع الكود، مع بيئات قابلة لإعادة الإنشاء، وإدارة واعية للأسرار، ووضوح في مسؤولية كل بند تكلفة.',
        evidenceText: 'Magic Car — مسار وسائط S3 ← Lambda ← CloudFront', evidenceHref: 'work/magic-car',
      },
      {
        index: '03', anchor: 'automation', concept: 'automation',
        title: 'الأتمتة',
        lead: 'أتمتة العمل المتكرّر ومسارات البيانات، مع مراجعة بشرية حيث يلزم القرار.',
        build: ['أتمتة سير العمل والموافقات', 'استيراد ومزامنة البيانات', 'استخراج بمساعدة الذكاء الاصطناعي مع مراجعة', 'الإشعارات والإعلانات', 'تقارير وتسويات مجدولة', 'أدوات داخلية تزيل الخطوات اليدوية'],
        approach: 'الأتمتة تقترح، والناس يقرّرون حيث يهمّ الأمر. لكل خطوة مؤتمتة حالة ظاهرة، بما فيها الفشل، فلا يختفي شيء بصمت.',
        evidenceText: 'رحاب — محتوى فيسبوك ← منتج معتمد في الكتالوج', evidenceHref: 'work/rihab',
      },
      {
        index: '04', anchor: 'modernization', concept: 'modernization',
        title: 'التحديث والتكامل',
        lead: 'نحدّث الأنظمة القائمة أو نبني حولها طبقة حديثة، دون استبدال ما يعمل بلا داعٍ.',
        build: ['تكامل مع ERP والأنظمة القديمة', 'طبقات API حديثة فوق أنظمة قديمة', 'تخزين مؤقت ومزامنة موثوقة', 'خطط استبدال تدريجي', 'ترحيل بيانات مع تحقّق', 'واجهات جديدة فوق بيانات قائمة'],
        approach: 'نقرّر ما يبقى مرجعًا معتمدًا قبل كتابة الكود. الاستبدال قرار تجاري له تكلفة، لا خيار افتراضي.',
        evidenceText: 'Magic Car — طبقة تاجر حديثة حول نظام ERP قائم', evidenceHref: 'work/magic-car',
      },
    ],
    startLabel: 'كيف يبدأ المشروع',
    startTitle: 'لا عرض سعر قبل أن نفهم المشكلة.',
    start: [
      { key: 'A', title: 'محادثة', body: 'تصف المشكلة، والأنظمة المعنيّة، والقيود.' },
      { key: 'B', title: 'استكشاف محدّد النطاق', body: 'ندرس سير العمل والأنظمة القائمة ونكتب ما وجدناه.' },
      { key: 'C', title: 'عرض واضح', body: 'النطاق، واتجاه المعمارية، والمراحل، واتفاق مكتوب.' },
    ],
    ctaTitle: 'لست متأكدًا أيّ الأربع تحتاج؟',
    ctaLead: 'هذا طبيعي. صِف المشكلة، ونحدّد شكل الحل معًا.',
    ctaPrimary: 'ابدأ مشروعك',
    ctaSecondary: 'استعرض أعمالنا',
  },
};

export function getServicesPageCopy(locale: Locale): ServicesPageCopy {
  return copy[locale];
}
