"use client";
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 relative z-10 text-white">
      <div className="space-y-6">
        <input name="name" type="text" required className="w-full bg-white/5 border-b border-white/20 py-4 px-2 focus:border-[#921D44] outline-none transition-colors font-bold text-white placeholder-white/30" placeholder="Full Name" />
        <input name="email" type="email" required className="w-full bg-white/5 border-b border-white/20 py-4 px-2 focus:border-[#921D44] outline-none transition-colors font-bold text-white placeholder-white/30" placeholder="Work Email" />
        <textarea name="message" rows={4} required className="w-full bg-white/5 border-b border-white/20 py-4 px-2 focus:border-[#921D44] outline-none transition-colors font-bold text-white placeholder-white/30 resize-none" placeholder="Growth Challenges & Vision"></textarea>
      </div>
      <button 
        disabled={status === 'loading'}
        className="w-full py-5 bg-[#921D44] text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-[#0F172A] transition-all rounded shadow-2xl"
      >
        {status === 'loading' ? 'Transmitting...' : 'Initiate Partnership'}
      </button>
      {status === 'success' && <p className="text-[#921D44] text-center font-black uppercase text-[9px] tracking-widest mt-4">Success! Inquiry Sent to Kalyanmay Bhattacharya.</p>}
    </form>
  );
}