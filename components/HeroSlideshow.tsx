'use client';

import { useEffect, useRef } from 'react';

const SLIDES = [
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751273/WEB_BANNER_CPIV_8_iwphmm.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751272/WEB_BANNER_CPIV_9_o8vgft.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751272/WEB_BANNER_CPIV_3_pef0zm.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751273/WEB_BANNER_CPIV_7_gpjhbh.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751272/WEB_BANNER_CPIV_1_e5p3gy.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751272/WEB_BANNER_CPIV_6_fae9ll.jpg',
  'https://res.cloudinary.com/dadfpmrat/image/upload/v1784751272/WEB_BANNER_CPIV_5_wjwdzj.jpg',
];

export default function HeroSlideshow() {
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    const slides = slidesRef.current;
    const dots = dotsRef.current;

    function goTo(n: number) {
      slides[currentRef.current]?.classList.remove('cp-hero__slide--active');
      dots[currentRef.current]?.classList.remove('cp-hero__dot--active');
      dots[currentRef.current]?.setAttribute('aria-selected', 'false');
      currentRef.current = (n + slides.length) % slides.length;
      slides[currentRef.current]?.classList.add('cp-hero__slide--active');
      dots[currentRef.current]?.classList.add('cp-hero__dot--active');
      dots[currentRef.current]?.setAttribute('aria-selected', 'true');
    }

    function startTimer() {
      timerRef.current = setInterval(() => goTo(currentRef.current + 1), 5000);
    }
    function resetTimer() {
      if (timerRef.current) clearInterval(timerRef.current);
      startTimer();
    }

    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); resetTimer(); }));
    startTimer();

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <>
      <div className="cp-hero__slides" aria-hidden="true">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`cp-hero__slide${i === 0 ? ' cp-hero__slide--active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
            ref={el => { if (el) slidesRef.current[i] = el; }}
          />
        ))}
      </div>
      <div className="cp-hero__slide-overlay" aria-hidden="true" />
      <div className="cp-hero__dots" role="tablist" aria-label="Slideshow navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`cp-hero__dot${i === 0 ? ' cp-hero__dot--active' : ''}`}
            data-slide={i}
            role="tab"
            aria-label={`Slide ${i + 1}`}
            aria-selected={i === 0 ? 'true' : 'false'}
            ref={el => { if (el) dotsRef.current[i] = el; }}
          />
        ))}
      </div>
    </>
  );
}
