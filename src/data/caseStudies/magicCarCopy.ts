import type { Locale } from '../site';

interface MagicCarCopy {
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

const copy: Record<Locale, MagicCarCopy> = {
  ar: {
    eyebrow: 'مشروع عميل',
    title: 'ماجيك كار',
    summary:
      'ربط تطبيقات طلب حديثة بنظام ERP قائم لدى العميل — دون استبدال أنظمته. المبدأ هنا: التكامل لا الاستبدال.',
    problemTitle: 'المشكلة',
    problem:
      'ماجيك كار تدير عملها بالفعل عبر نظام ERP داخلي (Al-Arabi ERP) كمصدر الحقيقة للمخزون والأسعار والطلبات. العميل يحتاج تطبيقات طلب حديثة — ويب وجوال — لعملائه التجاريين، لكن دون أن تتحول هذه التطبيقات إلى مصدر بيانات ثانٍ، ودون أن تتوقف عن العمل كلما تباطأ أو انقطع نظام ERP.',
    constraintsTitle: 'القيود الحقيقية',
    constraints: [
      'نظام ERP يجب أن يبقى مصدر الحقيقة الوحيد للقرارات التجارية — السعر والمخزون وقبول الطلب — دور نواة تكامل لا استبدال.',
      'تطبيقات العملاء يجب أن تبقى سريعة ومتاحة حتى عندما يكون استدعاء ERP بطيئاً — لا يمكن لتجربة تصفّح الكتالوج أن تنتظر استجابة مباشرة من ERP في كل مرة.',
      'صور المنتجات ووسائطها تحتاج تقديماً فعالاً دون تحميل نظام ERP بطلبات غير ضرورية.',
    ],
    decisionsTitle: 'القرارات',
    decisions: [
      'الاحتفاظ بنسخة مخزّنة "آخر حالة جيدة معروفة" من الكتالوج، تُحدَّث دورياً من ERP، لتقرأ التطبيقات من نسخة سريعة وموثوقة بدل استدعاء ERP مباشرة في كل تصفّح.',
      'عدم السماح لهذه النسخة المخزّنة باتخاذ أي قرار تجاري — قبول الطلب يُعاد التحقق منه حيّاً مقابل ERP قبل تأكيده دائماً.',
      'تقديم صور ووسائط المنتجات عبر مسار سحابي مخصص (S3 → Lambda → CloudFront) بدل الاعتماد على ERP.',
      'بناء واجهة برمجية واحدة آمنة للمنتج تدمج الكتالوج المخزَّن مع العروض النشطة قبل عرضه للعملاء.',
    ],
    architectureTitle: 'كيف يعمل النظام',
    architecture: [
      {
        heading: 'تحديث الكتالوج والتخزين المؤقت الآمن',
        body: 'يسحب مسار التحديث الكتالوج الكامل من ERP (GetItemsInfo)، يتحقق من اكتماله وربطه، ثم يبني نسخة مرشحة. إن فشل التحديث، يستمر النظام في خدمة آخر نسخة جيدة معروفة بدل التعطل. تُحفظ هذه النسخة كصورة ثابتة تُنشر دفعة واحدة (atomic publish) وتبقى متاحة حتى بعد إعادة التشغيل.',
      },
      {
        heading: 'تركيب المنتج والواجهة الآمنة',
        body: 'تُدمَج النسخة المخزَّنة مع العروض والخصومات النشطة ومع وسائط الصور القادمة من المسار السحابي، لتُعرض عبر واجهة برمجية واحدة "آمنة للتاجر" تتضمن رقم الصنف والاسم والباركود والسعر وسعر العرض والتوفر ورابط الصورة.',
      },
      {
        heading: 'مسار قبول الطلب',
        body: 'الطلب لا يمر عبر النسخة المخزَّنة إطلاقاً. يخضع لمراجعة إدارية ثم إعادة تحقق حيّ من السعر والتوفر مباشرة مقابل ERP قبل قبوله — لضمان أن كل قرار تجاري يستند إلى أحدث بيانات حقيقية، لا إلى نسخة مخزَّنة قد تكون قديمة.',
      },
    ],
    evidenceTitle: 'من المنتج الفعلي',
    images: [
      { key: 'admin-dashboard', caption: 'لوحة الإدارة — نظرة تشغيلية سريعة على الطلبات الجديدة.', width: 369, height: 800 },
      { key: 'product-catalog', caption: 'كتالوج المنتجات — نفس البيانات التي تخرج من الواجهة البرمجية الآمنة للمنتج.', width: 369, height: 800 },
      { key: 'cart', caption: 'سلة الطلب قبل الإرسال للمراجعة.', width: 369, height: 800 },
      { key: 'order-history', caption: 'سجل الطلبات بحالاتها المختلفة: مقبول، مرفوض، قيد المراجعة.', width: 369, height: 800 },
      { key: 'diagram-resilient-catalog', caption: 'كتالوج المنتج المرن — من ERP إلى التطبيقات.', width: 1774, height: 887 },
    ],
    resultTitle: 'النتيجة',
    result:
      'تطبيقات ماجيك كار — على الويب وiOS وAndroid عبر Flutter — تقرأ من كتالوج سريع ومرن، بينما يُتحقق من كل طلب حيّاً مقابل ERP قبل قبوله. نظام ERP يبقى مصدر الحقيقة الوحيد، والتطبيقات الحديثة تُبنى فوقه لا بدلاً منه.',
    lessonTitle: 'الدرس',
    lesson:
      'نسخة مخزَّنة جيدة للقراءة قد تكون خطيرة للقرارات التجارية ما لم تُرسَم لها حدود صريحة لما يُسمح لها بالإجابة عنه. كما يلخّص الرسم التخطيطي نفسه: تخزين مؤقت للقراءات المرنة، وERP حيّ للقرارات التجارية.',
  },
  en: {
    eyebrow: 'Client project',
    title: 'Magic Car',
    summary:
      "Connecting modern ordering apps to a client's existing ERP — without replacing it. The theme here: integration, not replacement.",
    problemTitle: 'The problem',
    problem:
      "Magic Car already runs its business through an internal ERP (Al-Arabi ERP) as the source of truth for stock, pricing, and orders. The client needed modern ordering apps — web and mobile — for its trade customers, without those apps becoming a second source of truth, and without them going down whenever the ERP is slow or unreachable.",
    constraintsTitle: 'Real constraints',
    constraints: [
      "The ERP has to remain the sole source of truth for commercial decisions — price, stock, order acceptance. Nawa's role is integration, not replacement.",
      "Client apps need to stay fast and available even when an ERP call is slow — a catalog browsing experience can't wait on a live ERP round-trip every time.",
      "Product photography and media need efficient serving without loading unnecessary requests onto the ERP.",
    ],
    decisionsTitle: 'The decisions',
    decisions: [
      "Maintain a 'last-known-good' cached snapshot of the catalog, refreshed periodically from the ERP, so apps read from a fast, resilient copy instead of hitting the ERP live on every browse.",
      'Never let that cached snapshot make a commercial decision — order acceptance is always re-validated live against the ERP before being confirmed.',
      'Serve product photography and media through a dedicated cloud pipeline (S3 → Lambda → CloudFront) instead of the ERP.',
      'Build a single safe product API that composes the cached catalog with active campaigns before exposing it to clients.',
    ],
    architectureTitle: 'How it works',
    architecture: [
      {
        heading: 'Catalog refresh and the safe cache',
        body: "A refresh process fetches the full catalog from the ERP (GetItemsInfo), validates completeness and mapping, and builds a candidate snapshot. If a refresh fails, the system keeps serving the current last-known-good snapshot instead of failing. That snapshot is an immutable, atomically-published copy, durable enough to survive a restart.",
      },
      {
        heading: 'Product composition and the safe API',
        body: "The cached snapshot is enriched with active campaign pricing and cloud-hosted image media, then exposed through a single 'trader-safe' API contract — ItemID, name, barcode, price, campaign price, availability, and image URL.",
      },
      {
        heading: 'Order acceptance path',
        body: "An order never goes through the cache. It passes through admin review, then a live revalidation of price and availability directly against the ERP before acceptance — so every commercial decision is based on current data, never a snapshot that could be stale.",
      },
    ],
    evidenceTitle: 'From the actual product',
    images: [
      { key: 'admin-dashboard', caption: 'Admin dashboard — a quick operational view of incoming orders.', width: 369, height: 800 },
      { key: 'product-catalog', caption: 'Product catalog — the same data the safe product API exposes.', width: 369, height: 800 },
      { key: 'cart', caption: 'The order cart before submission for review.', width: 369, height: 800 },
      { key: 'order-history', caption: 'Order history across its different states: accepted, rejected, pending review.', width: 369, height: 800 },
      { key: 'diagram-resilient-catalog', caption: 'The resilient product catalog — from ERP to client apps.', width: 1774, height: 887 },
    ],
    resultTitle: 'Result',
    result:
      "Magic Car's apps — web, iOS, and Android via Flutter — read from a fast, resilient catalog, while every order is revalidated live against the ERP before acceptance. The ERP stays the single source of truth, and the modern apps are built on top of it, not instead of it.",
    lessonTitle: 'The lesson',
    lesson:
      "A cache that's good for reads can be dangerous for commercial decisions unless you draw an explicit boundary around what it's allowed to answer. As the architecture diagram itself puts it: cache for resilient reads, live ERP for commercial decisions.",
  },
};

export function getMagicCarCopy(locale: Locale): MagicCarCopy {
  return copy[locale];
}
