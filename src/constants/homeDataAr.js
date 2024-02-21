import facbookicon from '/public/icons/Facebook.webp'
import instagramicon from '/public/icons/instagram.webp'
import whatsappicon from '/public/icons/whatsapp.webp'
import behanceicon from '/public/icons/Behance .webp'
import Logo from '/public/icons/logo.webp'
import aboutImg from '/public/images/home/about us.webp'
import servicesImg from '/public/images/home/our service photo.webp'
import workProcessImg from '/public/images/home/our work process photo.webp'
import ourWorkImg from '/public/images/home/our works.webp'

export const logo = {
	src: Logo,
	alt: 'deco design logo',
}

export const navigation = [
	{
		name: 'الرئيسية',
		target: 'Hero',
		url: '/',
		id: '#hero',
	},
	{
		name: 'من نحن',
		target: 'AboutUs',
		url: '/aboutus',
		id: '#aboutus',
	},
	{
		name: 'خدماتنا',
		target: 'OurServices',
		url: '/ourServices',
		id: '#ourServices',
	},
	{
		name: 'مراحل العمل',
		target: 'WorkProcess',
		url: '/workprocess',
		id: '#workprocess',
	},
	{
		name: 'أعمالنا',
		target: 'OurWorks',
		url: '/ourworks',
		id: '#ourworks',
	},
]

export const social = [
	{
		socialName: 'facbook',
		icon: facbookicon,
		url: 'https://www.facebook.com/profile.php?id=100085078434274',
	},
	{
		socialName: 'instagram',
		icon: instagramicon,
		url: 'https://www.instagram.com/decodesigndecodesign/',
	},
	{
		socialName: 'whatsapp',
		icon: whatsappicon,
		url: 'https://wa.me/+201152640142',
	},
	{
		socialName: 'Behance',
		icon: behanceicon,
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
	p1: 'نحن نؤمن بالتفكير المختلف وأن أهم شيء لراحة الإنسان هو العيش في بيئة هادئة ومبهجة تلبي احتياجاته وتساعده على البقاء سعيدًا ومرتاحًا دائمًا.',
	p2: 'كما نؤمن أن الجمال والرقي يكمن في البساطة والانسجام وإرضاء ذوق العميل ورغباته. نحن نقوم بتصميم التصاميم الداخلية.',
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
	buttonText: 'المزيد',
	image: servicesImg,
}

export const workProcess = {
	mainTitle: 'مراحل العمل',
	image: workProcessImg,
	imgAlt: 'modern dinning room',
	subTitle: [
		{
			num: '1',
			title: 'الإستكشاف والتخطيط',
			p: 'نقوم بالتعرف على المكان ونحدد احتياجاتك وميزانيتك والمشاكل الموجودة بالمكان ووضع تصور عام للحلول.',
		},
		{
			num: '2',
			title: 'التصميم و التطوير',
			p: 'نقوم بإنشاء مفاهيم التصميم وتحسينها باستخدام مدخلاتك واختيار الخامات اللازمة و تقدير التكلفة.',
		},
		{
			num: '3',
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
