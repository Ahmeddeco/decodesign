import facbookicon from '/public/icons/Facebook.webp'
import instagramicon from '/public/icons/instagram.webp'
import whatsappicon from '/public/icons/whatsapp.webp'
import behanceicon from '/public/icons/Behance .webp'
import Logo from '/public/icons/logo.svg'
import aboutImg from '/public/images/home/about us.webp'
import servicesImg from '/public/images/home/our service photo.webp'
import workProcessImg from '/public/images/home/our work process photo.webp'
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

export const arrow = {
	black: '/public/icons/downArrowBlack.png',
	gold: '/public/icons/downArrowGold.png',
	white: '/public/icons/downArrow.png',
}

export const navigation = [
	{
		name: 'الرئيسية',
		target: 'Hero',
		url: '/',
		id: 'hero',
	},
	{
		name: 'من نحن',
		target: 'AboutUs',
		url: 'aboutus',
		id: 'aboutus',
	},
	{
		name: 'خدماتنا',
		target: 'OurServices',
		url: 'ourServices',
		id: 'ourServices',
	},
	{
		name: 'مراحل العمل',
		target: 'WorkProcess',
		url: 'workprocess',
		id: 'workprocess',
	},
	{
		name: 'أعمالنا',
		target: 'OurWorks',
		url: '/ourworks',
		id: 'ourworks',
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
	p: 'حول منزلك إلى تحفة فنية',
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

//? ######### ourWorksPage ##########

export const ourWorksPage = [
	{
		id: 1,
		projectName: 'جابانيدي',
		title: 'ريسبشن و مطبخ جابانيدي',
		location: 'القاهرة الجديدة - مصر',
		paragraph:
			'يتميز التصميم الجابانيدي بالبساطة واستخدام الألوان الترابية مع لمسة بسيطة من الألوان الحارة , واستخدام الاخشاب الطبيعية بشكل بسيط وتشطيب متقن .',
		btnText: 'مشاهدة العمل كاملا',
		pic: [
			{
				src: japanidi1,
				alt: 'japanidi',
			},
			{
				src: japanidi2,
				alt: 'japanidi',
			},
			{
				src: japanidi3,
				alt: 'japanidi',
			},
		],
	},
	{
		id: 2,

		projectName: 'جلام',
		title: 'شقة مودرن بأسلوب الفخامة',
		location: 'مدينة السادات - مصر',
		paragraph:
			'يتميز هذا الأسلوب باستخدام الوان محايدة مثل البيج الفاتح مع لمسات من الخشب المصبع بلون بني بيور ، والاهتمام بالتشطيب الجيد والخامات العالية والخطوط الواضحة والمستقيمة .',
		btnText: 'مشاهدة العمل كاملا',
		pic: [
			{
				src: glam1,
				alt: 'glam',
			},
			{
				src: glam2,
				alt: 'glam',
			},
			{
				src: glam3,
				alt: 'glam',
			},
		],
	},
	{
		id: 3,
		projectName: 'البحر',
		title: 'استوديو على البحر',
		location: 'كاليه - فرنسا',
		paragraph:
			'صمم هذا المكان ليلائم الأماكن الباردة لشمال أوروبا .حيث الألوان الفاتحة لتعكس اشعة الشمس القليلة ، وكذلك وجود الوان حارة لكسر الألوان الباهتة في البيئة الخارجية وزيادة الإحساس بالدفء، وكذلك الاستعانة بمرآة كبيرة لتساعد على انتشار اشعة الضوء ولإعطاء الإحساس بكبر المكان.',
		btnText: 'مشاهدة العمل كاملا',
		pic: [
			{
				src: sea1,
				alt: 'sea apartment',
			},
			{
				src: sea2,
				alt: 'sea apartment',
			},
			{
				src: sea3,
				alt: 'sea apartment',
			},
		],
	},
	{
		id: 4,
		projectName: 'مودرن اصفر',
		title: 'شقة مودرن صفراء',
		location: 'مدينة نصر - مصر',
		paragraph:
			'يعتبر استخدام اللون الأصفر من الأشياء التي تساعد العميل على الشعور بالدفء والطاقة ويرفع من مستوى الروح المعنوية والابداع ، يقوم أيضا بتحفيز عمليات التمثيل الغذائي ولكن يجب توخي الحذر عند استخدام هذا اللون حيث يجب اختيار درجات اقل تشبعا.',
		btnText: 'مشاهدة العمل كاملا',
		pic: [
			{
				src: yellowApartment1,
				alt: 'yellow Apartment',
			},
			{
				src: yellowApartment2,
				alt: 'yellow Apartment',
			},
			{
				src: yellowApartment3,
				alt: 'yellow Apartment',
			},
		],
	},
	{
		id: 5,
		projectName: 'مودرن أزرق',
		title: 'شقة مودرن  بالأزرق البترولي',
		location: 'صحم - عمان',
		paragraph:
			'استخدام هذه الدرجة من الأزرق يعطي إحساس بالرحابة والسعة والهدوء والتأمل لذلك ينصح باستخدامه لمن يحب الجو الهادئ ليتغلب على التوتر العام في البيئة المحيطة .',
		btnText: 'مشاهدة العمل كاملا',
		pic: [
			{
				src: blueApartment1,
				alt: 'blue apartment',
			},
			{
				src: blueApartment2,
				alt: 'blue apartment',
			},
			{
				src: blueApartment3,
				alt: 'blue apartment',
			},
		],
	},
]
