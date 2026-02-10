async function applyCss(window, key, css, styleSheetKeys) {
    await window.webContents.executeJavaScript(`
    (function() {
      window.__PS_STYLES__ = window.__PS_STYLES__ || Object.create(null);
      const same = window.__PS_STYLES__['${key}'] === ${JSON.stringify(css)};
      if (same) {
        return;
      }
      const old = document.getElementById('${key}');
      if (old) old.remove();
      const style = document.createElement('style');
      style.id = '${key}';
      style.textContent = ${JSON.stringify(css)};
      (document.head || document.documentElement).appendChild(style);
      window.__PS_STYLES__['${key}'] = ${JSON.stringify(css)};
      console.log('PulseSync applyCss:', '${key}');
    })();
  `);
    styleSheetKeys[key] = true;
}

async function removeCss(window, key, styleSheetKeys) {
    await window.webContents.executeJavaScript(`
    (function() {
      const el = document.getElementById('${key}');
      if (el) el.remove();
      if (window.__PS_STYLES__) delete window.__PS_STYLES__['${key}'];
      console.log('PulseSync removeCss:', '${key}');
    })();
  `);
    delete styleSheetKeys[key];
}

async function applyScript(window, id, code) {
    const js = `
    (function() {
      window.__PS_SCRIPTS__ = window.__PS_SCRIPTS__ || Object.create(null);
      const same = window.__PS_SCRIPTS__['${id}'] === ${JSON.stringify(code)};
      if (same) {
        console.log('PulseSync applyScript skip (same content):', '${id}');
        return;
      }
      const parent = document.head || document.documentElement;
      const existing = parent.querySelector('script#${id}');
      if (existing) existing.remove();
      const s = document.createElement('script');
      s.id = '${id}';
      s.textContent = ${JSON.stringify(code)};
      parent.appendChild(s);
      window.__PS_SCRIPTS__['${id}'] = ${JSON.stringify(code)};
      console.log('PulseSync applyScript:', '${id}');
    })();
  `;
    await window.webContents.executeJavaScript(js);
}

async function removeScript(window, id) {
    const js = `
    (function() {
      const s = document.getElementById('${id}');
      if (s) s.remove();
      if (window.__PS_SCRIPTS__) delete window.__PS_SCRIPTS__['${id}'];
      console.log('PulseSync removeScript:', '${id}');
    })();
  `;
    await window.webContents.executeJavaScript(js);
}

function wrapThemeScript(userCode) {
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
  })();`;
}

module.exports = {
    applyCss,
    removeCss,
    applyScript,
    removeScript,
    wrapThemeScript,
};
