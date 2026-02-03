var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-XEHBhT/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// worker/build/index.js
import { WorkerEntrypoint as ut } from "cloudflare:workers";
import $ from "./9e04ceeb300bb68c045fca22a3db10bc320e6651-index_bg.wasm";
var y = class {
  static {
    __name(this, "y");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, K.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_containerstartupoptions_free(t, 0);
  }
  get enableInternet() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.__wbg_get_containerstartupoptions_enableInternet(this.__wbg_ptr);
    return t === 16777215 ? void 0 : t !== 0;
  }
  get entrypoint() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.__wbg_get_containerstartupoptions_entrypoint(this.__wbg_ptr);
    var n = et(t[0], t[1]).slice();
    return i.__wbindgen_free(t[0], t[1] * 4, 4), n;
  }
  get env() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.__wbg_get_containerstartupoptions_env(this.__wbg_ptr);
  }
  set enableInternet(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_containerstartupoptions_enableInternet(this.__wbg_ptr, u(t) ? 16777215 : t ? 1 : 0);
  }
  set entrypoint(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let n = st(t, i.__wbindgen_malloc), r = w;
    i.__wbg_set_containerstartupoptions_entrypoint(this.__wbg_ptr, n, r);
  }
  set env(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_containerstartupoptions_env(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
var m = class {
  static {
    __name(this, "m");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingbytesource_free(t, 0);
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = this.__destroy_into_raw();
    i.intounderlyingbytesource_cancel(t);
  }
  pull(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingbytesource_pull(this.__wbg_ptr, t);
  }
  start(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.intounderlyingbytesource_start(this.__wbg_ptr, t);
  }
  get type() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.intounderlyingbytesource_type(this.__wbg_ptr);
    return G[t];
  }
};
Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
var v = class {
  static {
    __name(this, "v");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, X.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingsink_free(t, 0);
  }
  abort(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let n = this.__destroy_into_raw();
    return i.intounderlyingsink_abort(n, t);
  }
  close() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = this.__destroy_into_raw();
    return i.intounderlyingsink_close(t);
  }
  write(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingsink_write(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
var x = class {
  static {
    __name(this, "x");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Y.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_intounderlyingsource_free(t, 0);
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = this.__destroy_into_raw();
    i.intounderlyingsource_cancel(t);
  }
  pull(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingsource_pull(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
var I = class {
  static {
    __name(this, "I");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_minifyconfig_free(t, 0);
  }
  get css() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  get html() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  get js() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
  set html(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  set js(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
};
Symbol.dispose && (I.prototype[Symbol.dispose] = I.prototype.free);
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, tt.unregister(this), t;
  }
  free() {
    let t = this.__destroy_into_raw();
    i.__wbg_r2range_free(t, 0);
  }
  get length() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.__wbg_get_r2range_length(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  get offset() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.__wbg_get_r2range_offset(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  get suffix() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let t = i.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return t[0] === 0 ? void 0 : t[1];
  }
  set length(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_length(this.__wbg_ptr, !u(t), u(t) ? 0 : t);
  }
  set offset(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_offset(this.__wbg_ptr, !u(t), u(t) ? 0 : t);
  }
  set suffix(t) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_suffix(this.__wbg_ptr, !u(t), u(t) ? 0 : t);
  }
};
Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
function D() {
  s++, p = null, W = null, typeof numBytesDecoded < "u" && (numBytesDecoded = 0), typeof w < "u" && (w = 0), i = new WebAssembly.Instance($, q()).exports, i.__wbindgen_start();
}
__name(D, "D");
function H(e, t, n) {
  return i.fetch(e, t, n);
}
__name(H, "H");
function T(e) {
  i.setPanicHook(e);
}
__name(T, "T");
function q() {
  return { __proto__: null, "./index_bg.js": { __proto__: null, __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(function(t, n) {
    let r = String(n), _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(t + 4, o, true), g().setInt32(t + 0, _, true);
  }, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_debug_string_0bc8482c6e3508ae: /* @__PURE__ */ __name(function(t, n) {
    let r = M(n), _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(t + 4, o, true), g().setInt32(t + 0, _, true);
  }, "__wbg___wbindgen_debug_string_0bc8482c6e3508ae"), __wbg___wbindgen_is_function_0095a73b8b156f76: /* @__PURE__ */ __name(function(t) {
    return typeof t == "function";
  }, "__wbg___wbindgen_is_function_0095a73b8b156f76"), __wbg___wbindgen_is_undefined_9e4d92534c42d778: /* @__PURE__ */ __name(function(t) {
    return t === void 0;
  }, "__wbg___wbindgen_is_undefined_9e4d92534c42d778"), __wbg___wbindgen_string_get_72fb696202c56729: /* @__PURE__ */ __name(function(t, n) {
    let r = n, _ = typeof r == "string" ? r : void 0;
    var o = u(_) ? 0 : F(_, i.__wbindgen_malloc, i.__wbindgen_realloc), c = w;
    g().setInt32(t + 4, c, true), g().setInt32(t + 0, o, true);
  }, "__wbg___wbindgen_string_get_72fb696202c56729"), __wbg___wbindgen_throw_be289d5034ed271b: /* @__PURE__ */ __name(function(t, n) {
    var r = l(t, n);
    throw new Error(r);
  }, "__wbg___wbindgen_throw_be289d5034ed271b"), __wbg__wbg_cb_unref_d9b87ff7982e3b21: /* @__PURE__ */ __name(function(t) {
    t._wbg_cb_unref();
  }, "__wbg__wbg_cb_unref_d9b87ff7982e3b21"), __wbg_buffer_26d0910f3a5bc899: /* @__PURE__ */ __name(function(t) {
    return t.buffer;
  }, "__wbg_buffer_26d0910f3a5bc899"), __wbg_byobRequest_80e594e6da4e1af7: /* @__PURE__ */ __name(function(t) {
    let n = t.byobRequest;
    return u(n) ? 0 : d(n);
  }, "__wbg_byobRequest_80e594e6da4e1af7"), __wbg_byteLength_3417f266f4bf562a: /* @__PURE__ */ __name(function(t) {
    return t.byteLength;
  }, "__wbg_byteLength_3417f266f4bf562a"), __wbg_byteOffset_f88547ca47c86358: /* @__PURE__ */ __name(function(t) {
    return t.byteOffset;
  }, "__wbg_byteOffset_f88547ca47c86358"), __wbg_call_389efe28435a9388: /* @__PURE__ */ __name(function() {
    return a(function(t, n) {
      return t.call(n);
    }, arguments);
  }, "__wbg_call_389efe28435a9388"), __wbg_call_4708e0c13bdc8e95: /* @__PURE__ */ __name(function() {
    return a(function(t, n, r) {
      return t.call(n, r);
    }, arguments);
  }, "__wbg_call_4708e0c13bdc8e95"), __wbg_cause_0fc168d4eaec87cc: /* @__PURE__ */ __name(function(t) {
    return t.cause;
  }, "__wbg_cause_0fc168d4eaec87cc"), __wbg_cf_b8165e79377eeebd: /* @__PURE__ */ __name(function() {
    return a(function(t) {
      let n = t.cf;
      return u(n) ? 0 : d(n);
    }, arguments);
  }, "__wbg_cf_b8165e79377eeebd"), __wbg_close_06dfa0a815b9d71f: /* @__PURE__ */ __name(function() {
    return a(function(t) {
      t.close();
    }, arguments);
  }, "__wbg_close_06dfa0a815b9d71f"), __wbg_close_a79afee31de55b36: /* @__PURE__ */ __name(function() {
    return a(function(t) {
      t.close();
    }, arguments);
  }, "__wbg_close_a79afee31de55b36"), __wbg_enqueue_2c63f2044f257c3e: /* @__PURE__ */ __name(function() {
    return a(function(t, n) {
      t.enqueue(n);
    }, arguments);
  }, "__wbg_enqueue_2c63f2044f257c3e"), __wbg_error_9a7fe3f932034cde: /* @__PURE__ */ __name(function(t) {
    console.error(t);
  }, "__wbg_error_9a7fe3f932034cde"), __wbg_error_f852e41c69b0bd84: /* @__PURE__ */ __name(function(t, n) {
    console.error(t, n);
  }, "__wbg_error_f852e41c69b0bd84"), __wbg_headers_5a897f7fee9a0571: /* @__PURE__ */ __name(function(t) {
    return t.headers;
  }, "__wbg_headers_5a897f7fee9a0571"), __wbg_instanceof_Error_8573fe0b0b480f46: /* @__PURE__ */ __name(function(t) {
    let n;
    try {
      n = t instanceof Error;
    } catch {
      n = false;
    }
    return n;
  }, "__wbg_instanceof_Error_8573fe0b0b480f46"), __wbg_length_32ed9a279acd054c: /* @__PURE__ */ __name(function(t) {
    return t.length;
  }, "__wbg_length_32ed9a279acd054c"), __wbg_method_a9e9b2fcba5440fb: /* @__PURE__ */ __name(function(t, n) {
    let r = n.method, _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(t + 4, o, true), g().setInt32(t + 0, _, true);
  }, "__wbg_method_a9e9b2fcba5440fb"), __wbg_new_361308b2356cecd0: /* @__PURE__ */ __name(function() {
    return new Object();
  }, "__wbg_new_361308b2356cecd0"), __wbg_new_64284bd487f9d239: /* @__PURE__ */ __name(function() {
    return a(function() {
      return new Headers();
    }, arguments);
  }, "__wbg_new_64284bd487f9d239"), __wbg_new_72b49615380db768: /* @__PURE__ */ __name(function(t, n) {
    var r = l(t, n);
    return new Error(r);
  }, "__wbg_new_72b49615380db768"), __wbg_new_b5d9e2fb389fef91: /* @__PURE__ */ __name(function(t, n) {
    try {
      var r = { a: t, b: n }, _ = /* @__PURE__ */ __name((c, f) => {
        let b = r.a;
        r.a = 0;
        try {
          return J(b, r.b, c, f);
        } finally {
          r.a = b;
        }
      }, "_");
      return new Promise(_);
    } finally {
      r.a = r.b = 0;
    }
  }, "__wbg_new_b5d9e2fb389fef91"), __wbg_new_no_args_1c7c842f08d00ebb: /* @__PURE__ */ __name(function(t, n) {
    var r = l(t, n);
    return new Function(r);
  }, "__wbg_new_no_args_1c7c842f08d00ebb"), __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: /* @__PURE__ */ __name(function(t, n, r) {
    return new Uint8Array(t, n >>> 0, r >>> 0);
  }, "__wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1"), __wbg_new_with_length_a2c39cbe88fd8ff1: /* @__PURE__ */ __name(function(t) {
    return new Uint8Array(t >>> 0);
  }, "__wbg_new_with_length_a2c39cbe88fd8ff1"), __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b: /* @__PURE__ */ __name(function() {
    return a(function(t, n) {
      return new Response(t, n);
    }, arguments);
  }, "__wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b"), __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb: /* @__PURE__ */ __name(function() {
    return a(function(t, n) {
      return new Response(t, n);
    }, arguments);
  }, "__wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb"), __wbg_new_with_opt_str_and_init_4fbb71523b271b6e: /* @__PURE__ */ __name(function() {
    return a(function(t, n, r) {
      var _ = l(t, n);
      return new Response(_, r);
    }, arguments);
  }, "__wbg_new_with_opt_str_and_init_4fbb71523b271b6e"), __wbg_queueMicrotask_0aa0a927f78f5d98: /* @__PURE__ */ __name(function(t) {
    return t.queueMicrotask;
  }, "__wbg_queueMicrotask_0aa0a927f78f5d98"), __wbg_queueMicrotask_5bb536982f78a56f: /* @__PURE__ */ __name(function(t) {
    queueMicrotask(t);
  }, "__wbg_queueMicrotask_5bb536982f78a56f"), __wbg_resolve_002c4b7d9d8f6b64: /* @__PURE__ */ __name(function(t) {
    return Promise.resolve(t);
  }, "__wbg_resolve_002c4b7d9d8f6b64"), __wbg_respond_bf6ab10399ca8722: /* @__PURE__ */ __name(function() {
    return a(function(t, n) {
      t.respond(n >>> 0);
    }, arguments);
  }, "__wbg_respond_bf6ab10399ca8722"), __wbg_set_6cb8631f80447a67: /* @__PURE__ */ __name(function() {
    return a(function(t, n, r) {
      return Reflect.set(t, n, r);
    }, arguments);
  }, "__wbg_set_6cb8631f80447a67"), __wbg_set_cc56eefd2dd91957: /* @__PURE__ */ __name(function(t, n, r) {
    t.set(nt(n, r));
  }, "__wbg_set_cc56eefd2dd91957"), __wbg_set_db769d02949a271d: /* @__PURE__ */ __name(function() {
    return a(function(t, n, r, _, o) {
      var c = l(n, r), f = l(_, o);
      t.set(c, f);
    }, arguments);
  }, "__wbg_set_db769d02949a271d"), __wbg_set_headers_bbdfebba19309590: /* @__PURE__ */ __name(function(t, n) {
    t.headers = n;
  }, "__wbg_set_headers_bbdfebba19309590"), __wbg_set_status_fa41f71c4575bca5: /* @__PURE__ */ __name(function(t, n) {
    t.status = n;
  }, "__wbg_set_status_fa41f71c4575bca5"), __wbg_static_accessor_GLOBAL_12837167ad935116: /* @__PURE__ */ __name(function() {
    let t = typeof global > "u" ? null : global;
    return u(t) ? 0 : d(t);
  }, "__wbg_static_accessor_GLOBAL_12837167ad935116"), __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: /* @__PURE__ */ __name(function() {
    let t = typeof globalThis > "u" ? null : globalThis;
    return u(t) ? 0 : d(t);
  }, "__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f"), __wbg_static_accessor_SELF_a621d3dfbb60d0ce: /* @__PURE__ */ __name(function() {
    let t = typeof self > "u" ? null : self;
    return u(t) ? 0 : d(t);
  }, "__wbg_static_accessor_SELF_a621d3dfbb60d0ce"), __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: /* @__PURE__ */ __name(function() {
    let t = typeof window > "u" ? null : window;
    return u(t) ? 0 : d(t);
  }, "__wbg_static_accessor_WINDOW_f8727f0cf888e0bd"), __wbg_then_b9e7b3b5f1a9e1b5: /* @__PURE__ */ __name(function(t, n) {
    return t.then(n);
  }, "__wbg_then_b9e7b3b5f1a9e1b5"), __wbg_toString_029ac24421fd7a24: /* @__PURE__ */ __name(function(t) {
    return t.toString();
  }, "__wbg_toString_029ac24421fd7a24"), __wbg_url_36c39f6580d05409: /* @__PURE__ */ __name(function(t, n) {
    let r = n.url, _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(t + 4, o, true), g().setInt32(t + 0, _, true);
  }, "__wbg_url_36c39f6580d05409"), __wbg_view_6c32e7184b8606ad: /* @__PURE__ */ __name(function(t) {
    let n = t.view;
    return u(n) ? 0 : d(n);
  }, "__wbg_view_6c32e7184b8606ad"), __wbindgen_cast_0000000000000001: /* @__PURE__ */ __name(function(t, n) {
    return it(t, n, i.wasm_bindgen__closure__destroy__hdb9efbc41cb220e4, N);
  }, "__wbindgen_cast_0000000000000001"), __wbindgen_cast_0000000000000002: /* @__PURE__ */ __name(function(t, n) {
    var r = l(t, n);
    return r;
  }, "__wbindgen_cast_0000000000000002"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(function() {
    let t = i.__wbindgen_externrefs, n = t.grow(4);
    t.set(0, void 0), t.set(n + 0, void 0), t.set(n + 1, null), t.set(n + 2, true), t.set(n + 3, false);
  }, "__wbindgen_init_externref_table") } };
}
__name(q, "q");
function N(e, t, n) {
  i.wasm_bindgen__convert__closures_____invoke__ha9f36244b97f4ac1(e, t, n);
}
__name(N, "N");
function J(e, t, n, r) {
  i.wasm_bindgen__convert__closures_____invoke__hce03f2dbb394259d(e, t, n, r);
}
__name(J, "J");
var G = ["bytes"];
var s = 0;
var K = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_containerstartupoptions_free(e >>> 0, 1);
});
var Q = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_intounderlyingbytesource_free(e >>> 0, 1);
});
var X = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_intounderlyingsink_free(e >>> 0, 1);
});
var Y = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_intounderlyingsource_free(e >>> 0, 1);
});
var Z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_minifyconfig_free(e >>> 0, 1);
});
var tt = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: e, instance: t }) => {
  t === s && i.__wbg_r2range_free(e >>> 0, 1);
});
function d(e) {
  let t = i.__externref_table_alloc();
  return i.__wbindgen_externrefs.set(t, e), t;
}
__name(d, "d");
var L = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((e) => {
  e.instance === s && e.dtor(e.a, e.b);
});
function M(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    let _ = e.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (t == "function") {
    let _ = e.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(e)) {
    let _ = e.length, o = "[";
    _ > 0 && (o += M(e[0]));
    for (let c = 1; c < _; c++) o += ", " + M(e[c]);
    return o += "]", o;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(e);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(e) + ")";
  } catch {
    return "Object";
  }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
}
__name(M, "M");
function et(e, t) {
  e = e >>> 0;
  let n = g(), r = [];
  for (let _ = e; _ < e + 4 * t; _ += 4) r.push(i.__wbindgen_externrefs.get(n.getUint32(_, true)));
  return i.__externref_drop_slice(e, t), r;
}
__name(et, "et");
function nt(e, t) {
  return e = e >>> 0, S().subarray(e / 1, e / 1 + t);
}
__name(nt, "nt");
function l(e, t) {
  return e === 0 ? rt(t) : _t(e, t);
}
__name(l, "l");
var p = null;
function g() {
  return (p === null || p.buffer.detached === true || p.buffer.detached === void 0 && p.buffer !== i.memory.buffer) && (p = new DataView(i.memory.buffer)), p;
}
__name(g, "g");
function rt(e) {
  return i.__wbindgen_externrefs.get(e);
}
__name(rt, "rt");
function _t(e, t) {
  return e = e >>> 0, ot(e, t);
}
__name(_t, "_t");
var W = null;
function S() {
  return (W === null || W.byteLength === 0) && (W = new Uint8Array(i.memory.buffer)), W;
}
__name(S, "S");
function a(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    let r = d(n);
    i.__wbindgen_exn_store(r);
  }
}
__name(a, "a");
function u(e) {
  return e == null;
}
__name(u, "u");
function it(e, t, n, r) {
  let _ = { a: e, b: t, cnt: 1, dtor: n, instance: s }, o = /* @__PURE__ */ __name((...c) => {
    if (_.instance !== s) throw new Error("Cannot invoke closure from previous WASM instance");
    _.cnt++;
    let f = _.a;
    _.a = 0;
    try {
      return r(f, _.b, ...c);
    } finally {
      _.a = f, o._wbg_cb_unref();
    }
  }, "o");
  return o._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, L.unregister(_));
  }, L.register(o, _, _), o;
}
__name(it, "it");
function st(e, t) {
  let n = t(e.length * 4, 4) >>> 0;
  for (let r = 0; r < e.length; r++) {
    let _ = d(e[r]);
    g().setUint32(n + 4 * r, _, true);
  }
  return w = e.length, n;
}
__name(st, "st");
function F(e, t, n) {
  if (n === void 0) {
    let f = j.encode(e), b = t(f.length, 1) >>> 0;
    return S().subarray(b, b + f.length).set(f), w = f.length, b;
  }
  let r = e.length, _ = t(r, 1) >>> 0, o = S(), c = 0;
  for (; c < r; c++) {
    let f = e.charCodeAt(c);
    if (f > 127) break;
    o[_ + c] = f;
  }
  if (c !== r) {
    c !== 0 && (e = e.slice(c)), _ = n(_, r, r = c + e.length * 3, 1) >>> 0;
    let f = S().subarray(_ + c, _ + r), b = j.encodeInto(e, f);
    c += b.written, _ = n(_, r, c, 1) >>> 0;
  }
  return w = c, _;
}
__name(F, "F");
var B = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
B.decode();
function ot(e, t) {
  return B.decode(S().subarray(e, e + t));
}
__name(ot, "ot");
var j = new TextEncoder();
"encodeInto" in j || (j.encodeInto = function(e, t) {
  let n = j.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
var w = 0;
var ct = new WebAssembly.Instance($, q());
var i = ct.exports;
i.__wbindgen_start();
Error.stackTraceLimit = 100;
var k = false;
function V() {
  T && T(function(e) {
    let t = new Error("Rust panic: " + e);
    console.error("Critical", t), k = true;
  });
}
__name(V, "V");
V();
var P = 0;
function C() {
  k && (console.log("Reinitializing Wasm application"), D(), k = false, V(), P++);
}
__name(C, "C");
addEventListener("error", (e) => {
  U(e.error);
});
function U(e) {
  e instanceof WebAssembly.RuntimeError && (console.error("Critical", e), k = true);
}
__name(U, "U");
var z = class extends ut {
  static {
    __name(this, "z");
  }
};
z.prototype.fetch = function(t) {
  return H.call(this, t, this.env, this.ctx);
};
var at = { set: /* @__PURE__ */ __name((e, t, n, r) => Reflect.set(e.instance, t, n, r), "set"), has: /* @__PURE__ */ __name((e, t) => Reflect.has(e.instance, t), "has"), deleteProperty: /* @__PURE__ */ __name((e, t) => Reflect.deleteProperty(e.instance, t), "deleteProperty"), apply: /* @__PURE__ */ __name((e, t, n) => Reflect.apply(e.instance, t, n), "apply"), construct: /* @__PURE__ */ __name((e, t, n) => Reflect.construct(e.instance, t, n), "construct"), getPrototypeOf: /* @__PURE__ */ __name((e) => Reflect.getPrototypeOf(e.instance), "getPrototypeOf"), setPrototypeOf: /* @__PURE__ */ __name((e, t) => Reflect.setPrototypeOf(e.instance, t), "setPrototypeOf"), isExtensible: /* @__PURE__ */ __name((e) => Reflect.isExtensible(e.instance), "isExtensible"), preventExtensions: /* @__PURE__ */ __name((e) => Reflect.preventExtensions(e.instance), "preventExtensions"), getOwnPropertyDescriptor: /* @__PURE__ */ __name((e, t) => Reflect.getOwnPropertyDescriptor(e.instance, t), "getOwnPropertyDescriptor"), defineProperty: /* @__PURE__ */ __name((e, t, n) => Reflect.defineProperty(e.instance, t, n), "defineProperty"), ownKeys: /* @__PURE__ */ __name((e) => Reflect.ownKeys(e.instance), "ownKeys") };
var h = { construct(e, t, n) {
  try {
    C();
    let r = { instance: Reflect.construct(e, t, n), instanceId: P, ctor: e, args: t, newTarget: n };
    return new Proxy(r, { ...at, get(_, o, c) {
      _.instanceId !== P && (_.instance = Reflect.construct(_.ctor, _.args, _.newTarget), _.instanceId = P);
      let f = Reflect.get(_.instance, o, c);
      return typeof f != "function" ? f : f.constructor === Function ? new Proxy(f, { apply(b, O, A) {
        C();
        try {
          return b.apply(O, A);
        } catch (R) {
          throw U(R), R;
        }
      } }) : new Proxy(f, { async apply(b, O, A) {
        C();
        try {
          return await b.apply(O, A);
        } catch (R) {
          throw U(R), R;
        }
      } });
    } });
  } catch (r) {
    throw k = true, r;
  }
} };
var wt = new Proxy(z, h);
var dt = new Proxy(y, h);
var lt = new Proxy(m, h);
var pt = new Proxy(v, h);
var ht = new Proxy(x, h);
var yt = new Proxy(I, h);
var mt = new Proxy(E, h);

// ../../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-XEHBhT/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = wt;

// ../../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-XEHBhT/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  dt as ContainerStartupOptions,
  lt as IntoUnderlyingByteSource,
  pt as IntoUnderlyingSink,
  ht as IntoUnderlyingSource,
  yt as MinifyConfig,
  mt as R2Range,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=shim.js.map
