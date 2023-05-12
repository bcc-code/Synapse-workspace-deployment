var _ = (n, a) => () => (a || n((a = { exports: {} }).exports, a), a.exports);
var A = _((s) => {
  var p = globalThis && globalThis.__createBinding || (Object.create ? function(n, a, r, i) {
    i === void 0 && (i = r), Object.defineProperty(n, i, { enumerable: !0, get: function() {
      return a[r];
    } });
  } : function(n, a, r, i) {
    i === void 0 && (i = r), n[i] = a[r];
  }), w = globalThis && globalThis.__setModuleDefault || (Object.create ? function(n, a) {
    Object.defineProperty(n, "default", { enumerable: !0, value: a });
  } : function(n, a) {
    n.default = a;
  }), O = globalThis && globalThis.__importStar || function(n) {
    if (n && n.__esModule)
      return n;
    var a = {};
    if (n != null)
      for (var r in n)
        r !== "default" && Object.prototype.hasOwnProperty.call(n, r) && p(a, n, r);
    return w(a, n), a;
  }, T = globalThis && globalThis.__awaiter || function(n, a, r, i) {
    function u(e) {
      return e instanceof r ? e : new r(function(c) {
        c(e);
      });
    }
    return new (r || (r = Promise))(function(e, c) {
      function o(l) {
        try {
          t(i.next(l));
        } catch (d) {
          c(d);
        }
      }
      function f(l) {
        try {
          t(i.throw(l));
        } catch (d) {
          c(d);
        }
      }
      function t(l) {
        l.done ? e(l.value) : u(l.value).then(o, f);
      }
      t((i = i.apply(n, a || [])).next());
    });
  }, M = globalThis && globalThis.__generator || function(n, a) {
    var r = { label: 0, sent: function() {
      if (e[0] & 1)
        throw e[1];
      return e[1];
    }, trys: [], ops: [] }, i, u, e, c;
    return c = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
      return this;
    }), c;
    function o(t) {
      return function(l) {
        return f([t, l]);
      };
    }
    function f(t) {
      if (i)
        throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (i = 1, u && (e = t[0] & 2 ? u.return : t[0] ? u.throw || ((e = u.return) && e.call(u), 0) : u.next) && !(e = e.call(u, t[1])).done)
            return e;
          switch (u = 0, e && (t = [t[0] & 2, e.value]), t[0]) {
            case 0:
            case 1:
              e = t;
              break;
            case 4:
              return r.label++, { value: t[1], done: !1 };
            case 5:
              r.label++, u = t[1], t = [0];
              continue;
            case 7:
              t = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (e = r.trys, !(e = e.length > 0 && e[e.length - 1]) && (t[0] === 6 || t[0] === 2)) {
                r = 0;
                continue;
              }
              if (t[0] === 3 && (!e || t[1] > e[0] && t[1] < e[3])) {
                r.label = t[1];
                break;
              }
              if (t[0] === 6 && r.label < e[1]) {
                r.label = e[1], e = t;
                break;
              }
              if (e && r.label < e[2]) {
                r.label = e[2], r.ops.push(t);
                break;
              }
              e[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          t = a.call(n, r);
        } catch (l) {
          t = [6, l], u = 0;
        } finally {
          i = e = 0;
        }
      if (t[0] & 5)
        throw t[1];
      return { value: t[0] ? t[1] : void 0, done: !0 };
    }
  };
  Object.defineProperty(s, "__esModule", { value: !0 });
  s.main = void 0;
  var b = O(require("@actions/core")), v = require("./utils/logger"), m = require("./Operations/BundleManager"), h = require("./utils/artifacts_enum"), g = require("./Operations/OperationsManager");
  function y() {
    return T(this, void 0, void 0, function() {
      var n, a, r, i, u;
      return M(this, function(e) {
        switch (e.label) {
          case 0:
            v.SystemLogger.setLogger(new v.ActionLogger(!0)), e.label = 1;
          case 1:
            switch (e.trys.push([1, 12, , 13]), n = b.getInput("operation"), a = b.getInput("npmpackage"), r = new m.BundleManager(a), i = n, i) {
              case h.OPERATIONS.deploy:
                return [3, 2];
              case h.OPERATIONS.validateDeploy:
                return [3, 4];
              case h.OPERATIONS.validate:
                return [3, 7];
              case "default":
                return [3, 10];
            }
            return [3, 11];
          case 2:
            return [4, g.OperationManager.DeployArtifacts()];
          case 3:
            return e.sent(), [3, 11];
          case 4:
            return [4, r.invokeBundle()];
          case 5:
            return e.sent(), [4, g.OperationManager.ValidateAndDeploy()];
          case 6:
            return e.sent(), [3, 11];
          case 7:
            return [4, r.invokeBundle()];
          case 8:
            return e.sent(), [4, g.OperationManager.ValidateArtifacts()];
          case 9:
            return e.sent(), [3, 11];
          case 10:
            throw new Error("Operation not supported : " + n);
          case 11:
            return [3, 13];
          case 12:
            throw u = e.sent(), new Error(u.message);
          case 13:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }
  s.main = y;
  y().then(function() {
    process.exit(0);
  }).catch(function(n) {
    b.info("Action failed -> " + n), process.exit(1);
  });
});
export default A();
