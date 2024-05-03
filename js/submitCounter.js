function getCookie(e) {
  let o = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return o ? decodeURIComponent(o[1]) : void 0;
}
function setCookie(e, o, t = {}) {
  (t = { path: "/", ...t }).expires instanceof Date &&
    (t.expires = t.expires.toUTCString());
  let n = encodeURIComponent(e) + "=" + encodeURIComponent(o);
  for (let e in t) {
    n += "; " + e;
    let o = t[e];
    !0 !== o && (n += "=" + o);
  }
  document.cookie = n;
}
function checkForm(e) {
  const o = getCookie("submitCounter");
  if (o) {
    if (Number(o) >= 2) return alert("Вы уже отправили форму дважды"), !1;
    setCookie("submitCounter", String(Number(getCookie("submitCounter")) + 1), {
      "max-age": 3600,
    });
  } else setCookie("submitCounter", "1", { "max-age": 3600 });
  return !0;
}
