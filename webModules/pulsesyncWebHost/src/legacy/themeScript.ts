export function wrapLegacyThemeScript(userCode: string) {
    return `(function(){
    const origSI = window.setInterval, origST = window.setTimeout;
    let timers = [];
    window.setInterval = (fn,d,...a) => { const i = origSI(fn,d,...a); timers.push(i); return i; };
    window.setTimeout  = (fn,d,...a) => { const i = origST(fn,d,...a); timers.push(i); return i; };
    window.clearAll = () => {
      timers.forEach(i => { try { clearTimeout(i); } catch {} });
      timers = [];
    };
    window.clearAll();
    try {
      ${userCode}
    } catch(e) {
      console.error('Theme script error', e);
    }
  })();`
}
