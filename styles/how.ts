// How to order page styles, rendered in a <style> tag so they unload with the page.
export default `
.hw-hero{background:#FEC604;overflow:hidden}
.hw-hero-in{display:grid;gap:40px;padding-block:48px 64px;align-items:center}
.hw-copy{display:flex;flex-direction:column;gap:20px}
.hw-copy .lede{color:#3B2A22}

.chat{margin:0;background:#FFFFFF;border-radius:24px;padding:20px;display:flex;flex-direction:column;gap:10px;box-shadow:0 24px 48px rgba(30,23,20,.14);max-width:440px;width:100%;justify-self:center;rotate:1.5deg;transition:rotate .5s cubic-bezier(.2,.8,.2,1);animation:chatin .7s .2s ease both,float 6s 1s ease-in-out infinite}
.chat:hover{rotate:0deg}
@keyframes chatin{from{opacity:0;transform:translateY(16px)}}
@keyframes float{0%,100%{translate:0 0}50%{translate:0 -8px}}
.chat-top{display:flex;align-items:center;gap:12px;padding-bottom:12px;margin-bottom:4px;border-bottom:1px solid #ECE7E3}
.chat-top img{width:40px;height:40px;border-radius:50%;object-fit:cover;background:#FEC604}
.chat-top > span{display:flex;flex-direction:column;font-size:14px}
.chat-top b{font-weight:500}
.msg{margin:0;font-size:14px;line-height:1.45;padding:10px 14px;max-width:85%;overflow-wrap:anywhere}
.msg.me{align-self:flex-end;background:#F08448;color:#1E1714;border-radius:18px 18px 4px 18px;transform-origin:100% 100%}
.msg.her{align-self:flex-start;background:#F6F3F0;border-radius:18px 18px 18px 4px;transform-origin:0 100%}
.chat .msg{animation:pop .4s cubic-bezier(.2,.9,.25,1.15) both}
.chat .msg.wait{visibility:hidden;animation:none}
.chat-in{display:flex;align-items:center;gap:8px;min-height:44px;margin-top:6px;padding:0 6px 0 16px;border-radius:999px;border:1px solid #ECE7E3}
.chat-in .txt{flex:1;min-width:0;font-size:14px;color:#A39791;white-space:nowrap;overflow:hidden}
.chat-in .txt.on{color:#1E1714}
.caret{display:inline-block;width:1.5px;height:1em;margin-left:1px;vertical-align:-2px;background:#1E1714;animation:caret 1s steps(1) infinite}
@keyframes caret{50%{opacity:0}}
.chat-in .send{flex:none;font-size:14px;font-weight:500;color:#C9BDB6;padding:6px 10px;border-radius:999px;transition:color .2s,background-color .2s}
.chat-in .send.on{color:#FFFFFF;background:#1E1714}
@keyframes pop{from{opacity:0;transform:translateY(8px) scale(.9)}}

.hw-steps{display:flex;flex-direction:column;gap:32px;padding-block:72px}
.tl{list-style:none;margin:0;padding:0;display:grid;gap:40px}
.tl li{display:grid;grid-template-columns:72px minmax(0,1fr);column-gap:20px;row-gap:6px;align-items:start;align-content:start;min-width:0}
.tl .burst{grid-row:span 3}
.tl .num{font-family:'Chivo',sans-serif;font-size:14px;color:#905484}

.builder{background:#21191A;color:#F3EEE9;scroll-margin-top:96px}
.builder-in{display:grid;gap:40px;padding-block:72px}
.b-form{display:flex;flex-direction:column;gap:20px}
.b-form .lede{color:#BEB2AB}
.field{display:flex;flex-direction:column;gap:8px}
.field label,.field .lbl{font-size:14px;color:#BEB2AB}
.pick{position:relative}
.pick-btn{display:flex;align-items:center;gap:12px;width:100%;min-height:56px;padding:6px 44px 6px 6px;border-radius:999px;border:1px solid #4A3D38;font:inherit;font-size:16px;color:#F3EEE9;text-align:left;cursor:pointer;background:#2B2224 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%23F3EEE9' stroke-width='1.5'/%3E%3C/svg%3E") no-repeat right 20px center/10px;transition:border-color .2s}
.pick-btn:hover,.pick-btn:focus-visible,.pick-btn[aria-expanded="true"]{border-color:#F3EEE9}
.pick img{width:44px;height:44px;flex:none;object-fit:contain;background:#F3EEE9;border-radius:50%;padding:4px}
.pick-name{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pick-pop{position:absolute;left:0;right:0;top:calc(100% + 8px);z-index:20}
.pick-pop ul{list-style:none;margin:0;padding:6px;max-height:340px;overflow-y:auto;background:#2B2224;border:1px solid #4A3D38;border-radius:20px;box-shadow:0 24px 48px rgba(0,0,0,.35);scrollbar-width:thin;scrollbar-color:#4A3D38 transparent}
.pick-pop li{display:flex;align-items:center;gap:12px;padding:6px 12px 6px 6px;border-radius:14px;cursor:pointer;font-size:14px}
.pick-pop li img{width:40px;height:40px;border-radius:10px}
.pick-pop li.on{background:#3A2F31}
.pick-pop li[aria-selected="true"] .pick-name{color:#FEC604}
.pick-price{flex:none;font-family:'Chivo',sans-serif;font-size:12px;color:#BEB2AB}
.pick-peek{display:none}
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
  .tl::before{content:"";position:absolute;left:calc((100% - 64px)/6);right:calc((100% - 64px)/6);top:36px;border-top:2px dashed #DDD5CF}
  .tl li{grid-template-columns:minmax(0,1fr);row-gap:10px;position:relative;justify-items:center;text-align:center}
  .tl li .s14{max-width:32ch}
  #steps-h{text-align:center}
  .tl .burst{grid-row:auto;background:#FFFFFF;box-shadow:0 0 0 12px #FFFFFF;border-radius:50%}
  .hw-end{flex-direction:row;justify-content:space-between;align-items:flex-end}
}
@media (min-width:1024px){
  .pick-peek{display:flex;flex-direction:column;gap:8px;position:absolute;left:calc(100% + 16px);top:0;width:240px;padding:16px;background:#F3EEE9;color:#1E1714;border-radius:20px;box-shadow:0 24px 48px rgba(0,0,0,.35)}
  .pick-peek img{width:100%;height:200px;object-fit:contain;border-radius:0;background:none;padding:0;animation:peek .25s ease both}
  .pick-peek .price{color:#A9471A}
  .hw-hero-in{grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:64px;padding-block:88px 96px;min-height:560px}
  .builder-in{grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:80px;padding-block:96px;align-items:center}
  .hw-steps{padding-block:96px}
}
@media (prefers-reduced-motion:reduce){.chat,.chat .msg,.caret{animation:none}.chat{transition:none}}
`;
