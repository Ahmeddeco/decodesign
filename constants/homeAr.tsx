import {
	FaFacebookSquare,
	FaBehanceSquare,
	FaInstagramSquare,
	FaWhatsappSquare,
} from 'react-icons/fa'

import Logo from '/public/icons/logo.svg'
import aboutImg from '/public/images/home/about.webp'
import servicesImg from '/public/images/home/our-service.webp'
import workProcessImg from '/public/images/home/work-proccess.webp'
import ourWorkImg from '/public/images/home/our works.webp'
import japanidi1 from '/public/images/our works/japanidi/japanidi 1.webp'
import japanidi2 from '/public/images/our works/japanidi/japanidi 2.webp'
import japanidi3 from '/public/images/our works/japanidi/japanidi 3.webp'
import glam1 from '/public/images/our works/Glam living/Glam living 1.webp'
import glam2 from '/public/images/our works/Glam living/Glam living 2.webp'
import glam3 from '/public/images/our works/Glam living/Glam living 3.webp'
import sea1 from '/public/images/our works/sea studio/sea studio 1.webp'
import sea2 from '/public/images/our works/sea studio/sea studio 2.webp'
import sea3 from '/public/images/our works/sea studio/sea studio 3.webp'
import yellowApartment1 from '/public/images/our works/yellow apartment/yellow apartment 1.webp'
import yellowApartment2 from '/public/images/our works/yellow apartment/yellow apartment 2.webp'
import yellowApartment3 from '/public/images/our works/yellow apartment/yellow apartment 3.webp'
import blueApartment1 from '/public/images/our works/blue apartment/blue apartment 1.webp'
import blueApartment2 from '/public/images/our works/blue apartment/blue apartment 2.webp'
import blueApartment3 from '/public/images/our works/blue apartment/blue apartment 3.webp'

export const logo = {
	src: Logo,
	alt: 'deco design logo',
}

export const navigation = [
	{
		name: 'الرئيسية',
		url: '/',
		id: 'hero',
	},

	{
		name: 'أعمالنا',
		url: '/ourworks',
		id: 'ourworks',
	},
	{
		name: 'خدماتنا',
		url: '/ourservices',
		id: 'ourservices',
	},
	{
		name: 'مقالات',
		url: '/articles',
		id: 'articles',
	},
]

type SocialType = {
	socialName: string
	url: string
	icon: JSX.Element
}
export const social: SocialType[] = [
	{
		socialName: 'facebook',
		url: 'https://www.facebook.com/profile.php?id=100085078434274',
		icon: <FaFacebookSquare />,
	},
	{
		socialName: 'instagram',
		url: 'https://www.instagram.com/decodesigndecodesign/',
		icon: <FaInstagramSquare />,
	},
	{
		socialName: 'whatsapp',
		url: 'https://wa.me/+201152640142',
		icon: <FaWhatsappSquare />,
	},
	{
		socialName: 'Behance',
		url: 'https://www.behance.net/ahmeddesigner1981',
		icon: <FaBehanceSquare />,
	},
]

export const hero = {
	title: 'ديكو ديزاين',
	subtitle: 'أستديو تصميم داخلي',
	p: 'حول منزلك إلى تحفة فنية',
}

export const about = {
	title: 'من نحن',
	p1: 'نحن نؤمن بالتفكير المختلف وأن أهم شيء لراحة الإنسان هو العيش في بيئة هادئة ومبهجة تلبي احتياجاته وتساعده على البقاء سعيدًا ومرتاحًا دائمًا.',
	p2: 'كما نؤمن أن الجمال والرقي يكمن في البساطة والانسجام وإرضاء ذوق العميل ورغباته. نحن نقوم بعمل تصاميم داخلية رائعة.',
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
	p: 'نقوم بعمل كل التصميمات الديكورية الداخلية ثلاثية الابعاد وبدقة وجودة وواقعية فائقة نقوم بحل كل المشاكل التي تواجه تخطيط مساحتك ونصممها لك لتحظى بحياة مريحة وسعيدة .',
	img: servicesImg,
	buttonText: 'شاهد المزيد من أعمالنا',
	buttonLink: '/ourworks',
}

export const workProcess = {
	mainTitle: ' مراحل العمل',
	img: workProcessImg,
	imgAlt: 'modern dinning room',
	subTitle: [
		{
			num: '01',
			title: 'الإستكشاف والتخطيط',
			p: 'نقوم بالتعرف على المكان ونحدد احتياجاتك وميزانيتك والمشاكل الموجودة بالمكان ووضع تصور عام للحلول.',
		},
		{
			num: '02',
			title: 'التصميم و التطوير',
			p: 'نقوم بإنشاء مفاهيم التصميم وتحسينها باستخدام مدخلاتك واختيار الخامات اللازمة و تقدير التكلفة.',
		},
		{
			num: '03',
			title: 'التنفيذ على أرض الواقع',
			p: 'يبدأ فريقنا المؤهل في التنفيذ طبقا للخطة و التصميم المحدد , وإخراج المظهر النهائي كما هو في التصميم وبجودة متناهية حسب الاتفاق المبرم .',
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
	image: ourWorkImg,
}

export const footer = {
	mainParagraph: 'البساطة والرقي هما عنوان تصميماتنا',
	ourServices: {
		title: 'خدماتنا',
		service: ['التصميم الداخلي', 'التشطيبات المتكاملة', 'تصميم الاثاث'],
	},

	communication: {
		title: 'التواصل',
		socialIcon: social,
	},
}

/* ------------------------------ ourWorksPage ------------------------------ */

export const ourWorksPage = [
	{
		id: 1,
		title: 'تصميم جابانيدي',
		location: 'القاهرة الجديدة - مصر',
		paragraph:
			'يتميز التصميم الجابانيدي بالبساطة واستخدام الألوان الترابية مع لمسة بسيطة من الألوان الحارة , واستخدام الاخشاب الطبيعية بشكل بسيط وتشطيب متقن .',
		pic: [
			{
				img: {
					src: japanidi1,
					alt: 'japanidi',
				},
			},
			{
				img: {
					src: japanidi2,
					alt: 'japanidi',
				},
			},
			{
				img: {
					src: japanidi3,
					alt: 'japanidi',
				},
			},
		],
	},
	{
		id: 2,

		title: 'شقة بأسلوب جلام',
		location: 'مدينة السادات - مصر',
		paragraph:
			'يتميز هذا الأسلوب باستخدام الوان محايدة مثل البيج الفاتح مع لمسات من الخشب المصبغ بلون بني بيور ، والاهتمام بالتشطيب الجيد والخامات العالية والخطوط الواضحة والمستقيمة .',
		pic: [
			{
				img: {
					src: glam1,
					alt: 'glam',
				},
			},
			{
				img: {
					src: glam2,
					alt: 'glam',
				},
			},
			{
				img: {
					src: glam3,
					alt: 'glam',
				},
			},
		],
	},
	{
		id: 3,
		title: 'أستوديو على البحر',
		location: 'كاليه - فرنسا',
		paragraph:
			'صمم هذا المكان ليلائم الأماكن الباردة لشمال أوروبا .حيث الألوان الفاتحة لتعكس اشعة الشمس القليلة ، وكذلك وجود الوان حارة لكسر الألوان الباهتة في البيئة الخارجية وزيادة الإحساس بالدفء، وكذلك الاستعانة بمرآة كبيرة لتساعد على انتشار اشعة الضوء ولإعطاء الإحساس بكبر المكان.',
		pic: [
			{
				img: {
					src: sea1,
					alt: 'sea apartment',
				},
			},
			{
				img: {
					src: sea2,
					alt: 'sea apartment',
				},
			},
			{
				img: {
					src: sea3,
					alt: 'sea apartment',
				},
			},
		],
	},
	{
		id: 4,
		title: 'شقة مودرن وورم',
		location: 'مدينة نصر - مصر',
		paragraph:
			'يعتبر استخدام اللون الأصفر من الأشياء التي تساعد العميل على الشعور بالدفء والطاقة ويرفع من مستوى الروح المعنوية والابداع ، يقوم أيضا بتحفيز عمليات التمثيل الغذائي ولكن يجب توخي الحذر عند استخدام هذا اللون حيث يجب اختيار درجات اقل تشبعا.',
		pic: [
			{
				img: {
					src: yellowApartment1,
					alt: 'yellow Apartment',
				},
			},
			{
				img: {
					src: yellowApartment2,
					alt: 'yellow Apartment',
				},
			},
			{
				img: {
					src: yellowApartment3,
					alt: 'yellow Apartment',
				},
			},
		],
	},
	{
		id: 5,
		title: 'شقة مودرن بترولي',
		location: 'صحم - عمان',
		paragraph:
			'استخدام هذه الدرجة من اللون الأزرق يعطي إحساس بالرحابة والسعة والهدوء والتأمل لذلك ينصح باستخدامه لمن يحب الجو الهادئ ليتغلب على التوتر العام في البيئة المحيطة .',
		pic: [
			{
				img: {
					src: blueApartment1,
					alt: 'blue apartment',
				},
			},
			{
				img: {
					src: blueApartment2,
					alt: 'blue apartment',
				},
			},
			{
				img: {
					src: blueApartment3,
					alt: 'blue apartment',
				},
			},
		],
	},
]
