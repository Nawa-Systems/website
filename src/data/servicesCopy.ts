import type { Locale } from './site';
import type { ServiceSlug } from './site';

interface ServiceCopy {
  problem: string;
  role: string;
  work: string[];
  principles: string[];
  relation: string;
}

interface ServiceCopyBundle {
  intro: string;
  services: Record<ServiceSlug, ServiceCopy>;
  crossService: string;
}

const copy: Record<Locale, ServiceCopyBundle> = {
  ar: {
    intro:
      'أربعة خطوط خدمة فقط، كل واحد منها يعالج مشكلة هندسية حقيقية ومحددة. نواة لا تضيف خدمات جديدة لمجرد التوسع، ولا تفصل عملاً واحداً إلى عدة عروض تسويقية.',
    services: {
      'custom-software': {
        problem:
          'عملك يحتاج نظاماً برمجياً لا تغطيه الأدوات الجاهزة، أو أن الأدوات الجاهزة تفرض عليك طريقة عمل لا تناسب عملك الفعلي.',
        role:
          'نواة تفهم المشكلة التجارية أولاً، ثم تصمم النظام المناسب لحجم المخاطرة والحجم الفعلي للعمل — لا أكبر ولا أعقد مما تحتاج.',
        work: [
          'تطبيقات ويب وتطبيقات جوّال',
          'أنظمة خلفية وواجهات برمجية (APIs)',
          'منصات أعمال وأنظمة داخلية مخصصة الغرض',
        ],
        principles: [
          'التحدي التقني عند الحاجة: لا نبني تعقيداً غير ضروري لمجرد أنه ممكن',
          'الجودة تتناسب مع المخاطرة: أداة داخلية صغيرة لا تحتاج نفس صرامة نظام تجاري حرج',
          'نواة تملك التسليم الكامل من الاكتشاف إلى النشر والتسليم',
        ],
        relation:
          'غالباً ما يكون تطوير البرمجيات المخصصة نقطة البداية التي تكشف عن حاجة لاحقة إلى البنية السحابية أو الأتمتة أو تحديث نظام قائم.',
      },
      'cloud-infrastructure': {
        problem:
          'نظامك يحتاج بنية تحتية موثوقة وقابلة للتوسع، أو أن العمليات اليدوية في النشر والمراقبة تستهلك وقتاً وتزيد الأخطاء.',
        role:
          'نواة تصمم البنية التحتية والنشر بما يتناسب مع حجم عملك الفعلي، وتبني أساساً يمكن الفريق من النشر والمراقبة دون اعتماد دائم على شخص واحد.',
        work: [
          'تصميم البنية السحابية ونشرها',
          'خطوط CI/CD وحاويات (Containers)',
          'مراقبة الأنظمة وتحسين الموثوقية',
          'تحديث البنية التحتية القائمة',
        ],
        principles: [
          'لا بنية تحتية أكبر من الحاجة الفعلية للمشروع',
          'التوثيق والتشغيل الآلي بدلاً من الاعتماد على المعرفة الفردية',
          'الأمان والنسخ الاحتياطي جزء أساسي من التصميم، وليس إضافة لاحقة',
        ],
        relation:
          'ترتبط مباشرة بالتطوير المخصص — أي نظام برمجي جاد يحتاج بنية تحتية مدروسة ليعمل بشكل موثوق في الإنتاج.',
      },
      automation: {
        problem:
          'فريقك ينفّذ مهاماً متكررة يدوياً بين أنظمة مختلفة، ما يستهلك وقتاً ويزيد احتمال الخطأ البشري.',
        role:
          'نواة تحدد العمليات التي يستحق أتمتتها فعلياً — ليس كل عملية يدوية تستحق أتمتة — وتبني الحل الذي يقلل التدخل البشري في النقاط الصحيحة.',
        work: [
          'أتمتة العمليات التجارية والتدفقات الداخلية',
          'أتمتة التكامل بين الأنظمة المختلفة',
          'أدوات تشغيلية داخلية لتقليل العمل اليدوي المتكرر',
        ],
        principles: [
          'الأتمتة تخدم عملية حقيقية، وليست ميزة تقنية للعرض',
          'نقاط الفشل يجب أن تكون واضحة وقابلة للمراقبة، لا صندوقاً أسود',
          'الإنسان يبقى قادراً على التدخل عند الحاجة',
        ],
        relation:
          'غالباً ما تعتمد الأتمتة على تكامل مع أنظمة موجودة، ما يربطها بخدمة تحديث الأنظمة والتكامل.',
      },
      'modernization-integration': {
        problem:
          'لديك نظام قائم يعمل — مثل نظام ERP أو منصة قديمة — ولا تريد استبداله، لكنك تحتاج ربطه بأنظمة أو تطبيقات أو واجهات جديدة.',
        role:
          'نواة تدمج الأنظمة الجديدة مع ما هو قائم دون كسره. الهدف تكامل آمن يحافظ على مصدر الحقيقة في النظام الأصلي، لا استبداله بالكامل.',
        work: [
          'تحديث الأنظمة القديمة (Legacy Modernization)',
          'التكامل مع أنظمة وواجهات برمجية خارجية',
          'عمليات الترحيل (Migrations)',
          'تحسين قابلية الصيانة في الأنظمة القائمة',
        ],
        principles: [
          'النظام القائم يبقى مصدر الحقيقة للقرارات التجارية الحساسة ما لم يُتفق على غير ذلك',
          'التكامل يجب أن يبقى موثوقاً حتى عند تعطل جزء منه (مثل استخدام تخزين مؤقت آمن عند الحاجة)',
          'لا إعادة بناء كاملة حين يكون التكامل كافياً وأكثر أماناً',
        ],
        relation:
          'ترتبط بالأتمتة والبنية السحابية في المشاريع التي تحتاج ربط عدة أنظمة معاً بشكل موثوق.',
      },
    },
    crossService:
      'المشاريع الحقيقية نادراً ما تحتاج خدمة واحدة معزولة. مشروع تطوير مخصص قد يحتاج بنية سحابية ليعمل في الإنتاج، ومشروع تكامل قد يحتاج أتمتة لتقليل التدخل اليدوي بعد الربط. نواة تنظر إلى المشروع ككل، لا كخدمات منفصلة.',
  },
  en: {
    intro:
      'Four service lines, each addressing a real, specific engineering problem. Nawa does not add services to appear larger, and does not split one piece of work into several marketing offerings.',
    services: {
      'custom-software': {
        problem:
          'Your business needs software that off-the-shelf tools do not cover — or those tools force a workflow that does not match how your business actually operates.',
        role:
          'Nawa understands the business problem first, then designs a system sized to the actual risk and scale of the work — not larger or more complex than it needs to be.',
        work: [
          'Web applications and mobile applications',
          'Backend systems and APIs',
          'Business platforms and purpose-built internal systems',
        ],
        principles: [
          'Technical challenge where it matters: we do not add complexity just because it is possible',
          'Quality proportional to risk: a small internal tool does not need the same rigor as a business-critical system',
          'Nawa owns full delivery from discovery through deployment and handover',
        ],
        relation:
          'Custom software work is often the starting point that surfaces a later need for cloud infrastructure, automation, or modernizing an existing system.',
      },
      'cloud-infrastructure': {
        problem:
          'Your system needs reliable, scalable infrastructure — or manual deployment and monitoring processes are costing time and introducing errors.',
        role:
          "Nawa designs infrastructure and deployment sized to your project's actual scale, building a foundation the team can deploy and monitor without permanent dependence on one person.",
        work: [
          'Cloud architecture and deployment',
          'CI/CD pipelines and containers',
          'System monitoring and reliability improvements',
          'Modernizing existing infrastructure',
        ],
        principles: [
          'No infrastructure larger than the project actually needs',
          'Documentation and automation over reliance on individual memory',
          'Security and backups are part of the design, not an afterthought',
        ],
        relation:
          'Connects directly to custom development — any serious software system needs well-considered infrastructure to run reliably in production.',
      },
      automation: {
        problem:
          'Your team performs repetitive manual work across different systems, costing time and increasing the chance of human error.',
        role:
          "Nawa identifies the processes actually worth automating — not every manual process deserves automation — and builds a solution that removes human intervention at the right points.",
        work: [
          'Business-process and internal workflow automation',
          'System-to-system integration automation',
          'Internal operational tools that reduce repetitive manual work',
        ],
        principles: [
          'Automation serves a real process, not a technical feature for its own sake',
          'Failure points must be visible and monitorable, not a black box',
          'A human can still intervene when needed',
        ],
        relation:
          'Automation often depends on integrating with existing systems, connecting it to Software Modernization & Integration.',
      },
      'modernization-integration': {
        problem:
          "You have an existing system that works — an ERP, a legacy platform — and you don't want to replace it, but you need it connected to new systems, apps, or interfaces.",
        role:
          "Nawa integrates new systems with what already exists without breaking it. The goal is safe integration that preserves the source of truth in the original system, not a full replacement.",
        work: [
          'Legacy modernization',
          'Integration with external systems and APIs',
          'Migrations',
          'Improving maintainability in existing systems',
        ],
        principles: [
          'The existing system remains the source of truth for sensitive business decisions unless otherwise agreed',
          'Integration must stay reliable even when a part of it fails (for example, using a safe cache when appropriate)',
          'No full rebuild when integration is sufficient and safer',
        ],
        relation:
          'Connects to automation and cloud infrastructure in projects that need several systems reliably linked together.',
      },
    },
    crossService:
      "Real projects rarely need one isolated service. A custom development project may need cloud infrastructure to run in production, and an integration project may need automation to reduce manual work after systems are connected. Nawa looks at the project as a whole, not as separate services.",
  },
};

export function getServicesCopy(locale: Locale): ServiceCopyBundle {
  return copy[locale];
}
