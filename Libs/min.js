$docsify.plugins = [].concat(function (i, s) {
  let e = s.config.waline || {};
  if (((e.el = "#waline"), !e.serverURL)) {
    console.warn("sorry, waline.serverURL must be required.");
    return;
  }
  let l = s.config.count.language || "english",
    a;
  switch (l) {
    case "english":
      a = "></span>&nbsp;times";
      break;
    case "chinese":
      a = "></span>&nbsp;\u6B21\u9605\u8BFB";
      break;
    default:
      console.warn("unsupported language", l), (a = "></span>&nbsp;times");
  }
  let t = !1,
    o = !1;
  i.doneEach((r) => {
    if (!o) return;
    t && t.destroy(),
      (path = window.location.pathname + window.location.hash),
      (e.path = path.replace(/\?.*$/, ""));
    let n = document.querySelector("#main div>span");
    n &&
      (n.innerHTML += `&nbsp;|&nbsp;<span class="waline-pageview-count" data-path="${e.path}"${a}`),
      (t = Waline.init(e)),
      Waline.pageviewCount({ serverURL: e.serverURL, path: e.path });
  }),
    i.mounted((r) => {
      let n = document.createElement("div");
      (n.id = "waline"),
        (n.style = "max-width: var(--content-max-width); margin:auto 120px ;"),
        document.querySelector("section.content").appendChild(n),
        (o = !0);
    });
}, $docsify.plugins);
