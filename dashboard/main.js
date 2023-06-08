(self.webpackChunk = self.webpackChunk || []).push([
  [44410, 34254], {
    "../flags.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        J8: function() {
          return T
        },
        Jd: function() {
          return A
        },
        QY: function() {
          return m
        },
        Qw: function() {
          return S
        },
        ki: function() {
          return v
        }
      });
      var e = t("../react/common/selectors/accountSelectors.ts"),
        n = t("../react/utils/url.ts"),
        p = t("../../../../node_modules/query-string/query-string.js"),
        E = t.n(p),
        b = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        l, S = function() {
          return Object.keys(b.Z).reduce(function(O, N) {
            return N.indexOf("cf_beta.") === 0 && b.Z.get(N) === "true" && O.push(N.split(".").slice(1).join(".")), O
          }, [])
        },
        v = function() {
          var O, N, K;
          return ((O = window) === null || O === void 0 || (N = O.bootstrap) === null || N === void 0 || (K = N.data) === null || K === void 0 ? void 0 : K.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
        };
      if (((l = window) === null || l === void 0 ? void 0 : l.location) && b.Z) {
        var r = E().parse(window.location.search);
        if (r.beta_on && b.Z.set("cf_beta.".concat(r.beta_on), !0), r.beta_off && b.Z.set("cf_beta.".concat(r.beta_off), !1), !1) var u, g
      }
      var y = {},
        C = function(O) {
          var N, K, B;
          return Object.prototype.hasOwnProperty.call(y, O) ? y[O] : ((N = window) === null || N === void 0 || (K = N.bootstrap) === null || K === void 0 || (B = K.data) === null || B === void 0 ? void 0 : B.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(function(_e) {
            return _e === O
          }) ? (y[O] = !0, !0) : (y[O] = !1, !1)
        },
        j = function(O) {
          return b.Z ? b.Z.get("cf_beta.".concat(O)) === !0 : !1
        },
        T = function(O) {
          return j(O) || C(O)
        },
        _ = function() {
          return !0
        },
        A = function() {
          var O, N, K;
          return ((O = window) === null || O === void 0 || (N = O.bootstrap) === null || N === void 0 || (K = N.data) === null || K === void 0 ? void 0 : K.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
        },
        m = function(O) {
          var N = (0, e.uF)(O),
            K = (N == null ? void 0 : N.roles) || [];
          return (0, n.qR)(location.pathname) && K.length === 1 && K.some(function(B) {
            return B === "Administrator Read Only"
          })
        }
    },
    "../init.ts": function(Oe, M, t) {
      "use strict";
      t.r(M);
      var e = t("../../../../node_modules/url-search-params-polyfill/index.js"),
        n = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
        p = t("../../../../node_modules/fetch-intercept/lib/browser.js");

      function E(i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o] != null ? Object(arguments[o]) : {},
            P = Object.keys(d);
          typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(d).filter(function(H) {
            return Object.getOwnPropertyDescriptor(d, H).enumerable
          }))), P.forEach(function(H) {
            b(i, H, d[H])
          })
        }
        return i
      }

      function b(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var l = function(o) {
        var d = o && o.headers || {},
          P = new Headers(d);
        return P.append("X-Cross-Site-Security", "dash"), E({}, o, {
          headers: P
        })
      };
      (0, p.register)({
        request: function(o, d) {
          try {
            return new URL(o), [o, d]
          } catch {
            return [o, l(d)]
          }
        }
      });
      var S = t("../../../../node_modules/@sentry/core/esm/exports.js"),
        v = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
        r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
        u = t.n(r),
        g = t("../react/app/providers/storeContainer.js"),
        y = t("../react/common/selectors/languagePreferenceSelector.ts"),
        C = function(o) {
          switch (o) {
            case 429:
              return {
                title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
              };
            case 503:
              return {
                title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
              };
            default:
              return {
                title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
              }
          }
        },
        j = function(o) {
          var d = C(o);
          return `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #1d1d1d;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">`.concat(d.title, `</h1>
    <p id="error-description">`).concat(d.description, `</p>
  </div>
  `)
        },
        T = function(o) {
          var d, P = document.getElementById(o);
          !P || (d = P.parentNode) === null || d === void 0 || d.removeChild(P)
        };

      function _() {
        var i = document.getElementById("loading-state");
        i == null || i.classList.add("hide"), i == null || i.addEventListener("transitionend", function() {
          ["loading-state", "loading-styles", "loading-script"].forEach(T)
        })
      }

      function A(i) {
        var o = document.getElementById("loading-state");
        !o || (o.innerHTML = j(i == null ? void 0 : i.code))
      }
      var m = t("../react/history.js"),
        h = "",
        O = 61;

      function N(i) {
        var o = i.substr(1);
        if (o && h !== o) {
          var d = document.getElementById(o);
          if (d) {
            var P = d.getBoundingClientRect().top;
            if (P > 0) {
              var H = P - O;
              document.documentElement.scrollTop = H
            }
          }
        }
        h = o
      }

      function K() {
        m.Z.listen(function(i) {
          return N(i.hash)
        })
      }
      var B = t("../utils/initStyles.ts"),
        _e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
        Ee = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
        ce = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
        pe = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
        L = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
        R = t("../react/utils/url.ts"),
        D = (0, L.Rf)(),
        $;

      function ne(i) {
        return Z(i, "react-router-v5")
      }

      function Z(i, o) {
        return function(d) {
          var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
            H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          P && D && D.location && ($ = d({
            name: (0, R.Fl)(D.location.pathname),
            op: "pageload",
            tags: {
              "routing.instrumentation": o
            }
          })), H && i.listen && i.listen(function(ae, oe) {
            if (oe && (oe === "PUSH" || oe === "POP")) {
              $ && $.finish();
              var be = {
                "routing.instrumentation": o
              };
              $ = d({
                name: (0, R.Fl)(ae.pathname),
                op: "navigation",
                tags: be
              })
            }
          })
        }
      }
      var z = t("../flags.js"),
        W = t("../../../../node_modules/cookie/index.js"),
        I = function() {
          var o, d;
          return (o = window) === null || o === void 0 || (d = o.build) === null || d === void 0 ? void 0 : d.dashVersion
        },
        U = function() {
          var o, d = (0, W.Q)((o = document) === null || o === void 0 ? void 0 : o.cookie) || {},
            P = d.CF_dash_version !== void 0;
          return P
        },
        ie = t("../../../common/intl/intl-core/src/errors.ts"),
        re = t("../../../../node_modules/@sentry/utils/esm/object.js");

      function Se(i) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Se = function(d) {
          return typeof d
        } : Se = function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, Se(i)
      }

      function ke(i, o) {
        if (!(i instanceof o)) throw new TypeError("Cannot call a class as a function")
      }

      function je(i, o) {
        return o && (Se(o) === "object" || typeof o == "function") ? o : ye(i)
      }

      function Y(i, o) {
        if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
        i.prototype = Object.create(o && o.prototype, {
          constructor: {
            value: i,
            writable: !0,
            configurable: !0
          }
        }), o && Pe(i, o)
      }

      function ye(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
      }

      function xe(i) {
        var o = typeof Map == "function" ? new Map : void 0;
        return xe = function(P) {
          if (P === null || !de(P)) return P;
          if (typeof P != "function") throw new TypeError("Super expression must either be null or a function");
          if (typeof o != "undefined") {
            if (o.has(P)) return o.get(P);
            o.set(P, H)
          }

          function H() {
            return Fe(P, arguments, X(this).constructor)
          }
          return H.prototype = Object.create(P.prototype, {
            constructor: {
              value: H,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Pe(H, P)
        }, xe(i)
      }

      function Fe(i, o, d) {
        return le() ? Fe = Reflect.construct : Fe = function(H, ae, oe) {
          var be = [null];
          be.push.apply(be, ae);
          var ve = Function.bind.apply(H, be),
            Me = new ve;
          return oe && Pe(Me, oe.prototype), Me
        }, Fe.apply(null, arguments)
      }

      function le() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
          return !1
        }
      }

      function de(i) {
        return Function.toString.call(i).indexOf("[native code]") !== -1
      }

      function Pe(i, o) {
        return Pe = Object.setPrototypeOf || function(P, H) {
          return P.__proto__ = H, P
        }, Pe(i, o)
      }

      function X(i) {
        return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(d) {
          return d.__proto__ || Object.getPrototypeOf(d)
        }, X(i)
      }

      function fe(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var ee = function(i) {
          Y(o, i);

          function o(d, P) {
            var H;
            return ke(this, o), H = je(this, X(o).call(this, P)), fe(ye(ye(H)), "eventName", void 0), H.eventName = d, H.name = "SparrowValidationError", H
          }
          return o
        }(xe(Error)),
        Ue = function(i) {
          Y(o, i);

          function o(d) {
            var P;
            return ke(this, o), P = je(this, X(o).call(this, d, 'Event not allowed: "'.concat(d, '"'))), P.name = "SparrowEventNotAllowedError", P
          }
          return o
        }(ee),
        Ne = function(i) {
          Y(o, i);

          function o(d, P) {
            var H;
            return ke(this, o), H = je(this, X(o).call(this, d, 'Found invalid properties on event: "'.concat(d, '"'))), fe(ye(ye(H)), "invalidProperties", void 0), H.name = "SparrowInvalidPropertiesError", H.invalidProperties = P, H
          }
          return o
        }(ee),
        Ye = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
        Ke = !0,
        $e = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
        et = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

      function rt(i, o) {
        if (!(i instanceof o)) throw new TypeError("Cannot call a class as a function")
      }

      function De(i, o) {
        for (var d = 0; d < o.length; d++) {
          var P = o[d];
          P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(i, P.key, P)
        }
      }

      function me(i, o, d) {
        return o && De(i.prototype, o), d && De(i, d), i
      }

      function he(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var we = function() {
        function i() {
          rt(this, i), he(this, "name", i.id)
        }
        return me(i, [{
          key: "setupOnce",
          value: function() {
            t.g.console && (0, re.hl)(t.g.console, "error", function(d) {
              return function() {
                for (var P = arguments.length, H = new Array(P), ae = 0; ae < P; ae++) H[ae] = arguments[ae];
                var oe = H.find(function(ot) {
                  return ot instanceof Error
                });
                if (Ye && oe) {
                  var be, ve = !0;
                  if (oe instanceof ee) {
                    var Me = oe instanceof Ne ? oe.invalidProperties : void 0;
                    be = {
                      tags: {
                        "sparrow.eventName": oe.eventName
                      },
                      extra: {
                        sparrow: {
                          eventName: oe.eventName,
                          invalidProperties: Me
                        }
                      },
                      fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
                    }, ve = !1
                  } else if (oe instanceof r.SparrowIdCookieError) be = {
                    extra: {
                      sparrowIdCookie: oe.cookie
                    },
                    fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
                  };
                  else if (oe.name === "ChunkLoadError") {
                    be = {
                      fingerprint: [oe.name]
                    };
                    try {
                      be.tags = {
                        chunkId: oe.message.split(" ")[2],
                        chunkUrl: oe.request
                      }
                    } catch {}
                  } else oe instanceof ie.YB && (be = {
                    fingerprint: ["TranslatorError", oe.translationKey]
                  });
                  ve && S.Tb(oe, be)
                }
                typeof d == "function" && d.apply(t.g.console, H)
              }
            })
          }
        }]), i
      }();
      he(we, "id", "ConsoleErrorIntegration");
      var ze = null,
        He = t("../utils/sentry/lastSentEventId.ts"),
        st = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
        G = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");

      function Q(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function J(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              Q(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              Q(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }
      var te = function(o) {
          var d = function() {
            var P = J(regeneratorRuntime.mark(function H(ae) {
              var oe, be, ve, Me;
              return regeneratorRuntime.wrap(function(Xe) {
                for (;;) switch (Xe.prev = Xe.next) {
                  case 0:
                    return ve = {
                      envelope: ae.body,
                      url: o.url,
                      isPreviewDeploy: (oe = window) === null || oe === void 0 || (be = oe.build) === null || be === void 0 ? void 0 : be.isPreviewDeploy,
                      release: I()
                    }, Xe.prev = 1, Xe.next = 4, fetch("".concat("https://platform.dash.cloudflare.com", "/sentry/envelope"), {
                      method: "POST",
                      headers: {
                        Accept: "*/*",
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(ve)
                    });
                  case 4:
                    return Me = Xe.sent, Xe.abrupt("return", {
                      statusCode: Me.status,
                      headers: {
                        "x-sentry-rate-limits": Me.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": Me.headers.get("Retry-After")
                      }
                    });
                  case 8:
                    return Xe.prev = 8, Xe.t0 = Xe.catch(1), console.log(Xe.t0), Xe.abrupt("return", (0, G.$2)(Xe.t0));
                  case 12:
                  case "end":
                    return Xe.stop()
                }
              }, H, this, [
                [1, 8]
              ])
            }));
            return function(ae) {
              return P.apply(this, arguments)
            }
          }();
          return st.q(o, d)
        },
        Ae = function() {
          if (Ye && Ke) {
            var o, d, P, H, ae, oe, be, ve, Me, ot, Xe = "production";
            ((o = window) === null || o === void 0 || (d = o.build) === null || d === void 0 ? void 0 : d.isPreviewDeploy) && (Xe += "-preview"), Ee.S({
              dsn: Ye,
              release: I(),
              environment: Xe,
              ignoreErrors: et,
              allowUrls: $e,
              autoSessionTracking: !0,
              integrations: [new ce.jK.GlobalHandlers({
                onerror: !0,
                onunhandledrejection: !1
              }), new we, new pe.jK.BrowserTracing({
                routingInstrumentation: ne(m.Z)
              })],
              tracesSampleRate: .2,
              transport: te,
              beforeSend: function(zt) {
                return He.e.setEventId(zt.event_id), zt
              }
            });
            var pt = (0, g.bh)().getState();
            S.rJ({
              LOCAL_STORAGE_FLAGS: (0, z.Qw)(),
              USER_BETA_FLAGS: (0, z.ki)(),
              meta: {
                connection: {
                  type: (P = window) === null || P === void 0 || (H = P.navigator) === null || H === void 0 || (ae = H.connection) === null || ae === void 0 ? void 0 : ae.effectiveType,
                  bandwidth: (oe = window) === null || oe === void 0 || (be = oe.navigator) === null || be === void 0 || (ve = be.connection) === null || ve === void 0 ? void 0 : ve.downlink
                },
                languagePreference: (0, y.r)(pt),
                isPreviewDeploy: (Me = window) === null || Me === void 0 || (ot = Me.build) === null || ot === void 0 ? void 0 : ot.isPreviewDeploy
              },
              utilGates: (0, _e.T2)(pt)
            }), window.addEventListener("unhandledrejection", function(wt) {})
          }
        },
        Ie = function(o) {
          o ? S.av({
            id: o
          }) : S.av(null)
        },
        We = t("../react/utils/bootstrap.ts"),
        Ge = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
        Ve = t("../node_modules/uuid/v4.js"),
        it = t.n(Ve),
        ge = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        q = "ANON_USER_ID";

      function F() {
        var i, o, d, P, H = (i = t.g) === null || i === void 0 || (o = i.bootstrap) === null || o === void 0 || (d = o.data) === null || d === void 0 || (P = d.user) === null || P === void 0 ? void 0 : P.id;
        if (!H) {
          var ae = ge.Z.get(q);
          if (!ae) {
            var oe = it()();
            ge.Z.set(q, oe), ae = oe
          }
          return ae
        }
        return H
      }

      function Te(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function Le(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              Te(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              Te(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }

      function Qe() {
        return w.apply(this, arguments)
      }

      function w() {
        return w = Le(regeneratorRuntime.mark(function i() {
          var o;
          return regeneratorRuntime.wrap(function(P) {
            for (;;) switch (P.prev = P.next) {
              case 0:
                return o = (0, g.bh)(), o.dispatch((0, Ge.nM)({
                  apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
                  environment: "production"
                })), P.next = 4, o.dispatch((0, _e.UL)({
                  userId: F()
                }));
              case 4:
              case "end":
                return P.stop()
            }
          }, i, this)
        })), w.apply(this, arguments)
      }
      var Ce = [];

      function ft(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }

      function vt() {
        try {
          var i = (0, g.bh)().getState(),
            o = (0, _e.T2)(i),
            d = Ce.reduce(function(P, H) {
              return Object.assign(P, ft({}, H, o == null ? void 0 : o[H]))
            }, {});
          yt("gates_cohorts", d)
        } catch {}
      }

      function yt(i, o) {
        document.cookie = (0, W.q)(i, JSON.stringify(o), {
          path: "/",
          domain: ".cloudflare.com"
        })
      }

      function ht(i, o) {
        return St(i) || Et(i, o) || Ot(i, o) || bt()
      }

      function bt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function Ot(i, o) {
        if (!!i) {
          if (typeof i == "string") return _t(i, o);
          var d = Object.prototype.toString.call(i).slice(8, -1);
          if (d === "Object" && i.constructor && (d = i.constructor.name), d === "Map" || d === "Set") return Array.from(i);
          if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return _t(i, o)
        }
      }

      function _t(i, o) {
        (o == null || o > i.length) && (o = i.length);
        for (var d = 0, P = new Array(o); d < o; d++) P[d] = i[d];
        return P
      }

      function Et(i, o) {
        var d = i && (typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"]);
        if (d != null) {
          var P = [],
            H = !0,
            ae = !1,
            oe, be;
          try {
            for (d = d.call(i); !(H = (oe = d.next()).done) && (P.push(oe.value), !(o && P.length === o)); H = !0);
          } catch (ve) {
            ae = !0, be = ve
          } finally {
            try {
              !H && d.return != null && d.return()
            } finally {
              if (ae) throw be
            }
          }
          return P
        }
      }

      function St(i) {
        if (Array.isArray(i)) return i
      }
      var ut = function() {
          var o;
          try {
            o = decodeURIComponent(window.location.search)
          } catch {
            console.log("Could not decode query string. Using non-decoded value."), o = window.location.search
          }
          if (!!o.includes("remote[")) {
            var d = new URLSearchParams(o),
              P = {},
              H = !0,
              ae = !1,
              oe = void 0;
            try {
              for (var be = d[Symbol.iterator](), ve; !(H = (ve = be.next()).done); H = !0) {
                var Me = ht(ve.value, 2),
                  ot = Me[0],
                  Xe = Me[1];
                ot.includes("remote") && (P[ot.replace(/remote\[|\]/g, "")] = Xe)
              }
            } catch (pt) {
              ae = !0, oe = pt
            } finally {
              try {
                !H && be.return != null && be.return()
              } finally {
                if (ae) throw oe
              }
            }
            ge.Z.set("mfe-remotes", JSON.stringify(P))
          }
        },
        Ct = ut,
        x = t("../utils/getBootstrap.js"),
        f = t("webpack/sharing/consume/default/react/react"),
        c = t.n(f),
        k = t("webpack/sharing/consume/default/react-dom/react-dom"),
        V = t("webpack/sharing/consume/default/react-redux/react-redux"),
        Re = t("../../../../node_modules/connected-react-router/esm/index.js"),
        Ze = t("../../../../node_modules/swr/core/dist/index.mjs"),
        Be = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
        qe = t("../react/shims/focus-visible.js"),
        at = t("../react/app/components/DeepLink/index.ts"),
        tt = t("../../../../node_modules/prop-types/index.js"),
        lt = t.n(tt),
        mt = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
        nt = t("../react/utils/translator.tsx"),
        ct = t("../../../common/intl/intl-react/src/index.ts"),
        Je = t("../../../dash/intl/intl-translations/src/index.ts"),
        At = t("../../../../node_modules/query-string/query-string.js"),
        gt = t.n(At),
        Tt = t("../react/common/actions/userActions.ts"),
        Pt = t("../react/common/selectors/userSelectors.ts"),
        ue = t("../react/utils/i18n.ts");

      function Mt(i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o] != null ? Object(arguments[o]) : {},
            P = Object.keys(d);
          typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(d).filter(function(H) {
            return Object.getOwnPropertyDescriptor(d, H).enumerable
          }))), P.forEach(function(H) {
            Dt(i, H, d[H])
          })
        }
        return i
      }

      function Dt(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }

      function Bt(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function Lt(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              Bt(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              Bt(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }
      var dt = gt().parse(location.search),
        Nt = function(o) {
          var d = (0, We.$8)() ? [(0, Je.Fy)(Je.if.common), (0, Je.Fy)(Je.if.navigation), (0, Je.Fy)(Je.if.overview), (0, Je.Fy)(Je.if.onboarding), (0, Je.Fy)(Je.if.invite), (0, Je.Fy)(Je.if.login), (0, Je.Fy)(Je.if.dns), (0, Je.Fy)(Je.n4.ssl_tls)] : [(0, Je.Fy)(Je.if.common), (0, Je.Fy)(Je.if.invite), (0, Je.Fy)(Je.if.login), (0, Je.Fy)(Je.if.onboarding)];
          dt.lang ? s(o) : ge.Z.get(ue.th) && se(o, ge.Z.get(ue.ly));
          var P = function() {
            var H = Lt(regeneratorRuntime.mark(function ae(oe) {
              var be;
              return regeneratorRuntime.wrap(function(Me) {
                for (;;) switch (Me.prev = Me.next) {
                  case 0:
                    return Me.next = 2, Promise.all(d.map(function(ot) {
                      return ot(oe)
                    }));
                  case 2:
                    return be = Me.sent, Me.abrupt("return", be.reduce(function(ot, Xe) {
                      return Mt({}, ot, Xe)
                    }, {}));
                  case 4:
                  case "end":
                    return Me.stop()
                }
              }, ae, this)
            }));
            return function(oe) {
              return H.apply(this, arguments)
            }
          }();
          return c().createElement(ct.RD.Provider, {
            value: o.languagePreference
          }, c().createElement(ct.bd, {
            translator: nt.Vb,
            locale: o.languagePreference
          }, c().createElement(ct.lm, {
            loadPhrases: P
          }, o.children)))
        },
        s = function() {
          var i = Lt(regeneratorRuntime.mark(function o(d) {
            var P;
            return regeneratorRuntime.wrap(function(ae) {
              for (;;) switch (ae.prev = ae.next) {
                case 0:
                  if (P = dt.lang.substring(0, dt.lang.length - 2) + dt.lang.substring(dt.lang.length - 2, dt.lang.length).toUpperCase(), (0, y.v)(P)) {
                    ae.next = 6;
                    break
                  }
                  return console.warn("".concat(P, " is not a supported locale.")), delete dt.lang, d.history.replace({
                    search: gt().stringify(dt)
                  }), ae.abrupt("return");
                case 6:
                  ge.Z.set(ue.ly, P), delete dt.lang, se(d, P), d.isAuthenticated || d.history.replace({
                    search: gt().stringify(dt)
                  });
                case 10:
                case "end":
                  return ae.stop()
              }
            }, o, this)
          }));
          return function(d) {
            return i.apply(this, arguments)
          }
        }(),
        se = function() {
          var i = Lt(regeneratorRuntime.mark(function o(d, P) {
            return regeneratorRuntime.wrap(function(ae) {
              for (;;) switch (ae.prev = ae.next) {
                case 0:
                  if (!d.isAuthenticated) {
                    ae.next = 14;
                    break
                  }
                  return ae.prev = 1, ae.next = 4, d.setUserCommPreferences({
                    "language-locale": P
                  }, {
                    hideErrorAlert: !0
                  });
                case 4:
                  ge.Z.remove(ue.th), d.history.replace({
                    search: gt().stringify(dt)
                  }), ae.next = 12;
                  break;
                case 8:
                  ae.prev = 8, ae.t0 = ae.catch(1), ge.Z.set(ue.th, !0), console.error(ae.t0);
                case 12:
                  ae.next = 15;
                  break;
                case 14:
                  ge.Z.set(ue.th, !0);
                case 15:
                case "end":
                  return ae.stop()
              }
            }, o, this, [
              [1, 8]
            ])
          }));
          return function(d, P) {
            return i.apply(this, arguments)
          }
        }(),
        jt = function(o) {
          var d = (0, Pt.PR)(o);
          return {
            isAuthenticated: !!(d && d.id),
            languagePreference: ge.Z.get(ue.ly) || (0, y.r)(o)
          }
        },
        Rt = {
          setUserCommPreferences: Tt.V_
        },
        _n = (0, mt.withRouter)((0, V.connect)(jt, Rt)(Nt));
      Nt.propTypes = {
        history: lt().object,
        languagePreference: lt().string.isRequired,
        children: lt().node.isRequired,
        isAuthenticated: lt().bool,
        setUserCommPreferences: lt().func.isRequired
      };
      var En = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
        Ut = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
        Cn = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js"),
        Gt, On = function() {
          return Gt || (Gt = (0, Cn.Z)({
            dev: !1,
            selectorPrefix: "c_"
          })), Gt
        },
        Sn = function(o) {
          return o.application.modals
        },
        An = t("../react/common/actions/modalActions.ts");

      function Ft(i) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(d) {
          return typeof d
        } : Ft = function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, Ft(i)
      }

      function Zt() {
        return Zt = Object.assign || function(i) {
          for (var o = 1; o < arguments.length; o++) {
            var d = arguments[o];
            for (var P in d) Object.prototype.hasOwnProperty.call(d, P) && (i[P] = d[P])
          }
          return i
        }, Zt.apply(this, arguments)
      }

      function wn(i, o) {
        if (!(i instanceof o)) throw new TypeError("Cannot call a class as a function")
      }

      function Xt(i, o) {
        for (var d = 0; d < o.length; d++) {
          var P = o[d];
          P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(i, P.key, P)
        }
      }

      function Tn(i, o, d) {
        return o && Xt(i.prototype, o), d && Xt(i, d), i
      }

      function Pn(i, o) {
        return o && (Ft(o) === "object" || typeof o == "function") ? o : Rn(i)
      }

      function Rn(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
      }

      function Wt(i) {
        return Wt = Object.setPrototypeOf ? Object.getPrototypeOf : function(d) {
          return d.__proto__ || Object.getPrototypeOf(d)
        }, Wt(i)
      }

      function kn(i, o) {
        if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
        i.prototype = Object.create(o && o.prototype, {
          constructor: {
            value: i,
            writable: !0,
            configurable: !0
          }
        }), o && Kt(i, o)
      }

      function Kt(i, o) {
        return Kt = Object.setPrototypeOf || function(P, H) {
          return P.__proto__ = H, P
        }, Kt(i, o)
      }
      var Ln = c().createContext({}),
        jn = function(i) {
          kn(o, i);

          function o() {
            return wn(this, o), Pn(this, Wt(o).apply(this, arguments))
          }
          return Tn(o, [{
            key: "render",
            value: function() {
              var P = this.props,
                H = P.modals,
                ae = P.closeModal;
              return c().createElement(c().Fragment, null, H.map(function(oe) {
                var be = oe.ModalComponent,
                  ve = oe.props,
                  Me = ve === void 0 ? {} : ve,
                  ot = oe.id,
                  Xe = function() {
                    typeof Me.onClose == "function" && Me.onClose(), ae(be)
                  };
                return c().createElement(Ln.Provider, {
                  key: ot,
                  value: {
                    closeModal: Xe
                  }
                }, c().createElement(be, Zt({}, Me, {
                  isOpen: !0,
                  closeModal: Xe
                })))
              }))
            }
          }]), o
        }(c().Component),
        In = (0, V.connect)(function(i) {
          return {
            modals: Sn(i)
          }
        }, {
          closeModal: An.M
        }),
        Mn = In(jn),
        Dn = t("../react/app/components/ErrorBoundary.tsx"),
        Bn = t("../react/common/actions/notificationsActions.ts");

      function xt(i) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xt = function(d) {
          return typeof d
        } : xt = function(d) {
          return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d
        }, xt(i)
      }

      function Nn(i, o) {
        if (!(i instanceof o)) throw new TypeError("Cannot call a class as a function")
      }

      function $t(i, o) {
        for (var d = 0; d < o.length; d++) {
          var P = o[d];
          P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(i, P.key, P)
        }
      }

      function Un(i, o, d) {
        return o && $t(i.prototype, o), d && $t(i, d), i
      }

      function Fn(i, o) {
        return o && (xt(o) === "object" || typeof o == "function") ? o : xn(i)
      }

      function xn(i) {
        if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return i
      }

      function Ht(i) {
        return Ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(d) {
          return d.__proto__ || Object.getPrototypeOf(d)
        }, Ht(i)
      }

      function zn(i, o) {
        if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function");
        i.prototype = Object.create(o && o.prototype, {
          constructor: {
            value: i,
            writable: !0,
            configurable: !0
          }
        }), o && Vt(i, o)
      }

      function Vt(i, o) {
        return Vt = Object.setPrototypeOf || function(P, H) {
          return P.__proto__ = H, P
        }, Vt(i, o)
      }
      var Gn = t.g.bootstrap || {},
        qt = Gn.data || {},
        en = function(i) {
          zn(o, i);

          function o() {
            return Nn(this, o), Fn(this, Ht(o).apply(this, arguments))
          }
          return Un(o, [{
            key: "componentDidMount",
            value: function() {
              qt.messages && this.dispatchNotificationActions(qt.messages)
            }
          }, {
            key: "dispatchNotificationActions",
            value: function(P) {
              var H = this;
              P.forEach(function(ae) {
                var oe = ae.type,
                  be = ae.message,
                  ve = ae.persist;
                ["success", "info", "warn", "error"].includes(oe) && H.props.notifyAdd(oe, (0, nt.ZP)(be), {
                  persist: !!ve
                })
              })
            }
          }, {
            key: "render",
            value: function() {
              return null
            }
          }]), o
        }(c().Component),
        Zn = (0, mt.withRouter)((0, V.connect)(null, {
          notifyAdd: Bn.IH
        })(en)),
        Wn = Zn;
      en.propTypes = {
        notifyAdd: lt().func.isRequired
      };
      var tn = t("../react/common/selectors/entitlementsSelectors.ts"),
        nn = t("../react/common/selectors/accountSelectors.ts"),
        Kn = ["accountId", "is_ent"];

      function Hn() {
        var i = (0, Ge.f7)(),
          o = (0, mt.useHistory)(),
          d = (0, R.uW)(o.location.pathname),
          P = (0, Ge.Yc)(),
          H = (0, Ge.O$)(),
          ae = (0, V.useSelector)(tn.u1),
          oe = !ae.isRequesting && !!ae.data,
          be = (0, V.useSelector)(tn.p1),
          ve = (0, V.useSelector)(nn.Xu),
          Me = (0, V.useSelector)(nn.uF),
          ot = !ve.isRequesting && !!ve.data;
        (0, f.useEffect)(function() {
          d && ot && Me && oe && d === Me.account.id ? P({
            accountId: Me.account.id,
            is_ent: be
          }) : (!d || d in i && i.accountId !== d) && H(Kn)
        }, [ot, Me, P, H, oe, be, d, i])
      }
      var rn = t("../react/common/selectors/zoneSelectors.ts");

      function Vn() {
        var i = (0, V.useSelector)(rn.nA),
          o = (0, Ge.Yc)();
        (0, f.useEffect)(function() {
          o({
            zone_id: i == null ? void 0 : i.id
          })
        }, [i, o])
      }
      var Yn = function() {
          return Hn(), Vn(), null
        },
        Jn = t("../react/common/hooks/useGate.ts"),
        Qn = t("../react/pages/profile/preferences/appearance-preference/appearance-utils.ts");

      function an(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function Xn(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              an(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              an(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }
      var $n = function(o) {
          var d = o.onDarkModeChangeCb,
            P = (0, Jn.Z)("dx-persistence-worker");
          return (0, f.useEffect)(function() {
            var H = function() {
              var ae = Xn(regeneratorRuntime.mark(function oe() {
                return regeneratorRuntime.wrap(function(ve) {
                  for (;;) switch (ve.prev = ve.next) {
                    case 0:
                      return ve.next = 2, (0, Qn.aC)();
                    case 2:
                      return ve.abrupt("return", ve.sent);
                    case 3:
                    case "end":
                      return ve.stop()
                  }
                }, oe, this)
              }));
              return function() {
                return ae.apply(this, arguments)
              }
            }();
            (0, We.$8)() && P && H().then(function(ae) {
              ae && d(ae)
            })
          }, []), null
        },
        qn = $n,
        er = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
        tr = t("../react/app/components/LoadingSuspense.tsx"),
        nr = c().lazy(function() {
          return Promise.all([t.e(2480), t.e(81175), t.e(51167), t.e(4616), t.e(57217), t.e(35613), t.e(58583), t.e(12715), t.e(51557), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx"))
        }),
        rr = function() {
          return c().createElement(tr.Z, null, c().createElement(nr, null))
        },
        ar = rr,
        or = function() {
          return f.useEffect(function() {
            return _
          }, []), null
        },
        ir = t("../../../../node_modules/moment/moment.js"),
        on = t.n(ir),
        sr = function(o) {
          switch (o) {
            case "en-US":
            case "es-ES":
            case "de-DE":
            case "fr-FR":
            case "it-IT":
            case "ja-JP":
            case "ko-KR":
              return o.slice(0, 2);
            case "es-MX":
            case "es-CL":
            case "es-EC":
            case "pt-BR":
            case "zh-CN":
            case "zh-TW":
              return o.toLowerCase();
            default:
              return "en"
          }
        },
        cr = function() {
          var o = (0, V.useSelector)(y.r);
          (0, f.useEffect)(function() {
            var d = sr(o);
            d !== on().locale() && on().locale(d), document.documentElement.lang = o
          }, [o])
        },
        ur = function() {
          (0, f.useEffect)(function() {
            var o, d, P;
            if (((o = window) === null || o === void 0 || (d = o.build) === null || d === void 0 ? void 0 : d.isPreviewDeploy) && (P = "cookie"), !!P) try {
              var H = document.head.querySelector("link[rel=icon]");
              H && (H.href = t("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")("./favicon-".concat(P, ".ico")))
            } catch {}
          }, [])
        },
        lr = t("../react/common/constants/constants.ts"),
        dr = function() {
          var o = (0, mt.useLocation)();
          (0, f.useEffect)(function() {
            var d = gt().parse(o.search);
            if (d.pt && ge.Z.set(lr.sJ, d.pt), (d == null ? void 0 : d.devPanel) === null) {
              var P, H;
              (P = window) === null || P === void 0 || (H = P.localStorage) === null || H === void 0 || H.setItem("gates_devtools_ui_gates_controller_enabled", "true")
            }
          }, [o.search])
        },
        pr = c().lazy(function() {
          return Promise.all([t.e(2480), t.e(81175), t.e(51167), t.e(4616), t.e(57217), t.e(35613), t.e(3058), t.e(72019), t.e(21901), t.e(12715), t.e(51557), t.e(47261), t.e(99820), t.e(77637), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.js"))
        }),
        fr = c().lazy(function() {
          return Promise.all([t.e(81175), t.e(51167), t.e(3058), t.e(12715), t.e(69088), t.e(99820), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx"))
        }),
        mr = function(o) {
          var d, P = o.userIsAuthed;
          return cr(), ur(), dr(), c().createElement(f.Suspense, {
            fallback: c().createElement(or, null)
          }, c().createElement(mt.Switch, null, !P && !0 && c().createElement(mt.Route, {
            exact: !0,
            path: ["/", "/login"]
          }, c().createElement(fr, null)), c().createElement(mt.Route, {
            render: function() {
              return c().createElement(er.ZC, {
                minHeight: "100vh"
              }, c().createElement(pr, null))
            }
          })), ((d = window) === null || d === void 0 ? void 0 : d.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true" && c().createElement(ar, null))
        },
        gr = mr,
        It = t("../../../../node_modules/yup/lib/index.js"),
        sn = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
        vr = t("../../../common/util/types/src/utils/index.ts"),
        yr = !1,
        cn = {
          cfEmail: function() {
            return It.Z_().email((0, nt.ZP)("common.validation.email")).required((0, nt.ZP)("common.validation.email"))
          },
          cfPassword: function() {
            return yr ? It.Z_().required((0, nt.ZP)("common.validation.required")) : It.Z_().required((0, nt.ZP)("common.validation.password.required")).min(8, (0, nt.ZP)("common.validation.password.min")).matches(sn.Z.digit, (0, nt.ZP)("common.validation.password.digit")).matches(sn.Z.special, (0, nt.ZP)("common.validation.password.special"))
          }
        };
      (0, vr.Yd)(cn).forEach(function(i) {
        It.kM(It.Z_, i, cn[i])
      });

      function un(i, o) {
        return Er(i) || _r(i, o) || br(i, o) || hr()
      }

      function hr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function br(i, o) {
        if (!!i) {
          if (typeof i == "string") return ln(i, o);
          var d = Object.prototype.toString.call(i).slice(8, -1);
          if (d === "Object" && i.constructor && (d = i.constructor.name), d === "Map" || d === "Set") return Array.from(i);
          if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return ln(i, o)
        }
      }

      function ln(i, o) {
        (o == null || o > i.length) && (o = i.length);
        for (var d = 0, P = new Array(o); d < o; d++) P[d] = i[d];
        return P
      }

      function _r(i, o) {
        var d = i && (typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"]);
        if (d != null) {
          var P = [],
            H = !0,
            ae = !1,
            oe, be;
          try {
            for (d = d.call(i); !(H = (oe = d.next()).done) && (P.push(oe.value), !(o && P.length === o)); H = !0);
          } catch (ve) {
            ae = !0, be = ve
          } finally {
            try {
              !H && d.return != null && d.return()
            } finally {
              if (ae) throw be
            }
          }
          return P
        }
      }

      function Er(i) {
        if (Array.isArray(i)) return i
      }
      var dn = c().lazy(function() {
          return Promise.all([t.e(4616), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx"))
        }),
        Cr = function() {
          var o = (0, We.$8)(),
            d = (0, f.useState)(o ? dn : c().Fragment),
            P = un(d, 2),
            H = P[0],
            ae = P[1],
            oe = (0, f.useState)((0, Ut.Yc)()),
            be = un(oe, 2),
            ve = be[0],
            Me = be[1];
          (0, f.useEffect)(function() {
            (0, Ut.fF)(function() {
              return Me((0, Ut.Yc)())
            })
          }, []);
          var ot = function(pt) {
            Me(pt), (0, Ut.C8)(pt)
          };
          return (0, f.useEffect)(function() {
            ae(o ? dn : c().Fragment)
          }, [o]), (0, f.useEffect)(function() {
            var Xe = function() {
              return ot(localStorage.getItem("dark-mode"))
            };
            return window.addEventListener("storage", Xe),
              function() {
                window.removeEventListener("storage", Xe)
              }
          }, []), c().createElement(f.Suspense, {
            fallback: null
          }, c().createElement(V.Provider, {
            store: (0, g.bh)()
          }, c().createElement(Re.xI, {
            history: m.Z
          }, c().createElement(H, null, c().createElement(En.Z, {
            renderer: On()
          }, c().createElement(_n, null, c().createElement(Dn.Z, {
            sentryTag: "Root"
          }, c().createElement(Ze.J$, {
            value: {
              fetcher: function(pt) {
                return fetch(pt).then(function(wt) {
                  return wt.json()
                })
              }
            }
          }, c().createElement(Yn, null), c().createElement(Wn, null), c().createElement(qn, {
            onDarkModeChangeCb: ot
          }), c().createElement(at.ZP, null, c().createElement(gr, {
            userIsAuthed: o
          })), c().createElement(Mn, null)))))))))
        },
        Or = function() {
          (0, k.render)(c().createElement(Cr, null), document.getElementById("react-app"))
        },
        kt = {
          keys: ["blockedURI", "columnNumber", "disposition", "documentURI", "effectiveDirective", "lineNumber", "originalPolicy", "referrer", "sample", "script-sample", "sourceFile", "statusCode", "violatedDirective"]
        },
        pn = {
          blockedURI: "blocked-uri",
          columnNumber: "column-number",
          documentURI: "document-uri",
          effectiveDirective: "effective-directive",
          lineNumber: "line-number",
          sample: "script-sample",
          originalPolicy: "original-policy",
          sourceFile: "source-file",
          statusCode: "status-code",
          violatedDirective: "violated-directive"
        },
        fn = [{
          name: "Discard Zendesk legacy scripts",
          descrption: "See SEC-2724",
          rule: function(o) {
            return o["blocked-uri"] && o["blocked-uri"].startsWith("https://widget-mediator.zopim.com/")
          }
        }, {
          name: "Discard blocked by eval",
          description: "See SEC-2989",
          rule: function(o) {
            o["blocked-uri"] && o["blocked-uri"].startsWith("eval")
          }
        }],
        Sr = function(o) {
          for (var d = 0; d < fn.length; d++) {
            var P = fn[d].rule;
            if (P(o)) return !0
          }
          return !1
        },
        Ar = function() {
          document.addEventListener("securitypolicyviolation", function(o) {
            for (var d = {
                "csp-report": {}
              }, P = 0; P < kt.keys.length; P++) o[kt.keys[P]] !== void 0 && (d["csp-report"][pn[kt.keys[P]] ? pn[kt.keys[P]] : kt.keys[P]] = o[kt.keys[P]]);
            if (!Sr(d["csp-report"])) {
              d["csp-report"].disposition && (d["csp-report"].disposition += "-dom");
              var H = new XMLHttpRequest;
              H.open("POST", "https://sentry.io/api/1875320/security/?sentry_key=d639afe3688c4603a1d1b7a22217c710&sentry_environment=production", !0), H.setRequestHeader("content-type", "application/csp-report"), H.send(JSON.stringify(d))
            }
          })
        },
        a = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
        wr = t("../../../../node_modules/lodash-es/memoize.js");

      function Yt(i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o] != null ? Object(arguments[o]) : {},
            P = Object.keys(d);
          typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(d).filter(function(H) {
            return Object.getOwnPropertyDescriptor(d, H).enumerable
          }))), P.forEach(function(H) {
            Tr(i, H, d[H])
          })
        }
        return i
      }

      function Tr(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var Pr = a.eg.exact(a.eg.object({
          _ga: a.eg.string.optional
        })),
        Rr = (0, wr.Z)(function(i) {
          try {
            return Pr.assertDecode((0, W.Q)(i))
          } catch (o) {
            return console.error(o), {}
          }
        }),
        kr = function(o) {
          return function(d, P, H) {
            try {
              var ae = window.location.pathname,
                oe = (0, g.bh)().getState(),
                be = Rr(document.cookie),
                ve = Yt({
                  page: (0, R.Fl)(H.page || window.location.pathname)
                }, be);
              if (d === "identify") {
                var Me, ot, Xe = {
                  gates: (0, _e.T2)(oe) || {},
                  country: (Me = t.g) === null || Me === void 0 || (ot = Me.bootstrap) === null || ot === void 0 ? void 0 : ot.ip_country
                };
                return o(d, P, Yt({}, ve, Xe, H))
              } else {
                var pt = {
                  accountId: (0, R.uW)(ae),
                  zoneName: (0, R.hW)(ae),
                  domainName: (0, R.Uh)(ae)
                };
                if ((0, R.el)(ae)) {
                  var wt = (0, rn.nA)(oe);
                  pt.zoneId = wt == null ? void 0 : wt.id
                }
                return o(d, P, Yt({}, ve, pt, H))
              }
            } catch (zt) {
              return console.error(zt), o(d, P, H)
            }
          }
        };

      function mn(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function Lr(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              mn(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              mn(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }
      var jr = function(o) {
        return function() {
          var d = Lr(regeneratorRuntime.mark(function P(H, ae, oe) {
            return regeneratorRuntime.wrap(function(ve) {
              for (;;) switch (ve.prev = ve.next) {
                case 0:
                  return ve.prev = 0, ve.next = 3, o(H, ae, oe);
                case 3:
                  return ve.abrupt("return", ve.sent);
                case 6:
                  if (ve.prev = 6, ve.t0 = ve.catch(0), console.error(ve.t0), vn()) {
                    ve.next = 11;
                    break
                  }
                  throw ve.t0;
                case 11:
                  return ve.abrupt("return", {
                    status: "rejected",
                    reason: ve.t0
                  });
                case 12:
                case "end":
                  return ve.stop()
              }
            }, P, this, [
              [0, 6]
            ])
          }));
          return function(P, H, ae) {
            return d.apply(this, arguments)
          }
        }()
      };

      function Jt(i, o) {
        return Dr(i) || Mr(i, o) || gn(i, o) || Ir()
      }

      function Ir() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function Mr(i, o) {
        var d = i && (typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"]);
        if (d != null) {
          var P = [],
            H = !0,
            ae = !1,
            oe, be;
          try {
            for (d = d.call(i); !(H = (oe = d.next()).done) && (P.push(oe.value), !(o && P.length === o)); H = !0);
          } catch (ve) {
            ae = !0, be = ve
          } finally {
            try {
              !H && d.return != null && d.return()
            } finally {
              if (ae) throw be
            }
          }
          return P
        }
      }

      function Dr(i) {
        if (Array.isArray(i)) return i
      }

      function Br(i) {
        return Fr(i) || Ur(i) || gn(i) || Nr()
      }

      function Nr() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function gn(i, o) {
        if (!!i) {
          if (typeof i == "string") return Qt(i, o);
          var d = Object.prototype.toString.call(i).slice(8, -1);
          if (d === "Object" && i.constructor && (d = i.constructor.name), d === "Map" || d === "Set") return Array.from(i);
          if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return Qt(i, o)
        }
      }

      function Ur(i) {
        if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null) return Array.from(i)
      }

      function Fr(i) {
        if (Array.isArray(i)) return Qt(i)
      }

      function Qt(i, o) {
        (o == null || o > i.length) && (o = i.length);
        for (var d = 0, P = new Array(o); d < o; d++) P[d] = i[d];
        return P
      }
      var xr = function(o, d) {
          for (var P = arguments.length, H = new Array(P > 2 ? P - 2 : 0), ae = 2; ae < P; ae++) H[ae - 2] = arguments[ae];
          return a.eg.union([a.eg.literal(o), a.eg.literal(d)].concat(Br(H.map(function(oe) {
            return a.eg.literal(oe)
          }))))
        },
        zr = xr("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add kv key-value", "Add insight", "add payment method", "Add site click", "add workers route", "Addon Purchase Success", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "Argo click", "Argo Smart Routing click", "Argo Tiered Caching click", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change appearance", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "change DNS file upload error visibility", "change DNS setup method", "change pagination page shield", "Change Plan Frequency", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script id page shield", "copy script url page shield", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add sources", "click API shield upsell link", "click API shield enable product button", "click API shield feedback link", "click API snippet drawer", "click back to all policies link", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click complete purchase button", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create load balancer", "Click Create Rule", "click create policy form link", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click resolve security issue button", "click save whois", "click scan again", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "Click to create API Shield portal", "click to create rate limiting rule for endpoint", "click Top N investigate", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "click waf upgrade banner", "click speed optimization enable all settings", "click speed optimization feature link", "click speed optimization documentation link", "click speed RUM recommendation feature link", "click speed RUM recommendation feature enabled", "Click", "create migration", "create or update queue consumer", "create queue", "create sink", "create speed test schedule", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close delete image modal", "close delete variant modal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script id page shield", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create default environments", "create environment", "create kv namespace", "create migration", "Create New Rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create sink", "create source", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete brand pattern", "Delete click", "Delete confirmation", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete source", "delete speed test", "delete speed test schedule", "delete variant", "Deploy API Shield portal", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display yubico promo banner", "DNS settings click", "download file", "download progress log", "download r2 object", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "Filter used", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "manage security insight", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "navigate to source detail", "navigate to variant detail", "navigate to WAF Migration Review configuration view", "navigate topbar", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase attempt", "purchase completed", "purchase domain transfer", "purchase subscription", "Purge cache click", "purge everything from cache", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "run security scan", "run speed test", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select payment method", "select payment option", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select zone plan", "select zone", "Select", "Selected advanced GeoIP field in rule builder", "Selected schema API Shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "Showed API Shield Flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Upload Failure", "Stream Video Upload Success", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "Survey banner closed", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "transfer DNS records", "Transfer out survey submitted", "Transfer Step", "Transter purchased", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update pages project", "update site", "Upload custom click", "Upload custom confirmation", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "upload r2 objects", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify address", "verify email", "view accounts", "view checkout complete purchase", "View click", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view page", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit blog announcements", "click discover card call to action", "click discover card view products", "click featured product call to action", "click paygo card cta", "click opt in stripe 5% beta", "click opt out stripe 5% beta", "click close opt out stripe 5% beta", "click stripe beta select plan support link", "click stripe beta change plan support link", "view stripe beta opt out"),
        Gr = a.eg.exactStrict(a.eg.object({
          ".agency": a.eg.any.optional,
          ".auction": a.eg.any.optional,
          ".bet": a.eg.any.optional,
          ".center": a.eg.any.optional,
          ".church": a.eg.any.optional,
          ".com": a.eg.any.optional,
          ".community": a.eg.any.optional,
          ".energy": a.eg.any.optional,
          ".fitness": a.eg.any.optional,
          ".guru": a.eg.any.optional,
          ".io": a.eg.any.optional,
          ".info": a.eg.any.optional,
          ".immo": a.eg.any.optional,
          ".lgbt": a.eg.any.optional,
          ".life": a.eg.any.optional,
          ".live": a.eg.any.optional,
          ".media": a.eg.any.optional,
          ".mobi": a.eg.any.optional,
          ".net": a.eg.any.optional,
          ".network": a.eg.any.optional,
          ".ninja": a.eg.any.optional,
          ".online": a.eg.any.optional,
          ".org": a.eg.any.optional,
          ".photography": a.eg.any.optional,
          ".plus": a.eg.any.optional,
          ".press": a.eg.any.optional,
          ".pro": a.eg.any.optional,
          ".services": a.eg.any.optional,
          ".store": a.eg.any.optional,
          ".tech": a.eg.any.optional,
          ".wiki": a.eg.any.optional,
          ".wtf": a.eg.any.optional,
          ".xyz": a.eg.any.optional,
          _lpchecked: a.eg.any.optional,
          a: a.eg.any.optional,
          absolute: a.eg.any.optional,
          access: a.eg.any.optional,
          access_users_allowed: a.eg.any.optional,
          account: a.eg.any.optional,
          accountId: a.eg.any.optional,
          "accountResolver/SELECT_ACCOUNT": a.eg.any.optional,
          "accountResolver/NO_ACTION": a.eg.any.optional,
          accountResolverTotalCpuTime: a.eg.any.optional,
          accountResolverTotalTime: a.eg.any.optional,
          accountResolverTotalUserActionsTime: a.eg.any.optional,
          action: a.eg.any.optional,
          addedRecords: a.eg.any.optional,
          addon: a.eg.any.optional,
          address: a.eg.any.optional,
          argo_accelerated_gigabytes: a.eg.any.optional,
          "aria-current": a.eg.any.optional,
          "aria-controls": a.eg.any.optional,
          "aria-label": a.eg.any.optional,
          "aria-selected": a.eg.any.optional,
          authHeaders: a.eg.any.optional,
          autocomplete: a.eg.any.optional,
          autoRenew: a.eg.any.optional,
          autoSetup: a.eg.any.optional,
          b: a.eg.any.optional,
          banner: a.eg.any.optional,
          bot_management: a.eg.any.optional,
          brokenExpression: a.eg.any.optional,
          bundle: a.eg.any.optional,
          c: a.eg.any.optional,
          cacheKey: a.eg.any.optional,
          cache_by_device_type: a.eg.any.optional,
          cache_rules: a.eg.any.optional,
          campaignId: a.eg.any.optional,
          campaignID: a.eg.any.optional,
          cancelled: a.eg.any.optional,
          category: a.eg.any.optional,
          cd43: a.eg.any.optional,
          cd45: a.eg.any.optional,
          cd47: a.eg.any.optional,
          certificate_pack_id: a.eg.any.optional,
          certificate_pack_type: a.eg.any.optional,
          cf: a.eg.any.optional,
          cfPlan: a.eg.any.optional,
          chartName: a.eg.any.optional,
          childrenCount: a.eg.any.optional,
          childrenSelected: a.eg.any.optional,
          class: a.eg.any.optional,
          code0: a.eg.any.optional,
          columnName: a.eg.string.optional,
          completedTasks: a.eg.any.optional,
          component: a.eg.any.optional,
          component_values: a.eg.any.optional,
          configuration_rules: a.eg.any.optional,
          contentfulId: a.eg.any.optional,
          country: a.eg.any.optional,
          currentCA: a.eg.any.optional,
          currentPerPage: a.eg.any.optional,
          currentPage: a.eg.any.optional,
          d: a.eg.any.optional,
          "data-children-count": a.eg.any.optional,
          "data-tracking-name": a.eg.any.optional,
          "data-tracking-id": a.eg.any.optional,
          "data-testid": a.eg.any.optional,
          dataset: a.eg.any.optional,
          dateCreated: a.eg.any.optional,
          dateModified: a.eg.any.optional,
          ddos: a.eg.any.optional,
          dedicated_certificates: a.eg.any.optional,
          dedicated_certificates_custom: a.eg.any.optional,
          deepLink: a.eg.any.optional,
          default: a.eg.any.optional,
          destinationPage: a.eg.string.optional,
          detailType: a.eg.any.optional,
          deviceViewport: a.eg.any.optional,
          direction: a.eg.any.optional,
          directive: a.eg.any.optional,
          domainName: a.eg.any.optional,
          download: a.eg.any.optional,
          duration: a.eg.any.optional,
          dynamic_redirects: a.eg.any.optional,
          e: a.eg.any.optional,
          email_count: a.eg.any.optional,
          end: a.eg.any.optional,
          enabled: a.eg.any.optional,
          entitled: a.eg.any.optional,
          environment: a.eg.string.optional,
          error: a.eg.any.optional,
          errorCode: a.eg.any.optional,
          errorMessage: a.eg.any.optional,
          errors: a.eg.any.optional,
          exclude_cdn_cgi: a.eg.any.optional,
          exact: a.eg.any.optional,
          expand: a.eg.any.optional,
          expression: a.eg.any.optional,
          features: a.eg.array(a.eg.string).optional,
          failureReasons: a.eg.any.optional,
          featureChange: a.eg.any.optional,
          featureImproved: a.eg.any.optional,
          featureName: a.eg.any.optional,
          featureOriginal: a.eg.any.optional,
          field: a.eg.any.optional,
          fieldName: a.eg.any.optional,
          filterId: a.eg.any.optional,
          firewall_rules: a.eg.any.optional,
          flow: a.eg.any.optional,
          "font-size": a.eg.any.optional,
          form: a.eg.any.optional,
          formView: a.eg.any.optional,
          frequency: a.eg.any.optional,
          from: a.eg.any.optional,
          fromCategorySearch: a.eg.any.optional,
          gatesDelayed: a.eg.any.optional,
          geo: a.eg.any.optional,
          guid: a.eg.any.optional,
          hasData: a.eg.any.optional,
          hasRecords: a.eg.any.optional,
          hasSidebarNav: a.eg.boolean.optional,
          "hasTest2019-06-03": a.eg.any.optional,
          hCaptchaDisplayed: a.eg.any.optional,
          header_modification: a.eg.any.optional,
          hostname_count: a.eg.any.optional,
          hostParam: a.eg.any.optional,
          href: a.eg.any.optional,
          id: a.eg.any.optional,
          index: a.eg.any.optional,
          indexLevel: a.eg.any.optional,
          initialRecommendation: a.eg.any.optional,
          ip_access_rules: a.eg.any.optional,
          items: a.eg.number.optional,
          isAuthenticated: a.eg.any.optional,
          isPaused: a.eg.any.optional,
          isCloudflare: a.eg.any.optional,
          isExpanding: a.eg.boolean.optional,
          isEnterprise: a.eg.boolean.optional,
          isInactive: a.eg.boolean.optional,
          isScript: a.eg.any.optional,
          isSPA: a.eg.any.optional,
          isStreaming: a.eg.any.optional,
          isStripeBilling: a.eg.boolean.optional,
          isParent: a.eg.any.optional,
          isViewAll: a.eg.any.optional,
          isEditingSubscription: a.eg.any.optional,
          is_replacing: a.eg.any.optional,
          key: a.eg.any.optional,
          label: a.eg.any.optional,
          lastTimestamp: a.eg.any.optional,
          level: a.eg.any.optional,
          link: a.eg.any.optional,
          listType: a.eg.any.optional,
          load_balancing: a.eg.any.optional,
          load_balancing_base: a.eg.any.optional,
          load_balancing_dns_queries: a.eg.any.optional,
          load_balancing_geo_routing: a.eg.any.optional,
          load_balancing_monitor_interval: a.eg.any.optional,
          load_balancing_origins: a.eg.any.optional,
          load_balancing_probe_regions: a.eg.any.optional,
          legacyDeepLink: a.eg.any.optional,
          locale: a.eg.any.optional,
          location: a.eg.any.optional,
          maliciousCode: a.eg.any.optional,
          maliciousDomain: a.eg.any.optional,
          maliciousURL: a.eg.any.optional,
          managed_rules: a.eg.any.optional,
          marketingPlan: a.eg.any.optional,
          matchesCount: a.eg.any.optional,
          matchingRequestPercentage: a.eg.any.optional,
          matchingRequests: a.eg.any.optional,
          message0: a.eg.any.optional,
          method: a.eg.any.optional,
          millis: a.eg.any.optional,
          "mirage-recommendation": a.eg.any.optional,
          mode: a.eg.any.optional,
          monitor: a.eg.string.optional,
          monitorType: a.eg.any.optional,
          mrktCheckboxDisplayed: a.eg.any.optional,
          name: a.eg.any.optional,
          new_selection: a.eg.any.optional,
          newTotalCount: a.eg.any.optional,
          novalidate: a.eg.any.optional,
          numAccounts: a.eg.any.optional,
          numDomainsInCart: a.eg.any.optional,
          numRecords: a.eg.any.optional,
          numRecordsToApply: a.eg.any.optional,
          numRecordsToPrompt: a.eg.any.optional,
          numRecordsToRemove: a.eg.any.optional,
          numRows: a.eg.any.optional,
          origin_rules: a.eg.any.optional,
          old_expires_on: a.eg.any.optional,
          old_mode: a.eg.any.optional,
          oldFrequency: a.eg.string.optional,
          oldPlan: a.eg.any.optional,
          oldPrice: a.eg.number.optional,
          oldRatePlan: a.eg.string.optional,
          oldStep: a.eg.any.optional,
          oldSubscriptionValues: a.eg.record(a.eg.string, a.eg.any).optional,
          oldValue: a.eg.any.optional,
          onboarding: a.eg.any.optional,
          operator: a.eg.any.optional,
          order: a.eg.string.optional,
          order_by: a.eg.any.optional,
          page: a.eg.any.optional,
          page_rules: a.eg.any.optional,
          pageNumber: a.eg.any.optional,
          params: a.eg.any.optional,
          paused: a.eg.any.optional,
          payment_country: a.eg.string.optional,
          payment_gateway: a.eg.string.optional,
          payment_method: a.eg.string.optional,
          payment_option: a.eg.string.optional,
          percentages: a.eg.array(a.eg.number).optional,
          personalisation: a.eg.boolean.optional,
          per_page: a.eg.any.optional,
          plan: a.eg.any.optional,
          plans: a.eg.any.optional,
          planVolume: a.eg.any.optional,
          position: a.eg.number.optional,
          prefs: a.eg.any.optional,
          previousPage: a.eg.any.optional,
          previous_selection: a.eg.any.optional,
          previousTotalCount: a.eg.any.optional,
          price: a.eg.any.optional,
          priority: a.eg.any.optional,
          product: a.eg.any.optional,
          prioritize_malicious: a.eg.any.optional,
          products: a.eg.any.optional,
          productName: a.eg.any.optional,
          productCategory: a.eg.any.optional,
          provider: a.eg.any.optional,
          question: a.eg.any.optional,
          quota: a.eg.any.optional,
          ratePlan: a.eg.any.optional,
          rayId: a.eg.any.optional,
          readTasks: a.eg.any.optional,
          recommendation: a.eg.any.optional,
          recommendationType: a.eg.any.optional,
          recordAdditionMethod: a.eg.any.optional,
          recordTypes: a.eg.any.optional,
          region: a.eg.any.optional,
          resourceName: a.eg.string.optional,
          rulesCount: a.eg.any.optional,
          gclid: a.eg.any.optional,
          gclsrc: a.eg.any.optional,
          dclid: a.eg.any.optional,
          utm_source: a.eg.any.optional,
          utm_medium: a.eg.any.optional,
          utm_campaign: a.eg.any.optional,
          utm_term: a.eg.any.optional,
          utm_content: a.eg.any.optional,
          rangeMax: a.eg.number.optional,
          rangeMin: a.eg.number.optional,
          rate_limiting: a.eg.any.optional,
          referring_domain: a.eg.any.optional,
          referrer: a.eg.any.optional,
          registrationPeriod: a.eg.any.optional,
          registrationStatus: a.eg.any.optional,
          rel: a.eg.any.optional,
          resultRank: a.eg.number.optional,
          "rocket_loader-recommendation": a.eg.any.optional,
          role: a.eg.any.optional,
          ruleDescription: a.eg.any.optional,
          ruleId: a.eg.any.optional,
          scanFailed: a.eg.any.optional,
          scope: a.eg.any.optional,
          searchAction: a.eg.any.optional,
          searchDescription: a.eg.any.optional,
          searchParam: a.eg.any.optional,
          searchStatus: a.eg.any.optional,
          searchTerm: a.eg.any.optional,
          searchValue: a.eg.any.optional,
          section: a.eg.any.optional,
          seenOnParam: a.eg.any.optional,
          selected: a.eg.any.optional,
          selection: a.eg.any.optional,
          series: a.eg.any.optional,
          service: a.eg.any.optional,
          setting: a.eg.any.optional,
          setup: a.eg.any.optional,
          showErrors: a.eg.any.optional,
          sortDirection: a.eg.string.optional,
          sortBy: a.eg.string.optional,
          source: a.eg.any.optional,
          state: a.eg.any.optional,
          status: a.eg.any.optional,
          step: a.eg.any.optional,
          string: a.eg.any.optional,
          stream_storage_thousand_minutes: a.eg.any.optional,
          stream_viewed_thousand_minutes: a.eg.any.optional,
          subcategory: a.eg.any.optional,
          subscribedToMarketing: a.eg.any.optional,
          subscriptionValues: a.eg.record(a.eg.string, a.eg.any).optional,
          success: a.eg.any.optional,
          supportLevel: a.eg.any.optional,
          tab: a.eg.any.optional,
          tableName: a.eg.any.optional,
          tag: a.eg.any.optional,
          target: a.eg.any.optional,
          targetPage: a.eg.any.optional,
          targetCA: a.eg.any.optional,
          target_pack_type: a.eg.any.optional,
          task: a.eg.any.optional,
          text: a.eg.any.optional,
          timeRange: a.eg.any.optional,
          title: a.eg.any.optional,
          tld: a.eg.string.optional,
          to: a.eg.any.optional,
          total: a.eg.number.optional,
          transform_rules: a.eg.any.optional,
          topic: a.eg.any.optional,
          totalCount: a.eg.any.optional,
          totalCpuTime: a.eg.any.optional,
          totalLevels: a.eg.any.optional,
          totalRequests: a.eg.any.optional,
          totalTime: a.eg.any.optional,
          totalUserActionsTime: a.eg.any.optional,
          type: a.eg.any.optional,
          upgrade: a.eg.boolean.optional,
          uploadFailed: a.eg.any.optional,
          url_rewrites: a.eg.any.optional,
          hosts: a.eg.string.optional,
          userId: a.eg.any.optional,
          userType: a.eg.any.optional,
          utm_referrer: a.eg.any.optional,
          validation_method: a.eg.any.optional,
          validity_days: a.eg.any.optional,
          value: a.eg.any.optional,
          visibility: a.eg.any.optional,
          via: a.eg.any.optional,
          waf: a.eg.any.optional,
          wordpress: a.eg.any.optional,
          workers: a.eg.any.optional,
          worker_kv_deletes: a.eg.any.optional,
          worker_kv_lists: a.eg.any.optional,
          worker_kv_reads: a.eg.any.optional,
          worker_kv_storage: a.eg.any.optional,
          worker_kv_writes: a.eg.any.optional,
          worker_requests: a.eg.any.optional,
          wp_plugin: a.eg.any.optional,
          zone: a.eg.any.optional,
          zoneId: a.eg.any.optional,
          zoneName: a.eg.any.optional,
          "zoneResolver/NO_ACTION": a.eg.any.optional,
          "zoneResolver/SELECT_ZONE": a.eg.any.optional,
          zoneResolverTotalCpuTime: a.eg.any.optional,
          zoneResolverTotalTime: a.eg.any.optional,
          zoneResolverTotalUserActionsTime: a.eg.any.optional,
          zones: a.eg.any.optional,
          zoneType: a.eg.any.optional
        })),
        Zr = function(o, d) {
          var P = Wr(d),
            H = Jt(P, 2),
            ae = H[0],
            oe = H[1],
            be, ve;
          return (0, a.nM)(zr.decode(o)) && (be = new Ue(o)), oe && oe.length > 0 && (ve = new Ne(o, oe)), [ae, be, ve]
        },
        Wr = function(o) {
          var d = Gr.decode(o);
          if ((0, a.nM)(d)) {
            var P = d.left.map(function(H) {
              var ae = H.context;
              return ae.map(function(oe) {
                var be = oe.key;
                return be
              })
            }).reduce(function(H, ae) {
              return H.concat(ae)
            }, []).filter(function(H) {
              return H in o
            });
            return [Kr(P, o), P]
          }
          return [o, []]
        },
        Kr = function(o, d) {
          return Object.entries(d).reduce(function(P, H) {
            var ae = Jt(H, 2),
              oe = ae[0],
              be = ae[1];
            return o.includes(oe) || (P[oe] = be), P
          }, {})
        },
        Hr = function(o) {
          return function(d, P, H) {
            var ae = Zr(P, H),
              oe = Jt(ae, 3),
              be = oe[0],
              ve = oe[1],
              Me = oe[2];
            if (ve) throw ve;
            return Me && console.error(Me), o(d, P, be)
          }
        };

      function Vr(i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o] != null ? Object(arguments[o]) : {},
            P = Object.keys(d);
          typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(d).filter(function(H) {
            return Object.getOwnPropertyDescriptor(d, H).enumerable
          }))), P.forEach(function(H) {
            Yr(i, H, d[H])
          })
        }
        return i
      }

      function Yr(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var Jr = function(o) {
          u().init(Vr({
            sourceKey: "ca633f741e204a5291e02fcb6c591020",
            debug: !1,
            url: "https://sparrow.cloudflare.com",
            enabled: vn(),
            middlewares: [jr, Hr, kr]
          }, o))
        },
        vn = function() {
          return !0
        };

      function yn(i, o, d, P, H, ae, oe) {
        try {
          var be = i[ae](oe),
            ve = be.value
        } catch (Me) {
          d(Me);
          return
        }
        be.done ? o(ve) : Promise.resolve(ve).then(P, H)
      }

      function Qr(i) {
        return function() {
          var o = this,
            d = arguments;
          return new Promise(function(P, H) {
            var ae = i.apply(o, d);

            function oe(ve) {
              yn(ae, P, H, oe, be, "next", ve)
            }

            function be(ve) {
              yn(ae, P, H, oe, be, "throw", ve)
            }
            oe(void 0)
          })
        }
      }

      function hn(i) {
        for (var o = 1; o < arguments.length; o++) {
          var d = arguments[o] != null ? Object(arguments[o]) : {},
            P = Object.keys(d);
          typeof Object.getOwnPropertySymbols == "function" && (P = P.concat(Object.getOwnPropertySymbols(d).filter(function(H) {
            return Object.getOwnPropertyDescriptor(d, H).enumerable
          }))), P.forEach(function(H) {
            Xr(i, H, d[H])
          })
        }
        return i
      }

      function Xr(i, o, d) {
        return o in i ? Object.defineProperty(i, o, {
          value: d,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : i[o] = d, i
      }
      var bn = function(o) {
        S.Tb(o), A(o)
      };
      try {
        t.g.build = hn({}, {
          branch: "release-Jun.08.2023-1686233137",
          isReleaseCandidate: "true",
          commit: "d3a9bade7e98158b3c1e53f37ebdc8a9fe84162d",
          env: "production",
          builtAt: 1686233546906,
          dashVersion: "5673f530b248c22f8661e2ef07052a3ceb5af9ad",
          versions: {
            "@cloudflare/app-dash": "25.153.0",
            node: "16.16.0",
            yarn: "3.2.2",
            webpack: "5.84.1"
          },
          staticDashHost: "https://static.dash.cloudflare.com"
        }, {
          isPreviewDeploy: U()
        }), Ae(), Ar(), t("../react/utils/api.js"), Jr(), K(), (0, B.Z)(), Ct(), (0, x.r)().then(function() {
          var i = Qr(regeneratorRuntime.mark(function o(d) {
            var P, H, ae, oe, be;
            return regeneratorRuntime.wrap(function(Me) {
              for (;;) switch (Me.prev = Me.next) {
                case 0:
                  return ae = (0, g.bh)(), oe = (d == null ? void 0 : d.data) || {}, ae.dispatch((0, v.mW)("user", oe == null ? void 0 : oe.user)), be = d == null || (P = d.data) === null || P === void 0 || (H = P.user) === null || H === void 0 ? void 0 : H.id, Ie(be), t.g.bootstrap = d, be && u().setUserId(be), (0, We.gm)() && u().setEnabled(!1), Me.next = 10, Qe();
                case 10:
                  return vt(), u().identify(hn({}, (0, r.getAttribution)(), {
                    locale: (0, y.r)(ae.getState()),
                    isCloudflare: !!(0, z.Jd)()
                  })), Me.abrupt("return", Or());
                case 13:
                case "end":
                  return Me.stop()
              }
            }, o, this)
          }));
          return function(o) {
            return i.apply(this, arguments)
          }
        }()).catch(bn)
      } catch (i) {
        bn(i)
      }
    },
    "../react/app/components/DeepLink/actions.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        BQ: function() {
          return v
        },
        Bh: function() {
          return l
        },
        CM: function() {
          return r
        },
        MF: function() {
          return n
        },
        WF: function() {
          return b
        },
        Wz: function() {
          return u
        },
        bk: function() {
          return S
        },
        fj: function() {
          return g
        },
        r4: function() {
          return E
        },
        zq: function() {
          return p
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
        n = {
          ADD_SITE: "deepLink/ADD_SITE",
          RESOLVING_START: "deepLink/RESOLVING_START",
          RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
          SELECT_ZONE: "SELECT_ZONE",
          SELECT_ACCOUNT: "SELECT_ACCOUNT",
          SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
          SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
          SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
          DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS"
        },
        p = (0, e.R)(n.ADD_SITE, function(y) {
          return {
            payload: y
          }
        }),
        E = (0, e.R)(n.RESOLVING_START),
        b = (0, e.R)(n.RESOLVING_COMPLETE),
        l = (0, e.R)(n.SELECT_ZONE, function(y) {
          return {
            payload: y
          }
        }),
        S = (0, e.R)(n.SELECT_ACCOUNT, function(y) {
          return {
            payload: y
          }
        }),
        v = (0, e.R)(n.SELECT_PAGES_PROJECT, function(y) {
          return {
            payload: y
          }
        }),
        r = (0, e.R)(n.SELECT_PAGES_DEPLOYMENT, function(y) {
          return {
            payload: y
          }
        }),
        u = (0, e.R)(n.SET_FILTERED_ACCOUNT_IDS, function(y) {
          return {
            accountIds: y
          }
        }),
        g = (0, e.R)(n.DELETE_FILTERED_ACCOUNT_IDS)
    },
    "../react/app/components/DeepLink/constants.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        BV: function() {
          return e
        },
        Dz: function() {
          return l
        },
        Fj: function() {
          return n
        },
        Kt: function() {
          return p
        },
        _h: function() {
          return S
        },
        s$: function() {
          return E
        }
      });
      var e = "to",
        n = "deepLinkQueryParams",
        p = "add",
        E = "multiSkuProducts",
        b = "/:account/billing/checkout",
        l = "/:account/:zone/billing/checkout",
        S = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
    },
    "../react/app/components/DeepLink/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        ZP: function() {
          return z
        },
        U: function() {
          return v.U
        },
        dd: function() {
          return v.dd
        },
        bk: function() {
          return S.bk
        },
        Bh: function() {
          return S.Bh
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t("webpack/sharing/consume/default/react-redux/react-redux"),
        p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
        E = t("../react/app/redux/index.ts"),
        b = t("../react/app/components/DeepLink/utils.ts"),
        l = t("../react/utils/bootstrap.ts"),
        S = t("../react/app/components/DeepLink/actions.ts"),
        v = t("../react/app/components/DeepLink/selectors.ts"),
        r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
        u = t.n(r);

      function g(W) {
        for (var I = 1; I < arguments.length; I++) {
          var U = arguments[I] != null ? Object(arguments[I]) : {},
            ie = Object.keys(U);
          typeof Object.getOwnPropertySymbols == "function" && (ie = ie.concat(Object.getOwnPropertySymbols(U).filter(function(re) {
            return Object.getOwnPropertyDescriptor(U, re).enumerable
          }))), ie.forEach(function(re) {
            T(W, re, U[re])
          })
        }
        return W
      }

      function y(W, I) {
        if (!(W instanceof I)) throw new TypeError("Cannot call a class as a function")
      }

      function C(W, I) {
        for (var U = 0; U < I.length; U++) {
          var ie = I[U];
          ie.enumerable = ie.enumerable || !1, ie.configurable = !0, "value" in ie && (ie.writable = !0), Object.defineProperty(W, ie.key, ie)
        }
      }

      function j(W, I, U) {
        return I && C(W.prototype, I), U && C(W, U), W
      }

      function T(W, I, U) {
        return I in W ? Object.defineProperty(W, I, {
          value: U,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : W[I] = U, W
      }
      var _ = function() {
        function W(I, U) {
          var ie = this;
          y(this, W), T(this, "deepLink", void 0), T(this, "legacyDeepLink", void 0), T(this, "resolvers", void 0), T(this, "startTime", Date.now()), T(this, "endTime", Date.now()), T(this, "_done", !1), T(this, "resolverStart", function(re) {
            ie.resolvers.set(re, {
              name: re,
              startTime: Date.now(),
              userActions: []
            })
          }), T(this, "resolverDone", function(re) {
            var Se = ie.resolvers.get(re);
            Se && (Se.endTime = Date.now(), ie.resolvers.set(re, Se))
          }), T(this, "resolverCancel", function(re) {
            ie.resolverDone(re), ie.cancel()
          }), T(this, "start", function() {
            ie.startTime = Date.now()
          }), T(this, "done", function() {
            ie.endTime = Date.now(), ie.track("Deep Link Success")
          }), T(this, "cancel", function() {
            ie.endTime = Date.now(), ie.track("Deep Link Cancel")
          }), T(this, "createUserActionTracker", function(re) {
            var Se = "NO_ACTION",
              ke = {
                actionType: Se,
                startTime: 0
              };
            return {
              start: function() {
                var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Se,
                  ye = ie.resolvers.get(re);
                ke.actionType = Y, ke.startTime = Date.now(), ye && ye.userActions.push(ke)
              },
              finish: function() {
                var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Se;
                ke.actionType = Y, ke.endTime = Date.now()
              },
              cancel: function() {
                var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Se;
                ke.actionType = Y, ke.endTime = Date.now(), ie.resolverCancel(re)
              }
            }
          }), this.deepLink = I, this.legacyDeepLink = U, this.resolvers = new Map
        }
        return j(W, [{
          key: "track",
          value: function(U) {
            try {
              if (this._done) return;
              this._done = !0;
              var ie = {
                  category: "routing",
                  deepLink: this.deepLink,
                  legacyDeepLink: this.legacyDeepLink,
                  totalUserActionsTime: 0,
                  totalTime: A(this.startTime, this.endTime),
                  totalCpuTime: A(this.startTime, this.endTime)
                },
                re = this.resolvers.size === 0 ? ie : Array.from(this.resolvers.values()).reduce(function(Se, ke) {
                  var je, Y = A(ke.startTime, ke.endTime),
                    ye = ke.userActions.reduce(function(Fe, le) {
                      var de = A(le.startTime, le.endTime);
                      return {
                        totalTime: Fe.totalTime + de,
                        actions: Fe.actions.set(le.actionType, de)
                      }
                    }, {
                      totalTime: 0,
                      actions: new Map
                    }),
                    xe = Y - ye.totalTime;
                  return g({}, Se, (je = {
                    totalTime: Se.totalTime + Y,
                    totalUserActionsTime: Se.totalUserActionsTime + ye.totalTime,
                    totalCpuTime: Se.totalCpuTime + xe
                  }, T(je, "".concat(ke.name, "ResolverTotalTime"), Y), T(je, "".concat(ke.name, "ResolverTotalCpuTime"), xe), T(je, "".concat(ke.name, "ResolverTotalUserActionsTime"), ye.totalTime), je), Array.from(ye.actions.keys()).reduce(function(Fe, le) {
                    return g({}, Fe, T({}, "".concat(ke.name, "Resolver/").concat(le), ye.actions.get(le)))
                  }, {}))
                }, g({}, ie, {
                  totalTime: 0,
                  totalCpuTime: 0
                }));
              u().sendEvent(U, re)
            } catch (Se) {
              console.error(Se)
            }
          }
        }]), W
      }();

      function A() {
        var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Date.now(),
          I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Date.now();
        return (I - W) / 1e3
      }
      var m = t("../react/app/components/DeepLink/constants.ts"),
        h = t("../react/common/hooks/useCachedState.ts"),
        O = t("../react/common/hooks/usePrevious.ts");

      function N(W) {
        for (var I = 1; I < arguments.length; I++) {
          var U = arguments[I] != null ? Object(arguments[I]) : {},
            ie = Object.keys(U);
          typeof Object.getOwnPropertySymbols == "function" && (ie = ie.concat(Object.getOwnPropertySymbols(U).filter(function(re) {
            return Object.getOwnPropertyDescriptor(U, re).enumerable
          }))), ie.forEach(function(re) {
            K(W, re, U[re])
          })
        }
        return W
      }

      function K(W, I, U) {
        return I in W ? Object.defineProperty(W, I, {
          value: U,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : W[I] = U, W
      }

      function B(W, I, U, ie, re, Se, ke) {
        try {
          var je = W[Se](ke),
            Y = je.value
        } catch (ye) {
          U(ye);
          return
        }
        je.done ? I(Y) : Promise.resolve(Y).then(ie, re)
      }

      function _e(W) {
        return function() {
          var I = this,
            U = arguments;
          return new Promise(function(ie, re) {
            var Se = W.apply(I, U);

            function ke(Y) {
              B(Se, ie, re, ke, je, "next", Y)
            }

            function je(Y) {
              B(Se, ie, re, ke, je, "throw", Y)
            }
            ke(void 0)
          })
        }
      }

      function Ee(W, I) {
        return D(W) || R(W, I) || pe(W, I) || ce()
      }

      function ce() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function pe(W, I) {
        if (!!W) {
          if (typeof W == "string") return L(W, I);
          var U = Object.prototype.toString.call(W).slice(8, -1);
          if (U === "Object" && W.constructor && (U = W.constructor.name), U === "Map" || U === "Set") return Array.from(W);
          if (U === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)) return L(W, I)
        }
      }

      function L(W, I) {
        (I == null || I > W.length) && (I = W.length);
        for (var U = 0, ie = new Array(I); U < I; U++) ie[U] = W[U];
        return ie
      }

      function R(W, I) {
        var U = W && (typeof Symbol != "undefined" && W[Symbol.iterator] || W["@@iterator"]);
        if (U != null) {
          var ie = [],
            re = !0,
            Se = !1,
            ke, je;
          try {
            for (U = U.call(W); !(re = (ke = U.next()).done) && (ie.push(ke.value), !(I && ie.length === I)); re = !0);
          } catch (Y) {
            Se = !0, je = Y
          } finally {
            try {
              !re && U.return != null && U.return()
            } finally {
              if (Se) throw je
            }
          }
          return ie
        }
      }

      function D(W) {
        if (Array.isArray(W)) return W
      }
      var $ = function(I) {
          var U, ie = I.children,
            re = (0, E.TZ)(),
            Se = (0, p.useHistory)(),
            ke = (0, O.Z)(Se.location.pathname),
            je = (0, n.useSelector)(v.dd),
            Y = (0, e.useState)(!0),
            ye = Ee(Y, 2),
            xe = ye[0],
            Fe = ye[1],
            le = (0, h.j)(void 0, {
              key: m.Fj
            }),
            de = Ee(le, 2),
            Pe = de[0],
            X = de[1],
            fe = (0, h.j)(void 0, {
              key: m.s$
            }),
            ee = Ee(fe, 2),
            Ue = ee[0],
            Ne = ee[1],
            Ye = (0, l.$8)(),
            Ke = new URLSearchParams(Se.location.search),
            $e = (0, b.mL)(Se.location.pathname, Ke),
            et = "";
          if (Ke.get(m.BV)) et = Ke.get(m.BV);
          else if (Pe) {
            var rt = new URLSearchParams(Pe);
            rt.get(m.BV) && (et = rt.get(m.BV), Ke = rt)
          }
          var De = (U = et) !== null && U !== void 0 ? U : $e;
          if (De && m._h.test(De)) {
            var me = Ke.getAll(m.Kt),
              he = JSON.stringify(me);
            me.length && he !== Ue && Ne(he), Ke.delete(m.Kt)
          }!Ye && !Pe && De && X(Ke.toString());
          var we = function() {
            var ze = _e(regeneratorRuntime.mark(function He() {
              var st, G;
              return regeneratorRuntime.wrap(function(J) {
                for (;;) switch (J.prev = J.next) {
                  case 0:
                    if (J.prev = 0, !((0, b.I3)(De) && Ye && !je)) {
                      J.next = 12;
                      break
                    }
                    return Pe && X(void 0), re.dispatch((0, S.r4)()), Fe(!0), J.next = 7, (0, b.py)(De, Fe, re, Se, ke, new _(De, $e ? "".concat(Se.location.pathname).concat(Se.location.search) : void 0));
                  case 7:
                    st = J.sent, Ke.delete(m.BV), G = Ke.toString(), Se.replace(N({}, Se.location, {
                      pathname: st,
                      search: G
                    })), re.dispatch((0, S.WF)());
                  case 12:
                    J.next = 18;
                    break;
                  case 14:
                    J.prev = 14, J.t0 = J.catch(0), re.dispatch((0, S.WF)()), console.error(J.t0);
                  case 18:
                    return J.prev = 18, Fe(!1), J.finish(18);
                  case 21:
                  case "end":
                    return J.stop()
                }
              }, He, this, [
                [0, 14, 18, 21]
              ])
            }));
            return function() {
              return ze.apply(this, arguments)
            }
          }();
          return (0, e.useEffect)(function() {
            we()
          }, [Se.location.pathname, Se.location.search, je]), (xe || (0, b.I3)(De)) && Ye ? null : ie
        },
        ne = $,
        Z = t("../react/app/components/DeepLink/reducer.ts"),
        z = ne
    },
    "../react/app/components/DeepLink/reducer.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        E: function() {
          return E
        },
        r: function() {
          return l
        }
      });
      var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        n = t.n(e),
        p = t("../react/app/components/DeepLink/actions.ts"),
        E = null,
        b = n().from({
          lastAction: E,
          isResolving: !1,
          filteredAccountIds: void 0
        });

      function l() {
        var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : b,
          v = arguments.length > 1 ? arguments[1] : void 0;
        if (v.type === p.MF.RESOLVING_COMPLETE) return b;
        if (v.type === p.MF.RESOLVING_START) return S.set("isResolving", !0);
        if (S.isResolving) {
          if (v.type === p.MF.RESOLVING_COMPLETE) return S.set("isResolving", !1);
          if (v.type === p.MF.SET_FILTERED_ACCOUNT_IDS) return S.set("filteredAccountIds", v.accountIds);
          if (v.type === p.MF.DELETE_FILTERED_ACCOUNT_IDS) return S.set("filteredAccountIds", void 0);
          var r = S;
          try {
            r = S.set("lastAction", v)
          } catch {
            r = S.set("lastAction", {
              type: v.type
            })
          }
          return r
        } else return S
      }
    },
    "../react/app/components/DeepLink/selectors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        U: function() {
          return p
        },
        dd: function() {
          return n
        },
        yI: function() {
          return e
        }
      });
      var e = function(b) {
          return b.deepLink.lastAction
        },
        n = function(b) {
          return b.deepLink.isResolving
        },
        p = function(b) {
          return b.deepLink.filteredAccountIds
        }
    },
    "../react/app/components/DeepLink/utils.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        I3: function() {
          return N
        },
        X1: function() {
          return h
        },
        mL: function() {
          return pe
        },
        py: function() {
          return Ee
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
        n = t("../react/app/components/DeepLink/reducer.ts"),
        p = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
        E = function(R) {
          return R.replace(p.Z.endsWithSlash, "")
        },
        b = function(R) {
          var D = E(R).split("/").slice(3);
          return D.length ? "/" + D.join("/") : ""
        },
        l = function(R) {
          var D = E(R).split("/").slice(2);
          return D.length ? "apps/".concat(D.join("/")) : "apps"
        },
        S = t("../react/app/components/DeepLink/selectors.ts"),
        v = t("../react/app/components/DeepLink/constants.ts"),
        r = t("../react/common/validators/index.js"),
        u = t("../react/common/utils/isTLDZone.ts");

      function g(L, R) {
        return _(L) || T(L, R) || C(L, R) || y()
      }

      function y() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function C(L, R) {
        if (!!L) {
          if (typeof L == "string") return j(L, R);
          var D = Object.prototype.toString.call(L).slice(8, -1);
          if (D === "Object" && L.constructor && (D = L.constructor.name), D === "Map" || D === "Set") return Array.from(L);
          if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D)) return j(L, R)
        }
      }

      function j(L, R) {
        (R == null || R > L.length) && (R = L.length);
        for (var D = 0, $ = new Array(R); D < R; D++) $[D] = L[D];
        return $
      }

      function T(L, R) {
        var D = L && (typeof Symbol != "undefined" && L[Symbol.iterator] || L["@@iterator"]);
        if (D != null) {
          var $ = [],
            ne = !0,
            Z = !1,
            z, W;
          try {
            for (D = D.call(L); !(ne = (z = D.next()).done) && ($.push(z.value), !(R && $.length === R)); ne = !0);
          } catch (I) {
            Z = !0, W = I
          } finally {
            try {
              !ne && D.return != null && D.return()
            } finally {
              if (Z) throw W
            }
          }
          return $
        }
      }

      function _(L) {
        if (Array.isArray(L)) return L
      }

      function A(L, R, D, $, ne, Z, z) {
        try {
          var W = L[Z](z),
            I = W.value
        } catch (U) {
          D(U);
          return
        }
        W.done ? R(I) : Promise.resolve(I).then($, ne)
      }

      function m(L) {
        return function() {
          var R = this,
            D = arguments;
          return new Promise(function($, ne) {
            var Z = L.apply(R, D);

            function z(I) {
              A(Z, $, ne, z, W, "next", I)
            }

            function W(I) {
              A(Z, $, ne, z, W, "throw", I)
            }
            z(void 0)
          })
        }
      }
      var h = function(R) {
          return (0, r.Lb)(R) && (R.split(".").length > 1 || (0, u.v)(R))
        },
        O = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment")]),
        N = function(R) {
          return typeof R == "string" && R.startsWith("/")
        },
        K = function(R, D) {
          return function($) {
            return new Promise(function(ne, Z) {
              D.start();
              var z = R.subscribe(function() {
                var W = (0, S.yI)(R.getState());
                W === n.E ? (D.cancel(), z(), Z("DeepLink: waitForAction out of context.")) : $(W) && (D.finish(W.type), z(), ne(W))
              })
            })
          }
        },
        B = function(R, D, $) {
          return function(ne, Z) {
            return new Promise(function(z, W) {
              $.start();
              var I = D.location.pathname;
              ne = new URL(ne, window.location.href).pathname, I !== ne && ($.cancel(), W(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "`.concat(ne, '", but on "').concat(I, '". You need to redirect to "').concat(ne, '", and unblockRouter in your Resolver, before you use this function.')));
              var U = R.subscribe(function() {
                var ie = (0, S.yI)(R.getState()),
                  re = D.location.pathname,
                  Se = new URLSearchParams(D.location.search),
                  ke = Se.get(v.BV);
                (re !== ne || !!ke) && ($.cancel(), U(), W('DeepLink: waitForPageAction user navigated away from "'.concat(ne, '" to "').concat(re).concat(ke ? D.location.search : "", '"'))), ie === n.E ? ($.cancel(), U(), W("DeepLink: waitForPageAction out of context.")) : Z(ie) && ($.finish(ie.type), U(), z(ie))
              })
            })
          }
        };

      function _e(L) {
        var R = [],
          D = L.split("?")[0].split("/"),
          $ = !0,
          ne = !1,
          Z = void 0;
        try {
          for (var z = D[Symbol.iterator](), W; !($ = (W = z.next()).done); $ = !0) {
            var I = W.value;
            I.length !== 0 && (I.startsWith(":") ? R.push({
              value: I.substring(1),
              type: "dynamic"
            }) : R.push({
              value: I,
              type: "static"
            }))
          }
        } catch (U) {
          ne = !0, Z = U
        } finally {
          try {
            !$ && z.return != null && z.return()
          } finally {
            if (ne) throw Z
          }
        }
        return R
      }

      function Ee(L, R, D, $, ne, Z) {
        return ce.apply(this, arguments)
      }

      function ce() {
        return ce = m(regeneratorRuntime.mark(function L(R, D, $, ne, Z, z) {
          var W, I, U, ie, re, Se, ke, je, Y, ye, xe, Fe, le, de;
          return regeneratorRuntime.wrap(function(X) {
            for (;;) switch (X.prev = X.next) {
              case 0:
                return z.start(), W = _e(R), X.next = 4, Promise.all([t.e(32375), t.e(72019), t.e(78839), t.e(77637), t.e(18013)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"));
              case 4:
                return I = X.sent.default, X.next = 7, I();
              case 7:
                U = X.sent, ie = {}, re = "", Se = !0, ke = !1, je = void 0, X.prev = 13, Y = W.entries()[Symbol.iterator]();
              case 15:
                if (Se = (ye = Y.next()).done) {
                  X.next = 36;
                  break
                }
                if (xe = g(ye.value, 2), Fe = xe[0], le = xe[1], le.type !== "static") {
                  X.next = 21;
                  break
                }
                re = [re, le.value].join("/"), X.next = 33;
                break;
              case 21:
                if (!(le.type === "dynamic" && O.is(le.value) && le.value in U)) {
                  X.next = 31;
                  break
                }
                return z.resolverStart(le.value), X.next = 25, U[le.value]({
                  deepLink: R,
                  blockRouter: function() {
                    return D(!0)
                  },
                  unblockRouter: function() {
                    return D(!1)
                  },
                  routerHistory: ne,
                  resolvedValues: ie,
                  store: $,
                  referringRoute: Z,
                  uri: {
                    currentPartIdx: Fe,
                    parts: W
                  },
                  waitForAction: K($, z.createUserActionTracker(le.value)),
                  waitForPageAction: B($, ne, z.createUserActionTracker(le.value))
                });
              case 25:
                de = X.sent, z.resolverDone(le.value), re = [re, de].join("/"), ie[le.value] = de, X.next = 33;
                break;
              case 31:
                throw z.cancel(), new Error("DeepLink: Resolver with name '".concat(le.value, "' is not supported."));
              case 33:
                Se = !0, X.next = 15;
                break;
              case 36:
                X.next = 42;
                break;
              case 38:
                X.prev = 38, X.t0 = X.catch(13), ke = !0, je = X.t0;
              case 42:
                X.prev = 42, X.prev = 43, !Se && Y.return != null && Y.return();
              case 45:
                if (X.prev = 45, !ke) {
                  X.next = 48;
                  break
                }
                throw je;
              case 48:
                return X.finish(45);
              case 49:
                return X.finish(42);
              case 50:
                return z.done(), X.abrupt("return", re);
              case 52:
              case "end":
                return X.stop()
            }
          }, L, this, [
            [13, 38, 42, 50],
            [43, , 45, 49]
          ])
        })), ce.apply(this, arguments)
      }

      function pe(L, R) {
        var D = ":account",
          $ = ":zone",
          ne = R.get("zone");
        if (ne) return R.delete("zone"), "/".concat(D, "/").concat($, "/").concat(ne);
        var Z = R.get("account");
        if (Z) return R.delete("account"), "/".concat(D, "/").concat(Z);
        if (L === "/overview") return "/".concat(D, "/").concat($);
        if (L === "/apps") return "/".concat(D, "/").concat($, "/").concat(l(L));
        for (var z = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"], W = 0; W < z.length; W++) {
          var I = z[W],
            U = I.length;
          if (L.startsWith(I) && (L.length === U || L[U] === "/")) return "/".concat(D, "/").concat($).concat(L)
        }
        switch (L) {
          case "/account/billing":
            return "/".concat(D, "/billing");
          case "/account/subscriptions":
            return "/".concat(D, "/billing/subscriptions");
          case "/account/virtualDNS":
            return "/".concat(D, "/configurations/dns-firewall");
          case "/account/audit-log":
            return "/".concat(D, "/audit-log");
          default:
            return null
        }
      }
    },
    "../react/app/components/ErrorBoundary.tsx": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
        E = t("../react/app/components/SomethingWrong.js"),
        b = t("../utils/sentry/lastSentEventId.ts"),
        l = function(v) {
          var r = v.sentryTag,
            u = v.children;
          return n().createElement(p.SV, {
            beforeCapture: function(y) {
              r && y.setTag("errorBoundary", r)
            },
            onError: function(y) {
              ({
                REDUX_LOGGER: void 0
              }).TESTING && t.g.logAppError(y)
            },
            fallback: function(y) {
              var C = y.error,
                j = y.eventId;
              if (C !== void 0 && !1) var T;
              var _ = b.e.getEventId() || j;
              return n().createElement(E.Z, {
                type: "page",
                error: C,
                eventId: _
              })
            }
          }, u)
        };
      M.Z = l
    },
    "../react/app/components/ErrorStatus.tsx": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/style-container/es/index.js");

      function E(r, u) {
        if (r == null) return {};
        var g = b(r, u),
          y, C;
        if (Object.getOwnPropertySymbols) {
          var j = Object.getOwnPropertySymbols(r);
          for (C = 0; C < j.length; C++) y = j[C], !(u.indexOf(y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(r, y) || (g[y] = r[y]))
        }
        return g
      }

      function b(r, u) {
        if (r == null) return {};
        var g = {},
          y = Object.keys(r),
          C, j;
        for (j = 0; j < y.length; j++) C = y[j], !(u.indexOf(C) >= 0) && (g[C] = r[C]);
        return g
      }
      var l = (0, p.createComponent)(function(r) {
        var u = r.margin;
        return u ? {} : {
          height: 300,
          tabletLegacy: {
            marginBottom: "-2.66rem"
          }
        }
      });
      l.displayName = "Height";
      var S = (0, p.createComponent)(function(r) {
        var u = r.theme,
          g = r.margin,
          y = r.size,
          C = y === void 0 ? 5 : y;
        return {
          display: "flex",
          color: u.colors.gray[3],
          height: g ? "auto" : "100%",
          padding: g ? 0 : u.space[C > 1 ? C - 2 : 0],
          margin: g,
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          fontSize: u.fontSizes[C]
        }
      });
      S.displayName = "Center";
      var v = function(u) {
        var g = u.children,
          y = E(u, ["children"]);
        return n().createElement(l, y, n().createElement(S, y, g))
      };
      M.Z = v
    },
    "../react/app/components/Footer.tsx": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Z: function() {
          return $
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
        E = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
        b = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
        l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
        S = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
        v = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
        r = t.n(v),
        u = t("../react/common/components/Apple/utils.tsx"),
        g = t("../react/utils/translator.tsx"),
        y = t("../../../../node_modules/moment/moment.js"),
        C = t.n(y),
        j = function() {
          var Z = C()().format("YYYY"),
            z = function(I) {
              r().sendEvent("follower icloud footer link", {
                category: "icloud registrar",
                link: I
              })
            };
          return n().createElement(T, {
            marginTop: "auto"
          }, n().createElement(_, null, n().createElement(A, null, n().createElement(m, null, "\xA9 ", Z, " Cloudflare, Inc."), n().createElement(m, null, n().createElement(h, null, n().createElement(O, {
            showOnDeskTop: !1
          }, n().createElement(N, {
            fontWeight: 600,
            href: "https://support.cloudflare.com/",
            onClick: function() {
              return z("Support")
            }
          }, n().createElement(g.cC, {
            id: "common.support"
          }))), n().createElement(O, null, n().createElement(N, {
            fontWeight: 600,
            href: "https://www.cloudflare.com/privacypolicy/",
            onClick: function() {
              return z("Privacy Policy")
            }
          }, n().createElement(g.cC, {
            id: "footer.privacy_policy"
          }))), n().createElement(O, null, n().createElement(N, {
            fontWeight: 600,
            href: "https://www.cloudflare.com/terms/",
            onClick: function() {
              return z("Terms of Use")
            }
          }, n().createElement(g.cC, {
            id: "apple.footer.terms_of_use"
          }))), n().createElement(O, null, n().createElement(N, {
            fontWeight: 600,
            href: "https://www.cloudflare.com/cookie-policy/",
            onClick: function() {
              return z("Cookie Preferences")
            }
          }, n().createElement(g.cC, {
            id: "apple.footer.cookie_preferences"
          }))), n().createElement(O, null, n().createElement(N, {
            fontWeight: 600,
            href: "https://www.cloudflare.com/trademark/",
            onClick: function() {
              return z("Trademark")
            }
          }, n().createElement(g.cC, {
            id: "apple.footer.trademark"
          })))), n().createElement(h, null, n().createElement(O, null, n().createElement(N, {
            fontWeight: 400,
            href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
            onClick: function() {
              return z("ICANN's Domain Name Registrants' Rights")
            }
          }, n().createElement(g.cC, {
            id: "apple.footer.icanns"
          }))))))))
        },
        T = (0, S.createComponent)(function(ne) {
          var Z = ne.theme,
            z = ne.marginTop;
          return {
            backgroundColor: "#1F1F1F",
            width: "100%",
            minHeight: "143px",
            marginTop: z
          }
        });
      T.displayName = "Bar";
      var _ = (0, S.createComponent)(function() {
        return {
          margin: "0 auto",
          maxWidth: "1000px"
        }
      });
      _.displayName = "CenteredContainer";
      var A = (0, S.createComponent)(function(ne) {
        var Z = ne.theme;
        return {
          desktop: {
            marginLeft: "70px",
            padding: "33px 0 0 0"
          },
          mobile: {
            padding: "33px ".concat(Z.space[3], "px")
          }
        }
      });
      A.displayName = "Container";
      var m = (0, S.createComponent)(function(ne) {
        var Z = ne.theme;
        return {
          width: "100%",
          color: Z.colors.white,
          fontSize: Z.fontSizes[1],
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          tablet: {
            flexDirection: "row"
          },
          desktop: {
            flexDirection: "row"
          }
        }
      });
      m.displayName = "Row";
      var h = (0, S.createComponent)(function(ne) {
        var Z = ne.theme;
        return {
          display: "flex",
          flexWrap: "wrap",
          marginTop: Z.space[3],
          desktop: {
            flexWrap: "nowrap"
          }
        }
      });
      h.displayName = "Section";
      var O = (0, S.createComponent)(function(ne) {
        var Z = ne.showOnDeskTop,
          z = Z === void 0 ? !0 : Z,
          W = ne.theme;
        return {
          color: W.colors.white,
          fontSize: W.fontSizes[1],
          height: "20px",
          display: z ? "flex" : "none",
          alignItems: "center",
          desktop: {
            display: "flex",
            "&:nth-child(2)": {
              marginLeft: W.space[3],
              "&::before": {
                display: "inline-block"
              }
            }
          },
          "&:not(:first-child)": {
            marginLeft: W.space[3],
            "&::before": {
              content: "'\xB7'",
              display: "block",
              position: "relative",
              left: "-8px",
              fontWeight: 800
            }
          },
          "&:nth-child(2)": {
            marginLeft: 0,
            "&::before": {
              display: "none"
            }
          }
        }
      });
      O.displayName = "Item";
      var N = (0, S.createStyledComponent)(function(ne) {
        var Z = ne.theme;
        return {
          textDecoration: "none",
          color: Z.colors.white,
          "&:hover": {
            color: Z.colors.white,
            textDecoration: "underline"
          }
        }
      }, "a");
      N.displayName = "Link";
      var K = j,
        B = t("../react/pages/welcome/routes.ts");

      function _e() {
        return _e = Object.assign || function(ne) {
          for (var Z = 1; Z < arguments.length; Z++) {
            var z = arguments[Z];
            for (var W in z) Object.prototype.hasOwnProperty.call(z, W) && (ne[W] = z[W])
          }
          return ne
        }, _e.apply(this, arguments)
      }

      function Ee(ne, Z) {
        if (ne == null) return {};
        var z = ce(ne, Z),
          W, I;
        if (Object.getOwnPropertySymbols) {
          var U = Object.getOwnPropertySymbols(ne);
          for (I = 0; I < U.length; I++) W = U[I], !(Z.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(ne, W) || (z[W] = ne[W]))
        }
        return z
      }

      function ce(ne, Z) {
        if (ne == null) return {};
        var z = {},
          W = Object.keys(ne),
          I, U;
        for (U = 0; U < W.length; U++) I = W[U], !(Z.indexOf(I) >= 0) && (z[I] = ne[I]);
        return z
      }
      var pe = 24,
        L = (0, S.createStyledComponent)(function() {
          return {
            textDecoration: "none",
            ":hover": {
              textDecoration: "underline"
            }
          }
        }, E.A);
      L.displayName = "StyledFooterLink";
      var R = function(Z) {
          var z = Z.onClick,
            W = Ee(Z, ["onClick"]);
          return n().createElement(L, _e({
            onClick: function(U) {
              r().sendEvent("navigate footer nav", {
                destinationPage: W.href
              }), z && z(U)
            }
          }, W))
        },
        D = function() {
          var Z, z, W = (0, p.useLocation)(),
            I = W.pathname,
            U = (0, b.qf)("dx-signup-redesign") === "illustration" && I === "/sign-up",
            ie = [B.d.root.pattern].some(function(re) {
              return (0, p.matchPath)(location.pathname, {
                path: re
              })
            });
          return (0, u.PP)() ? n().createElement(K, null) : U || ie ? null : n().createElement(E.$_, {
            bg: "background",
            borderTop: "1px solid",
            borderColor: "gray.8",
            py: 4,
            px: 3,
            mt: "auto"
          }, n().createElement(E.ZC, {
            display: "flex",
            flexWrap: "wrap",
            mx: "auto",
            maxWidth: "64rem"
          }, n().createElement(E.ZC, {
            mb: 3,
            width: [1 / 2, 1 / 5, 1 / 5]
          }, n().createElement(E.Dl, {
            fontSize: 2,
            ml: 0,
            listStyle: "none"
          }, n().createElement(E.Dt, {
            mb: 2
          }, (0, g.ZP)("footer.contact")), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://support.cloudflare.com"
          }, (0, g.ZP)("footer.contact_support"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/enterprise-service-request"
          }, (0, g.ZP)("footer.contact_sales"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "tel:+18889935273"
          }, (0, g.ZP)("footer.call_sales"))), n().createElement(E.Dd, {
            mt: 3
          }, n().createElement(E.ZC, {
            display: "flex",
            justifyContent: "flex-start"
          }, n().createElement(R, {
            "aria-label": (0, g.ZP)("footer.twitter_link_purpose"),
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://twitter.com/Cloudflare",
            mr: 1,
            height: "".concat(pe, "px")
          }, n().createElement(l.J, {
            type: "twitter",
            size: pe
          })), n().createElement(R, {
            "aria-label": (0, g.ZP)("footer.facebook_link_purpose"),
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.facebook.com/Cloudflare",
            mr: 1,
            height: "".concat(pe, "px")
          }, n().createElement(l.J, {
            type: "facebook",
            size: pe
          })), n().createElement(R, {
            "aria-label": (0, g.ZP)("footer.linked_in_link_purpose"),
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.linkedin.com/company/407222",
            mr: 1,
            height: "".concat(pe, "px")
          }, n().createElement(l.J, {
            type: "linkedin",
            size: pe
          })))))), n().createElement(E.ZC, {
            mb: 3,
            px: [0, 3, 3],
            width: [1 / 2, 1 / 5, 1 / 5]
          }, n().createElement(E.Dl, {
            fontSize: 2,
            ml: 0,
            listStyle: "none"
          }, n().createElement(E.Dt, {
            mb: 2
          }, (0, g.ZP)("footer.what_we_do")), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/plans"
          }, (0, g.ZP)("footer.plans"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/overview"
          }, (0, g.ZP)("footer.overview"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/features-cdn"
          }, (0, g.ZP)("footer.features"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/network-map"
          }, (0, g.ZP)("footer.network_map"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflareapps.com/apps"
          }, (0, g.ZP)("footer.apps"))))), n().createElement(E.ZC, {
            mb: 3,
            px: [0, 3, 3],
            width: [1 / 2, 1 / 5, 1 / 5]
          }, n().createElement(E.Dl, {
            fontSize: 2,
            ml: 0,
            listStyle: "none"
          }, n().createElement(E.Dt, {
            mb: 2
          }, (0, g.ZP)("footer.resources")), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://developers.cloudflare.com"
          }, (0, g.ZP)("footer.product_docs"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://blog.cloudflare.com"
          }, (0, g.ZP)("footer.blog"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/case-studies"
          }, (0, g.ZP)("footer.testimonials"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://partners.cloudflare.com"
          }, (0, g.ZP)("footer.hosting_partners"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/customers"
          }, (0, g.ZP)("footer.customers"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://api.cloudflare.com"
          }, (0, g.ZP)("footer.api"))))), n().createElement(E.ZC, {
            mb: 3,
            px: [0, 3, 3],
            width: [1 / 2, 1 / 5, 1 / 5],
            position: "relative"
          }, n().createElement("div", {
            style: {
              position: "absolute",
              top: "0",
              left: "0",
              height: "24px",
              width: "100%"
            },
            "aria-hidden": "true",
            title: "Current version: ".concat(((Z = window) === null || Z === void 0 || (z = Z.build) === null || z === void 0 ? void 0 : z.dashVersion) || "unknown")
          }), n().createElement(E.Dl, {
            fontSize: 2,
            ml: 0,
            listStyle: "none"
          }, n().createElement(E.Dt, {
            mb: 2
          }, (0, g.ZP)("footer.support")), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://support.cloudflare.com"
          }, (0, g.ZP)("footer.help_center"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://community.cloudflare.com"
          }, (0, g.ZP)("footer.community"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflarestatus.com"
          }, (0, g.ZP)("footer.system_status"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://support.cloudflare.com/hc/articles/360037345072"
          }, (0, g.ZP)("footer.videos"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/abuse"
          }, (0, g.ZP)("footer.trust_safety"))))), n().createElement(E.ZC, {
            mb: 3,
            width: [1 / 2, 1 / 5, 1 / 5]
          }, n().createElement(E.Dl, {
            fontSize: 2,
            ml: 0,
            listStyle: "none"
          }, n().createElement(E.Dt, {
            mb: 2
          }, (0, g.ZP)("footer.about_us")), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/people"
          }, (0, g.ZP)("footer.team"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/careers"
          }, (0, g.ZP)("footer.careers"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/press-center"
          }, (0, g.ZP)("footer.press"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/terms"
          }, (0, g.ZP)("footer.tos"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/subscriptionagreement/"
          }, (0, g.ZP)("footer.subs_agreement"))), n().createElement(E.Dd, {
            mb: 2
          }, n().createElement(R, {
            target: "_blank",
            rel: "noopener noreferrer",
            href: "https://www.cloudflare.com/privacypolicy/"
          }, (0, g.ZP)("footer.privacy_policy")))))))
        },
        $ = D
    },
    "../react/app/components/LoadingSuspense.tsx": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
        E = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
        b = t("../react/utils/translator.tsx"),
        l = t("../react/app/components/ErrorStatus.tsx"),
        S = t("../react/common/components/EmptyPage.js"),
        v = t("../react/common/hooks/suspenseHelpers.ts");

      function r(m, h) {
        return j(m) || C(m, h) || g(m, h) || u()
      }

      function u() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function g(m, h) {
        if (!!m) {
          if (typeof m == "string") return y(m, h);
          var O = Object.prototype.toString.call(m).slice(8, -1);
          if (O === "Object" && m.constructor && (O = m.constructor.name), O === "Map" || O === "Set") return Array.from(m);
          if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)) return y(m, h)
        }
      }

      function y(m, h) {
        (h == null || h > m.length) && (h = m.length);
        for (var O = 0, N = new Array(h); O < h; O++) N[O] = m[O];
        return N
      }

      function C(m, h) {
        var O = m && (typeof Symbol != "undefined" && m[Symbol.iterator] || m["@@iterator"]);
        if (O != null) {
          var N = [],
            K = !0,
            B = !1,
            _e, Ee;
          try {
            for (O = O.call(m); !(K = (_e = O.next()).done) && (N.push(_e.value), !(h && N.length === h)); K = !0);
          } catch (ce) {
            B = !0, Ee = ce
          } finally {
            try {
              !K && O.return != null && O.return()
            } finally {
              if (B) throw Ee
            }
          }
          return N
        }
      }

      function j(m) {
        if (Array.isArray(m)) return m
      }

      function T(m) {
        var h = (0, e.useState)(!1),
          O = r(h, 2),
          N = O[0],
          K = O[1];
        return (0, e.useEffect)(function() {
          var B = window.setTimeout(function() {
            return K(!0)
          }, m);
          return function() {
            return window.clearTimeout(B)
          }
        }, []), N
      }
      var _ = function(h) {
          var O = h.loadingTimeout,
            N = O === void 0 ? 1e3 : O,
            K = h.stillLoadingTimeout,
            B = K === void 0 ? 9e3 : K,
            _e = T(N),
            Ee = T(B);
          if ((0, v.nW)(), !_e && !Ee) return n().createElement(S.Z, null);
          var ce = Ee ? n().createElement(b.cC, {
            id: "common.still_loading"
          }) : _e ? n().createElement(b.cC, {
            id: "common.loading"
          }) : null;
          return n().createElement(l.Z, {
            size: 5
          }, n().createElement(E.ZC, {
            mr: 3
          }, n().createElement(p.g, {
            size: "2x"
          })), ce)
        },
        A = function(h) {
          var O = h.children;
          return n().createElement(e.Suspense, {
            fallback: n().createElement(_, null)
          }, O)
        };
      M.Z = A
    },
    "../react/app/components/SomethingWrong.js": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/prop-types/index.js"),
        E = t.n(p),
        b = t("../../../common/intl/intl-react/src/index.ts"),
        l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
        S = t("../node_modules/@cloudflare/component-button/es/index.js"),
        v = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
        r = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
        u = t.n(r),
        g = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
        y = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
        C = t("../react/app/components/Footer.tsx");

      function j(I) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? j = function(ie) {
          return typeof ie
        } : j = function(ie) {
          return ie && typeof Symbol == "function" && ie.constructor === Symbol && ie !== Symbol.prototype ? "symbol" : typeof ie
        }, j(I)
      }

      function T(I) {
        for (var U = 1; U < arguments.length; U++) {
          var ie = arguments[U] != null ? Object(arguments[U]) : {},
            re = Object.keys(ie);
          typeof Object.getOwnPropertySymbols == "function" && (re = re.concat(Object.getOwnPropertySymbols(ie).filter(function(Se) {
            return Object.getOwnPropertyDescriptor(ie, Se).enumerable
          }))), re.forEach(function(Se) {
            ce(I, Se, ie[Se])
          })
        }
        return I
      }

      function _(I, U, ie, re, Se, ke, je) {
        try {
          var Y = I[ke](je),
            ye = Y.value
        } catch (xe) {
          ie(xe);
          return
        }
        Y.done ? U(ye) : Promise.resolve(ye).then(re, Se)
      }

      function A(I) {
        return function() {
          var U = this,
            ie = arguments;
          return new Promise(function(re, Se) {
            var ke = I.apply(U, ie);

            function je(ye) {
              _(ke, re, Se, je, Y, "next", ye)
            }

            function Y(ye) {
              _(ke, re, Se, je, Y, "throw", ye)
            }
            je(void 0)
          })
        }
      }

      function m(I, U) {
        if (!(I instanceof U)) throw new TypeError("Cannot call a class as a function")
      }

      function h(I, U) {
        for (var ie = 0; ie < U.length; ie++) {
          var re = U[ie];
          re.enumerable = re.enumerable || !1, re.configurable = !0, "value" in re && (re.writable = !0), Object.defineProperty(I, re.key, re)
        }
      }

      function O(I, U, ie) {
        return U && h(I.prototype, U), ie && h(I, ie), I
      }

      function N(I, U) {
        return U && (j(U) === "object" || typeof U == "function") ? U : Ee(I)
      }

      function K(I) {
        return K = Object.setPrototypeOf ? Object.getPrototypeOf : function(ie) {
          return ie.__proto__ || Object.getPrototypeOf(ie)
        }, K(I)
      }

      function B(I, U) {
        if (typeof U != "function" && U !== null) throw new TypeError("Super expression must either be null or a function");
        I.prototype = Object.create(U && U.prototype, {
          constructor: {
            value: I,
            writable: !0,
            configurable: !0
          }
        }), U && _e(I, U)
      }

      function _e(I, U) {
        return _e = Object.setPrototypeOf || function(re, Se) {
          return re.__proto__ = Se, re
        }, _e(I, U)
      }

      function Ee(I) {
        if (I === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return I
      }

      function ce(I, U, ie) {
        return U in I ? Object.defineProperty(I, U, {
          value: ie,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : I[U] = ie, I
      }
      var pe = (0, l.createComponent)(function(I) {
        var U = I.type;
        return {
          height: U !== "fullscreen" ? 451 : "75vh",
          tabletLegacy: {
            marginBottom: "-2.66rem"
          }
        }
      });
      pe.displayName = "Height";
      var L = (0, l.createComponent)(function(I) {
        var U = I.theme,
          ie = I.margin,
          re = I.size,
          Se = re === void 0 ? 6 : re;
        return {
          display: "flex",
          flexFlow: "column",
          color: U.colors.gray[3],
          height: ie ? "auto" : "100%",
          padding: ie ? 0 : U.space[Se > 1 ? Se - 2 : 0],
          margin: ie,
          justifyContent: "center",
          alignItems: "center"
        }
      });
      L.displayName = "Center";
      var R = (0, l.createComponent)(function() {
        return {
          textAlign: "left"
        }
      });
      R.displayName = "Inner";
      var D = (0, l.createComponent)(function() {
        return {
          textAlign: "right"
        }
      });
      D.displayName = "Right";
      var $ = (0, l.createComponent)(function(I) {
        var U = I.theme;
        return {
          fontSize: U.fontSizes[6]
        }
      });
      $.displayName = "MainMessage";
      var ne = (0, l.createComponent)(function(I) {
        var U = I.theme;
        return {
          fontSize: U.fontSizes[4]
        }
      });
      ne.displayName = "SubMessage";
      var Z = (0, l.createComponent)(function(I) {
        var U = I.theme;
        return {
          fontSize: U.fontSizes[3]
        }
      });
      Z.displayName = "Submitted";
      var z = (0, l.createComponent)(function(I) {
        var U = I.theme;
        return {
          width: "100%",
          height: 125,
          marginTop: U.space[4],
          padding: U.space[2]
        }
      }, "textarea");
      z.displayName = "Textarea";
      var W = function(I) {
        B(U, I);

        function U() {
          var ie, re;
          m(this, U);
          for (var Se = arguments.length, ke = new Array(Se), je = 0; je < Se; je++) ke[je] = arguments[je];
          return re = N(this, (ie = K(U)).call.apply(ie, [this].concat(ke))), ce(Ee(Ee(re)), "state", {
            value: "",
            submitted: !1
          }), ce(Ee(Ee(re)), "handleTextareaChange", function(Y) {
            re.setState({
              value: Y.target.value
            })
          }), ce(Ee(Ee(re)), "sendErrToSentry10", A(regeneratorRuntime.mark(function Y() {
            var ye, xe, Fe, le, de, Pe, X, fe, ee;
            return regeneratorRuntime.wrap(function(Ne) {
              for (;;) switch (Ne.prev = Ne.next) {
                case 0:
                  return Ne.prev = 0, de = ((ye = window) === null || ye === void 0 || (xe = ye.bootstrap) === null || xe === void 0 || (Fe = xe.data) === null || Fe === void 0 || (le = Fe.user) === null || le === void 0 ? void 0 : le.id) || "Unknown", Pe = re.props.eventId || v.eW(), X = {
                    name: de,
                    email: "".concat(de, "@userid.com"),
                    comments: re.state.value,
                    eventId: Pe,
                    url: window.location.href,
                    prevUrl: document.referrer,
                    date: Date.now(),
                    dashVersion: window.build.dashVersion,
                    build: T({}, window.build)
                  }, fe = "".concat("https://platform.dash.cloudflare.com", "/sentry/user-feedback"), Ne.next = 7, fetch(fe, {
                    method: "POST",
                    headers: {
                      Accept: "*/*",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(X)
                  });
                case 7:
                  ee = Ne.sent, ee.ok && re.setState({
                    submitted: !0,
                    value: ""
                  }, function() {
                    var Ye = 5;
                    setTimeout(function() {
                      return window.location.href = "/"
                    }, Ye * 1e3)
                  }), Ne.next = 14;
                  break;
                case 11:
                  Ne.prev = 11, Ne.t0 = Ne.catch(0), console.error(Ne.t0);
                case 14:
                case "end":
                  return Ne.stop()
              }
            }, Y, this, [
              [0, 11]
            ])
          }))), ce(Ee(Ee(re)), "handleSubmit", function() {
            re.state.value !== "" && re.sendErrToSentry10()
          }), ce(Ee(Ee(re)), "renderContent", function(Y) {
            return n().createElement(b.oc, null, function(ye) {
              return n().createElement(pe, {
                type: Y
              }, n().createElement(L, null, n().createElement(R, null, n().createElement($, null, ye.t("error.internal_issues")), n().createElement(ne, null, ye.t("error.help_us")), n().createElement(z, {
                name: "comment",
                value: re.state.textareaValue,
                onChange: function(Fe) {
                  return re.handleTextareaChange(Fe)
                },
                disabled: re.state.submitted,
                placeholder: ye.t("error.give_feedback")
              }), n().createElement(D, null, !re.state.submitted && n().createElement(S.zx, {
                onClick: re.handleSubmit,
                type: "primary"
              }, ye.t("common.submit")), re.state.submitted && n().createElement(Z, null, ye.t("error.feedback_sent"))))))
            })
          }), re
        }
        return O(U, [{
          key: "componentDidMount",
          value: function() {
            var re = this.props.error;
            console.error("SomethingWrong: ".concat(re))
          }
        }, {
          key: "render",
          value: function() {
            var re = this.props.type;
            return re === "fullscreen" ? n().createElement("div", null, n().createElement(g.h4, null, n().createElement(r.Link, {
              to: "/"
            }, n().createElement(y.TR, null))), this.renderContent(re), n().createElement(C.Z, null)) : this.renderContent(re)
          }
        }]), U
      }(n().Component);
      W.propTypes = {
        type: E().oneOf(["fullscreen", "page"]),
        error: E().oneOfType([E().string, E().object]),
        eventId: E().string
      }, M.Z = W
    },
    "../react/app/providers/storeContainer.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        bh: function() {
          return Ct
        }
      });
      var e = t("../../../../node_modules/redux/es/redux.js"),
        n = t("../../../../node_modules/redux-thunk/es/index.js"),
        p = t("../../../../node_modules/redux-persist/es/index.js"),
        E = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
        b = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
        l = t("../react/app/redux/makeReducer.js"),
        S = t("../../../../node_modules/connected-react-router/esm/index.js"),
        v = t("../react/history.js"),
        r = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        u = t.n(r),
        g = r.static.from({
          data: void 0,
          errors: null,
          isRequesting: !1,
          isErrored: !1
        }),
        y = function(f, c) {
          var k = c.type,
            V = c.meta;
          return V && V.method === "put" && k.indexOf("membership") === 0 ? g : f
        },
        C = (0, l.ZP)("invite").on("default", y),
        j = {
          reducer: C
        },
        T = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
        _ = t("../react/common/actionTypes.ts"),
        A = function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u().from({
              isRequesting: !1,
              isErrored: !1,
              isFinished: !1,
              securityToken: null,
              errors: null
            }),
            c = arguments.length > 1 ? arguments[1] : void 0;
          switch (c.type) {
            case "ONBOARDING_SIGNUP_REQUEST":
              return u().merge(f, {
                isRequesting: !0,
                isFinished: !1,
                isErrored: !1,
                errors: null
              });
            case "ONBOARDING_SIGNUP_SUCCESS":
              return u().merge(f, {
                isRequesting: !1,
                isFinished: !0,
                isErrored: !1
              });
            case "ONBOARDING_SIGNUP_FAILURE":
              return u().merge(f, {
                isRequesting: !1,
                isErrored: !0,
                errors: c.errors
              });
            case "ONBOARDING_SECURITY_TOKEN_UPDATE":
              return u().update(f, "securityToken", function() {
                return c.token
              })
          }
          return (0, T.h)(c, f)
        },
        m = {
          apikey: (0, l.ZP)(_.Yc.APIKEY),
          apitoken: (0, l.ZP)(_.Yc.APITOKEN),
          emailrollback: (0, l.ZP)(_.Yc.EMAIL_ROLLBACK),
          deleteuser: (0, l.ZP)(_.Yc.DELETE_USER),
          forgotpass: (0, l.ZP)(_.Yc.FORGOT_PASS),
          login: (0, l.ZP)(_.Yc.LOGIN),
          origincakey: (0, l.ZP)(_.Yc.ORIGIN_CA_KEY),
          signup: (0, l.ZP)(_.Yc.SIGNUP)
        },
        h;

      function O(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }
      var N = {
        reducer: (0, e.combineReducers)((h = {
          userCreation: A
        }, O(h, _.Yc.APIKEY, m.apikey), O(h, _.Yc.APITOKEN, m.apitoken), O(h, _.Yc.EMAIL_ROLLBACK, m.emailrollback), O(h, _.Yc.DELETE_USER, m.deleteuser), O(h, _.Yc.FORGOT_PASS, m.forgotpass), O(h, _.Yc.LOGIN, m.login), O(h, _.Yc.ORIGIN_CA_KEY, m.origincakey), O(h, _.Yc.SIGNUP, m.signup), h))
      };

      function K() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, r.static)({}),
          f = arguments.length > 1 ? arguments[1] : void 0;
        switch (f.type) {
          case _.Li:
            var c = f.userId,
              k = f.accountId,
              V = f.timeStamp;
            return r.static.setIn(x, [c, k], {
              lastSeen: V
            });
          default:
            return x
        }
      }

      function B(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            _e(x, V, c[V])
          })
        }
        return x
      }

      function _e(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }

      function Ee() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          f = arguments.length > 1 ? arguments[1] : void 0,
          c = "__ACTIVE__".concat(f.activeKey);
        switch (f.type) {
          case _.HI:
            return B({}, x, _e({}, c, f.activeValue));
          case _.s1:
            return B({}, x, _e({}, c, void 0));
          default:
            return x
        }
      }

      function ce(x) {
        return D(x) || R(x) || L(x) || pe()
      }

      function pe() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function L(x, f) {
        if (!!x) {
          if (typeof x == "string") return $(x, f);
          var c = Object.prototype.toString.call(x).slice(8, -1);
          if (c === "Object" && x.constructor && (c = x.constructor.name), c === "Map" || c === "Set") return Array.from(x);
          if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return $(x, f)
        }
      }

      function R(x) {
        if (typeof Symbol != "undefined" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x)
      }

      function D(x) {
        if (Array.isArray(x)) return $(x)
      }

      function $(x, f) {
        (f == null || f > x.length) && (f = x.length);
        for (var c = 0, k = new Array(f); c < f; c++) k[c] = x[c];
        return k
      }
      var ne = function() {
          return ce(Array(8)).map(function(f) {
            return Math.floor(Math.random() * 16).toString(16)
          }).join("")
        },
        Z = [];

      function z(x, f) {
        if (x === void 0) return Z;
        switch (f.type) {
          case _.Np: {
            var c = f.payload,
              k = f.options,
              V = c.ModalComponent,
              Re = c.props;
            return x = k.replace ? Z : x, ce(x).concat([{
              id: ne(),
              ModalComponent: V,
              props: Re
            }])
          }
          case _.gM: {
            var Ze = f.payload.ModalComponent;
            if (Ze) {
              var Be = x.findIndex(function(qe) {
                return qe.ModalComponent === Ze
              });
              return Be >= 0 ? x.slice(0, Be) : x
            } else return x.slice(0, -1)
          }
          default:
            return x
        }
      }

      function W(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            I(x, V, c[V])
          })
        }
        return x
      }

      function I(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }

      function U() {
        var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          f = arguments.length > 1 ? arguments[1] : void 0,
          c = "__TOGGLE__".concat(f.toggleKey);
        switch (f.type) {
          case _.lV:
            return W({}, x, I({}, c, !0));
          case _.Cm:
            return W({}, x, I({}, c, !1));
          default:
            return x
        }
      }
      var ie = {
        notifications: []
      };

      function re(x, f) {
        switch (x === void 0 && (x = ie), f.type) {
          case _.Ng:
            return Object.assign({}, x, {
              notifications: x.notifications.concat(f.notification)
            });
          case _.Cz:
            return Object.assign({}, x, {
              notifications: x.notifications.filter(function(c) {
                return c.id !== f.notificationId
              })
            });
          default:
            return x
        }
      }

      function Se(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            ke(x, V, c[V])
          })
        }
        return x
      }

      function ke(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }
      var je = function(f) {
          return (0, l.ZP)(f).on("success", function(c, k, V) {
            var Re, Ze, Be = V.meta,
              qe = Be.params || {},
              at = qe.accountId,
              tt = qe.zoneId,
              lt = qe.dateOnly,
              mt = lt === void 0 ? !1 : lt,
              nt = "",
              ct = {},
              Je = Se({}, (Re = c.paginationData) === null || Re === void 0 || (Ze = Re.options) === null || Ze === void 0 ? void 0 : Ze.editedDate);
            c.data.forEach(function(gt) {
              var Tt = gt.id,
                Pt = gt.allocation,
                ue = gt.edited_date;
              ct[Tt] = Pt.value, ue > nt && (nt = ue)
            }), Je[at || tt] = nt;
            var At = {
              options: {
                editedDate: Je
              }
            };
            return mt ? Se({}, c, {
              paginationData: At
            }) : Se({}, c, {
              paginationData: At,
              data: ct
            })
          })
        },
        Y = (0, e.combineReducers)({
          account: je("accountEntitlements"),
          zone: je("zoneEntitlements")
        }),
        ye = t("../react/app/components/DeepLink/reducer.ts"),
        xe = t("../react/pages/onboarding/components/guide/reducer.ts"),
        Fe = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

      function le(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            de(x, V, c[V])
          })
        }
        return x
      }

      function de(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }
      var Pe = function(f, c) {
          var k = c.meta;
          return k && k.method === "delete" && !f[k.entityType] ? f : (0, Fe.uW)(f, c)
        },
        X = {
          access: (0, e.combineReducers)({
            accessOrganizations: (0, l.ZP)("organizations").modifyInitialState(function(x) {
              return le({}, x, {
                needsHydration: !0,
                data: {
                  auth_domain: "",
                  name: "",
                  login_design: {}
                }
              })
            }).on("success", function(x, f) {
              return le({}, x, {
                data: Array.isArray(x == null ? void 0 : x.data) ? f == null ? void 0 : f.data : x == null ? void 0 : x.data,
                needsHydration: !1
              })
            }).on("error", function(x) {
              return le({}, x, {
                needsHydration: !1
              })
            })
          }),
          accountAccess: K,
          accounts: (0, l.ZP)("accounts"),
          application: (0, e.combineReducers)({
            active: Ee,
            modals: z,
            toggles: U
          }),
          deepLink: ye.r,
          entitlements: Y,
          entities: Pe,
          gates: b.vq,
          notifications: re,
          onboarding: N.reducer,
          onboardingGuide: xe.F,
          userCommPreferences: (0, l.ZP)("userCommPreferences"),
          userDetails: (0, l.ZP)("userDetails"),
          invite: j.reducer,
          membership: (0, l.ZP)("membership"),
          memberships: (0, l.ZP)("memberships").on("success", function(x, f, c) {
            return c.meta.method === "delete" ? le({}, x, {
              data: f.data.filter(function(k) {
                return k !== c.payload
              })
            }) : x
          }),
          filteredMemberships: (0, l.ZP)("filteredMemberships"),
          router: (0, S.iz)(v.Z),
          user: (0, l.ZP)("user"),
          zone: (0, l.ZP)("zone"),
          zoneFlags: (0, l.ZP)("zoneFlags"),
          zoneSubscription: (0, l.ZP)("zoneSubscription"),
          zoneSubscriptions: (0, l.ZP)("zoneSubscriptions"),
          zones: (0, l.ZP)("zones"),
          zonesRoot: (0, l.ZP)("zonesRoot"),
          zonesAccount: (0, l.ZP)("zonesAccount")
        },
        fe = t("../react/app/redux/normalizer.js"),
        ee = t("../../../../node_modules/@sentry/react/esm/redux.js"),
        Ue = t("../react/common/selectors/zoneSelectors.ts"),
        Ne = t("../../../../node_modules/object.pick/index.js"),
        Ye = t.n(Ne);

      function Ke(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            $e(x, V, c[V])
          })
        }
        return x
      }

      function $e(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }
      var et = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
        rt = function(f) {
          var c = Ye()(f, et),
            k = (0, Ue.nA)(f);
          return Ke({}, c, {
            accountTwoFa: f.profile && f.profile.twoFactor,
            currentZone: Ye()(k, ["plan", "type"])
          })
        },
        De = function(f) {
          var c = f.type,
            k = f.meta;
          return {
            type: c,
            entityType: k && k.entityType
          }
        },
        me = t("../react/app/reducerRegistry.js"),
        he = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
        we = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
        ze = t("../react/common/constants/index.ts"),
        He = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
        st = t("../react/app/redux/makeAction.js"),
        G = t("../react/common/actions/membershipActions.ts"),
        Q = regeneratorRuntime.mark(te),
        J = "get";

      function te(x) {
        var f, c, k;
        return regeneratorRuntime.wrap(function(Re) {
          for (;;) switch (Re.prev = Re.next) {
            case 0:
              return f = {
                entityType: x.entityType,
                method: J
              }, Re.prev = 1, Re.next = 4, (0, we.gw)(200);
            case 4:
              return Re.next = 6, (0, we.gz)((0, st.dJ)({
                type: "".concat(x.entityType, ".start"),
                meta: f
              }));
            case 6:
              return Re.next = 8, (0, we.RE)(He[J], x.url, x.params[0]);
            case 8:
              return c = Re.sent, k = c && c.body, x.type === ze.UM.MEMBERSHIPS_ROOT_REQUESTED && (k = (0, G.ct)({
                payload: k.result
              })), Re.next = 13, (0, we.gz)((0, st.Oy)({
                type: "".concat(x.entityType, ".success"),
                payload: k,
                meta: {
                  entityType: x.entityType,
                  method: J
                }
              }, {}, x.params, {}, c));
            case 13:
              Re.next = 20;
              break;
            case 15:
              return Re.prev = 15, Re.t0 = Re.catch(1), Re.next = 19, (0, we.gz)((0, st.$J)({
                type: "".concat(x.entityType, ".error"),
                payload: Re.t0,
                error: !0,
                meta: f
              }, {}, x.params, {}, Re.t0));
            case 19:
              throw Re.t0;
            case 20:
            case "end":
              return Re.stop()
          }
        }, Q, this, [
          [1, 15]
        ])
      }
      var Ae = [(0, we.Fm)(ze.UM.ZONES_ROOT_REQUESTED, te), (0, we.Fm)(ze.UM.ZONES_ACCOUNT_REQUESTED, te), (0, we.Fm)(ze.UM.ZONES_HEADER_REQUESTED, te), (0, we.Fm)(ze.UM.MEMBERSHIPS_ROOT_REQUESTED, te), (0, we.Fm)(ze.UM.ACCOUNT_MEMBERS_REQUESTED, te)],
        Ie = t("../react/pages/apps/marketplace/config/sagas.ts"),
        We = regeneratorRuntime.mark(Te);

      function Ge(x) {
        return q(x) || ge(x) || it(x) || Ve()
      }

      function Ve() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function it(x, f) {
        if (!!x) {
          if (typeof x == "string") return F(x, f);
          var c = Object.prototype.toString.call(x).slice(8, -1);
          if (c === "Object" && x.constructor && (c = x.constructor.name), c === "Map" || c === "Set") return Array.from(x);
          if (c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return F(x, f)
        }
      }

      function ge(x) {
        if (typeof Symbol != "undefined" && x[Symbol.iterator] != null || x["@@iterator"] != null) return Array.from(x)
      }

      function q(x) {
        if (Array.isArray(x)) return F(x)
      }

      function F(x, f) {
        (f == null || f > x.length) && (f = x.length);
        for (var c = 0, k = new Array(f); c < f; c++) k[c] = x[c];
        return k
      }

      function Te() {
        return regeneratorRuntime.wrap(function(f) {
          for (;;) switch (f.prev = f.next) {
            case 0:
              return f.next = 2, (0, we.$6)(Ge(Ae).concat(Ge(Ie.y)));
            case 2:
            case "end":
              return f.stop()
          }
        }, We, this)
      }
      var Le = t("../react/app/redux/processActionMiddleware.js"),
        Qe = t("../../../../node_modules/connected-react-router/esm/middleware.js"),
        w = t("../../../../node_modules/is-promise/index.js"),
        Ce = t.n(w);

      function ft(x) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ft = function(c) {
          return typeof c
        } : ft = function(c) {
          return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
        }, ft(x)
      }

      function vt(x) {
        for (var f = 1; f < arguments.length; f++) {
          var c = arguments[f] != null ? Object(arguments[f]) : {},
            k = Object.keys(c);
          typeof Object.getOwnPropertySymbols == "function" && (k = k.concat(Object.getOwnPropertySymbols(c).filter(function(V) {
            return Object.getOwnPropertyDescriptor(c, V).enumerable
          }))), k.forEach(function(V) {
            yt(x, V, c[V])
          })
        }
        return x
      }

      function yt(x, f, c) {
        return f in x ? Object.defineProperty(x, f, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : x[f] = c, x
      }
      var ht = {
          key: "cf-redux-store",
          storage: E.Z,
          whitelist: ["accountAccess", "invite"]
        },
        bt = (0, he.ZP)(),
        Ot = function(f) {
          var c = f.dispatch;
          return function(k) {
            return function(V) {
              return Ce()(V) ? V.then(function(Re) {
                return c(Re)
              }) : k(V)
            }
          }
        },
        _t = [(0, Qe.Z)(v.Z), Ot, bt, n.Z, Le.Z, fe.qR],
        Et = function(f) {
          return (0, p.Wq)(ht, vt({}, X, f))
        };

      function St() {
        var x = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
          f = e.compose,
          c = f(e.applyMiddleware.apply(void 0, _t), ee.w({
            actionTransformer: De,
            stateTransformer: rt
          })),
          k = {},
          V = (0, e.createStore)(Et(me.Z.getReducers()), k, c);
        bt.run(Te), (0, p.p5)(V);
        var Re = t.g.bootstrap || {},
          Ze = Re.data || {};
        return V.dispatch((0, Fe.mW)("user", Ze.user)), V
      }
      var ut;
      me.Z.setChangeListener(function(x) {
        var f;
        ut && ((f = ut) === null || f === void 0 ? void 0 : f.replaceReducer) && (ut.replaceReducer(Et(x)), (0, p.p5)(ut))
      });

      function Ct() {
        return ut || (ut = St()), ut
      }
    },
    "../react/app/reducerRegistry.js": function(Oe, M, t) {
      "use strict";

      function e(v) {
        for (var r = 1; r < arguments.length; r++) {
          var u = arguments[r] != null ? Object(arguments[r]) : {},
            g = Object.keys(u);
          typeof Object.getOwnPropertySymbols == "function" && (g = g.concat(Object.getOwnPropertySymbols(u).filter(function(y) {
            return Object.getOwnPropertyDescriptor(u, y).enumerable
          }))), g.forEach(function(y) {
            n(v, y, u[y])
          })
        }
        return v
      }

      function n(v, r, u) {
        return r in v ? Object.defineProperty(v, r, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : v[r] = u, v
      }

      function p(v, r) {
        if (!(v instanceof r)) throw new TypeError("Cannot call a class as a function")
      }

      function E(v, r) {
        for (var u = 0; u < r.length; u++) {
          var g = r[u];
          g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(v, g.key, g)
        }
      }

      function b(v, r, u) {
        return r && E(v.prototype, r), u && E(v, u), v
      }
      var l = function() {
          function v() {
            p(this, v), this.listener = null, this.reducers = {}
          }
          return b(v, [{
            key: "getReducers",
            value: function() {
              return e({}, this.reducers)
            }
          }, {
            key: "emitChange",
            value: function() {
              this.listener && this.listener(this.getReducers())
            }
          }, {
            key: "register",
            value: function(u, g) {
              this.reducers = e({}, this.reducers, n({}, u, g)), this.emitChange()
            }
          }, {
            key: "registerAll",
            value: function(u) {
              this.reducers = e({}, this.reducers, u), this.emitChange()
            }
          }, {
            key: "setChangeListener",
            value: function(u) {
              this.listener = u
            }
          }]), v
        }(),
        S = new l;
      M.Z = S
    },
    "../react/app/redux/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        TZ: function() {
          return p
        },
        UM: function() {
          return b
        },
        ZS: function() {
          return E
        }
      });
      var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
        n = t.n(e),
        p = function() {
          return (0, e.useStore)()
        },
        E = function() {
          return p().getState()
        },
        b = function() {
          return (0, e.useDispatch)()
        }
    },
    "../react/app/redux/makeAction.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        $J: function() {
          return g
        },
        Oy: function() {
          return u
        },
        SC: function() {
          return v
        },
        ZP: function() {
          return y
        },
        dJ: function() {
          return r
        }
      });
      var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
        n = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
        p = t.n(n);

      function E(C) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(T) {
          return typeof T
        } : E = function(T) {
          return T && typeof Symbol == "function" && T.constructor === Symbol && T !== Symbol.prototype ? "symbol" : typeof T
        }, E(C)
      }

      function b(C) {
        for (var j = 1; j < arguments.length; j++) {
          var T = arguments[j] != null ? Object(arguments[j]) : {},
            _ = Object.keys(T);
          typeof Object.getOwnPropertySymbols == "function" && (_ = _.concat(Object.getOwnPropertySymbols(T).filter(function(A) {
            return Object.getOwnPropertyDescriptor(T, A).enumerable
          }))), _.forEach(function(A) {
            l(C, A, T[A])
          })
        }
        return C
      }

      function l(C, j, T) {
        return j in C ? Object.defineProperty(C, j, {
          value: T,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : C[j] = T, C
      }
      var S = b({}, n),
        v = function(j, T, _) {
          var A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
            m = j === "delete" ? "del" : j.toLowerCase();
          return _ && m !== "del" && (A.body = _), S[m](T, A)
        },
        r = function(j, T) {
          return j.meta.params = T, j
        },
        u = function(j, T, _, A, m) {
          var h = m.body,
            O = h === void 0 ? {} : h,
            N = O.result,
            K = O.messages,
            B = O.result_info,
            _e = Object.values(T);
          if (j.meta.method === "delete") {
            var Ee = _e[_e.length - 1];
            j.meta.id = E(Ee) === "object" ? Ee.id : Ee
          }
          return j.payload = N, K && (j.meta.messages = K), _e.length && (j.meta.params = T), B && (j.meta.paginationData = {
            info: B,
            actionParameters: _e,
            options: _[0],
            insertionOffset: 0
          }), j
        },
        g = function(j, T, _, A, m) {
          return j.payload = m && m.body && m.body.errors, j.meta.messages = m && m.body && m.body.messages, j.meta.params = T, j
        };

      function y(C, j, T, _) {
        var A = (0, e.RM)(C, j, T, _).apiFetch(v).on("start", r).on("success", u).on("error", g),
          m = A.mock;
        return A.mock = function(h) {
          return m(function() {
            var O = h.apply(void 0, arguments),
              N = O && E(O) === "object" && "result" in O;
            return N ? O : {
              result: O
            }
          }), A
        }, A
      }
    },
    "../react/app/redux/makeActionCreator.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        C: function() {
          return v
        }
      });
      var e = t("../react/app/redux/makeAction.js");

      function n(u) {
        return l(u) || b(u) || E(u) || p()
      }

      function p() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function E(u, g) {
        if (!!u) {
          if (typeof u == "string") return S(u, g);
          var y = Object.prototype.toString.call(u).slice(8, -1);
          if (y === "Object" && u.constructor && (y = u.constructor.name), y === "Map" || y === "Set") return Array.from(u);
          if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return S(u, g)
        }
      }

      function b(u) {
        if (typeof Symbol != "undefined" && u[Symbol.iterator] != null || u["@@iterator"] != null) return Array.from(u)
      }

      function l(u) {
        if (Array.isArray(u)) return S(u)
      }

      function S(u, g) {
        (g == null || g > u.length) && (g = u.length);
        for (var y = 0, C = new Array(g); y < g; y++) C[y] = u[y];
        return C
      }

      function v(u, g) {
        return {
          get: function(C) {
            for (var j = arguments.length, T = new Array(j > 1 ? j - 1 : 0), _ = 1; _ < j; _++) T[_ - 1] = arguments[_];
            return (0, e.ZP)(u, "get", r(C, T), g)
          },
          post: function(C) {
            for (var j = arguments.length, T = new Array(j > 1 ? j - 1 : 0), _ = 1; _ < j; _++) T[_ - 1] = arguments[_];
            return (0, e.ZP)(u, "post", r(C, T), g)
          },
          delete: function(C) {
            for (var j = arguments.length, T = new Array(j > 1 ? j - 1 : 0), _ = 1; _ < j; _++) T[_ - 1] = arguments[_];
            return (0, e.ZP)(u, "delete", r(C, T), g)
          },
          put: function(C) {
            for (var j = arguments.length, T = new Array(j > 1 ? j - 1 : 0), _ = 1; _ < j; _++) T[_ - 1] = arguments[_];
            return (0, e.ZP)(u, "put", r(C, T), g)
          },
          patch: function(C) {
            for (var j = arguments.length, T = new Array(j > 1 ? j - 1 : 0), _ = 1; _ < j; _++) T[_ - 1] = arguments[_];
            return (0, e.ZP)(u, "patch", r(C, T), g)
          }
        }
      }

      function r(u, g) {
        for (var y = "", C = n(u.raw), j = n(g); C.length > 0 || j.length > 0;) {
          var T = C.shift(),
            _ = j.shift();
          y += T !== void 0 ? T : "", y += _ !== void 0 ? "(".concat(_, ")") : ""
        }
        return y
      }
    },
    "../react/app/redux/makeReducer.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        ZP: function() {
          return _
        }
      });
      var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        n = t.n(e),
        p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
        E = t("../../../../node_modules/lodash/clone.js"),
        b = t.n(E);

      function l(A) {
        return u(A) || r(A) || v(A) || S()
      }

      function S() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function v(A, m) {
        if (!!A) {
          if (typeof A == "string") return g(A, m);
          var h = Object.prototype.toString.call(A).slice(8, -1);
          if (h === "Object" && A.constructor && (h = A.constructor.name), h === "Map" || h === "Set") return Array.from(A);
          if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return g(A, m)
        }
      }

      function r(A) {
        if (typeof Symbol != "undefined" && A[Symbol.iterator] != null || A["@@iterator"] != null) return Array.from(A)
      }

      function u(A) {
        if (Array.isArray(A)) return g(A)
      }

      function g(A, m) {
        (m == null || m > A.length) && (m = A.length);
        for (var h = 0, O = new Array(m); h < m; h++) O[h] = A[h];
        return O
      }
      var y = e.static.from([]);

      function C(A, m, h) {
        var O = h.meta,
          N = O.paginationData,
          K = O.messages,
          B = e.static.set(A, "messages", K || y);
        return N ? e.static.merge(B, {
          paginationData: N
        }) : B
      }

      function j(A, m, h) {
        var O = h.meta,
          N = O.errors,
          K = O.messages,
          B = {
            messages: K || y
          };
        return N && (B.errors = N), e.static.merge(A, B)
      }

      function T(A, m) {
        var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
          O = A.data;
        if (m.type === "".concat(h.insertDelete, ".success")) {
          var N = m.meta.method,
            K = 0,
            B = A;
          if (N === "post") {
            var _e = O ? [m.payload].concat(l(O)) : [m.payload];
            B = e.static.set(B, "data", _e), K = 1
          } else if (N === "delete" && O && O.includes(m.meta.id)) {
            var Ee = O.filter(function(pe) {
              return pe !== m.meta.id
            });
            B = e.static.set(B, "data", Ee), K = -1
          }
          return K && A.paginationData && (B = e.static.setIn(B, ["paginationData", "insertionOffset"], A.paginationData.insertionOffset + K)), B
        }
        if (m.type === "cfForceUpdate") {
          var ce = e.static.set(A, "data", b()(O));
          return ce
        }
        return A
      }

      function _(A) {
        var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return m.errorKey = "errors", (0, p.j3)(A, m).modifyInitialState(function(h) {
          return e.static.set(h, "messages", y)
        }).on("success", C).on("error", j).on("default", T)
      }
    },
    "../react/app/redux/normalizer.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        P1: function() {
          return r
        },
        jQ: function() {
          return S
        },
        qR: function() {
          return u
        },
        uc: function() {
          return v
        }
      });
      var e = t("../react/pages/home/alerts/config.tsx"),
        n = t("../react/pages/workers/entityTypes.ts"),
        p = t("../react/pages/email/types.ts"),
        E = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
        b = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        l = t.n(b),
        S = b.static.from([{
          entityType: "accessOrganization"
        }, {
          entityType: "access-temp-data"
        }, {
          entityType: "accessPolicy"
        }, {
          entityType: "accessGroup"
        }, {
          entityType: "accessPolicies",
          to: "accessPolicy"
        }, {
          entityType: "accessGroups",
          to: "accessGroup"
        }, {
          entityType: "accessAppLauncher"
        }, {
          entityType: "accounts"
        }, {
          entityType: e.w8.alert
        }, {
          entityType: e.w8.alerts,
          to: e.w8.alert
        }, {
          entityType: e.w8.integrations
        }, {
          entityType: e.w8.pagerDuty
        }, {
          entityType: e.w8.pagerDutyRequest
        }, {
          entityType: e.w8.webhook
        }, {
          entityType: e.w8.webhooks
        }, {
          entityType: e.w8.availableAlerts
        }, {
          entityType: e.w8.availableAlertsForProduct
        }, {
          entityType: e.w8.deliveryMechanisms
        }, {
          entityType: "accountsDetailed"
        }, {
          entityType: "accountSubscriptions",
          to: "accountSubscription"
        }, {
          entityType: "zoneSubscriptions",
          to: "zoneSubscription"
        }, {
          entityType: "accountSubscription"
        }, {
          entityType: "accountSubscriptionCancellationReason"
        }, {
          entityType: "accountLegoContract"
        }, {
          entityType: "accountMember"
        }, {
          entityType: "accountMembers",
          to: "accountMember"
        }, {
          entityType: "accountSingle"
        }, {
          entityType: "accountRoles"
        }, {
          entityType: "accountHealthChecks"
        }, {
          entityType: "advancedTCPProtection"
        }, {
          entityType: "advancedTCPAllowlistItem"
        }, {
          entityType: "advancedTCPAllowlist",
          to: "advancedTCPAllowlistItem"
        }, {
          entityType: "advancedTCPPrefix"
        }, {
          entityType: "advancedTCPPrefixes",
          to: "advancedTCPPrefix"
        }, {
          entityType: "amp"
        }, {
          entityType: "apiShields",
          to: "apiShield"
        }, {
          entityType: "apiShield"
        }, {
          entityType: "apiToken"
        }, {
          entityType: "apiTokens",
          to: "apiToken"
        }, {
          entityType: "apiTokenZones",
          to: "zone"
        }, {
          entityType: "apiTokenFormZones",
          to: "zone"
        }, {
          entityType: "apiTokenSearchZones",
          to: "zone"
        }, {
          entityType: "billing.usageGraphQL"
        }, {
          entityType: "billingAccount"
        }, {
          entityType: "billingPlans"
        }, {
          entityType: "billingProfile"
        }, {
          entityType: "billingTransactions"
        }, {
          entityType: "billingOutstandingTransactions",
          to: "billingTransactions"
        }, {
          entityType: "billingBadDebt",
          nestedProps: {
            invoices: "billingTransactions"
          }
        }, {
          entityType: "billingNextBilling"
        }, {
          entityType: "billableUsage"
        }, {
          entityType: "certificate"
        }, {
          entityType: "certificates",
          to: "certificate"
        }, {
          entityType: "colosStats"
        }, {
          entityType: "certificatePack"
        }, {
          entityType: "certificatePacks",
          to: "certificatePack"
        }, {
          entityType: "certificateOrder"
        }, {
          entityType: "certificateValidationStatus"
        }, {
          entityType: "clientCertificate"
        }, {
          entityType: "clientCertificates",
          to: "clientCertificate"
        }, {
          entityType: "customerMetadataBoundary"
        }, {
          entityType: "customHostname"
        }, {
          entityType: "customHostnames",
          to: "customHostname"
        }, {
          entityType: "customCSR"
        }, {
          entityType: "customCSRs",
          to: "customCSR"
        }, {
          entityType: "dnsFirewallCluster"
        }, {
          entityType: "dnsFirewallClusters",
          to: "dnsFirewallCluster"
        }, {
          entityType: "dnsRecord"
        }, {
          entityType: "dnsRecords",
          to: "dnsRecord"
        }, {
          entityType: "dnsRecordsImport"
        }, {
          entityType: "dnsAcl"
        }, {
          entityType: "dnsAcls",
          to: "dnsAcl"
        }, {
          entityType: "dnsTsig"
        }, {
          entityType: "dnsTsigs",
          to: "dnsTsig"
        }, {
          entityType: "dnsOutgoingZoneTransfers"
        }, {
          entityType: "dnsMaster"
        }, {
          entityType: "dnsMasters",
          to: "dnsMaster"
        }, {
          entityType: "dpa"
        }, {
          entityType: "filter"
        }, {
          entityType: "filteredMemberships"
        }, {
          entityType: "firewallRule",
          nestedProps: {
            filter: "filter"
          }
        }, {
          entityType: "firewallRules",
          to: "firewallRule"
        }, {
          entityType: "greTunnel"
        }, {
          entityType: "greTunnels",
          to: "greTunnel"
        }, {
          entityType: "interconnect"
        }, {
          entityType: "interconnects",
          to: "interconnect"
        }, {
          entityType: "healthCheck"
        }, {
          entityType: "healthChecks",
          to: "healthCheck"
        }, {
          entityType: "hostnameRegions"
        }, {
          entityType: "http2ToOrigin"
        }, {
          entityType: "httpStats"
        }, {
          entityType: "httpStatsOverview"
        }, {
          entityType: "identityProvider"
        }, {
          entityType: "identityProviders",
          to: "identityProvider"
        }, {
          entityType: "ipAccessRule"
        }, {
          entityType: "ipAccessRules",
          to: "ipAccessRule"
        }, {
          entityType: "ipPrefix"
        }, {
          entityType: "ipPrefixes",
          to: "ipPrefix"
        }, {
          entityType: "ipsecTunnel"
        }, {
          entityType: "ipsecTunnels",
          to: "ipsecTunnel"
        }, {
          entityType: "pcapBucket"
        }, {
          entityType: "pcapBucketValidation",
          to: "pcapBucket"
        }, {
          entityType: "pcapBuckets",
          to: "pcapBucket"
        }, {
          entityType: "pcapCapture"
        }, {
          entityType: "pcapCaptures",
          to: "pcapCapture"
        }, {
          entityType: "networkMonitoringConfiguration"
        }, {
          entityType: "networkMonitoringRule"
        }, {
          entityType: "networkMonitoringRules",
          to: "networkMonitoringRule"
        }, {
          entityType: "loadBalancer",
          nestedProps: {
            default_pools: "pool",
            fallback_pool: "pool",
            region_pools: "pool",
            country_pools: "pool",
            pop_pools: "pool"
          }
        }, {
          entityType: "languagePreference"
        }, {
          entityType: "loadBalancers",
          to: "loadBalancer"
        }, {
          entityType: "accountLogpushJob"
        }, {
          entityType: "accountLogpushJobs",
          to: "accountLogpushJob"
        }, {
          entityType: "logpushJob"
        }, {
          entityType: "logpushJobs",
          to: "logpushJob"
        }, {
          entityType: "logpushDestinationExists"
        }, {
          entityType: "logpushDestinationValidation"
        }, {
          entityType: "logpushSentOwnershipToken"
        }, {
          entityType: "logpushOwnershipValidation"
        }, {
          entityType: "logpushFieldsAll"
        }, {
          entityType: "logpushFieldsDefault"
        }, {
          entityType: "staticRoute"
        }, {
          entityType: "staticRoutes",
          to: "staticRoute"
        }, {
          entityType: "membership",
          to: "memberships"
        }, {
          entityType: "memberships",
          nestedProps: {
            account: "accounts"
          }
        }, {
          entityType: "monitor"
        }, {
          entityType: "monitors",
          to: "monitor"
        }, {
          entityType: "mTlsHosts"
        }, {
          entityType: "nel"
        }, {
          entityType: "normalizationSetting"
        }, {
          entityType: "paymentMethod"
        }, {
          entityType: "paymentMethods",
          to: "paymentMethod"
        }, {
          entityType: "pool",
          nestedProps: {
            monitor: "monitor"
          }
        }, {
          entityType: "pools",
          to: "pool"
        }, {
          entityType: "prefixDelegation"
        }, {
          entityType: "prefixDelegations",
          to: "prefixDelegation"
        }, {
          entityType: "prefixServices",
          idProp: "prefix_id"
        }, {
          entityType: "organization"
        }, {
          entityType: "originCertificate"
        }, {
          entityType: "originCertificates",
          to: "originCertificate"
        }, {
          entityType: "pageRule"
        }, {
          entityType: "pageRules",
          to: "pageRule"
        }, {
          entityType: "purgeCache"
        }, {
          entityType: "sanitizeRuleset"
        }, {
          entityType: "sanitizeRulesetOverrides"
        }, {
          entityType: "sanitizeRulesets",
          to: "sanitizeRuleset"
        }, {
          entityType: "serviceToken"
        }, {
          entityType: "serviceTokens",
          to: "serviceToken"
        }, {
          entityType: "shortLivedCertificate"
        }, {
          entityType: "shortLivedCertificates",
          to: "shortLivedCertificate"
        }, {
          entityType: "shareStats"
        }, {
          entityType: "spectrumApp"
        }, {
          entityType: "spectrumApps",
          to: "spectrumApp"
        }, {
          entityType: "sslRecommenderPreference"
        }, {
          entityType: "sslRecommendation"
        }, {
          entityType: "totalTLSSettings"
        }, {
          entityType: "certificatePacksByHosts"
        }, {
          entityType: "customHostnamesByHosts"
        }, {
          entityType: "synProtectionRule"
        }, {
          entityType: "synProtectionRules",
          to: "synProtectionRule"
        }, {
          entityType: "tcpFlowProtectionRule"
        }, {
          entityType: "tcpFlowProtectionRules",
          to: "tcpFlowProtectionRule"
        }, {
          entityType: "user",
          nestedProps: {
            organizations: "userOrganization"
          }
        }, {
          entityType: "userOrganization"
        }, {
          entityType: "userAgentRule"
        }, {
          entityType: "userAgentRules",
          to: "userAgentRule"
        }, {
          entityType: "userSessions"
        }, {
          entityType: "regionalHostname",
          idProp: "hostname"
        }, {
          entityType: "regionalHostnames",
          to: "regionalHostname"
        }, {
          entityType: "revokeSession"
        }, {
          entityType: "securityKey"
        }, {
          entityType: "securityKeys"
        }, {
          entityType: "rateLimit"
        }, {
          entityType: "rateLimits",
          to: "rateLimit"
        }, {
          entityType: "auditLogs"
        }, {
          entityType: "userCommPreferences"
        }, {
          entityType: "userDetails"
        }, {
          entityType: "workerRoutes"
        }, {
          entityType: "zone"
        }, {
          entityType: "singleZone",
          to: "zone"
        }, {
          entityType: "zoneSubscription"
        }, {
          entityType: "recheckNameservers"
        }, {
          entityType: "abuseUrls"
        }, {
          entityType: "unreachability"
        }, {
          entityType: "zoneHold"
        }, {
          entityType: "abuseReview"
        }, {
          entityType: "zones",
          to: "zone"
        }, {
          entityType: "zonesRoot",
          to: "zone"
        }, {
          entityType: "zonesAccount",
          to: "zone"
        }, {
          entityType: "zoneMarketingCampaigns"
        }, {
          entityType: "zoneRuleset"
        }, {
          entityType: "zoneRulesets"
        }, {
          entityType: "zoneRulesetsEnabled"
        }, {
          entityType: "zoneRulesetDLPOverride",
          to: "zoneRuleset"
        }, {
          entityType: "zoneRulesetOverride",
          to: "zoneRuleset"
        }, {
          entityType: "zoneMasters"
        }, {
          entityType: "zoneUiConfig"
        }, {
          entityType: "zoneLockdown"
        }, {
          entityType: "zoneLockdowns",
          to: "zoneLockdown"
        }, {
          entityType: "argoGeoAnalytics"
        }, {
          entityType: "argoGlobalAnalytics"
        }, {
          entityType: "dnsAnalyticsTopNxDomainRecords"
        }, {
          entityType: "dnsAnalyticsTopRecords"
        }, {
          entityType: "dnsAnalyticsTSByRecordType"
        }, {
          entityType: "dnsAnalyticsTSByResponseCode"
        }, {
          entityType: "geographyDnsAnalyticsNoErrorPerColo"
        }, {
          entityType: "geographyDnsAnalyticsNxDomainPerColo"
        }, {
          entityType: "geographyDnsAnalyticsPerColo"
        }, {
          entityType: "geographyHttpAnalytics"
        }, {
          entityType: "h2Prioritization"
        }, {
          entityType: "imageResizing"
        }, {
          entityType: "rateLimitingAnalytics"
        }, {
          entityType: "rulesets"
        }, {
          entityType: "rumRule"
        }, {
          entityType: "rumRuleset"
        }, {
          entityType: "rumSiteTag"
        }, {
          entityType: "rumRedirectToOnboarding"
        }, {
          entityType: "rumSiteInfo"
        }, {
          entityType: "rumSiteInfoList"
        }, {
          entityType: "rumSiteInfoTagList"
        }, {
          entityType: "rumSiteInfoZoneList"
        }, {
          entityType: "rumFeature"
        }, {
          entityType: "performanceHttpAnalytics"
        }, {
          entityType: "csamScanner"
        }, {
          entityType: "alwaysOnline"
        }, {
          entityType: "coveoCategoryResults"
        }, {
          entityType: "phoneSupportTwoFactor"
        }, {
          entityType: "supportOpenTickets"
        }, {
          entityType: "ticket"
        }, {
          entityType: "phoneSupportOTP"
        }, {
          entityType: "helperbotDiagnostics"
        }, {
          entityType: "chinaNetwork"
        }, {
          entityType: "automaticPlatformOptimization"
        }, {
          entityType: "pageShieldScript"
        }, {
          entityType: "pageShieldScripts",
          to: "pageShieldScript"
        }, {
          entityType: "pageShieldConnection"
        }, {
          entityType: "pageShieldConnections",
          to: "pageShieldConnection"
        }, {
          entityType: "pageShieldPolicy"
        }, {
          entityType: "pageShieldPolicies",
          to: "pageShieldPolicy"
        }, {
          entityType: "securityHttpAnalytics"
        }, {
          entityType: "speedTesting"
        }, {
          entityType: "webhook"
        }, {
          entityType: "webhooks",
          to: "webhook"
        }, {
          entityType: n.D.route
        }, {
          entityType: n.D.routes,
          to: n.D.route
        }, {
          entityType: "domainGroup"
        }, {
          entityType: "domainGroups",
          to: "domainGroup"
        }, {
          entityType: "domainGroupsAllDomain"
        }, {
          entityType: "domainGroupManagerZones",
          to: "zone"
        }, {
          entityType: "domainGroupFormZones",
          to: "zone"
        }, {
          entityType: "HTTPApplicationVersion"
        }, {
          entityType: "HTTPApplicationVersions",
          to: "HTTPApplicationVersion"
        }, {
          entityType: "HTTPApplication",
          nestedProps: {
            versions: "HTTPApplicationVersions"
          }
        }, {
          entityType: "HTTPApplications",
          to: "HTTPApplication"
        }, {
          entityType: "HTTPApplicationConvertedId"
        }, {
          entityType: "WAFMigrationStatus"
        }, {
          entityType: "HTTPApplicationsRuleset"
        }, {
          entityType: "HTTPApplicationsRule"
        }, {
          entityType: "inviteMembersSearchZones",
          to: "zone"
        }, {
          entityType: "inviteMembersZones",
          to: "zone"
        }, {
          entityType: "waitingRoom"
        }, {
          entityType: "waitingRooms",
          to: "waitingRoom"
        }, {
          entityType: "waitingRoomEvent"
        }, {
          entityType: "waitingRoomEvents",
          to: "waitingRoomEvent"
        }, {
          entityType: "zoneVersion"
        }, {
          entityType: "zoneVersions",
          to: "zoneVersion"
        }, {
          entityType: "zoneApplication",
          nestedProps: {
            versions: "zoneVersions"
          }
        }, {
          entityType: "zoneApplications",
          to: "zoneApplication"
        }, {
          entityType: "convertedZoneVersion"
        }, {
          entityType: "WAFMigrationStatus"
        }, {
          entityType: "zoneVersioningRuleset"
        }, {
          entityType: "environment"
        }, {
          entityType: "railgun"
        }, {
          entityType: "railguns",
          to: "railgun"
        }, {
          entityType: "tenants"
        }, {
          entityType: "accountTypes"
        }, {
          entityType: "permissionGroups"
        }, {
          entityType: "zoneLevelAccessPolicy"
        }, {
          entityType: "zoneLevelAccessPolicies",
          to: "zoneLevelAccessPolicy"
        }, {
          entityType: "oAuthConsentApp"
        }, {
          entityType: "oAuthConsentApps",
          to: "oAuthConsentApp"
        }, {
          entityType: "wafPackages"
        }, {
          entityType: "wafPackageGroup"
        }, {
          entityType: "wafPackageGroups",
          to: "wafPackageGroup"
        }, {
          entityType: "wafRule"
        }, {
          entityType: "wafRules",
          to: "wafRule"
        }, {
          entityType: "web3Hostname"
        }, {
          entityType: "web3Hostnames",
          to: "web3Hostname"
        }, {
          entityType: "web3Blocklist"
        }, {
          entityType: "web3Blocklists",
          to: "web3Blocklist"
        }, {
          entityType: "zaraz"
        }, {
          entityType: p.BB.catchAllRule,
          idProp: "tag"
        }, {
          entityType: p.BB.rule,
          idProp: "tag"
        }, {
          entityType: p.BB.rules,
          to: p.BB.rule
        }, {
          entityType: p.BB.dstAddress,
          idProp: "tag"
        }, {
          entityType: p.BB.dstAddresses,
          to: p.BB.dstAddress
        }, {
          entityType: p.BB.dnsRecord,
          idProp: "tag"
        }, {
          entityType: p.BB.dnsRecords,
          to: p.BB.dnsRecord
        }, {
          entityType: p.BB.zone,
          idProp: "tag"
        }]),
        v = function(y) {
          return y.entities
        },
        r = function() {
          for (var y = arguments.length, C = new Array(y), j = 0; j < y; j++) C[j] = arguments[j];
          return E.P1.apply(void 0, [S, v].concat(C))
        },
        u = (0, E.QB)(S)
    },
    "../react/app/redux/processActionMiddleware.js": function(Oe, M, t) {
      "use strict";
      var e = t("../react/app/redux/normalizer.js"),
        n = ".success",
        p = function() {
          var b = new Map,
            l = function(r) {
              var u = e.jQ.find(function(g) {
                return g.entityType === r
              });
              return u && (u.to ? u.to : u.entityType)
            },
            S = function() {
              return function(r) {
                return function(u) {
                  if (u.type.endsWith(n)) {
                    var g = u.type.substring(0, u.type.length - n.length),
                      y = l(g),
                      C = b.get(y);
                    return r(C ? C(u) : u)
                  }
                  return r(u)
                }
              }
            };
          return S.on = function(v, r) {
            var u = b.get(v);
            b.set(v, function(g) {
              return r(u ? u(g) : g)
            })
          }, S
        };
      M.Z = p()
    },
    "../react/app/redux/utils.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        F: function() {
          return p
        },
        _: function() {
          return n
        }
      });
      var e = t("../react/app/redux/makeAction.js"),
        n = function(b) {
          return function(l, S, v) {
            return (0, e.SC)(l, S, v, {
              hideErrorAlert: !0
            }).catch(b)
          }
        },
        p = function(b) {
          return function(l) {
            if (l.status === b) return l;
            throw l
          }
        }
    },
    "../react/common/actionTypes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Cm: function() {
          return l
        },
        Cz: function() {
          return n
        },
        HI: function() {
          return S
        },
        Li: function() {
          return r
        },
        Ng: function() {
          return e
        },
        Np: function() {
          return p
        },
        Yc: function() {
          return g
        },
        gM: function() {
          return E
        },
        lV: function() {
          return b
        },
        s1: function() {
          return v
        }
      });
      var e = "NOTIFICATION_OPEN",
        n = "NOTIFICATION_CLOSE",
        p = "MODAL_OPEN",
        E = "MODAL_CLOSE",
        b = "TOGGLE_ON",
        l = "TOGGLE_OFF",
        S = "SET_ACTIVE",
        v = "CLEAR_ACTIVE",
        r = "UPDATE_ACCOUNT_ACCESS",
        u = "UPDATE_LANGUAGE_PREFERENCE",
        g;
      (function(y) {
        y.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", y.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", y.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", y.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", y.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", y.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", y.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", y.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", y.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE"
      })(g || (g = {}))
    },
    "../react/common/actions/membershipActions.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        AX: function() {
          return j
        },
        YT: function() {
          return g
        },
        ct: function() {
          return r
        },
        d6: function() {
          return y
        },
        kt: function() {
          return C
        }
      });
      var e = t("../react/app/redux/makeActionCreator.ts"),
        n = t("../react/common/constants/index.ts");

      function p() {
        var T = l(["/memberships?no-permissions=1"]);
        return p = function() {
          return T
        }, T
      }

      function E() {
        var T = l(["/memberships/", ""]);
        return E = function() {
          return T
        }, T
      }

      function b() {
        var T = l(["/memberships?no-permissions=1"]);
        return b = function() {
          return T
        }, T
      }

      function l(T, _) {
        return _ || (_ = T.slice(0)), Object.freeze(Object.defineProperties(T, {
          raw: {
            value: Object.freeze(_)
          }
        }))
      }

      function S(T) {
        for (var _ = 1; _ < arguments.length; _++) {
          var A = arguments[_] != null ? Object(arguments[_]) : {},
            m = Object.keys(A);
          typeof Object.getOwnPropertySymbols == "function" && (m = m.concat(Object.getOwnPropertySymbols(A).filter(function(h) {
            return Object.getOwnPropertyDescriptor(A, h).enumerable
          }))), m.forEach(function(h) {
            v(T, h, A[h])
          })
        }
        return T
      }

      function v(T, _, A) {
        return _ in T ? Object.defineProperty(T, _, {
          value: A,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : T[_] = A, T
      }
      var r = function(_) {
          var A = _.payload.map(function(m) {
            return S({}, m, {
              membershipId: m.id,
              id: m.account.id
            })
          });
          return S({}, _, {
            payload: A
          })
        },
        u = function(_) {
          var A = r(_);
          return Array.isArray(A.payload) ? S({}, _, {
            payload: A.payload[0]
          }) : S({}, _, {
            payload: null
          })
        },
        g = (0, e.C)("memberships").get(b()).on("success", r),
        y = (0, e.C)("memberships").delete(E(), "id"),
        C = function() {
          for (var _ = arguments.length, A = new Array(_), m = 0; m < _; m++) A[m] = arguments[m];
          return {
            type: n.UM.MEMBERSHIPS_ROOT_REQUESTED,
            entityType: "filteredMemberships",
            url: "/memberships?no-permissions=1",
            params: A
          }
        },
        j = (0, e.C)("membership").get(p()).on("success", u)
    },
    "../react/common/actions/modalActions.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        M: function() {
          return E
        },
        h: function() {
          return p
        }
      });
      var e = t("../react/common/actionTypes.ts"),
        n = {
          replace: !0
        };

      function p(b, l) {
        var S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : n;
        return {
          type: e.Np,
          payload: {
            ModalComponent: b,
            props: l
          },
          options: S
        }
      }

      function E(b) {
        return {
          type: e.gM,
          payload: {
            ModalComponent: b
          }
        }
      }
    },
    "../react/common/actions/notificationsActions.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        IH: function() {
          return b
        },
        Vp: function() {
          return l
        },
        ZK: function() {
          return v
        },
        um: function() {
          return S
        },
        vU: function() {
          return r
        }
      });
      var e = t("../react/common/actionTypes.ts");

      function n(u) {
        return {
          type: e.Ng,
          notification: u
        }
      }

      function p(u) {
        return {
          type: e.Cz,
          notificationId: u
        }
      }
      var E = 0;

      function b(u, g) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return y = y || {},
          function(C) {
            var j = E++,
              T = {
                id: j,
                type: u,
                message: g,
                delay: y.delay,
                persist: y.persist === void 0 ? !1 : y.persist,
                closable: y.closable === void 0 ? !0 : y.closable,
                onClose: function() {
                  C(p(j)), y.onClose && y.onClose.apply(null, arguments)
                }
              };
            C(n(T))
          }
      }

      function l(u, g) {
        return b("success", u, g)
      }

      function S(u, g) {
        return b("info", u, g)
      }

      function v(u, g) {
        return b("warning", u, g)
      }

      function r(u, g) {
        return b("error", u, g)
      }
    },
    "../react/common/actions/userActions.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        BT: function() {
          return h
        },
        Ut: function() {
          return R
        },
        V_: function() {
          return D
        },
        Y9: function() {
          return pe
        },
        Z0: function() {
          return ne
        },
        mp: function() {
          return L
        },
        r3: function() {
          return $
        },
        x0: function() {
          return K
        }
      });
      var e = t("../react/app/redux/makeActionCreator.ts"),
        n = t("../react/app/redux/utils.ts");

      function p() {
        var Z = m(["/user/details/two-factor-recovery"]);
        return p = function() {
          return Z
        }, Z
      }

      function E() {
        var Z = m(["/user/details"]);
        return E = function() {
          return Z
        }, Z
      }

      function b() {
        var Z = m(["/user/communication_preferences"]);
        return b = function() {
          return Z
        }, Z
      }

      function l(Z) {
        for (var z = 1; z < arguments.length; z++) {
          var W = arguments[z] != null ? Object(arguments[z]) : {},
            I = Object.keys(W);
          typeof Object.getOwnPropertySymbols == "function" && (I = I.concat(Object.getOwnPropertySymbols(W).filter(function(U) {
            return Object.getOwnPropertyDescriptor(W, U).enumerable
          }))), I.forEach(function(U) {
            S(Z, U, W[U])
          })
        }
        return Z
      }

      function S(Z, z, W) {
        return z in Z ? Object.defineProperty(Z, z, {
          value: W,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : Z[z] = W, Z
      }

      function v() {
        var Z = m(["/user/communication_preferences"]);
        return v = function() {
          return Z
        }, Z
      }

      function r() {
        var Z = m(["/user/communication_preferences"]);
        return r = function() {
          return Z
        }, Z
      }

      function u() {
        var Z = m(["/user/email"]);
        return u = function() {
          return Z
        }, Z
      }

      function g() {
        var Z = m(["/user/two_factor_authentication"]);
        return g = function() {
          return Z
        }, Z
      }

      function y() {
        var Z = m(["/user/two_factor_authentication"]);
        return y = function() {
          return Z
        }, Z
      }

      function C() {
        var Z = m(["/user/two_factor_authentication"]);
        return C = function() {
          return Z
        }, Z
      }

      function j() {
        var Z = m(["/user/password"]);
        return j = function() {
          return Z
        }, Z
      }

      function T() {
        var Z = m(["/user/create"]);
        return T = function() {
          return Z
        }, Z
      }

      function _() {
        var Z = m(["/user"]);
        return _ = function() {
          return Z
        }, Z
      }

      function A() {
        var Z = m(["/user"]);
        return A = function() {
          return Z
        }, Z
      }

      function m(Z, z) {
        return z || (z = Z.slice(0)), Object.freeze(Object.defineProperties(Z, {
          raw: {
            value: Object.freeze(z)
          }
        }))
      }
      var h = (0, e.C)("user").get(A()),
        O = (0, e.C)("user").patch(_()),
        N = (0, e.C)("user").post(T()),
        K = (0, e.C)("user").put(j()),
        B = (0, e.C)("user").post(C()),
        _e = (0, e.C)("user").put(y()),
        Ee = (0, e.C)("user").delete(g()),
        ce = (0, e.C)("user").put(u());

      function pe() {
        return ce.apply(void 0, arguments)
      }
      var L = (0, e.C)("userCommPreferences").get(r()),
        R = (0, e.C)("userCommPreferences").get(v()).apiFetch((0, n._)(function(Z) {
          return l({}, Z, {
            body: l({}, Z.body, {
              result: {}
            })
          })
        })),
        D = (0, e.C)("userCommPreferences").put(b()),
        $ = (0, e.C)("userDetails").get(E()),
        ne = (0, e.C)("userDetails").get(p())
    },
    "../react/common/components/Apple/utils.tsx": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        PP: function() {
          return g
        },
        RJ: function() {
          return S
        },
        tz: function() {
          return y
        }
      });
      var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        E = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
        b = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
        l = function() {
          return v.test(window.location.pathname) || p.E.has(E.Qq)
        },
        S = function() {
          return p.E.get(E.Qq)
        },
        v = /^\/login\/apple(\/)?/,
        r = /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/,
        u = [v, r, /^\/$/, /^\/email-verification-info(\/)?/],
        g = function() {
          var j = !1;
          u.forEach(function(_) {
            if (_.test(window.location.pathname)) {
              j = !0;
              return
            }
          });
          var T = l() && j;
          return T && (0, b.C8)(b.LF.OFF), T
        },
        y = function(j) {
          j && n().sendEvent("launch icloud registrar onboarding", {
            category: "icloud registrar",
            method: "iCloud SSO"
          });
          var T = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=".concat("production");
          j && (T = T + "&jwt=".concat(j)), window.location.href = T
        }
    },
    "../react/common/components/EmptyPage.js": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/prop-types/index.js"),
        E = t.n(p),
        b = t("../../../../node_modules/@cloudflare/component-box/es/index.js"),
        l = function(v) {
          var r = v.children;
          return n().createElement(b.xu, {
            height: 411
          }, r)
        };
      l.propTypes = {
        children: E().node
      }, M.Z = l
    },
    "../react/common/constants/billing/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Gq: function() {
          return E
        },
        g$: function() {
          return p
        },
        WX: function() {
          return e
        },
        E0: function() {
          return r
        },
        Hw: function() {
          return l
        },
        Ed: function() {
          return b
        },
        bi: function() {
          return n
        },
        Gs: function() {
          return j
        },
        hQ: function() {
          return S
        },
        SP: function() {
          return v
        }
      });
      var e;
      (function(T) {
        T.page_rules = "page_rules", T.automatic_platform_optimization = "automatic_platform_optimization"
      })(e || (e = {}));
      var n = "page_rules",
        p = "automatic_platform_optimization",
        E = {
          price: 5,
          currency: "USD",
          frequency: "monthly",
          requests_included: 0,
          volume_included: 1,
          ubb_frequency: 1,
          ubb_price: .1,
          ubb_unit: "gigabyte"
        },
        b = {
          address: "Address Line 1 NA",
          city: "City NA",
          state: "State NA",
          vat: " ",
          account_type: "-"
        },
        l = {
          currency: "USD",
          frequency: "monthly",
          requests_included: 5e5,
          ubb_price: .5,
          ubb_frequency: 5e5
        },
        S = {
          price: 0,
          currency: "USD",
          frequency: "monthly",
          requests_included: 1e4,
          ubb_frequency: 1e4,
          ubb_price: .05
        },
        v = {
          price: 0,
          currency: "USD",
          frequency: "monthly",
          requests_included: 0,
          ubb_frequency: 1e3,
          ubb_storage_price: 5,
          ubb_streaming_price: 1,
          ubb_unit: "minute"
        },
        r = {
          price: 0,
          currency: "USD",
          frequency: "monthly",
          ubb_frequency: 1e5,
          ubb_storage_price: 5,
          ubb_delivery_price: 1,
          ubb_unit: "image"
        },
        u = new Set(["AZ", "CT", "DC", "HI", "IA", "IL", "OH", "NY", "PA", "SD", "TX", "WA", "WV"]),
        g = new Map([
          ["RU", null],
          ["US", u]
        ]),
        y = t("../react/common/constants/billing/tracking.ts"),
        C = t("../react/pages/zoneless-workers/constants.ts"),
        j = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
    },
    "../react/common/constants/billing/tracking.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        FP: function() {
          return e
        },
        Nl: function() {
          return b
        },
        SO: function() {
          return p
        },
        aA: function() {
          return n
        }
      });
      var e = {
          NOTIFICATION_CLICK: "Notification link click",
          CANCELED_SUBSCRIPTION: "Canceled subscription"
        },
        n = {
          NOTIFICATIONS: "notifications",
          SUBSCRIPTIONS: "subscriptions"
        },
        p = {
          BILLING: "billing"
        },
        E = {
          LINK: "link",
          EMAIL: "email",
          PHONE: "phone"
        },
        b = {
          BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
        }
    },
    "../react/common/constants/constants.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Dk: function() {
          return C
        },
        Dy: function() {
          return j
        },
        E_: function() {
          return l
        },
        S4: function() {
          return b
        },
        UM: function() {
          return u
        },
        Xf: function() {
          return r
        },
        Y1: function() {
          return S
        },
        p6: function() {
          return v
        },
        q0: function() {
          return E
        },
        sJ: function() {
          return y
        }
      });
      var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        E = "healthy",
        b = "degraded",
        l = "critical",
        S = "unknown",
        v = "not-monitored",
        r = n().from({
          FREE: "free",
          PRO: "pro",
          BIZ: "business",
          ENT: "enterprise"
        }),
        u = {
          ZONES_ROOT_REQUESTED: "zones_root_requested",
          ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
          ZONES_HEADER_REQUESTED: "zones_header_requested",
          MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
          ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
        },
        g = {
          f: r.FREE,
          p: r.PRO,
          b: r.BIZ
        },
        y = "marketing-pt",
        C = function() {
          var _ = p.Z.get(y);
          if (!!_) return g[_]
        },
        j = ["gov"]
    },
    "../react/common/constants/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Dk: function() {
          return e.Dk
        },
        Dy: function() {
          return e.Dy
        },
        E_: function() {
          return e.E_
        },
        S4: function() {
          return e.S4
        },
        UM: function() {
          return e.UM
        },
        WX: function() {
          return n.WX
        },
        Xf: function() {
          return e.Xf
        },
        Y1: function() {
          return e.Y1
        },
        bi: function() {
          return n.bi
        },
        g$: function() {
          return n.g$
        },
        p6: function() {
          return e.p6
        },
        q0: function() {
          return e.q0
        },
        sJ: function() {
          return e.sJ
        }
      });
      var e = t("../react/common/constants/constants.ts"),
        n = t("../react/common/constants/billing/index.ts")
    },
    "../react/common/hooks/suspenseHelpers.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        bt: function() {
          return S
        },
        nW: function() {
          return b
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/component-listener/es/index.js"),
        E = "suspenseComplete";

      function b() {
        (0, e.useEffect)(function() {
          return function() {
            window.dispatchEvent(new Event(E))
          }
        }, [])
      }

      function l(v) {
        (0, p.OR)(E, function() {
          window.setTimeout(v, 0)
        }, {
          target: window
        })
      }

      function S() {
        for (var v = arguments.length, r = new Array(v), u = 0; u < v; u++) r[u] = arguments[u];
        var g = r[0],
          y = r[1];
        n().useLayoutEffect(g, y), l(g)
      }
    },
    "../react/common/hooks/useCachedState.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        j: function() {
          return u
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

      function E(g, y) {
        return r(g) || v(g, y) || l(g, y) || b()
      }

      function b() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function l(g, y) {
        if (!!g) {
          if (typeof g == "string") return S(g, y);
          var C = Object.prototype.toString.call(g).slice(8, -1);
          if (C === "Object" && g.constructor && (C = g.constructor.name), C === "Map" || C === "Set") return Array.from(g);
          if (C === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)) return S(g, y)
        }
      }

      function S(g, y) {
        (y == null || y > g.length) && (y = g.length);
        for (var C = 0, j = new Array(y); C < y; C++) j[C] = g[C];
        return j
      }

      function v(g, y) {
        var C = g && (typeof Symbol != "undefined" && g[Symbol.iterator] || g["@@iterator"]);
        if (C != null) {
          var j = [],
            T = !0,
            _ = !1,
            A, m;
          try {
            for (C = C.call(g); !(T = (A = C.next()).done) && (j.push(A.value), !(y && j.length === y)); T = !0);
          } catch (h) {
            _ = !0, m = h
          } finally {
            try {
              !T && C.return != null && C.return()
            } finally {
              if (_) throw m
            }
          }
          return j
        }
      }

      function r(g) {
        if (Array.isArray(g)) return g
      }

      function u(g) {
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          C = y.key,
          j = y.cache,
          T = j === void 0 ? p.E : j,
          _ = C !== void 0 && T.get(C),
          A = (0, e.useState)(_ || g),
          m = E(A, 2),
          h = m[0],
          O = m[1],
          N = function(B) {
            O(function(_e) {
              return B instanceof Function && (B = B(_e)), C !== void 0 && T.set(C, B), B
            })
          };
        return [h, N]
      }
    },
    "../react/common/hooks/useGate.ts": function(Oe, M, t) {
      "use strict";
      var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

      function n(p) {
        return (0, e.qf)(p)
      }
      M.Z = n
    },
    "../react/common/hooks/usePrevious.ts": function(Oe, M, t) {
      "use strict";
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e);

      function p(E) {
        var b = (0, e.useRef)(E);
        return (0, e.useEffect)(function() {
          b.current = E
        }, [E]), b.current
      }
      M.Z = p
    },
    "../react/common/selectors/accountSelectors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        AC: function() {
          return Ye
        },
        Au: function() {
          return me
        },
        B3: function() {
          return ee
        },
        BG: function() {
          return h
        },
        Bp: function() {
          return Ve
        },
        D0: function() {
          return T
        },
        DT: function() {
          return ie
        },
        EL: function() {
          return z
        },
        GE: function() {
          return Ae
        },
        Ko: function() {
          return U
        },
        Kx: function() {
          return K
        },
        Le: function() {
          return B
        },
        O4: function() {
          return Ue
        },
        Py: function() {
          return Ke
        },
        QI: function() {
          return J
        },
        T3: function() {
          return rt
        },
        T8: function() {
          return m
        },
        UX: function() {
          return Z
        },
        VP: function() {
          return G
        },
        Xo: function() {
          return et
        },
        Xu: function() {
          return R
        },
        Yi: function() {
          return it
        },
        Yj: function() {
          return I
        },
        Zu: function() {
          return W
        },
        bC: function() {
          return ke
        },
        f8: function() {
          return ce
        },
        hN: function() {
          return N
        },
        iq: function() {
          return fe
        },
        j0: function() {
          return _e
        },
        nE: function() {
          return O
        },
        oD: function() {
          return ne
        },
        oI: function() {
          return Ee
        },
        oJ: function() {
          return De
        },
        qB: function() {
          return xe
        },
        uF: function() {
          return D
        },
        ut: function() {
          return $e
        },
        vU: function() {
          return Ie
        },
        wQ: function() {
          return ye
        }
      });
      var e = t("../../../../node_modules/lodash-es/memoize.js"),
        n = t("../../../../node_modules/lodash/get.js"),
        p = t.n(n),
        E = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
        b = t.n(E),
        l = t("../../../../node_modules/reselect/lib/index.js"),
        S = t("../../../../node_modules/moment/moment.js"),
        v = t.n(S),
        r = t("../react/common/utils/formatDate.ts"),
        u = t("../react/app/redux/normalizer.js"),
        g = t("../react/common/selectors/userSelectors.ts"),
        y = t("../react/app/components/DeepLink/selectors.ts");

      function C(ge) {
        for (var q = 1; q < arguments.length; q++) {
          var F = arguments[q] != null ? Object(arguments[q]) : {},
            Te = Object.keys(F);
          typeof Object.getOwnPropertySymbols == "function" && (Te = Te.concat(Object.getOwnPropertySymbols(F).filter(function(Le) {
            return Object.getOwnPropertyDescriptor(F, Le).enumerable
          }))), Te.forEach(function(Le) {
            j(ge, Le, F[Le])
          })
        }
        return ge
      }

      function j(ge, q, F) {
        return q in ge ? Object.defineProperty(ge, q, {
          value: F,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ge[q] = F, ge
      }
      var T = function(q) {
          var F = D(q);
          return F == null ? void 0 : F.account
        },
        _ = function(q) {
          var F = (0, g.PR)(q);
          if (F) {
            var Te = F.id,
              Le = q.accountAccess[Te];
            return Le || {}
          }
          return {}
        },
        A = function(q) {
          return q.accountsDetailed
        },
        m = (0, u.P1)("accountsDetailed", A),
        h = function(q) {
          return q.memberships
        },
        O = (0, l.P1)((0, u.P1)("memberships", h), y.U, function(ge, q) {
          return !!q && !!ge ? ge.filter(function(F) {
            return q.includes(F.id)
          }) : ge
        }),
        N = function(q) {
          return q.accountFlags && q.accountFlags.data
        },
        K = function(q) {
          return q.accountFlags
        },
        B = function(q, F, Te) {
          var Le = N(q);
          return !Le || !Le[F] ? null : Le[F][Te]
        },
        _e = function(q) {
          return q.accountFlags.isRequesting
        },
        Ee = function(q) {
          for (var F = arguments.length, Te = new Array(F > 1 ? F - 1 : 0), Le = 1; Le < F; Le++) Te[Le - 1] = arguments[Le];
          return p()(q, ["accountFlagsChanges", "data"].concat(Te))
        },
        ce = function(q) {
          return q.accountFlagsChanges.isRequesting
        },
        pe = (0, l.P1)(N, K, function(ge, q) {
          return {
            data: ge,
            meta: q
          }
        }),
        L = function(q, F, Te) {
          return !!(isEnterpriseSSEnabledSelector(q) && B(q, F, Te))
        },
        R = function(q) {
          return q.membership
        },
        D = (0, u.P1)("membership", R),
        $ = (0, l.P1)(D, R, function(ge, q) {
          return {
            data: ge,
            meta: q
          }
        }),
        ne = function(q) {
          var F = _(q),
            Te = Ge.getMemberships(q) ? b().asMutable(Ge.getMemberships(q)) : [];
          if (!!Te) return b().from(Te.map(function(Le) {
            return C({}, Le, {
              lastSeen: F[Le.account.id] ? F[Le.account.id].lastSeen : null
            })
          }).sort(function(Le, Qe) {
            return Le.lastSeen && Qe.lastSeen ? Qe.lastSeen - Le.lastSeen : 0
          }))
        },
        Z = function(q) {
          return q.filteredMemberships
        },
        z = (0, u.P1)("filteredMemberships", Z),
        W = (0, l.P1)(D, function(ge) {
          return ge == null ? void 0 : ge.permissions
        }),
        I = (0, l.P1)(W, function(ge) {
          return (0, e.Z)(function(q) {
            var F;
            return (F = ge == null ? void 0 : ge[q]) !== null && F !== void 0 ? F : {
              read: !1,
              edit: !1
            }
          })
        }),
        U = (0, l.P1)(D, function(ge) {
          return ge == null ? void 0 : ge.policies
        }),
        ie = function(q, F, Te) {
          var Le = Ge.getMembership(q);
          if (!Le) {
            var Qe = Ge.getMemberships(q);
            if (!Qe || !F) return !1;
            Le = Qe.find(function(w) {
              return w.account.id === F
            })
          }
          if (!Le || !Te) return !1;
          try {
            return Te(Le.permissions)
          } catch {
            return !1
          }
        },
        re = function(q) {
          var F, Te;
          return (F = (Te = T(q)) === null || Te === void 0 ? void 0 : Te.meta.has_pro_zones) !== null && F !== void 0 ? F : !1
        },
        Se = function(q) {
          var F, Te;
          return (F = (Te = T(q)) === null || Te === void 0 ? void 0 : Te.meta.has_business_zones) !== null && F !== void 0 ? F : !1
        },
        ke = function(q) {
          return Se(q) || re(q)
        },
        je = function(q, F) {
          var Te = Y(q, F);
          return !!Te && !!Te.enabled
        },
        Y = function(q, F) {
          var Te = Ge.getMembership(q),
            Le = Te && Te.account;
          return Le && Le.legacy_flags && Le.legacy_flags[F]
        },
        ye = function(q) {
          return je(q, "custom_pages")
        },
        xe = function(q) {
          return je(q, "railgun")
        },
        Fe = function(q) {
          return !!q && q["webhooks.webhooks.enabled"]
        },
        le = function(q) {
          return B(q, "bots", "enabled")
        },
        de = function(q) {
          return B(q, "billing", "annual_subscriptions_enable")
        },
        Pe = function(q) {
          return Y(q, "enterprise_zone_quota")
        },
        X = function(q) {
          var F = Pe(q);
          return !F || !F.available ? -1 : F.available
        },
        fe = function(q) {
          return q.accountMembers
        },
        ee = (0, u.P1)("accountMembers", fe),
        Ue = function(q) {
          return q.accountMember && q.accountMember.isRequesting
        },
        Ne = function(q) {
          return q.accountRoles
        },
        Ye = (0, u.P1)("accountRoles", Ne),
        Ke = function(q, F) {
          var Te = Ge.getMemberships(q),
            Le = Te && Te.find(function(Ce) {
              return Ce.account.id === F
            });
          if (Le) return Le.account.name;
          var Qe = Ge.getMembership(q),
            w = Qe && Qe.account;
          return w && w.id === F ? w.name : null
        },
        $e = function(q, F) {
          var Te = Ge.getMemberships(q),
            Le = Te && Te.find(function(Ce) {
              return Ce.account.id === F
            });
          if (Le) return Le.account.settings.access_approval_expiry;
          var Qe = Ge.getMembership(q),
            w = Qe && Qe.account;
          return w && w.id === F ? w.settings.access_approval_expiry : null
        },
        et = function(q, F) {
          var Te = $e(q, F);
          if (!Te) return !1;
          var Le = v().utc(Te).isAfter();
          return Le
        },
        rt = function(q, F, Te) {
          var Le = $e(q, F),
            Qe = Le ? v().utc(Le) : null;
          return !Qe || !Qe.isAfter() ? "" : Qe && Qe.year() === 3e3 ? Te("account.access_approval.card_expiration_forever") : Te("account.access_approval.card_expiration_text", {
            expiryTimestamp: Qe.local().format(r.U.DateTime)
          })
        },
        De = function(q) {
          return q && q.member && q.member.edit
        },
        me = function(q, F) {
          var Te = Ge.getMembership(q),
            Le = Te && Te.account;
          return Le ? Le.id !== F : !1
        },
        he = function(q) {
          return q.dpa
        },
        we = (0, u.P1)("dpa", he),
        ze = function(q) {
          return q.webhook
        },
        He = function(q) {
          return q.webhooks
        },
        st = (0, u.P1)("webhook", He),
        G = function(q) {
          return q.accountLegoContract
        },
        Q = (0, u.P1)("accountLegoContract", G),
        J = function(q) {
          var F = Q(q);
          return (F == null ? void 0 : F.lego_state) ? F.lego_state : ""
        },
        te = function(q) {
          var F = J(q);
          return F === "signed"
        },
        Ae = function(q) {
          var F = G(q);
          return F.isRequesting
        },
        Ie = function(q) {
          var F = Q(q);
          return F && F.subscription_type ? F.subscription_type : ""
        },
        We = function(q) {
          var F = Ie(q);
          return F !== ""
        },
        Ge = {
          getMembership: D,
          getMemberships: O,
          getFilteredMemberships: z,
          getAccountMembers: ee,
          getAccountRoles: Ye
        },
        Ve = function(q) {
          return q.accountSingle
        },
        it = (0, u.P1)("accountSingle", Ve)
    },
    "../react/common/selectors/entitlementsSelectors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        $f: function() {
          return C
        },
        AD: function() {
          return E
        },
        BF: function() {
          return y
        },
        Bs: function() {
          return h
        },
        Ci: function() {
          return ke
        },
        E6: function() {
          return g
        },
        GV: function() {
          return n
        },
        Mg: function() {
          return ce
        },
        Ms: function() {
          return K
        },
        Q2: function() {
          return b
        },
        Qw: function() {
          return Ee
        },
        Td: function() {
          return A
        },
        Z: function() {
          return ye
        },
        a: function() {
          return m
        },
        a5: function() {
          return Fe
        },
        du: function() {
          return S
        },
        ec: function() {
          return D
        },
        fB: function() {
          return j
        },
        hL: function() {
          return xe
        },
        ji: function() {
          return je
        },
        jo: function() {
          return B
        },
        lI: function() {
          return p
        },
        p1: function() {
          return T
        },
        pf: function() {
          return r
        },
        qR: function() {
          return _
        },
        rV: function() {
          return l
        },
        u1: function() {
          return v
        },
        w4: function() {
          return u
        },
        yD: function() {
          return Y
        }
      });

      function e(le, de) {
        return le && le[de]
      }
      var n = function(de) {
        return !p(de).isRequesting
      };

      function p(le) {
        return le.entitlements.zone
      }

      function E(le) {
        return p(le).data
      }
      var b = function(de) {
        var Pe, X;
        return ((Pe = p(de).paginationData) === null || Pe === void 0 || (X = Pe.options) === null || X === void 0 ? void 0 : X.editedDate) || {}
      };

      function l(le, de) {
        var Pe = E(le);
        return Pe ? e(Pe, de) : void 0
      }
      var S = function(de, Pe) {
        return l(de, Pe) === !0
      };

      function v(le) {
        return le.entitlements.account
      }

      function r(le) {
        return v(le).data
      }
      var u = function(de) {
        var Pe, X;
        return ((Pe = v(de).paginationData) === null || Pe === void 0 || (X = Pe.options) === null || X === void 0 ? void 0 : X.editedDate) || {}
      };

      function g(le) {
        var de = v(le);
        return !de.isRequesting
      }

      function y(le, de) {
        var Pe = r(le);
        return Pe ? e(Pe, de) : void 0
      }

      function C(le, de) {
        return y(le, de) === !0
      }

      function j(le, de) {
        return de.every(function(Pe) {
          return C(le, Pe)
        })
      }

      function T(le) {
        return C(le, "contract.customer_enabled")
      }

      function _(le) {
        return C(le, "contract.self_service_allowed")
      }

      function A(le) {
        return C(le, "billing.partners_managed")
      }
      var m = function(de) {
          return T(de) && _(de)
        },
        h = function(de) {
          return C(de, "enterprise.ecp_allowed")
        };

      function O(le) {
        return N(le) || C(le, "argo.allow_smart_routing") || C(le, "argo.allow_tiered_caching") || C(le, "rate_limiting.enabled") || C(le, "ctm.enabled") || C(le, "workers.enabled") || C(le, "workers.kv_store.enabled") || C(le, "stream.enabled")
      }
      var N = function(de) {
          return S(de, "argo.allow_smart_routing") || S(de, "argo.allow_tiered_caching")
        },
        K = function(de) {
          return C(de, "zone.cname_setup_allowed") || C(de, "zone.partial_setup_allowed") || S(de, "zone.partial_setup_allowed")
        },
        B = function(de) {
          return C(de, "argo.allow_smart_routing") || S(de, "argo.allow_smart_routing")
        },
        _e = function(de) {
          return C(de, "argo.allow_tiered_caching") || S(de, "argo.allow_tiered_caching")
        },
        Ee = function(de) {
          return B(de) || _e(de)
        },
        ce = function(de) {
          return C(de, "ctm.enabled")
        },
        pe = function(de) {
          var Pe = y(de, "ctm.load_balancers");
          return typeof Pe == "number" ? Pe : 0
        },
        L = function(de) {
          var Pe = y(de, "ctm.pools");
          return typeof Pe == "number" ? Pe : 0
        },
        R = function(de) {
          var Pe = y(de, "ctm.origins");
          return typeof Pe == "number" ? Pe : 0
        },
        D = function(de) {
          return C(de, "workers.enabled")
        },
        $ = function(de) {
          return C(de, "stream.enabled")
        },
        ne = function(de) {
          var Pe = y(de, "access.users_allowed");
          return typeof Pe == "number" ? Pe : 0
        },
        Z = function(de) {
          return ne(de) > 0
        },
        z = function(de) {
          var Pe = l(de, "dedicated_certificates");
          return typeof Pe == "number" ? Pe : 0
        },
        W = function(de) {
          return z(de) > 0
        },
        I = function(de) {
          var Pe = l(de, "rate_limiting.max_rules");
          return typeof Pe == "number" ? Pe : 0
        },
        U = function(de) {
          return C(de, "rate_limiting.enabled")
        },
        ie = function(de) {
          var Pe = l(de, "page_rules");
          return typeof Pe == "number" ? Pe : 0
        },
        re = function(de) {
          return ie(de) > 0
        },
        Se = function(de) {
          var Pe = y(de, "dns_firewall.max_clusters_allowed");
          return typeof Pe == "number" ? Pe : 0
        },
        ke = function(de) {
          return Se(de) > 0
        },
        je = function(de) {
          return S(de, "zone.advanced_certificate_manager") || C(de, "zone.advanced_certificate_manager")
        },
        Y = function(de) {
          return l(de, "authoritative_dns.proxy_record_allowed") === !1 || y(de, "authoritative_dns.proxy_record_allowed") === !1
        },
        ye = function(de) {
          return C(de, "authoritative_dns.outgoing_zone_transfers_allowed") === !0
        },
        xe = function(de) {
          return l(de, "authoritative_dns.outgoing_zone_transfers_allowed") === !0
        },
        Fe = function(de) {
          var Pe = l(de, "authoritative_dns.min_record_ttl_allowed");
          return typeof Pe == "number" && Pe > 1 ? Pe : 60
        }
    },
    "../react/common/selectors/languagePreferenceSelector.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        r: function() {
          return E
        },
        v: function() {
          return b
        }
      });
      var e = t("../react/utils/i18n.ts"),
        n = t("../../../common/intl/intl-types/src/index.ts"),
        p = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        E = function(S) {
          var v = S.userCommPreferences.data;
          if (v == null ? void 0 : v["language-locale"]) return p.Z.set(e.ly, v["language-locale"]), v["language-locale"];
          p.Z.has(e.ly) || p.Z.set(e.ly, e.ZW);
          var r = p.Z.get(e.ly);
          return b(r) ? r : e.ZW
        };

      function b(l) {
        var S = Object.keys(n.Q).find(function(v) {
          return n.Q[v] === l
        });
        return !!l && typeof l == "string" && S != null && (0, e.S8)(S)
      }
    },
    "../react/common/selectors/userSelectors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        $8: function() {
          return b
        },
        BG: function() {
          return r
        },
        GP: function() {
          return j
        },
        PR: function() {
          return p
        },
        h8: function() {
          return u
        },
        kk: function() {
          return _
        },
        l8: function() {
          return S
        },
        mV: function() {
          return T
        },
        vW: function() {
          return l
        }
      });
      var e = t("../react/app/redux/normalizer.js"),
        n = function(m) {
          return m.user
        },
        p = (0, e.P1)("user", n),
        E = function(m) {
          var h;
          return (h = p(m)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
        },
        b = function(m) {
          var h;
          return !!((h = p(m)) === null || h === void 0 ? void 0 : h.id)
        },
        l = function(m) {
          var h = p(m);
          if (!!h) return h.first_name && h.last_name ? "".concat(h.first_name, " ").concat(h.last_name) : h.email
        },
        S = function(m) {
          var h = p(m);
          return h && h.has_enterprise_zones
        },
        v = function(m) {
          return m.userCommPreferences
        },
        r = (0, e.P1)("userCommPreferences", v),
        u = function(m) {
          var h = p(m);
          return h && h.email_verified
        },
        g = function(m) {
          var h = r(m);
          return h && h.preferences.marketing_communication
        },
        y = function(m) {
          return m.userDetails
        },
        C = (0, e.P1)("userDetails", y),
        j = function(m) {
          var h = C(m);
          return h && h["2FA-RECOVERY"] === "scheduled"
        },
        T = function(m) {
          var h = C(m);
          return h && h["2FA-RECOVERY"] === "interrupted"
        },
        _ = function(m) {
          var h = C(m);
          return h == null ? void 0 : h["NEW-USER-EMAIL"]
        }
    },
    "../react/common/selectors/zoneSelectors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        $4: function() {
          return A
        },
        $t: function() {
          return Ke
        },
        A4: function() {
          return g
        },
        DQ: function() {
          return re
        },
        Ej: function() {
          return h
        },
        FH: function() {
          return C
        },
        Ko: function() {
          return Fe
        },
        Le: function() {
          return je
        },
        Ly: function() {
          return ne
        },
        M3: function() {
          return ee
        },
        N8: function() {
          return X
        },
        NY: function() {
          return I
        },
        Ns: function() {
          return $
        },
        Ox: function() {
          return rt
        },
        P4: function() {
          return O
        },
        SX: function() {
          return U
        },
        Tr: function() {
          return xe
        },
        U: function() {
          return y
        },
        Ug: function() {
          return T
        },
        V6: function() {
          return Ue
        },
        WR: function() {
          return De
        },
        Xg: function() {
          return u
        },
        ZB: function() {
          return ke
        },
        cU: function() {
          return le
        },
        cg: function() {
          return ie
        },
        d2: function() {
          return Ee
        },
        jN: function() {
          return N
        },
        jg: function() {
          return z
        },
        kC: function() {
          return m
        },
        kf: function() {
          return Ne
        },
        ko: function() {
          return L
        },
        mK: function() {
          return $e
        },
        nA: function() {
          return r
        },
        qM: function() {
          return Y
        },
        rq: function() {
          return W
        },
        tS: function() {
          return _
        },
        tU: function() {
          return B
        },
        tv: function() {
          return fe
        },
        vB: function() {
          return et
        },
        vM: function() {
          return K
        },
        wH: function() {
          return j
        },
        wn: function() {
          return Se
        },
        xU: function() {
          return _e
        },
        xw: function() {
          return ye
        },
        z5: function() {
          return R
        },
        zO: function() {
          return de
        },
        zW: function() {
          return Ye
        },
        zh: function() {
          return ce
        }
      });
      var e = t("../../../../node_modules/reselect/lib/index.js"),
        n = t("../react/app/redux/normalizer.js"),
        p = t("../../../../node_modules/lodash/get.js"),
        E = t.n(p),
        b = t("../../../../node_modules/moment/moment.js"),
        l = t.n(b),
        S = t("../react/common/constants/billing/index.ts"),
        v = (0, n.P1)("zone", function(me) {
          return me.zone
        }),
        r = function(he) {
          var we = v(he);
          if (Array.isArray(we) && we.length === 1) return we[0];
          if (we && !Array.isArray(we)) return we
        },
        u = function(he) {
          return he.zone
        },
        g = (0, e.P1)(r, u, function(me, he) {
          return {
            data: me,
            meta: he
          }
        }),
        y = function(he) {
          return he.zones
        },
        C = function(he) {
          return he.zonesRoot
        },
        j = function(he) {
          return he.zonesAccount
        },
        T = (0, n.P1)("zones", y),
        _ = (0, n.P1)("zonesRoot", C),
        A = (0, n.P1)("zonesAccount", j);

      function m(me) {
        var he = r(me);
        return he ? he.created_on : null
      }

      function h(me, he, we) {
        var ze = m(me);
        if (!!ze) {
          var He = l().duration(he, we),
            st = new Date(ze),
            G = new Date(new Date().getTime() - He.asMilliseconds());
          return st.getTime() > G.getTime()
        }
      }

      function O(me) {
        var he = r(me);
        return he ? he.status : null
      }

      function N(me) {
        return me.plan_pending ? me.plan_pending : me.plan
      }

      function K(me) {
        var he = r(me);
        if (!!he) {
          var we = N(he);
          return we && we.legacy_id
        }
      }

      function B(me, he) {
        var we = N(me);
        return !!we && S.Gs.indexOf(we.legacy_id) >= S.Gs.indexOf(he)
      }

      function _e(me) {
        return !!me && me.status === "initializing"
      }

      function Ee(me) {
        return !!me && me.status === "pending"
      }

      function ce(me) {
        return !!me && me.status === "active"
      }

      function pe(me, he) {
        if (!me) return !1;
        var we = N(me);
        return !!we && we.legacy_id === he
      }

      function L(me) {
        return pe(me, "enterprise")
      }

      function R(me) {
        return pe(me, "business")
      }

      function D(me) {
        return pe(me, "pro")
      }

      function $(me) {
        return pe(me, "free")
      }

      function ne(me) {
        return !L(me)
      }

      function Z(me) {
        return me && me.owner
      }

      function z(me, he) {
        var we = Z(he);
        return !!we && we.type === "user" && we.id === me.id
      }

      function W(me) {
        var he = r(me);
        return !!he && he.type === "partial"
      }

      function I(me) {
        var he = r(me);
        return !!he && he.type === "secondary"
      }

      function U(me) {
        var he = r(me);
        return he && W(me) && he.host
      }
      var ie = function(he) {
          var we, ze = r(he);
          return !!(ze == null ? void 0 : ze.host) && !!((we = ze.plan) === null || we === void 0 ? void 0 : we.externally_managed)
        },
        re = function(he) {
          var we = T(he);
          return we && we.some(L)
        },
        Se = function(he, we) {
          var ze = r(he);
          return ze && ze.betas ? ze.betas.includes(we) : !1
        },
        ke = function(he) {
          for (var we = arguments.length, ze = new Array(we > 1 ? we - 1 : 0), He = 1; He < we; He++) ze[He - 1] = arguments[He];
          return E()(he, ["zoneFlags", "data"].concat(ze))
        },
        je = function(he) {
          for (var we = arguments.length, ze = new Array(we > 1 ? we - 1 : 0), He = 1; He < we; He++) ze[He - 1] = arguments[He];
          return E()(he, ["accountFlags", "data"].concat(ze))
        },
        Y = function(he) {
          return he.accountFlags.isRequesting
        },
        ye = function(he) {
          return he.zoneFlags.isRequesting
        },
        xe = function(he) {
          for (var we = arguments.length, ze = new Array(we > 1 ? we - 1 : 0), He = 1; He < we; He++) ze[He - 1] = arguments[He];
          return E()(he, ["zoneFlagsChanges", "data"].concat(ze))
        },
        Fe = function(he) {
          return he.zoneFlagsChanges.isRequesting
        },
        le = function(he) {
          return he.zoneFlags && he.zoneFlags.data
        },
        de = function(he) {
          return he.zoneFlags
        },
        Pe = (0, e.P1)(le, de, function(me, he) {
          return {
            data: me,
            meta: he
          }
        }),
        X = (0, n.P1)("abuseUrls", function(me) {
          return me.overview.abuseUrls
        }),
        fe = (0, n.P1)("unreachability", function(me) {
          return me.overview.unreachability
        }),
        ee = function(he) {
          var we = r(he);
          return we ? "/".concat(we.account.id, "/").concat(we.name) : null
        },
        Ue = function(he) {
          return he.zoneMarketingCampaigns
        },
        Ne = function(he) {
          return he.overview.zoneBlocks.data
        },
        Ye = function(he) {
          return he.overview.zoneBlocks.isRequesting
        },
        Ke = function(he) {
          return he.overview.zoneBlocks.hasData
        },
        $e = function(he) {
          var we, ze;
          return (he == null || (we = he.overview.zoneBlocks) === null || we === void 0 || (ze = we.paginationData) === null || ze === void 0 ? void 0 : ze.info) || {
            page: 1,
            count: 0,
            total_pages: 0
          }
        },
        et = function(he) {
          return he.overview.zoneBlocksReview.isRequesting
        },
        rt = function(he) {
          return he.overview.zoneHold
        },
        De = (0, n.P1)("zoneHold", rt)
    },
    "../react/common/utils/formatDate.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        U: function() {
          return e.pN
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
      M.Z = function(n, p) {
        var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        return (0, e.p6)(n, p, E)
      }
    },
    "../react/common/utils/isTLDZone.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        v: function() {
          return n
        }
      });
      var e = t("../react/common/constants/index.ts"),
        n = function() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return e.Dy.includes(E.toLowerCase())
        }
    },
    "../react/common/validators/index.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        K2: function() {
          return n
        },
        Lb: function() {
          return p
        },
        jk: function() {
          return l
        },
        wb: function() {
          return E
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
        n = function(v) {
          return /^https?:\/\/(.*)/.test(v)
        },
        p = function(v) {
          return e.Z.hostname.test(v)
        },
        E = function(v) {
          return /^[!-~]+$/.test(v)
        },
        b = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
        l = function(v) {
          return b.test(v)
        }
    },
    "../react/history.js": function(Oe, M, t) {
      "use strict";
      var e = t("../../../../node_modules/history/createBrowserHistory.js"),
        n = (0, e.Z)();
      M.Z = n
    },
    "../react/pages/apps/marketplace/config/initialState.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Jz: function() {
          return S
        },
        OK: function() {
          return p
        },
        _Y: function() {
          return b
        },
        fD: function() {
          return r
        },
        h_: function() {
          return l
        },
        w6: function() {
          return u
        },
        yc: function() {
          return v
        }
      });

      function e(y) {
        for (var C = 1; C < arguments.length; C++) {
          var j = arguments[C] != null ? Object(arguments[C]) : {},
            T = Object.keys(j);
          typeof Object.getOwnPropertySymbols == "function" && (T = T.concat(Object.getOwnPropertySymbols(j).filter(function(_) {
            return Object.getOwnPropertyDescriptor(j, _).enumerable
          }))), T.forEach(function(_) {
            n(y, _, j[_])
          })
        }
        return y
      }

      function n(y, C, j) {
        return C in y ? Object.defineProperty(y, C, {
          value: j,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : y[C] = j, y
      }
      var p;
      (function(y) {
        y.Sending = "sending", y.Success = "success", y.Failed = "failed", y.Latent = "latent"
      })(p || (p = {}));
      var E;
      (function(y) {
        y[y.Success = 200] = "Success", y[y.BadRequest = 400] = "BadRequest"
      })(E || (E = {}));
      var b = {
          status: p.Latent,
          statusCode: void 0
        },
        l = {
          status: p.Sending
        },
        S = {
          status: p.Success,
          statusCode: E.Success
        },
        v = {
          status: p.Failed,
          statusCode: E.BadRequest
        },
        r = {
          token: null,
          zone: null,
          isTokenValid: !1,
          user: null
        },
        u = {
          appsList: e({
            value: []
          }, b),
          installsList: e({
            value: []
          }, b),
          categoriesList: e({
            value: []
          }, b),
          recommendedAppsList: e({
            value: []
          }, b),
          metadata: e({
            value: null
          }, b),
          app: e({
            value: null
          }, b),
          updatableInstallsList: [],
          developedApps: e({
            value: []
          }, b)
        },
        g = {}
    },
    "../react/pages/apps/marketplace/config/sagas.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        y: function() {
          return Ct
        }
      });
      var e = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
        n = t("../../../../node_modules/lodash-es/get.js"),
        p = t("../react/pages/apps/marketplace/state/auth.reducer.ts"),
        E = t("../react/pages/apps/marketplace/requests/Requester.ts"),
        b = function() {
          return E.L.fetchJSON("/user/~current")
        },
        l = function() {
          return E.L.request("GET", "/healthcheck")
        },
        S = t("../../../../node_modules/lodash-es/toNumber.js"),
        v = t("../../../../node_modules/lodash-es/isInteger.js"),
        r = t("../../../../node_modules/lodash-es/toString.js"),
        u = t("../../../../node_modules/query-string/query-string.js"),
        g = t("../../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),
        y = t("../react/pages/apps/marketplace/types.ts"),
        C = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http");

      function j(f) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? j = function(k) {
          return typeof k
        } : j = function(k) {
          return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k
        }, j(f)
      }

      function T(f, c) {
        if (!(f instanceof c)) throw new TypeError("Cannot call a class as a function")
      }

      function _(f, c) {
        return c && (j(c) === "object" || typeof c == "function") ? c : A(f)
      }

      function A(f) {
        if (f === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return f
      }

      function m(f, c) {
        if (typeof c != "function" && c !== null) throw new TypeError("Super expression must either be null or a function");
        f.prototype = Object.create(c && c.prototype, {
          constructor: {
            value: f,
            writable: !0,
            configurable: !0
          }
        }), c && B(f, c)
      }

      function h(f) {
        var c = typeof Map == "function" ? new Map : void 0;
        return h = function(V) {
          if (V === null || !K(V)) return V;
          if (typeof V != "function") throw new TypeError("Super expression must either be null or a function");
          if (typeof c != "undefined") {
            if (c.has(V)) return c.get(V);
            c.set(V, Re)
          }

          function Re() {
            return O(V, arguments, _e(this).constructor)
          }
          return Re.prototype = Object.create(V.prototype, {
            constructor: {
              value: Re,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), B(Re, V)
        }, h(f)
      }

      function O(f, c, k) {
        return N() ? O = Reflect.construct : O = function(Re, Ze, Be) {
          var qe = [null];
          qe.push.apply(qe, Ze);
          var at = Function.bind.apply(Re, qe),
            tt = new at;
          return Be && B(tt, Be.prototype), tt
        }, O.apply(null, arguments)
      }

      function N() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
          return !1
        }
      }

      function K(f) {
        return Function.toString.call(f).indexOf("[native code]") !== -1
      }

      function B(f, c) {
        return B = Object.setPrototypeOf || function(V, Re) {
          return V.__proto__ = Re, V
        }, B(f, c)
      }

      function _e(f) {
        return _e = Object.setPrototypeOf ? Object.getPrototypeOf : function(k) {
          return k.__proto__ || Object.getPrototypeOf(k)
        }, _e(f)
      }
      var Ee;
      (function(f) {
        f.RedirectToLogin = "RedirectToLogin", f.ExpiredToken = "ExpiredToken", f.BadToken = "BadToken", f.Init = "Init"
      })(Ee || (Ee = {}));
      var ce = function(f) {
          m(c, f);

          function c() {
            var k;
            return T(this, c), k = _(this, _e(c).call(this)), k.name = Ee.Init, k
          }
          return c
        }(h(Error)),
        pe = function(f) {
          m(c, f);

          function c() {
            var k;
            return T(this, c), k = _(this, _e(c).call(this)), k.name = Ee.BadToken, k
          }
          return c
        }(h(Error)),
        L = function(f) {
          m(c, f);

          function c() {
            var k;
            return T(this, c), k = _(this, _e(c).call(this)), k.name = Ee.RedirectToLogin, k
          }
          return c
        }(h(Error)),
        R = function(f) {
          m(c, f);

          function c() {
            var k;
            return T(this, c), k = _(this, _e(c).call(this)), k.name = Ee.ExpiredToken, k
          }
          return c
        }(h(Error)),
        D = function(c) {
          try {
            var k = (0, g.Z)(c);
            if (!k) throw new Error("Invalid JWT");
            return k
          } catch (V) {
            throw V
          }
        },
        $ = function(c) {
          var k = new Date(c.exp * 1e3);
          return new Date > k
        },
        ne = function(c) {
          var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.document.location.toString();
          (0, C.get)("login?redirect_uri=".concat(encodeURIComponent(k))).then(function(V) {
            var Re, Ze, Be = (Re = V.body) === null || Re === void 0 || (Ze = Re.result) === null || Ze === void 0 ? void 0 : Ze.redirect_uri;
            Be && (window.location.href = Be)
          }).catch(function(V) {
            console.log("Failed login ", V)
          })
        },
        Z = function() {
          var c = u.parse(location.search),
            k = localStorage.getItem(y.m.CloudflareAppsToken) || c.token;
          if (k) {
            delete c.token, delete c.from_login;
            var V = u.stringify(c);
            window.history.replaceState({}, document.title, "".concat(window.location.pathname).concat(V ? "?".concat(V) : ""))
          }
          return k
        },
        z = 2,
        W = function(c) {
          var k = I();
          if (k > z) throw new Error("redirect attempt limit reached");
          return ne("login", c)
        },
        I = function() {
          var c = (0, S.Z)(localStorage.getItem(y.m.CloudflareAppsAuthAttempts));
          (0, v.Z)(c) || (c = 0, localStorage.setItem(y.m.CloudflareAppsAuthAttempts, (0, r.Z)(c)));
          var k = c + 1;
          return localStorage.setItem(y.m.CloudflareAppsAuthAttempts, (0, r.Z)(k)), k > z && localStorage.removeItem(y.m.CloudflareAppsAuthAttempts), k
        },
        U = regeneratorRuntime.mark(ye),
        ie = regeneratorRuntime.mark(xe),
        re = regeneratorRuntime.mark(Fe),
        Se = regeneratorRuntime.mark(le),
        ke = regeneratorRuntime.mark(de),
        je = regeneratorRuntime.mark(Pe),
        Y = regeneratorRuntime.mark(X);

      function ye() {
        var f, c;
        return regeneratorRuntime.wrap(function(V) {
          for (;;) switch (V.prev = V.next) {
            case 0:
              if (f = Z(), f) {
                V.next = 3;
                break
              }
              throw new L;
            case 3:
              if (V.prev = 3, c = D(f), !(c && $(c))) {
                V.next = 7;
                break
              }
              throw new L;
            case 7:
              return V.next = 9, (0, e.gz)(p.Nw.setToken({
                token: f,
                parsed: c
              }));
            case 9:
              return V.next = 11, (0, e.RE)([localStorage, "setItem"], y.m.CloudflareAppsToken, f);
            case 11:
              return V.next = 13, (0, e.RE)([E.L, "setAuthHeader"], f);
            case 13:
              V.next = 18;
              break;
            case 15:
              throw V.prev = 15, V.t0 = V.catch(3), new L;
            case 18:
            case "end":
              return V.stop()
          }
        }, U, this, [
          [3, 15]
        ])
      }

      function xe() {
        var f, c;
        return regeneratorRuntime.wrap(function(V) {
          for (;;) switch (V.prev = V.next) {
            case 0:
              return V.next = 2, (0, e.RE)(l);
            case 2:
              if (f = V.sent, c = f.status, c !== 401) {
                V.next = 6;
                break
              }
              throw new R;
            case 6:
              if (c !== 403) {
                V.next = 8;
                break
              }
              throw new pe;
            case 8:
              return V.next = 10, (0, e.gz)(p.Nw.setTokenValid(!0));
            case 10:
            case "end":
              return V.stop()
          }
        }, ie, this)
      }

      function Fe() {
        var f;
        return regeneratorRuntime.wrap(function(k) {
          for (;;) switch (k.prev = k.next) {
            case 0:
              return k.prev = 0, k.next = 3, (0, e.gz)(p.Nw.getCurrentUserSending());
            case 3:
              return k.next = 5, (0, e.RE)(b);
            case 5:
              return f = k.sent, k.next = 8, (0, e.gz)(f.id ? p.Nw.getCurrentUserSuccess(f) : p.Nw.getCurrentUserFailed());
            case 8:
              return k.abrupt("return", f);
            case 11:
              return k.prev = 11, k.t0 = k.catch(0), k.next = 15, (0, e.gz)(p.Nw.getCurrentUserFailed());
            case 15:
              throw k.sent;
            case 16:
            case "end":
              return k.stop()
          }
        }, re, this, [
          [0, 11]
        ])
      }

      function le() {
        return regeneratorRuntime.wrap(function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return c.next = 2, (0, e.ib)(p.U4.CurrentUserSaga, Fe);
            case 2:
            case "end":
              return c.stop()
          }
        }, Se, this)
      }

      function de(f) {
        return regeneratorRuntime.wrap(function(k) {
          for (;;) switch (k.prev = k.next) {
            case 0:
              return k.prev = 0, k.next = 3, (0, e.RE)(ye);
            case 3:
              return k.next = 5, (0, e.RE)(xe);
            case 5:
              k.next = 22;
              break;
            case 7:
              return k.prev = 7, k.t0 = k.catch(0), k.next = 11, (0, e.RE)([localStorage, "removeItem"], y.m.CloudflareAppsToken);
            case 11:
              if ([Ee.RedirectToLogin, Ee.BadToken].includes(k.t0.name)) {
                k.next = 15;
                break
              }
              return k.next = 14, (0, e.gz)(p.Nw.initSaga(f.zoneId));
            case 14:
              return k.abrupt("return", k.sent);
            case 15:
              return k.prev = 15, k.abrupt("return", W());
            case 19:
              throw k.prev = 19, k.t1 = k.catch(15), new ce;
            case 22:
              return k.next = 24, (0, e.gz)(p.Nw.setZone(f.zoneId));
            case 24:
              return k.next = 26, (0, e.gz)(p.Nw.getCurrentUserSaga());
            case 26:
              return k.next = 28, (0, e.RE)([localStorage, "removeItem"], y.m.CloudflareAppsAuthAttempts);
            case 28:
            case "end":
              return k.stop()
          }
        }, ke, this, [
          [0, 7],
          [15, 19]
        ])
      }

      function Pe() {
        return regeneratorRuntime.wrap(function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return c.next = 2, (0, e.ib)(p.U4.InitSaga, de);
            case 2:
            case "end":
              return c.stop()
          }
        }, je, this)
      }

      function X() {
        var f, c, k, V, Re;
        return regeneratorRuntime.wrap(function(Be) {
          for (;;) switch (Be.prev = Be.next) {
            case 0:
              return Be.next = 3, (0, e.qn)(p.XO.SetCurrentUser);
            case 3:
              return f = Be.sent, Be.next = 6, (0, e.RE)([localStorage, "getItem"], y.m.CloudflareAppsToken);
            case 6:
              if (c = Be.sent, !c) {
                Be.next = 15;
                break
              }
              if (k = D(c), V = (0, n.Z)(k, "sub"), Re = (0, n.Z)(f, "meta.entities.user.".concat(f.payload, ".email")), !(Re && Re !== V)) {
                Be.next = 15;
                break
              }
              return Be.next = 14, (0, e.RE)([localStorage, "removeItem"], y.m.CloudflareAppsToken);
            case 14:
              return Be.abrupt("return", Be.sent);
            case 15:
              Be.next = 0;
              break;
            case 17:
            case "end":
              return Be.stop()
          }
        }, Y, this)
      }
      var fe = [Pe(), X(), le()],
        ee = t("../react/pages/apps/marketplace/requests/common.ts"),
        Ue = t("../react/pages/apps/marketplace/libraries/constants.ts"),
        Ne = function(c, k) {
          return c.apps ? c.apps[k] : c[k]
        },
        Ye = function(c) {
          return Ne(c, "authState")
        },
        Ke = function(c) {
          return Ne(c, "commonState")
        },
        $e = function(c) {
          return Ne(c, "homePageState")
        },
        et = function(c) {
          return Ye(c).zone
        },
        rt = t("../react/pages/apps/marketplace/libraries/helpers.ts"),
        De = t("../react/pages/apps/marketplace/state/common.reducer.ts");

      function me(f) {
        for (var c = 1; c < arguments.length; c++) {
          var k = arguments[c] != null ? Object(arguments[c]) : {},
            V = Object.keys(k);
          typeof Object.getOwnPropertySymbols == "function" && (V = V.concat(Object.getOwnPropertySymbols(k).filter(function(Re) {
            return Object.getOwnPropertyDescriptor(k, Re).enumerable
          }))), V.forEach(function(Re) {
            he(f, Re, k[Re])
          })
        }
        return f
      }

      function he(f, c, k) {
        return c in f ? Object.defineProperty(f, c, {
          value: k,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : f[c] = k, f
      }
      var we = regeneratorRuntime.mark(Ve),
        ze = regeneratorRuntime.mark(it),
        He = regeneratorRuntime.mark(ge),
        st = regeneratorRuntime.mark(q),
        G = regeneratorRuntime.mark(F),
        Q = regeneratorRuntime.mark(Te),
        J = regeneratorRuntime.mark(Le),
        te = regeneratorRuntime.mark(Qe),
        Ae = regeneratorRuntime.mark(w),
        Ie = regeneratorRuntime.mark(Ce),
        We = regeneratorRuntime.mark(ft),
        Ge = regeneratorRuntime.mark(vt);

      function Ve(f, c, k) {
        var V;
        return regeneratorRuntime.wrap(function(Ze) {
          for (;;) switch (Ze.prev = Ze.next) {
            case 0:
              return V = {
                categories: (k.markets || ["none"]).map(function(Be) {
                  var qe = Ue.XZ.find(function(at) {
                    return at.key === Be
                  });
                  return !Be || !qe ? Ue.iK.categories : qe.categories
                }).reduce(function(Be, qe) {
                  return Be.concat(qe)
                }, []).filter(function(Be, qe, at) {
                  return at.indexOf(Be) === qe
                }).join(","),
                excludeApps: c.map(function(Be) {
                  return Be.appId
                }).join(",")
              }, Ze.next = 3, (0, e.RE)(ee.RX, De.Nw, ee.Jb.recommendedApps.name, ee.Jb.recommendedApps.url(V), rt.Ux.transformers.transformAppIdsToApps.bind(null, f));
            case 3:
              return Ze.abrupt("return", Ze.sent);
            case 4:
            case "end":
              return Ze.stop()
          }
        }, we, this)
      }

      function it() {
        var f, c, k, V, Re, Ze, Be;
        return regeneratorRuntime.wrap(function(at) {
          for (;;) switch (at.prev = at.next) {
            case 0:
              return at.next = 3, (0, e.qn)(De.U4.GetHomePageAssetsSaga);
            case 3:
              return f = at.sent, c = f.zoneId, k = f.currentResources, at.next = 8, (0, e.$6)(me({}, k.appsList.status === "latent" ? {
                appsList: (0, e.RE)(ee.RX, De.Nw, ee.Jb.apps.name, ee.Jb.apps.url())
              } : {
                appsList: k.appsList.value
              }, k.categoriesList.status === "latent" ? {
                categoriesList: (0, e.RE)(ee.RX, De.Nw, ee.Jb.categories.name, ee.Jb.categories.url({
                  includeInvisible: !0
                }))
              } : {
                categoriesList: k.categoriesList.value
              }, k.installsList.status === "latent" ? {
                installsList: (0, e.RE)(ee.RX, De.Nw, ee.Jb.installs.default.name, ee.Jb.installs.default.url(c))
              } : {
                installsList: k.installsList.value
              }, k.metadata.status === "latent" ? {
                metadata: (0, e.RE)(ee.RX, De.Nw, ee.Jb.metadata.get.name, ee.Jb.metadata.get.url(c))
              } : {
                metadata: k.metadata.value
              }));
            case 8:
              return V = at.sent, Re = V.appsList, Ze = V.installsList, Be = V.metadata, at.next = 14, (0, e.gz)(De.Nw.getRecommendedAppsSaga(Re, Ze, Be));
            case 14:
              at.next = 0;
              break;
            case 16:
            case "end":
              return at.stop()
          }
        }, ze, this)
      }

      function ge() {
        var f, c, k;
        return regeneratorRuntime.wrap(function(Re) {
          for (;;) switch (Re.prev = Re.next) {
            case 0:
              return Re.next = 3, (0, e.qn)(De.U4.GetDevelopedAppsAssetsSaga);
            case 3:
              return f = Re.sent, c = f.userId, k = f.zoneId, Re.next = 8, (0, e.RE)(ee.RX, De.Nw, ee.Jb.installs.default.name, ee.Jb.installs.default.url(k));
            case 8:
              return Re.next = 10, (0, e.RE)(ee.RX, De.Nw, ee.Jb.developedApps.name, ee.Jb.developedApps.url(c));
            case 10:
              Re.next = 0;
              break;
            case 12:
            case "end":
              return Re.stop()
          }
        }, He, this)
      }

      function q() {
        var f, c, k, V, Re;
        return regeneratorRuntime.wrap(function(Be) {
          for (;;) switch (Be.prev = Be.next) {
            case 0:
              return Be.next = 3, (0, e.qn)(De.U4.GetAppInfoAssetsSaga);
            case 3:
              return f = Be.sent, c = f.appIdentifier, k = f.zoneId, V = f.version, Be.next = 9, (0, e.RE)(ee.RX, De.Nw, ee.Jb.installs.default.name, ee.Jb.installs.default.url(k));
            case 9:
              return Re = Be.sent, Be.next = 12, (0, e.RE)(ee.RX, De.Nw, ee.Jb.app.name, ee.Jb.app.url(c, V ? {
                version: V
              } : {}), rt.Ux.transformers.addCurrentSiteInstall.bind(null, Re));
            case 12:
              Be.next = 0;
              break;
            case 14:
            case "end":
              return Be.stop()
          }
        }, st, this)
      }

      function F() {
        var f;
        return regeneratorRuntime.wrap(function(k) {
          for (;;) switch (k.prev = k.next) {
            case 0:
              f = regeneratorRuntime.mark(function V() {
                var Re, Ze, Be, qe, at, tt, lt;
                return regeneratorRuntime.wrap(function(nt) {
                  for (;;) switch (nt.prev = nt.next) {
                    case 0:
                      return nt.next = 2, (0, e.qn)(De.U4.GetInstalledAppsAssetsSaga);
                    case 2:
                      return Re = nt.sent, Ze = Re.zoneId, nt.next = 6, (0, e.RE)(ee.RX, De.Nw, ee.Jb.installs.default.name, ee.Jb.installs.default.url(Ze));
                    case 6:
                      return Be = nt.sent, qe = Be.filter(function(ct) {
                        return ct.app.installable && ct.versionTag !== ct.app.infoVersion
                      }), at = qe.reduce(function(ct, Je) {
                        return ct[Je.app.alias] = (0, e.RE)(ee.RX, De.Nw, ee.Jb.app.name, ee.Jb.app.url(Je.app.alias || Je.appId), rt.Ux.transformers.addAppVersionInfo.bind(null, Je)), ct
                      }, {}), nt.next = 11, (0, e.$6)(at);
                    case 11:
                      return tt = nt.sent, lt = qe.map(function(ct) {
                        return {
                          install: ct,
                          app: tt[ct.app.alias]
                        }
                      }), nt.next = 15, (0, e.gz)(De.Nw.setUpdatableInstalls(lt));
                    case 15:
                    case "end":
                      return nt.stop()
                  }
                }, V, this)
              });
            case 1:
              return k.delegateYield(f(), "t0", 3);
            case 3:
              k.next = 1;
              break;
            case 5:
            case "end":
              return k.stop()
          }
        }, G, this)
      }

      function Te() {
        return regeneratorRuntime.wrap(function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return c.next = 3, (0, e.qn)(De.U4.GetAppsSaga);
            case 3:
              return c.next = 5, (0, e.RE)(ee.RX, De.Nw, ee.Jb.apps.name, ee.Jb.apps.url());
            case 5:
              return c.abrupt("return", c.sent);
            case 8:
            case "end":
              return c.stop()
          }
        }, Q, this)
      }

      function Le() {
        var f, c;
        return regeneratorRuntime.wrap(function(V) {
          for (;;) switch (V.prev = V.next) {
            case 0:
              return V.next = 3, (0, e.qn)(De.U4.GetCategoriesSaga);
            case 3:
              return f = V.sent, c = f.queryParams, V.next = 7, (0, e.RE)(ee.RX, De.Nw, ee.Jb.categories.name, ee.Jb.categories.url(c));
            case 7:
              return V.abrupt("return", V.sent);
            case 10:
            case "end":
              return V.stop()
          }
        }, J, this)
      }

      function Qe() {
        var f, c;
        return regeneratorRuntime.wrap(function(V) {
          for (;;) switch (V.prev = V.next) {
            case 0:
              return V.next = 3, (0, e.qn)(De.U4.GetInstallsSaga);
            case 3:
              return f = V.sent, c = f.zoneId, V.next = 7, (0, e.RE)(ee.RX, De.Nw, ee.Jb.installs.default.name, ee.Jb.installs.default.url(c));
            case 7:
              return V.abrupt("return", V.sent);
            case 10:
            case "end":
              return V.stop()
          }
        }, te, this)
      }

      function w() {
        var f, c;
        return regeneratorRuntime.wrap(function(V) {
          for (;;) switch (V.prev = V.next) {
            case 0:
              return V.next = 3, (0, e.qn)(De.U4.GetMetadataSaga);
            case 3:
              return f = V.sent, c = f.zoneId, V.next = 7, (0, e.RE)(ee.RX, De.Nw, ee.Jb.metadata.get.name, ee.Jb.metadata.get.url(c));
            case 7:
              return V.abrupt("return", V.sent);
            case 10:
            case "end":
              return V.stop()
          }
        }, Ae, this)
      }

      function Ce() {
        var f, c, k, V;
        return regeneratorRuntime.wrap(function(Ze) {
          for (;;) switch (Ze.prev = Ze.next) {
            case 0:
              return Ze.next = 3, (0, e.qn)(De.U4.GetRecommendedAppsSaga);
            case 3:
              return f = Ze.sent, c = f.appsList, k = f.installsList, V = f.metadata, Ze.next = 9, (0, e.RE)(Ve, c, k, V);
            case 9:
              Ze.next = 0;
              break;
            case 11:
            case "end":
              return Ze.stop()
          }
        }, Ie, this)
      }

      function ft() {
        var f, c, k, V, Re, Ze, Be, qe;
        return regeneratorRuntime.wrap(function(tt) {
          for (;;) switch (tt.prev = tt.next) {
            case 0:
              return tt.next = 3, (0, e.qn)(De.U4.PostMetadataSaga);
            case 3:
              return f = tt.sent, c = f.zoneId, k = f.data, tt.prev = 6, tt.next = 9, (0, e.Ys)(Ke);
            case 9:
              return V = tt.sent, Re = V.appsList, Ze = V.installsList, Be = V.metadata, qe = me({}, Be.value, {
                id: c,
                markets: [k]
              }), tt.next = 16, (0, e.RE)(ee.JX, De.Nw, ee.Jb.metadata.post.name, ee.Jb.metadata.post.url(c), qe);
            case 16:
              return tt.next = 18, (0, e.RE)(Ve, Re.value, Ze.value, qe);
            case 18:
              tt.next = 22;
              break;
            case 20:
              tt.prev = 20, tt.t0 = tt.catch(6);
            case 22:
              tt.next = 0;
              break;
            case 24:
            case "end":
              return tt.stop()
          }
        }, We, this, [
          [6, 20]
        ])
      }

      function vt() {
        return regeneratorRuntime.wrap(function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return c.next = 3, (0, e.qn)(De.dg.CloudflareZoneChangeStart);
            case 3:
              return c.next = 5, (0, e.gz)(De.Nw.zoneChangedSaga());
            case 5:
              c.next = 0;
              break;
            case 7:
            case "end":
              return c.stop()
          }
        }, Ge, this)
      }
      var yt = [it(), F(), ge(), q(), Te(), Qe(), Le(), w(), ft(), Ce(), vt()],
        ht = null;

      function bt(f) {
        return St(f) || Et(f) || _t(f) || Ot()
      }

      function Ot() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function _t(f, c) {
        if (!!f) {
          if (typeof f == "string") return ut(f, c);
          var k = Object.prototype.toString.call(f).slice(8, -1);
          if (k === "Object" && f.constructor && (k = f.constructor.name), k === "Map" || k === "Set") return Array.from(f);
          if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return ut(f, c)
        }
      }

      function Et(f) {
        if (typeof Symbol != "undefined" && f[Symbol.iterator] != null || f["@@iterator"] != null) return Array.from(f)
      }

      function St(f) {
        if (Array.isArray(f)) return ut(f)
      }

      function ut(f, c) {
        (c == null || c > f.length) && (c = f.length);
        for (var k = 0, V = new Array(c); k < c; k++) V[k] = f[k];
        return V
      }
      var Ct = bt(fe).concat(bt(yt));

      function x() {
        return regeneratorRuntime.wrap(function(c) {
          for (;;) switch (c.prev = c.next) {
            case 0:
              return c.next = 2, all(Ct);
            case 2:
            case "end":
              return c.stop()
          }
        }, ht, this)
      }
    },
    "../react/pages/apps/marketplace/libraries/constants.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        NT: function() {
          return S
        },
        XZ: function() {
          return l
        },
        gY: function() {
          return E
        },
        iK: function() {
          return b
        },
        j9: function() {
          return p
        }
      });
      var e = t("../react/pages/apps/marketplace/marketplace.translations.ts"),
        n = /local.cloudflareapps.com/,
        p = /staging.cloudflare.com/,
        E = 900,
        b = {
          key: "none",
          label: e.keys.markets_metadata_label_popular,
          categories: ["recommended-for-all-sites", "recommended-for-blogs", "recommended-for-stores", "recommended-for-marketing-sites"]
        },
        l = [{
          key: "blog",
          label: e.keys.markets_metadata_label_blog,
          categories: ["recommended-for-all-sites", "recommended-for-blogs"]
        }, {
          key: "store",
          label: e.keys.markets_metadata_label_store,
          categories: ["recommended-for-all-sites", "recommended-for-stores"]
        }, {
          key: "marketing",
          label: e.keys.markets_metadata_label_marketing,
          categories: ["recommended-for-all-sites", "recommended-for-marketing-sites"]
        }, b],
        S = [{
          type: "string",
          field: "id"
        }, {
          type: "string",
          field: "title"
        }, {
          type: "string",
          field: "shortDescription"
        }, {
          type: "string",
          field: "longDescription"
        }, {
          type: "string",
          field: "instructions"
        }, {
          type: "string",
          field: "alias"
        }, {
          type: "string",
          field: "orgId"
        }, {
          type: "string",
          field: "author"
        }, {
          type: "string",
          field: "tagline"
        }, {
          type: "string",
          field: "website"
        }, {
          type: "string",
          field: "supportEmail"
        }, {
          type: "string",
          field: "org.id"
        }, {
          type: "string",
          field: "org.title"
        }, {
          type: "string",
          field: "org.username"
        }, {
          type: "list",
          field: "categories.id"
        }, {
          type: "list",
          field: "categories.title"
        }, {
          type: "list",
          field: "categories.description"
        }, {
          type: "list",
          field: "categories.metadata"
        }]
    },
    "../react/pages/apps/marketplace/libraries/helpers.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Dl: function() {
          return g
        },
        Ux: function() {
          return y
        },
        Vl: function() {
          return u
        },
        cz: function() {
          return j
        },
        im: function() {
          return v
        },
        jZ: function() {
          return _
        },
        pG: function() {
          return C
        },
        t$: function() {
          return T
        }
      });
      var e = t("../../../../node_modules/lodash-es/random.js"),
        n = t("../../../../node_modules/lodash-es/get.js"),
        p = t("../../../../node_modules/lodash-es/isEqual.js"),
        E = t("../react/pages/apps/marketplace/libraries/constants.ts");

      function b(A) {
        for (var m = 1; m < arguments.length; m++) {
          var h = arguments[m] != null ? Object(arguments[m]) : {},
            O = Object.keys(h);
          typeof Object.getOwnPropertySymbols == "function" && (O = O.concat(Object.getOwnPropertySymbols(h).filter(function(N) {
            return Object.getOwnPropertyDescriptor(h, N).enumerable
          }))), O.forEach(function(N) {
            l(A, N, h[N])
          })
        }
        return A
      }

      function l(A, m, h) {
        return m in A ? Object.defineProperty(A, m, {
          value: h,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : A[m] = h, A
      }
      var S = function(m) {
          return m.test(window.location.hostname)
        },
        v = function() {
          return S(E.j9)
        },
        r = function() {
          return S(MARKETPLACE_LOCAL_URL_REGEXP)
        },
        u = function(m, h) {
          var O = (0, e.Z)(0, 1) ? -1 : 1;
          return m.points === h.points || m.points >= E.gY && h.points >= E.gY ? O : m.points < 0 || h.points < 0 || m.points >= E.gY || h.points >= E.gY ? h.points - m.points : O
        },
        g = function(m, h, O) {
          var N = (0, n.Z)(h, O),
            K = (0, n.Z)(m, O);
          return N && !(0, p.Z)(N, K)
        },
        y = {
          transformers: {
            transformAppIdsToApps: function(m, h) {
              return h.map(function(O) {
                return m.find(function(N) {
                  return N.id === O
                })
              })
            },
            addAppVersionInfo: function(m, h) {
              return b({}, h, {
                currentVersion: h.versions.find(function(O) {
                  return O.tag === m.versionTag
                }),
                latestVersion: h.versions.find(function(O) {
                  return O.tag === h.infoVersion
                })
              })
            },
            addCurrentSiteInstall: function(m, h) {
              return b({}, h, {
                currentSiteInstall: m.find(function(O) {
                  return O.appId === h.id
                })
              })
            }
          }
        },
        C = function(m, h, O) {
          return b({}, m, h, O ? {
            value: O
          } : {})
        },
        j = function(m) {
          return m.map(function(h) {
            return h.status
          })
        },
        T = function(m) {
          return m.apps ? m.apps : m
        },
        _ = function(m) {
          var h = ["by-cloudflare"];
          return m.filter(function(O) {
            return !h.includes(O.id) && O.visible
          }).sort(function(O, N) {
            return O.points < N.points ? 1 : 0
          })
        }
    },
    "../react/pages/apps/marketplace/marketplace.translations.ts": function(Oe, M, t) {
      "use strict";
      t.r(M), t.d(M, {
        categorySlugTranslationKey: function() {
          return l
        },
        keys: function() {
          return p
        },
        namespace: function() {
          return b
        },
        translations: function() {
          return E
        }
      });
      var e = t("../../../common/intl/intl-core/src/prepare.ts"),
        n = (0, e.x)("marketplace", {
          markets_metadata_label_popular: "Just show me the most popular apps",
          markets_metadata_label_blog: "Improve my blog or portfolio",
          markets_metadata_label_store: "Supercharge my online store",
          markets_metadata_label_marketing: "Improve my marketing and lead generation",
          nav_bar_explore_apps: "Explore Apps",
          nav_bar_installed_apps: "Your Installed Apps",
          nav_bar_developed_apps: "Your Developed Apps",
          common_card_button_show_all: "Show All",
          app_card_untitled_app: "Untitled App",
          app_card_installed_flag: "Installed",
          developer_footer_card_title: "developers",
          developer_footer_card_header: "Ship your code to 13 million sites.",
          developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
          developer_footer_learn_more: "Learn more \u203A",
          recommended_apps_personalize_save: "Save",
          recommended_apps_personalize_customize: "Customize",
          recommended_apps_card_error_loading: "There was a problem loading popular apps.",
          angular_app_iframe_content: "Could not load content",
          home_page_errored: "There was an error!",
          home_page_apps_search_label: "Search Apps",
          home_page_categories_filter_label: "Filter Apps",
          home_page_categories_filter_options_all: "All",
          home_page_categories_filter_options_popular: "Popular",
          category_card_popular_title: "Popular<0> apps\u203A</0>",
          category_card_popular_subtitle: "Our most popular and highly rated apps.",
          home_page_categories_filter_options_ui_and_design: "UI & Design",
          home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
          home_page_categories_filter_options_security: "Security",
          home_page_categories_filter_options_performance: "Performance",
          home_page_categories_filter_options_insights: "Insights",
          home_page_categories_filter_options_social_and_communication: "Social & Communication",
          category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
          category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
          category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
          category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
          category_card_security_title: "Security<0> apps\u203A</0>",
          category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
          category_card_insights_title: "Insights<0> apps\u203A</0>",
          category_card_insights_subtitle: "Apps that provide insight into your visitors.",
          category_card_performance_title: "Performance<0> apps\u203A</0>",
          category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
          category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
          category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
          home_page_categories_filter_options_powr: "POWR",
          home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
          home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
          home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
          home_page_categories_filter_options_performance_and_security: "Performance & Security",
          home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
          home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
          home_page_categories_filter_options_get_more_customers: "Get More Customers",
          home_page_categories_filter_options_getting_started_apps: "Getting Started",
          home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
          home_page_categories_filter_options_add_on: "Add-ons",
          home_page_categories_filter_options_communication: "Communication",
          home_page_categories_filter_options_humor: "Humor",
          home_page_categories_filter_options_design: "Design & Polish",
          home_page_categories_filter_options_for_developers: "For Developers",
          home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
          home_page_categories_filter_options_marketing: "Marketing",
          home_page_categories_filter_options_social_media: "Social Media",
          home_page_categories_filter_options_e_commerce: "E-Commerce",
          home_page_categories_filter_options_analytics: "Analytics",
          category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
          category_card_powr_title: "POWR<0> apps\u203A</0>",
          category_card_powr_subtitle: "Apps created by POWR",
          category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
          category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
          category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
          category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
          category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
          category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
          category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
          category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
          category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
          category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
          category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
          category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
          category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
          category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
          category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
          category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
          category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
          category_card_add_on_title: "Add-ons<0> \u203A</0>",
          category_card_add_on_subtitle: "Drop-in components to add to your website.",
          category_card_communication_title: "Communication<0> apps\u203A</0>",
          category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
          category_card_humor_title: "Humor<0> apps\u203A</0>",
          category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
          category_card_design_title: "Design & Polish<0> apps\u203A</0>",
          category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
          category_card_for_developers_title: "For Developers<0> \u203A</0>",
          category_card_for_developers_subtitle: "Apps made for web developers and designers.",
          category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
          category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
          category_card_marketing_title: "Marketing<0> apps\u203A</0>",
          category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
          category_card_social_media_title: "Social Media<0> apps\u203A</0>",
          category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
          category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
          category_card_e_commerce_subtitle: "Tools to help your online business.",
          category_card_analytics_title: "Analytics<0> apps\u203A</0>",
          category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
          app_edit_install: "Edit Install",
          app_uninstall: "Uninstall",
          app_installed: "Installed",
          app_cancel: "Cancel",
          app_retry: "Retry",
          app_info_about: "About",
          app_info_no_description: "This app has no description.",
          app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
          app_info_try_on_your_site: "Try it out on your site now!",
          app_info_preview: "Preview",
          app_info_header_preview: "Preview on your site",
          app_info_starting_price: "Starting at %{appStartingPrice}",
          app_info_install_free: "Install for FREE",
          app_info_details: "Details",
          app_info_rating: "Rating",
          app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
          app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
          app_info_developer: "Developer",
          app_info_support_contact: "Support Contact",
          app_info_category: "Category",
          app_info_categories: "Categories",
          app_info_elsewhere: "Elsewhere",
          app_info_external_link_website: "Website \u203A",
          app_info_external_link_tos: "Terms of Service \u203A",
          app_info_external_link_privacy: "Privacy Policy \u203A",
          app_info_external_link_source: "Source Code \u203A",
          developed_app_card_configure: "Configure",
          developed_app_card_metrics: "Metrics",
          developed_app_card_status_approved: "Approved",
          developed_app_card_status_hidden: "Hidden",
          developed_app_card_status_draft: "Draft",
          developed_app_card_status_pending: "Awaiting approval...",
          installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
          installed_app_card_leave_feedback: "Leave Feedback",
          installed_app_card_visit_vendor_site: "Visit vendor site",
          installed_app_card_visit_vendor: "Visit %{title}",
          installed_app_card_external_link: "External Link",
          installed_app_card_upgrade_version: "Upgrade version",
          installed_app_card_update: "Update",
          installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
          installed_apps_group_title_all: "Installed on all pages",
          installed_apps_group_title_page: "Installed on <0>%{page}</0>",
          installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
          installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
          uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
          uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
          uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
          page_loading_error: "There was an error loading the page.",
          developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
          developed_apps_no_apps: "No apps were found.",
          developed_apps_create_app: "Create an App",
          developed_apps_banner_title: "Developers",
          developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
          developed_apps_banner_dashboard: "Developer Dashboard",
          installed_apps_heading: "Apps",
          installed_apps_update_toast: "You have 1 app with pending updates.",
          installed_apps_updates_toast: "You have %{length} apps with pending updates.",
          installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
          installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
        }),
        p = n.keys,
        E = n.translations,
        b = n.namespace;

      function l(S) {
        var v = S.replace(/-/g, "_");
        return Object.keys(p).includes(v) ? v : void 0
      }
    },
    "../react/pages/apps/marketplace/requests/Requester.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        L: function() {
          return j
        }
      });
      var e = t("../../../../node_modules/lodash-es/defaults.js"),
        n = t("../react/pages/apps/marketplace/libraries/helpers.ts");

      function p(T) {
        for (var _ = 1; _ < arguments.length; _++) {
          var A = arguments[_] != null ? Object(arguments[_]) : {},
            m = Object.keys(A);
          typeof Object.getOwnPropertySymbols == "function" && (m = m.concat(Object.getOwnPropertySymbols(A).filter(function(h) {
            return Object.getOwnPropertyDescriptor(A, h).enumerable
          }))), m.forEach(function(h) {
            g(T, h, A[h])
          })
        }
        return T
      }

      function E(T, _) {
        if (T == null) return {};
        var A = b(T, _),
          m, h;
        if (Object.getOwnPropertySymbols) {
          var O = Object.getOwnPropertySymbols(T);
          for (h = 0; h < O.length; h++) m = O[h], !(_.indexOf(m) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, m) || (A[m] = T[m]))
        }
        return A
      }

      function b(T, _) {
        if (T == null) return {};
        var A = {},
          m = Object.keys(T),
          h, O;
        for (O = 0; O < m.length; O++) h = m[O], !(_.indexOf(h) >= 0) && (A[h] = T[h]);
        return A
      }

      function l(T, _, A, m, h, O, N) {
        try {
          var K = T[O](N),
            B = K.value
        } catch (_e) {
          A(_e);
          return
        }
        K.done ? _(B) : Promise.resolve(B).then(m, h)
      }

      function S(T) {
        return function() {
          var _ = this,
            A = arguments;
          return new Promise(function(m, h) {
            var O = T.apply(_, A);

            function N(B) {
              l(O, m, h, N, K, "next", B)
            }

            function K(B) {
              l(O, m, h, N, K, "throw", B)
            }
            N(void 0)
          })
        }
      }

      function v(T, _) {
        if (!(T instanceof _)) throw new TypeError("Cannot call a class as a function")
      }

      function r(T, _) {
        for (var A = 0; A < _.length; A++) {
          var m = _[A];
          m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(T, m.key, m)
        }
      }

      function u(T, _, A) {
        return _ && r(T.prototype, _), A && r(T, A), T
      }

      function g(T, _, A) {
        return _ in T ? Object.defineProperty(T, _, {
          value: A,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : T[_] = A, T
      }
      var y = t("../../../../node_modules/url-join/lib/url-join.js"),
        C = function() {
          function T(_) {
            var A = this;
            v(this, T), g(this, "token", void 0), g(this, "options", void 0), g(this, "setAuthHeader", function(m) {
              A.token = m
            }), this.token = "", this.options = (0, e.Z)(_, T.defaults)
          }
          return u(T, [{
            key: "getAuthHeaders",
            value: function() {
              return {
                Authorization: "Bearer ".concat(this.token)
              }
            }
          }, {
            key: "request",
            value: function() {
              var _ = S(regeneratorRuntime.mark(function A() {
                var m, h, O, N, K, B = arguments;
                return regeneratorRuntime.wrap(function(Ee) {
                  for (;;) switch (Ee.prev = Ee.next) {
                    case 0:
                      return m = B.length > 0 && B[0] !== void 0 ? B[0] : "GET", h = B.length > 1 ? B[1] : void 0, O = B.length > 2 && B[2] !== void 0 ? B[2] : {}, N = O.body, K = E(O, ["body"]), Ee.abrupt("return", fetch(y(this.options.baseUrl, h), p({
                        method: m
                      }, K, N ? {
                        body: JSON.stringify(N)
                      } : {}, {
                        credentials: "same-origin",
                        headers: new Headers(p({
                          Accept: "application/json, text/plain, */*"
                        }, O.headers, this.getAuthHeaders()))
                      })));
                    case 5:
                    case "end":
                      return Ee.stop()
                  }
                }, A, this)
              }));
              return function() {
                return _.apply(this, arguments)
              }
            }()
          }, {
            key: "fetchJSON",
            value: function() {
              var _ = S(regeneratorRuntime.mark(function A(m) {
                var h, O, N = arguments;
                return regeneratorRuntime.wrap(function(B) {
                  for (;;) switch (B.prev = B.next) {
                    case 0:
                      return h = N.length > 1 && N[1] !== void 0 ? N[1] : {}, B.next = 3, this.request("GET", m, h);
                    case 3:
                      return O = B.sent, B.abrupt("return", this.parseJSONResponse(O));
                    case 5:
                    case "end":
                      return B.stop()
                  }
                }, A, this)
              }));
              return function(m) {
                return _.apply(this, arguments)
              }
            }()
          }, {
            key: "postJSON",
            value: function() {
              var _ = S(regeneratorRuntime.mark(function A(m) {
                var h, O, N = arguments;
                return regeneratorRuntime.wrap(function(B) {
                  for (;;) switch (B.prev = B.next) {
                    case 0:
                      return h = N.length > 1 && N[1] !== void 0 ? N[1] : {}, B.next = 3, this.request("POST", m, p({}, h, {
                        headers: p({}, h.headers, {
                          "Content-Type": "application/json"
                        })
                      }));
                    case 3:
                      return O = B.sent, B.abrupt("return", this.parseJSONResponse(O));
                    case 5:
                    case "end":
                      return B.stop()
                  }
                }, A, this)
              }));
              return function(m) {
                return _.apply(this, arguments)
              }
            }()
          }, {
            key: "parseJSONResponse",
            value: function(A) {
              return A.json()
            }
          }]), T
        }();
      g(C, "defaults", {
        baseUrl: (0, n.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
      });
      var j = new C
    },
    "../react/pages/apps/marketplace/requests/common.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        RX: function() {
          return C
        },
        JX: function() {
          return j
        },
        Jb: function() {
          return _
        }
      });
      var e = t("../../../../node_modules/lodash-es/upperFirst.js"),
        n = t("../../../../node_modules/lodash-es/isEmpty.js"),
        p = t("../../../../node_modules/query-string/query-string.js"),
        E = t("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
        b = t("../react/pages/apps/marketplace/requests/Requester.ts");

      function l(h, O) {
        if (!(h instanceof O)) throw new TypeError("Cannot call a class as a function")
      }

      function S(h, O, N) {
        return O in h ? Object.defineProperty(h, O, {
          value: N,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : h[O] = N, h
      }
      var v = function h(O) {
        l(this, h), S(this, "name", void 0), S(this, "url", void 0), this.name = O.name, this.url = O.url
      };

      function r(h, O, N, K, B, _e, Ee) {
        try {
          var ce = h[_e](Ee),
            pe = ce.value
        } catch (L) {
          N(L);
          return
        }
        ce.done ? O(pe) : Promise.resolve(pe).then(K, B)
      }

      function u(h) {
        return function() {
          var O = this,
            N = arguments;
          return new Promise(function(K, B) {
            var _e = h.apply(O, N);

            function Ee(pe) {
              r(_e, K, B, Ee, ce, "next", pe)
            }

            function ce(pe) {
              r(_e, K, B, Ee, ce, "throw", pe)
            }
            Ee(void 0)
          })
        }
      }
      var g = regeneratorRuntime.mark(C),
        y = regeneratorRuntime.mark(j);

      function C(h, O, N, K) {
        var B, _e, Ee, ce, pe, L;
        return regeneratorRuntime.wrap(function(D) {
          for (;;) switch (D.prev = D.next) {
            case 0:
              return B = (0, e.Z)(O), _e = "get".concat(B, "Sending"), Ee = "get".concat(B, "Success"), ce = "get".concat(B, "Failed"), D.prev = 2, D.next = 5, (0, E.gz)(h[_e]());
            case 5:
              return D.next = 7, (0, E.RE)(A, N);
            case 7:
              if (pe = D.sent, L = pe, !L.error) {
                D.next = 13;
                break
              }
              return D.next = 12, (0, E.gz)(h[ce]());
            case 12:
              return D.abrupt("return");
            case 13:
              if (!K) {
                D.next = 17;
                break
              }
              return D.next = 16, K(pe);
            case 16:
              L = D.sent;
            case 17:
              return D.next = 19, (0, E.gz)(h[Ee](L));
            case 19:
              return D.abrupt("return", L);
            case 22:
              return D.prev = 22, D.t0 = D.catch(2), D.next = 26, (0, E.gz)(h[ce]());
            case 26:
            case "end":
              return D.stop()
          }
        }, g, this, [
          [2, 22]
        ])
      }

      function j(h, O, N, K) {
        var B, _e, Ee, ce, pe;
        return regeneratorRuntime.wrap(function(R) {
          for (;;) switch (R.prev = R.next) {
            case 0:
              return B = (0, e.Z)(O), _e = "get".concat(B, "Sending"), Ee = "get".concat(B, "Success"), ce = "get".concat(B, "Failed"), R.prev = 4, R.next = 7, (0, E.gz)(h[_e]());
            case 7:
              return R.next = 9, (0, E.RE)(m, {
                url: N,
                data: K
              });
            case 9:
              return pe = R.sent, R.next = 12, (0, E.gz)(h[Ee](pe));
            case 12:
              return R.abrupt("return", pe);
            case 15:
              return R.prev = 15, R.t0 = R.catch(4), R.next = 19, (0, E.gz)(h[ce]());
            case 19:
            case "end":
              return R.stop()
          }
        }, y, this, [
          [4, 15]
        ])
      }
      var T = function(O) {
          return (0, n.Z)(O) ? "" : "?".concat(p.stringify(O))
        },
        _ = {
          app: new v({
            name: "app",
            url: function(O, N) {
              return "apps/".concat(O).concat(T(N))
            }
          }),
          apps: new v({
            name: "apps",
            url: function() {
              return "apps"
            }
          }),
          installs: {
            default: new v({
              name: "installs",
              url: function(O) {
                return "sites/".concat(O, "/installs")
              }
            }),
            delete: new v({
              name: "installs",
              url: function(O) {
                return "installs/".concat(O)
              }
            })
          },
          categories: new v({
            name: "categories",
            url: function() {
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return "categories" + T(O)
            }
          }),
          metadata: {
            get: new v({
              name: "metadata",
              url: function(O) {
                return "sites/".concat(O, "/metadata")
              }
            }),
            post: new v({
              name: "metadata",
              url: function(O) {
                return "sites/".concat(O, "/metadata")
              }
            })
          },
          ratings: {
            default: new v({
              name: "ratings",
              url: function() {
                var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return "ratings" + T(O)
              }
            }),
            delete: new v({
              name: "ratings",
              url: function(O) {
                return "ratings/".concat(O)
              }
            })
          },
          recommendedApps: new v({
            name: "recommendedApps",
            url: function() {
              var O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return "apps/recommend" + T(O)
            }
          }),
          developedApps: new v({
            name: "developedApps",
            url: function(O) {
              return "user/".concat(O, "/apps")
            }
          })
        },
        A = function() {
          var h = u(regeneratorRuntime.mark(function O(N) {
            return regeneratorRuntime.wrap(function(B) {
              for (;;) switch (B.prev = B.next) {
                case 0:
                  return B.abrupt("return", b.L.fetchJSON(N));
                case 1:
                case "end":
                  return B.stop()
              }
            }, O, this)
          }));
          return function(N) {
            return h.apply(this, arguments)
          }
        }(),
        m = function() {
          var h = u(regeneratorRuntime.mark(function O(N) {
            var K, B;
            return regeneratorRuntime.wrap(function(Ee) {
              for (;;) switch (Ee.prev = Ee.next) {
                case 0:
                  return K = N.url, B = N.data, Ee.abrupt("return", b.L.postJSON(K, {
                    body: B
                  }));
                case 2:
                case "end":
                  return Ee.stop()
              }
            }, O, this)
          }));
          return function(N) {
            return h.apply(this, arguments)
          }
        }()
    },
    "../react/pages/apps/marketplace/state/auth.reducer.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Nw: function() {
          return l
        },
        U4: function() {
          return b
        },
        XO: function() {
          return E
        },
        ZP: function() {
          return S
        }
      });
      var e = t("../react/pages/apps/marketplace/config/initialState.ts");

      function n(v) {
        for (var r = 1; r < arguments.length; r++) {
          var u = arguments[r] != null ? Object(arguments[r]) : {},
            g = Object.keys(u);
          typeof Object.getOwnPropertySymbols == "function" && (g = g.concat(Object.getOwnPropertySymbols(u).filter(function(y) {
            return Object.getOwnPropertyDescriptor(u, y).enumerable
          }))), g.forEach(function(y) {
            p(v, y, u[y])
          })
        }
        return v
      }

      function p(v, r, u) {
        return r in v ? Object.defineProperty(v, r, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : v[r] = u, v
      }
      var E;
      (function(v) {
        v.SetCurrentUser = "user.set"
      })(E || (E = {}));
      var b;
      (function(v) {
        v.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", v.SetZone = "MARKETPLACE/AUTH/SET_ZONE", v.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", v.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", v.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", v.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", v.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", v.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", v.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", v.ResetState = "MARKETPLACE/AUTH/RESET_STATE"
      })(b || (b = {}));
      var l = {
        resetState: function() {
          return {
            type: b.ResetState
          }
        },
        initSaga: function(r) {
          return {
            type: b.InitSaga,
            zoneId: r
          }
        },
        setZone: function(r) {
          return {
            type: b.SetZone,
            zone: r
          }
        },
        setToken: function(r) {
          return {
            type: b.SetToken,
            token: r
          }
        },
        clearToken: function() {
          return {
            type: b.ClearToken
          }
        },
        setTokenValid: function(r) {
          return {
            type: b.SetTokenValid,
            isTokenValid: r
          }
        },
        getCurrentUserSaga: function() {
          return {
            type: b.CurrentUserSaga
          }
        },
        getCurrentUserSending: function() {
          return {
            type: b.CurrentUserSending
          }
        },
        getCurrentUserSuccess: function(r) {
          return {
            type: b.CurrentUserSuccess,
            user: r
          }
        },
        getCurrentUserFailed: function() {
          return {
            type: b.CurrentUserFailed
          }
        }
      };

      function S() {
        var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.fD,
          r = arguments.length > 1 ? arguments[1] : void 0;
        switch (r.type) {
          case b.ResetState:
            return n({}, e.fD);
          case b.CurrentUserSending:
            return n({}, v);
          case b.CurrentUserSuccess:
            var u = r.user;
            return n({}, v, {
              user: u
            });
          case b.CurrentUserFailed:
            return n({}, v);
          case b.SetZone:
            var g = r.zone;
            return n({}, v, {
              zone: g
            });
          case b.SetToken:
            var y = r.token;
            return n({}, v, {
              token: y
            });
          case b.ClearToken:
            return n({}, v, {
              token: null
            });
          case b.SetTokenValid:
            var C = r.isTokenValid;
            return n({}, v, {
              isTokenValid: C
            });
          default:
            return v
        }
      }
    },
    "../react/pages/apps/marketplace/state/common.reducer.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Nw: function() {
          return S
        },
        U4: function() {
          return l
        },
        ZP: function() {
          return v
        },
        dg: function() {
          return b
        }
      });
      var e = t("../react/pages/apps/marketplace/config/initialState.ts"),
        n = t("../react/pages/apps/marketplace/libraries/helpers.ts");

      function p(r) {
        for (var u = 1; u < arguments.length; u++) {
          var g = arguments[u] != null ? Object(arguments[u]) : {},
            y = Object.keys(g);
          typeof Object.getOwnPropertySymbols == "function" && (y = y.concat(Object.getOwnPropertySymbols(g).filter(function(C) {
            return Object.getOwnPropertyDescriptor(g, C).enumerable
          }))), y.forEach(function(C) {
            E(r, C, g[C])
          })
        }
        return r
      }

      function E(r, u, g) {
        return u in r ? Object.defineProperty(r, u, {
          value: g,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : r[u] = g, r
      }
      var b;
      (function(r) {
        r.CloudflareZoneChangeStart = "zone.start"
      })(b || (b = {}));
      var l;
      (function(r) {
        r.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", r.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", r.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", r.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", r.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", r.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", r.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", r.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", r.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", r.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", r.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", r.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", r.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", r.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", r.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", r.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", r.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", r.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", r.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", r.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", r.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", r.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", r.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", r.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", r.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", r.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", r.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", r.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", r.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", r.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", r.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", r.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", r.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", r.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", r.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", r.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", r.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", r.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", r.ResetState = "MARKETPLACE/COMMON/RESET_STATE"
      })(l || (l = {}));
      var S = {
        resetState: function() {
          return {
            type: l.ResetState
          }
        },
        zoneChangedSaga: function() {
          return {
            type: l.ZoneChangedSaga
          }
        },
        getHomePageAssetsSaga: function(u, g) {
          return {
            type: l.GetHomePageAssetsSaga,
            zoneId: u,
            currentResources: g
          }
        },
        getInstalledAppsAssetsSaga: function(u) {
          return {
            type: l.GetInstalledAppsAssetsSaga,
            zoneId: u
          }
        },
        getDevelopedAppsAssetsSaga: function(u, g) {
          return {
            type: l.GetDevelopedAppsAssetsSaga,
            userId: u,
            zoneId: g
          }
        },
        getDevelopedAppsSending: function() {
          return {
            type: l.GetDevelopedAppsSending
          }
        },
        getDevelopedAppsSuccess: function(u) {
          return {
            type: l.GetDevelopedAppsSuccess,
            developedApps: u
          }
        },
        getDevelopedAppsFailed: function() {
          return {
            type: l.GetDevelopedAppsFailed
          }
        },
        getAppInfoAssetsSaga: function(u, g, y) {
          return {
            type: l.GetAppInfoAssetsSaga,
            appIdentifier: u,
            zoneId: g,
            version: y
          }
        },
        setUpdatableInstalls: function(u) {
          return {
            type: l.SetUpdatableInstalls,
            updatableInstallsList: u
          }
        },
        getAppSaga: function(u) {
          return {
            type: l.GetAppSaga,
            appIdentifier: u
          }
        },
        getAppSending: function() {
          return {
            type: l.GetAppSending
          }
        },
        getAppSuccess: function(u) {
          return {
            type: l.GetAppSuccess,
            app: u
          }
        },
        getAppFailed: function() {
          return {
            type: l.GetAppFailed
          }
        },
        clearApp: function() {
          return {
            type: l.ClearApp
          }
        },
        getAppsSaga: function() {
          return {
            type: l.GetAppsSaga
          }
        },
        getAppsSending: function() {
          return {
            type: l.GetAppsSending
          }
        },
        getAppsSuccess: function(u) {
          return {
            type: l.GetAppsSuccess,
            appsList: u
          }
        },
        getAppsFailed: function() {
          return {
            type: l.GetAppsFailed
          }
        },
        getInstallsSaga: function(u) {
          return {
            type: l.GetInstallsSaga,
            zoneId: u
          }
        },
        getInstallsSending: function() {
          return {
            type: l.GetInstallsSending
          }
        },
        getInstallsSuccess: function(u) {
          return {
            type: l.GetInstallsSuccess,
            installsList: u
          }
        },
        getInstallsFailed: function() {
          return {
            type: l.GetInstallsFailed
          }
        },
        getCategoriesSaga: function(u) {
          return {
            type: l.GetCategoriesSaga,
            queryParams: u
          }
        },
        getCategoriesSending: function() {
          return {
            type: l.GetCategoriesSending
          }
        },
        getCategoriesSuccess: function(u) {
          return {
            type: l.GetCategoriesSuccess,
            categoriesList: u
          }
        },
        getCategoriesFailed: function() {
          return {
            type: l.GetCategoriesFailed
          }
        },
        getMetadataSaga: function(u) {
          return {
            type: l.GetMetadataSaga,
            zoneId: u
          }
        },
        getMetadataSending: function() {
          return {
            type: l.GetMetadataSending
          }
        },
        getMetadataSuccess: function(u) {
          return {
            type: l.GetMetadataSuccess,
            metadata: u
          }
        },
        getMetadataFailed: function() {
          return {
            type: l.GetMetadataFailed
          }
        },
        postMetadataSaga: function(u, g) {
          return {
            type: l.PostMetadataSaga,
            zoneId: u,
            data: g
          }
        },
        postMetadataSending: function() {
          return {
            type: l.PostMetadataSending
          }
        },
        postMetadataSuccess: function(u) {
          return {
            type: l.PostMetadataSuccess,
            metadata: u
          }
        },
        postMetadataFailed: function() {
          return {
            type: l.PostMetadataFailed
          }
        },
        getRecommendedAppsSaga: function(u, g, y) {
          return {
            type: l.GetRecommendedAppsSaga,
            appsList: u,
            installsList: g,
            metadata: y
          }
        },
        getRecommendedAppsSending: function() {
          return {
            type: l.GetRecommendedAppsSending
          }
        },
        getRecommendedAppsSuccess: function(u) {
          return {
            type: l.GetRecommendedAppsSuccess,
            recommendedAppsList: u
          }
        },
        getRecommendedAppsFailed: function() {
          return {
            type: l.GetRecommendedAppsFailed
          }
        }
      };

      function v() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.w6,
          u = arguments.length > 1 ? arguments[1] : void 0;
        switch (u.type) {
          case l.ResetState:
            return p({}, e.w6);
          case l.ZoneChangedSaga:
            return p({}, r, {
              installsList: p({}, e.w6.installsList),
              recommendedAppsList: p({}, e.w6.recommendedAppsList),
              metadata: p({}, e.w6.metadata)
            });
          case l.GetAppsSending:
            return p({}, r, {
              appsList: p({}, (0, n.pG)(r.appsList, e.h_))
            });
          case l.GetAppsSuccess:
            return p({}, r, {
              appsList: p({}, (0, n.pG)(r.appsList, e.Jz, u.appsList))
            });
          case l.GetAppsFailed:
            return p({}, r, {
              appsList: p({}, (0, n.pG)(r.appsList, e.yc))
            });
          case l.GetInstallsSending:
            return p({}, r, {
              installsList: p({}, (0, n.pG)(r.installsList, e.h_))
            });
          case l.GetInstallsSuccess:
            return p({}, r, {
              installsList: p({}, (0, n.pG)(r.installsList, e.Jz, u.installsList))
            });
          case l.GetInstallsFailed:
            return p({}, r, {
              installsList: p({}, (0, n.pG)(r.installsList, e.yc))
            });
          case l.GetCategoriesSending:
            return p({}, r, {
              categoriesList: p({}, (0, n.pG)(r.categoriesList, e.h_))
            });
          case l.GetCategoriesSuccess:
            return p({}, r, {
              categoriesList: p({}, (0, n.pG)(r.categoriesList, e.Jz, u.categoriesList))
            });
          case l.GetCategoriesFailed:
            return p({}, r, {
              categoriesList: p({}, (0, n.pG)(r.categoriesList, e.yc))
            });
          case l.GetMetadataSending:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.h_))
            });
          case l.GetMetadataSuccess:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.Jz, u.metadata))
            });
          case l.GetMetadataFailed:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.yc))
            });
          case l.PostMetadataSending:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.h_))
            });
          case l.PostMetadataSuccess:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.Jz, u.metadata))
            });
          case l.PostMetadataFailed:
            return p({}, r, {
              metadata: p({}, (0, n.pG)(r.metadata, e.yc))
            });
          case l.GetRecommendedAppsSending:
            return p({}, r, {
              recommendedAppsList: p({}, (0, n.pG)(r.recommendedAppsList, e.h_))
            });
          case l.GetRecommendedAppsSuccess:
            return p({}, r, {
              recommendedAppsList: p({}, (0, n.pG)(r.recommendedAppsList, e.Jz, u.recommendedAppsList))
            });
          case l.GetRecommendedAppsFailed:
            return p({}, r, {
              recommendedAppsList: p({}, (0, n.pG)(r.recommendedAppsList, e.yc))
            });
          case l.GetAppSending:
            return p({}, r, {
              app: p({}, (0, n.pG)(r.app, e.h_))
            });
          case l.GetAppSuccess:
            return p({}, r, {
              app: p({}, (0, n.pG)(r.app, e.Jz, u.app))
            });
          case l.GetAppFailed:
            return p({}, r, {
              app: p({}, (0, n.pG)(r.app, e.yc))
            });
          case l.ClearApp:
            return p({}, r, {
              app: {
                value: null,
                status: e._Y.status
              }
            });
          case l.SetUpdatableInstalls:
            return p({}, r, {
              updatableInstallsList: u.updatableInstallsList
            });
          case l.GetDevelopedAppsSending:
            return p({}, r, {
              developedApps: p({}, (0, n.pG)(r.developedApps, e.h_))
            });
          case l.GetDevelopedAppsSuccess:
            return p({}, r, {
              developedApps: p({}, (0, n.pG)(r.developedApps, e.Jz, u.developedApps))
            });
          case l.GetDevelopedAppsFailed:
            return p({}, r, {
              developedApps: p({}, (0, n.pG)(r.developedApps, e.yc))
            });
          default:
            return r
        }
      }
    },
    "../react/pages/apps/marketplace/types.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        m: function() {
          return e
        }
      });
      var e;
      (function(n) {
        n.CloudflareAppsToken = "CloudflareAppsToken", n.CloudflareAppsAuthAttempts = "CloudflareAppsAuthAttempts"
      })(e || (e = {}))
    },
    "../react/pages/email/types.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        BB: function() {
          return n
        },
        Pm: function() {
          return p
        },
        UZ: function() {
          return e
        }
      });
      var e;
      (function(b) {
        b.ROOT = "root", b.DSTADDRS_CARD = "dstaddrs_card", b.RULES_CARD = "rules_card", b.CATCHALL_CARD = "catchall_card", b.SETTINGS_PAGE = "settings_page", b.WORKERS_PAGE = "workers_page"
      })(e || (e = {}));
      var n = {
          zone: "emailRoutingZone",
          catchAllRule: "emailRoutingCatchAllRule",
          rule: "emailRoutingRule",
          rules: "emailRoutingRules",
          dstAddress: "emailRoutingDestinationAddress",
          dstAddresses: "emailRoutingDestinationAddresses",
          dnsRecord: "emailRoutingDnsRecord",
          dnsRecords: "emailRoutingDnsRecords"
        },
        p;
      (function(b) {
        b[b.Verified = 0] = "Verified", b[b.Pending = 1] = "Pending", b[b.Missing = 2] = "Missing", b[b.WorkerNotFound = 3] = "WorkerNotFound", b[b.Unknown = 4] = "Unknown", b[b.Loading = 5] = "Loading"
      })(p || (p = {}));
      var E = {
        dmarcReports: "emailSecurityDmarcReports"
      }
    },
    "../react/pages/home/alerts/config.tsx": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        jk: function() {
          return O
        },
        w8: function() {
          return N
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
        n = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
        p = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
        E = t("../react/pages/home/alerts/integrations/redux/entities.ts");

      function b(K) {
        for (var B = 1; B < arguments.length; B++) {
          var _e = arguments[B] != null ? Object(arguments[B]) : {},
            Ee = Object.keys(_e);
          typeof Object.getOwnPropertySymbols == "function" && (Ee = Ee.concat(Object.getOwnPropertySymbols(_e).filter(function(ce) {
            return Object.getOwnPropertyDescriptor(_e, ce).enumerable
          }))), Ee.forEach(function(ce) {
            l(K, ce, _e[ce])
          })
        }
        return K
      }

      function l(K, B, _e) {
        return B in K ? Object.defineProperty(K, B, {
          value: _e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : K[B] = _e, K
      }

      function S() {
        var K = y(["", "/edit/", ""]);
        return S = function() {
          return K
        }, K
      }

      function v() {
        var K = y(["", "/create"]);
        return v = function() {
          return K
        }, K
      }

      function r() {
        var K = y(["", "/destinations"]);
        return r = function() {
          return K
        }, K
      }

      function u() {
        var K = y(["", "/notifications"]);
        return u = function() {
          return K
        }, K
      }

      function g() {
        var K = y(["/", ""]);
        return g = function() {
          return K
        }, K
      }

      function y(K, B) {
        return B || (B = K.slice(0)), Object.freeze(Object.defineProperties(K, {
          raw: {
            value: Object.freeze(B)
          }
        }))
      }
      var C = "Notifications",
        j = "notification",
        T = (0, e.BC)(g(), "accountId"),
        _ = (0, e.BC)(u(), T),
        A = (0, e.BC)(r(), _),
        m = (0, e.BC)(v(), _),
        h = (0, e.BC)(S(), _, "alertId"),
        O = b({
          account: T,
          alerts: _,
          destinations: A,
          createAlert: m,
          editAlert: h
        }, n._j, p._j),
        N = b({
          alert: "accountAlert",
          alerts: "accountAlerts",
          availableAlerts: "availableAlerts",
          availableAlertsForProduct: "availableAlertsForProduct"
        }, E.w)
    },
    "../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        _j: function() {
          return g
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var C = l(["", "/pagerduty"]);
        return n = function() {
          return C
        }, C
      }

      function p() {
        var C = l(["", "/pagerduty/register"]);
        return p = function() {
          return C
        }, C
      }

      function E() {
        var C = l(["", "/pagerduty/connect"]);
        return E = function() {
          return C
        }, C
      }

      function b() {
        var C = l(["/", "/notifications"]);
        return b = function() {
          return C
        }, C
      }

      function l(C, j) {
        return j || (j = C.slice(0)), Object.freeze(Object.defineProperties(C, {
          raw: {
            value: Object.freeze(j)
          }
        }))
      }
      var S = (0, e.BC)(b(), "accountId"),
        v = (0, e.BC)(E(), S),
        r = (0, e.BC)(p(), S),
        u = (0, e.BC)(n(), S),
        g = {
          pagerDutyConnect: v,
          pagerDutyRegister: r,
          pagerDutyList: u
        },
        y = null
    },
    "../react/pages/home/alerts/integrations/redux/entities.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        w: function() {
          return e
        }
      });
      var e = {
        integrations: "accountAlertIntegrations",
        pagerDuty: "accountAlertsPagerDutyIntegrations",
        pagerDutyRequest: "accountAlertsPagerDutyIntegrationRequest",
        webhook: "accountAlertsWebhookIntegration",
        webhooks: "accountAlertsWebhookIntegrations",
        deliveryMechanisms: "alertAccountDeliveryMechanisms"
      }
    },
    "../react/pages/home/alerts/integrations/webhooks/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        _j: function() {
          return r
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var g = b(["", "/webhook/edit/", ""]);
        return n = function() {
          return g
        }, g
      }

      function p() {
        var g = b(["", "/webhook/create"]);
        return p = function() {
          return g
        }, g
      }

      function E() {
        var g = b(["/", "/notifications"]);
        return E = function() {
          return g
        }, g
      }

      function b(g, y) {
        return y || (y = g.slice(0)), Object.freeze(Object.defineProperties(g, {
          raw: {
            value: Object.freeze(y)
          }
        }))
      }
      var l = (0, e.BC)(E(), "accountId"),
        S = (0, e.BC)(p(), l),
        v = (0, e.BC)(n(), l, "webhookId"),
        r = {
          webhookCreate: S,
          webhookResource: v
        },
        u = null
    },
    "../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        gb: function() {
          return u
        },
        iP: function() {
          return _e
        },
        xL: function() {
          return m
        },
        rD: function() {
          return ce
        },
        oT: function() {
          return j
        },
        i2: function() {
          return pe
        },
        x1: function() {
          return l
        },
        lW: function() {
          return v
        },
        UA: function() {
          return K
        },
        K5: function() {
          return y
        },
        Ii: function() {
          return O
        },
        PJ: function() {
          return Ee
        },
        bK: function() {
          return _
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
        E = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
        b = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
        l = function() {
          return n().createElement(S, null, n().createElement("svg", {
            width: "94",
            height: "5",
            viewBox: "0 0 94 5",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M48.416 2.2002L1.99976 2.20021",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M66.3115 2.2002L59.3767 2.20019",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M78.7949 2.2002L76.021 2.20019",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M91.2773 2.2002L88.5034 2.20019",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          })))
        },
        S = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            display: "none",
            desktop: {
              display: "block",
              top: "58px",
              left: "8%",
              right: "85%"
            }
          }
        });
      S.displayName = "LineContainer";
      var v = function() {
          return n().createElement(r, null, n().createElement("svg", {
            width: "211",
            height: "71",
            viewBox: "0 0 211 71",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("circle", {
            cx: "175.5",
            cy: "35.5",
            r: "35.5",
            fill: "#044096"
          }), n().createElement("path", {
            d: "M48.7492 28L2.33298 28",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M66.6457 28L59.7109 28",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M79.1281 28L76.3542 28",
            stroke: "#6ECCE5",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M91.6106 28.0005L88.8366 28.0005",
            stroke: "#E2F5FA",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M164.092 28.2002L100.767 28.2002",
            stroke: "#6ECCE5",
            strokeWidth: "4",
            strokeLinecap: "square"
          })))
        },
        r = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            top: "20px",
            left: "15%",
            right: "85%",
            desktop: {
              top: "45px",
              left: "22%",
              right: "78%"
            }
          }
        });
      r.displayName = "LineWithDotContainer";
      var u = function() {
          return n().createElement(g, null, n().createElement(b.Ei, {
            alt: "airplane",
            src: E,
            width: "85%"
          }))
        },
        g = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            width: "90px",
            top: "90px",
            left: "65%",
            right: "35%",
            zIndex: "2",
            desktop: {
              width: "235px"
            }
          }
        });
      g.displayName = "AirplaneContainer";
      var y = function() {
          return n().createElement(C, null, n().createElement("svg", {
            width: "104",
            height: "23",
            viewBox: "0 0 104 23",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
            fill: "white"
          }), n().createElement("path", {
            d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
            fill: "white"
          }), n().createElement("path", {
            d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
            fill: "white"
          }), n().createElement("path", {
            d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
            fill: "white"
          }), n().createElement("path", {
            d: "M36.0259 10.627L2.00024 10.627",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M56.8198 10.627L44.5328 10.627",
            stroke: "#6ECCE5",
            strokeWidth: "4",
            strokeLinecap: "square"
          }), n().createElement("path", {
            d: "M72.8872 10.627L65.326 10.627",
            stroke: "#C3E9F3",
            strokeWidth: "4",
            strokeLinecap: "square"
          })))
        },
        C = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            display: "none",
            desktop: {
              display: "block",
              top: "130px",
              left: "88%",
              right: "12%"
            }
          }
        });
      C.displayName = "LineWithStarContainer";
      var j = function() {
          return n().createElement(T, null, n().createElement("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("ellipse", {
            cx: "6.33672",
            cy: "6.34376",
            rx: "6.33672",
            ry: "6.34376",
            fill: "#086FFF"
          })))
        },
        T = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            top: "90px",
            left: "20%",
            right: "80%",
            desktop: {
              top: "156px",
              left: "23%",
              right: "77%"
            }
          }
        });
      T.displayName = "DotContainer";
      var _ = function() {
          return n().createElement(A, null, n().createElement("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
            fill: "#6ECCE5"
          })))
        },
        A = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            top: "38px",
            left: "83%",
            right: "17%",
            desktop: {
              top: "64px",
              left: "44%",
              right: "56%"
            }
          }
        });
      A.displayName = "SquareContainer";
      var m = function() {
          return n().createElement(h, null, n().createElement("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
            fill: "#C5EBF5"
          })))
        },
        h = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            display: "none",
            desktop: {
              display: "block",
              top: "-25px",
              left: "30%",
              right: "70%"
            }
          }
        });
      h.displayName = "BlueStarContainer";
      var O = function() {
          return n().createElement(N, null, n().createElement("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
            fill: "#FBAD41"
          }), n().createElement("path", {
            d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
            fill: "#FBAD41"
          }), n().createElement("path", {
            d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
            fill: "#FBAD41"
          }), n().createElement("path", {
            d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
            fill: "#FBAD41"
          })))
        },
        N = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            display: "none",
            desktop: {
              display: "block",
              top: "160px",
              left: "70%",
              right: "30%"
            }
          }
        });
      N.displayName = "OrangeStarContainer";
      var K = function() {
          return n().createElement(B, null, n().createElement("svg", {
            width: "48",
            height: "15",
            viewBox: "0 0 48 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
            fill: "#6ECCE5"
          }), n().createElement("path", {
            d: "M20.9031 6.61694L1.99994 6.61694",
            stroke: "#0055DC",
            strokeWidth: "4",
            strokeLinecap: "square"
          })))
        },
        B = (0, p.createComponent)(function(L) {
          var R = L.theme;
          return {
            position: "absolute",
            display: "none",
            desktop: {
              display: "block",
              top: "160px",
              left: "20%",
              right: "70%"
            }
          }
        });
      B.displayName = "LineWithSquareContainer";
      var _e = function() {
          return n().createElement("svg", {
            width: "50",
            height: "46",
            viewBox: "0 0 48 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
            fill: "#C5EBF5"
          }))
        },
        Ee = function() {
          return n().createElement("svg", {
            width: "50",
            height: "46",
            viewBox: "0 0 39 41",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
            fill: "#C5EBF5"
          }))
        },
        ce = function() {
          return n().createElement("svg", {
            width: "50",
            height: "46",
            viewBox: "0 0 48 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
            fill: "#C5EBF5"
          }))
        },
        pe = function() {
          return n().createElement("svg", {
            width: "50",
            height: "46",
            viewBox: "0 0 40 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, n().createElement("path", {
            d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
            fill: "#C5EBF5"
          }), n().createElement("path", {
            d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
            fill: "#C5EBF5"
          }))
        }
    },
    "../react/pages/onboarding/components/AppleLogin/constants.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        A2: function() {
          return S
        },
        He: function() {
          return b
        },
        N$: function() {
          return l
        },
        Qq: function() {
          return p
        },
        ST: function() {
          return E
        },
        wM: function() {
          return n
        }
      });
      var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx"),
        n = {
          PAGE: "apple-login"
        },
        p = "login-apple-jwt",
        E = "cf-test",
        b = {
          "1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
          "2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
        },
        l = function(r) {
          return [{
            title: "apple.sign_in_with_apple.automatic_setup.title",
            description: "apple.sign_in_with_apple.automatic_setup.description",
            icon: e.iP
          }, {
            title: r ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
            description: r ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
            icon: r ? e.rD : e.PJ
          }, {
            title: "apple.sign_in_with_apple.impact.title",
            description: "apple.sign_in_with_apple.impact.description",
            icon: e.i2
          }]
        },
        S = {
          apple: "applejwt",
          cf: "cfjwt"
        }
    },
    "../react/pages/onboarding/components/guide/reducer.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        F: function() {
          return E
        }
      });
      var e = t("../react/app/redux/makeReducer.js");

      function n(b) {
        for (var l = 1; l < arguments.length; l++) {
          var S = arguments[l] != null ? Object(arguments[l]) : {},
            v = Object.keys(S);
          typeof Object.getOwnPropertySymbols == "function" && (v = v.concat(Object.getOwnPropertySymbols(S).filter(function(r) {
            return Object.getOwnPropertyDescriptor(S, r).enumerable
          }))), v.forEach(function(r) {
            p(b, r, S[r])
          })
        }
        return b
      }

      function p(b, l, S) {
        return l in b ? Object.defineProperty(b, l, {
          value: S,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : b[l] = S, b
      }
      var E = (0, e.ZP)("onboardingGuide").on("success", function(b, l, S) {
        if (S.meta.method === "post") {
          var v, r = l.data && l.data.completedTasks || [],
            u = (v = l.data && l.data.readTasks) !== null && v !== void 0 ? v : [];
          return n({}, b, {
            data: {
              completedTasks: Array.from(new Set(r.concat(S.payload.status === "completedTasks" ? S.payload.taskName : []))),
              readTasks: Array.from(new Set(u.concat(S.payload.status === "readTasks" ? S.payload.taskName : [])))
            }
          })
        }
        return b
      })
    },
    "../react/pages/pages/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Hv: function() {
          return Le
        },
        _j: function() {
          return Te
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var w = F(["/accounts/", "/rum/site_info/", ""]);
        return n = function() {
          return w
        }, w
      }

      function p() {
        var w = F(["/accounts/", "/rum/site_info"]);
        return p = function() {
          return w
        }, w
      }

      function E() {
        var w = F(["/accounts/", "/pages/projects/", "/upload-token"]);
        return E = function() {
          return w
        }, w
      }

      function b() {
        var w = F(["/pages/assets/upsert-hashes"]);
        return b = function() {
          return w
        }, w
      }

      function l() {
        var w = F(["/pages/assets/upload"]);
        return l = function() {
          return w
        }, w
      }

      function S() {
        var w = F(["/zones/", "/dns_records/", ""]);
        return S = function() {
          return w
        }, w
      }

      function v() {
        var w = F(["/zones/", "/dns_records"]);
        return v = function() {
          return w
        }, w
      }

      function r() {
        var w = F(["/zones/", ""]);
        return r = function() {
          return w
        }, w
      }

      function u() {
        var w = F(["/zones"]);
        return u = function() {
          return w
        }, w
      }

      function g() {
        var w = F(["/system/bootstrap"]);
        return g = function() {
          return w
        }, w
      }

      function y() {
        var w = F(["/accounts/", "/members?per_page=50&page=", "&direction=desc"]);
        return y = function() {
          return w
        }, w
      }

      function C() {
        var w = F(["/accounts/", "/access/apps/", "/policies"]);
        return C = function() {
          return w
        }, w
      }

      function j() {
        var w = F(["/accounts/", "/access/organizations"]);
        return j = function() {
          return w
        }, w
      }

      function T() {
        var w = F(["/accounts/", "/access/identity_providers"]);
        return T = function() {
          return w
        }, w
      }

      function _() {
        var w = F(["/accounts/", "/access/apps"]);
        return _ = function() {
          return w
        }, w
      }

      function A() {
        var w = F(["/accounts/", "/pages/projects/", "/deploy_hooks/", ""]);
        return A = function() {
          return w
        }, w
      }

      function m() {
        var w = F(["/accounts/", "/pages/projects/", "/deploy_hooks"]);
        return m = function() {
          return w
        }, w
      }

      function h() {
        var w = F(["/accounts/", "/pages/get_subdomain"]);
        return h = function() {
          return w
        }, w
      }

      function O() {
        var w = F(["/accounts/", "/pages/domain_check"]);
        return O = function() {
          return w
        }, w
      }

      function N() {
        var w = F(["/accounts/", "/pages/connections/", "/", "/repos/", "/branches"]);
        return N = function() {
          return w
        }, w
      }

      function K() {
        var w = F(["/accounts/", "/pages/connections/", "/", "/repos"]);
        return K = function() {
          return w
        }, w
      }

      function B() {
        var w = F(["/accounts/", "/pages/connections/", ""]);
        return B = function() {
          return w
        }, w
      }

      function _e() {
        var w = F(["/accounts/", "/pages/connections"]);
        return _e = function() {
          return w
        }, w
      }

      function Ee() {
        var w = F(["/accounts/", "/pages/projects/", "/deployment_configs/", "/envs"]);
        return Ee = function() {
          return w
        }, w
      }

      function ce() {
        var w = F(["/accounts/", "/pages/projects/", "/deployment_configs/", ""]);
        return ce = function() {
          return w
        }, w
      }

      function pe() {
        var w = F(["https://", "/logs?jwt=", ""]);
        return pe = function() {
          return w
        }, w
      }

      function L() {
        var w = F(["wss://", "/logs/ws/get?startIndex=", "&jwt=", ""]);
        return L = function() {
          return w
        }, w
      }

      function R() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/live"]);
        return R = function() {
          return w
        }, w
      }

      function D() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/history/logs"]);
        return D = function() {
          return w
        }, w
      }

      function $() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/rollback"]);
        return $ = function() {
          return w
        }, w
      }

      function ne() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/retry"]);
        return ne = function() {
          return w
        }, w
      }

      function Z() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/cancel"]);
        return Z = function() {
          return w
        }, w
      }

      function z() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/functions"]);
        return z = function() {
          return w
        }, w
      }

      function W() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/build_metadata"]);
        return W = function() {
          return w
        }, w
      }

      function I() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/?force=true"]);
        return I = function() {
          return w
        }, w
      }

      function U() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments"]);
        return U = function() {
          return w
        }, w
      }

      function ie() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/tails/", ""]);
        return ie = function() {
          return w
        }, w
      }

      function re() {
        var w = F(["/accounts/", "/pages/projects/", "/deployments/", "/tails"]);
        return re = function() {
          return w
        }, w
      }

      function Se() {
        var w = F(["/accounts/", "/pages/projects/", "/file"]);
        return Se = function() {
          return w
        }, w
      }

      function ke() {
        var w = F(["/accounts/", "/pages/projects/", "/domains/", ""]);
        return ke = function() {
          return w
        }, w
      }

      function je() {
        var w = F(["/accounts/", "/pages/projects/", "/domains"]);
        return je = function() {
          return w
        }, w
      }

      function Y() {
        var w = F(["/accounts/", "/pages/projects/", ""]);
        return Y = function() {
          return w
        }, w
      }

      function ye() {
        var w = F(["/accounts/", "/pages/projects"]);
        return ye = function() {
          return w
        }, w
      }

      function xe() {
        var w = F(["/accounts/", "/pages/metrics"]);
        return xe = function() {
          return w
        }, w
      }

      function Fe() {
        var w = F(["/pages/assets/check-missing"]);
        return Fe = function() {
          return w
        }, w
      }

      function le() {
        var w = F(["/accounts/", "/pages/account-settings"]);
        return le = function() {
          return w
        }, w
      }

      function de() {
        var w = F(["/", "/web-analytics/overview?siteTag~in=", ""]);
        return de = function() {
          return w
        }, w
      }

      function Pe() {
        var w = F(["/", "/pages/default-usage-model"]);
        return Pe = function() {
          return w
        }, w
      }

      function X() {
        var w = F(["/sign-up/pages"]);
        return X = function() {
          return w
        }, w
      }

      function fe() {
        var w = F(["/", "/", "/dns"]);
        return fe = function() {
          return w
        }, w
      }

      function ee() {
        var w = F(["/", "/add-site"]);
        return ee = function() {
          return w
        }, w
      }

      function Ue() {
        var w = F(["/", "/members"]);
        return Ue = function() {
          return w
        }, w
      }

      function Ne() {
        var w = F(["/", "?zone=access"]);
        return Ne = function() {
          return w
        }, w
      }

      function Ye() {
        var w = F(["/", "/pages/verify-email"]);
        return Ye = function() {
          return w
        }, w
      }

      function Ke() {
        var w = F(["/", "/workers/durable-objects/view/", ""]);
        return Ke = function() {
          return w
        }, w
      }

      function $e() {
        var w = F(["/", "/pages/view/", "/", "/headers"]);
        return $e = function() {
          return w
        }, w
      }

      function et() {
        var w = F(["/", "/pages/view/", "/", "/redirects"]);
        return et = function() {
          return w
        }, w
      }

      function rt() {
        var w = F(["/", "/pages/view/", "/", "/functions"]);
        return rt = function() {
          return w
        }, w
      }

      function De() {
        var w = F(["/", "/pages/view/", "/", "/files"]);
        return De = function() {
          return w
        }, w
      }

      function me() {
        var w = F(["/", "/pages/view/", "/", ""]);
        return me = function() {
          return w
        }, w
      }

      function he() {
        var w = F(["/", "/pages/view/", "/deployments/new"]);
        return he = function() {
          return w
        }, w
      }

      function we() {
        var w = F(["/", "/pages/view/", "/settings/functions"]);
        return we = function() {
          return w
        }, w
      }

      function ze() {
        var w = F(["/", "/pages/view/", "/settings/environment-variables"]);
        return ze = function() {
          return w
        }, w
      }

      function He() {
        var w = F(["/", "/pages/view/", "/settings/builds-deployments"]);
        return He = function() {
          return w
        }, w
      }

      function st() {
        var w = F(["/", "/pages/view/", "/settings"]);
        return st = function() {
          return w
        }, w
      }

      function G() {
        var w = F(["/", "/pages/view/", "/domains"]);
        return G = function() {
          return w
        }, w
      }

      function Q() {
        var w = F(["/", "/pages/view/", "/analytics/", "(preview|production)"]);
        return Q = function() {
          return w
        }, w
      }

      function J() {
        var w = F(["/", "/pages/view/", "/analytics"]);
        return J = function() {
          return w
        }, w
      }

      function te() {
        var w = F(["/", "/pages/view/", ""]);
        return te = function() {
          return w
        }, w
      }

      function Ae() {
        var w = F(["/", "/pages/new/provider/", ""]);
        return Ae = function() {
          return w
        }, w
      }

      function Ie() {
        var w = F(["/", "/pages/new/wrangler-guide"]);
        return Ie = function() {
          return w
        }, w
      }

      function We() {
        var w = F(["/", "/pages/new/project"]);
        return We = function() {
          return w
        }, w
      }

      function Ge() {
        var w = F(["/", "/pages/new/upload/", ""]);
        return Ge = function() {
          return w
        }, w
      }

      function Ve() {
        var w = F(["/", "/pages/new/upload"]);
        return Ve = function() {
          return w
        }, w
      }

      function it() {
        var w = F(["/", "/pages/new"]);
        return it = function() {
          return w
        }, w
      }

      function ge() {
        var w = F(["/", "/workers/plans"]);
        return ge = function() {
          return w
        }, w
      }

      function q() {
        var w = F(["/", "/pages"]);
        return q = function() {
          return w
        }, w
      }

      function F(w, Ce) {
        return Ce || (Ce = w.slice(0)), Object.freeze(Object.defineProperties(w, {
          raw: {
            value: Object.freeze(Ce)
          }
        }))
      }
      var Te = {
          root: (0, e.BC)(q(), "accountId"),
          plans: (0, e.BC)(ge(), "accountId"),
          newProject: (0, e.BC)(it(), "accountId"),
          newProjectAssetUpload: (0, e.BC)(Ve(), "accountId"),
          newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)(Ge(), "accountId", "projectName"),
          newProjectStepName: (0, e.BC)(We(), "accountId"),
          newProjectWranglerGuide: (0, e.BC)(Ie(), "accountId"),
          newProjectProvider: (0, e.BC)(Ae(), "accountId", "provider"),
          projectDetails: (0, e.BC)(te(), "accountId", "projectName"),
          projectAnalyticsRoot: (0, e.BC)(J(), "accountId", "projectName"),
          projectAnalytics: (0, e.BC)(Q(), "accountId", "projectName", "deploymentType"),
          projectDomains: (0, e.BC)(G(), "accountId", "projectName"),
          projectSettings: (0, e.BC)(st(), "accountId", "projectName"),
          projectSettingsBuildDeployment: (0, e.BC)(He(), "accountId", "projectName"),
          projectSettingsEnvironmentVariables: (0, e.BC)(ze(), "accountId", "projectName"),
          projectSettingsFunctions: (0, e.BC)(we(), "accountId", "projectName"),
          deploymentCreate: (0, e.BC)(he(), "accountId", "projectName"),
          deploymentDetails: (0, e.BC)(me(), "accountId", "projectName", "deploymentId"),
          deploymentDetailsFiles: (0, e.BC)(De(), "accountId", "projectName", "deploymentId"),
          deploymentDetailsFunctions: (0, e.BC)(rt(), "accountId", "projectName", "deploymentId"),
          deploymentDetailsRedirects: (0, e.BC)(et(), "accountId", "projectName", "deploymentId"),
          deploymentDetailsHeaders: (0, e.BC)($e(), "accountId", "projectName", "deploymentId"),
          durableObjectDetails: (0, e.BC)(Ke(), "accountId", "namespaceId"),
          verifyEmail: (0, e.BC)(Ye(), "accountId"),
          access: (0, e.BC)(Ne(), "accountId"),
          members: (0, e.BC)(Ue(), "accountId"),
          zoneOnboarding: (0, e.BC)(ee(), "accountId"),
          zoneDNS: (0, e.BC)(fe(), "accountId", "zoneName"),
          signUp: (0, e.BC)(X()),
          defaultUsageModel: (0, e.BC)(Pe(), "accountId"),
          webAnalyticsDashboard: (0, e.BC)(de(), "accountId", "siteTag")
        },
        Le = {
          accountSettings: (0, e.BC)(le(), "accountId"),
          checkMissing: (0, e.BC)(Fe()),
          metrics: (0, e.BC)(xe(), "accountId"),
          projects: (0, e.BC)(ye(), "accountId"),
          projectDetails: (0, e.BC)(Y(), "accountId", "projectName"),
          projectDomains: (0, e.BC)(je(), "accountId", "projectName"),
          projectDomain: (0, e.BC)(ke(), "accountId", "projectName", "domainName"),
          projectUploadFile: (0, e.BC)(Se(), "accountId", "projectName"),
          deploymentCreateTail: (0, e.BC)(re(), "accountId", "projectName", "deploymentId"),
          deploymentDeleteTail: (0, e.BC)(ie(), "accountId", "projectName", "deploymentId", "tailId"),
          deployments: (0, e.BC)(U(), "accountId", "projectName"),
          deploymentDetails: (0, e.BC)(I(), "accountId", "projectName", "deploymentId"),
          deploymentBuildMetadata: (0, e.BC)(W(), "accountId", "projectName", "deploymentId"),
          deploymentFunctions: (0, e.BC)(z(), "accountId", "projectName", "deploymentId"),
          deploymentCancel: (0, e.BC)(Z(), "accountId", "projectName", "deploymentId"),
          deploymentRetry: (0, e.BC)(ne(), "accountId", "projectName", "deploymentId"),
          rollbackDeployment: (0, e.BC)($(), "accountId", "projectName", "deploymentId"),
          deploymentLogs: (0, e.BC)(D(), "accountId", "projectName", "deploymentId"),
          deploymentLiveLogsJWT: (0, e.BC)(R(), "accountId", "projectName", "deploymentId"),
          deploymentLiveLogsWS: (0, e.BC)(L(), "apiHost", "startIndex", "jwt"),
          deploymentLiveLogsHTTP: (0, e.BC)(pe(), "apiHost", "jwt"),
          getDeploymentConfig: (0, e.BC)(ce(), "accountId", "projectName", "environment"),
          setDeploymentConfig: (0, e.BC)(Ee(), "accountId", "projectName", "environment"),
          gitConnections: (0, e.BC)(_e(), "accountId"),
          gitConnectionsProvider: (0, e.BC)(B(), "accountId", "provider"),
          gitRepos: (0, e.BC)(K(), "accountId", "provider", "username"),
          gitBranches: (0, e.BC)(N(), "accountId", "provider", "username", "repo"),
          domainCheck: (0, e.BC)(O(), "accountId"),
          getSubdomain: (0, e.BC)(h(), "accountId"),
          deployHooks: (0, e.BC)(m(), "accountId", "projectName"),
          changeDeployHooks: (0, e.BC)(A(), "accountId", "projectName", "hookId"),
          accessApps: (0, e.BC)(_(), "accountId"),
          accessIdPs: (0, e.BC)(T(), "accountId"),
          accessOrg: (0, e.BC)(j(), "accountId"),
          accessPolicies: (0, e.BC)(C(), "accountId", "appId"),
          accountMembers: (0, e.BC)(y(), "accountId", "page"),
          bootstrap: (0, e.BC)(g()),
          zones: (0, e.BC)(u()),
          zone: (0, e.BC)(r(), "zoneId"),
          zoneDNSRecords: (0, e.BC)(v(), "zoneId"),
          zoneDNSRecord: (0, e.BC)(S(), "zoneId", "recordId"),
          uploadFiles: (0, e.BC)(l()),
          upsertHashes: (0, e.BC)(b()),
          uploadToken: (0, e.BC)(E(), "accountId", "projectName"),
          webAnalyticsSiteInfo: (0, e.BC)(p(), "accountId"),
          webAnalyticsSiteTag: (0, e.BC)(n(), "accountId", "siteTag"),
          buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
          compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
        },
        Qe = function(Ce) {
          return "".concat(Ce.subdomain, ".pages.dev")
        }
    },
    "../react/pages/profile/preferences/appearance-preference/appearance-utils.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        aC: function() {
          return l
        },
        pp: function() {
          return S
        }
      });
      var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
        n = t.n(e);

      function p(v, r, u, g, y, C, j) {
        try {
          var T = v[C](j),
            _ = T.value
        } catch (A) {
          u(A);
          return
        }
        T.done ? r(_) : Promise.resolve(_).then(g, y)
      }

      function E(v) {
        return function() {
          var r = this,
            u = arguments;
          return new Promise(function(g, y) {
            var C = v.apply(r, u);

            function j(_) {
              p(C, g, y, j, T, "next", _)
            }

            function T(_) {
              p(C, g, y, j, T, "throw", _)
            }
            j(void 0)
          })
        }
      }
      var b = "/persistence/user",
        l = function() {
          var v = E(regeneratorRuntime.mark(function r() {
            var u, g;
            return regeneratorRuntime.wrap(function(C) {
              for (;;) switch (C.prev = C.next) {
                case 0:
                  return C.prev = 0, C.next = 3, e.get(b, {
                    hideErrorAlert: !0
                  });
                case 3:
                  return u = C.sent, C.next = 6, u.body;
                case 6:
                  return g = C.sent, C.abrupt("return", g == null ? void 0 : g.darkMode);
                case 10:
                  C.prev = 10, C.t0 = C.catch(0), console.error(C.t0);
                case 13:
                case "end":
                  return C.stop()
              }
            }, r, this, [
              [0, 10]
            ])
          }));
          return function() {
            return v.apply(this, arguments)
          }
        }(),
        S = function() {
          var v = E(regeneratorRuntime.mark(function r(u) {
            var g;
            return regeneratorRuntime.wrap(function(C) {
              for (;;) switch (C.prev = C.next) {
                case 0:
                  return C.prev = 0, C.next = 3, e.post(b, {
                    body: JSON.stringify({
                      darkMode: u
                    })
                  });
                case 3:
                  return g = C.sent, C.next = 6, g.body;
                case 6:
                  return C.abrupt("return", C.sent);
                case 9:
                  C.prev = 9, C.t0 = C.catch(0), console.error(C.t0);
                case 12:
                case "end":
                  return C.stop()
              }
            }, r, this, [
              [0, 9]
            ])
          }));
          return function(u) {
            return v.apply(this, arguments)
          }
        }()
    },
    "../react/pages/r2/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Hv: function() {
          return I
        },
        Jg: function() {
          return re
        },
        _j: function() {
          return W
        },
        pZ: function() {
          return Se
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var Y = z(["/zones"]);
        return n = function() {
          return Y
        }, Y
      }

      function p() {
        var Y = z(["/user/tokens/permission_groups"]);
        return p = function() {
          return Y
        }, Y
      }

      function E() {
        var Y = z(["/user/tokens/", "/value"]);
        return E = function() {
          return Y
        }, Y
      }

      function b() {
        var Y = z(["/user/tokens/", ""]);
        return b = function() {
          return Y
        }, Y
      }

      function l() {
        var Y = z(["/user/tokens"]);
        return l = function() {
          return Y
        }, Y
      }

      function S() {
        var Y = z(["/accounts/", "/r2/buckets/", "/uploads"]);
        return S = function() {
          return Y
        }, Y
      }

      function v() {
        var Y = z(["/accounts/", "/r2/buckets/", "/lifecycle"]);
        return v = function() {
          return Y
        }, Y
      }

      function r() {
        var Y = z(["/accounts/", "/r2/buckets/", "/cors"]);
        return r = function() {
          return Y
        }, Y
      }

      function u() {
        var Y = z(["/accounts/", "/r2/buckets/", "/custom_domains/", ""]);
        return u = function() {
          return Y
        }, Y
      }

      function g() {
        var Y = z(["/accounts/", "/r2/buckets/", "/custom_domains"]);
        return g = function() {
          return Y
        }, Y
      }

      function y() {
        var Y = z(["/accounts/", "/r2/buckets/", "/policy"]);
        return y = function() {
          return Y
        }, Y
      }

      function C() {
        var Y = z(["/accounts/", "/r2/buckets/", "/usage"]);
        return C = function() {
          return Y
        }, Y
      }

      function j() {
        var Y = z(["/accounts/", "/r2/buckets/", "/objects/", ""]);
        return j = function() {
          return Y
        }, Y
      }

      function T() {
        var Y = z(["/accounts/", "/r2/buckets/", "/objects"]);
        return T = function() {
          return Y
        }, Y
      }

      function _() {
        var Y = z(["/accounts/", "/r2/buckets/", ""]);
        return _ = function() {
          return Y
        }, Y
      }

      function A() {
        var Y = z(["/accounts/", "/r2/buckets"]);
        return A = function() {
          return Y
        }, Y
      }

      function m() {
        var Y = z(["/", "/r2/slurper"]);
        return m = function() {
          return Y
        }, Y
      }

      function h() {
        var Y = z(["/", "/", "/dns"]);
        return h = function() {
          return Y
        }, Y
      }

      function O() {
        var Y = z(["/profile/api-tokens"]);
        return O = function() {
          return Y
        }, Y
      }

      function N() {
        var Y = z(["/", "/r2/verify-email"]);
        return N = function() {
          return Y
        }, Y
      }

      function K() {
        var Y = z(["/sign-up/r2"]);
        return K = function() {
          return Y
        }, Y
      }

      function B() {
        var Y = z(["/", "/r2/plans"]);
        return B = function() {
          return Y
        }, Y
      }

      function _e() {
        var Y = z(["/", "/r2/api-tokens"]);
        return _e = function() {
          return Y
        }, Y
      }

      function Ee() {
        var Y = z(["/", "/r2/", "/buckets/", "/objects/", ""]);
        return Ee = function() {
          return Y
        }, Y
      }

      function ce() {
        var Y = z(["/", "/r2/", "/buckets/", "/metrics"]);
        return ce = function() {
          return Y
        }, Y
      }

      function pe() {
        var Y = z(["/", "/r2/", "/buckets/", "/cors/", ""]);
        return pe = function() {
          return Y
        }, Y
      }

      function L() {
        var Y = z(["/", "/r2/", "/buckets/", "/settings"]);
        return L = function() {
          return Y
        }, Y
      }

      function R() {
        var Y = z(["/", "/r2/", "/buckets/", ""]);
        return R = function() {
          return Y
        }, Y
      }

      function D() {
        var Y = z(["/", "/r2/new"]);
        return D = function() {
          return Y
        }, Y
      }

      function $() {
        var Y = z(["/", "/r2/cli"]);
        return $ = function() {
          return Y
        }, Y
      }

      function ne() {
        var Y = z(["/", "/r2/overview"]);
        return ne = function() {
          return Y
        }, Y
      }

      function Z() {
        var Y = z(["/", "/r2"]);
        return Z = function() {
          return Y
        }, Y
      }

      function z(Y, ye) {
        return ye || (ye = Y.slice(0)), Object.freeze(Object.defineProperties(Y, {
          raw: {
            value: Object.freeze(ye)
          }
        }))
      }
      var W = {
          root: (0, e.BC)(Z(), "accountId"),
          overview: (0, e.BC)(ne(), "accountId"),
          cliQuickStart: (0, e.BC)($(), "accountId"),
          createBucket: (0, e.BC)(D(), "accountId"),
          bucketDetails: (0, e.BC)(R(), "accountId", "jurisdiction", "bucketName"),
          bucketDetailsSettings: (0, e.BC)(L(), "accountId", "jurisdiction", "bucketName"),
          bucketDetailsCors: (0, e.BC)(pe(), "accountId", "jurisdiction", "bucketName", "op"),
          bucketMetrics: (0, e.BC)(ce(), "accountId", "jurisdiction", "bucketName"),
          objectDetails: (0, e.BC)(Ee(), "accountId", "jurisdiction", "bucketName", "objectKey"),
          apiTokens: (0, e.BC)(_e(), "accountId"),
          plans: (0, e.BC)(B(), "accountId"),
          signUp: (0, e.BC)(K()),
          verifyEmail: (0, e.BC)(N(), "accountId"),
          profile: (0, e.BC)(O()),
          zoneDNS: (0, e.BC)(h(), "accountId", "zoneName"),
          migrator: (0, e.BC)(m(), "accountId")
        },
        I = {
          buckets: (0, e.BC)(A(), "accountId"),
          bucket: (0, e.BC)(_(), "accountId", "bucketName"),
          objects: (0, e.BC)(T(), "accountId", "bucketName"),
          object: (0, e.BC)(j(), "accountId", "bucketName", "objectKey"),
          bucketUsage: (0, e.BC)(C(), "accountId", "bucketName"),
          bucketAccess: (0, e.BC)(y(), "accountId", "bucketName"),
          bucketCustomDomains: (0, e.BC)(g(), "accountId", "bucketName"),
          bucketCustomDomain: (0, e.BC)(u(), "accountId", "bucketName", "domainName"),
          bucketCors: (0, e.BC)(r(), "accountId", "bucketName"),
          bucketLifecycle: (0, e.BC)(v(), "accountId", "bucketName"),
          bucketMultipartUploads: (0, e.BC)(S(), "accountId", "bucketName"),
          apiTokens: (0, e.BC)(l()),
          apiToken: (0, e.BC)(b(), "tokenId"),
          rollApiToken: (0, e.BC)(E(), "tokenId"),
          permissionGroups: (0, e.BC)(p()),
          zones: (0, e.BC)(n())
        },
        U = function() {
          return "r2.cloudflarestorage.com"
        },
        ie = function(ye) {
          var xe = U();
          return "https://".concat(ye, ".").concat(xe)
        },
        re = function(ye, xe) {
          var Fe = ie(ye);
          return "".concat(Fe, "/").concat(xe)
        },
        Se = function() {
          return "r2.dev"
        },
        ke = function(ye) {
          var xe = Se();
          return "https://".concat(ye, ".").concat(xe)
        },
        je = function(ye, xe) {
          var Fe = ke(ye);
          return "".concat(Fe, "/").concat(xe)
        }
    },
    "../react/pages/welcome/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        d: function() {
          return l
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var S = b(["/", "/welcome"]);
        return n = function() {
          return S
        }, S
      }

      function p() {
        var S = b(["/", "/add-site"]);
        return p = function() {
          return S
        }, S
      }

      function E() {
        var S = b(["/", "/"]);
        return E = function() {
          return S
        }, S
      }

      function b(S, v) {
        return v || (v = S.slice(0)), Object.freeze(Object.defineProperties(S, {
          raw: {
            value: Object.freeze(v)
          }
        }))
      }
      var l = {
        default: (0, e.BC)(E(), "accountId"),
        addSite: (0, e.BC)(p(), "accountId"),
        root: (0, e.BC)(n(), "accountId")
      }
    },
    "../react/pages/workers/entityTypes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        D: function() {
          return e
        }
      });
      var e = {
        route: "workersRoute",
        routes: "workersRoutes"
      }
    },
    "../react/pages/zoneless-workers/constants.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        IS: function() {
          return b
        },
        L7: function() {
          return p
        },
        Oj: function() {
          return r
        },
        QV: function() {
          return u
        },
        X$: function() {
          return j
        },
        fE: function() {
          return l
        },
        im: function() {
          return y
        },
        rL: function() {
          return S
        },
        wW: function() {
          return E
        }
      });

      function e(_) {
        for (var A = 1; A < arguments.length; A++) {
          var m = arguments[A] != null ? Object(arguments[A]) : {},
            h = Object.keys(m);
          typeof Object.getOwnPropertySymbols == "function" && (h = h.concat(Object.getOwnPropertySymbols(m).filter(function(O) {
            return Object.getOwnPropertyDescriptor(m, O).enumerable
          }))), h.forEach(function(O) {
            n(_, O, m[O])
          })
        }
        return _
      }

      function n(_, A, m) {
        return A in _ ? Object.defineProperty(_, A, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _[A] = m, _
      }
      var p = {
          documentation: {
            workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
            root: "https://workers.cloudflare.com/docs",
            installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
            wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
            wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
            starters: "https://developers.cloudflare.com/workers/starters",
            eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
            tutorials: "https://developers.cloudflare.com/workers/tutorials",
            examples: "https://developers.cloudflare.com/workers/examples",
            durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
            writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
            kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
            kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
            kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
            envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
            api: "https://workers.cloudflare.com/docs/reference/tooling/api",
            scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
            errors: "https://developers.cloudflare.com/workers/platform/limits",
            cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
            pricing: "https://developers.cloudflare.com/workers/platform/pricing",
            computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
            usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
            usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
            wrangler: "https://developers.cloudflare.com/workers/wrangler/",
            modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
            routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
            routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
            customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
            fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
            scheduledWorkers: "https://developers.cloudflare.com/workers/platform/cron-triggers",
            emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
            cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
            scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
            languages: "https://developers.cloudflare.com/workers/platform/languages",
            durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
            durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
            services: "https://developers.cloudflare.com/workers/platform/services",
            serviceBindings: "https://developers.cloudflare.com/workers/learning/using-services/#workers-service-bindings",
            metrics: {
              requestsTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#requests",
              cpuTimeTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#cpu-time-per-execution",
              durationTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#duration-per-execution",
              requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
              dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
              invocationStatuses: "https://developers.cloudflare.com/workers/about/metrics/#invocation-statuses"
            },
            logpush: {
              generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
              createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
            },
            mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
            uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
            smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
            smartPlacementEnable: "https://developers.cloudflare.com/workers/platform/smart-placement/#enable-smart-placement-beta",
            integrations: "https://developers.cloudflare.com/workers/learning/integrations/databases",
            tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
            dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers"
          },
          serverlist: "https://blog.cloudflare.com/tag/serverlist/",
          discord: "https://discord.gg/cloudflaredev",
          community: "https://community.cloudflare.com/tag/workers",
          billing: "https://developers.cloudflare.com/workers/platform/pricing",
          network: "https://www.cloudflare.com/network",
          builtWithWorkers: "https://workers.cloudflare.com/built-with/",
          workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
          freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
          durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
          durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
          usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
          workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
          cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
          integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6"
        },
        E = 800,
        b = "40rem",
        l = {
          pricing: {
            requests: .15,
            duration: 12.5,
            egress: .045,
            storage: .2,
            read_units: .2,
            write_units: 1,
            delete: 1,
            currency: "USD"
          }
        },
        S = {
          price: 5,
          currency: "USD",
          frequency: "monthly",
          requests_included: 1e7,
          ubb_frequency: 1e6,
          ubb_price: .5,
          ubb_price_ent: .6,
          additional_million_requests_price: .15,
          additional_million_requests_price_ent: .18,
          additional_million_gb_duration_price: 12.5,
          additional_million_gb_duration_price_ent: 15,
          additional_egress_gb_transfer_price: .045,
          additional_egress_gb_transfer_price_ent: .054,
          kv_storage_modify_price: 5,
          kv_storage_included_capacity: 1e9,
          kv_storage_read_count: 1e7,
          kv_storage_modify_count: 1e6,
          trace_logs: 1e7,
          additional_million_trace_logs_price: .05,
          trace_logs_frequency: 1e6
        },
        v = {
          price: 0,
          currency: "USD",
          frequency: "monthly",
          requests_included: 1e7,
          ubb_frequency: 1e6,
          ubb_price: .6,
          kv_storage_modify_price: 6,
          kv_storage_included_capacity: 1e9,
          kv_storage_read_count: 1e7,
          kv_storage_modify_count: 1e6
        },
        r = {
          free: {
            rateLimit: 1e3,
            maximumRequests: 1e5,
            maximumRequestsRuntimeCutoff: 12e4,
            limits: {
              Threshold1: .75,
              Threshold2: .9,
              Exceeded: 1
            }
          },
          paid: e({
            ubbRequests: 1e6,
            maximumRequests: 1e7
          }, S),
          ent_ss: e({
            ubbRequests: 1e6,
            maximumRequests: 1e7
          }, v),
          unbound: {
            bundledRequests: 10,
            unboundRequests: 1,
            unboundDuration: 4e5,
            unboundEgress: 5,
            kvMonthlyRead: 10,
            kvMonthlyWrite: 1
          }
        },
        u = {
          clickedDetailTabsMetrics: "Workers:DetailTab:Metrics",
          clickedDetailTabsDeployments: "Workers:DetailTab:Deployments",
          clickedDetailTabsIntegrations: "Workers:DetailTab:Integrations",
          clickedDetailTabsTriggers: "Workers:DetailTab:Triggers",
          clickedDetailTabsSettings: "Workers:DetailTab:Settings",
          clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
          clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
          clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
          clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting",
          enableWorkers: "enable workers",
          setupSubdomain: "set up subdomain",
          selectPlan: "select workers plan",
          verifyEmail: "verify email",
          createService: "create service",
          deployWorkerScript: "deploy worker script",
          setupCustomDomain: "set up custom domain",
          addWorkersRoute: "add workers route",
          editWorkersRoute: "edit workers route",
          addCronTrigger: "add cron trigger",
          editCronTrigger: "edit cron trigger",
          beginLogStream: "begin log stream",
          editEnvVariables: "edit service environment variables",
          encryptVariable: "encrypt variable",
          editNamespaceBindings: "edit service kv bindings",
          editR2Bindings: "edit service r2 bindings",
          editQueueBindings: "edit service queue bindings",
          editConstellationBindings: "edit service constellation bindings",
          editServiceBindings: "edit service to service bindings",
          renameService: "rename service",
          deleteService: "delete service",
          sortServices: "sort services",
          searchServices: "search services",
          paginateServices: "paginate services",
          createKVNamespace: "create kv namespace",
          deleteKVNamespace: "delete kv namespace",
          listKVNamespaces: "list kv namespaces",
          searchKVNamespaces: "search kv namespaces",
          paginateKVNamespaces: "paginate kv namespaces",
          addKVKeyValue: "add kv key-value",
          editKVKeyValue: "edit kv key-value",
          deleteKVKeyValue: "delete kv key-value",
          readKVKeyValue: "read kv key-value",
          listKVKeyValues: "list kv key-values",
          searchKVKeyValues: "search kv key-values",
          paginateKVKeyValues: "paginate kv key-values",
          editMtlsCertificateBindings: "edit service mtls certificate bindings",
          quickEditHttpTab: "quick edit http tab",
          quickEditPreviewTab: "quick edit preview tab",
          quickEditScheduleTab: "quick edit schedule tab",
          quickEditWranglerTab: "quick edit wrangler tab",
          rollbackDeployment: "rollback deployment",
          editTailConsumers: "edit service tail consumers",
          editDispatchNamespaceBindings: "edit dispatch namespace bindings"
        },
        g = "workers.dev",
        y = "YYYY-MM-DD HH:mm:SS ZZ",
        C = "active",
        j = ["bundled", "unbound"],
        T = null
    },
    "../react/pages/zoneless-workers/routes.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Hv: function() {
          return Nt
        },
        L: function() {
          return Dt
        },
        Q9: function() {
          return Bt
        },
        _j: function() {
          return Lt
        },
        ky: function() {
          return Mt
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

      function n() {
        var s = ue(["/accounts/", "/workers/dispatch_outbounds/by-outbound/", "/environment/", ""]);
        return n = function() {
          return s
        }, s
      }

      function p() {
        var s = ue(["/accounts/", "/workers/tails/by-consumer/", "/environment/", ""]);
        return p = function() {
          return s
        }, s
      }

      function E() {
        var s = ue(["/accounts/", "/workers/scripts?handlers=", ""]);
        return E = function() {
          return s
        }, s
      }

      function b() {
        var s = ue(["/oauth/callback"]);
        return b = function() {
          return s
        }, s
      }

      function l() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/oauth/", "/authorize"]);
        return l = function() {
          return s
        }, s
      }

      function S() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/invoke/uninstall/", ""]);
        return S = function() {
          return s
        }, s
      }

      function v() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/invoke/submit-token/", ""]);
        return v = function() {
          return s
        }, s
      }

      function r() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/invoke/submit-form/", ""]);
        return r = function() {
          return s
        }, s
      }

      function u() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/invoke/get-options/", ""]);
        return u = function() {
          return s
        }, s
      }

      function g() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", "/invoke/get-data/", ""]);
        return g = function() {
          return s
        }, s
      }

      function y() {
        var s = ue(["/accounts/", "/integrations/", "/manifests/", ""]);
        return y = function() {
          return s
        }, s
      }

      function C() {
        var s = ue(["/accounts/", "/integrations"]);
        return C = function() {
          return s
        }, s
      }

      function j() {
        var s = ue(["/user/tokens/", ""]);
        return j = function() {
          return s
        }, s
      }

      function T() {
        var s = ue(["/user/tokens"]);
        return T = function() {
          return s
        }, s
      }

      function _() {
        var s = ue(["/user/tokens/permission_groups"]);
        return _ = function() {
          return s
        }, s
      }

      function A() {
        var s = ue(["/accounts/", "/mtls_certificates"]);
        return A = function() {
          return s
        }, s
      }

      function m() {
        var s = ue(["/zones/", "/spectrum/apps/dns"]);
        return m = function() {
          return s
        }, s
      }

      function h() {
        var s = ue(["/accounts/", "/workers/scripts/", ""]);
        return h = function() {
          return s
        }, s
      }

      function O() {
        var s = ue(["/zones/", "/dns_records"]);
        return O = function() {
          return s
        }, s
      }

      function N() {
        var s = ue(["/accounts/", "/workers/deployments/by-script/", "/detail/", ""]);
        return N = function() {
          return s
        }, s
      }

      function K() {
        var s = ue(["/accounts/", "/workers/deployments/by-script/", ""]);
        return K = function() {
          return s
        }, s
      }

      function B() {
        var s = ue(["/accounts/", "/workers/queues"]);
        return B = function() {
          return s
        }, s
      }

      function _e() {
        var s = ue(["/zones/", "/ssl/certificate_packs/", ""]);
        return _e = function() {
          return s
        }, s
      }

      function Ee() {
        var s = ue(["/accounts/", "/workers/domains/changeset"]);
        return Ee = function() {
          return s
        }, s
      }

      function ce() {
        var s = ue(["/accounts/", "/workers/domains/records/", ""]);
        return ce = function() {
          return s
        }, s
      }

      function pe() {
        var s = ue(["/accounts/", "/workers/domains/records"]);
        return pe = function() {
          return s
        }, s
      }

      function L() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/promote/", ""]);
        return L = function() {
          return s
        }, s
      }

      function R() {
        var s = ue(["/accounts/", "/email/routing/rules"]);
        return R = function() {
          return s
        }, s
      }

      function D() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/schedules"]);
        return D = function() {
          return s
        }, s
      }

      function $() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/tails/", ""]);
        return $ = function() {
          return s
        }, s
      }

      function ne() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/tails"]);
        return ne = function() {
          return s
        }, s
      }

      function Z() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/copy/", ""]);
        return Z = function() {
          return s
        }, s
      }

      function z() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/usage-model"]);
        return z = function() {
          return s
        }, s
      }

      function W() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/subdomain"]);
        return W = function() {
          return s
        }, s
      }

      function I() {
        var s = ue(["/zones/", "/workers/edge-preview"]);
        return I = function() {
          return s
        }, s
      }

      function U() {
        var s = ue(["/accounts/", "/workers/subdomain/edge-preview"]);
        return U = function() {
          return s
        }, s
      }

      function ie() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/edge-preview"]);
        return ie = function() {
          return s
        }, s
      }

      function re() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/preview"]);
        return re = function() {
          return s
        }, s
      }

      function Se() {
        var s = ue(["/accounts/", "/workers/durable_objects/namespaces/", "/objects"]);
        return Se = function() {
          return s
        }, s
      }

      function ke() {
        var s = ue(["/accounts/", "/workers/durable_objects/namespaces/", ""]);
        return ke = function() {
          return s
        }, s
      }

      function je() {
        var s = ue(["/accounts/", "/workers/durable_objects/namespaces"]);
        return je = function() {
          return s
        }, s
      }

      function Y() {
        var s = ue(["/accounts/", "/flags/products/edgeworker/changes"]);
        return Y = function() {
          return s
        }, s
      }

      function ye() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/references"]);
        return ye = function() {
          return s
        }, s
      }

      function xe() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/bindings"]);
        return xe = function() {
          return s
        }, s
      }

      function Fe() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/content/v2"]);
        return Fe = function() {
          return s
        }, s
      }

      function le() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/content"]);
        return le = function() {
          return s
        }, s
      }

      function de() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/routes"]);
        return de = function() {
          return s
        }, s
      }

      function Pe() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", "/versions"]);
        return Pe = function() {
          return s
        }, s
      }

      function X() {
        var s = ue(["/accounts/", "/workers/services/", "/environments/", ""]);
        return X = function() {
          return s
        }, s
      }

      function fe() {
        var s = ue(["/accounts/", "/workers/scripts/", "/routes/", ""]);
        return fe = function() {
          return s
        }, s
      }

      function ee() {
        var s = ue(["/accounts/", "/workers/services/", ""]);
        return ee = function() {
          return s
        }, s
      }

      function Ue() {
        var s = ue(["/accounts/", "/workers/services"]);
        return Ue = function() {
          return s
        }, s
      }

      function Ne() {
        var s = ue(["/accounts/", "/workers/scripts/", "/tails/", ""]);
        return Ne = function() {
          return s
        }, s
      }

      function Ye() {
        var s = ue(["/accounts/", "/workers/scripts/", "/tails"]);
        return Ye = function() {
          return s
        }, s
      }

      function Ke() {
        var s = ue(["/accounts/", "/workers/scripts/", "/usage-model"]);
        return Ke = function() {
          return s
        }, s
      }

      function $e() {
        var s = ue(["/accounts/", "/workers/settings"]);
        return $e = function() {
          return s
        }, s
      }

      function et() {
        var s = ue(["/accounts/", "/storage/kv/namespaces/", ""]);
        return et = function() {
          return s
        }, s
      }

      function rt() {
        var s = ue(["/accounts/", "/storage/kv/namespaces"]);
        return rt = function() {
          return s
        }, s
      }

      function De() {
        var s = ue(["/accounts/", "/storage/analytics/stored"]);
        return De = function() {
          return s
        }, s
      }

      function me() {
        var s = ue(["/accounts/", "/storage/analytics"]);
        return me = function() {
          return s
        }, s
      }

      function he() {
        var s = ue(["/accounts/", "/workers/account-settings"]);
        return he = function() {
          return s
        }, s
      }

      function we() {
        var s = ue(["/accounts/", "/workers/scripts/", "/subdomain"]);
        return we = function() {
          return s
        }, s
      }

      function ze() {
        var s = ue(["/accounts/", "/workers/subdomain/ssl"]);
        return ze = function() {
          return s
        }, s
      }

      function He() {
        var s = ue(["/accounts/", "/workers/subdomain"]);
        return He = function() {
          return s
        }, s
      }

      function st() {
        var s = ue(["/zones"]);
        return st = function() {
          return s
        }, s
      }

      function G() {
        var s = ue(["/", "/members"]);
        return G = function() {
          return s
        }, s
      }

      function Q() {
        var s = ue(["/", "/logs"]);
        return Q = function() {
          return s
        }, s
      }

      function J() {
        var s = ue(["/", "/developer-platform/workers/success"]);
        return J = function() {
          return s
        }, s
      }

      function te() {
        var s = ue(["/", "/developer-platform/workers/onboarding"]);
        return te = function() {
          return s
        }, s
      }

      function Ae() {
        var s = ue(["/", ""]);
        return Ae = function() {
          return s
        }, s
      }

      function Ie() {
        var s = ue(["/", "/", "/email/routing/routes"]);
        return Ie = function() {
          return s
        }, s
      }

      function We() {
        var s = ue(["/", "/workers/analytics-engine"]);
        return We = function() {
          return s
        }, s
      }

      function Ge() {
        var s = ue(["/", "/", "/ssl-tls/edge-certificates"]);
        return Ge = function() {
          return s
        }, s
      }

      function Ve() {
        var s = ue(["/", "/", "/dns"]);
        return Ve = function() {
          return s
        }, s
      }

      function it() {
        var s = ue(["/sign-up/workers"]);
        return it = function() {
          return s
        }, s
      }

      function ge() {
        var s = ue(["/profile/api-tokens"]);
        return ge = function() {
          return s
        }, s
      }

      function q() {
        var s = ue(["/", "/workers/services/", "/", "/environment/new"]);
        return q = function() {
          return s
        }, s
      }

      function F() {
        var s = ue(["/", "/workers/services/view/", "/", "/logs/cron"]);
        return F = function() {
          return s
        }, s
      }

      function Te() {
        var s = ue(["/", "/workers/services/view/", "/", "/logs/logpush"]);
        return Te = function() {
          return s
        }, s
      }

      function Le() {
        var s = ue(["/", "/workers/services/view/", "/", "/logs/live"]);
        return Le = function() {
          return s
        }, s
      }

      function Qe() {
        var s = ue(["/", "/workers/services/view/", "/", "/logs"]);
        return Qe = function() {
          return s
        }, s
      }

      function w() {
        var s = ue(["/", "/workers/services/view/", "/", "/settings/bindings"]);
        return w = function() {
          return s
        }, s
      }

      function Ce() {
        var s = ue(["/", "/workers/services/view/", "/", "/settings/general"]);
        return Ce = function() {
          return s
        }, s
      }

      function ft() {
        var s = ue(["/", "/workers/services/view/", "/", "/settings"]);
        return ft = function() {
          return s
        }, s
      }

      function vt() {
        var s = ue(["/", "/workers/services/view/", "/", "/triggers"]);
        return vt = function() {
          return s
        }, s
      }

      function yt() {
        var s = ue(["/", "/workers/services/", "/", "/", "/integrations-setup"]);
        return yt = function() {
          return s
        }, s
      }

      function ht() {
        var s = ue(["/", "/workers/services/view/", "/", "/settings/integrations"]);
        return ht = function() {
          return s
        }, s
      }

      function bt() {
        var s = ue(["/", "/workers/services/view/", "/", "/deployments"]);
        return bt = function() {
          return s
        }, s
      }

      function Ot() {
        var s = ue(["/", "/workers/services/view/", "/", ""]);
        return Ot = function() {
          return s
        }, s
      }

      function _t() {
        var s = ue(["/", "/workers/services/view/", ""]);
        return _t = function() {
          return s
        }, s
      }

      function Et() {
        var s = ue(["/", "/workers/services/", "/rename"]);
        return Et = function() {
          return s
        }, s
      }

      function St() {
        var s = ue(["/", "/workers/services/", "/manage"]);
        return St = function() {
          return s
        }, s
      }

      function ut() {
        var s = ue(["/", "/workers/services/new"]);
        return ut = function() {
          return s
        }, s
      }

      function Ct() {
        var s = ue(["/", "/workers/services"]);
        return Ct = function() {
          return s
        }, s
      }

      function x() {
        var s = ue(["/", "/notifications"]);
        return x = function() {
          return s
        }, s
      }

      function f() {
        var s = ue(["/", "/billing/subscriptions"]);
        return f = function() {
          return s
        }, s
      }

      function c() {
        var s = ue(["/", "/workers/durable-objects/view/", "/settings"]);
        return c = function() {
          return s
        }, s
      }

      function k() {
        var s = ue(["/", "/workers/durable-objects/view/", ""]);
        return k = function() {
          return s
        }, s
      }

      function V() {
        var s = ue(["/", "/workers/durable-objects"]);
        return V = function() {
          return s
        }, s
      }

      function Re() {
        var s = ue(["/", "/workers/services/edit/", "/", ""]);
        return Re = function() {
          return s
        }, s
      }

      function Ze() {
        var s = ue(["/", "/workers/kv/namespaces/", ""]);
        return Ze = function() {
          return s
        }, s
      }

      function Be() {
        var s = ue(["/", "/workers/plans/purchase"]);
        return Be = function() {
          return s
        }, s
      }

      function qe() {
        var s = ue(["/", "/workers/plans"]);
        return qe = function() {
          return s
        }, s
      }

      function at() {
        var s = ue(["/", "/workers/kv/namespaces"]);
        return at = function() {
          return s
        }, s
      }

      function tt() {
        var s = ue(["/", "/workers/kv"]);
        return tt = function() {
          return s
        }, s
      }

      function lt() {
        var s = ue(["/", "/workers/cli"]);
        return lt = function() {
          return s
        }, s
      }

      function mt() {
        var s = ue(["/", "/workers/compute-setting"]);
        return mt = function() {
          return s
        }, s
      }

      function nt() {
        var s = ue(["/", "/workers/default-usage-model"]);
        return nt = function() {
          return s
        }, s
      }

      function ct() {
        var s = ue(["/", "/workers/subdomain"]);
        return ct = function() {
          return s
        }, s
      }

      function Je() {
        var s = ue(["/", "/workers/overview"]);
        return Je = function() {
          return s
        }, s
      }

      function At() {
        var s = ue(["/", "/workers-and-pages/create"]);
        return At = function() {
          return s
        }, s
      }

      function gt() {
        var s = ue(["/", "/workers"]);
        return gt = function() {
          return s
        }, s
      }

      function Tt() {
        var s = ue(["/", "/", "/workers"]);
        return Tt = function() {
          return s
        }, s
      }

      function Pt() {
        var s = ue(["/", "/workers/overview"]);
        return Pt = function() {
          return s
        }, s
      }

      function ue(s, se) {
        return se || (se = s.slice(0)), Object.freeze(Object.defineProperties(s, {
          raw: {
            value: Object.freeze(se)
          }
        }))
      }
      var Mt = function(se) {
          return "".concat(se, ".workers.dev")
        },
        Dt = function(se, jt, Rt) {
          return "".concat(Rt ? "".concat(Rt, ".") : "").concat(se, ".").concat(Mt(jt))
        },
        Bt = function(se, jt, Rt) {
          return "https://".concat(Dt(se, jt, Rt))
        },
        Lt = {
          workersOverview: (0, e.BC)(Pt(), "accountId"),
          zoneRoot: (0, e.BC)(Tt(), "accountId", "zoneName"),
          root: (0, e.BC)(gt(), "accountId"),
          onboarding: (0, e.BC)(At(), "accountId"),
          overview: (0, e.BC)(Je(), "accountId"),
          subdomain: (0, e.BC)(ct(), "accountId"),
          defaultUsageModel: (0, e.BC)(nt(), "accountId"),
          computeSetting: (0, e.BC)(mt(), "accountId"),
          cli: (0, e.BC)(lt(), "accountId"),
          kvRoot: (0, e.BC)(tt(), "accountId"),
          kvStore: (0, e.BC)(at(), "accountId"),
          plans: (0, e.BC)(qe(), "accountId"),
          purchase: (0, e.BC)(Be(), "accountId"),
          kvNamespace: (0, e.BC)(Ze(), "accountId", "namespaceId"),
          editServiceScript: (0, e.BC)(Re(), "accountId", "serviceId", "environmentName"),
          durableObjectsRoot: (0, e.BC)(V(), "accountId"),
          durableObjectDetails: (0, e.BC)(k(), "accountId", "namespaceId"),
          durableObjectDetailsSettings: (0, e.BC)(c(), "accountId", "namespaceId"),
          manageSubscriptions: (0, e.BC)(f(), "accountId"),
          manageNotifications: (0, e.BC)(x(), "accountId"),
          servicesRoot: (0, e.BC)(Ct(), "accountId"),
          createService: (0, e.BC)(ut(), "accountId"),
          manageService: (0, e.BC)(St(), "accountId", "serviceId"),
          renameService: (0, e.BC)(Et(), "accountId", "serviceId"),
          serviceDetailsRoot: (0, e.BC)(_t(), "accountId", "serviceId"),
          serviceDetails: (0, e.BC)(Ot(), "accountId", "serviceId", "environmentName"),
          serviceDetailsDeployments: (0, e.BC)(bt(), "accountId", "serviceId", "environmentName"),
          serviceDetailsSettingsIntegrations: (0, e.BC)(ht(), "accountId", "serviceId", "environmentName"),
          serviceDetailsIntegrationsFlow: (0, e.BC)(yt(), "accountId", "serviceId", "environmentName", "integrationId"),
          serviceDetailsTriggers: (0, e.BC)(vt(), "accountId", "serviceId", "environmentName"),
          serviceDetailsSettings: (0, e.BC)(ft(), "accountId", "serviceId", "environmentName"),
          serviceDetailsSettingsGeneral: (0, e.BC)(Ce(), "accountId", "serviceId", "environmentName"),
          serviceDetailsSettingsBindings: (0, e.BC)(w(), "accountId", "serviceId", "environmentName"),
          serviceDetailsLogs: (0, e.BC)(Qe(), "accountId", "serviceId", "environmentName"),
          serviceDetailsLogsLive: (0, e.BC)(Le(), "accountId", "serviceId", "environmentName"),
          serviceDetailsLogpush: (0, e.BC)(Te(), "accountId", "serviceId", "environmentName"),
          serviceDetailsLogsCron: (0, e.BC)(F(), "accountId", "serviceId", "environmentName"),
          createEnvironment: (0, e.BC)(q(), "accountId", "serviceId", "environmentName"),
          apiKey: (0, e.BC)(ge()),
          signUp: (0, e.BC)(it()),
          dns: (0, e.BC)(Ve(), "accountId", "zoneId"),
          ssl: (0, e.BC)(Ge(), "accountId", "zoneId"),
          analyticsEngine: (0, e.BC)(We(), "accountId"),
          emailRouting: (0, e.BC)(Ie(), "accountId", "zoneName"),
          zones: (0, e.BC)(Ae(), "accountId"),
          developerPlatform_workers_create: (0, e.BC)(te(), "accountId"),
          developerPlatform_workers_success: (0, e.BC)(J(), "accountId"),
          logpush: (0, e.BC)(Q(), "accountId"),
          members: (0, e.BC)(G(), "accountId")
        },
        dt = "https://cron-triggers.cloudflareworkers.com",
        Nt = {
          nextCron: "".concat(dt, "/next"),
          describeCron: "".concat(dt, "/describe"),
          validateCron: "".concat(dt, "/validate"),
          zones: (0, e.BC)(st()),
          subdomain: (0, e.BC)(He(), "accountId"),
          subdomainCertStatus: (0, e.BC)(ze(), "accountId"),
          subdomainDeployed: (0, e.BC)(we(), "accountId", "workerId"),
          accountSettings: (0, e.BC)(he(), "accountId"),
          kvRequestMetrics: (0, e.BC)(me(), "accountId"),
          kvStorageMetrics: (0, e.BC)(De(), "accountId"),
          kvNamespaces: (0, e.BC)(rt(), "accountId"),
          kvNamespace: (0, e.BC)(et(), "accountId", "namespaceId"),
          featureFlagSettings: (0, e.BC)($e(), "accountId"),
          workerUsageModel: (0, e.BC)(Ke(), "accountId", "workerId"),
          createTail: (0, e.BC)(Ye(), "accountId", "workerId"),
          deleteTail: (0, e.BC)(Ne(), "accountId", "workerId", "tailId"),
          services: (0, e.BC)(Ue(), "accountId"),
          service: (0, e.BC)(ee(), "accountId", "serviceId"),
          serviceScriptRoutes: (0, e.BC)(fe(), "accountId", "workerId", "routeId"),
          serviceEnvironment: (0, e.BC)(X(), "accountId", "serviceId", "environmentName"),
          serviceEnvironmentVersions: (0, e.BC)(Pe(), "accountId", "serviceId", "environmentName"),
          serviceRoutes: (0, e.BC)(de(), "accountId", "serviceId", "environmentName"),
          serviceScript: (0, e.BC)(le(), "accountId", "serviceId", "environmentName"),
          serviceScriptV2: (0, e.BC)(Fe(), "accountId", "serviceId", "environmentName"),
          serviceBindings: (0, e.BC)(xe(), "accountId", "serviceId", "environmentName"),
          serviceBindingsReferences: (0, e.BC)(ye(), "accountId", "serviceId", "environmentName"),
          enableDurableObjects: (0, e.BC)(Y(), "accountId"),
          durableObjectNamespaces: (0, e.BC)(je(), "accountId"),
          durableObjectNamespace: (0, e.BC)(ke(), "accountId", "namespaceId"),
          durableObjectsInNamespace: (0, e.BC)(Se(), "accountId", "namespaceId"),
          servicePreview: (0, e.BC)(re(), "accountId", "serviceId", "environmentName"),
          edgePreview: (0, e.BC)(ie(), "accountId", "serviceId", "environmentName"),
          edgePreviewInit: (0, e.BC)(U(), "accountId"),
          edgePreviewZoneInit: (0, e.BC)(I(), "zone"),
          serviceSubdomain: (0, e.BC)(W(), "accountId", "serviceId", "environmentName"),
          serviceUsageModel: (0, e.BC)(z(), "accountId", "serviceId", "environmentName"),
          serviceCopyEnvironment: (0, e.BC)(Z(), "accountId", "serviceId", "environmentName", "toEnvironmentName"),
          serviceCreateTail: (0, e.BC)(ne(), "accountId", "serviceId", "environmentName"),
          serviceDeleteTail: (0, e.BC)($(), "accountId", "serviceId", "environmentName", "tailId"),
          serviceSchedules: (0, e.BC)(D(), "accountId", "serviceId", "environmentName"),
          serviceEmailTriggers: (0, e.BC)(R(), "accountId"),
          promoteDeployment: (0, e.BC)(L(), "accountId", "serviceId", "sourceEnv", "targetEnv"),
          dnsRoutes: (0, e.BC)(pe(), "accountId"),
          dnsRoute: (0, e.BC)(ce(), "accountId", "recordId"),
          dnsRouteChangeset: (0, e.BC)(Ee(), "accountId"),
          certificates: (0, e.BC)(_e(), "zoneId", "certId"),
          queues: (0, e.BC)(B(), "accountId"),
          versions: (0, e.BC)(K(), "accountId", "scriptTag"),
          version: (0, e.BC)(N(), "accountId", "scriptTag", "versionTag"),
          dnsRecords: (0, e.BC)(O(), "zoneId"),
          workersScript: (0, e.BC)(h(), "accountId", "scriptName"),
          spectrum: (0, e.BC)(m(), "zoneId"),
          accountMtlsCertificates: (0, e.BC)(A(), "accountId"),
          permissionGroups: (0, e.BC)(_()),
          createApiToken: (0, e.BC)(T()),
          deleteApiToken: (0, e.BC)(j(), "tokenId"),
          integrations: (0, e.BC)(C(), "accountId"),
          integrationsManifest: (0, e.BC)(y(), "accountId", "integrationId", "version"),
          integrationsData: (0, e.BC)(g(), "accountId", "integrationId", "version", "action"),
          integrationsOptions: (0, e.BC)(u(), "accountId", "integrationId", "version", "action"),
          integrationsSubmitForm: (0, e.BC)(r(), "accountId", "integrationId", "version", "action"),
          integrationsSubmitToken: (0, e.BC)(v(), "accountId", "integrationId", "version", "action"),
          integrationsRemove: (0, e.BC)(S(), "accountId", "integrationId", "version", "action"),
          integrationsOAuthAuthorize: (0, e.BC)(l(), "accountId", "integrationId", "version", "oauthProviderId"),
          integrationsOAuthCallback: (0, e.BC)(b()),
          scriptsByHandler: (0, e.BC)(E(), "accountId", "handler"),
          tailsByConsumer: (0, e.BC)(p(), "accountId", "serviceId", "environment"),
          outboundDispatchers: (0, e.BC)(n(), "accountId", "serviceId", "environmentName")
        }
    },
    "../react/shims/focus-visible.js": function(Oe, M, t) {
      var e, n;

      function p(E) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? p = function(l) {
          return typeof l
        } : p = function(l) {
          return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
        }, p(E)
      }(function(E, b) {
        p(M) === "object" ? b() : (e = b, n = typeof e == "function" ? e.call(M, t, M, Oe) : e, n !== void 0 && (Oe.exports = n))
      })(this, function() {
        "use strict";

        function E() {
          var l = !0,
            S = !1,
            v = null,
            r = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0
            };

          function u(K) {
            return !!(K && K !== document && K.nodeName !== "HTML" && K.nodeName !== "BODY" && "classList" in K && "contains" in K.classList)
          }

          function g(K) {
            var B = K.type,
              _e = K.tagName;
            return !!(_e == "INPUT" && r[B] && !K.readOnly || _e == "TEXTAREA" && !K.readOnly || K.isContentEditable)
          }

          function y(K) {
            K.getAttribute("is-focus-visible") !== "" && K.setAttribute("is-focus-visible", "")
          }

          function C(K) {
            K.getAttribute("is-focus-visible") === "" && K.removeAttribute("is-focus-visible")
          }

          function j(K) {
            u(document.activeElement) && y(document.activeElement), l = !0
          }

          function T(K) {
            l = !1
          }

          function _(K) {
            !u(K.target) || (l || g(K.target)) && y(K.target)
          }

          function A(K) {
            !u(K.target) || K.target.hasAttribute("is-focus-visible") && (S = !0, window.clearTimeout(v), v = window.setTimeout(function() {
              S = !1, window.clearTimeout(v)
            }, 100), C(K.target))
          }

          function m(K) {
            document.visibilityState == "hidden" && (S && (l = !0), h())
          }

          function h() {
            document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N)
          }

          function O() {
            document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N)
          }

          function N(K) {
            K.target.nodeName.toLowerCase() !== "html" && (l = !1, O())
          }
          document.addEventListener("keydown", j, !0), document.addEventListener("mousedown", T, !0), document.addEventListener("pointerdown", T, !0), document.addEventListener("touchstart", T, !0), document.addEventListener("focus", _, !0), document.addEventListener("blur", A, !0), document.addEventListener("visibilitychange", m, !0), h(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
        }

        function b(l) {
          var S;

          function v() {
            S || (S = !0, l())
          } ["interactive", "complete"].indexOf(document.readyState) >= 0 ? l() : (S = !1, document.addEventListener("DOMContentLoaded", v, !1), window.addEventListener("load", v, !1))
        }
        typeof document != "undefined" && b(E)
      })
    },
    "../react/utils/api.js": function(Oe, M, t) {
      "use strict";
      t.r(M), t.d(M, {
        attachAtokHeader: function() {
          return y
        },
        attachErrorHandler: function() {
          return T
        },
        authyAuthConfirmNumber: function() {
          return L
        },
        authyAuthPutSave: function() {
          return R
        },
        basePath: function() {
          return u
        },
        fetchCertificateApiKey: function() {
          return B
        },
        fetchUserServiceKey: function() {
          return N
        },
        performLogout: function() {
          return O
        },
        prependApiRoute: function() {
          return C
        },
        sendCookies: function() {
          return j
        },
        twoFacDisableDelete: function() {
          return pe
        },
        twoFacGoogleAuthEnablePost: function() {
          return Ee
        },
        twoFacGoogleAuthQRCodeGet: function() {
          return ce
        },
        updateCertificateApiKey: function() {
          return _e
        },
        updateUserServiceKey: function() {
          return K
        },
        validateOptions: function() {
          return g
        }
      });
      var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
        n = t.n(e),
        p = t("../react/app/providers/storeContainer.js"),
        E = t("../react/common/actions/notificationsActions.ts"),
        b = t("../react/utils/translator.tsx"),
        l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
        S = t("../react/pages/onboarding/components/AppleLogin/constants.ts");

      function v(D) {
        for (var $ = 1; $ < arguments.length; $++) {
          var ne = arguments[$] != null ? Object(arguments[$]) : {},
            Z = Object.keys(ne);
          typeof Object.getOwnPropertySymbols == "function" && (Z = Z.concat(Object.getOwnPropertySymbols(ne).filter(function(z) {
            return Object.getOwnPropertyDescriptor(ne, z).enumerable
          }))), Z.forEach(function(z) {
            r(D, z, ne[z])
          })
        }
        return D
      }

      function r(D, $, ne) {
        return $ in D ? Object.defineProperty(D, $, {
          value: ne,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : D[$] = ne, D
      }
      var u = "/api/v4",
        g = function($) {
          $.url.charAt(0) !== "/" && ($.url = "/".concat($.url))
        },
        y = function($) {
          t.g.bootstrap && t.g.bootstrap.atok && ($.headers = v({}, $.headers, {
            "X-ATOK": t.g.bootstrap.atok
          }))
        },
        C = function($) {
          $.url = u + $.url
        },
        j = function($) {
          $.credentials = "same-origin"
        },
        T = function($) {
          var ne = $.callback;
          $.callback = function(Z, z) {
            Z && !$.hideErrorAlert && _(Z, $), ne && ne(Z, z)
          }
        },
        _ = function($, ne) {
          var Z = $.body && $.body.errors,
            z = Z ? m(ne, Z) : h(ne, $);
          z.forEach(function(W) {
            (0, p.bh)().dispatch(E.IH("error", W)), {
              REDUX_LOGGER: void 0
            }.TESTING && t.g.logAppError(W)
          })
        };

      function A(D, $) {
        return !!($.code === 1001 && D.url && D.url.match(/subscription/gi) || $.code === 10042 && D.url && D.url.match(/r2/gi))
      }
      var m = function($, ne) {
          return ne.filter(function(Z) {
            return !A($, Z)
          }).map(function(Z) {
            var z = Z.message,
              W = Z.code,
              I = Z.error_chain;
            switch (W) {
              case 9300:
              case 9301:
              case 9303:
                O();
              default:
                break
            }
            var U = z.split(" ").length > 1,
              ie = z.split(".").length > 1,
              re = !U && ie,
              Se = z;
            if (re) try {
              Se = (0, b.ZP)(z)
            } catch {}
            if (z.startsWith("billing.")) return "Error while processing payment: ".concat(Se, ".");
            var ke = Array.isArray(I) ? I.map(function(je) {
              return je.message
            }).join(". ") : "";
            return "".concat(Se).concat(typeof W != "undefined" ? " (Code: ".concat(W, ")") : "", " ").concat(ke)
          })
        },
        h = function($, ne) {
          return ["API Request Failed: ".concat($.method, " ").concat($.url, " (").concat(ne.status, ")")]
        };
      e.beforeSend(g), e.beforeSend(y), e.beforeSend(C), e.beforeSend(j), e.beforeSend(T);
      var O = function($) {
        return e.del("/user/sessions/current").then(function(ne) {
          if (l.E.remove(S.Qq), $) window.location.href = $;
          else {
            var Z, z, W = (Z = (z = ne.body.result) === null || z === void 0 ? void 0 : z.redirect_uri) !== null && Z !== void 0 ? Z : "/login";
            window.location.href = W
          }
        }).catch(function(ne) {
          console.log("Logout request failed:", ne)
        })
      };

      function N(D) {
        return e.get("/user/service_keys/" + D)
      }

      function K(D, $) {
        return e.put("/user/service_keys/" + D, {
          body: $
        })
      }

      function B(D) {
        return e.post("/user/service_keys/certificateapi", {
          body: D
        })
      }

      function _e(D) {
        return e.put("/user/service_keys/certificateapi", {
          body: D
        })
      }
      var Ee = function($, ne) {
          var Z = {
            google_auth_code: $
          };
          return e.post("/user/two_factor_authentication/google_authenticator/enable", {
            body: Z
          }, ne)
        },
        ce = function($) {
          return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, $)
        },
        pe = function($, ne) {
          var Z = {
            auth_token: $
          };
          return e.del("/user/two_factor_authentication", {
            body: Z
          }, ne)
        },
        L = function($, ne) {
          return e.post("/user/two_factor_authentication", {
            body: $
          }, ne)
        },
        R = function($, ne) {
          return e.put("/user/two_factor_authentication", {
            body: $
          }, ne)
        }
    },
    "../react/utils/bootstrap.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        $8: function() {
          return n
        },
        Ak: function() {
          return e
        },
        Hk: function() {
          return E
        },
        gm: function() {
          return p
        }
      });
      var e = function() {
          var l, S, v;
          return (l = window) === null || l === void 0 || (S = l.bootstrap) === null || S === void 0 || (v = S.data) === null || v === void 0 ? void 0 : v.security_token
        },
        n = function() {
          var l, S, v;
          return !!((l = t.g.bootstrap) === null || l === void 0 || (S = l.data) === null || S === void 0 || (v = S.user) === null || v === void 0 ? void 0 : v.id)
        },
        p = function() {
          var l, S;
          return !!((l = t.g.bootstrap) === null || l === void 0 || (S = l.data) === null || S === void 0 ? void 0 : S.is_kendo)
        },
        E = function() {
          var l, S, v, r;
          return (l = window) === null || l === void 0 || (S = l.bootstrap) === null || S === void 0 || (v = S.data) === null || v === void 0 || (r = v.user) === null || r === void 0 ? void 0 : r.primary_account_tag
        }
    },
    "../react/utils/i18n.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        AI: function() {
          return T
        },
        S8: function() {
          return j
        },
        ZW: function() {
          return l
        },
        ay: function() {
          return _
        },
        fh: function() {
          return A
        },
        ly: function() {
          return v
        },
        th: function() {
          return b
        },
        ti: function() {
          return r
        }
      });
      var e = t("../../../../node_modules/moment/moment.js"),
        n = t.n(e),
        p = t("../../../common/intl/intl-types/src/index.ts"),
        E = t("../../../common/util/types/src/utils/index.ts"),
        b = "cf-sync-locale-with-cps",
        l = p.Q.en_US,
        S = "en_US",
        v = "cf-locale",
        r = function(O) {
          return (0, E.Yd)(p.Q).find(function(N) {
            return p.Q[N] === O
          }) || S
        },
        u = [],
        g = [],
        y = [p.Q.de_DE, p.Q.en_US, p.Q.es_ES, p.Q.es_CL, p.Q.es_EC, p.Q.es_MX, p.Q.es_PE, p.Q.fr_FR, p.Q.it_IT, p.Q.ja_JP, p.Q.ko_KR, p.Q.pt_BR, p.Q.zh_CN, p.Q.zh_TW],
        C = {
          test: y.concat(g, u),
          development: y.concat(g, u),
          staging: y.concat(g, u),
          production: y.concat(g)
        },
        j = function(O) {
          var N = p.Q[O];
          return C.production.includes(N)
        },
        T = function() {
          return Object.keys(p.Q).filter(function(O) {
            return j(O)
          })
        },
        _ = function(O) {
          var N = p.Q[O];
          return g.includes(N)
        },
        A = function(O) {
          return m[O]
        },
        m = {
          de_DE: "Deutsch",
          en_US: "English (US)",
          es_CL: "Espa\xF1ol (Chile)",
          es_EC: "Espa\xF1ol (Ecuador)",
          es_ES: "Espa\xF1ol (Espa\xF1a)",
          es_MX: "Espa\xF1ol (Mexico)",
          es_PE: "Espa\xF1ol (Peru)",
          fr_FR: "Fran\xE7ais (France)",
          ja_JP: "\u65E5\u672C\u8A9E",
          ko_KR: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)",
          it_IT: "Italiano (Italia)",
          pt_BR: "Portugu\xEAs (Brasil)",
          zh_CN: "\u7B80\u4F53\u4E2D\u6587",
          zh_TW: "\u4E2D\u6587 (\u53F0\u7063)"
        };
      n().defineLocale("es-cl", {
        parentLocale: "es",
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        }
      }), n().defineLocale("es-ec", {
        parentLocale: "es",
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D/M/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        }
      }), n().defineLocale("es-mx", {
        parentLocale: "es",
        longDateFormat: {
          LT: "h:mm a",
          LTS: "h:mm:ss a",
          L: "D/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm a",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
        }
      }), n().defineLocale("es-pe", {
        parentLocale: "es",
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        }
      })
    },
    "../react/utils/translator.tsx": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        QT: function() {
          return j
        },
        Vb: function() {
          return v
        },
        Yi: function() {
          return u
        },
        ZP: function() {
          return S
        },
        _m: function() {
          return g
        },
        cC: function() {
          return y
        },
        oc: function() {
          return C
        }
      });
      var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
        n = t("../../../dash/intl/intl-translations/src/index.ts"),
        p = t("../../../common/intl/intl-core/src/Translator.ts"),
        E = t("../../../common/intl/intl-react/src/index.ts"),
        b = t("../flags.js").J8,
        l = new p.Z({
          pseudoLoc: b("is_pseudo_loc")
        });

      function S(T) {
        for (var _ = arguments.length, A = new Array(_ > 1 ? _ - 1 : 0), m = 1; m < _; m++) A[m - 1] = arguments[m];
        return l.t.apply(l, [T].concat(A))
      }
      var v = l;

      function r(T) {
        for (var _ = arguments.length, A = new Array(_ > 1 ? _ - 1 : 0), m = 1; m < _; m++) A[m - 1] = arguments[m];
        return markdown(S(T, A))
      }

      function u(T) {
        if (Number(T) !== 0) {
          if (T % 86400 == 0) return S("time.num_days", {
            smart_count: T / 86400
          });
          if (T % 3600 == 0) return S("time.num_hours", {
            smart_count: T / 3600
          });
          if (T % 60 == 0) return S("time.num_minutes", {
            smart_count: T / 60
          })
        }
        return S("time.num_seconds", {
          smart_count: T
        })
      }

      function g(T, _) {
        return T in _ ? _[T] : void 0
      }
      var y = E.cC,
        C = E.oc,
        j = E.QT
    },
    "../react/utils/url.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Ct: function() {
          return L
        },
        Fl: function() {
          return le
        },
        KT: function() {
          return Pe
        },
        Nw: function() {
          return ce
        },
        Pd: function() {
          return Ee
        },
        Uh: function() {
          return ye
        },
        Y_: function() {
          return K
        },
        e1: function() {
          return pe
        },
        el: function() {
          return I
        },
        hW: function() {
          return ie
        },
        pu: function() {
          return de
        },
        qR: function() {
          return W
        },
        td: function() {
          return _e
        },
        uW: function() {
          return Se
        }
      });
      var e = t("../../../../node_modules/query-string/query-string.js"),
        n = t.n(e),
        p = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
        E = t("../react/pages/r2/routes.ts"),
        b = t("../react/pages/zoneless-workers/routes.ts"),
        l = t("../react/pages/pages/routes.ts");

      function S(X) {
        return A(X) || u(X) || j(X) || C()
      }

      function v(X) {
        return g(X) || u(X) || j(X) || r()
      }

      function r() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function u(X) {
        if (typeof Symbol != "undefined" && X[Symbol.iterator] != null || X["@@iterator"] != null) return Array.from(X)
      }

      function g(X) {
        if (Array.isArray(X)) return T(X)
      }

      function y(X, fe) {
        return A(X) || _(X, fe) || j(X, fe) || C()
      }

      function C() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function j(X, fe) {
        if (!!X) {
          if (typeof X == "string") return T(X, fe);
          var ee = Object.prototype.toString.call(X).slice(8, -1);
          if (ee === "Object" && X.constructor && (ee = X.constructor.name), ee === "Map" || ee === "Set") return Array.from(X);
          if (ee === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee)) return T(X, fe)
        }
      }

      function T(X, fe) {
        (fe == null || fe > X.length) && (fe = X.length);
        for (var ee = 0, Ue = new Array(fe); ee < fe; ee++) Ue[ee] = X[ee];
        return Ue
      }

      function _(X, fe) {
        var ee = X && (typeof Symbol != "undefined" && X[Symbol.iterator] || X["@@iterator"]);
        if (ee != null) {
          var Ue = [],
            Ne = !0,
            Ye = !1,
            Ke, $e;
          try {
            for (ee = ee.call(X); !(Ne = (Ke = ee.next()).done) && (Ue.push(Ke.value), !(fe && Ue.length === fe)); Ne = !0);
          } catch (et) {
            Ye = !0, $e = et
          } finally {
            try {
              !Ne && ee.return != null && ee.return()
            } finally {
              if (Ye) throw $e
            }
          }
          return Ue
        }
      }

      function A(X) {
        if (Array.isArray(X)) return X
      }

      function m(X) {
        for (var fe = 1; fe < arguments.length; fe++) {
          var ee = arguments[fe] != null ? Object(arguments[fe]) : {},
            Ue = Object.keys(ee);
          typeof Object.getOwnPropertySymbols == "function" && (Ue = Ue.concat(Object.getOwnPropertySymbols(ee).filter(function(Ne) {
            return Object.getOwnPropertyDescriptor(ee, Ne).enumerable
          }))), Ue.forEach(function(Ne) {
            h(X, Ne, ee[Ne])
          })
        }
        return X
      }

      function h(X, fe, ee) {
        return fe in X ? Object.defineProperty(X, fe, {
          value: ee,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : X[fe] = ee, X
      }
      var O = p.Z.endsWithSlash,
        N = function(fe, ee) {
          var Ue = fe.replace(O, "").split("/");
          return Ue.slice(0, 2).concat([ee]).concat(Ue.slice(3)).join("/")
        },
        K = function() {
          return window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare")
        },
        B = function(fe) {
          return "/".concat(fe.replace(O, "").replace(/^\//, ""))
        },
        _e = function(fe) {
          return ce("add-site", fe)
        },
        Ee = function(fe) {
          return ce("billing", fe)
        },
        ce = function(fe, ee) {
          return ee ? "/".concat(ee).concat(fe ? "/".concat(fe) : "") : "/?to=/:account/".concat(fe)
        },
        pe = function() {
          var fe = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
          return fe ? fe[1] : null
        },
        L = function(fe, ee) {
          return n().stringify(m({}, n().parse(fe), ee))
        },
        R = function() {
          var fe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          return fe.toString().replace(/([\/]{1,})$/, "")
        },
        D = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/websites"],
        $ = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/,
        ne = /^\/(\w{32,})(\/[^.]*)?/,
        Z = function(fe) {
          return D.includes(fe)
        },
        z = function(fe) {
          return !Z(fe)
        },
        W = function(fe) {
          return !Z(fe) && ne.test(fe)
        },
        I = function(fe) {
          return !Z(fe) && $.test(fe)
        },
        U = function(fe) {
          return $.exec(fe)
        },
        ie = function(fe) {
          if (I(fe)) return fe.split("/").filter(function(ee) {
            return ee.length > 0
          })[1]
        },
        re = function(fe) {
          return ne.exec(fe)
        },
        Se = function(fe) {
          if (W(fe)) {
            var ee = re(fe);
            if (ee) return ee[1]
          }
        },
        ke = function(fe) {
          return W(fe) && fe.split("/")[2] === "register-domain"
        },
        je = function(fe) {
          return ke(fe) ? fe.split("/") : null
        },
        Y = function(fe) {
          if (I(fe)) {
            var ee = fe.split("/"),
              Ue = y(ee, 8),
              Ne = Ue[3],
              Ye = Ue[4],
              Ke = Ue[5],
              $e = Ue[6],
              et = Ue[7];
            return Ne === "traffic" && Ye === "load-balancing" && Ke === "pools" && $e === "edit" && et
          }
        },
        ye = function(fe) {
          var ee = je(fe);
          if (ee) return ee[3]
        },
        xe = function(fe, ee) {
          var Ue, Ne;
          return ((Ue = fe.pattern.match(/\:/g)) !== null && Ue !== void 0 ? Ue : []).length - ((Ne = ee.pattern.match(/\:/g)) !== null && Ne !== void 0 ? Ne : []).length
        },
        Fe = v(Object.values(E._j)).concat(v(Object.values(b._j)), v(Object.values(l._j))).sort(xe);

      function le(X) {
        if (!z(X)) return X;
        var fe = !0,
          ee = !1,
          Ue = void 0;
        try {
          for (var Ne = Fe[Symbol.iterator](), Ye; !(fe = (Ye = Ne.next()).done); fe = !0) {
            var Ke = Ye.value;
            if (Ke.expression.test(X)) return Ke.pattern
          }
        } catch (Q) {
          ee = !0, Ue = Q
        } finally {
          try {
            !fe && Ne.return != null && Ne.return()
          } finally {
            if (ee) throw Ue
          }
        }
        var $e = je(X);
        if ($e) {
          var et = S($e),
            rt = et[2],
            De = et.slice(4);
          return "/:accountId/".concat(rt, "/:domainName/").concat(De.join("/"))
        }
        var me = Y(X);
        if (me) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
        var he = U(X);
        if (he) {
          var we = y(he, 5),
            ze = we[4];
          return "/:accountId/:zoneName".concat(ze || "")
        }
        var He = re(X);
        if (He) {
          var st = y(He, 3),
            G = st[2];
          return "/:accountId".concat(G || "")
        }
        return X
      }

      function de(X) {
        if (!!X) try {
          var fe = X.split("."),
            ee = fe.pop();
          if (ee && ee.length > 0) return ee
        } catch {}
      }

      function Pe(X) {
        var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.location.href;
        try {
          var ee = new URL(X),
            Ue = new URL(fe);
          if (ee.origin === Ue.origin) return "".concat(ee.pathname).concat(ee.search).concat(ee.hash)
        } catch {}
      }
    },
    "../utils/getBootstrap.js": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        r: function() {
          return p
        }
      });

      function e(b, l, S, v, r, u, g) {
        try {
          var y = b[u](g),
            C = y.value
        } catch (j) {
          S(j);
          return
        }
        y.done ? l(C) : Promise.resolve(C).then(v, r)
      }

      function n(b) {
        return function() {
          var l = this,
            S = arguments;
          return new Promise(function(v, r) {
            var u = b.apply(l, S);

            function g(C) {
              e(u, v, r, g, y, "next", C)
            }

            function y(C) {
              e(u, v, r, g, y, "throw", C)
            }
            g(void 0)
          })
        }
      }

      function p() {
        return E.apply(this, arguments)
      }

      function E() {
        return E = n(regeneratorRuntime.mark(function b() {
          var l, S, v;
          return regeneratorRuntime.wrap(function(u) {
            for (;;) switch (u.prev = u.next) {
              case 0:
                return u.next = 2, fetch("/api/v4/system/bootstrap", {
                  credentials: "same-origin"
                });
              case 2:
                if (l = u.sent, l.ok) {
                  u.next = 5;
                  break
                }
                throw {
                  message: "Bootstrap API Failure", code: l == null ? void 0 : l.status
                };
              case 5:
                return u.next = 7, l.json();
              case 7:
                return S = u.sent, v = S.result.data, u.abrupt("return", v);
              case 10:
              case "end":
                return u.stop()
            }
          }, b, this)
        })), E.apply(this, arguments)
      }
    },
    "../utils/initStyles.ts": function(Oe, M, t) {
      "use strict";
      var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
        n = t("../react/app/providers/storeContainer.js"),
        p = "cfBaseStyles",
        E = document.head || document.getElementsByTagName("head")[0],
        b = function(v) {
          var r = [];
          for (var u in v.colors) {
            var g = v.colors[u];
            if (Array.isArray(g) && u !== "categorical")
              for (var y = 0; y < g.length; ++y) r.push("--cf-".concat(u, "-").concat(y, ":").concat(g[y], ";"))
          }
          return r.join(`
`)
        },
        l = function() {
          var v = (0, e.Yc)(),
            r = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: `.concat(e.Rl.colors.gray[5], `
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: `).concat(e.Rl.colors.gray[1], `;
      background-color: `).concat(e.Rl.colors.background, `;
      font-family: `).concat(e.Rl.fontFamily, `;
    }

    text {
      fill: `).concat(e.Rl.colors.gray[1], `;
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: `).concat(e.Rl.fontFamily, `;
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: `).concat(e.Rl.colors.gray[1], `;
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: `).concat(v ? e.Rl.colors.gray[8] : e.Rl.colors.gray[9], `;
      border: 1px solid `).concat(v ? e.Rl.colors.gray[7] : e.Rl.colors.gray[8], `;
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: `).concat(v ? e.Rl.colors.gray[8] : e.Rl.colors.gray[9], `
    }

    th {
      font-weight: 600;
    }

    a {
      color: `).concat(v ? e.Rl.colors.blue[3] : e.Rl.colors.blue[4], `;
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: `).concat(v ? e.Rl.colors.orange[3] : e.Rl.colors.blue[2], `;
      cursor: pointer;
    }

    a:active {
      color: `).concat(v ? e.Rl.colors.orange[3] : e.Rl.colors.blue[2], `;
      outline: none;
    }

    a:focus {
      color: `).concat(e.Rl.colors.blue[5], `;
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: `).concat(e.Rl.fontSizes[3], `px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: `).concat(e.Rl.colors.background, `;
      color:  `).concat(e.Rl.colors.gray[8], `
    }

    :root {
      --cf-white: `).concat(e.Rl.colors.white, `;
      --cf-black: `).concat(e.Rl.colors.black, `;
      `).concat(b(e.Rl), `
    }

    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: `).concat(e.Rl.modeTransitionTime, `ms !important;
      transition-property: all !important;
      transition-timing-function: ease-out !important;
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `),
            u = document.getElementById(p);
          u ? u.innerText = "" : (u = document.createElement("style"), u.id = p, E.appendChild(u)), u.appendChild(document.createTextNode(r));
          var g = (0, n.bh)();
          g.dispatch({
            type: "cfForceUpdate"
          })
        };
      (0, e.fF)(l), M.Z = l
    },
    "../utils/sentry/lastSentEventId.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        e: function() {
          return n
        }
      });
      var e = function() {
          var E = "",
            b = function(v) {
              return !v || typeof v != "string" || (E = v), E
            },
            l = function() {
              return E
            };
          return {
            setEventId: b,
            getEventId: l
          }
        },
        n = e()
    },
    "../../../common/intl/intl-core/src/Translator.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Z: function() {
          return Ee
        }
      });
      var e = t("../../../../node_modules/node-polyglot/index.js"),
        n = t.n(e),
        p = t("../../../common/intl/intl-types/src/index.ts"),
        E = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
        b = t("../../../../node_modules/lodash/mapValues.js"),
        l = t.n(b);

      function S(ce) {
        for (var pe = 1; pe < arguments.length; pe++) {
          var L = arguments[pe] != null ? Object(arguments[pe]) : {},
            R = Object.keys(L);
          typeof Object.getOwnPropertySymbols == "function" && (R = R.concat(Object.getOwnPropertySymbols(L).filter(function(D) {
            return Object.getOwnPropertyDescriptor(L, D).enumerable
          }))), R.forEach(function(D) {
            v(ce, D, L[D])
          })
        }
        return ce
      }

      function v(ce, pe, L) {
        return pe in ce ? Object.defineProperty(ce, pe, {
          value: L,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ce[pe] = L, ce
      }
      var r = {
          prepend: "[!!",
          append: "!!]",
          delimiter: "%",
          startDelimiter: "",
          endDelimiter: "",
          extend: 0,
          override: void 0
        },
        u = {
          A: String.fromCharCode(192, 193, 194, 195, 196, 197, 256, 258, 260, 506, 512, 514),
          a: String.fromCharCode(224, 225, 226, 227, 228, 229, 257, 259, 261, 507, 513, 515),
          B: String.fromCharCode(223, 385, 579, 665),
          b: String.fromCharCode(384, 386, 387, 388, 389, 595),
          C: String.fromCharCode(262, 264, 266, 268),
          c: String.fromCharCode(263, 265, 267, 269),
          D: String.fromCharCode(270, 272, 393, 394),
          d: String.fromCharCode(271, 273),
          E: String.fromCharCode(274, 276, 278, 280, 282, 516, 518),
          e: String.fromCharCode(275, 277, 279, 281, 283, 517, 519),
          F: String.fromCharCode(401),
          f: String.fromCharCode(402),
          G: String.fromCharCode(284, 286, 288, 290),
          g: String.fromCharCode(285, 287, 289, 291),
          H: String.fromCharCode(292, 294),
          h: String.fromCharCode(293, 295),
          I: String.fromCharCode(296, 298, 300, 302, 304),
          i: String.fromCharCode(297, 299, 301, 303, 305),
          J: String.fromCharCode(309),
          j: String.fromCharCode(308),
          K: String.fromCharCode(310, 408),
          k: String.fromCharCode(311, 312, 409),
          L: String.fromCharCode(313, 315, 317, 319, 321),
          l: String.fromCharCode(314, 316, 318, 320, 322),
          N: String.fromCharCode(323, 325, 327, 330, 413),
          n: String.fromCharCode(324, 326, 328, 329, 331, 414),
          O: String.fromCharCode(332, 334, 336, 416),
          o: String.fromCharCode(333, 335, 337, 417),
          P: String.fromCharCode(420),
          p: String.fromCharCode(421, 447),
          Q: String.fromCharCode(490, 492),
          q: String.fromCharCode(491, 493, 587),
          R: String.fromCharCode(340, 342, 344, 422),
          r: String.fromCharCode(341, 343, 345),
          S: String.fromCharCode(346, 348, 350, 352),
          s: String.fromCharCode(347, 349, 351, 353),
          T: String.fromCharCode(354, 356, 358),
          t: String.fromCharCode(355, 357, 359),
          U: String.fromCharCode(360, 362, 364, 366, 368, 370),
          u: String.fromCharCode(361, 363, 365, 367, 369, 371),
          W: String.fromCharCode(372),
          w: String.fromCharCode(373),
          Y: String.fromCharCode(374, 376, 435, 562, 590),
          y: String.fromCharCode(375, 436, 563, 591),
          Z: String.fromCharCode(377, 379, 381, 437),
          z: String.fromCharCode(378, 380, 382, 438)
        },
        g = {
          version: "1.1.0",
          option: S({}, r),
          reset: function() {
            this.option = S({}, r)
          },
          table: u,
          pad: function(pe, L) {
            for (var R = Math.floor(pe.length * L / 2), D = R, $ = pe; R-- > 0;) $ = " " + $;
            for (; D-- > 0;) $ = $ + " ";
            return $
          },
          str: function(pe) {
            for (var L = this.option, R = L.startDelimiter || L.delimiter, D = L.endDelimiter || L.delimiter, $ = new RegExp(R + "\\s*[\\w\\.\\s*]+\\s*" + D, "g"), ne, Z = [], z = 0, W = 0, I = "", U, ie; ne = $.exec(pe);) Z.push(ne);
            for (var re = Z[W++] || {
                index: -1
              }; z < pe.length;) {
              if (re.index === z) {
                I += re[0], z += re[0].length, re = Z[W++] || {
                  index: -1
                };
                continue
              }
              if (U = L.override !== void 0 ? L.override : pe[z], ie = u[U], ie) {
                var Se = pe.length % ie.length;
                U = ie[Se]
              }
              I += U, z++
            }
            return L.prepend + this.pad(I, L.extend) + L.append
          }
        },
        y = g,
        C = t("../../../common/intl/intl-core/src/errors.ts");

      function j(ce, pe) {
        return h(ce) || m(ce, pe) || _(ce, pe) || T()
      }

      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function _(ce, pe) {
        if (!!ce) {
          if (typeof ce == "string") return A(ce, pe);
          var L = Object.prototype.toString.call(ce).slice(8, -1);
          if (L === "Object" && ce.constructor && (L = ce.constructor.name), L === "Map" || L === "Set") return Array.from(ce);
          if (L === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)) return A(ce, pe)
        }
      }

      function A(ce, pe) {
        (pe == null || pe > ce.length) && (pe = ce.length);
        for (var L = 0, R = new Array(pe); L < pe; L++) R[L] = ce[L];
        return R
      }

      function m(ce, pe) {
        var L = ce && (typeof Symbol != "undefined" && ce[Symbol.iterator] || ce["@@iterator"]);
        if (L != null) {
          var R = [],
            D = !0,
            $ = !1,
            ne, Z;
          try {
            for (L = L.call(ce); !(D = (ne = L.next()).done) && (R.push(ne.value), !(pe && R.length === pe)); D = !0);
          } catch (z) {
            $ = !0, Z = z
          } finally {
            try {
              !D && L.return != null && L.return()
            } finally {
              if ($) throw Z
            }
          }
          return R
        }
      }

      function h(ce) {
        if (Array.isArray(ce)) return ce
      }

      function O(ce, pe) {
        if (!(ce instanceof pe)) throw new TypeError("Cannot call a class as a function")
      }

      function N(ce, pe) {
        for (var L = 0; L < pe.length; L++) {
          var R = pe[L];
          R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(ce, R.key, R)
        }
      }

      function K(ce, pe, L) {
        return pe && N(ce.prototype, pe), L && N(ce, L), ce
      }

      function B(ce, pe, L) {
        return pe in ce ? Object.defineProperty(ce, pe, {
          value: L,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : ce[pe] = L, ce
      }
      y.option.delimiter = "%", y.option.startDelimiter = "{", y.option.endDelimiter = "}";
      var _e = function() {
          function ce(pe) {
            var L = this;
            O(this, ce), B(this, "map", void 0), B(this, "currentLocale", p.Q.en_US), B(this, "options", void 0), B(this, "psudoLocalizePhrases", function(R) {
              return Object.entries(R).reduce(function(D, $) {
                var ne = j($, 2),
                  Z = ne[0],
                  z = ne[1];
                return Object.assign(D, B({}, Z, y.str(z)))
              }, {})
            }), B(this, "getInstance", function(R) {
              return R ? L.map[R] : L.map[L.currentLocale]
            }), B(this, "getInstanceMatchingPhrase", function(R) {
              var D = L.getInstance();
              return D.has(R) ? D : L.getInstance(p.Q.en_US)
            }), B(this, "extend", function(R, D) {
              var $ = L.getInstance(D);
              L.options.pseudoLoc && (R = L.psudoLocalizePhrases(R)), $.extend(R)
            }), B(this, "t", function(R, D) {
              var $ = L.getInstanceMatchingPhrase(R);
              return D ? $.t(R, D) : $.t(R)
            }), B(this, "tm", function(R, D) {
              return (0, E.Z)(L.t(R, D))
            }), B(this, "clear", function() {
              L.getInstance().clear()
            }), B(this, "replace", function(R) {
              L.options.pseudoLoc && (R = L.psudoLocalizePhrases(R)), L.getInstance().replace(R)
            }), B(this, "locale", function(R) {
              return R && (L.currentLocale = R, L.map[R] || L.createInstance(R)), L.currentLocale
            }), B(this, "has", function(R) {
              return L.getInstanceMatchingPhrase(R).has(R)
            }), B(this, "translateSeconds", function(R) {
              if (Number(R) !== 0) {
                if (R % 86400 == 0) return L.t("time.num_days", {
                  smart_count: R / 86400
                });
                if (R % 3600 == 0) return L.t("time.num_hours", {
                  smart_count: R / 3600
                });
                if (R % 60 == 0) return L.t("time.num_minutes", {
                  smart_count: R / 60
                })
              }
              return L.t("time.num_seconds", {
                smart_count: R
              })
            }), B(this, "translateObject", function(R) {
              return l()(R, L.t)
            }), this.map = {}, this.options = pe || {}, this.options.allowMissing = !0, this.options.onMissingKey = function(R, D, $) {
              return console.error(new C.OZ(R)), D._ ? D._ : R
            }, this.locale(pe && pe.locale || p.Q.en_US), pe && pe.phrases && (pe.phrases = void 0), pe && pe.locale && (pe.locale = void 0)
          }
          return K(ce, [{
            key: "createInstance",
            value: function(L) {
              this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[L] = new(n())(Object.assign(this.options, {
                locale: L
              }))
            }
          }]), ce
        }(),
        Ee = _e
    },
    "../../../common/intl/intl-core/src/errors.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        OZ: function() {
          return j
        },
        YB: function() {
          return C
        }
      });

      function e(_) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? e = function(m) {
          return typeof m
        } : e = function(m) {
          return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m
        }, e(_)
      }

      function n(_, A) {
        if (!(_ instanceof A)) throw new TypeError("Cannot call a class as a function")
      }

      function p(_, A) {
        return A && (e(A) === "object" || typeof A == "function") ? A : b(_)
      }

      function E(_, A) {
        if (typeof A != "function" && A !== null) throw new TypeError("Super expression must either be null or a function");
        _.prototype = Object.create(A && A.prototype, {
          constructor: {
            value: _,
            writable: !0,
            configurable: !0
          }
        }), A && u(_, A)
      }

      function b(_) {
        if (_ === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return _
      }

      function l(_) {
        var A = typeof Map == "function" ? new Map : void 0;
        return l = function(h) {
          if (h === null || !r(h)) return h;
          if (typeof h != "function") throw new TypeError("Super expression must either be null or a function");
          if (typeof A != "undefined") {
            if (A.has(h)) return A.get(h);
            A.set(h, O)
          }

          function O() {
            return S(h, arguments, g(this).constructor)
          }
          return O.prototype = Object.create(h.prototype, {
            constructor: {
              value: O,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), u(O, h)
        }, l(_)
      }

      function S(_, A, m) {
        return v() ? S = Reflect.construct : S = function(O, N, K) {
          var B = [null];
          B.push.apply(B, N);
          var _e = Function.bind.apply(O, B),
            Ee = new _e;
          return K && u(Ee, K.prototype), Ee
        }, S.apply(null, arguments)
      }

      function v() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
          return !1
        }
      }

      function r(_) {
        return Function.toString.call(_).indexOf("[native code]") !== -1
      }

      function u(_, A) {
        return u = Object.setPrototypeOf || function(h, O) {
          return h.__proto__ = O, h
        }, u(_, A)
      }

      function g(_) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(m) {
          return m.__proto__ || Object.getPrototypeOf(m)
        }, g(_)
      }

      function y(_, A, m) {
        return A in _ ? Object.defineProperty(_, A, {
          value: m,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _[A] = m, _
      }
      var C = function(_) {
          E(A, _);

          function A(m, h) {
            var O;
            return n(this, A), O = p(this, g(A).call(this, h)), y(b(b(O)), "translationKey", void 0), O.translationKey = m, O.name = "TranslatorError", O
          }
          return A
        }(l(Error)),
        j = function(_) {
          E(A, _);

          function A(m) {
            var h;
            return n(this, A), h = p(this, g(A).call(this, m, "Translation key not found: ".concat(m))), h.name = "TranslatorKeyNotFoundError", h
          }
          return A
        }(C),
        T = null
    },
    "../../../common/intl/intl-core/src/prepare.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        x: function() {
          return b
        }
      });
      var e = t("../../../../node_modules/lodash/set.js"),
        n = t.n(e),
        p = t("../../../common/intl/intl-types/src/index.ts");

      function E(S) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? E = function(r) {
          return typeof r
        } : E = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }, E(S)
      }

      function b(S, v) {
        var r = l(S, v),
          u = Object.keys(r).reduce(function(g, y) {
            return n()(g, y.substring("".concat(S, ".").length), y)
          }, {});
        return {
          translations: r,
          keys: u,
          namespace: S
        }
      }

      function l(S, v) {
        var r = {},
          u = [S];

        function g(y) {
          Object.keys(y).forEach(function(C) {
            u.push(C), typeof y[C] == "string" || y[C] instanceof p.w ? r[u.join(".")] = y[C].toString() : E(y[C]) === "object" && y[C] !== null && g(y[C]), u.pop()
          })
        }
        return g(v), r
      }
    },
    "../../../common/intl/intl-react/src/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        oc: function() {
          return b
        },
        lm: function() {
          return Se
        },
        bd: function() {
          return N
        },
        RD: function() {
          return st
        },
        cC: function() {
          return De
        },
        QT: function() {
          return ze
        },
        lP: function() {
          return we
        }
      });
      var e = t("webpack/sharing/consume/default/react/react"),
        n = t.n(e),
        p = t("../../../common/intl/intl-core/src/Translator.ts"),
        E = e.createContext(new p.Z),
        b = E.Consumer,
        l = E.Provider;

      function S(G) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? S = function(J) {
          return typeof J
        } : S = function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, S(G)
      }

      function v() {
        return v = Object.assign || function(G) {
          for (var Q = 1; Q < arguments.length; Q++) {
            var J = arguments[Q];
            for (var te in J) Object.prototype.hasOwnProperty.call(J, te) && (G[te] = J[te])
          }
          return G
        }, v.apply(this, arguments)
      }

      function r(G, Q) {
        if (G == null) return {};
        var J = u(G, Q),
          te, Ae;
        if (Object.getOwnPropertySymbols) {
          var Ie = Object.getOwnPropertySymbols(G);
          for (Ae = 0; Ae < Ie.length; Ae++) te = Ie[Ae], !(Q.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, te) || (J[te] = G[te]))
        }
        return J
      }

      function u(G, Q) {
        if (G == null) return {};
        var J = {},
          te = Object.keys(G),
          Ae, Ie;
        for (Ie = 0; Ie < te.length; Ie++) Ae = te[Ie], !(Q.indexOf(Ae) >= 0) && (J[Ae] = G[Ae]);
        return J
      }

      function g(G, Q) {
        if (!(G instanceof Q)) throw new TypeError("Cannot call a class as a function")
      }

      function y(G, Q) {
        for (var J = 0; J < Q.length; J++) {
          var te = Q[J];
          te.enumerable = te.enumerable || !1, te.configurable = !0, "value" in te && (te.writable = !0), Object.defineProperty(G, te.key, te)
        }
      }

      function C(G, Q, J) {
        return Q && y(G.prototype, Q), J && y(G, J), G
      }

      function j(G, Q) {
        return Q && (S(Q) === "object" || typeof Q == "function") ? Q : T(G)
      }

      function T(G) {
        if (G === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return G
      }

      function _(G) {
        return _ = Object.setPrototypeOf ? Object.getPrototypeOf : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, _(G)
      }

      function A(G, Q) {
        if (typeof Q != "function" && Q !== null) throw new TypeError("Super expression must either be null or a function");
        G.prototype = Object.create(Q && Q.prototype, {
          constructor: {
            value: G,
            writable: !0,
            configurable: !0
          }
        }), Q && m(G, Q)
      }

      function m(G, Q) {
        return m = Object.setPrototypeOf || function(te, Ae) {
          return te.__proto__ = Ae, te
        }, m(G, Q)
      }
      var h = function(G) {
          A(Q, G);

          function Q(J) {
            var te;
            g(this, Q), te = j(this, _(Q).call(this, J));
            var Ae = J.locale,
              Ie = J.phrases,
              We = J.translator;
            return Ae && We.locale(Ae), Ie && We.extend(Ie), te
          }
          return C(Q, [{
            key: "componentDidUpdate",
            value: function(te) {
              te.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
            }
          }, {
            key: "render",
            value: function() {
              var te = this.props.children;
              return te
            }
          }]), Q
        }(e.Component),
        O = function(Q) {
          var J = Q.translator,
            te = r(Q, ["translator"]),
            Ae = function() {
              return e.createElement(b, null, function(We) {
                return e.createElement(h, v({
                  translator: We
                }, te))
              })
            };
          return J ? (J.locale(te.locale), e.createElement(l, {
            value: J
          }, Ae())) : Ae()
        },
        N = O;

      function K(G) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? K = function(J) {
          return typeof J
        } : K = function(J) {
          return J && typeof Symbol == "function" && J.constructor === Symbol && J !== Symbol.prototype ? "symbol" : typeof J
        }, K(G)
      }

      function B() {
        return B = Object.assign || function(G) {
          for (var Q = 1; Q < arguments.length; Q++) {
            var J = arguments[Q];
            for (var te in J) Object.prototype.hasOwnProperty.call(J, te) && (G[te] = J[te])
          }
          return G
        }, B.apply(this, arguments)
      }

      function _e(G, Q) {
        if (G == null) return {};
        var J = Ee(G, Q),
          te, Ae;
        if (Object.getOwnPropertySymbols) {
          var Ie = Object.getOwnPropertySymbols(G);
          for (Ae = 0; Ae < Ie.length; Ae++) te = Ie[Ae], !(Q.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, te) || (J[te] = G[te]))
        }
        return J
      }

      function Ee(G, Q) {
        if (G == null) return {};
        var J = {},
          te = Object.keys(G),
          Ae, Ie;
        for (Ie = 0; Ie < te.length; Ie++) Ae = te[Ie], !(Q.indexOf(Ae) >= 0) && (J[Ae] = G[Ae]);
        return J
      }

      function ce(G) {
        for (var Q = 1; Q < arguments.length; Q++) {
          var J = arguments[Q] != null ? Object(arguments[Q]) : {},
            te = Object.keys(J);
          typeof Object.getOwnPropertySymbols == "function" && (te = te.concat(Object.getOwnPropertySymbols(J).filter(function(Ae) {
            return Object.getOwnPropertyDescriptor(J, Ae).enumerable
          }))), te.forEach(function(Ae) {
            U(G, Ae, J[Ae])
          })
        }
        return G
      }

      function pe(G, Q, J, te, Ae, Ie, We) {
        try {
          var Ge = G[Ie](We),
            Ve = Ge.value
        } catch (it) {
          J(it);
          return
        }
        Ge.done ? Q(Ve) : Promise.resolve(Ve).then(te, Ae)
      }

      function L(G) {
        return function() {
          var Q = this,
            J = arguments;
          return new Promise(function(te, Ae) {
            var Ie = G.apply(Q, J);

            function We(Ve) {
              pe(Ie, te, Ae, We, Ge, "next", Ve)
            }

            function Ge(Ve) {
              pe(Ie, te, Ae, We, Ge, "throw", Ve)
            }
            We(void 0)
          })
        }
      }

      function R(G, Q) {
        if (!(G instanceof Q)) throw new TypeError("Cannot call a class as a function")
      }

      function D(G, Q) {
        for (var J = 0; J < Q.length; J++) {
          var te = Q[J];
          te.enumerable = te.enumerable || !1, te.configurable = !0, "value" in te && (te.writable = !0), Object.defineProperty(G, te.key, te)
        }
      }

      function $(G, Q, J) {
        return Q && D(G.prototype, Q), J && D(G, J), G
      }

      function ne(G, Q) {
        return Q && (K(Q) === "object" || typeof Q == "function") ? Q : I(G)
      }

      function Z(G) {
        return Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(J) {
          return J.__proto__ || Object.getPrototypeOf(J)
        }, Z(G)
      }

      function z(G, Q) {
        if (typeof Q != "function" && Q !== null) throw new TypeError("Super expression must either be null or a function");
        G.prototype = Object.create(Q && Q.prototype, {
          constructor: {
            value: G,
            writable: !0,
            configurable: !0
          }
        }), Q && W(G, Q)
      }

      function W(G, Q) {
        return W = Object.setPrototypeOf || function(te, Ae) {
          return te.__proto__ = Ae, te
        }, W(G, Q)
      }

      function I(G) {
        if (G === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return G
      }

      function U(G, Q, J) {
        return Q in G ? Object.defineProperty(G, Q, {
          value: J,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : G[Q] = J, G
      }
      var ie = function(G) {
        z(Q, G);

        function Q() {
          var J, te;
          R(this, Q);
          for (var Ae = arguments.length, Ie = new Array(Ae), We = 0; We < Ae; We++) Ie[We] = arguments[We];
          return te = ne(this, (J = Z(Q)).call.apply(J, [this].concat(Ie))), U(I(I(te)), "state", {
            phrasesByLocale: {}
          }), U(I(I(te)), "loadLocale", function() {
            var Ge = L(regeneratorRuntime.mark(function Ve(it) {
              var ge, q;
              return regeneratorRuntime.wrap(function(Te) {
                for (;;) switch (Te.prev = Te.next) {
                  case 0:
                    return ge = te.props.loadPhrases, Te.next = 3, ge(it);
                  case 3:
                    q = Te.sent, te.setState(function(Le) {
                      return {
                        phrasesByLocale: ce({}, Le.phrasesByLocale, U({}, it, q))
                      }
                    });
                  case 5:
                  case "end":
                    return Te.stop()
                }
              }, Ve, this)
            }));
            return function(Ve) {
              return Ge.apply(this, arguments)
            }
          }()), te
        }
        return $(Q, [{
          key: "componentDidMount",
          value: function() {
            this.loadLocale(this.props.locale)
          }
        }, {
          key: "componentDidUpdate",
          value: function(te) {
            var Ae = this.state.phrasesByLocale;
            this.props.locale !== te.locale && !Ae[this.props.locale] && this.loadLocale(this.props.locale)
          }
        }, {
          key: "render",
          value: function() {
            var te = this.props,
              Ae = te.children,
              Ie = te.locale,
              We = this.state.phrasesByLocale;
            return We[Ie] ? e.createElement(N, {
              locale: Ie,
              phrases: We[Ie]
            }, Ae) : null
          }
        }]), Q
      }(e.Component);
      U(ie, "defaultProps", {});
      var re = function(Q) {
          var J = Q.locale,
            te = _e(Q, ["locale"]);
          return e.createElement(b, null, function(Ae) {
            return e.createElement(ie, B({
              locale: J || Ae.locale()
            }, te))
          })
        },
        Se = re,
        ke = t("../../../../node_modules/lodash/escape.js"),
        je = t.n(ke),
        Y = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

      function ye(G) {
        for (var Q = 1; Q < arguments.length; Q++) {
          var J = arguments[Q] != null ? Object(arguments[Q]) : {},
            te = Object.keys(J);
          typeof Object.getOwnPropertySymbols == "function" && (te = te.concat(Object.getOwnPropertySymbols(J).filter(function(Ae) {
            return Object.getOwnPropertyDescriptor(J, Ae).enumerable
          }))), te.forEach(function(Ae) {
            xe(G, Ae, J[Ae])
          })
        }
        return G
      }

      function xe(G, Q, J) {
        return Q in G ? Object.defineProperty(G, Q, {
          value: J,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : G[Q] = J, G
      }

      function Fe() {
        return Fe = Object.assign || function(G) {
          for (var Q = 1; Q < arguments.length; Q++) {
            var J = arguments[Q];
            for (var te in J) Object.prototype.hasOwnProperty.call(J, te) && (G[te] = J[te])
          }
          return G
        }, Fe.apply(this, arguments)
      }

      function le(G, Q) {
        return ee(G) || fe(G, Q) || Pe(G, Q) || de()
      }

      function de() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
      }

      function Pe(G, Q) {
        if (!!G) {
          if (typeof G == "string") return X(G, Q);
          var J = Object.prototype.toString.call(G).slice(8, -1);
          if (J === "Object" && G.constructor && (J = G.constructor.name), J === "Map" || J === "Set") return Array.from(G);
          if (J === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(J)) return X(G, Q)
        }
      }

      function X(G, Q) {
        (Q == null || Q > G.length) && (Q = G.length);
        for (var J = 0, te = new Array(Q); J < Q; J++) te[J] = G[J];
        return te
      }

      function fe(G, Q) {
        var J = G && (typeof Symbol != "undefined" && G[Symbol.iterator] || G["@@iterator"]);
        if (J != null) {
          var te = [],
            Ae = !0,
            Ie = !1,
            We, Ge;
          try {
            for (J = J.call(G); !(Ae = (We = J.next()).done) && (te.push(We.value), !(Q && te.length === Q)); Ae = !0);
          } catch (Ve) {
            Ie = !0, Ge = Ve
          } finally {
            try {
              !Ae && J.return != null && J.return()
            } finally {
              if (Ie) throw Ge
            }
          }
          return te
        }
      }

      function ee(G) {
        if (Array.isArray(G)) return G
      }
      var Ue = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
        Ne = /(?:\r\n|\r|\n)/g;

      function Ye(G) {
        return Object.keys(G)
      }

      function Ke(G, Q) {
        return e.createElement("span", {
          key: G,
          dangerouslySetInnerHTML: {
            __html: Q
          }
        })
      }

      function $e(G) {
        var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          J = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
          te = 0,
          Ae = G.replace(Ne, "").split(Ue);
        if (Ae.length === 1) return [Ke(te, G)];
        var Ie = [],
          We = Ae.shift();
        if (We) {
          var Ge = Ke(te, We);
          Ie.push(Ge), typeof Ge != "string" && te++
        }
        var Ve = !0,
          it = !1,
          ge = void 0;
        try {
          for (var q = et(Ae)[Symbol.iterator](), F; !(Ve = (F = q.next()).done); Ve = !0) {
            var Te = le(F.value, 3),
              Le = Te[0],
              Qe = Te[1],
              w = Te[2];
            Q[Le] || window.console && console.warn("Missing Component for translation key: ".concat(G, ", index: ").concat(Le, ". Fragment will be used."));
            var Ce = Q[Le] || e.Fragment,
              ft = J[Le] || {},
              vt = Ke(0, Qe);
            if (Ie.push(e.createElement(Ce, Fe({
                key: te
              }, ft), vt)), te++, w) {
              var yt = Ke(te, w);
              Ie.push(yt), typeof yt != "string" && te++
            }
          }
        } catch (ht) {
          it = !0, ge = ht
        } finally {
          try {
            !Ve && q.return != null && q.return()
          } finally {
            if (it) throw ge
          }
        }
        return Ie
      }

      function et(G) {
        if (!G.length) return [];
        var Q = G.slice(0, 4),
          J = le(Q, 4),
          te = J[0],
          Ae = J[1],
          Ie = J[2],
          We = J[3],
          Ge = [
            [parseInt(te || Ie), Ae || "", We]
          ];
        return Ge.concat(et(G.slice(4, G.length)))
      }

      function rt(G) {
        var Q = G.id,
          J = Q === void 0 ? "" : Q,
          te = G.smartCount,
          Ae = G._,
          Ie = G.values,
          We = G.applyMarkdown,
          Ge = G.Components,
          Ve = G.componentProps;
        return e.createElement(b, null, function(it) {
          Ie && Ye(Ie).forEach(function(Te) {
            return Ie[Te] = je()(Ie[Te])
          }), Ve && Ve.forEach(function(Te) {
            Object.keys(Te).forEach(function(Le) {
              typeof Te[Le] == "string" && (Te[Le] = je()(Te[Le]))
            })
          });
          var ge = ye({
              smart_count: te,
              _: Ae
            }, Ie),
            q = We ? (0, Y.Z)(it.t(J.toString(), ge), {
              __dangerouslyDontSanitizeMarkdown: !0
            }) : it.t(J.toString(), ge),
            F = $e(q, Ge, Ve);
          return F.length > 1 ? e.createElement(e.Fragment, null, F) : F[0]
        })
      }
      var De = rt;

      function me() {
        return me = Object.assign || function(G) {
          for (var Q = 1; Q < arguments.length; Q++) {
            var J = arguments[Q];
            for (var te in J) Object.prototype.hasOwnProperty.call(J, te) && (G[te] = J[te])
          }
          return G
        }, me.apply(this, arguments)
      }

      function he(G) {
        var Q = function(te) {
          return n().createElement(b, null, function(Ae) {
            return n().createElement(G, me({}, te, {
              translator: Ae
            }))
          })
        };
        return Q
      }
      var we = he;

      function ze() {
        if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
        return (0, e.useContext)(E)
      }
      var He = t("../../../common/intl/intl-types/src/index.ts"),
        st = n().createContext(He.Q.en_US)
    },
    "../../../common/util/types/src/utils/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        Yd: function() {
          return e
        },
        vE: function() {
          return n
        }
      });

      function e(p) {
        return Object.keys(p)
      }
      var n = function(E, b) {
        if (b !== void 0) throw new Error("Unexpected object: " + E);
        return b
      }
    },
    "../../../dash/intl/intl-translations/src/index.ts": function(Oe, M, t) {
      "use strict";
      t.d(M, {
        CB: function() {
          return p.C
        },
        Fy: function() {
          return e.Z
        },
        if: function() {
          return p.Z
        },
        n4: function() {
          return n.n
        }
      });
      var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
        n = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
        p = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
    },
    "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(Oe, M, t) {
      var e = {
        "./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
        "./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
        "./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
        "./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
      };

      function n(E) {
        var b = p(E);
        return t(b)
      }

      function p(E) {
        if (!t.o(e, E)) {
          var b = new Error("Cannot find module '" + E + "'");
          throw b.code = "MODULE_NOT_FOUND", b
        }
        return e[E]
      }
      n.keys = function() {
        return Object.keys(e)
      }, n.resolve = p, Oe.exports = n, n.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
    },
    "../react/app/assets/favicon-cookie.ico": function(Oe, M, t) {
      "use strict";
      Oe.exports = t.p + "3f95af1452696b3d93d3.ico"
    },
    "../react/app/assets/favicon-dev.ico": function(Oe, M, t) {
      "use strict";
      Oe.exports = t.p + "1022a975e95038d58c62.ico"
    },
    "../react/app/assets/favicon-staging.ico": function(Oe, M, t) {
      "use strict";
      Oe.exports = t.p + "67b31fd5804672d4ab2d.ico"
    },
    "../react/app/assets/favicon-zeit.ico": function(Oe, M, t) {
      "use strict";
      Oe.exports = t.p + "d9aa8f47b1687e407e0f.ico"
    }
  }
]);