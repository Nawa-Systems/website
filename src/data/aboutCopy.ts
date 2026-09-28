import type { Locale } from './site';

interface AboutCopy {
  title: string;
  intro: string;
  purposeTitle: string;
  purpose: string;
  missionTitle: string;
  mission: string;
  valuesTitle: string;
  values: { name: string; meaning: string }[];
  placeTitle: string;
  place: string;
  governanceTitle: string;
  governance: string;
  founderTitle: string;
  founderRole: string;
  founderBody: string;
}

const copy: Record<Locale, AboutCopy> = {
  ar: {
    title: 'من نحن',
    intro:
      'نواة شركة هندسة برمجيات مقرها الخليل، فلسطين. نبني أنظمة برمجية لعملائنا، ونطوّر منتجاتنا الخاصة — بدءاً برحاب.',
    purposeTitle: 'الغاية',
    purpose:
      'بناء تقنية ممتازة بنزاهة، ورفع المستوى العملي لهندسة البرمجيات في فلسطين، وإثبات أن التميّز التقني والقيم الإسلامية والهوية العربية والنجاح التجاري يمكن أن يعزز بعضها بعضاً.',
    missionTitle: 'الرسالة',
    mission:
      'نواة تحل مشكلات تجارية وتشغيلية حقيقية عبر هندسة برمجيات عالية الجودة، وبنية سحابية، وأتمتة، وتحديث أنظمة. نسلّم حلولاً كاملة لا مجرد أيدٍ عاملة، ونستثمر في منتجاتنا الخاصة.',
    valuesTitle: 'القيم',
    values: [
      { name: 'النزاهة الإسلامية', meaning: 'القرارات التجارية والتشغيلية تبقى ضمن إطار نواة للحوكمة الإسلامية. الربح لا يتقدّم على الجواز أو الصدق أو العدل.' },
      { name: 'التميّز الهندسي', meaning: 'بناء أنظمة آمنة، قابلة للصيانة، مفهومة، ومناسبة لحجم مخاطرتها الفعلي.' },
      { name: 'الإنصاف', meaning: 'تسعير عادل، تحديد نطاق صادق، والإفصاح عن المفاضلات الجوهرية دون استغلال جهل العميل التقني.' },
      { name: 'المسؤولية', meaning: 'تحمّل نتائج الالتزامات، وإظهار المخاطر مبكراً، وتوثيق القرارات.' },
      { name: 'الهوية العربية دون انعزال', meaning: 'استخدام العربية بثقة في حياة الشركة، مع الإنجليزية والمعرفة التقنية العالمية حيثما تحسّن الدقة.' },
      { name: 'الطموح العملي', meaning: 'السعي وراء عمل تقني ذي معنى ونمو طويل الأمد، دون خلط التعقيد أو الحجم بالقيمة.' },
    ],
    placeTitle: 'فلسطين أولاً',
    place:
      'فلسطين أولاً تعني أن نواة تبني قصداً قدرتها وسمعتها ومعرفتها بالسوق الفلسطيني. هذا لا يعني تحديد خياراتنا التقنية أو عملائنا المستقبليين بالجغرافيا — نواة جاهزة لخدمة عملاء إقليميين ودوليين جادين حين يكون التوافق قوياً.',
    governanceTitle: 'الحوكمة الإسلامية',
    governance:
      'تأسست نواة على مبادئ إسلامية تُترجَم إلى سلوك عملي فعلي: تعامل عادل، اتفاقيات واضحة، صدق في التواصل، وتجنّب العمل في مجالات محظورة. هذا أساس تشغيلي نلتزم به في القرارات اليومية، وليس أداة تسويقية.',
    founderTitle: 'المؤسس',
    founderRole: 'مؤسس ومدير عام',
    founderBody:
      'نواة شركة يقودها مؤسسها في مرحلتها الحالية، وتتحمّل هذه القيادة مسؤولية حماية غاية الشركة، وحوكمتها الإسلامية، ومعيارها الهندسي، وانضباطها المالي، واستقلاليتها على المدى الطويل.',
  },
  en: {
    title: 'About',
    intro:
      'Nawa is a software engineering company based in Hebron, Palestine. We build systems for our clients, and we develop our own products — starting with Rihab.',
    purposeTitle: 'Purpose',
    purpose:
      'To build excellent technology with integrity, raise the practical standard of software engineering in Palestine, and prove that technical excellence, Islamic values, Arabic identity, and commercial success can reinforce one another.',
    missionTitle: 'Mission',
    mission:
      'Nawa solves meaningful business and operational problems through high-quality software engineering, cloud infrastructure, automation, and modernization. We deliver complete solutions rather than merely supplying labor, and we invest in our own products.',
    valuesTitle: 'Values',
    values: [
      { name: 'Islamic integrity', meaning: "Commercial and operational decisions stay within Nawa's Islamic governance framework. Profit does not override permissibility, honesty, or justice." },
      { name: 'Engineering excellence', meaning: 'Build systems that are secure, maintainable, understandable, and appropriate to their actual risk.' },
      { name: 'Fairness', meaning: "Price fairly, scope honestly, and disclose material tradeoffs without exploiting a client's technical ignorance." },
      { name: 'Responsibility', meaning: 'Own the outcome of commitments, surface risks early, and document decisions.' },
      { name: 'Arabic identity without isolation', meaning: 'Use Arabic confidently in company life, while using English and global technical knowledge wherever they improve precision.' },
      { name: 'Practical ambition', meaning: 'Pursue technically meaningful work and long-term growth without confusing complexity or size with value.' },
    ],
    placeTitle: 'Palestine-first',
    place:
      "Palestine-first means Nawa intentionally builds its capability, reputation, and market understanding in Palestine. It does not limit our technology choices or future clients by geography — Nawa is structured to serve serious regional and international clients when the fit is strong.",
    governanceTitle: 'Islamic governance',
    governance:
      'Nawa is grounded in Islamic principles that translate into actual working conduct: fair dealing, clear agreements, honesty in communication, and avoiding prohibited work. This is an operating foundation we hold ourselves to in daily decisions, not a marketing device.',
    founderTitle: 'Founder',
    founderRole: 'Founder & Managing Director',
    founderBody:
      "Nawa is founder-led at its current stage. That leadership carries responsibility for protecting the company's purpose, Islamic governance, engineering standard, financial discipline, and long-term independence.",
  },
};

export function getAboutCopy(locale: Locale): AboutCopy {
  return copy[locale];
}
