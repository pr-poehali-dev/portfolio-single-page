import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <Icon name="Brain" size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">TIPS_AI</h1>
            <p className="text-xl text-gray-600 mb-8">
              Обучающий канал об искусственном интеллекте для начинающих и
              профессионалов
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="Users" size={16} className="mr-2" />
                15,000+ подписчиков
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                500+ постов
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Ежедневно растем
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Перейти к каналу
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Download" size={16} className="mr-2" />
                Скачать материалы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Channel Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              О канале Tips_AI
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Target"
                      size={20}
                      className="mr-2 text-blue-600"
                    />
                    Наша миссия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Делаем искусственный интеллект понятным и доступным для
                    каждого. Объясняем сложные концепции простым языком и
                    показываем практическое применение.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="BookOpen"
                      size={20}
                      className="mr-2 text-blue-600"
                    />
                    Что публикуем
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Обзоры новых AI-инструментов</li>
                    <li>• Пошаговые туториалы</li>
                    <li>• Анализ трендов в ИИ</li>
                    <li>• Практические кейсы применения</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Статистика канала
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    15K+
                  </div>
                  <p className="text-gray-600">Активных подписчиков</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">Обучающих постов</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    98%
                  </div>
                  <p className="text-gray-600">Положительные отзывы</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Полезные материалы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon
                    name="FileText"
                    size={24}
                    className="text-blue-600 mb-2"
                  />
                  <CardTitle>Гайды для новичков</CardTitle>
                  <CardDescription>
                    Пошаговые инструкции по началу работы с ИИ-инструментами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Скачать гайды
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Video" size={24} className="text-blue-600 mb-2" />
                  <CardTitle>Видео-туториалы</CardTitle>
                  <CardDescription>
                    Подробные видеоуроки по использованию популярных AI-сервисов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Смотреть видео
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon name="Link" size={24} className="text-blue-600 mb-2" />
                  <CardTitle>Полезные ссылки</CardTitle>
                  <CardDescription>
                    Собрали лучшие ресурсы для изучения искусственного
                    интеллекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Перейти к ссылкам
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-blue-600 mb-2"
                  />
                  <CardTitle>Сообщество</CardTitle>
                  <CardDescription>
                    Присоединяйтесь к обсуждениям и задавайте вопросы экспертам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Войти в чат
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Свяжитесь с Игорем</h2>
            <p className="text-xl text-slate-300 mb-8">
              Создатель канала Tips_AI. Эксперт по искусственному интеллекту и
              обучению.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Email
              </Button>
              <Button
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800"
              >
                <Icon name="Linkedin" size={16} className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Tips_AI. Все права защищены.</p>
          <p className="mt-2">Создано для изучающих искусственный интеллект</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
