'use client';

import { Cancel01Icon, LinkSquare01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';

const DISMISS_KEY = 'headlessx-proxylane-callout-dismissed';
const OFFER_URL =
  'https://proxylane.dev/pricing?utm_source=headlessx&utm_medium=sponsorship&utm_campaign=premium-pilot&utm_content=app-proxy';
const GUIDE_URL =
  'https://github.com/SwiftAdviser/HeadlessX/blob/codex/proxylane-multicorpus-offer/docs/proxylane.md';

export function ProxyLaneProxyCallout() {
  const [dismissed, setDismissed] = useState(true);
  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }
  }, []);
  if (dismissed) return null;
  function dismiss() {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* Dismiss still works for this visit. */
    }
  }
  return (
    <aside
      aria-label="ProxyLane sponsored option"
      className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss ProxyLane recommendation"
        className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <HugeiconsIcon icon={Cancel01Icon} size={16} />
      </button>
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:pr-8">
        <img
          src="/proxylane-square-icon.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-lg object-contain"
        />
        <div className="min-w-0">
          <div className="pr-6 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            Sponsored · ProxyLane
          </div>
          <h3 className="mt-1 text-base font-semibold text-slate-900">
            28M+ Premium Residential HTTP Proxies
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Optimized for HeadlessX web scraping and automation workflows
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>Marketplaces: recurring price and stock monitoring</li>
            <li>Gated Websites: social media, property and vehicle listings</li>
            <li>AI Workflows: market research, leads enrichment, etc</li>
          </ul>
          <p className="mt-2 text-sm text-slate-600">ProxyLane already has what you need to succeed:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            <li>IP rotations for large scraping jobs</li>
            <li>Sticky IP sessions for authorized browsing jobs</li>
            <li>195 countries, ZIP targeting</li>
            <li>Ultra-low IP fraud score, ~0.35s response time</li>
            <li>No KYC required, Traffic never expires</li>
          </ul>
          <p className="mt-2 text-sm text-slate-600">
            Get 350MB trial for $1.95, use <strong>HEADLESS30</strong> 30% off on your first purchase
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <a
              href={OFFER_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-900 underline underline-offset-4"
            >
              Try Proxylane now <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
            </a>
            <a
              href={GUIDE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 underline underline-offset-4"
            >
              Connect &amp; verify exit IP
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
