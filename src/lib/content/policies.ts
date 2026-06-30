// src/lib/content/policies.ts
// Migrated policy content for McBurney Transport Group.
// Source: live site (privacy + gender pay gap fetched in full; cookies partial — see TODO).
// NOTE: This is the client's own policy text moved to the new platform.
// Have McBurney compliance confirm the migrated copy matches their source of record
// before go-live. The privacy notice in particular is dated (last modified 2018,
// pre-Brexit UK GDPR / EEA language) and should be reviewed.

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export type Policy = {
  slug: string;
  title: string;
  description: string;
  updated?: string;
  blocks: PolicyBlock[];
};

export const PRIVACY_POLICY: Policy = {
  slug: "privacy",
  title: "Privacy Notice",
  description:
    "How The McBurney Transport Group Limited collects, uses and protects your personal data.",
  updated: "Last modified 23 May 2018",
  blocks: [
    { type: "p", text: "Welcome to The McBurney Transport Group Limited (\u201CMcBurney\u201D) privacy notice." },
    { type: "h2", text: "Overview" },
    { type: "p", text: "At McBurney we take your privacy seriously and we are committed to protecting your personal data. We aim to be clear about how we use personal data and this privacy notice will inform you as to how we look after your personal data, what personal data we process and why. It includes the relevant requirements of the General Data Protection Regulation. It applies both when you visit our website (regardless of where you visit it from) and when you use our services." },
    { type: "h2", text: "Changes to this data protection notice" },
    { type: "p", text: "Like any business, our business will change over time and so will the way we use and protect your personal data. As a result, we may need to make changes to this notice. These changes will not reduce your rights or the level of protection we apply to your personal information. The most up to date notice will always be published here and we will clearly identify the changes we have made in any updates." },
    { type: "h2", text: "1. Important information and who we are" },
    { type: "p", text: "This privacy notice aims to give you information on how McBurney collects and processes your personal data through your dealings with us, including your use of this website or purchase of a service we offer." },
    { type: "p", text: "This website is not intended for children and we do not knowingly collect data relating to children." },
    { type: "p", text: "It is important that you read this privacy notice together with any other privacy or fair processing notice we may provide on specific occasions, so that you are fully aware of how and why we are using your data. This privacy notice supplements the other notices and is not intended to override them." },
    { type: "h3", text: "Controller" },
    { type: "p", text: "McBurney is the controller and responsible for your personal data (collectively referred to as \u201CMcBurney\u201D, \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D in this privacy notice). When we refer to McBurney we mean The McBurney Transport Group Limited, Company Number NI043332, registered address 205 Moorfields Road, Ballymena, Antrim, BT42 3EG." },
    { type: "h3", text: "Third-party links" },
    { type: "p", text: "This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy notice of every website you visit." },
    { type: "h2", text: "2. How to contact us" },
    { type: "p", text: "We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy notice. If you have any questions, including any requests to exercise your legal rights, please contact our data privacy manager, Ian McKeown." },
    { type: "h2", text: "3. The personal data we process and where we get it" },
    { type: "p", text: "Personal data means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). As part of our services, we may collect, use, store and transfer different kinds of personal data about you, grouped as follows:" },
    { type: "ul", items: [
      "Identity Data \u2014 first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.",
      "Contact Data \u2014 billing address, email address and telephone numbers.",
      "Financial Data \u2014 bank account and payment card details.",
      "Transaction Data \u2014 details about payments to and from you and other details of services you have purchased from us.",
      "Technical Data \u2014 internet protocol (IP) address and other technology on the devices you use to access this website.",
      "Marketing and Communications Data \u2014 your preferences in receiving marketing from us.",
    ]},
    { type: "p", text: "We also collect, use and share Aggregated Data such as statistical data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as it does not directly or indirectly reveal your identity. If we combine Aggregated Data with your personal data so that it can identify you, we treat the combined data as personal data." },
    { type: "p", text: "We do not collect any Special Categories of Personal Data about you (race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, health, genetic and biometric data) unless we have your explicit consent. Nor do we collect any information about criminal convictions and offences." },
    { type: "p", text: "If you fail to provide personal data we may not be able to perform the contract we have or are trying to enter into with you. In this case we may have to cancel a service you have with us, but we will notify you at the time." },
    { type: "h3", text: "How your personal data is collected" },
    { type: "ul", items: [
      "Direct interactions \u2014 you may give us your Identity, Contact and Financial Data by placing an order, filling in forms, signing up to our newsletter, or corresponding with us by post, phone, email or otherwise.",
      "Automated technologies \u2014 as you interact with our website, we may automatically collect Technical Data about your browsing actions using cookies.",
    ]},
    { type: "h2", text: "4. How we use your personal data" },
    { type: "p", text: "We will only use your personal data when the law allows us to. Most commonly we will use it: where we need to perform a contract with you; where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; and where we need to comply with a legal or regulatory obligation. Generally we do not rely on consent as a legal basis for processing your personal data." },
    { type: "h3", text: "Marketing" },
    { type: "p", text: "We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what may be of interest to you. You will receive marketing communications from us if you have requested information or purchased goods or services from us and have not opted out." },
    { type: "h3", text: "Third-party marketing and opting out" },
    { type: "p", text: "We will get your express opt-in consent before we share your personal data with any company outside McBurney for marketing purposes. We may share your personal data with third-party courier companies, but these will only use it to fulfil your order. You can ask us to stop sending you marketing messages at any time by following the opt-out links on any marketing message, or by contacting our data privacy manager, Ian McKeown." },
    { type: "h2", text: "5. Who we disclose your personal data to" },
    { type: "p", text: "We may share your personal data with external third parties (service providers, professional advisers, and authorities such as HM Revenue & Customs) and with third parties to whom we may sell, transfer or merge parts of our business. We require all third parties to respect the security of your personal data and to treat it in accordance with the law, and we only permit them to process it for specified purposes and in accordance with our instructions." },
    { type: "h2", text: "6. International transfers" },
    { type: "p", text: "We do not transfer your personal data outside of the European Economic Area." },
    { type: "h2", text: "7. How we store your data securely" },
    { type: "p", text: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. We limit access to those employees, agents, contractors and other third parties who have a business need to know, and they are subject to a duty of confidentiality. We have procedures to deal with any suspected personal data breach and will notify you and any applicable regulator where legally required." },
    { type: "h2", text: "8. Data retention" },
    { type: "p", text: "We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including satisfying any legal, accounting or reporting requirements. Details of retention periods are available in our retention policy, which you can request by contacting our data privacy manager, Ian McKeown." },
    { type: "h2", text: "9. Your rights" },
    { type: "p", text: "Under certain circumstances you have rights under data protection laws in relation to your personal data, including the right to:" },
    { type: "ul", items: [
      "Request access to your personal data.",
      "Request correction of the personal data we hold about you.",
      "Request erasure of your personal data.",
      "Object to processing of your personal data.",
      "Request restriction of processing of your personal data.",
      "Request the transfer of your personal data to you or to a third party.",
      "Withdraw consent at any time where we are relying on consent to process your personal data.",
    ]},
    { type: "p", text: "You will not usually have to pay a fee to access your personal data or exercise any of your other rights. We try to respond to all legitimate requests within one month. To exercise any of these rights, please contact our data privacy manager, Ian McKeown." },
    { type: "p", text: "You also have the right to make a complaint at any time to the Information Commissioner\u2019s Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). Address: Information Commissioner\u2019s Office, 3rd Floor, 14 Cromac Place, Belfast, BT7 2JB. Tel: 028 9027 8757 or 0303 123 1114. Email: ni@ico.org.uk. We would appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance." },
  ],
};

export const COOKIES_POLICY: Policy = {
  slug: "cookies",
  title: "Cookies",
  description:
    "How McBurney Transport Group uses cookies on this website and how you can manage them.",
  // TODO: cookies source page could not be fully retrieved (server returned 425).
  // The text below reflects the substantive content available. Confirm against the
  // live page, and consider replacing with a proper modern cookie policy + consent
  // banner (the legacy "we recommend you leave cookies on" wording is weak on compliance).
  blocks: [
    { type: "p", text: "This website uses cookies. By continuing to browse the site you are agreeing to our use of cookies. Cookies are small text files placed on your device that help us provide a better experience." },
    { type: "h2", text: "How we use cookies" },
    { type: "p", text: "Some cookies are essential to the operation of the site. Others help us understand how the site is used \u2014 for example, how long you spend on the site or which pages you visit \u2014 so that we can improve it. From time to time we test new features and make subtle changes to the way the site is delivered; these cookies help ensure you receive a consistent experience while we understand which improvements our users value most." },
    { type: "h2", text: "Forms-related cookies" },
    { type: "p", text: "When you submit data through a form, such as those found on our contact pages, cookies may be set to remember your details for future correspondence." },
    { type: "h2", text: "Disabling cookies" },
    { type: "p", text: "You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites you visit, and may result in certain features becoming unavailable." },
    { type: "h2", text: "More information" },
    { type: "p", text: "If you are still looking for more information, you can contact us through any of our preferred contact methods via our contact page." },
  ],
};

export type PayGapStat = { label: string; men: string; women: string };

export const GENDER_PAY_GAP = {
  slug: "gender-pay-gap",
  title: "Gender Pay Gap Report",
  description:
    "McBurney Transport Group Limited's Gender Pay Gap reporting under the Equality Act 2010.",
  intro: [
    "McBurney Transport Group Limited welcomes the government\u2019s Gender Pay Gap Reporting initiative as a method of seeking to promote and deliver equality in the workplace.",
    "As an employer of more than 250 employees in the UK, we are required to carry out Gender Pay Gap Reporting in accordance with the Equality Act 2010 (Gender Pay Gap Information) Regulations 2017. We confirm that the data reported is accurate.",
  ],
  hourlyPay: [
    "There is a positive differential of 25.6% where the mean hourly rate reported for women is higher than the men\u2019s mean hourly rate.",
    "The median hourly rate for men is 1.2% higher than the women\u2019s median hourly rate.",
  ],
  // men / women percentages per quartile
  quartiles: [
    { label: "Top quartile", men: "89.2%", women: "10.8%" },
    { label: "Upper middle quartile", men: "96.8%", women: "3.2%" },
    { label: "Lower middle quartile", men: "98.1%", women: "1.9%" },
    { label: "Lower quartile", men: "83.5%", women: "16.5%" },
  ] as PayGapStat[],
  bonus: [
    "Women\u2019s bonus pay is 1694.2% higher (mean) and 1104.5% higher (median).",
    "70.69% of men and 19.61% of women received bonus pay.",
  ],
  context: [
    "The disparity between the number of women employed in each pay quartile is strongly influenced by the fact that the majority of our UK employees \u2014 90.17% \u2014 are HGV drivers, warehouse operatives, transport operatives and mechanics, 96.84% of whom are male. While we are an equal opportunities employer, there are very few female applicants to these types of vacancies.",
    "While this disparity is reflected across the transport and logistics sector generally, we are committed to continuing to assess our recruitment and promotion exercises at all levels within our business, to ensure equal treatment of individuals, regardless of gender.",
  ],
  signoff: {
    name: "Pamela McCrea",
    role: "Director, for and on behalf of McBurney Transport Group Limited",
  },
};

// RHA Conditions of Carriage: third-party (Road Haulage Association) document.
// Do NOT inline its text. Host the PDF and link to it as a download.
export const RHA_CONDITIONS = {
  slug: "rha-conditions-of-carriage",
  title: "RHA Conditions of Carriage",
  description:
    "All services are provided subject to the Road Haulage Association Conditions of Carriage 2026.",
  // Place the PDF at /public/policies/rha-conditions-of-carriage-2026.pdf
  pdfPath: "/policies/rha-conditions-of-carriage-2026.pdf",
  note: "All work undertaken by McBurney Transport Group is subject to the RHA Conditions of Carriage 2026. Download the full document below.",
};

export const ALL_POLICIES = [PRIVACY_POLICY, COOKIES_POLICY] as const;
