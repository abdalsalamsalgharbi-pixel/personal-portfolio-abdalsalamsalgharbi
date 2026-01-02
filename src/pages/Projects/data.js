import dashboardImage from '../../assets/images/ain-al-amn/dashboard.jpg';
import mainDashboardImage from '../../assets/images/ain-al-amn/main-dashboard.jpg';
import reportsImage from '../../assets/images/ain-al-amn/reports.jpg';
import statisticsImage from '../../assets/images/ain-al-amn/statistics.jpg';
import usersImage from '../../assets/images/ain-al-amn/users.jpg';

import securityEyeMain from '../../assets/images/ain-al-amn/security-eye-main.png';
import mobileApp1 from '../../assets/images/ain-al-amn/mobile-app-1.jpg.jpg.jpg';
import mobileApp2 from '../../assets/images/ain-al-amn/mobile-app-2.jpg.jpg';
import mobileApp3 from '../../assets/images/ain-al-amn/mobile-app-3.jpg.jpg';
import mobileApp4 from '../../assets/images/ain-al-amn/mobile-app-4.jpg.jpg';

import uiuxImage from '../../assets/images/projects/uiux.png';
import brandingImage from '../../assets/images/projects/branding.png';
import analysisImage from '../../assets/images/projects/analysis.png';
import researchImage from '../../assets/images/projects/research.png';

export const projectsData = [
    {
        id: 1,
        title: 'نظام عين الامن - لوزاره الداخلية',
        category: 'web',
        image: dashboardImage,
        images: [
            mainDashboardImage,
            reportsImage,
            statisticsImage,
            usersImage
        ],
        description: 'منصة إدارة متكاملة لتطبيق عين الأمن تتيح متابعة البلاغات والإحصائيات وإدارة المستخدمين',
        fullDescription: 'تم تطوير هذا المشروع باستخدام أحدث التقنيات لتوفير منصة إدارة متكاملة لتطبيق عين الأمن. يتضمن النظام إدارة البلاغات، متابعة الإحصائيات، وإدارة المستخدمين مع واجهة مستخدم سهلة الاستخدام.',
        technologies: ['React', 'Bootstrap', 'Material-UI', 'Socket.io', 'Redux', 'Django', 'Python'],
        features: [
            'واجهة مستخدم سهلة الاستخدام',
            'متابعة البلاغات في الوقت الفعلي',
            'لوحة إحصائيات متكاملة',
            'إدارة المستخدمين والصلاحيات',
            'نظام تقارير متقدم'
        ]
    },
    {
        id: 2,
        title: 'تطبيق عين الامن - لوزاره الداخلية',
        category: 'mobile',
        image: securityEyeMain,
        images: [
            mobileApp1,
            mobileApp2,
            mobileApp3,
            mobileApp4
        ],
        description: 'تطبيق موبايل متكامل يسمح للمواطنين بإرسال البلاغات الأمنية ومتابعتها مع نظام تحديد الموقع',
        fullDescription: 'تم تطوير تطبيق عين الأمن للموبايل باستخدام React Native لتوفير تجربة مستخدم سلسة وسهلة الاستخدام. يتيح التطبيق للمواطنين إرسال البلاغات الأمنية مع تحديد موقعهم بدقة، ومتابعة حالة البلاغات في الوقت الفعلي.',
        technologies: ['React Native', 'Redux', 'Socket.io', 'Google Maps API', 'Firebase', 'Node.js'],
        features: [
            'إرسال بلاغات أمنية مع تحديد الموقع',
            'متابعة حالة البلاغات في الوقت الفعلي',
            'نظام إشعارات فوري',
            'واجهة مستخدم سهلة وبسيطة',
            'دعم كامل للغة العربية'
        ]
    },
    {
        id: 3,
        title: 'تصميم تطبيق الخدمات الذكية',
        category: 'uiux',
        image: uiuxImage,
        description: 'تجربة مستخدم متكاملة لتطبيق خدمات لوجستية تركز على سهولة الوصول والتفاعل السلس.',
        fullDescription: 'مشروع تصميم واجهات وتجربة مستخدم (UI/UX) لتطبيق خدمات ذكية، يعتمد على أحدث صيحات التصميم مثل Glassmorphism لتوفير تجربة مريحة وجذابة للمستخدم.',
        technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
        features: ['دراسة سلوك المستخدم', 'تصميم واجهات عصرية', 'نماذج تفاعلية (Prototypes)', 'نظام تصميم متكامل (Design System)']
    },
    {
        id: 4,
        title: 'هوية شركة ايثيون التقنية',
        category: 'branding',
        image: brandingImage,
        description: 'تصميم هوية بصرية كاملة تشمل الشعار والمطبوعات التجارية.',
        fullDescription: 'بناء الهوية البصرية لشركة تقنية ناشئة، بدءاً من تصميم الشعار المبتكر وحتى اختيار الألوان والخطوط والمطبوعات الرسمية لتعزيز حضور العلامة التجارية.',
        technologies: ['Illustrator', 'Photoshop', 'Branding Strategy', 'Visual Design'],
        features: ['تصميم شعار فريد', 'اختيار الهوية اللونية', 'تصميم المطبوعات الرسمية', 'دليل العلامة التجارية (Brandbook)']
    },
    {
        id: 5,
        title: 'تحليل نظام ادارة الموارد (ERP)',
        category: 'analysis',
        image: analysisImage,
        description: 'تحليل شامل لمتطلبات نظام إدارة موارد المؤسسات مع رسم خرائط العمليات.',
        fullDescription: 'عملية تحليل هندسية دقيقة لبناء نظام ERP ضخم، تشمل جمع المتطلبات من أصحاب المصلحة ورسم خرائط تدفق البيانات وهيكلة قواعد البيانات.',
        technologies: ['Systems Analysis', 'UML', 'Data Flow', 'Requirements Engineering'],
        features: ['تحليل فجوات الأعمال', 'رسم مخططات UML', 'توثيق المتطلبات التقنية', 'تصميم مسارات العمل (Workflow)']
    },
    {
        id: 6,
        title: 'بحث في تطبيقات الذكاء الاصطناعي',
        category: 'research',
        image: researchImage,
        description: 'دراسة بحثية معمقة حول أثر استخدام تقنيات الذكاء الاصطناعي في تحسين تجربة المستخدم.',
        fullDescription: 'بحث أكاديمي وتطبيقي يدرس كيفية دمج خوارزميات الذكاء الاصطناعي في واجهات المستخدم لتحسين التخصيص وسهولة الاستخدام بناءً على بيانات حقيقية.',
        technologies: ['AI Research', 'Data Analysis', 'User Behavior', 'Academic Writing'],
        features: ['جمع وتحليل البيانات', 'دراسات الحالة (Case Studies)', 'اختبارات A/B أوتوماتيكية', 'توصيات هندسة الواجهات']
    }
];
