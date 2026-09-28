import type { Locale } from '../site';

interface RihabCopy {
  eyebrow: string;
  title: string;
  summary: string;
  problemTitle: string;
  problem: string;
  constraintsTitle: string;
  constraints: string[];
  decisionsTitle: string;
  decisions: string[];
  architectureTitle: string;
  architecture: { heading: string; body: string }[];
  evidenceTitle: string;
  images: { key: string; caption: string; width: number; height: number }[];
  resultTitle: string;
  result: string;
  lessonTitle: string;
  lesson: string;
}

const copy: Record<Locale, RihabCopy> = {
  ar: {
    eyebrow: 'منتج نواة',
    title: 'رحاب',
    summary:
      'سوق رقمي فلسطيني متعدد المتاجر — من بناء وتشغيل نواة. رحاب يجمع متاجر ومولات مستقلة داخل تجربة تسوّق واحدة، مع نظام تجاري ولوجستي كامل خلف الواجهة.',
    problemTitle: 'المشكلة',
    problem:
      'التجار الفلسطينيون يبيعون عبر قنوات متفرقة — صفحات فيسبوك، متاجر مستقلة — دون طريقة موحّدة وموثوقة يكتشف فيها العملاء المنتجات ويشترون عبر عدة بائعين. وفي الوقت نفسه، لا توجد للتاجر أداة واحدة تدير الكتالوج والطلبات والتوصيل والشروط التجارية معاً.',
    constraintsTitle: 'القيود الحقيقية',
    constraints: [
      'قطاع التوصيل في فلسطين موزّع بين عدة شركات توصيل إقليمية، وليس شركة واحدة مهيمنة — أي تكامل لوجستي يجب أن يتعامل مع كل شركة على حدة.',
      'كثير من التجار لديهم بالفعل كتالوج منتجات غير رسمي على فيسبوك، وينبغي الاستفادة منه بدلاً من مطالبتهم بإدخال كل شيء يدوياً من الصفر.',
      'تفعيل الميزات التجارية — كالعمولات والدفعات — يحتاج موافقة صريحة من التاجر على اتفاقيات محددة قبل التفعيل، وليس تسجيلاً مفتوحاً دون مراجعة.',
    ],
    decisionsTitle: 'القرارات',
    decisions: [
      'بناء رحاب كمنتج تملكه نواة، لا كمشروع عميل — ليتمكن فريق المنتج من اتخاذ قرارات تجارية وتقنية بسرعته الخاصة.',
      'تسجيل تجاري عبر مراجعة اتفاقية صريحة قبل تفعيل أي ميزة تجارية للتاجر، بدل تفعيل فوري بلا مراجعة.',
      'ربط شركات التوصيل واحدة تلو الأخرى عبر تعريف صريح لكل مدينة داخل نظام كل شركة، بدل افتراض معيار توصيل موحّد.',
      'بناء أداة استيراد من فيسبوك تستخدم فهماً آلياً (AI) لاستخلاص بيانات المنتج من منشورات التاجر — لكن مع إبقاء مراجعة التاجر خطوة إلزامية قبل النشر، لا ثقة كاملة بالمخرجات الآلية.',
    ],
    architectureTitle: 'كيف يعمل النظام',
    architecture: [
      {
        heading: 'النموذج التجاري ودورة الحياة المالية',
        body: 'يختار التاجر الخيار التجاري المناسب، ثم يراجع الاتفاقية ويوافق عليها، فيُفعَّل التسجيل التجاري ويصبح الحساب نشطاً ومهيأً لربط الطلبات. وبشكل منفصل، تتبع دورة الحياة المالية كل طلب من الحجز إلى التسليم، فحساب العمولة، فتحديث الرصيد، فالتسوية أو إعادة الشحن — كسجل مالي مستقل عن حالة تنفيذ الطلب.',
      },
      {
        heading: 'تنفيذ الطلبات والتوصيل',
        body: 'يمر طلب العميل عبر نواة رحاب التي تنسّق بين التاجر لتجهيز الطلب وبين شركة التوصيل الشريكة — من ضمنها OPost — لتسليمه. تُتابع كل طلبية عبر مراحل واضحة: استلام، تحضير، في الطريق، تسليم.',
      },
      {
        heading: 'استيراد فيسبوك',
        body: 'يربط التاجر حسابه على فيسبوك عبر Meta OAuth. تسحب أداة الاستيراد منشوراته، ويستخلص فهم آلي (AI) العنوان والفئة والخصائص والمتغيرات من كل منشور، وتُعالَج الصور المرفقة، لتتكوّن مرشحات منتجات جاهزة للمراجعة. يراجع التاجر كل مرشح — يعدّله أو يضيفه أو يتجاوزه — قبل أن يظهر في كتالوج رحاب الفعلي.',
      },
    ],
    evidenceTitle: 'من المنتج الفعلي',
    images: [
      { key: 'marketplace-home', caption: 'الواجهة العامة لسوق رحاب — تصفّح موحّد للمتاجر والمولات والمنتجات.', width: 2000, height: 1008 },
      { key: 'admin-overview', caption: 'لوحة تحكم المنصة — صحة المنصة وعمليات الطلبات في نظرة واحدة.', width: 2000, height: 1024 },
      { key: 'merchant-dashboard', caption: 'لوحة تحكم التاجر — إدارة المنتجات والطلبات والحساب التجاري من مكان واحد.', width: 2000, height: 1008 },
      { key: 'carrier-mapping', caption: 'ربط مدن المنصة بمناطق شركة التوصيل — تكامل لوجستي حقيقي لكل شركة على حدة.', width: 2000, height: 1008 },
      { key: 'media-management', caption: 'إدارة ملفات ووسائط المنتجات والعلامات التجارية.', width: 2000, height: 1008 },
      { key: 'agreements', caption: 'مراجعة الاتفاقيات والامتثال قبل تفعيل الحساب التجاري للتاجر.', width: 2000, height: 1008 },
      { key: 'diagram-commercial-model', caption: 'النموذج التجاري ودورة الحياة المالية.', width: 1774, height: 887 },
      { key: 'diagram-facebook-importer', caption: 'آلية استيراد فيسبوك.', width: 1774, height: 887 },
      { key: 'diagram-order-fulfillment', caption: 'تنفيذ الطلبات والتوصيل.', width: 1774, height: 887 },
    ],
    resultTitle: 'النتيجة',
    result:
      'رحاب يعمل اليوم بهذه الآليات فعلياً: تكامل حقيقي مع شركات توصيل متعددة، تدفق تجاري يتطلب مراجعة صريحة قبل التفعيل، وأداة استيراد من فيسبوك تستخدم الفهم الآلي فعلياً في استخلاص بيانات المنتج — وليس مجرد وصف تسويقي.',
    lessonTitle: 'الدرس',
    lesson:
      'فصل السجل المالي (العمولة، الرصيد، التسوية) عن تدفق تنفيذ الطلب التشغيلي يجعل كل واحد منهما قابلاً للتدقيق بمعزل عن الآخر — تأخر التوصيل لا يُربك حساب العمولة، وتصحيح خطأ مالي لا يُغيّر حالة الشحن.',
  },
  en: {
    eyebrow: 'A Nawa product',
    title: 'Rihab',
    summary:
      'A Palestinian multi-vendor digital marketplace — built and operated by Nawa. Rihab brings independent stores and malls into one shopping experience, with a full commercial and logistics system behind it.',
    problemTitle: 'The problem',
    problem:
      "Palestinian merchants sell across fragmented channels — Facebook pages, independent storefronts — with no unified, trustworthy way for customers to discover products and buy across multiple sellers. At the same time, merchants have no single tool to manage catalog, orders, delivery, and commercial terms together.",
    constraintsTitle: 'Real constraints',
    constraints: [
      "Palestine's delivery sector is split across several regional carriers rather than one dominant courier — any logistics integration has to work with each carrier individually.",
      'Many merchants already have an informal product catalog on Facebook, and that should be reused rather than requiring them to re-enter everything from scratch.',
      'Enabling commercial features — commissions, payouts — requires the merchant to explicitly review and accept specific agreements before activation, not open self-serve registration without review.',
    ],
    decisionsTitle: 'The decisions',
    decisions: [
      'Build Rihab as a product Nawa owns, not a client project — so the product team can make commercial and technical decisions on its own timeline.',
      'Gate commercial enrollment behind an explicit agreement review before any commercial feature is activated for a merchant, rather than instant activation with no review.',
      "Integrate delivery carriers one at a time through an explicit mapping of each platform city into that carrier's own system, instead of assuming one shared delivery standard.",
      "Build a Facebook import tool that uses AI-assisted understanding to extract product data from a merchant's existing posts — but keep merchant review a mandatory step before publishing, rather than trusting the automated output completely.",
    ],
    architectureTitle: 'How it works',
    architecture: [
      {
        heading: 'Commercial model and financial lifecycle',
        body: 'A merchant selects a commercial option, reviews and accepts the agreement, and commercial enrollment activates the account for order integration. Separately, the financial lifecycle tracks each order from reservation through delivery, commission calculation, balance update, and payout or recharge — kept as a ledger distinct from order-fulfillment status.',
      },
      {
        heading: 'Order fulfillment and delivery',
        body: "A customer's order flows through Rihab's core, which coordinates between the merchant for preparation and a partner carrier — including OPost — for delivery. Every order is tracked through clear stages: received, preparing, in transit, delivered.",
      },
      {
        heading: 'Facebook import',
        body: "A merchant connects their Facebook account via Meta OAuth. The importer ingests their posts, and AI-assisted extraction pulls the title, category, attributes, and variants from each post while processing attached media, producing product candidates ready for review. The merchant reviews every candidate — editing, adding, or skipping it — before it appears in Rihab's live catalog.",
      },
    ],
    evidenceTitle: 'From the actual product',
    images: [
      { key: 'marketplace-home', caption: "Rihab's public storefront — a unified way to browse stores, malls, and products.", width: 2000, height: 1008 },
      { key: 'admin-overview', caption: 'Platform admin dashboard — platform health and order operations at a glance.', width: 2000, height: 1024 },
      { key: 'merchant-dashboard', caption: "A merchant's control panel — products, orders, and commercial account in one place.", width: 2000, height: 1008 },
      { key: 'carrier-mapping', caption: "Mapping platform cities to a carrier's delivery regions — real per-carrier logistics integration.", width: 2000, height: 1008 },
      { key: 'media-management', caption: 'Product and brand media/file management.', width: 2000, height: 1008 },
      { key: 'agreements', caption: "Agreement and compliance review before a merchant's commercial account is activated.", width: 2000, height: 1008 },
      { key: 'diagram-commercial-model', caption: 'Commercial model and financial lifecycle.', width: 1774, height: 887 },
      { key: 'diagram-facebook-importer', caption: 'Facebook importer mechanics.', width: 1774, height: 887 },
      { key: 'diagram-order-fulfillment', caption: 'Order fulfillment and delivery.', width: 1774, height: 887 },
    ],
    resultTitle: 'Result',
    result:
      'Rihab runs on these mechanics today: real integration with multiple delivery carriers, a commercial flow that requires explicit review before activation, and a Facebook import tool that genuinely uses AI-assisted extraction to pull product data — not just a marketing description of one.',
    lessonTitle: 'The lesson',
    lesson:
      "Separating the financial ledger (commission, balance, payout) from the operational fulfillment flow makes each independently auditable — a delivery delay doesn't disturb the commission calculation, and correcting a financial error doesn't change a shipment's status.",
  },
};

export function getRihabCopy(locale: Locale): RihabCopy {
  return copy[locale];
}
