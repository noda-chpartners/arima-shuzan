export const site = {
  name: '有馬珠算塾',
  tagline: 'そろばんで「できた！」を増やそう',
  title: '有馬珠算塾｜川崎市宮前区・宮前平のそろばん教室',
  description:
    '川崎市宮前区有馬のそろばん教室「有馬珠算塾」。昭和46年開塾。田園都市線・宮前平駅から徒歩18分。週1回から通えます。計算力・集中力・自信を育てる体験学習を受付中。',
  locale: 'ja_JP',
  telephone: '044-866-9919',
  telephoneTel: '+81448669919',
  telephoneIntl: '+81-44-866-9919',
  foundingYear: '1971',
  foundingEra: '昭和46年',
  postalCode: '216-0003',
  addressRegion: '神奈川県',
  addressLocality: '川崎市宮前区',
  streetAddress: '有馬3-9-8',
  addressFull: '神奈川県川崎市宮前区有馬3-9-8',
  station: '田園都市線「宮前平駅」徒歩18分',
  additionalStation: '田園都市線「鷺沼駅」徒歩20分',
  openingDays: '月曜日・火曜日・木曜日',
  openingHours: '15:00～19:00',
  opens: '15:00',
  closes: '19:00',
  ogImagePath: '/ogp.jpg',
  ogImageWidth: 1376,
  ogImageHeight: 768,
  ogImageAlt: '有馬珠算塾のそろばん。川崎市宮前区のそろばん教室',
} as const;

export const mapUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(`${site.addressFull} ${site.name}`);

export const faqs = [
  {
    question: '週何回から通えますか？',
    answer: '週1回〜週3回、通塾する曜日をお選びいただけます。',
  },
  {
    question: '授業の時間は決まっていますか？',
    answer: '開塾時間内（月・火・木 15:00〜19:00）で、ご都合の良い時間をご相談ください。',
  },
  {
    question: 'そろばんが初めてでも大丈夫ですか？',
    answer: 'そろばんが初めてのお子さまも大歓迎です。体験から始められます。',
  },
  {
    question: '教室はどこにありますか？',
    answer: '神奈川県川崎市宮前区有馬3-9-8です。マクドナルド246鷺沼店から徒歩3分、有馬病院から徒歩1分です。',
  },
  {
    question: '何歳から入塾できますか？',
    answer: '年長さんから入塾できます。保護者の方の同伴をお願いいたします。',
  },
] as const;
