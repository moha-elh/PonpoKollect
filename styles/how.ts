// How to order page styles, rendered in a <style> tag so they unload with the page.
export default `
.hw-hero{background:#FEC604;overflow:hidden}
.hw-hero-in{display:grid;gap:40px;padding-block:48px 64px;align-items:center}
.hw-copy{display:flex;flex-direction:column;gap:20px}
.hw-copy .lede{color:#3B2A22}

.chat{margin:0;background:#FFFFFF;border-radius:24px;padding:20px;display:flex;flex-direction:column;gap:10px;box-shadow:0 24px 48px rgba(30,23,20,.14);max-width:440px;width:100%;justify-self:center;rotate:1.5deg}
.chat-top{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:4px;border-bottom:1px solid #ECE7E3}
.chat-top img{width:40px;height:40px;border-radius:50%;object-fit:cover;background:#FEC604}
.chat-top > span{display:flex;flex-direction:column;font-size:14px}
.chat-top b{font-weight:500}
.msg{margin:0;font-size:14px;line-height:1.45;padding:10px 14px;max-width:85%;overflow-wrap:anywhere}
.msg.me{align-self:flex-end;background:#F08448;color:#1E1714;border-radius:18px 18px 4px 18px}
.msg.her{align-self:flex-start;background:#F6F3F0;border-radius:18px 18px 18px 4px}
.chat .msg{animation:pop .5s cubic-bezier(.2,.9,.25,1.1) both}
.chat .msg:nth-of-type(1){animation-delay:.5s}
.chat .msg:nth-of-type(2){animation-delay:1.1s}
.chat .msg:nth-of-type(3){animation-delay:1.7s}
.chat .msg:nth-of-type(4){animation-delay:2.3s}
@keyframes pop{from{opacity:0;transform:translateY(8px) scale(.96)}}

.hw-steps{display:flex;flex-direction:column;gap:32px;padding-block:72px}
.tl{list-style:none;margin:0;padding:0;display:grid;gap:40px}
.tl li{display:grid;grid-template-columns:72px minmax(0,1fr);column-gap:20px;row-gap:6px;align-items:start;min-width:0}
.tl .burst{grid-row:span 3}
.tl .num{font-family:'Chivo',sans-serif;font-size:14px;color:#905484}

.builder{background:#21191A;color:#F3EEE9;scroll-margin-top:96px}
.builder-in{display:grid;gap:40px;padding-block:72px}
.b-form{display:flex;flex-direction:column;gap:20px}
.b-form .lede{color:#BEB2AB}
.field{display:flex;flex-direction:column;gap:8px}
.field label,.field .lbl{font-size:14px;color:#BEB2AB}
.builder .select{appearance:none;width:100%;min-height:48px;border-radius:999px;border:1px solid #4A3D38;padding:0 44px 0 20px;font:inherit;font-size:16px;color:#F3EEE9;cursor:pointer;background:#2B2224 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%23F3EEE9' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat right 20px center/10px;transition:border-color .2s}
.builder .select:hover,.builder .select:focus-visible{border-color:#F3EEE9}
.builder .select option{background:#2B2224;color:#F3EEE9}
.qty{display:inline-flex;align-items:center;align-self:flex-start;border:1px solid #4A3D38;border-radius:999px;min-height:48px}
.qty button{width:48px;height:48px;border:0;background:none;color:#F3EEE9;font-size:20px;cursor:pointer;border-radius:999px}
.qty button:hover:not(:disabled){background:#2B2224}
.qty button:disabled{opacity:.35;cursor:default}
.qty output{min-width:32px;text-align:center;font-family:'Chivo',sans-serif;font-size:16px}
.b-out{background:#2B2224;border-radius:24px;padding:24px;display:flex;flex-direction:column;gap:16px;min-width:0}
.b-prod{display:flex;align-items:center;gap:14px;min-width:0}
.b-prod img{width:56px;height:56px;object-fit:contain;flex:none;background:#F3EEE9;border-radius:12px;padding:4px}
.b-prod > span{display:flex;flex-direction:column;gap:2px;min-width:0}
.b-prod .price{color:#FEC604}
.msg.big{font-size:16px;max-width:100%}
.b-note{color:#BEB2AB}
.btn-yel{background:#FEC604;color:#1E1714}
.btn-yel:hover{background:#F3EEE9}

.hw-end{display:flex;flex-direction:column;gap:24px;padding-block:72px 96px}
.hw-end > div:first-child{display:flex;flex-direction:column;gap:8px}

@media (min-width:768px){
  .tl{grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;position:relative}
  .tl::before{content:"";position:absolute;left:72px;right:calc(33.333% - 21px);top:36px;border-top:2px dashed #DDD5CF}
  .tl li{grid-template-columns:minmax(0,1fr);row-gap:10px;position:relative}
  .tl .burst{grid-row:auto;background:#FFFFFF;box-shadow:0 0 0 12px #FFFFFF;border-radius:50%}
  .hw-end{flex-direction:row;justify-content:space-between;align-items:flex-end}
}
@media (min-width:1024px){
  .hw-hero-in{grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:64px;padding-block:88px 96px;min-height:560px}
  .builder-in{grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:80px;padding-block:96px;align-items:center}
  .hw-steps{padding-block:96px}
}
@media (prefers-reduced-motion:reduce){.chat .msg{animation:none}}
`;
