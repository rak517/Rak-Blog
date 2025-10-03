export default function HeroSection() {
  return (
    <section className='mb-12 py-16 lg:py-24'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='group relative rounded-xl p-[2px]'>
          <div className='from-primary to-primary absolute inset-0 rounded-xl bg-gradient-to-r via-purple-500 opacity-75 blur-sm transition-opacity group-hover:opacity-100' />

          <div className='bg-background relative overflow-hidden rounded-xl shadow-2xl'>
            <div className='border-border/60 bg-background/95 flex items-center border-b backdrop-blur'>
              <div className='bg-primary/10 border-primary/50 flex items-center space-x-2 border-b-2 px-4 py-2'>
                <span className='text-primary text-xs'>●</span>
                <span className='text-foreground font-mono text-xs'>welcome.tsx</span>
              </div>
              <div className='flex items-center space-x-2 px-4 py-2 opacity-50'>
                <span className='text-muted-foreground font-mono text-xs'>about.tsx</span>
              </div>
              <div className='flex items-center space-x-2 px-4 py-2 opacity-50'>
                <span className='text-muted-foreground font-mono text-xs'>posts.tsx</span>
              </div>
            </div>

            <div className='grid lg:grid-cols-12'>
              <div className='border-border/60 bg-background/50 text-muted-foreground hidden border-r p-4 text-right font-mono text-xs lg:col-span-1 lg:block'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div key={num} className='leading-7'>
                    {num}
                  </div>
                ))}
              </div>

              <div className='space-y-4 p-6 font-mono text-sm lg:col-span-11 lg:p-8'>
                <div>
                  <span className='text-purple-500'>import</span> <span className='text-foreground'>{'{ '}</span>
                  <span className='text-blue-400'>Developer</span>
                  <span className='text-foreground'>{' }'}</span> <span className='text-purple-500'>from</span>{' '}
                  <span className='text-green-500'>
                    {'"'}@/rakblog{'"'}
                  </span>
                </div>

                <div className='py-4'>
                  <div>
                    <span className='text-purple-500'>export default function</span>{' '}
                    <span className='text-yellow-500'>Welcome</span>
                    <span className='text-foreground'>() {'{'}</span>
                  </div>
                  <div className='space-y-2 pt-2 pl-4'>
                    <div>
                      <span className='text-purple-500'>return</span> <span className='text-foreground'>(</span>
                    </div>
                    <div className='space-y-3 pl-4 transition-transform duration-300 group-hover:translate-x-2'>
                      <h1 className='text-foreground text-2xl font-bold lg:text-4xl'>FE Dev Diary</h1>
                      <p className='text-muted-foreground max-w-2xl text-base leading-relaxed lg:text-lg'>
                        코딩은 전투, 디버깅은 수련,
                        <br />
                        그리고 이 블로그는 성장 로그 🥷
                      </p>
                    </div>
                    <div>
                      <span className='text-foreground'>)</span>
                    </div>
                  </div>
                  <div>
                    <span className='text-foreground'>{'}'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-primary/5 border-border/60 text-muted-foreground flex items-center justify-between border-t px-4 py-2 font-mono text-xs'>
              <div className='flex items-center space-x-4'>
                <span className='flex items-center space-x-1'>
                  <span className='text-green-500'>●</span>
                  <span>TypeScript</span>
                </span>
                <span>UTF-8</span>
                <span>LF</span>
              </div>
              <div className='flex items-center space-x-4'>
                <span>Ln 8, Col 10</span>
                <span>Spaces: 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
