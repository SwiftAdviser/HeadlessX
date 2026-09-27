'use client';

import { Cancel01Icon, LinkSquare01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useState } from 'react';

const DISMISS_KEY = 'headlessx-proxylane-callout-dismissed';
const OFFER_URL =
  'https://proxylane.dev/pricing?utm_source=headlessx&utm_medium=sponsorship&utm_campaign=premium-pilot&utm_content=app-proxy';
const GUIDE_URL =
  'https://github.com/SwiftAdviser/HeadlessX/blob/codex/proxylane-premium-preview/docs/proxylane.md';

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
          <h3 className="mt-1 text-base font-semibold text-slate-900">Need a residential proxy?</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Choose a location for new browser sessions. Confirm availability before buying; unused
            traffic does not expire.
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            <strong>HEADLESSX35</strong>: 35% off the first non-trial purchase. Once per account; no
            trial required.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <a
              href={OFFER_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-900 underline underline-offset-4"
            >
              View packages <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
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
