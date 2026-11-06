// FAQ page styles, rendered in a <style> tag so they unload with the page.
export default `
.fq-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding-block:48px 32px;border-bottom:1px solid #1E1714}
.fq-copy{display:flex;flex-direction:column;gap:16px;max-width:640px}
.fq-stk{width:96px;flex:none;filter:drop-shadow(0 10px 16px rgba(30,23,20,.2));animation:bob 6s ease-in-out infinite}
@keyframes bob{50%{transform:translateY(-8px) rotate(-3deg)}}

.fq-body{display:grid;gap:24px;padding-block:24px 72px}
.fq-nav{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;position:sticky;top:108px;z-index:5;background:#FFFFFF;padding-block:8px}
.fq-nav a{flex:none;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 14px;border-radius:999px;border:1px solid #DDD5CF;font-size:14px;color:#1E1714;text-decoration:none;transition:border-color .2s,background-color .2s,color .2s}
.fq-nav a span{font-family:'Chivo',sans-serif;font-size:12px;color:#6E625C}
.fq-nav a:hover{border-color:#1E1714}

.fq-groups{display:flex;flex-direction:column;gap:48px;min-width:0}
.fq-group{display:grid;gap:12px;scroll-margin-top:180px}
.fq-group details{border-top:1px solid #ECE7E3}
.fq-group details:last-child{border-bottom:1px solid #ECE7E3}
.fq-group summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:56px;padding-block:12px;font-size:16px}
.fq-group summary::-webkit-details-marker{display:none}
.fq-group summary::after{content:"";flex:none;width:28px;height:28px;border-radius:50%;background:#F6F3F0 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M6 1v10M1 6h10' stroke='%231E1714' stroke-width='1.5'/%3E%3C/svg%3E") center/10px no-repeat;transition:rotate .3s,background-color .2s}
.fq-group summary:hover::after{background-color:#FEC604}
.fq-group details[open] summary::after{rotate:45deg;background-color:#FEC604}
.fq-group details p{margin:0;padding:0 44px 20px 0;color:#6E625C;max-width:640px}
.fq-group details a{color:#1E1714;text-underline-offset:3px}
.fq-group details::details-content{block-size:0;overflow:clip;transition:block-size .3s ease,content-visibility .3s allow-discrete}
.fq-group details[open]::details-content{block-size:auto}
.fq-group{interpolate-size:allow-keywords}

.fq-ask{display:flex;flex-direction:column;align-items:flex-start;gap:20px;background:#FEC604;border-radius:24px;padding:32px;margin-bottom:96px}
.fq-ask img{width:64px;height:64px;border-radius:50%;object-fit:cover;box-shadow:0 0 0 4px #FFFFFF}
.fq-ask > div{display:flex;flex-direction:column;gap:8px}
.fq-ask .lede{color:#3B2A22}

@media (min-width:768px){
  .fq-stk{width:140px}
  .fq-ask{flex-direction:row;align-items:center}
  .fq-ask > div{flex:1}
}
@media (min-width:1024px){
  .fq-head{padding-block:72px 40px}
  .fq-body{gap:40px;padding-block:24px 96px}
  .fq-nav{top:64px}
  .fq-group{grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:64px;scroll-margin-top:140px}
  .fq-group h2{padding-top:14px}
}
@media (prefers-reduced-motion:reduce){.fq-stk{animation:none}.fq-group details::details-content{transition:none}}
`;
