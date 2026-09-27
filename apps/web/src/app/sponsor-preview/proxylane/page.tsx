import fs from 'node:fs/promises';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export const metadata = {
  title: 'ProxyLane integration preview | HeadlessX',
  robots: { index: false, follow: false },
};
export default async function SponsorPreview() {
  const markdown = await fs.readFile(
    path.resolve(process.cwd(), '../../docs/proxylane.md'),
    'utf8',
  );
  return (
    <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-10">
      <div className="mb-6 rounded-lg bg-slate-100 p-3 text-sm text-slate-600">
        Fork preview · Proposed documentation content · Not the live HeadlessX docs site
      </div>
      <img
        src="/proxylane-banner.png"
        alt="ProxyLane residential proxies for HeadlessX, paid trial with HEADLESSX25"
        width={1140}
        height={420}
        className="mb-8 h-auto w-full rounded-xl"
      />
      <article className="prose prose-slate max-w-none prose-pre:overflow-x-auto prose-pre:max-w-full prose-table:text-sm break-words min-w-0">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children }) => (
              <div className="max-w-full overflow-x-auto">
                <table>{children}</table>
              </div>
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </div>
  );
}
