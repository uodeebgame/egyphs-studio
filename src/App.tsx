import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Calendar, Users, Database, Lock, Eye, Settings, AlertTriangle, Download, Star, Globe, Menu, X, ChevronDown, ExternalLink, Play, Award, Smartphone, Gamepad as GamepadIcon, Languages, Heart } from 'lucide-react';

// Game data based on your actual apps
const games = [
  {
    id: 'film-arabi',
    titleAr: 'فيلم عربي',
    titleEn: 'Film Arabi',
    category: 'Trivia',
    description: 'Test your knowledge of Arabic movies and cinema with this exciting trivia game featuring classic and modern films.',
    descriptionAr: 'اختبر معرفتك بالأفلام العربية والسينما مع هذه اللعبة المثيرة التي تضم أفلاماً كلاسيكية وحديثة.',
    playStoreId: 'com.mohammadallam.fylmrby',
    downloads: '10,000+',
    rating: 4.5,
    icon: '🎬',
    screenshots: ['/screenshots/film-arabi-1.jpg', '/screenshots/film-arabi-2.jpg'],
    features: ['Arabic Cinema Trivia', 'Multiple Difficulty Levels', 'Offline Play', 'Achievement System']
  },
  {
    id: 'better-english',
    titleAr: 'إنجليزية أفضل',
    titleEn: 'Better English: Language Quiz',
    category: 'Educational',
    description: 'Improve your English language skills with comprehensive quizzes covering grammar, vocabulary, and pronunciation.',
    descriptionAr: 'حسن مهاراتك في اللغة الإنجليزية مع اختبارات شاملة تغطي القواعد والمفردات والنطق.',
    playStoreId: 'com.mohammadallam.betterenglishapp',
    downloads: '5,000+',
    rating: 4.7,
    icon: '📚',
    screenshots: ['/screenshots/better-english-1.jpg', '/screenshots/better-english-2.jpg'],
    features: ['Grammar Lessons', 'Vocabulary Builder', 'Pronunciation Guide', 'Progress Tracking']
  },
  {
    id: 'movie-challenge',
    titleAr: 'تحدي الأفلام',
    titleEn: 'Movie Challenge Quiz',
    category: 'Trivia',
    description: 'Challenge yourself with international movie trivia covering Hollywood, Bollywood, and world cinema.',
    descriptionAr: 'تحدى نفسك مع أسئلة الأفلام العالمية التي تغطي هوليوود وبوليوود والسينما العالمية.',
    playStoreId: 'com.mohammadallam.moviechallenge',
    downloads: '8,000+',
    rating: 4.3,
    icon: '🎭',
    screenshots: ['/screenshots/movie-challenge-1.jpg', '/screenshots/movie-challenge-2.jpg'],
    features: ['International Movies', 'Actor Recognition', 'Movie Quotes', 'Leaderboards']
  },
  {
    id: 'min-dah',
    titleAr: 'مين ده: لعبة الشخصيات المشهورة',
    titleEn: 'Who Is This: Famous Characters Game',
    category: 'Celebrity Quiz',
    description: 'Guess famous personalities, celebrities, and historical figures in this engaging character recognition game.',
    descriptionAr: 'خمن الشخصيات المشهورة والمشاهير والشخصيات التاريخية في هذه اللعبة الممتعة لتمييز الشخصيات.',
    playStoreId: 'com.mohammadallam.myndhblshkhsytlsh',
    downloads: '15,000+',
    rating: 4.6,
    icon: '👤',
    screenshots: ['/screenshots/min-dah-1.jpg', '/screenshots/min-dah-2.jpg'],
    features: ['Celebrity Recognition', 'Historical Figures', 'Hint System', 'Daily Challenges']
  }
];

const navigationItems = [
  { id: 'home', label: 'Home', labelAr: 'الرئيسية' },
  { id: 'games', label: 'Games', labelAr: 'الألعاب' },
  { id: 'about', label: 'About', labelAr: 'عنا' },
  { id: 'privacy', label: 'Privacy', labelAr: 'الخصوصية' },
  { id: 'contact', label: 'Contact', labelAr: 'اتصل بنا' }
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedPrivacyPolicy, setSelectedPrivacyPolicy] = useState(null);
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General',
    message: ''
  });

  const isRTL = language === 'ar';

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    setSelectedGame(null);
    setSelectedPrivacyPolicy(null);
    setMobileMenuOpen(false);
  };

  const showGameDetails = (game) => {
    setSelectedGame(game);
    setCurrentSection('game-details');
  };

  const showPrivacyPolicy = (gameId) => {
    setSelectedPrivacyPolicy(gameId);
    setCurrentSection('privacy-policy');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!');
    setContactForm({ name: '', email: '', subject: 'General', message: '' });
  };

  const t = (en, ar) => language === 'ar' ? ar : en;

  // Header Component
  const Header = () => (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
            <img 
              src="/egyphs-logo-new-trans.png" 
              alt="Egyphs Entertainment" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Egyphs Entertainment</h1>
              <p className="text-sm text-gray-600">{t('Gaming Studio', 'استوديو الألعاب')}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {t(item.label, item.labelAr)}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentSection === item.id
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {t(item.label, item.labelAr)}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  // Hero Section
  const HeroSection = () => (
    <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('We Create Games', 'نصنع ألعاباً')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              {t('You Love', 'تحبها')}
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {t(
              'Discover our collection of engaging quiz games that celebrate Arabic culture, language learning, and entertainment.',
              'اكتشف مجموعتنا من الألعاب التفاعلية الممتعة التي تحتفي بالثقافة العربية وتعلم اللغات والترفيه.'
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('games')}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t('Explore Games', 'استكشف الألعاب')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="border-2 border-yellow-600 text-yellow-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 hover:text-white transition-all duration-300"
            >
              {t('About Us', 'عنا')}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4</div>
            <div className="text-gray-600">{t('Games Published', 'ألعاب منشورة')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">38K+</div>
            <div className="text-gray-600">{t('Downloads', 'تحميل')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">4.5</div>
            <div className="text-gray-600">{t('Average Rating', 'متوسط التقييم')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
            <div className="text-gray-600">{t('Languages', 'لغات')}</div>
          </div>
        </div>
      </div>
    </section>
  );

  // Games Section
  const GamesSection = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('Our Games', 'ألعابنا')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t(
              'Explore our collection of educational and entertaining games designed for Arabic speakers and language learners.',
              'استكشف مجموعتنا من الألعاب التعليمية والترفيهية المصممة للناطقين بالعربية ومتعلمي اللغات.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
                  <div className="text-4xl">{game.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {t(game.titleEn, game.titleAr)}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        {game.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{game.rating}</span>
                      </div>
                      <span>{game.downloads}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t(game.description, game.descriptionAr)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {game.features.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://play.google.com/store/apps/details?id=${game.playStoreId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t('Download', 'تحميل')}</span>
                  </a>
                  <button
                    onClick={() => showGameDetails(game)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-yellow-600 hover:text-yellow-700 transition-all duration-300"
                  >
                    {t('Learn More', 'المزيد')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Game Details Section
  const GameDetailsSection = () => {
    if (!selectedGame) return null;

    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => scrollToSection('games')}
            className="mb-8 flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors"
          >
            <ChevronDown className="w-5 h-5 rotate-90" />
            <span>{t('Back to Games', 'العودة للألعاب')}</span>
          </button>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center space-x-4 mb-6" dir={isRTL ? 'rtl' : 'ltr'}>
                    <div className="text-6xl">{selectedGame.icon}</div>
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {t(selectedGame.titleEn, selectedGame.titleAr)}
                      </h1>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                          {selectedGame.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span>{selectedGame.rating}</span>
                        </div>
                        <span>{selectedGame.downloads}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {t(selectedGame.description, selectedGame.descriptionAr)}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t('Key Features', 'الميزات الرئيسية')}
                    </h3>
                    <ul className="space-y-3">
                      {selectedGame.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://play.google.com/store/apps/details?id=${selectedGame.playStoreId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-center hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-5 h-5" />
                      <span>{t('Download on Google Play', 'تحميل من جوجل بلاي')}</span>
                    </a>
                    <button
                      onClick={() => showPrivacyPolicy(selectedGame.id)}
                      className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-yellow-600 hover:text-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Shield className="w-5 h-5" />
                      <span>{t('Privacy Policy', 'سياسة الخصوصية')}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    {t('Screenshots', 'لقطات الشاشة')}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                      <GamepadIcon className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // About Section
  const AboutSection = () => (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('About Egyphs Entertainment', 'عن إيجيفس إنترتينمنت')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t(
                'We are a passionate mobile game development studio dedicated to creating engaging, educational, and culturally rich gaming experiences. Our games celebrate Arabic culture while providing entertainment and learning opportunities for players of all ages.',
                'نحن استوديو متحمس لتطوير ألعاب الهاتف المحمول مكرس لإنشاء تجارب ألعاب جذابة وتعليمية وغنية ثقافياً. ألعابنا تحتفي بالثقافة العربية بينما توفر فرص الترفيه والتعلم للاعبين من جميع الأعمار.'
              )}
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t(
                'From movie trivia to language learning, our diverse portfolio of games combines fun with education, helping players expand their knowledge while enjoying quality entertainment.',
                'من أسئلة الأفلام إلى تعلم اللغات، تجمع محفظة ألعابنا المتنوعة بين المتعة والتعليم، مما يساعد اللاعبين على توسيع معرفتهم أثناء الاستمتاع بترفيه عالي الجودة.'
              )}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('Passion', 'الشغف')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('We love what we do', 'نحب ما نفعله')}
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t('Quality', 'الجودة')}
                </h4>
                <p className="text-sm text-gray-600">
                  {t('Excellence in every game', 'التميز في كل لعبة')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('games')}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300"
              >
                {t('Explore Our Games', 'استكشف ألعابنا')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-yellow-600 text-yellow-700 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-300"
              >
                {t('Get in Touch', 'تواصل معنا')}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <img 
                  src="/egyphs-logo-new-trans.png" 
                  alt="Egyphs Entertainment" 
                  className="h-20 w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('Our Mission', 'مهمتنا')}
                </h3>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                {t(
                  'To create innovative mobile games that entertain, educate, and celebrate the rich heritage of Arabic culture while fostering learning and connection among players worldwide.',
                  'إنشاء ألعاب هاتف محمول مبتكرة تسلي وتعلم وتحتفي بالتراث الغني للثقافة العربية بينما تعزز التعلم والتواصل بين اللاعبين في جميع أنحاء العالم.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Privacy Policy Section
  const PrivacyPolicySection = () => {
    const game = selectedPrivacyPolicy ? games.find(g => g.id === selectedPrivacyPolicy) : null;

    return (
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {selectedPrivacyPolicy ? (
            <>
              <button
                onClick={() => scrollToSection('privacy')}
                className="mb-8 flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                <ChevronDown className="w-5 h-5 rotate-90" />
                <span>{t('Back to Privacy Policies', 'العودة لسياسات الخصوصية')}</span>
              </button>

              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-12 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">
                      {t('Privacy Policy', 'سياسة الخصوصية')}
                    </h2>
                  </div>
                  <p className="text-blue-100 text-lg">
                    {t(`Privacy Policy for: ${game?.titleEn}`, `سياسة الخصوصية لـ: ${game?.titleAr}`)}
                  </p>
                  <div className="mt-4 bg-blue-800/30 rounded-lg p-4">
                    <p className="text-blue-100 text-sm">
                      {t('Last Updated: January 2025', 'آخر تحديث: يناير 2025')}
                    </p>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Privacy Policy Content */}
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Introduction', 'مقدمة')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t(
                        `This Privacy Policy describes how Egyphs Entertainment collects, uses, and shares information about you when you use ${game?.titleEn}. By using our app, you agree to the collection and use of information in accordance with this policy.`,
                        `تصف سياسة الخصوصية هذه كيف تجمع إيجيفس إنترتينمنت وتستخدم وتشارك المعلومات عنك عند استخدام ${game?.titleAr}. باستخدام تطبيقنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة.`
                      )}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Information We Collect', 'المعلومات التي نجمعها')}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t('Information You Provide', 'المعلومات التي تقدمها')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>{t('Game progress and scores', 'تقدم اللعبة والنقاط')}</li>
                          <li>{t('User preferences and settings', 'تفضيلات المستخدم والإعدادات')}</li>
                          <li>{t('Communications with us', 'التواصل معنا')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t('Automatically Collected Information', 'المعلومات المجمعة تلقائياً')}
                        </h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>{t('Device information and identifiers', 'معلومات الجهاز والمعرفات')}</li>
                          <li>{t('Usage data and analytics', 'بيانات الاستخدام والتحليلات')}</li>
                          <li>{t('App performance metrics', 'مقاييس أداء التطبيق')}</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('How We Use Your Information', 'كيف نستخدم معلوماتك')}
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>{t('Provide and maintain our game services', 'توفير وصيانة خدمات اللعبة')}</li>
                      <li>{t('Save your game progress and preferences', 'حفظ تقدم اللعبة وتفضيلاتك')}</li>
                      <li>{t('Improve game performance and user experience', 'تحسين أداء اللعبة وتجربة المستخدم')}</li>
                      <li>{t('Provide customer support', 'تقديم دعم العملاء')}</li>
                      <li>{t('Analyze usage patterns to improve our services', 'تحليل أنماط الاستخدام لتحسين خدماتنا')}</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Third-Party Services', 'خدمات الطرف الثالث')}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t(
                        'Our app may use third-party services that may collect information about you:',
                        'قد يستخدم تطبيقنا خدمات طرف ثالث قد تجمع معلومات عنك:'
                      )}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Google Play Services</li>
                      <li>Google Analytics for Firebase</li>
                      <li>AdMob (Google Mobile Ads)</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Data Security', 'أمان البيانات')}
                    </h3>
                    <p className="text-gray-700">
                      {t(
                        'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
                        'نطبق تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100%.'
                      )}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Children\'s Privacy', 'خصوصية الأطفال')}
                    </h3>
                    <p className="text-gray-700">
                      {t(
                        'Our games are designed to be family-friendly. We do not knowingly collect personal information from children under 13 without parental consent. If you believe your child has provided us with personal information, please contact us.',
                        'ألعابنا مصممة لتكون مناسبة للعائلة. نحن لا نجمع عن علم معلومات شخصية من الأطفال دون سن 13 بدون موافقة الوالدين. إذا كنت تعتقد أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا.'
                      )}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {t('Contact Us', 'اتصل بنا')}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {t(
                        'If you have any questions about this Privacy Policy, please contact us:',
                        'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:'
                      )}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        <strong>{t('Email:', 'البريد الإلكتروني:')}</strong> uodeeb@gmail.com<br />
                        <strong>{t('Phone:', 'الهاتف:')}</strong> +20 10 18069092
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t('Privacy Policies', 'سياسات الخصوصية')}
                </h2>
                <p className="text-xl text-gray-600">
                  {t(
                    'Select a game to view its privacy policy',
                    'اختر لعبة لعرض سياسة الخصوصية الخاصة بها'
                  )}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {games.map((game) => (
                  <div
                    key={game.id}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                    onClick={() => showPrivacyPolicy(game.id)}
                  >
                    <div className="flex items-center space-x-4 mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
                      <div className="text-3xl">{game.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {t(game.titleEn, game.titleAr)}
                        </h3>
                        <p className="text-sm text-gray-600">{game.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mb-4">
                      {t('View privacy policy for this game', 'عرض سياسة الخصوصية لهذه اللعبة')}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {t('Last updated: January 2025', 'آخر تحديث: يناير 2025')}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    );
  };

  // Contact Section
  const ContactSection = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('Contact Us', 'اتصل بنا')}
          </h2>
          <p className="text-xl text-gray-600">
            {t(
              'Have questions about our games or need support? We\'d love to hear from you.',
              'لديك أسئلة حول ألعابنا أو تحتاج دعم؟ نحب أن نسمع منك.'
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t('Get in Touch', 'تواصل معنا')}
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t('Email', 'البريد الإلكتروني')}
                  </h4>
                  <p className="text-gray-600">uodeeb@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t('Phone', 'الهاتف')}
                  </h4>
                  <p className="text-gray-600">+20 10 18069092</p>
                </div>
              </div>

              <div className="flex items-center space-x-4" dir={isRTL ? 'rtl' : 'ltr'}>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {t('Social Media', 'وسائل التواصل الاجتماعي')}
                  </h4>
                  <p className="text-gray-600">@EgyphsGames</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">
                {t('Response Time', 'وقت الاستجابة')}
              </h4>
              <p className="text-gray-700 text-sm">
                {t(
                  'We typically respond to all inquiries within 24-48 hours during business days.',
                  'نحن عادة نرد على جميع الاستفسارات خلال 24-48 ساعة خلال أيام العمل.'
                )}
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleContactSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('Send us a Message', 'أرسل لنا رسالة')}
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Name', 'الاسم')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder={t('Your name', 'اسمك')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Email', 'البريد الإلكتروني')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder={t('your@email.com', 'your@email.com')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Subject', 'الموضوع')}
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="General">{t('General Inquiry', 'استفسار عام')}</option>
                    <option value="Support">{t('Technical Support', 'الدعم الفني')}</option>
                    <option value="Privacy">{t('Privacy Question', 'سؤال الخصوصية')}</option>
                    <option value="Partnership">{t('Partnership', 'شراكة')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('Message', 'الرسالة')} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder={t('Your message...', 'رسالتك...')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300"
                >
                  {t('Send Message', 'إرسال الرسالة')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4" dir={isRTL ? 'rtl' : 'ltr'}>
              <img 
                src="/egyphs-logo-new-trans.png" 
                alt="Egyphs Entertainment" 
                className="h-12 w-auto object-contain opacity-80"
              />
              <div>
                <h3 className="text-xl font-bold">Egyphs Entertainment</h3>
                <p className="text-gray-400">{t('Gaming Studio', 'استوديو الألعاب')}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t(
                'Creating engaging mobile games that celebrate Arabic culture and provide quality entertainment for players worldwide.',
                'إنشاء ألعاب هاتف محمول جذابة تحتفي بالثقافة العربية وتوفر ترفيه عالي الجودة للاعبين في جميع أنحاء العالم.'
              )}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(item.label, item.labelAr)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Our Games', 'ألعابنا')}</h4>
            <ul className="space-y-2">
              {games.slice(0, 4).map((game) => (
                <li key={game.id}>
                  <button
                    onClick={() => showGameDetails(game)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {t(game.titleEn, game.titleAr)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Egyphs Entertainment. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('privacy')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('Privacy Policy', 'سياسة الخصوصية')}
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t('Contact', 'اتصل بنا')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {currentSection === 'home' && (
        <>
          <HeroSection />
          <GamesSection />
          <AboutSection />
        </>
      )}
      
      {currentSection === 'games' && <GamesSection />}
      {currentSection === 'game-details' && <GameDetailsSection />}
      {currentSection === 'about' && <AboutSection />}
      {currentSection === 'privacy' && <PrivacyPolicySection />}
      {currentSection === 'privacy-policy' && <PrivacyPolicySection />}
      {currentSection === 'contact' && <ContactSection />}
      
      <Footer />
    </div>
  );
}

export default App;