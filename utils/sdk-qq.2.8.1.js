! function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.BaaS = t() : e.BaaS = t()
}(window, function() {
  return function(e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      })
    }, n.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      })
    }, n.t = function(e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: e
        }), 2 & t && "string" != typeof e)
        for (var o in e) n.d(r, o, function(t) {
          return e[t]
        }.bind(null, o));
      return r
    }, n.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 217)
  }({
    0: function(e, t, n) {
      (function(t) {
        var r = t.BaaS || {};
        r._config = n(21), r._polyfill = n(22), r.use = function(e) {
          return e(r)
        }, e.exports = r
      }).call(this, n(11))
    },
    1: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o() {
        return (o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }
      var i = n(4),
        a = n(3),
        u = n(0),
        s = n(2),
        c = n(24),
        l = n(12);
      Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
          if (null == this) throw new TypeError('"this" is null or not defined');
          var n = Object(this),
            r = n.length >>> 0;
          if (0 === r) return !1;
          var o, i, a = 0 | t,
            u = Math.max(a >= 0 ? a : r - Math.abs(a), 0);
          for (; u < r;) {
            if ((o = n[u]) === (i = e) || "number" == typeof o && "number" == typeof i && isNaN(o) && isNaN(i)) return !0;
            u++
          }
          return !1
        }
      });
      var f = function(e, t) {
          for (var n in t = t || {}) {
            var r = new RegExp(":" + n, "g");
            e = e.replace(r, encodeURIComponent(t[n]))
          }
          return e.replace(/([^:])\/\//g, function(e, t) {
            return t + "/"
          })
        },
        p = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = u._config.REQUEST_PARAMS_MAP,
            n = o({}, e);
          return Object.keys(e).map(function(r) {
            Object.keys(t).map(function(o) {
              if (r.startsWith(o)) {
                var i = r.replace(o, t[o]);
                delete n[r], n[i] = e[r]
              }
            })
          }), n
        },
        y = function(e) {
          var t = "";
          return 404 === e.statusCode ? t = "not found" : e.data.error_msg ? t = e.data.error_msg : e.data.message && (t = e.data.message), t
        },
        h = function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        d = function e(t) {
          if (null == t) return Object.create(null);
          var n = h(t) ? [] : Object.create(Object.getPrototypeOf(t));
          for (var o in t) t.hasOwnProperty(o) && (t[o] && "object" === r(t[o]) ? (n[o] = h(t[o]) ? [] : {}, n[o] = e(t[o])) : n[o] = t[o]);
          return n
        };
      var _ = function(e, t) {
        return e.replace(/:(\w*)/g, function(e, n) {
          void 0 !== t[n] && delete t[n]
        }), t
      };
      e.exports = {
        mergeRequestHeader: function(e) {
          var t = {
              "X-Hydrogen-Client-ID": u._config.CLIENT_ID,
              "X-Hydrogen-Client-Version": u._config.VERSION,
              "X-Hydrogen-Client-Platform": u._polyfill.CLIENT_PLATFORM,
              "X-Hydrogen-Client-SDK-Type": u._polyfill.SDK_TYPE
            },
            n = u.getAuthToken();
          return n && (t.Authorization = u._config.AUTH_PREFIX + " " + n), o({}, e || {}, t)
        },
        log: l.log,
        setLogLevel: l.setLogLevel,
        format: f,
        getSysPlatform: function() {
          var e = "UNKNOWN";
          try {
            e = u._polyfill.getSystemInfoSync().platform
          } catch (e) {}
          return e
        },
        getFileNameFromPath: function(e) {
          var t = e.lastIndexOf("/");
          return e.slice(t + 1)
        },
        parseRegExp: function(e) {
          var t = [],
            n = e.toString(),
            r = n.lastIndexOf("/");
          return t.push(n.substring(1, r)), r !== n.length - 1 && t.push(n.substring(r + 1)), t
        },
        replaceQueryParams: p,
        extractErrorMsg: y,
        isArray: h,
        isString: function(e) {
          return "[object String]" === Object.prototype.toString.call(e)
        },
        isObject: function(e) {
          var t = r(e);
          return null != e && "object" == t
        },
        isFunction: function(e) {
          var t = r(e);
          return null != e && "function" == t
        },
        cloneDeep: d,
        isSessionExpired: function() {
          return Date.now() / 1e3 >= (i.get(a.STORAGE_KEY.EXPIRES_AT) || 0)
        },
        excludeParams: _,
        doCreateRequestMethod: function(e) {
          for (var t in e) e.hasOwnProperty(t) && (u[t] = function(t) {
            var n = e[t];
            return function(e) {
              var t = d(e),
                r = n.method || "GET";
              n.defaultParams && (t = o(d(n.defaultParams), t));
              var i = f(n.url, t),
                a = {};
              return t.data ? a = t.data : (a = _(n.url, t), a = p(a)), u._baasRequest({
                url: i,
                method: r,
                data: a
              })
            }
          }(t))
        },
        validateStatusCode: function(e) {
          var t = parseInt(e.status || e.statusCode);
          if (t >= 200 && t < 300) return e;
          throw new s(t, y(e))
        },
        rateLimit: function(e) {
          var t = null;
          return function() {
            return t || (t = e.apply(this, arguments).then(function(e) {
              return t = null, e
            }, function(e) {
              throw t = null, e
            })), t
          }
        },
        fnUnsupportedHandler: function() {
          throw new s(611)
        },
        compareVersion: function(e, t) {
          try {
            if ("string" != typeof e || "string" != typeof t) return 0;
            e = e.replace(/^[^0-9]/, ""), t = t.replace(/^[^0-9]/, "");
            for (var n = e.split("."), r = t.split("."), o = Math.max(n.length, r.length), i = 0; i < o; i++) {
              var a = n[i] ? parseInt(n[i]) : 0,
                u = r[i] ? parseInt(r[i]) : 0;
              if (a > u) return 1;
              if (a < u) return -1
            }
            return 0
          } catch (e) {
            return 0
          }
        },
        makeReportTicketParam: function(e) {
          if (!e) throw new s(605);
          var t = {
            submission_type: "form_id"
          };
          return t.submission_value = e, t
        },
        extend: function() {
          return o.apply(void 0, arguments)
        },
        getUpdateUserProfileParam: function(e) {
          var t;
          return Object.keys(a.UPDATE_USERPROFILE_VALUE).forEach(function(n) {
            e === a.UPDATE_USERPROFILE_VALUE[n] && (t = e)
          }), t || (t = a.UPDATE_USERPROFILE_VALUE.SETNX), t
        },
        ticketReportThrottle: c
      }
    },
    11: function(e, t) {
      var n;
      n = function() {
        return this
      }();
      try {
        n = n || new Function("return this")()
      } catch (e) {
        "object" == typeof window && (n = window)
      }
      e.exports = n
    },
    12: function(e, t, n) {
      var r = n(3),
        o = n(25),
        i = function(e) {
          return o({
            level: e
          })
        },
        a = i(r.LOG_LEVEL.ERROR);
      e.exports = {
        log: function(e, t) {
          a[e] && a[e](t)
        },
        setLogLevel: function(e) {
          Object.keys(r.LOG_LEVEL).forEach(function(t) {
            r.LOG_LEVEL[t] === e && (a = i(e))
          })
        }
      }
    },
    13: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o() {
        return (o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function a(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var c = n(0),
        l = n(7),
        f = n(1),
        p = n(3).USER_PROFILE_BUILD_IN_FIELDS,
        y = n(2),
        h = c._config.API,
        d = function(e) {
          function t(e) {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), a(this, u(t).call(this, e))
          }
          var n, r, p;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && s(e, t)
          }(t, l), n = t, (r = [{
            key: "update",
            value: function() {
              var e = f.cloneDeep(this._record);
              return this._recordValueInit(), c.updateUser({
                data: e.$set
              })
            }
          }, {
            key: "linkWechat",
            value: function() {
              return this._anonymous ? Promise.reject(new y(612)) : c._polyfill.linkWechat ? c._polyfill.linkWechat.apply(null, arguments) : Promise.reject(new y(605, "linkWechat 方法未定义"))
            }
          }, {
            key: "linkAlipay",
            value: function() {
              return this._anonymous ? Promise.reject(new y(612)) : c._polyfill.linkAlipay ? c._polyfill.linkAlipay.apply(null, arguments) : Promise.reject(new y(605, "linkAlipay 方法未定义"))
            }
          }, {
            key: "linkQQ",
            value: function() {
              return this._anonymous ? Promise.reject(new y(612)) : c._polyfill.linkQQ ? c._polyfill.linkQQ.apply(null, arguments) : Promise.reject(new y(605, "linkQQ 方法未定义"))
            }
          }, {
            key: "linkBaidu",
            value: function() {
              return this._anonymous ? Promise.reject(new y(612)) : c._polyfill.linkBaidu ? c._polyfill.linkBaidu.apply(null, arguments) : Promise.reject(new y(605, "linkBaidu 方法未定义"))
            }
          }, {
            key: "linkThirdParty",
            value: function() {
              return this._anonymous ? Promise.reject(new y(612)) : c._polyfill.linkThirdParty ? c._polyfill.linkThirdParty.apply(null, arguments) : Promise.reject(new y(605, "linkThirdParty 方法未定义"))
            }
          }, {
            key: "updatePassword",
            value: function(e) {
              var t = this,
                n = e.password,
                r = e.newPassword;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.ACCOUNT_INFO,
                method: "PUT",
                data: {
                  password: n,
                  new_password: r
                }
              }).then(function() {
                return t
              })
            }
          }, {
            key: "setEmail",
            value: function(e) {
              var t = this,
                n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).sendVerificationEmail,
                r = void 0 !== n && n;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.ACCOUNT_INFO,
                method: "PUT",
                data: {
                  email: e
                }
              }).then(function(n) {
                return r && t.requestEmailVerification(e), o(t._attribute, n.data), t
              })
            }
          }, {
            key: "setUsername",
            value: function(e) {
              var t = this;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.ACCOUNT_INFO,
                method: "PUT",
                data: {
                  username: e
                }
              }).then(function(e) {
                return o(t._attribute, e.data), t
              })
            }
          }, {
            key: "requestEmailVerification",
            value: function() {
              var e = this;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.EMAIL_VERIFY,
                method: "POST"
              }).then(function() {
                return e
              })
            }
          }, {
            key: "setAccount",
            value: function() {
              var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              return this._anonymous ? Promise.reject(new y(612)) : (t.password && (t.new_password = t.password, delete t.password), c._baasRequest({
                url: h.ACCOUNT_INFO,
                method: "PUT",
                data: t
              }).then(function(t) {
                return o(e._attribute, t.data), e
              }))
            }
          }, {
            key: "setMobilePhone",
            value: function(e) {
              var t = this;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.ACCOUNT_INFO,
                method: "PUT",
                data: {
                  phone: e
                }
              }).then(function(e) {
                return o(t._attribute, e.data), t
              })
            }
          }, {
            key: "verifyMobilePhone",
            value: function(e) {
              var t = this;
              return this._anonymous ? Promise.reject(new y(612)) : c._baasRequest({
                url: h.VERIFY_MOBILE,
                method: "POST",
                data: {
                  code: e
                }
              }).then(function() {
                return t
              })
            }
          }]) && i(n.prototype, r), p && i(n, p), t
        }();
      d.initCurrentUser = function(e) {
        if (!f.isObject(e)) return new y(605);
        var t = new d;
        return t._attribute = o({}, e), t.toJSON = function() {
          return this._attribute
        }, t.get = function(e) {
          return this._attribute[e]
        }, Object.keys(e).forEach(function(n) {
          ("_" === n[0] || p.includes(n)) && (t[n] = e[n])
        }), t
      }, e.exports = d
    },
    14: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var s = n(0),
        c = n(5),
        l = n(13),
        f = n(1),
        p = n(2),
        y = function(e) {
          function t() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), i(this, a(t).call(this))
          }
          var n, r, y;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && u(e, t)
          }(t, c), n = t, (r = [{
            key: "get",
            value: function(e) {
              var t = {
                userID: e
              };
              return this._expand && (t.expand = this._expand), this._keys && (t.keys = this._keys), this._initQueryParams(), s.getUserDetail(t)
            }
          }, {
            key: "getWithoutData",
            value: function(e) {
              if (f.isString(e) || Number.isInteger(e)) return new l(e);
              throw new p(605)
            }
          }, {
            key: "getCurrentUserWithoutData",
            value: function() {
              return new l
            }
          }, {
            key: "find",
            value: function() {
              var e = this._handleAllQueryConditions();
              return this._initQueryParams(), s.getUserList(e)
            }
          }]) && o(n.prototype, r), y && o(n, y), t
        }();
      e.exports = y
    },
    15: function(e, t, n) {
      var r = n(0),
        o = n(2),
        i = r._config.API;
      e.exports = function(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!e) throw new o(605);
        var a = {
          function_name: e,
          sync: n
        };
        return void 0 !== t && (a.data = t), r._baasRequest({
          url: i.CLOUD_FUNCTION,
          method: "POST",
          data: a
        }).then(function(e) {
          return e.data
        })
      }
    },
    17: function(e, t, n) {
      var r = n(0),
        o = n(3),
        i = n(2),
        a = n(4),
        u = n(1),
        s = n(13),
        c = n(14),
        l = r._config.API;

      function f(e, t) {
        return e.phone ? t ? l.LOGIN_PHONE : l.REGISTER_PHONE : e.email ? t ? l.LOGIN_EMAIL : l.REGISTER_EMAIL : t ? l.LOGIN_USERNAME : l.REGISTER_USERNAME
      }

      function p(e) {
        return e.phone ? {
          phone: e.phone,
          password: e.password
        } : e.email ? {
          email: e.email,
          password: e.password
        } : {
          username: e.username || "",
          password: e.password
        }
      }
      var y = function() {
        var e = a.get(o.STORAGE_KEY.UID),
          t = a.get(o.STORAGE_KEY.EXPIRES_AT);
        return e && t && !u.isSessionExpired() ? (new c).get(e).then(function(e) {
          var n = s.initCurrentUser(e.data);
          return n.user_id = e.data.id, n.session_expires_at = t, n
        }) : Promise.reject(new i(604))
      };
      e.exports = {
        login: u.rateLimit(function(e) {
          var t = f(e, !0),
            n = p(e);
          return r.request({
            url: t,
            method: "POST",
            data: n
          }).then(u.validateStatusCode).then(function(e) {
            return r._polyfill.handleLoginSuccess(e), y()
          })
        }),
        logout: function() {
          return r.request({
            url: l.LOGOUT,
            method: "POST"
          }).then(u.validateStatusCode).then(function(e) {
            return r.clearSession(), e
          })
        },
        silentLogin: function() {
          return Promise.reject(new i(605, "silentLogin 方法未定义"))
        },
        loginWithSmsVerificationCode: u.rateLimit(function(e, t) {
          var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).createUser,
            o = void 0 === n || n;
          return r.request({
            url: l.LOGIN_SMS,
            data: {
              phone: e,
              code: t,
              create_user: o
            },
            method: "POST"
          }).then(u.validateStatusCode).then(function(e) {
            return r._polyfill.handleLoginSuccess(e, !1), y()
          })
        }),
        anonymousLogin: u.rateLimit(function() {
          return r.request({
            url: l.ANONYMOUS_LOGIN,
            method: "POST"
          }).then(u.validateStatusCode).then(function(e) {
            return r._polyfill.handleLoginSuccess(e, !0), y()
          })
        }),
        requestPasswordReset: function() {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).email;
          return r.request({
            url: l.PASSWORD_RESET,
            method: "POST",
            data: {
              email: e
            }
          }).then(u.validateStatusCode)
        },
        register: u.rateLimit(function(e) {
          var t = f(e),
            n = p(e);
          return r.request({
            url: t,
            method: "POST",
            data: n
          }).then(u.validateStatusCode).then(function(e) {
            return r._polyfill.handleLoginSuccess(e), y()
          })
        }),
        getCurrentUser: u.rateLimit(y)
      }
    },
    18: function(e, t) {
      var n, r, o = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
          return n(e, 0)
        } catch (t) {
          try {
            return n.call(null, e, 0)
          } catch (t) {
            return n.call(this, e, 0)
          }
        }
      }! function() {
        try {
          n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          n = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          r = a
        }
      }();
      var s, c = [],
        l = !1,
        f = -1;

      function p() {
        l && s && (l = !1, s.length ? c = s.concat(c) : f = -1, c.length && y())
      }

      function y() {
        if (!l) {
          var e = u(p);
          l = !0;
          for (var t = c.length; t;) {
            for (s = c, c = []; ++f < t;) s && s[f].run();
            f = -1, t = c.length
          }
          s = null, l = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function d() {}
      o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || l || u(y)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(e) {
        return []
      }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    },
    2: function(e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var r = function() {
        function e(t, n) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var r = new Error;
          return r.code = t, r.message = n ? "".concat(t, ": ").concat(n) : "".concat(t, ": ").concat(this.mapErrorMessage(t)), r
        }
        var t, r, o;
        return t = e, (r = [{
          key: "mapErrorMessage",
          value: function(e) {
            switch (e) {
              case 600:
                return "network disconnected";
              case 601:
                return "request timeout";
              case 602:
                return "uninitialized";
              case 603:
                return "unauthorized";
              case 604:
                return "session missing";
              case 605:
                return "incorrect parameter type";
              case 607:
                return "payment cancelled";
              case 608:
                return "payment failed";
              case 609:
                return "wxExtend function should be executed to allow plugin use wx.login, wx.getUserInfo, wx.requestPayment";
              case 610:
                return "errorTracker uninitialized";
              case 611:
                return "unsupported function";
              case 612:
                return "anonymous user is not allowed";
              case 613:
                return "third party auth denied";
              case 614:
                return "third party auth failed";
              case 615:
                return 'gateway type "weixin_tenpay_js" works in WeChat builtin browser only';
              default:
                return "unknown error"
            }
          }
        }]) && n(t.prototype, r), o && n(t, o), e
      }();
      e.exports = r
    },
    21: function(e, t) {
      var n = {
          REGISTER_USERNAME: "/hserve/v2.1/register/username/",
          REGISTER_EMAIL: "/hserve/v2.1/register/email/",
          REGISTER_PHONE: "/hserve/v2.1/register/phone/",
          LOGIN_USERNAME: "/hserve/v2.1/login/username/",
          LOGIN_EMAIL: "/hserve/v2.1/login/email/",
          LOGIN_PHONE: "/hserve/v2.1/login/phone/",
          LOGIN_SMS: "/hserve/v2.1/login/sms/",
          EMAIL_VERIFY: "/hserve/v2.0/user/email-verify/",
          VERIFY_MOBILE: "/hserve/v2.1/sms-phone-verification/",
          ACCOUNT_INFO: "/hserve/v2.1/user/account/",
          PASSWORD_RESET: "/hserve/v2.0/user/password/reset/",
          ANONYMOUS_LOGIN: "/hserve/v2.0/login/anonymous/",
          LOGOUT: "/hserve/v2.0/session/destroy/",
          UPLOAD: "/hserve/v2.1/upload/",
          CLOUD_FUNCTION: "/hserve/v1/cloud-function/job/",
          USER_DETAIL: "/hserve/v2.0/user/info/:userID/",
          USER_LIST: "/hserve/v2.0/user/info/",
          UPDATE_USER: "/hserve/v2.0/user/info/",
          TABLE_LIST: "/hserve/v2.0/table/",
          TABLE_DETAIL: "/hserve/v2.0/table/:tableID/",
          RECORD_LIST: "/hserve/v2.0/table/:tableID/record/",
          QUERY_RECORD_LIST: "/hserve/v2.0/table/:tableID/record/",
          CREATE_RECORD_LIST: "/hserve/v2.0/table/:tableID/record/?enable_trigger=:enable_trigger",
          RECORD_DETAIL: "/hserve/v2.0/table/:tableID/record/:recordID/",
          CREATE_RECORD: "/hserve/v2.0/table/:tableID/record/",
          UPDATE_RECORD: "/hserve/v2.0/table/:tableID/record/:recordID/",
          UPDATE_RECORD_LIST: "/hserve/v2.0/table/:tableID/record/?limit=:limit&offset=:offset&where=:where&enable_trigger=:enable_trigger",
          DELETE_RECORD: "/hserve/v2.0/table/:tableID/record/:recordID/",
          DELETE_RECORD_LIST: "/hserve/v2.0/table/:tableID/record/?limit=:limit&offset=:offset&where=:where&enable_trigger=:enable_trigger",
          LAGECY_CONTENT_LIST: "/hserve/v1/content/detail/",
          CONTENT_LIST: "/hserve/v2.0/content/detail/",
          CONTENT_GROUP_LIST: "/hserve/v2.0/content/group/",
          CONTENT_DETAIL: "/hserve/v2.0/content/detail/:richTextID/",
          CONTENT_GROUP_DETAIL: "/hserve/v2.0/content/group/",
          CONTENT_CATEGORY_LIST: "/hserve/v2.0/content/category/",
          CONTENT_CATEGORY_DETAIL: "/hserve/v2.0/content/category/:categoryID/",
          FILE_DETAIL: "/hserve/v2.1/uploaded-file/:fileID/",
          FILE_LIST: "/hserve/v2.1/uploaded-file/",
          DELETE_FILE: "/hserve/v2.1/uploaded-file/:fileID/",
          DELETE_FILES: "/hserve/v2.1/uploaded-file/",
          FILE_CATEGORY_DETAIL: "/hserve/v1.3/file-category/:categoryID/",
          FILE_CATEGORY_LIST: "/hserve/v1.3/file-category/",
          CENSOR_IMAGE: "/hserve/v1.7/censor-image/",
          CENSOR_MSG: "/hserve/v1.7/censor-msg/",
          SEND_SMS_CODE: "/hserve/v2.2/sms-verification-code/",
          VERIFY_SMS_CODE: "/hserve/v1.8/sms-verification-code/verify/",
          PAY: "/hserve/v2.2/idp/pay/order/",
          ORDER: "/hserve/v2.0/idp/pay/order/:transactionID/",
          TEMPLATE_MESSAGE_EVENT_REPORT: "/hserve/v2.0/template-message/event-report/",
          WEB: {
            THIRD_PARTY_AUTH: "/hserve/v2.0/idp/:provider/redirect/",
            THIRD_PARTY_LOGIN: "/hserve/v2.0/idp/:provider/authenticate/",
            THIRD_PARTY_ASSOCIATE: "/hserve/v2.0/idp/:provider/user-association/"
          },
          WECHAT: {
            SILENT_LOGIN: "/hserve/v2.1/idp/wechat/silent-login/",
            AUTHENTICATE: "/hserve/v2.1/idp/wechat/authenticate/",
            USER_ASSOCIATE: "/hserve/v2.0/idp/wechat/user-associate/",
            TEMPLATE_MESSAGE: "/hserve/v2.0/template-message-ticket/",
            DECRYPT: "/hserve/v1/wechat/decrypt/",
            WXACODE: "/hserve/v1.4/miniappcode/",
            CENSOR_IMAGE: "/hserve/v1.7/censor-image/",
            CENSOR_MSG: "/hserve/v1.7/censor-msg/",
            CENSOR_ASYNC: "/hserve/v2.2/async-censor/"
          },
          QQ: {
            SILENT_LOGIN: "/hserve/v2.0/idp/qq/silent-login/",
            AUTHENTICATE: "/hserve/v2.0/idp/qq/authenticate/",
            USER_ASSOCIATE: "/hserve/v2.0/idp/qq/user-association/",
            TEMPLATE_MESSAGE: "/hserve/v2.0/template-message-ticket/",
            DECRYPT: "/hserve/v2.0/qq/decrypt/"
          },
          BAIDU: {
            SILENT_LOGIN: "/hserve/v2.1/idp/baidu/silent-login/",
            AUTHENTICATE: "/hserve/v2.1/idp/baidu/authenticate/",
            USER_ASSOCIATE: "/hserve/v2.1/idp/baidu/user-association/"
          },
          ALIPAY: {
            SILENT_LOGIN: "/hserve/v2.1/idp/alipay/silent-login/",
            AUTHENTICATE: "/hserve/v2.1/idp/alipay/authenticate/",
            USER_ASSOCIATE: "/hserve/v2.0/idp/alipay/user-associate/",
            TEMPLATE_MESSAGE: "/hserve/v2.0/template-message-ticket/",
            MINIAPP_QR_CODE: "/hserve/v2.0/idp/alipay/miniapp-qr-code/"
          },
          VIDEO_SNAPSHOT: "/hserve/v1/media/video-snapshot/",
          M3U8_CONCAT: "/hserve/v1/media/m3u8-concat/",
          M3U8_CLIP: "/hserve/v1/media/m3u8-clip/",
          M3U8_META: "/hserve/v1/media/m3u8-meta/",
          VIDEO_AUDIO_META: "/hserve/v1/media/audio-video-meta/",
          LATEST_VERSION: "/hserve/v1/latest-sdk-version/"
        },
        r = [{
          getUserInfo: {
            url: n.USER_DETAIL,
            defaultParams: {
              userID: ""
            }
          },
          getUserDetail: {
            url: n.USER_DETAIL
          },
          getUserList: {
            url: n.USER_LIST
          },
          updateUser: {
            url: n.UPDATE_USER,
            method: "PUT"
          }
        }, {
          getTableList: {
            url: n.TABLE_LIST
          },
          getTable: {
            url: n.TABLE_DETAIL
          },
          getRecordList: {
            url: n.RECORD_LIST
          },
          queryRecordList: {
            url: n.QUERY_RECORD_LIST
          },
          getRecord: {
            url: n.RECORD_DETAIL
          },
          createRecord: {
            url: n.CREATE_RECORD,
            method: "POST"
          },
          createRecordList: {
            url: n.CREATE_RECORD_LIST,
            method: "POST"
          },
          updateRecord: {
            url: n.UPDATE_RECORD,
            method: "PUT"
          },
          updateRecordList: {
            url: n.UPDATE_RECORD_LIST,
            method: "PUT"
          },
          deleteRecord: {
            url: n.DELETE_RECORD,
            method: "DELETE"
          },
          deleteRecordList: {
            url: n.DELETE_RECORD_LIST,
            method: "DELETE"
          }
        }, {
          getContentList: {
            url: n.LAGECY_CONTENT_LIST
          },
          getContentList2: {
            url: n.CONTENT_LIST
          },
          getContent: {
            url: n.CONTENT_DETAIL
          },
          getContentGroupList: {
            url: n.CONTENT_GROUP_LIST
          },
          getContentGroup: {
            url: n.CONTENT_GROUP_DETAIL
          },
          getContentCategoryList: {
            url: n.CONTENT_CATEGORY_LIST
          },
          getContentCategory: {
            url: n.CONTENT_CATEGORY_DETAIL
          }
        }, {
          getFileDetail: {
            url: n.FILE_DETAIL
          },
          getFileList: {
            url: n.FILE_LIST
          },
          deleteFile: {
            url: n.DELETE_FILE,
            method: "DELETE"
          },
          deleteFiles: {
            url: n.DELETE_FILES,
            method: "DELETE"
          },
          getFileCategoryDetail: {
            url: n.FILE_CATEGORY_DETAIL
          },
          getFileCategoryList: {
            url: n.FILE_CATEGORY_LIST
          },
          sendSmsCode: {
            url: n.SEND_SMS_CODE,
            method: "POST"
          },
          verifySmsCode: {
            url: n.VERIFY_SMS_CODE,
            method: "POST"
          }
        }, {
          getOrderList: {
            url: n.PAY
          }
        }];
      e.exports = {
        API_HOST: "https://api.myminapp.com",
        API: n,
        AUTH_PREFIX: "Hydrogen-r1",
        METHOD_MAP_LIST: r,
        DEBUG: !1,
        RANDOM_OPTION: {
          max: 100
        },
        REQUEST_PARAMS_MAP: {
          contentGroupID: "content_group_id",
          categoryID: "category_id",
          recordID: "id",
          submissionType: "submission_type",
          submissionValue: "submission_value",
          categoryName: "category_name",
          signatureID: "signature_id"
        },
        SDK_DOWNLOAD_PAGE: "https://doc.minapp.com/js-sdk/download-sdk.html",
        VERSION: "v2.0.1-a"
      }
    },
    217: function(e, t, n) {
      var r = n(0),
        o = n(23),
        i = n(218),
        a = n(219),
        u = n(220),
        s = n(221),
        c = n(222),
        l = n(223);
      r._config.VERSION = "v2.8.1", r.use(o), r.use(i), r.use(a), r.use(u), r.use(s), r.use(c), r.use(l), r.request = n(224), r._baasRequest = n(225), r.uploadFile = n(226), r._createRequestMethod(), "undefined" != typeof qq && (qq.BaaS = r), e.exports = r
    },
    218: function(e, t, n) {
      function r() {
        return (r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }
      n(35);
      var o = n(3);
      e.exports = function(e) {
        r(e._polyfill, {
          CLIENT_PLATFORM: "QQ",
          setStorageSync: function(e, t) {
            return qq.setStorageSync(e, t)
          },
          getStorageSync: function(e) {
            return qq.getStorageSync(e)
          },
          getSystemInfoSync: function() {
            return qq.getSystemInfoSync()
          },
          checkLatestVersion: function() {
            "devtools" === qq.getSystemInfoSync().platform && e.checkVersion({
              platform: "qq_miniapp"
            })
          },
          linkQQ: function() {
            var t;
            return (t = e.auth).linkQQ.apply(t, arguments)
          },
          handleLoginSuccess: function(t, n) {
            e.storage.set(o.STORAGE_KEY.UID, t.data.user_id), e.storage.set(o.STORAGE_KEY.OPENID, t.data.openid || ""), e.storage.set(o.STORAGE_KEY.UNIONID, t.data.unionid || ""), e.storage.set(o.STORAGE_KEY.AUTH_TOKEN, t.data.token), t.data.openid && e.storage.set(o.STORAGE_KEY.USERINFO, {
              id: t.data.user_id,
              openid: t.data.openid
            }), e.storage.set(o.STORAGE_KEY.EXPIRES_AT, Math.floor(Date.now() / 1e3) + t.data.expires_in - 30), n ? e.storage.set(o.STORAGE_KEY.IS_ANONYMOUS_USER, 1) : e.storage.set(o.STORAGE_KEY.IS_ANONYMOUS_USER, 0)
          }
        })
      }
    },
    219: function(e, t, n) {
      function r() {
        return (r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }
      var o = n(3),
        i = n(2),
        a = n(4),
        u = n(1),
        s = n(17);
      e.exports = function(e) {
        e._polyfill;
        var t = e._config.API,
          n = function() {
            return new Promise(function(t, n) {
              qq.login({
                success: function(e) {
                  t(e.code)
                },
                fail: function() {
                  e.request.qqRequestFail(n)
                }
              })
            })
          },
          c = function(n, r, o) {
            var i = n.code,
              a = n.createUser;
            return e.request({
              url: t.QQ.SILENT_LOGIN,
              method: "POST",
              data: {
                create_user: a,
                code: i
              }
            }).then(u.validateStatusCode).then(function(t) {
              e._polyfill.handleLoginSuccess(t), r(t)
            }, o)
          },
          l = u.rateLimit(function() {
            return a.get(o.STORAGE_KEY.AUTH_TOKEN) && !u.isSessionExpired() ? Promise.resolve() : function() {
              var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).createUser,
                t = void 0 === e || e;
              return new Promise(function(e, r) {
                n().then(function(n) {
                  c({
                    code: n,
                    createUser: t
                  }, e, r)
                }, r)
              })
            }.apply(void 0, arguments)
          }),
          f = function() {
            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).lang;
            return new Promise(function(t, n) {
              qq.getUserInfo({
                lang: e,
                success: t,
                fail: n
              })
            })
          },
          p = function(s) {
            if (!s || !s.detail) throw new i(603);
            var c = s.detail,
              l = !!s.createUser,
              p = s.syncUserProfile;
            return c.userInfo ? n().then(function(n) {
              return f({
                lang: c.userInfo.language
              }).then(function(r) {
                var o, i = {
                  code: n,
                  create_user: l,
                  rawData: r.rawData,
                  signature: r.signature,
                  encryptedData: r.encryptedData,
                  iv: r.iv,
                  update_userprofile: u.getUpdateUserProfileParam(p)
                };
                return o = i, e.request({
                  url: t.QQ.AUTHENTICATE,
                  method: "POST",
                  data: o
                }).then(u.validateStatusCode)
              })
            }).then(function(t) {
              e._polyfill.handleLoginSuccess(t)
            }) : Promise.reject(r(new i(603), {
              id: a.get(o.STORAGE_KEY.UID),
              openid: a.get(o.STORAGE_KEY.OPENID)
            }))
          };
        r(e.auth, {
          silentLogin: l,
          loginWithQQ: u.rateLimit(function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.createUser,
              i = void 0 === n || n,
              a = t.syncUserProfile,
              u = void 0 === a ? o.UPDATE_USERPROFILE_VALUE.SETNX : a;
            return (e && e.detail ? p(r(e, {
              createUser: i,
              syncUserProfile: u
            })) : l({
              createUser: i
            })).then(function() {
              return s.getCurrentUser()
            })
          }),
          linkQQ: u.rateLimit(function(r) {
            var i = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).syncUserProfile,
              a = void 0 === i ? o.UPDATE_USERPROFILE_VALUE.SETNX : i,
              s = !1;
            return r && r.detail && r.detail.userInfo && (s = !0), n().then(function(n) {
              return (s ? f({
                lang: r.detail.userInfo.language
              }) : Promise.resolve(null)).then(function(r) {
                var o = r ? {
                  rawData: r.rawData,
                  signature: r.signature,
                  encryptedData: r.encryptedData,
                  iv: r.iv,
                  update_userprofile: u.getUpdateUserProfileParam(a),
                  code: n
                } : {
                  code: n
                };
                return e._baasRequest({
                  method: "POST",
                  url: t.QQ.USER_ASSOCIATE,
                  data: o
                })
              })
            })
          })
        })
      }
    },
    22: function(e, t, n) {
      e.exports = {
        getAPIHost: function() {
          return "https://".concat(n(0)._config.CLIENT_ID, ".myminapp.com")
        },
        SDK_TYPE: "file",
        CLIENT_PLATFORM: "UNKNOWN",
        checkLatestVersion: function() {
          return null
        }
      }
    },
    220: function(e, t, n) {
      var r = n(1);
      e.exports = function(e) {
        e.reportTicket = r.ticketReportThrottle(function(e) {
          return function(t) {
            var n = e._config.API,
              o = r.makeReportTicketParam(t);
            return o.platform = "qq_miniapp", e._baasRequest({
              url: n.QQ.TEMPLATE_MESSAGE,
              method: "POST",
              data: o
            })
          }
        }(e))
      }
    },
    221: function(e, t, n) {
      function r() {
        return (r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }
      var o = n(35);
      e.exports = function(e) {
        r(e, {
          reportTemplateMsgAnalytics: function(e) {
            1014 == e.scene && e.query && e.query._H_utm_campaign && o.pushStats(e.query._H_utm_campaign), o.reportStats()
          }
        })
      }
    },
    222: function(e, t, n) {
      var r = n(0),
        o = n(2),
        i = (r._config.API, {
          merchandiseSchemaID: "merchandise_schema_id",
          merchandiseRecordID: "merchandise_record_id",
          merchandiseSnapshot: "merchandise_snapshot",
          merchandiseDescription: "merchandise_description",
          totalCost: "total_cost"
        });
      e.exports = function(e) {
        e.pay = function(e) {
          return function(t) {
            var n = e._config.API,
              r = {};
            for (var a in t) r[i[a]] = t[a];
            return r.gateway_type = "qpay", e._baasRequest({
              url: n.PAY,
              method: "POST",
              data: r
            }).then(function(e) {
              var t = e.data || {};
              return new Promise(function(e, n) {
                qq.requestPayment({
                  package: t.package,
                  success: function(n) {
                    return n.transaction_no = t.transaction_no, n.trade_no = t.trade_no, e(n)
                  },
                  fail: function(e) {
                    "requestPayment:fail 用户取消" == e.errMsg ? n(new o(607)) : n(new o(608, e.errMsg))
                  }
                })
              })
            })
          }
        }(e)
      }
    },
    223: function(e, t, n) {
      var r = n(2),
        o = function(e) {
          if (!(e instanceof Array) || e.length < 3) return !1;
          return -1 !== ["open-gid"].indexOf(e[2])
        };
      e.exports = function(e) {
        e.decryptData = function(e) {
          return function() {
            for (var t = e._config.API, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
            if (!o(i)) throw new r(605);
            var u = {
              encryptedData: i[0],
              iv: i[1]
            };
            return e._baasRequest({
              url: t.QQ.DECRYPT + i[2] + "/",
              method: "POST",
              data: u
            }).then(function(e) {
              return e.data
            }, function(e) {
              if (403 === e.code) throw new r(403, "QQ 解密插件未开启");
              throw e
            })
          }
        }(e)
      }
    },
    224: function(e, t, n) {
      var r = n(0),
        o = n(2),
        i = n(1),
        a = n(3),
        u = function(e) {
          qq.getNetworkType({
            success: function(t) {
              "none" === t.networkType ? e(new o(600)) : e(new o(601))
            }
          })
        };
      e.exports = function(e) {
        var t = e.url,
          n = e.method,
          s = void 0 === n ? "GET" : n,
          c = e.data,
          l = void 0 === c ? {} : c,
          f = e.header,
          p = void 0 === f ? {} : f,
          y = e.dataType,
          h = void 0 === y ? "json" : y;
        return new Promise(function(e, n) {
          if (!r._config.CLIENT_ID) return n(new o(602));
          var c = i.mergeRequestHeader(p);
          if (!/https?:\/\//.test(t)) {
            var f = r._config.DEBUG ? r._config.API_HOST : r._polyfill.getAPIHost();
            t = f.replace(/\/$/, "") + "/" + t.replace(/^\//, "")
          }
          qq.request({
            method: s,
            url: t,
            data: l,
            header: c,
            dataType: h,
            success: e,
            fail: function(e) {
              u(n)
            }
          }), i.log(a.LOG_LEVEL.INFO, "Request => " + t)
        })
      }, e.exports.qqRequestFail = u
    },
    225: function(e, t, n) {
      var r = n(1),
        o = n(0),
        i = n(3),
        a = n(4);
      e.exports = function(e) {
        var t = arguments,
          n = e.url,
          u = e.method,
          s = void 0 === u ? "GET" : u,
          c = e.data,
          l = void 0 === c ? {} : c,
          f = e.header,
          p = void 0 === f ? {} : f,
          y = e.dataType,
          h = void 0 === y ? "json" : y;
        return (o._config.AUTO_LOGIN ? o.auth.silentLogin() : Promise.resolve()).then(function() {
          return o.request.apply(null, t)
        }).then(function(e) {
          return e.statusCode === i.STATUS_CODE.UNAUTHORIZED && o._config.AUTO_LOGIN ? (t = {
            header: p,
            method: s,
            url: n,
            data: l,
            dataType: h
          }, a.get(i.STORAGE_KEY.AUTH_TOKEN) && o.clearSession(), void o.auth.silentLogin().then(function() {
            return o.request(t).then(r.validateStatusCode)
          })) : r.validateStatusCode(e);
          var t
        })
      }
    },
    226: function(e, t, n) {
      function r() {
        return (r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }
      var i = n(3),
        a = n(2),
        u = n(1),
        s = n(36),
        c = s.getUploadFileConfig,
        l = s.getUploadHeaders;
      e.exports = function(e, t, n) {
        if (!e || "object" !== o(e) || !e.filePath) throw new a(605);
        if (t) {
          if ("object" !== o(t)) throw new a(605)
        } else t = {};
        var s, f, p, y, h = null,
          d = new Promise(function(e, t) {
            s = e, f = t
          }),
          _ = function(e) {
            return h ? h.onProgressUpdate(e) : p = e, this
          },
          v = function() {
            return h && h.abort(), y = !0, this
          };
        ! function e(t) {
          return r(t, {
            catch: function() {
              for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
              var i = (t = Promise.prototype.catch).call.apply(t, [this].concat(r));
              return e(i), i
            },
            then: function() {
              for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
              var i = (t = Promise.prototype.then).call.apply(t, [this].concat(r));
              return e(i), i
            },
            abort: v,
            onProgressUpdate: _
          })
        }(d);
        var E = u.getFileNameFromPath(e.filePath);
        return c(E, u.replaceQueryParams(t)).then(function(t) {
          if (y) return f(new Error("aborted"));
          var r = {
            id: t.data.id,
            fileName: E,
            policy: t.data.policy,
            authorization: t.data.authorization,
            uploadUrl: t.data.upload_url,
            filePath: e.filePath,
            destLink: t.data.path
          };
          h = function(e, t, n, r) {
            return qq.uploadFile({
              url: e.uploadUrl,
              filePath: e.filePath,
              name: i.UPLOAD.UPLOAD_FILE_KEY,
              formData: {
                authorization: e.authorization,
                policy: e.policy
              },
              header: l(),
              success: function(o) {
                var i = {},
                  a = JSON.parse(o.data);
                i.status = "ok", i.path = e.destLink, i.file = {
                  id: e.id,
                  path: e.destLink,
                  name: e.fileName,
                  created_at: a.time,
                  mime_type: a.mimetype,
                  cdn_path: a.url,
                  size: a.file_size
                }, delete o.data, o.data = r && "json" === r ? i : JSON.stringify(i);
                try {
                  t(u.validateStatusCode(o))
                } catch (e) {
                  n(e)
                }
              },
              fail: function() {
                BaaS.request.wxRequestFail(n)
              }
            })
          }(r, function(e) {
            if (y) return f(new Error("aborted"));
            s(e)
          }, f, n), p && h.onProgressUpdate(p)
        }, f), d
      }
    },
    23: function(e, t, n) {
      var r = n(3),
        o = n(4),
        i = n(2),
        a = n(1);
      e.exports = function(e) {
        e.init = function(t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.autoLogin,
            o = void 0 !== r && r,
            u = n.logLevel,
            s = void 0 === u ? "" : u;
          if (!a.isString(t)) throw new i(605);
          s && a.setLogLevel(s), e._config.AUTO_LOGIN = o, e._config.CLIENT_ID = t, e._config.API_HOST = e._polyfill.getAPIHost(t), e._polyfill.checkLatestVersion()
        }, e.getAuthToken = function() {
          return o.get(r.STORAGE_KEY.AUTH_TOKEN)
        }, e.checkVersion = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.platform,
            i = t.onSuccess,
            u = t.onError;
          i || (i = function(t) {
            var o = t.statusCode || t.status;
            parseInt(o) !== r.STATUS_CODE.SUCCESS ? u && u(t) : -1 === a.compareVersion(e._config.VERSION, t.data[n]) && a.log(r.LOG_LEVEL.WARN, "【知晓云 SDK 更新提示】当前 SDK 版本为 ".concat(e._config.VERSION, " 最新版本为 ").concat(t.data[n], "，请前往 ").concat(e._config.SDK_DOWNLOAD_PAGE, " 下载。"))
          });
          var s = Date.now(),
            c = o.get(r.STORAGE_KEY.LATEST_VERSION_CHECK_MILLISECONDS);
          c && c - s <= r.VERSION_MIN_CHECK_INTERVAL || (o.set(r.STORAGE_KEY.LATEST_VERSION_CHECK_MILLISECONDS, s), e.request({
            url: e._config.API.LATEST_VERSION
          }).then(i, u))
        }, e.clearSession = function() {
          o.set(r.STORAGE_KEY.AUTH_TOKEN, ""), o.set(r.STORAGE_KEY.IS_LOGINED_BAAS, ""), o.set(r.STORAGE_KEY.IS_ANONYMOUS_USER, ""), o.set(r.STORAGE_KEY.USERINFO, ""), o.set(r.STORAGE_KEY.UID, "")
        }, e._createRequestMethod = function() {
          e._config.METHOD_MAP_LIST.map(function(e) {
            a.doCreateRequestMethod(e)
          })
        }, e.auth = n(17), e.ContentGroup = n(29), e.File = n(30), e.FileCategory = n(31), e.GeoPoint = n(8), e.GeoPolygon = n(9), e.invokeFunction = n(15), e.invoke = n(15), e.Query = n(6), e.storage = n(4), e.TableObject = n(32), e.User = n(14), e.Order = n(34)
      }
    },
    24: function(e, t, n) {
      var r, o = n(3),
        i = n(4),
        a = n(12).log;
      e.exports = function(e) {
        return function(t) {
          var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).enableThrottle;
          if (void 0 === n || !n) return e(t);
          var u = o.LOG_LEVEL,
            s = o.TICKET_REPORT_INVOKE_LIMIT,
            c = o.STORAGE_KEY,
            l = Date.now();
          if (a(u.DEBUG, "<ticket-report> last: ".concat(r, ", now: ").concat(l)), r && l - r <= s.MIN_INTERVAL_PRE_TIME) return Promise.resolve();
          var f = i.get(c.REPORT_TICKET_INVOKE_RECORD),
            p = f && l - f.timestamp > s.TIMES_LIMIT.CYCLE;
          return a(u.DEBUG, "<ticket-report> record: ".concat(JSON.stringify(f), ", now: ").concat(l)), f && f.invokeTimes >= s.TIMES_LIMIT.MAX_TIMES_PER_CYCLE && !p ? Promise.resolve() : (!f || p || function(e) {
            return isNaN(e.invokeTimes) || isNaN(e.timestamp)
          }(f) ? f = {
            invokeTimes: 1,
            timestamp: Date.now()
          } : f.invokeTimes += 1, e && "function" == typeof e ? (r = l, i.set(c.REPORT_TICKET_INVOKE_RECORD, f), e(t).then(function(e) {
            return a(u.DEBUG, "<ticket-report> invoke success ".concat(Date.now() - l, "ms")), e
          }).catch(function(e) {
            throw f.invokeTimes -= 1, i.set(c.REPORT_TICKET_INVOKE_RECORD, f), a(u.DEBUG, "<ticket-report> invoke fail ".concat(Date.now() - l, "ms err: ").concat(e)), e
          })) : (a(u.DEBUG, "<ticket-report> invoke fail"), void a(u.ERROR, new TypeError('"ticketReportFn" must be Function type'))))
        }
      }
    },
    25: function(e, t, n) {
      "use strict";
      var r = n(26),
        o = ["trace", "debug", "info", "warn", "error", "fatal"],
        i = function() {};
      e.exports = function(e) {
        (e = e || {}).level = e.level || "info";
        var t = {};
        return o.forEach(function(n) {
          t[n] = function(t) {
            return o.indexOf(t) >= o.indexOf(e.level)
          }(n) ? function() {
            var t, o = e.prefix;
            if (e.stderr) t = "error";
            else switch (n) {
              case "trace":
              case "debug":
                t = "info";
                break;
              case "fatal":
                t = "error";
                break;
              default:
                t = n
            }
            o && ("function" == typeof o && (o = o(n)), arguments[0] = r.format(o, arguments[0]));
            console[t](r.format.apply(r, arguments))
          } : i
        }), t
      }
    },
    26: function(e, t, n) {
      (function(e, r) {
        var o = /%[sdj%]/g;
        t.format = function(e) {
          if (!v(e)) {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
            return t.join(" ")
          }
          n = 1;
          for (var r = arguments, i = r.length, a = String(e).replace(o, function(e) {
              if ("%%" === e) return "%";
              if (n >= i) return e;
              switch (e) {
                case "%s":
                  return String(r[n++]);
                case "%d":
                  return Number(r[n++]);
                case "%j":
                  try {
                    return JSON.stringify(r[n++])
                  } catch (e) {
                    return "[Circular]"
                  }
                default:
                  return e
              }
            }), s = r[n]; n < i; s = r[++n]) d(s) || !O(s) ? a += " " + s : a += " " + u(s);
          return a
        }, t.deprecate = function(n, o) {
          if (E(e.process)) return function() {
            return t.deprecate(n, o).apply(this, arguments)
          };
          if (!0 === r.noDeprecation) return n;
          var i = !1;
          return function() {
            if (!i) {
              if (r.throwDeprecation) throw new Error(o);
              r.traceDeprecation ? console.trace(o) : console.error(o), i = !0
            }
            return n.apply(this, arguments)
          }
        };
        var i, a = {};

        function u(e, n) {
          var r = {
            seen: [],
            stylize: c
          };
          return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), h(n) ? r.showHidden = n : n && t._extend(r, n), E(r.showHidden) && (r.showHidden = !1), E(r.depth) && (r.depth = 2), E(r.colors) && (r.colors = !1), E(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = s), l(r, e, r.depth)
        }

        function s(e, t) {
          var n = u.styles[t];
          return n ? "[" + u.colors[n][0] + "m" + e + "[" + u.colors[n][1] + "m" : e
        }

        function c(e, t) {
          return e
        }

        function l(e, n, r) {
          if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
            var o = n.inspect(r, e);
            return v(o) || (o = l(e, o, r)), o
          }
          var i = function(e, t) {
            if (E(t)) return e.stylize("undefined", "undefined");
            if (v(t)) {
              var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return e.stylize(n, "string")
            }
            if (_(t)) return e.stylize("" + t, "number");
            if (h(t)) return e.stylize("" + t, "boolean");
            if (d(t)) return e.stylize("null", "null")
          }(e, n);
          if (i) return i;
          var a = Object.keys(n),
            u = function(e) {
              var t = {};
              return e.forEach(function(e, n) {
                t[e] = !0
              }), t
            }(a);
          if (e.showHidden && (a = Object.getOwnPropertyNames(n)), m(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return f(n);
          if (0 === a.length) {
            if (T(n)) {
              var s = n.name ? ": " + n.name : "";
              return e.stylize("[Function" + s + "]", "special")
            }
            if (g(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
            if (b(n)) return e.stylize(Date.prototype.toString.call(n), "date");
            if (m(n)) return f(n)
          }
          var c, O = "",
            S = !1,
            I = ["{", "}"];
          (y(n) && (S = !0, I = ["[", "]"]), T(n)) && (O = " [Function" + (n.name ? ": " + n.name : "") + "]");
          return g(n) && (O = " " + RegExp.prototype.toString.call(n)), b(n) && (O = " " + Date.prototype.toUTCString.call(n)), m(n) && (O = " " + f(n)), 0 !== a.length || S && 0 != n.length ? r < 0 ? g(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), c = S ? function(e, t, n, r, o) {
            for (var i = [], a = 0, u = t.length; a < u; ++a) A(t, String(a)) ? i.push(p(e, t, n, r, String(a), !0)) : i.push("");
            return o.forEach(function(o) {
              o.match(/^\d+$/) || i.push(p(e, t, n, r, o, !0))
            }), i
          }(e, n, r, u, a) : a.map(function(t) {
            return p(e, n, r, u, t, S)
          }), e.seen.pop(), function(e, t, n) {
            if (e.reduce(function(e, t) {
                return 0, t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
              }, 0) > 60) return n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
            return n[0] + t + " " + e.join(", ") + " " + n[1]
          }(c, O, I)) : I[0] + O + I[1]
        }

        function f(e) {
          return "[" + Error.prototype.toString.call(e) + "]"
        }

        function p(e, t, n, r, o, i) {
          var a, u, s;
          if ((s = Object.getOwnPropertyDescriptor(t, o) || {
              value: t[o]
            }).get ? u = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : s.set && (u = e.stylize("[Setter]", "special")), A(r, o) || (a = "[" + o + "]"), u || (e.seen.indexOf(s.value) < 0 ? (u = d(n) ? l(e, s.value, null) : l(e, s.value, n - 1)).indexOf("\n") > -1 && (u = i ? u.split("\n").map(function(e) {
              return "  " + e
            }).join("\n").substr(2) : "\n" + u.split("\n").map(function(e) {
              return "   " + e
            }).join("\n")) : u = e.stylize("[Circular]", "special")), E(a)) {
            if (i && o.match(/^\d+$/)) return u;
            (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
          }
          return a + ": " + u
        }

        function y(e) {
          return Array.isArray(e)
        }

        function h(e) {
          return "boolean" == typeof e
        }

        function d(e) {
          return null === e
        }

        function _(e) {
          return "number" == typeof e
        }

        function v(e) {
          return "string" == typeof e
        }

        function E(e) {
          return void 0 === e
        }

        function g(e) {
          return O(e) && "[object RegExp]" === S(e)
        }

        function O(e) {
          return "object" == typeof e && null !== e
        }

        function b(e) {
          return O(e) && "[object Date]" === S(e)
        }

        function m(e) {
          return O(e) && ("[object Error]" === S(e) || e instanceof Error)
        }

        function T(e) {
          return "function" == typeof e
        }

        function S(e) {
          return Object.prototype.toString.call(e)
        }

        function I(e) {
          return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }
        t.debuglog = function(e) {
          if (E(i) && (i = r.env.NODE_DEBUG || ""), e = e.toUpperCase(), !a[e])
            if (new RegExp("\\b" + e + "\\b", "i").test(i)) {
              var n = r.pid;
              a[e] = function() {
                var r = t.format.apply(t, arguments);
                console.error("%s %d: %s", e, n, r)
              }
            } else a[e] = function() {};
          return a[e]
        }, t.inspect = u, u.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }, u.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }, t.isArray = y, t.isBoolean = h, t.isNull = d, t.isNullOrUndefined = function(e) {
          return null == e
        }, t.isNumber = _, t.isString = v, t.isSymbol = function(e) {
          return "symbol" == typeof e
        }, t.isUndefined = E, t.isRegExp = g, t.isObject = O, t.isDate = b, t.isError = m, t.isFunction = T, t.isPrimitive = function(e) {
          return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
        }, t.isBuffer = n(27);
        var w = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function A(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.log = function() {
          var e, n;
          console.log("%s - %s", (e = new Date, n = [I(e.getHours()), I(e.getMinutes()), I(e.getSeconds())].join(":"), [e.getDate(), w[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
        }, t.inherits = n(28), t._extend = function(e, t) {
          if (!t || !O(t)) return e;
          for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
          return e
        }
      }).call(this, n(11), n(18))
    },
    27: function(e, t) {
      e.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
      }
    },
    28: function(e, t) {
      "function" == typeof Object.create ? e.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })
      } : e.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
      }
    },
    29: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var s = n(0),
        c = n(5),
        l = n(6),
        f = function(e) {
          function t(e) {
            var n;
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (n = i(this, a(t).call(this)))._contentGroupID = e, n
          }
          var n, r, f;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && u(e, t)
          }(t, c), n = t, (r = [{
            key: "getContent",
            value: function(e) {
              var t = {
                richTextID: e
              };
              return this._expand && (t.expand = this._expand), this._keys && (t.keys = this._keys), this._initQueryParams(), s.getContent(t)
            }
          }, {
            key: "find",
            value: function() {
              var e = this._handleAllQueryConditions();
              return e.contentGroupID = this._contentGroupID, this._initQueryParams(), s.getContentList2(e)
            }
          }, {
            key: "getCategoryList",
            value: function() {
              return s.getContentCategoryList({
                contentGroupID: this._contentGroupID,
                limit: 100
              })
            }
          }, {
            key: "getCategory",
            value: function(e) {
              var t = new l;
              return t.compare("group_id", "=", this._contentGroupID), s.getContentCategory({
                categoryID: e,
                where: JSON.stringify(t.queryObject)
              })
            }
          }]) && o(n.prototype, r), f && o(n, f), t
        }();
      e.exports = f
    },
    3: function(e, t) {
      e.exports = {
        STORAGE_KEY: {
          AUTH_TOKEN: "auth_token",
          USERINFO: "userinfo",
          UID: "uid",
          OPENID: "openid",
          UNIONID: "unionid",
          IS_LOGINED_BAAS: "is_logined_baas",
          IS_ANONYMOUS_USER: "is_anonymous_user",
          EXPIRES_AT: "session_expires_at",
          ALIPAY_USER_ID: "alipay_user_id",
          LATEST_VERSION_CHECK_MILLISECONDS: "latest_version_check_milliseconds",
          REPORT_TICKET_INVOKE_RECORD: "report_ticket_invoke_record"
        },
        VERSION_MIN_CHECK_INTERVAL: "86400000",
        STATUS_CODE: {
          CREATED: 201,
          SUCCESS: 200,
          UPDATE: 200,
          PATCH: 200,
          DELETE: 204,
          UNAUTHORIZED: 401,
          NOT_FOUND: 404,
          SERVER_ERROR: 500
        },
        UPLOAD: {
          UPLOAD_FILE_KEY: "file",
          HEADER_AUTH: "Authorization",
          HEADER_CLIENT: "X-Hydrogen-Client-ID",
          HEADER_AUTH_VALUE: "Hydrogen-r1 ",
          UA: "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
        },
        USER_PROFILE_BUILD_IN_FIELDS: ["id", "created_at", "created_by", "updated_at", "country", "nickname", "province", "city", "language", "openid", "unionid", "avatar", "is_authorized", "gender"],
        httpMethodCodeMap: {
          GET: 200,
          POST: 201,
          PUT: 200,
          PATCH: 200,
          DELETE: 204
        },
        LOG_LEVEL: {
          DEBUG: "debug",
          INFO: "info",
          WARN: "warn",
          ERROR: "error"
        },
        UPDATE_USERPROFILE_VALUE: {
          OVERWRITE: "overwrite",
          SETNX: "setnx",
          FALSE: "false"
        },
        TICKET_REPORT_INVOKE_LIMIT: {
          MIN_INTERVAL_PRE_TIME: 1e3,
          TIMES_LIMIT: {
            MAX_TIMES_PER_CYCLE: 20,
            CYCLE: 864e5
          }
        },
        THIRD_PARTY_AUTH_MODE: {
          POPUP_IFRAME: "popup-iframe",
          POPUP_WINDOW: "popup-window",
          REDIRECT: "redirect"
        },
        THIRD_PARTY_AUTH_STATUS: {
          SUCCESS: "success",
          FAIL: "fail"
        },
        THIRD_PARTY_AUTH_HANDLER: {
          LOGIN: "login",
          ASSOCIATE: "associate"
        },
        THIRD_PARTY_AUTH_PROVIDER: {
          WECHAT_MP: "oauth-wechat-mp",
          WECHAT_WEB: "oauth-wechat-web",
          WEIBO: "oauth-weibo"
        },
        THIRD_PARTY_AUTH_URL_PARAM: {
          PROVIDER: "provider",
          REFERER: "referer",
          MODE: "mode",
          DEBUG: "debug",
          CREATE_USER: "create_user",
          UPDATE_USER_PROFILE: "update_userprofile",
          WECHAT_IFRAME_CONTENT_STYLE: "wechat_iframe_content_style",
          HANDLER: "handler",
          TOKEN: "token",
          AUTH_RESULT: "auth-result"
        }
      }
    },
    30: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var s = n(0),
        c = n(5),
        l = s._config.API,
        f = function(e) {
          function t() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), i(this, a(t).call(this))
          }
          var n, r, f;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && u(e, t)
          }(t, c), n = t, (r = [{
            key: "upload",
            value: function(e, t) {
              return s.uploadFile(e, t, "json")
            }
          }, {
            key: "delete",
            value: function(e) {
              return e instanceof Array ? s.deleteFiles({
                id__in: e
              }) : s.deleteFile({
                fileID: e
              })
            }
          }, {
            key: "get",
            value: function(e) {
              return s.getFileDetail({
                fileID: e
              })
            }
          }, {
            key: "find",
            value: function() {
              var e = this._handleAllQueryConditions();
              return this._initQueryParams(), s.getFileList(e)
            }
          }, {
            key: "genVideoSnapshot",
            value: function(e) {
              return s._baasRequest({
                url: l.VIDEO_SNAPSHOT,
                method: "POST",
                data: e
              }).then(function(e) {
                return e.data
              })
            }
          }, {
            key: "videoConcat",
            value: function(e) {
              return s._baasRequest({
                url: l.M3U8_CONCAT,
                method: "POST",
                data: e
              }).then(function(e) {
                return e.data
              })
            }
          }, {
            key: "videoClip",
            value: function(e) {
              return s._baasRequest({
                url: l.M3U8_CLIP,
                method: "POST",
                data: e
              }).then(function(e) {
                return e.data
              })
            }
          }, {
            key: "videoMeta",
            value: function(e) {
              return s._baasRequest({
                url: l.M3U8_META,
                method: "POST",
                data: e
              }).then(function(e) {
                return e.data
              })
            }
          }, {
            key: "videoAudioMeta",
            value: function(e) {
              return s._baasRequest({
                url: l.VIDEO_AUDIO_META,
                method: "POST",
                data: e
              }).then(function(e) {
                return e.data
              })
            }
          }]) && o(n.prototype, r), f && o(n, f), t
        }();
      e.exports = f
    },
    31: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var s = n(0),
        c = n(5),
        l = n(6),
        f = function(e) {
          function t() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), i(this, a(t).call(this))
          }
          var n, r, f;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && u(e, t)
          }(t, c), n = t, (r = [{
            key: "get",
            value: function(e) {
              return s.getFileCategoryDetail({
                categoryID: e
              })
            }
          }, {
            key: "getFileList",
            value: function(e) {
              var t = new l;
              return t.in("category_id", [e]), s.getFileList({
                where: JSON.stringify(t.queryObject)
              })
            }
          }, {
            key: "find",
            value: function() {
              var e = this._handleAllQueryConditions();
              return this._initQueryParams(), s.getFileCategoryList(e)
            }
          }]) && o(n.prototype, r), f && o(n, f), t
        }();
      e.exports = f
    },
    32: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e, t, n) {
        return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
          var r = function(e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = u(e)););
            return e
          }(e, t);
          if (r) {
            var o = Object.getOwnPropertyDescriptor(r, t);
            return o.get ? o.get.call(n) : o.value
          }
        })(e, t, n || e)
      }

      function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var c = n(0),
        l = n(5),
        f = n(2),
        p = n(6),
        y = n(33),
        h = n(1),
        d = n(7),
        _ = function(e) {
          function t(e) {
            var n;
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (n = i(this, u(t).call(this)))._tableID = e, n
          }
          var n, r, _;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && s(e, t)
          }(t, l), n = t, (r = [{
            key: "create",
            value: function() {
              return new y(this._tableID)
            }
          }, {
            key: "createMany",
            value: function(e) {
              var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).enableTrigger,
                n = void 0 === t || t,
                r = d._serializeValueFuncFactory(["BaseRecord"]);
              if (h.isArray(e)) {
                var o = {
                  tableID: this._tableID,
                  data: e.map(function(e) {
                    return Object.keys(e).forEach(function(t) {
                      e[t] = r(e[t])
                    }), e
                  }),
                  enable_trigger: n ? 1 : 0
                };
                return c.createRecordList(o)
              }
              throw new f(605)
            }
          }, {
            key: "delete",
            value: function(e) {
              var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).enableTrigger,
                n = void 0 === t || t;
              if (h.isString(e) || Number.isInteger(e)) return c.deleteRecord({
                tableID: this._tableID,
                recordID: e
              });
              if (e instanceof p) {
                var r = {
                  tableID: this._tableID,
                  limit: this._limit,
                  offset: this._offset,
                  where: JSON.stringify(e.queryObject),
                  enable_trigger: n ? 1 : 0
                };
                return this._initQueryParams(), c.deleteRecordList(r)
              }
              throw new f(605)
            }
          }, {
            key: "getWithoutData",
            value: function(e) {
              if (h.isString(e) || Number.isInteger(e)) return new y(this._tableID, e);
              if (e instanceof p) {
                var t = {};
                return t.limit = this._limit, t.offset = this._offset, t.where = h.cloneDeep(e.queryObject), this._initQueryParams(), new y(this._tableID, null, t)
              }
              throw new f(605)
            }
          }, {
            key: "get",
            value: function(e) {
              var t = {
                tableID: this._tableID,
                recordID: e
              };
              return this._expand && (t.expand = this._expand), this._keys && (t.keys = this._keys), this._initQueryParams(), c.getRecord(t)
            }
          }, {
            key: "_handleAllQueryConditions",
            value: function() {
              var e = a(u(t.prototype), "_handleAllQueryConditions", this).call(this);
              return e.tableID = this._tableID, e
            }
          }, {
            key: "find",
            value: function() {
              var e = this._handleAllQueryConditions();
              return this._initQueryParams(), c.queryRecordList(e)
            }
          }, {
            key: "count",
            value: function() {
              return this.limit(1).find().then(function(e) {
                return e.data.meta.total_count
              })
            }
          }]) && o(n.prototype, r), _ && o(n, _), t
        }();
      e.exports = _
    },
    33: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function i(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function a(e) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var s = n(0),
        c = n(7),
        l = n(1),
        f = function(e) {
          function t(e, n) {
            var r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (r = i(this, a(t).call(this, n)))._tableID = e, r._queryObject = o, r
          }
          var n, r, f;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && u(e, t)
          }(t, c), n = t, (r = [{
            key: "save",
            value: function() {
              var e = l.cloneDeep(this._record);
              return this._recordValueInit(), s.createRecord({
                tableID: this._tableID,
                data: e.$set
              })
            }
          }, {
            key: "update",
            value: function() {
              var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).enableTrigger,
                t = void 0 === e || e,
                n = l.cloneDeep(this._record);
              if (this._recordValueInit(), this._recordID) return s.updateRecord({
                tableID: this._tableID,
                recordID: this._recordID,
                data: n
              });
              var r = {
                tableID: this._tableID,
                data: n,
                where: JSON.stringify(this._queryObject.where),
                limit: this._queryObject.limit,
                offset: this._queryObject.offset,
                enable_trigger: t ? 1 : 0
              };
              return this._queryObject = {}, s.updateRecordList(r)
            }
          }]) && o(n.prototype, r), f && o(n, f), t
        }();
      e.exports = f
    },
    34: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o() {
        return (o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }).apply(this, arguments)
      }

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      function a(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e) : t
      }

      function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
      }

      function s(e, t) {
        return (s = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        })(e, t)
      }
      var c = n(0),
        l = n(1),
        f = n(5),
        p = function(e) {
          function t() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), a(this, u(t).apply(this, arguments))
          }
          var n, r, p;
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && s(e, t)
          }(t, f), n = t, (r = [{
            key: "get",
            value: function(e) {
              var t = c._config.API,
                n = l.format(t.ORDER, {
                  transactionID: e
                });
              return c._baasRequest({
                url: n
              })
            }
          }, {
            key: "getOrderList",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = o({}, this._handleAllQueryConditions(), e);
              return this._initQueryParams(), c.getOrderList(o(t, e))
            }
          }]) && i(n.prototype, r), p && i(n, p), t
        }();
      e.exports = p
    },
    35: function(e, t, n) {
      var r = n(0),
        o = n(3),
        i = n(1),
        a = [],
        u = !1;
      e.exports = {
        pushStats: function(e) {
          i.log(o.LOG_LEVEL.DEBUG, "<receive-stats> ".concat(e)), a.includes(e) || (a.push(e), i.log(o.LOG_LEVEL.DEBUG, "<push-stats> ".concat(e, ", [").concat(a, "]")))
        },
        reportStats: function() {
          return u || !a.length ? Promise.resolve() : !r.storage.get(o.STORAGE_KEY.AUTH_TOKEN) || i.isSessionExpired() ? Promise.resolve() : (u = !0, i.log(o.LOG_LEVEL.DEBUG, "<report-stats> begin"), function e() {
            var t = a[0];
            return i.log(o.LOG_LEVEL.DEBUG, "<report-stats> [".concat(t, "]: begin")), r._baasRequest({
              url: r._config.API.TEMPLATE_MESSAGE_EVENT_REPORT,
              method: "POST",
              data: {
                stats_id: t,
                platform: "ALIPAY" === r._polyfill.CLIENT_PLATFORM ? "alipay_miniapp" : "wechat_miniapp"
              }
            }).then(function() {
              if (i.log(o.LOG_LEVEL.DEBUG, "<report-stats> [".concat(t, "]: finish")), a.shift(), a.length) return e()
            })
          }().then(function() {
            i.log(o.LOG_LEVEL.DEBUG, "<report-stats> finish"), u = !1
          }).catch(function(e) {
            throw i.log(o.LOG_LEVEL.DEBUG, "<report-stats> fail", e, a), u = !1, e
          }))
        }
      }
    },
    36: function(e, t, n) {
      var r = n(0),
        o = n(3),
        i = n(1);
      e.exports = {
        getUploadFileConfig: function(e, t) {
          return t.filename = e, r._baasRequest({
            url: r._polyfill.getAPIHost() + r._config.API.UPLOAD,
            method: "POST",
            data: t
          })
        },
        getUploadHeaders: function() {
          return {
            Authorization: o.UPLOAD.HEADER_AUTH_VALUE + r.getAuthToken(),
            "X-Hydrogen-Client-Version": r._config.VERSION,
            "X-Hydrogen-Client-Platform": i.getSysPlatform(),
            "X-Hydrogen-Client-ID": r._config.CLIENT_ID,
            "User-Agent": o.UPLOAD.UA
          }
        }
      }
    },
    4: function(e, t, n) {
      var r = n(0);
      e.exports = {
        set: function(e, t) {
          r._polyfill.setStorageSync("ifx_baas_" + e, t)
        },
        get: function(e) {
          return r._polyfill.getStorageSync("ifx_baas_" + e)
        }
      }
    },
    5: function(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var o = n(2),
        i = n(6),
        a = n(1),
        u = function() {
          function e() {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this._initQueryParams()
          }
          var t, n, u;
          return t = e, (n = [{
            key: "_initQueryParams",
            value: function() {
              this._queryObject = {}, this._limit = 20, this._offset = 0, this._orderBy = null, this._keys = null, this._expand = null
            }
          }, {
            key: "setQuery",
            value: function(e) {
              if (!(e instanceof i)) throw new o(605);
              return this._queryObject = a.cloneDeep(e.queryObject), this
            }
          }, {
            key: "select",
            value: function(e) {
              return e instanceof Array ? this._keys = e.join(",") : this._keys = e, this
            }
          }, {
            key: "expand",
            value: function(e) {
              return e instanceof Array ? this._expand = e.join(",") : this._expand = e, this
            }
          }, {
            key: "limit",
            value: function(e) {
              if (!Number.isInteger(e)) throw new o(605);
              return this._limit = e, this
            }
          }, {
            key: "offset",
            value: function(e) {
              if (!Number.isInteger(e)) throw new o(605);
              return this._offset = e, this
            }
          }, {
            key: "orderBy",
            value: function(e) {
              return e instanceof Array ? this._orderBy = e.join(",") : this._orderBy = e, this
            }
          }, {
            key: "_handleAllQueryConditions",
            value: function() {
              var e = {};
              return e.limit = this._limit, e.offset = this._offset, this._orderBy && (e.order_by = this._orderBy), this._keys && (e.keys = this._keys), this._expand && (e.expand = this._expand), e.where = JSON.stringify(this._queryObject), e
            }
          }]) && r(t.prototype, n), u && r(t, u), e
        }();
      e.exports = u
    },
    6: function(e, t, n) {
      function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var i = n(8),
        a = n(9),
        u = n(2),
        s = n(1),
        c = n(7)._serializeValueFuncFactory(["BaseRecord"]),
        l = function() {
          function e() {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.queryObject = {}
          }
          var t, n, l;
          return t = e, l = [{
            key: "and",
            value: function() {
              for (var t = new e, n = {
                  $and: []
                }, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
              return o.forEach(function(e) {
                n.$and.push(e.queryObject)
              }), t._setQueryObject(n), t
            }
          }, {
            key: "or",
            value: function() {
              for (var t = new e, n = {
                  $or: []
                }, r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
              return o.forEach(function(e) {
                n.$or.push(e.queryObject)
              }), t._setQueryObject(n), t
            }
          }], (n = [{
            key: "compare",
            value: function(e, t, n) {
              var o = "eq";
              switch (t) {
                case "=":
                  o = "eq";
                  break;
                case "!=":
                  o = "ne";
                  break;
                case "<":
                  o = "lt";
                  break;
                case "<=":
                  o = "lte";
                  break;
                case ">":
                  o = "gt";
                  break;
                case ">=":
                  o = "gte";
                  break;
                default:
                  throw new u(605)
              }
              return this._addQueryObject(e, r({}, o, c(n))), this
            }
          }, {
            key: "contains",
            value: function(e, t) {
              if (t && s.isString(t)) return this._addQueryObject(e, {
                contains: t
              }), this;
              throw new u(605)
            }
          }, {
            key: "matches",
            value: function(e, t) {
              if (t && t instanceof RegExp) {
                var n = s.parseRegExp(t);
                return n.length > 1 ? this._addQueryObject(e, {
                  regex: n[0],
                  options: n[1]
                }) : this._addQueryObject(e, {
                  regex: n[0]
                }), this
              }
              throw new u(605)
            }
          }, {
            key: "in",
            value: function(e, t) {
              if (t && t instanceof Array) return this._addQueryObject(e, { in: t.map(function(e) {
                  return c(e)
                })
              }), this;
              throw new u(605)
            }
          }, {
            key: "notIn",
            value: function(e, t) {
              if (t && t instanceof Array) return this._addQueryObject(e, {
                nin: t.map(function(e) {
                  return c(e)
                })
              }), this;
              throw new u(605)
            }
          }, {
            key: "arrayContains",
            value: function(e, t) {
              if (t && t instanceof Array) return this._addQueryObject(e, {
                all: t
              }), this;
              throw new u(605)
            }
          }, {
            key: "isNull",
            value: function(e) {
              var t = this;
              return e && e instanceof Array ? e.forEach(function(e) {
                t._addQueryObject(e, {
                  isnull: !0
                })
              }) : this._addQueryObject(e, {
                isnull: !0
              }), this
            }
          }, {
            key: "isNotNull",
            value: function(e) {
              var t = this;
              return e && e instanceof Array ? e.forEach(function(e) {
                t._addQueryObject(e, {
                  isnull: !1
                })
              }) : this._addQueryObject(e, {
                isnull: !1
              }), this
            }
          }, {
            key: "exists",
            value: function(e) {
              var t = this;
              return e && e instanceof Array ? e.forEach(function(e) {
                t._addQueryObject(e, {
                  exists: !0
                })
              }) : this._addQueryObject(e, {
                exists: !0
              }), this
            }
          }, {
            key: "notExists",
            value: function(e) {
              var t = this;
              return e && e instanceof Array ? e.forEach(function(e) {
                t._addQueryObject(e, {
                  exists: !1
                })
              }) : this._addQueryObject(e, {
                exists: !1
              }), this
            }
          }, {
            key: "include",
            value: function(e, t) {
              if (t && t instanceof i) return this._addQueryObject(e, {
                intersects: t.toGeoJSON()
              }), this;
              throw new u(605)
            }
          }, {
            key: "within",
            value: function(e, t) {
              if (t && t instanceof a) return this._addQueryObject(e, {
                within: t.toGeoJSON()
              }), this;
              throw new u(605)
            }
          }, {
            key: "withinCircle",
            value: function(e, t, n) {
              if (t && t instanceof i) {
                var r = {
                  radius: n,
                  coordinates: [t.longitude, t.latitude]
                };
                return this._addQueryObject(e, {
                  center: r
                }), this
              }
              throw new u(605)
            }
          }, {
            key: "withinRegion",
            value: function(e, t, n) {
              var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
              if (t && t instanceof i) {
                var o = {
                  geometry: t.toGeoJSON(),
                  min_distance: r
                };
                return n && (o.max_distance = n), this._addQueryObject(e, {
                  nearsphere: o
                }), this
              }
              throw new u(605)
            }
          }, {
            key: "hasKey",
            value: function(e, t) {
              if ("string" != typeof e || "string" != typeof t) throw u(605);
              return this._addQueryObject(e, {
                has_key: t
              }), this
            }
          }, {
            key: "_setQueryObject",
            value: function(e) {
              this.queryObject = e
            }
          }, {
            key: "_addQueryObject",
            value: function(e, t) {
              if (t.constructor !== Object) throw new u(605);
              var n = r({}, e, {});
              Object.keys(t).forEach(function(r) {
                n[e]["$".concat(r)] = t[r]
              }), this.queryObject.$and || (this.queryObject.$and = []), this.queryObject.$and.push(n)
            }
          }]) && o(t.prototype, n), l && o(t, l), e
        }();
      e.exports = l
    },
    7: function(e, t, n) {
      function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
      }

      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var i = n(2);

      function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["BaseRecord"],
          t = n(8),
          r = n(9);
        return function(n) {
          return e.includes("Geo") && (n instanceof t || n instanceof r) ? n.toGeoJSON() : e.includes("BaseRecord") && n instanceof u ? null == n._recordID ? "" : n._recordID.toString() : n
        }
      }
      var u = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this._recordID = t, this._recordValueInit()
        }
        var t, n, u;
        return t = e, (n = [{
          key: "_recordValueInit",
          value: function() {
            this._record = {
              $set: {},
              $unset: {}
            }
          }
        }, {
          key: "set",
          value: function() {
            for (var e = this, t = a(["BaseRecord", "Geo"]), n = a(["Geo"]), o = arguments.length, u = new Array(o), s = 0; s < o; s++) u[s] = arguments[s];
            if (1 === u.length) {
              if ("object" !== r(u[0])) throw new i(605);
              var c = u[0],
                l = {};
              Object.keys(u[0]).forEach(function(r) {
                if (e._record.$unset.hasOwnProperty(r)) throw new i(605);
                var o = c[r];
                Array.isArray(o) ? l[r] = o.map(function(e) {
                  return n(e)
                }) : l[r] = t(o)
              }), this._record.$set = l
            } else {
              if (2 !== u.length) throw new i(605);
              if (this._record.$unset.hasOwnProperty(u[0])) throw new i(605);
              var f = u[1];
              Array.isArray(f) ? this._record.$set[u[0]] = f.map(function(e) {
                return n(e)
              }) : this._record.$set[u[0]] = t(f)
            }
            return this
          }
        }, {
          key: "unset",
          value: function() {
            for (var e = this, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
            if ("object" === r(n[0])) {
              var a = {};
              Object.keys(n[0]).forEach(function(t) {
                if (e._record.$set.hasOwnProperty(t)) throw new i(605);
                a[t] = ""
              }), this._record.$unset = a
            } else {
              if ("string" != typeof n[0]) throw new i(605);
              if (this._record.$set.hasOwnProperty(n[0])) throw new i(605);
              this._record.$unset[n[0]] = ""
            }
            return this
          }
        }, {
          key: "incrementBy",
          value: function(e, t) {
            return this._record.$set[e] = {
              $incr_by: t
            }, this
          }
        }, {
          key: "append",
          value: function(e, t) {
            var n = a(["Geo"]);
            return t instanceof Array || (t = [t]), t = t.map(function(e) {
              return n(e)
            }), this._record.$set[e] = {
              $append: t
            }, this
          }
        }, {
          key: "uAppend",
          value: function(e, t) {
            var n = a(["Geo"]);
            return t instanceof Array || (t = [t]), t = t.map(function(e) {
              return n(e)
            }), this._record.$set[e] = {
              $append_unique: t
            }, this
          }
        }, {
          key: "remove",
          value: function(e, t) {
            var n = a(["Geo"]);
            return t instanceof Array || (t = [t]), t = t.map(function(e) {
              return n(e)
            }), this._record.$set[e] = {
              $remove: t
            }, this
          }
        }, {
          key: "patchObject",
          value: function(e, t) {
            if ("[object Object]" !== Object.prototype.toString.call(t)) throw new i(605);
            return this._record.$set[e] = {
              $update: t
            }, this
          }
        }]) && o(t.prototype, n), u && o(t, u), e
      }();
      u._serializeValueFuncFactory = a, e.exports = u
    },
    8: function(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var o = n(1),
        i = function() {
          function e(t, n) {
            ! function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.longitude = t, this.latitude = n, this.geoJSON = {
              type: "Point",
              coordinates: [this.longitude, this.latitude]
            }
          }
          var t, n, i;
          return t = e, (n = [{
            key: "toGeoJSON",
            value: function() {
              return o.cloneDeep(this.geoJSON)
            }
          }]) && r(t.prototype, n), i && r(t, i), e
        }();
      e.exports = i
    },
    9: function(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      var o = n(8),
        i = n(2),
        a = n(1),
        u = function() {
          function e(t) {
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, e), !(t && t instanceof Array)) throw new i(605);
            if (t.length < 4) throw new i(605);
            this.points = t, this.geoJSON = {
              type: "Polygon",
              coordinates: []
            }
          }
          var t, n, u;
          return t = e, (n = [{
            key: "toGeoJSON",
            value: function() {
              var e = [];
              return this.points.forEach(function(t) {
                if (t instanceof o) e.push([t.longitude, t.latitude]);
                else {
                  if (!(t instanceof Array && 2 === t.length)) throw new i(605);
                  e.push(t)
                }
              }), this.geoJSON.coordinates = [e], a.cloneDeep(this.geoJSON)
            }
          }]) && r(t.prototype, n), u && r(t, u), e
        }();
      e.exports = u
    }
  })
});
//# sourceMappingURL=sdk-qq.2.8.1.js.map
