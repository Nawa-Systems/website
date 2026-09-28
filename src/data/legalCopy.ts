import type { Locale } from './site';

interface LegalCopy {
  privacyTitle: string;
  privacyIntro: string;
  privacySections: { heading: string; body: string }[];
  termsTitle: string;
  termsIntro: string;
  termsSections: { heading: string; body: string }[];
}

const copy: Record<Locale, LegalCopy> = {
  ar: {
    privacyTitle: 'سياسة الخصوصية',
    privacyIntro:
      'هذه الصفحة تشرح البيانات التي يجمعها هذا الموقع الإلكتروني وكيفية استخدامها. نواة لا تزال في مرحلة ما قبل التأسيس القانوني الرسمي؛ هذه السياسة تصف الممارسة الفعلية للموقع، لا التزاماً قانونياً مرتبطاً بجهة أو نطاق قضائي محدد.',
    privacySections: [
      {
        heading: 'ملف تعريف ارتباط تفضيل اللغة',
        body: 'يستخدم الموقع ملف تعريف ارتباط واحداً وظيفياً (nawa_locale) لتذكّر لغتك المفضّلة بين الزيارات. هذا الملف ضروري لعمل الموقع، ولا يُستخدم للتتبع أو الإعلانات.',
      },
      {
        heading: 'التحليلات',
        body: 'قد يستخدم الموقع Google Analytics لفهم كيفية استخدام الزوار للموقع بشكل عام، فقط عند تفعيله صراحة عبر إعدادات النشر. إن لم يكن مفعّلاً، لا تُجمع أي بيانات تحليلية.',
      },
      {
        heading: 'قنوات التواصل',
        body: 'روابط البريد الإلكتروني والهاتف وواتساب في هذا الموقع تفتح تطبيقك الخاص مباشرة (بريدك، هاتفك، أو واتساب). لا يوجد نموذج تواصل على الموقع يجمع بياناتك أو يخزّنها على خوادمنا.',
      },
      {
        heading: 'التواصل بخصوص الخصوصية',
        body: 'لأي استفسار متعلق بالخصوصية، راسلنا عبر support@nawa.systems.',
      },
    ],
    termsTitle: 'الشروط والأحكام',
    termsIntro:
      'باستخدامك لهذا الموقع فإنك توافق على الشروط التالية. نواة لا تزال في مرحلة ما قبل التأسيس القانوني الرسمي؛ هذه الشروط عامة ولا تشكل تمثيلاً لأي تسجيل تجاري أو نطاق قضائي محدد.',
    termsSections: [
      {
        heading: 'محتوى الموقع',
        body: 'المحتوى والعلامة والتصميم المعروضة في هذا الموقع مملوكة لنواة. لا يجوز إعادة استخدام العلامة أو الهوية البصرية دون إذن كتابي مسبق.',
      },
      {
        heading: 'دقة المعلومات',
        body: 'نبذل جهداً معقولاً لإبقاء محتوى الموقع دقيقاً ومحدثاً، لكننا لا نضمن خلوه التام من الأخطاء في كل وقت.',
      },
      {
        heading: 'لا ضمانات ضمنية على النتائج',
        body: 'المعلومات الواردة في هذا الموقع، بما فيها أعمالنا وخدماتنا، وصفية ولا تشكل التزاماً تعاقدياً بنتيجة محددة لأي مشروع مستقبلي. تُحدَّد شروط أي مشروع فعلي عبر اتفاقية منفصلة مكتوبة.',
      },
      {
        heading: 'التواصل بخصوص هذه الشروط',
        body: 'لأي استفسار متعلق بهذه الشروط، راسلنا عبر support@nawa.systems.',
      },
    ],
  },
  en: {
    privacyTitle: 'Privacy Policy',
    privacyIntro:
      'This page explains what data this website collects and how it is used. Nawa is currently pre-incorporation; this policy describes the actual practice of the website, not a legal obligation tied to a specific registered entity or jurisdiction.',
    privacySections: [
      {
        heading: 'Language preference cookie',
        body: "The site uses a single functional cookie (nawa_locale) to remember your preferred language between visits. It is necessary for the site to work and is not used for tracking or advertising.",
      },
      {
        heading: 'Analytics',
        body: 'The site may use Google Analytics to understand general usage patterns, only when explicitly enabled through deployment configuration. If it is not enabled, no analytics data is collected.',
      },
      {
        heading: 'Contact channels',
        body: "The email, phone, and WhatsApp links on this site open your own application directly (your mail client, phone dialer, or WhatsApp). There is no contact form on the site that collects or stores your data on our servers.",
      },
      {
        heading: 'Privacy inquiries',
        body: 'For any privacy-related question, reach us at support@nawa.systems.',
      },
    ],
    termsTitle: 'Terms & Conditions',
    termsIntro:
      'By using this website you agree to the following terms. Nawa is currently pre-incorporation; these terms are general and do not represent any specific business registration or jurisdiction.',
    termsSections: [
      {
        heading: 'Site content',
        body: "The content, brand, and design shown on this site belong to Nawa. The brand and visual identity may not be reused without prior written permission.",
      },
      {
        heading: 'Accuracy of information',
        body: 'We make a reasonable effort to keep site content accurate and current, but we do not guarantee it is free of errors at all times.',
      },
      {
        heading: 'No implied guarantee of outcomes',
        body: 'Information on this site, including our work and services, is descriptive and does not constitute a contractual commitment to a specific outcome for any future project. The terms of any actual project are set out in a separate written agreement.',
      },
      {
        heading: 'Questions about these terms',
        body: 'For any question about these terms, reach us at support@nawa.systems.',
      },
    ],
  },
};

export function getLegalCopy(locale: Locale): LegalCopy {
  return copy[locale];
}
