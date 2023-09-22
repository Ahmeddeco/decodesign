import aboutImg from '/image/about.png'
import servImg1 from '/image/Rectangle 1.png'
import servImg2 from '/image/Rectangle 2.png'
import servImg3 from '/image/Rectangle 3.png'
import workImg from '/image/Rectangle 7.png'
import ourWorkImg1 from '/image/Rectangle 10.png'
import ourWorkImg2 from '/image/Rectangle 11.png'
import ourWorkImg3 from '/image/Rectangle 12.png'
import ourWorkImg4 from '/image/Rectangle 13.png'
import ourWorkImg5 from '/image/Rectangle 14.png'
import ourWorkImg6 from '/image/Rectangle 15.png'
import testimonialsImageMain from '/image/Group 5.png'
import testimonialsAvatarImage from '/image/Frame 38.png'
import latestWorksMainImage from '/image/Group 1.png'
import goldenArrow from '/image/Arrow 1.png'
import cardImage1 from '/image/Rectangle 23.png'
import cardImage2 from '/image/Rectangle 21.png'
import cardImage3 from '/image/Rectangle 19.png'
import facebookIcon from '/icons/facebook.png'
import instagramIcon from '/icons/instagram.png'
import whatsappIcon from '/icons/whatsapp.png'
import BehanceIcon from '/icons/Behance.png'

export const navigation = [
  {
    name: 'الرئيسية',
    href: '#hero',
  },
  {
    name: 'من نحن',
    href: '#about us',
  },
  {
    name: 'خدماتنا',
    href: '#services',
  },
  {
    name: 'اعمالنا',
    href: '#our works',
  },
]

export const hero = {
  title: 'ديكو ديزاين',
  subtitle: 'أستديو تصميم',
  p: 'حول مساحتك إلى تحفة فنية',
}

export const about = {
  title: 'من  نحن',
  p1: 'نحن نؤمن بالتفكير المختلف وأن الشيء الأكثر أهمية لراحة الانسان هو العيش في بيئة هادئة تلبي احتياجاته وتساعده على البقاء سعيدا وفي راحة دائمة .',
  p2: 'ونحن نعتقد أيضا أن الجمال والرقي يكمن في البساطة والانسجام ومراعاة ذوق العميل ومتطلباته.',
  img: aboutImg,
}

export const state = [
  {
    value: '2k',
    text: 'متابع',
  },
  {
    value: '15+',
    text: 'مدينة',
  },
  {
    value: '25+',
    text: 'مشروع',
  },
  {
    value: '5+',
    text: 'الجوائز',
  },
]

export const service = {
  title: 'خدماتنا',
  p: 'التصميمات الداخلية الفاخرة هي عنوان لاعمالنا. نقدم مستوي راقي مميز من التصميمات الداخلية بواقعية فريدة. تصميم وتنفيذ جميع التشطيبات بجودة مثالية وفي الوقت الزمني المحدد. تصميم وتنفيذ جميع اعمال المفروشات والموبيليا الراقية .',
  buttonText: 'المزيد',
  images: [
    {
      img1Alt: 'modern bed room',
      img1: servImg1,
      imgTitle: 'غرفة نوم',
    },
    {
      img2Alt: 'modern dinning room',
      img2: servImg2,
      imgTitle: 'سفرة',
    },
    {
      img3Alt: 'modern kitchen',
      img3: servImg3,
      imgTitle: 'مطبخ',
    },
  ],
}

export const workProcess = {
  mainTitle: 'مراحل العمل',
  image: workImg,
  imgAlt: 'modern dinning room',
  subTitle: [
    {
      num: '1',
      title: 'المعاينة والتخطيط',
      p: 'نحن نتعرف على احتياجاتك وميزانيتك وجدولك الزمني، ثم نصمم تصميم اولي واخذ الموافقة عليه للبدء في التصميم النهائي.',
    },
    {
      num: '2',
      title: 'التصميم و التطوير',
      p: 'نحن نبتكر مفاهيم التصميم، ونحسنها من خلال مدخلاتك، نحدد المواد اللازمة للتشطيب مع تقديرات التكلفة النهائية.',
    },
    {
      num: '3',
      title: 'جعل التصميم حقيقة',
      p: 'يتولى فريقنا عملية الإنشاء ويضمن الجودة في التنفيذ . وكذلك التنفيذ موافقا للتصميم المتفق عليه.',
    },
  ],
}

export const ourWork = {
  mainTitle: 'أعمالنا',
  subTitle: [
    'الكل',
    'المطبخ المودرن',
    'نيو كلاسيك',
    'دوبلكس دبي',
    'فيلا القاهرة الجديدة',
  ],
  images: [
    { img1: ourWorkImg1 },
    { img2: ourWorkImg2 },
    { img3: ourWorkImg3 },
    { img4: ourWorkImg4 },
    { img5: ourWorkImg5 },
    { img6: ourWorkImg6 },
  ],
}

export const testimonial = {
  mainTitle: 'التوصيات',
  mianImage: testimonialsImageMain,
  card: [
    {
      avatarImage: testimonialsAvatarImage,
      avatarName: 'ا/ محمد عبدالفتاح',
      avatarSubTitle: 'التجمع الخامس, مصر',
      avatarParagraph:
        'أحمد ممتاز للغاية في العمل معه ومليء بالنشاط والحيوية والأفكار الرائعة.  إنه يعرف كيف يستمع إليك ويحول هذا الى تصميمات رائعة متوافقة مع إتجاهات التصميم الحديثة.',
    },
    {
      avatarImage: testimonialsAvatarImage,
      avatarName: 'م/ وليد نبيل',
      avatarSubTitle: ' العاشر من رمضان, مصر',
      avatarParagraph:
        'أحمد ممتاز للغاية في العمل معه ومليء بالنشاط والحيوية والأفكار الرائعة.  إنه يعرف كيف يستمع إليك ويحول هذا الى تصميمات رائعة متوافقة مع إتجاهات التصميم الحديثة.',
    },
    {
      avatarImage: testimonialsAvatarImage,
      avatarName: 'د/ محمد عبدالعزيز',
      avatarSubTitle: 'التجمع الخامس, مصر',
      avatarParagraph:
        'أحمد ممتاز للغاية في العمل معه ومليء بالنشاط والحيوية والأفكار الرائعة.  إنه يعرف كيف يستمع إليك ويحول هذا الى تصميمات رائعة متوافقة مع إتجاهات التصميم الحديثة.',
    },
  ],
}

export const latestWorks = {
  mainImage: latestWorksMainImage,
  arrow: goldenArrow,
  subTitle: [
    'نصائح وإرشادات للتصميم الداخلي',
    'أعمالنا في التصميم الداخلي',
    'أحدث مدوناتنا',
  ],
  card: [
    {
      img: cardImage1,
      mainTitle: 'المعرض | تصميم داخلي',
      title: 'حمام مودرن',
      subTitle: 'اضائة حارة',
    },
    {
      img: cardImage2,
      mainTitle: 'المعرض | تصميم داخلي',
      title: 'غرفة معيشة مودرن',
      subTitle: 'اضائة محيطية',
    },
    {
      img: cardImage3,
      mainTitle: 'المعرض | تصميم داخلي',
      title: 'غرفة معيشة مودرن',
      subTitle: 'اضائة محيطية',
    },
  ],
}

export const footer = {
  mainParagraph:
    'أن فكرة البساطة في التصميم تكمن في تصميم مساحات باقل قدر من التكلفة معوكميات الاثاث الذي يلبي احتياجات العميل مع مراعاة خلق مساحات فارغة في الفراغ الداخلى للمكان لتوسيع الافق وايجاد مساحات تساعد على تنفس المكان والشعور بالرحابة والسعة . ',
  ourServices: {
    title: 'خدماتنا',
    service: [
      'التصميم الداخلي',
      'الانشاءات',
      'الاعمال الهندسية',
      'تصميم الاثاث',
    ],
  },
  menu: {
    title: 'القائمة',
    service: [
      'الرئيسية',
      'من نحن',
      'خدماتنا',
      'المشروعات',
      'خطوات العمل',
      'آخر أعمالنا',
    ],
  },
  communication: {
    title: 'التواصل',
    paragraph:
      'تابعنا على وسائل التواصل الاجتماعي حتى لا تفوت المشاريع الجديدة المذهلة المصممة لعملائنا حول العالم.',
    social: [
      {
        socialName: 'facbook',
        icon: facebookIcon,
        url: 'www.facebook.com',
      },
      {
        socialName: 'instagram',
        icon: instagramIcon,
        url: 'www.instagram.com',
      },
      {
        socialName: 'whatsapp',
        icon: whatsappIcon,
        url: 'www.facebook.com',
      },
      {
        socialName: 'Behance',
        icon: BehanceIcon,
        url: 'www.behance.net/ahmeddesigner1981',
      },
    ],
  },
}
