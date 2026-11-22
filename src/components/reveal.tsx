'use client';
import { useEffect } from 'react';

export function Reveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    const reveals = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    reveals.forEach(el => { el.classList.add('reveal-ready'); observer.observe(el); });
    const photos = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
    let frame = 0;
    const update = () => {
      frame = 0;
      photos.forEach(el => { const bounds = el.getBoundingClientRect(); if (bounds.bottom > 0 && bounds.top < window.innerHeight) el.style.setProperty('--parallax-y', `${Math.max(-16, Math.min(16, (window.innerHeight / 2 - bounds.top - bounds.height / 2) * .035))}px`); });
    };
    const onScroll = () => { if (!frame && !preference.matches) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); photos.forEach(el => el.style.removeProperty('--parallax-y')); };
  }, []);
  return null;
}
