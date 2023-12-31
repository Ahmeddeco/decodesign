import aboutImg from '/public/about.webp'
import servImg1 from '/public/Rectangle 1.webp'
import servImg2 from '/public/Rectangle 2.webp'
import servImg3 from '/public/Rectangle 3.webp'
import workImg from '/public/Rectangle 7.webp'
import ourWorkImg1 from '/public/Rectangle 10.webp'
import ourWorkImg2 from '/public/Rectangle 11.webp'
import ourWorkImg3 from '/public/Rectangle 12.webp'
import ourWorkImg4 from '/public/Rectangle 13.webp'
import ourWorkImg5 from '/public/Rectangle 14.webp'
import ourWorkImg6 from '/public/Rectangle 15.webp'
import testimonialsImageMain from '/public/Group 5.webp'
import testimonialsAvatarImage from '/public/Frame 38.webp'
import latestWorksMainImage from '/public/Group 1.webp'
import goldenArrow from '/public/Arrow 1.webp'
import cardImage1 from '/public/Rectangle 23.webp'
import cardImage2 from '/public/Rectangle 21.webp'
import cardImage3 from '/public/Rectangle 19.webp'
import Logo from '/public/logo.webp'
import { TbBrandFacebook, TbBrandInstagram, TbBrandWhatsapp, TbBrandBehance } from 'react-icons/tb'
// import { TfiClose } from 'react-icons/tfi'


export const logo = {
  src: Logo,
  alt: 'deco design logo'
}

export const navigation = [
  {
    name: 'الرئيسية',
    target: 'Hero',
  },
  {
    name: 'من نحن',
    target: 'AboutUs',
  },
  {
    name: 'خدماتنا',
    target: 'OurServices',
  },
  {
    name: 'مراحل العمل',
    target: 'WorkProgress',
  },
  {
    name: 'اعمالنا',
    target: 'OurWorks',
  },
  {
    name: 'التوصيات',
    target: 'Testimonials',
  },
  {
    name: 'آخر أعمالنا',
    target: 'OurLatestWorks',
  },
]
export const BurgerIcon =
  '<TbMenu2 />'
export const closeIcon =
  '<TfiClose />'

export const social = [
  {
    socialName: 'facbook',
    icon: <TbBrandFacebook />,
    url: 'https://www.facebook.com/profile.php?id=100085078434274',
  },
  {
    socialName: 'instagram',
    icon: <TbBrandInstagram />,
    url: 'https://www.instagram.com/decodesigndecodesign/',
  },
  {
    socialName: 'whatsapp',
    icon: <TbBrandWhatsapp />,
    url: 'https://wa.me/+201152640142',
  },
  {
    socialName: 'Behance',
    icon: <TbBrandBehance />,
    url: 'https://www.behance.net/ahmeddesigner1981',
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
    value: '2.1k',
    title: 'متابع',
  },
  {
    value: '15+',
    title: 'مدينة',
  },
  {
    value: '25+',
    title: 'مشروع',
  },

]

export const services = {
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
  alt: 'غرفة صالون مودرن',
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

  },
}
