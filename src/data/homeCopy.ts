import type { Locale } from './site';

// Home page copy — approved Website Design v1 wording (AR + EN), reconciled with
// company/project source-of-truth. No new claims, metrics, or team-size language.

export interface ProcessStep {
  index: string;
  title: string;
  sub: string;
  body: string;
  output: string;
}
export interface ServiceCard {
  index: string;
  slug: string; // anchor id on the services page
  title: string;
  body: string;
  chips: string[];
}
export interface WhyItem {
  index: string;
  title: string;
  body: string;
}

export interface HomeCopy {
  heroLabel: string;
  heroTitle: string;
  heroLead: string;
  heroLeadMobile: string;
  heroPrimary: string;
  heroSecondary: string;
  heroDomains: string[];
  howLabel: string;
  howTitle: string;
  howBody: string;
  process: ProcessStep[];
  processProduction: string;
  svcLabel: string;
  svcTitle: string;
  svcBody: string;
  svcCta: string;
  svcSideStart: string; // "existing systems"
  svcSideEnd: string; // "people & ops"
  services: ServiceCard[];
  workLabel: string;
  workTitle: string;
  workAllCta: string;
  rihabTag: string;
  rihabName: string;
  rihabBody: string;
  rihabPoints: string[];
  rihabCaptionId: string;
  rihabCaption: string;
  rihabCta: string;
  rihabAlt: string;
  mcTag: string;
  mcName: string;
  mcBody: string;
  mcAnnos: string[];
  mcCta: string;
  mcPhones: { caption: string; alt: string }[];
  noteLabel: string;
  noteTitle: string;
  noteBody: string;
  noteDiagramTitle: string;
  noteFootnote: string;
  noteCta: string;
  whyLabel: string;
  whyTitle: string;
  why: WhyItem[];
  ctaTitle: string;
  ctaLead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaContact: string;
}

const copy: Record<Locale, HomeCopy> = {
  en: {
    heroLabel: 'Software engineering · Hebron, Palestine',
    heroTitle: 'An engineering partner that owns the work — from the first question to production.',
    heroLead:
      'Nawa designs, builds and runs custom software, cloud infrastructure and automation. We take responsibility for the whole path: understanding the problem, choosing the architecture, delivering it, and handing it over properly.',
    heroLeadMobile:
      'Custom software, cloud infrastructure and automation — designed, built and handed over by the team that takes responsibility for it.',
    heroPrimary: 'Start a project',
    heroSecondary: 'View our work',
    heroDomains: ['Custom software', 'Cloud & infrastructure', 'Automation', 'Modernization & integration'],
    howLabel: 'How we work',
    howTitle: 'One responsibility, from understanding to handover.',
    howBody:
      'We don’t deliver disconnected parts for someone else to assemble. The same team understands the problem, designs the solution, builds it, runs it in production and hands it over documented.',
    process: [
      { index: '01', title: 'Understand', sub: 'Discovery', body: 'We start with the problem, not the solution: current workflows, constraints, existing systems, and what success actually means.', output: 'Output: problem statement · constraints · clear scope' },
      { index: '02', title: 'Architecture', sub: 'Solution design', body: 'We choose the architecture and record decisions and their alternatives before writing code, so the system stays maintainable and extensible.', output: 'Output: architecture diagram · decision record · delivery plan' },
      { index: '03', title: 'Build', sub: 'Test', body: 'We build in reviewable increments, with code review, verification proportional to risk, and an automated delivery pipeline from day one.', output: 'Output: reviewed releases · CI/CD · regular reviews' },
      { index: '04', title: 'Deploy', sub: 'Handover', body: 'We deploy to production and hand the system over documented and understood, with clear ownership of operations.', output: 'Output: production deployment · documentation · structured handover' },
    ],
    processProduction: 'production',
    svcLabel: 'Services',
    svcTitle: 'Four capabilities. One engineering system.',
    svcBody:
      'A business rarely needs just one. Software runs on infrastructure, integrates with existing systems, and automates work that used to be manual — so we design them together.',
    svcCta: 'Explore services',
    svcSideStart: 'existing systems',
    svcSideEnd: 'people & ops',
    services: [
      { index: '01', slug: 'custom', title: 'Custom software development', body: 'Web platforms, mobile apps and internal systems built around how your organization actually works — not around a template.', chips: ['Web platforms', 'iOS & Android apps', 'Admin systems', 'APIs'] },
      { index: '02', slug: 'cloud', title: 'Cloud & infrastructure', body: 'Secure, scalable cloud infrastructure with understandable cost, automated delivery and clear monitoring.', chips: ['Cloud architecture', 'Containers', 'CI/CD', 'Monitoring & alerting'] },
      { index: '03', slug: 'automation', title: 'Automation', body: 'Automating repetitive work and data flows, with a human review step wherever a decision is needed.', chips: ['Workflows', 'Data pipelines', 'AI-assisted processing'] },
      { index: '04', slug: 'modernization', title: 'Software modernization & integration', body: 'We modernize existing systems or build a modern layer around them — without replacing what works for no reason.', chips: ['ERP integration', 'API layers', 'Incremental modernization'] },
    ],
    workLabel: 'Selected work',
    workTitle: 'Engineering is visible in the work itself.',
    workAllCta: 'All work',
    rihabTag: 'Nawa Product',
    rihabName: 'Rihab',
    rihabBody:
      'A Palestinian digital marketplace connecting customers with Palestinian shops and vendors. We built the whole system: shopping, merchant operations, order orchestration through delivery, and a Facebook product importer.',
    rihabPoints: ['Marketplace & mobile experiences', 'Merchant operations, offers, agreements', 'Order-to-fulfillment orchestration', 'Facebook content → catalog importer'],
    rihabCaptionId: 'rihab.app',
    rihabCaption: 'Storefront — shops, malls and categories in one place.',
    rihabCta: 'Read the case study',
    rihabAlt: 'Rihab marketplace storefront on desktop: search, categories, shops and offers (Arabic UI)',
    mcTag: 'Client Work',
    mcName: 'Magic Car',
    mcBody:
      'A B2B trader platform built around an existing ERP. The ERP stays authoritative; we built a modern layer around it for traders and administrators.',
    mcAnnos: ['Flutter · Web · iOS · Android', 'S3 → Lambda → CloudFront'],
    mcCta: 'Read the case study',
    mcPhones: [
      { caption: 'Catalog', alt: 'Magic Car catalog: products with price, availability and item number (Arabic UI)' },
      { caption: 'Cart — estimated total, confirmed by the ERP', alt: 'Trader cart with quantities, line notes and an estimated total' },
      { caption: 'Orders and their states', alt: 'Trader orders with accepted, rejected and in-review states' },
    ],
    noteLabel: 'Engineering note',
    noteTitle: 'Integration, not unnecessary replacement.',
    noteBody:
      'At Magic Car the ERP remained the source of truth for products, prices and accounts. Our integration layer keeps a last-known-good catalog so the app stays available, and re-validates price and availability against the ERP when each order is reviewed — cache for reads, the live ERP for commercial decisions.',
    noteDiagramTitle: 'Simplified architecture · Magic Car',
    noteFootnote: 'Simplified external view. The full architecture is in the case study.',
    noteCta: 'Read the case study',
    whyLabel: 'Why Nawa',
    whyTitle: 'We take responsibility for the outcome, not just the tasks.',
    why: [
      { index: '01', title: 'Responsibility for delivery', body: 'We stay accountable until the system runs in production and is clearly handed over — not until the contract period ends.' },
      { index: '02', title: 'Architecture before code', body: 'Material technical decisions are recorded with their reasons and alternatives, so you — and whoever comes after us — can understand them.' },
      { index: '03', title: 'Secure and maintainable by default', body: 'Security, appropriate verification and documentation are part of the work, not an add-on at the end.' },
      { index: '04', title: 'Honest scope, clear agreements', body: 'We say what we can and can’t do, and we take on projects we can deliver with integrity.' },
    ],
    ctaTitle: 'Have a system to build, fix, or connect?',
    ctaLead: 'Tell us about the problem. We’ll come back with good questions before any quote.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'Message us on WhatsApp',
    ctaContact: 'support@nawa.systems · +972 599 914 084',
  },
  ar: {
    heroLabel: 'هندسة برمجيات · الخليل، فلسطين',
    heroTitle: 'شريكٌ هندسي يتحمّل المسؤولية من فهم المشكلة حتى التشغيل الفعلي.',
    heroLead:
      'نصمّم البرمجيات المخصّصة والبنية السحابية والأتمتة ونبنيها، ونتحمّل مسؤولية المسار كاملًا: فهم المشكلة، واختيار المعمارية، والتنفيذ، والتسليم المنظّم.',
    heroLeadMobile:
      'برمجيات مخصّصة وبنية سحابية وأتمتة — نصمّمها ونبنيها ونسلّمها، ونتحمّل مسؤوليتها.',
    heroPrimary: 'ابدأ مشروعك',
    heroSecondary: 'استعرض أعمالنا',
    heroDomains: ['برمجيات مخصّصة', 'السحابة والبنية التحتية', 'الأتمتة', 'التحديث والتكامل'],
    howLabel: 'طريقة العمل',
    howTitle: 'مسؤولية واحدة، من الفهم حتى التسليم.',
    howBody:
      'لا نسلّم أجزاءً منفصلة لتُركَّب لاحقًا. نفس الفريق يفهم المشكلة، ويصمّم الحل، ويبنيه، ويشغّله في بيئة الإنتاج، ثم يسلّمه موثّقًا.',
    process: [
      { index: '01', title: 'الفهم', sub: 'الاستكشاف', body: 'نبدأ بالمشكلة لا بالحل: سير العمل الحالي، والقيود، والأنظمة القائمة، وما يعنيه النجاح فعليًا.', output: 'المخرجات: وصف المشكلة · القيود · نطاق واضح' },
      { index: '02', title: 'المعمارية', sub: 'تصميم الحل', body: 'نختار المعمارية ونوثّق القرارات وبدائلها قبل كتابة الكود، ليبقى النظام قابلًا للصيانة والتوسّع.', output: 'المخرجات: مخطط المعمارية · سجل القرارات · خطة التنفيذ' },
      { index: '03', title: 'البناء', sub: 'الاختبار', body: 'نبني على مراحل قابلة للمراجعة، مع مراجعة كود وتحقّق يتناسب مع المخاطر، ومسار نشر آلي منذ البداية.', output: 'المخرجات: إصدارات مُراجعة · CI/CD · مراجعات دورية' },
      { index: '04', title: 'النشر', sub: 'التسليم', body: 'ننشر إلى بيئة الإنتاج ونسلّم النظام موثّقًا ومفهومًا، مع وضوح كامل في الملكية والتشغيل.', output: 'المخرجات: نشر في الإنتاج · توثيق · تسليم منظّم' },
    ],
    processProduction: 'بيئة الإنتاج',
    svcLabel: 'الخدمات',
    svcTitle: 'أربع قدرات، ونظام هندسي واحد.',
    svcBody:
      'نادرًا ما تحتاج المؤسسة إلى خدمة واحدة. البرمجيات تعمل على بنية تحتية، وتتكامل مع أنظمة قائمة، وتؤتمت عملًا كان يدويًا. لذلك نصمّمها معًا.',
    svcCta: 'تفاصيل الخدمات',
    svcSideStart: 'الأنظمة القائمة',
    svcSideEnd: 'المستخدمون',
    services: [
      { index: '01', slug: 'custom', title: 'تطوير البرمجيات المخصّصة', body: 'منصات ويب وتطبيقات جوّال وأنظمة داخلية مبنية حول طريقة عمل مؤسستك، لا حول قالب جاهز.', chips: ['منصات ويب', 'تطبيقات iOS و Android', 'أنظمة إدارة', 'واجهات API'] },
      { index: '02', slug: 'cloud', title: 'السحابة والبنية التحتية', body: 'بنية سحابية آمنة وقابلة للتوسّع، بتكلفة مفهومة ونشر آلي ومراقبة واضحة.', chips: ['معمارية سحابية', 'حاويات', 'CI/CD', 'مراقبة وتنبيهات'] },
      { index: '03', slug: 'automation', title: 'الأتمتة', body: 'أتمتة المهام المتكرّرة ومسارات البيانات، مع مراجعة بشرية في كل نقطة يلزم فيها قرار.', chips: ['سير العمل', 'خطوط البيانات', 'معالجة بمساعدة الذكاء الاصطناعي'] },
      { index: '04', slug: 'modernization', title: 'التحديث والتكامل', body: 'نحدّث الأنظمة القائمة أو نبني حولها طبقة حديثة، دون استبدال ما يعمل بلا داعٍ.', chips: ['تكامل ERP', 'طبقات API', 'تحديث تدريجي'] },
    ],
    workLabel: 'أعمال مختارة',
    workTitle: 'الهندسة تُرى في العمل نفسه.',
    workAllCta: 'كل الأعمال',
    rihabTag: 'منتج من نواة',
    rihabName: 'رحاب',
    rihabBody:
      'سوق رقمي فلسطيني يربط العملاء بالمتاجر والبائعين الفلسطينيين. بنينا المنظومة كاملة: تجربة التسوّق، وعمليات التجّار، وتنسيق الطلبات والتوصيل، ومستورد منتجات من فيسبوك.',
    rihabPoints: ['تجربة السوق وتطبيقات الجوّال', 'عمليات التجّار والعروض والاتفاقيات', 'تنسيق الطلبات حتى التوصيل', 'استيراد المنتجات من محتوى فيسبوك'],
    rihabCaptionId: 'rihab.app',
    rihabCaption: 'واجهة التسوّق — تصفّح المتاجر والمولات والفئات من مكان واحد.',
    rihabCta: 'دراسة الحالة',
    rihabAlt: 'واجهة سوق رحاب الرقمي على سطح المكتب: البحث والفئات والمتاجر والعروض',
    mcTag: 'عمل لعميل',
    mcName: 'Magic Car',
    mcBody:
      'منصة B2B للتجّار مبنية حول نظام ERP قائم. بقي النظام القائم هو المرجع، وبنينا حوله طبقة حديثة للتجّار والإدارة.',
    mcAnnos: ['Flutter · Web · iOS · Android', 'S3 → Lambda → CloudFront'],
    mcCta: 'دراسة الحالة',
    mcPhones: [
      { caption: 'الكتالوج', alt: 'كتالوج Magic Car: المنتجات بالسعر والتوفّر ورقم الصنف' },
      { caption: 'السلة — إجمالي تقديري يخضع للتأكيد', alt: 'سلة التاجر مع الكميات والملاحظات والإجمالي التقديري' },
      { caption: 'الطلبات وحالاتها', alt: 'طلبات التاجر بحالاتها: مقبول، مرفوض، قيد المراجعة' },
    ],
    noteLabel: 'ملاحظة هندسية',
    noteTitle: 'التكامل، لا الاستبدال غير الضروري.',
    noteBody:
      'في Magic Car بقي نظام ERP مرجعًا للمنتجات والأسعار والحسابات. بنينا طبقة تكامل تحتفظ بآخر نسخة سليمة من الكتالوج ليبقى التطبيق متاحًا، وتعيد التحقّق من السعر والتوفّر مع النظام عند مراجعة كل طلب: ذاكرة مؤقتة للقراءة، وERP مباشر للقرارات التجارية.',
    noteDiagramTitle: 'مخطط مبسّط · Magic Car',
    noteFootnote: 'مخطط عام مبسّط. التفاصيل الكاملة للمعمارية في دراسة الحالة.',
    noteCta: 'اقرأ دراسة الحالة',
    whyLabel: 'لماذا نواة',
    whyTitle: 'نتحمّل مسؤولية النتيجة، لا مجرّد التنفيذ.',
    why: [
      { index: '01', title: 'المسؤولية عن التسليم', body: 'نبقى مسؤولين حتى يعمل النظام في بيئة الإنتاج ويُسلَّم بوضوح، لا حتى تنتهي مدة العقد.' },
      { index: '02', title: 'المعمارية قبل الكود', body: 'القرارات التقنية الجوهرية موثّقة بأسبابها وبدائلها، لتفهمها أنت ومن يأتي بعدنا.' },
      { index: '03', title: 'آمن وقابل للصيانة افتراضيًا', body: 'الأمان والتحقّق المناسب والتوثيق جزء من العمل نفسه، لا إضافة لاحقة.' },
      { index: '04', title: 'نطاق صادق واتفاق واضح', body: 'نقول ما نستطيع فعله وما لا نستطيع، ونختار المشاريع التي يمكننا إنجازها بأمانة.' },
    ],
    ctaTitle: 'لديك نظام تريد بناءه أو إصلاحه أو ربطه؟',
    ctaLead: 'أخبرنا عن المشكلة، وسنعود إليك بأسئلة جيدة قبل أي عرض سعر.',
    ctaPrimary: 'ابدأ مشروعك',
    ctaSecondary: 'راسلنا على واتساب',
    ctaContact: 'support@nawa.systems · +972 599 914 084',
  },
};

export function getHomeCopy(locale: Locale): HomeCopy {
  return copy[locale];
}
