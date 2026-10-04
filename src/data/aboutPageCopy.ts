import type { Locale } from './site';

// About page copy aligned to Website Design v1. Substance traces to the
// governance/brand sources (Palestine-first, Arabic identity, Islamic foundation
// expressed through conduct, founder-led stage). No fabricated name/title.

export interface AboutPageCopy {
  label: string;
  heroTitle: string;
  heroLead: string;
  whyLabel: string;
  whyTitle: string;
  why: { title: string; body: string }[];
  valuesLabel: string;
  valuesTitle: string;
  valuesBody: string;
  values: { name: string; meaning: string }[];
  modelLabel: string;
  modelTitle: string;
  modelProductTag: string;
  modelClientTag: string;
  modelProduct: string; // contains an <a> to Rihab
  modelClient: string; // contains an <a> to Magic Car
  founderLabel: string;
  founderTitle: string;
  founderBody: string;
  founderRole: string; // role line, no personal name
  founderCaption: string; // image alt
  ctaTitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const copy: Record<Locale, AboutPageCopy> = {
  en: {
    label: 'About',
    heroTitle: 'Nawa means the core everything else is built around.',
    heroLead:
      'We are a software engineering company in Hebron, Palestine. We build the systems organizations depend on, and treat every project as a nucleus that real work will be built around for years.',
    whyLabel: 'Why Nawa',
    whyTitle: 'From Palestine, to a standard that needs no apology.',
    why: [
      { title: 'Palestine-first', body: 'We build for Palestinian organizations that deserve world-class software, and we understand their context from the inside.' },
      { title: 'Arabic identity', body: 'Arabic is a first-class design language for us, not a later translation. Our interfaces start right-to-left.' },
      { title: 'International capability', body: 'We work in Arabic and English, with the same tools and practices used to build serious systems anywhere.' },
    ],
    valuesLabel: 'Values',
    valuesTitle: 'Our foundation is Islamic, and it shows first in how we deal with people.',
    valuesBody:
      'We don’t put our values on the wall. We hold to them in pricing, agreements and project selection, and in how we take responsibility when something goes wrong.',
    values: [
      { name: 'Fairness', meaning: 'Pricing that reflects the actual work, without exploiting a client’s need or technical unfamiliarity.' },
      { name: 'Honesty', meaning: 'We say what we know and what we don’t, and we don’t promise what we can’t deliver.' },
      { name: 'Responsible project selection', meaning: 'We decline projects that conflict with our values, even profitable ones.' },
      { name: 'Clear agreements', meaning: 'Written scope, clear responsibilities, and terms both sides understand before we start.' },
      { name: 'Accountability', meaning: 'We own what we build and fix our mistakes without stalling.' },
    ],
    modelLabel: 'How we work',
    modelTitle: 'Our products and our client work, to the same standard.',
    modelProductTag: 'Nawa Product',
    modelClientTag: 'Client Work',
    modelProduct: 'We build and run our own products, like <a href="RIHAB">Rihab</a>. That makes us live with the consequences of our engineering decisions directly.',
    modelClient: 'And we build for our clients as a technical partner that takes responsibility, as in <a href="MAGICCAR"><bdi dir="ltr">Magic Car</bdi></a>.',
    founderLabel: 'Founder',
    founderTitle: 'Nawa is led today by its founder, who builds it the way he builds systems: with documented decisions and clear steps.',
    founderBody:
      'At this stage the founder works directly on every project, from the first conversation to handover. That means the person who understands your problem is the same one who designs the solution and takes responsibility for it.',
    founderRole: 'Founder · Hebron, Palestine',
    founderCaption: 'Nawa’s founder',
    ctaTitle: 'If the way we work fits, let’s start with a conversation.',
    ctaPrimary: 'Start a project',
    ctaSecondary: 'View our work',
  },
  ar: {
    label: 'من نحن',
    heroTitle: 'نواة تعني الجزء الذي يُبنى حوله كل شيء.',
    heroLead:
      'نحن شركة هندسة برمجيات من الخليل، فلسطين. نبني الأنظمة التي تعتمد عليها المؤسسات، ونتعامل مع كل مشروع كأنه نواة سيُبنى حولها عمل حقيقي لسنوات.',
    whyLabel: 'لماذا نواة',
    whyTitle: 'من فلسطين، بمعايير لا تحتاج إلى اعتذار.',
    why: [
      { title: 'فلسطين أولًا', body: 'نبني لمؤسسات فلسطينية تستحق برمجيات بمستوى عالمي، ونفهم سياقها من الداخل.' },
      { title: 'هوية عربية', body: 'العربية عندنا لغة تصميم أولى، لا ترجمة لاحقة. واجهاتنا تبدأ من اليمين إلى اليسار.' },
      { title: 'قدرة دولية', body: 'نعمل بالعربية والإنجليزية، وبالأدوات والممارسات نفسها التي تُبنى بها الأنظمة الجادة في كل مكان.' },
    ],
    valuesLabel: 'القيم',
    valuesTitle: 'أساسنا إسلامي، ويظهر في طريقة تعاملنا قبل أي شيء آخر.',
    valuesBody:
      'لا نضع قيمنا على الجدران. نلتزم بها في التسعير والاتفاقات واختيار المشاريع، وفي الطريقة التي نتحمّل بها المسؤولية عندما يحدث خطأ.',
    values: [
      { name: 'العدل', meaning: 'تسعير يعكس العمل الفعلي، دون استغلال حاجة العميل أو جهله التقني.' },
      { name: 'الصدق', meaning: 'نقول ما نعرفه وما لا نعرفه، ولا نعد بما لا نستطيع تسليمه.' },
      { name: 'اختيار المشاريع بمسؤولية', meaning: 'نعتذر عن المشاريع التي تتعارض مع قيمنا، حتى لو كانت مربحة.' },
      { name: 'وضوح الاتفاق', meaning: 'نطاق مكتوب، ومسؤوليات واضحة، وشروط يفهمها الطرفان قبل البدء.' },
      { name: 'المساءلة', meaning: 'نتحمّل مسؤولية ما نبنيه، ونصلح ما نخطئ فيه دون مماطلة.' },
    ],
    modelLabel: 'نموذج العمل',
    modelTitle: 'منتجاتنا وأعمال عملائنا، بنفس المعايير.',
    modelProductTag: 'منتج من نواة',
    modelClientTag: 'عمل لعميل',
    modelProduct: 'نبني منتجاتنا ونشغّلها بأنفسنا، مثل <a href="RIHAB">رحاب</a>. هذا يجعلنا نعيش عواقب قراراتنا الهندسية مباشرة.',
    modelClient: 'ونبني لعملائنا كشريك تقني يتحمّل المسؤولية، كما في <a href="MAGICCAR"><bdi dir="ltr">Magic Car</bdi></a>.',
    founderLabel: 'المؤسس',
    founderTitle: 'نواة اليوم يقودها مؤسسها، ويبنيها كما يبني الأنظمة: بقرارات موثّقة وخطوات واضحة.',
    founderBody:
      'في هذه المرحلة، يعمل المؤسس مباشرة على كل مشروع، من أول محادثة حتى التسليم. هذا يعني أن من يفهم مشكلتك هو نفسه من يصمّم الحل ويتحمّل مسؤوليته.',
    founderRole: 'المؤسس · الخليل، فلسطين',
    founderCaption: 'مؤسس نواة',
    ctaTitle: 'إن كانت طريقة عملنا تناسبك، فلنبدأ بمحادثة.',
    ctaPrimary: 'ابدأ مشروعك',
    ctaSecondary: 'استعرض أعمالنا',
  },
};

export function getAboutPageCopy(locale: Locale): AboutPageCopy {
  return copy[locale];
}
