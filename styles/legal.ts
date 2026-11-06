// Legal pages (privacy), rendered in a <style> tag so they unload with the page.
export default `
.lg-head{display:flex;flex-direction:column;gap:16px;padding-block:48px 32px;max-width:720px}

.lg-short{background:#FEC604;border-radius:24px;padding:24px;display:grid;gap:16px;margin-bottom:48px}
.lg-short ul{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.lg-short li{display:flex;gap:12px;align-items:flex-start;font-size:16px;color:#1E1714}
.lg-short li::before{content:"";flex:none;width:20px;height:20px;margin-top:2px;border-radius:50%;background:#1E1714 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 6.2l2.3 2.3 4.7-5' fill='none' stroke='%23FEC604' stroke-width='1.6'/%3E%3C/svg%3E") center/12px no-repeat}

.lg-body{display:grid;gap:32px;padding-bottom:72px}
.lg-toc{display:none}
.lg-text{display:flex;flex-direction:column;gap:40px;max-width:680px;min-width:0}
.lg-text section{display:flex;flex-direction:column;gap:12px;scroll-margin-top:96px}
.lg-text h2{display:flex;align-items:baseline;gap:12px}
.lg-text .n{font-family:'Chivo',sans-serif;font-size:14px;color:#905484}
.lg-text p,.lg-text li{margin:0;font-size:16px;line-height:1.6;color:#3B2A22}
.lg-text ul{margin:0;padding-left:20px;display:grid;gap:8px}
.lg-text li::marker{color:#F08448}
.lg-text b{font-weight:500;color:#1E1714}
.lg-text a,.lg-ask a{color:#1E1714;text-underline-offset:3px}
.lg-text a:hover{color:#A9471A}

.lg-ask{display:flex;flex-direction:column;align-items:flex-start;gap:20px;border-top:1px solid #1E1714;padding-block:40px 96px}
.lg-ask > div{display:flex;flex-direction:column;gap:8px}

@media (min-width:768px){
  .lg-short{padding:32px;grid-template-columns:200px minmax(0,1fr);gap:32px;align-items:start}
  .lg-short ul{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 32px}
  .lg-ask{flex-direction:row;justify-content:space-between;align-items:flex-end}
}
@media (min-width:1024px){
  .lg-head{padding-block:72px 40px}
  .lg-body{grid-template-columns:240px minmax(0,1fr);gap:80px;align-items:start}
  .lg-toc{display:flex;flex-direction:column;gap:12px;position:sticky;top:96px}
  .lg-toc ol{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}
  .lg-toc a{display:block;padding:6px 0;font-size:14px;color:#6E625C;text-decoration:none;border-left:2px solid #ECE7E3;padding-left:14px;transition:color .2s,border-color .2s}
  .lg-toc a:hover{color:#1E1714;border-left-color:#F08448}
}
`;
