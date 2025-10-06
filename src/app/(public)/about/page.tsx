import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Mail, MapPin, Calendar, Code, Sparkles, Rocket, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { contacts, interests } from '@/constants/about';

export default function AboutPage() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='from-background via-background to-muted/20 pointer-events-none absolute inset-0 bg-gradient-to-br' />
      <div className='from-primary/5 pointer-events-none absolute inset-0 bg-gradient-to-tr via-transparent to-purple-500/5' />

      <div className='bg-primary/10 pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px]' />
      <div className='pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]' />

      <div className='pointer-events-none absolute top-1/3 left-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-blue-500/5 blur-[100px]' />
      <div className='pointer-events-none absolute right-1/4 bottom-1/3 h-[300px] w-[300px] animate-pulse rounded-full bg-pink-500/5 blur-[100px] delay-1000' />

      <div className='relative z-10'>
        <main className='container mx-auto px-4 py-8'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-12 flex flex-col items-center text-center'>
              <div className='from-primary/20 mb-6 inline-block rounded-full bg-gradient-to-r to-purple-500/20 p-1 shadow-lg'>
                <div className='bg-background flex items-center gap-2 rounded-full px-6 py-2'>
                  <Sparkles className='text-primary h-4 w-4' />
                  <span className='text-primary font-mono text-sm font-medium'>About Me</span>
                </div>
              </div>

              <div className='group relative mb-6'>
                <div className='from-primary to-primary absolute inset-0 animate-pulse rounded-full bg-gradient-to-br via-purple-500 opacity-75 blur-xl transition-opacity group-hover:opacity-100' />
                <div className='ring-primary/20 relative h-32 w-32 overflow-hidden rounded-full shadow-2xl ring-4 transition-transform duration-300 group-hover:scale-105'>
                  <Image src='/profile-card.jpg' alt='Profile' fill className='object-cover' sizes='128px' priority />
                </div>
              </div>

              <h1 className='from-foreground to-foreground/80 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent'>
                안녕하세요! 👋
              </h1>
              <p className='text-muted-foreground text-xl leading-relaxed text-pretty'>
                개발자로서의 성장 과정과 배움을 기록하는 공간입니다
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 md:gap-8'>
              <Card className='from-card to-card/50 group border-0 bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110'>
                      <Code className='text-primary h-5 w-5' />
                    </div>
                    <h2 className='text-2xl font-semibold'>Rak517 🧑🏻‍💻</h2>
                  </div>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    코드와 함께하는 일상, 새로운 기술에 대한 탐구, 그리고 개발하면서 겪는 다양한 경험들을 공유하고
                    있습니다. 함께 성장하는 개발자가 되고 싶습니다.
                  </p>

                  <div className='space-y-2'>
                    <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                      <div className='bg-primary/10 flex h-7 w-7 items-center justify-center rounded-lg'>
                        <MapPin className='h-3.5 w-3.5' />
                      </div>
                      <span className='font-mono'>Seoul, Korea</span>
                    </div>
                    <div className='text-muted-foreground flex items-center gap-2 text-sm'>
                      <div className='bg-primary/10 flex h-7 w-7 items-center justify-center rounded-lg'>
                        <Calendar className='h-3.5 w-3.5' />
                      </div>
                      <span className='font-mono'>2024년부터 개발</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='from-card to-card/50 group border-0 bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110'>
                      <Rocket className='text-primary h-5 w-5' />
                    </div>
                    <h2 className='text-2xl font-semibold'>관심 분야</h2>
                  </div>

                  <div className='space-y-3'>
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className='group/item flex items-start gap-3 transition-all duration-200 hover:translate-x-1'
                      >
                        <div className='from-primary to-secondary mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r shadow-sm' />
                        <span className='text-muted-foreground group-hover/item:text-foreground text-sm transition-colors'>
                          {interest}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className='from-card to-card/50 group border-0 bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110'>
                      <Mail className='text-primary h-5 w-5' />
                    </div>
                    <h2 className='text-2xl font-semibold'>연락처</h2>
                  </div>

                  <div className='space-y-3'>
                    {contacts.map((contact) => (
                      <Link
                        key={contact.label}
                        href={contact.href}
                        target={contact.target}
                        className='text-muted-foreground hover:text-primary group/link hover:bg-muted/50 flex items-center gap-3 rounded-lg p-2 transition-all'
                      >
                        <div className='bg-primary/10 group-hover/link:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all group-hover/link:scale-110'>
                          <contact.icon className='text-primary h-5 w-5' />
                        </div>
                        <div className='flex flex-col'>
                          <span className='text-xs opacity-60'>{contact.label}</span>
                          <span className='text-sm font-medium'>{contact.value}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className='from-card to-card/50 group border-0 bg-gradient-to-br shadow-lg transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex items-center gap-3'>
                    <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110'>
                      <Heart className='text-primary h-5 w-5' />
                    </div>
                    <h2 className='text-2xl font-semibold'>블로그에 대해</h2>
                  </div>

                  <p className='text-muted-foreground mb-6 leading-relaxed'>
                    이 블로그는 개발 과정에서 배운 것들을 정리하고, 다른 개발자들과 지식을 공유하기 위해 만들어졌습니다.
                    주로 프론트엔드 개발, 웹 기술, 그리고 개발자로서의 성장에 관한 글들을 작성하고 있습니다.
                  </p>

                  <div className='bg-muted/30 border-border/40 flex items-center justify-between rounded-lg border px-4 py-3'>
                    <div className='flex items-center gap-2'>
                      <Sparkles className='text-primary h-4 w-4' />
                      <span className='text-muted-foreground font-mono text-xs'>Built with passion</span>
                    </div>
                    <Badge variant='secondary' className='font-mono text-xs'>
                      v1.0.0
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
