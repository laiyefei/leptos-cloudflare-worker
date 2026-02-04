var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-5phkHn/checked-fetch.js
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
import { WorkerEntrypoint as fe } from "cloudflare:workers";
import q from "./e8bfedc46f806e907cc4c6ac9b40ea1547897d6f-index_bg.wasm";
var y = class {
  static {
    __name(this, "y");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, K.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_containerstartupoptions_free(e, 0);
  }
  get enableInternet() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.__wbg_get_containerstartupoptions_enableInternet(this.__wbg_ptr);
    return e === 16777215 ? void 0 : e !== 0;
  }
  get entrypoint() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.__wbg_get_containerstartupoptions_entrypoint(this.__wbg_ptr);
    var n = te(e[0], e[1]).slice();
    return i.__wbindgen_free(e[0], e[1] * 4, 4), n;
  }
  get env() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.__wbg_get_containerstartupoptions_env(this.__wbg_ptr);
  }
  set enableInternet(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_containerstartupoptions_enableInternet(this.__wbg_ptr, f(e) ? 16777215 : e ? 1 : 0);
  }
  set entrypoint(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let n = se(e, i.__wbindgen_malloc), r = w;
    i.__wbg_set_containerstartupoptions_entrypoint(this.__wbg_ptr, n, r);
  }
  set env(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_containerstartupoptions_env(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (y.prototype[Symbol.dispose] = y.prototype.free);
var m = class {
  static {
    __name(this, "m");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_intounderlyingbytesource_free(e, 0);
  }
  get autoAllocateChunkSize() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    i.intounderlyingbytesource_cancel(e);
  }
  pull(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingbytesource_pull(this.__wbg_ptr, e);
  }
  start(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.intounderlyingbytesource_start(this.__wbg_ptr, e);
  }
  get type() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.intounderlyingbytesource_type(this.__wbg_ptr);
    return G[e];
  }
};
Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
var v = class {
  static {
    __name(this, "v");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, X.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_intounderlyingsink_free(e, 0);
  }
  abort(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let n = this.__destroy_into_raw();
    return i.intounderlyingsink_abort(n, e);
  }
  close() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    return i.intounderlyingsink_close(e);
  }
  write(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingsink_write(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (v.prototype[Symbol.dispose] = v.prototype.free);
var x = class {
  static {
    __name(this, "x");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Y.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_intounderlyingsource_free(e, 0);
  }
  cancel() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = this.__destroy_into_raw();
    i.intounderlyingsource_cancel(e);
  }
  pull(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    return i.intounderlyingsource_pull(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (x.prototype[Symbol.dispose] = x.prototype.free);
var I = class {
  static {
    __name(this, "I");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_minifyconfig_free(e, 0);
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
  set css(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
  set html(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  set js(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
};
Symbol.dispose && (I.prototype[Symbol.dispose] = I.prototype.free);
var E = class {
  static {
    __name(this, "E");
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ee.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    i.__wbg_r2range_free(e, 0);
  }
  get length() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.__wbg_get_r2range_length(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  get offset() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.__wbg_get_r2range_offset(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  get suffix() {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    let e = i.__wbg_get_r2range_suffix(this.__wbg_ptr);
    return e[0] === 0 ? void 0 : e[1];
  }
  set length(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_length(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  set offset(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_offset(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
  set suffix(e) {
    if (this.__wbg_inst !== void 0 && this.__wbg_inst !== s) throw new Error("Invalid stale object from previous Wasm instance");
    i.__wbg_set_r2range_suffix(this.__wbg_ptr, !f(e), f(e) ? 0 : e);
  }
};
Symbol.dispose && (E.prototype[Symbol.dispose] = E.prototype.free);
function V() {
  s++, p = null, W = null, typeof numBytesDecoded < "u" && (numBytesDecoded = 0), typeof w < "u" && (w = 0), i = new WebAssembly.Instance(q, J()).exports, i.__wbindgen_start();
}
__name(V, "V");
function D(t, e, n) {
  return i.fetch(t, e, n);
}
__name(D, "D");
function T(t) {
  i.setPanicHook(t);
}
__name(T, "T");
function J() {
  return { __proto__: null, "./index_bg.js": { __proto__: null, __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(function(e, n) {
    let r = String(n), _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(e + 4, o, true), g().setInt32(e + 0, _, true);
  }, "__wbg_String_8f0eb39a4a4c2f66"), __wbg___wbindgen_debug_string_0bc8482c6e3508ae: /* @__PURE__ */ __name(function(e, n) {
    let r = M(n), _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(e + 4, o, true), g().setInt32(e + 0, _, true);
  }, "__wbg___wbindgen_debug_string_0bc8482c6e3508ae"), __wbg___wbindgen_is_function_0095a73b8b156f76: /* @__PURE__ */ __name(function(e) {
    return typeof e == "function";
  }, "__wbg___wbindgen_is_function_0095a73b8b156f76"), __wbg___wbindgen_is_undefined_9e4d92534c42d778: /* @__PURE__ */ __name(function(e) {
    return e === void 0;
  }, "__wbg___wbindgen_is_undefined_9e4d92534c42d778"), __wbg___wbindgen_string_get_72fb696202c56729: /* @__PURE__ */ __name(function(e, n) {
    let r = n, _ = typeof r == "string" ? r : void 0;
    var o = f(_) ? 0 : F(_, i.__wbindgen_malloc, i.__wbindgen_realloc), c = w;
    g().setInt32(e + 4, c, true), g().setInt32(e + 0, o, true);
  }, "__wbg___wbindgen_string_get_72fb696202c56729"), __wbg___wbindgen_throw_be289d5034ed271b: /* @__PURE__ */ __name(function(e, n) {
    var r = l(e, n);
    throw new Error(r);
  }, "__wbg___wbindgen_throw_be289d5034ed271b"), __wbg__wbg_cb_unref_d9b87ff7982e3b21: /* @__PURE__ */ __name(function(e) {
    e._wbg_cb_unref();
  }, "__wbg__wbg_cb_unref_d9b87ff7982e3b21"), __wbg_buffer_26d0910f3a5bc899: /* @__PURE__ */ __name(function(e) {
    return e.buffer;
  }, "__wbg_buffer_26d0910f3a5bc899"), __wbg_byobRequest_80e594e6da4e1af7: /* @__PURE__ */ __name(function(e) {
    let n = e.byobRequest;
    return f(n) ? 0 : d(n);
  }, "__wbg_byobRequest_80e594e6da4e1af7"), __wbg_byteLength_3417f266f4bf562a: /* @__PURE__ */ __name(function(e) {
    return e.byteLength;
  }, "__wbg_byteLength_3417f266f4bf562a"), __wbg_byteOffset_f88547ca47c86358: /* @__PURE__ */ __name(function(e) {
    return e.byteOffset;
  }, "__wbg_byteOffset_f88547ca47c86358"), __wbg_call_389efe28435a9388: /* @__PURE__ */ __name(function() {
    return a(function(e, n) {
      return e.call(n);
    }, arguments);
  }, "__wbg_call_389efe28435a9388"), __wbg_call_4708e0c13bdc8e95: /* @__PURE__ */ __name(function() {
    return a(function(e, n, r) {
      return e.call(n, r);
    }, arguments);
  }, "__wbg_call_4708e0c13bdc8e95"), __wbg_cause_0fc168d4eaec87cc: /* @__PURE__ */ __name(function(e) {
    return e.cause;
  }, "__wbg_cause_0fc168d4eaec87cc"), __wbg_cf_b8165e79377eeebd: /* @__PURE__ */ __name(function() {
    return a(function(e) {
      let n = e.cf;
      return f(n) ? 0 : d(n);
    }, arguments);
  }, "__wbg_cf_b8165e79377eeebd"), __wbg_close_06dfa0a815b9d71f: /* @__PURE__ */ __name(function() {
    return a(function(e) {
      e.close();
    }, arguments);
  }, "__wbg_close_06dfa0a815b9d71f"), __wbg_close_a79afee31de55b36: /* @__PURE__ */ __name(function() {
    return a(function(e) {
      e.close();
    }, arguments);
  }, "__wbg_close_a79afee31de55b36"), __wbg_enqueue_2c63f2044f257c3e: /* @__PURE__ */ __name(function() {
    return a(function(e, n) {
      e.enqueue(n);
    }, arguments);
  }, "__wbg_enqueue_2c63f2044f257c3e"), __wbg_error_9a7fe3f932034cde: /* @__PURE__ */ __name(function(e) {
    console.error(e);
  }, "__wbg_error_9a7fe3f932034cde"), __wbg_error_f852e41c69b0bd84: /* @__PURE__ */ __name(function(e, n) {
    console.error(e, n);
  }, "__wbg_error_f852e41c69b0bd84"), __wbg_headers_5a897f7fee9a0571: /* @__PURE__ */ __name(function(e) {
    return e.headers;
  }, "__wbg_headers_5a897f7fee9a0571"), __wbg_instanceof_Error_8573fe0b0b480f46: /* @__PURE__ */ __name(function(e) {
    let n;
    try {
      n = e instanceof Error;
    } catch {
      n = false;
    }
    return n;
  }, "__wbg_instanceof_Error_8573fe0b0b480f46"), __wbg_length_32ed9a279acd054c: /* @__PURE__ */ __name(function(e) {
    return e.length;
  }, "__wbg_length_32ed9a279acd054c"), __wbg_method_a9e9b2fcba5440fb: /* @__PURE__ */ __name(function(e, n) {
    let r = n.method, _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(e + 4, o, true), g().setInt32(e + 0, _, true);
  }, "__wbg_method_a9e9b2fcba5440fb"), __wbg_new_361308b2356cecd0: /* @__PURE__ */ __name(function() {
    return new Object();
  }, "__wbg_new_361308b2356cecd0"), __wbg_new_64284bd487f9d239: /* @__PURE__ */ __name(function() {
    return a(function() {
      return new Headers();
    }, arguments);
  }, "__wbg_new_64284bd487f9d239"), __wbg_new_72b49615380db768: /* @__PURE__ */ __name(function(e, n) {
    var r = l(e, n);
    return new Error(r);
  }, "__wbg_new_72b49615380db768"), __wbg_new_b5d9e2fb389fef91: /* @__PURE__ */ __name(function(e, n) {
    try {
      var r = { a: e, b: n }, _ = /* @__PURE__ */ __name((c, u) => {
        let b = r.a;
        r.a = 0;
        try {
          return N(b, r.b, c, u);
        } finally {
          r.a = b;
        }
      }, "_");
      return new Promise(_);
    } finally {
      r.a = r.b = 0;
    }
  }, "__wbg_new_b5d9e2fb389fef91"), __wbg_new_no_args_1c7c842f08d00ebb: /* @__PURE__ */ __name(function(e, n) {
    var r = l(e, n);
    return new Function(r);
  }, "__wbg_new_no_args_1c7c842f08d00ebb"), __wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1: /* @__PURE__ */ __name(function(e, n, r) {
    return new Uint8Array(e, n >>> 0, r >>> 0);
  }, "__wbg_new_with_byte_offset_and_length_aa261d9c9da49eb1"), __wbg_new_with_length_a2c39cbe88fd8ff1: /* @__PURE__ */ __name(function(e) {
    return new Uint8Array(e >>> 0);
  }, "__wbg_new_with_length_a2c39cbe88fd8ff1"), __wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b: /* @__PURE__ */ __name(function() {
    return a(function(e, n) {
      return new Response(e, n);
    }, arguments);
  }, "__wbg_new_with_opt_buffer_source_and_init_8c10f2615c78809b"), __wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb: /* @__PURE__ */ __name(function() {
    return a(function(e, n) {
      return new Response(e, n);
    }, arguments);
  }, "__wbg_new_with_opt_readable_stream_and_init_8a044befefe6d8bb"), __wbg_new_with_opt_str_and_init_4fbb71523b271b6e: /* @__PURE__ */ __name(function() {
    return a(function(e, n, r) {
      var _ = l(e, n);
      return new Response(_, r);
    }, arguments);
  }, "__wbg_new_with_opt_str_and_init_4fbb71523b271b6e"), __wbg_queueMicrotask_0aa0a927f78f5d98: /* @__PURE__ */ __name(function(e) {
    return e.queueMicrotask;
  }, "__wbg_queueMicrotask_0aa0a927f78f5d98"), __wbg_queueMicrotask_5bb536982f78a56f: /* @__PURE__ */ __name(function(e) {
    queueMicrotask(e);
  }, "__wbg_queueMicrotask_5bb536982f78a56f"), __wbg_resolve_002c4b7d9d8f6b64: /* @__PURE__ */ __name(function(e) {
    return Promise.resolve(e);
  }, "__wbg_resolve_002c4b7d9d8f6b64"), __wbg_respond_bf6ab10399ca8722: /* @__PURE__ */ __name(function() {
    return a(function(e, n) {
      e.respond(n >>> 0);
    }, arguments);
  }, "__wbg_respond_bf6ab10399ca8722"), __wbg_set_6cb8631f80447a67: /* @__PURE__ */ __name(function() {
    return a(function(e, n, r) {
      return Reflect.set(e, n, r);
    }, arguments);
  }, "__wbg_set_6cb8631f80447a67"), __wbg_set_cc56eefd2dd91957: /* @__PURE__ */ __name(function(e, n, r) {
    e.set(ne(n, r));
  }, "__wbg_set_cc56eefd2dd91957"), __wbg_set_db769d02949a271d: /* @__PURE__ */ __name(function() {
    return a(function(e, n, r, _, o) {
      var c = l(n, r), u = l(_, o);
      e.set(c, u);
    }, arguments);
  }, "__wbg_set_db769d02949a271d"), __wbg_set_headers_bbdfebba19309590: /* @__PURE__ */ __name(function(e, n) {
    e.headers = n;
  }, "__wbg_set_headers_bbdfebba19309590"), __wbg_set_status_fa41f71c4575bca5: /* @__PURE__ */ __name(function(e, n) {
    e.status = n;
  }, "__wbg_set_status_fa41f71c4575bca5"), __wbg_static_accessor_GLOBAL_12837167ad935116: /* @__PURE__ */ __name(function() {
    let e = typeof global > "u" ? null : global;
    return f(e) ? 0 : d(e);
  }, "__wbg_static_accessor_GLOBAL_12837167ad935116"), __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: /* @__PURE__ */ __name(function() {
    let e = typeof globalThis > "u" ? null : globalThis;
    return f(e) ? 0 : d(e);
  }, "__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f"), __wbg_static_accessor_SELF_a621d3dfbb60d0ce: /* @__PURE__ */ __name(function() {
    let e = typeof self > "u" ? null : self;
    return f(e) ? 0 : d(e);
  }, "__wbg_static_accessor_SELF_a621d3dfbb60d0ce"), __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: /* @__PURE__ */ __name(function() {
    let e = typeof window > "u" ? null : window;
    return f(e) ? 0 : d(e);
  }, "__wbg_static_accessor_WINDOW_f8727f0cf888e0bd"), __wbg_then_b9e7b3b5f1a9e1b5: /* @__PURE__ */ __name(function(e, n) {
    return e.then(n);
  }, "__wbg_then_b9e7b3b5f1a9e1b5"), __wbg_toString_029ac24421fd7a24: /* @__PURE__ */ __name(function(e) {
    return e.toString();
  }, "__wbg_toString_029ac24421fd7a24"), __wbg_url_36c39f6580d05409: /* @__PURE__ */ __name(function(e, n) {
    let r = n.url, _ = F(r, i.__wbindgen_malloc, i.__wbindgen_realloc), o = w;
    g().setInt32(e + 4, o, true), g().setInt32(e + 0, _, true);
  }, "__wbg_url_36c39f6580d05409"), __wbg_view_6c32e7184b8606ad: /* @__PURE__ */ __name(function(e) {
    let n = e.view;
    return f(n) ? 0 : d(n);
  }, "__wbg_view_6c32e7184b8606ad"), __wbindgen_cast_0000000000000001: /* @__PURE__ */ __name(function(e, n) {
    return ie(e, n, i.wasm_bindgen_c5bd2519c2984b9e___closure__destroy___dyn_core_61e878f9ec827005___ops__function__FnMut__wasm_bindgen_c5bd2519c2984b9e___JsValue____Output_______, $);
  }, "__wbindgen_cast_0000000000000001"), __wbindgen_cast_0000000000000002: /* @__PURE__ */ __name(function(e, n) {
    var r = l(e, n);
    return r;
  }, "__wbindgen_cast_0000000000000002"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(function() {
    let e = i.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }, "__wbindgen_init_externref_table") } };
}
__name(J, "J");
function $(t, e, n) {
  i.wasm_bindgen_c5bd2519c2984b9e___convert__closures_____invoke___wasm_bindgen_c5bd2519c2984b9e___JsValue_____(t, e, n);
}
__name($, "$");
function N(t, e, n, r) {
  i.wasm_bindgen_c5bd2519c2984b9e___convert__closures_____invoke___wasm_bindgen_c5bd2519c2984b9e___JsValue__wasm_bindgen_c5bd2519c2984b9e___JsValue_____(t, e, n, r);
}
__name(N, "N");
var G = ["bytes"];
var s = 0;
var K = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_containerstartupoptions_free(t >>> 0, 1);
});
var Q = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_intounderlyingbytesource_free(t >>> 0, 1);
});
var X = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_intounderlyingsink_free(t >>> 0, 1);
});
var Y = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_intounderlyingsource_free(t >>> 0, 1);
});
var Z = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_minifyconfig_free(t >>> 0, 1);
});
var ee = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry(({ ptr: t, instance: e }) => {
  e === s && i.__wbg_r2range_free(t >>> 0, 1);
});
function d(t) {
  let e = i.__externref_table_alloc();
  return i.__wbindgen_externrefs.set(e, t), e;
}
__name(d, "d");
var L = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
}, "register"), unregister: /* @__PURE__ */ __name(() => {
}, "unregister") } : new FinalizationRegistry((t) => {
  t.instance === s && t.dtor(t.a, t.b);
});
function M(t) {
  let e = typeof t;
  if (e == "number" || e == "boolean" || t == null) return `${t}`;
  if (e == "string") return `"${t}"`;
  if (e == "symbol") {
    let _ = t.description;
    return _ == null ? "Symbol" : `Symbol(${_})`;
  }
  if (e == "function") {
    let _ = t.name;
    return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
  }
  if (Array.isArray(t)) {
    let _ = t.length, o = "[";
    _ > 0 && (o += M(t[0]));
    for (let c = 1; c < _; c++) o += ", " + M(t[c]);
    return o += "]", o;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t)), r;
  if (n && n.length > 1) r = n[1];
  else return toString.call(t);
  if (r == "Object") try {
    return "Object(" + JSON.stringify(t) + ")";
  } catch {
    return "Object";
  }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
}
__name(M, "M");
function te(t, e) {
  t = t >>> 0;
  let n = g(), r = [];
  for (let _ = t; _ < t + 4 * e; _ += 4) r.push(i.__wbindgen_externrefs.get(n.getUint32(_, true)));
  return i.__externref_drop_slice(t, e), r;
}
__name(te, "te");
function ne(t, e) {
  return t = t >>> 0, S().subarray(t / 1, t / 1 + e);
}
__name(ne, "ne");
function l(t, e) {
  return t === 0 ? re(e) : _e(t, e);
}
__name(l, "l");
var p = null;
function g() {
  return (p === null || p.buffer.detached === true || p.buffer.detached === void 0 && p.buffer !== i.memory.buffer) && (p = new DataView(i.memory.buffer)), p;
}
__name(g, "g");
function re(t) {
  return i.__wbindgen_externrefs.get(t);
}
__name(re, "re");
function _e(t, e) {
  return t = t >>> 0, oe(t, e);
}
__name(_e, "_e");
var W = null;
function S() {
  return (W === null || W.byteLength === 0) && (W = new Uint8Array(i.memory.buffer)), W;
}
__name(S, "S");
function a(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    let r = d(n);
    i.__wbindgen_exn_store(r);
  }
}
__name(a, "a");
function f(t) {
  return t == null;
}
__name(f, "f");
function ie(t, e, n, r) {
  let _ = { a: t, b: e, cnt: 1, dtor: n, instance: s }, o = /* @__PURE__ */ __name((...c) => {
    if (_.instance !== s) throw new Error("Cannot invoke closure from previous WASM instance");
    _.cnt++;
    let u = _.a;
    _.a = 0;
    try {
      return r(u, _.b, ...c);
    } finally {
      _.a = u, o._wbg_cb_unref();
    }
  }, "o");
  return o._wbg_cb_unref = () => {
    --_.cnt === 0 && (_.dtor(_.a, _.b), _.a = 0, L.unregister(_));
  }, L.register(o, _, _), o;
}
__name(ie, "ie");
function se(t, e) {
  let n = e(t.length * 4, 4) >>> 0;
  for (let r = 0; r < t.length; r++) {
    let _ = d(t[r]);
    g().setUint32(n + 4 * r, _, true);
  }
  return w = t.length, n;
}
__name(se, "se");
function F(t, e, n) {
  if (n === void 0) {
    let u = j.encode(t), b = e(u.length, 1) >>> 0;
    return S().subarray(b, b + u.length).set(u), w = u.length, b;
  }
  let r = t.length, _ = e(r, 1) >>> 0, o = S(), c = 0;
  for (; c < r; c++) {
    let u = t.charCodeAt(c);
    if (u > 127) break;
    o[_ + c] = u;
  }
  if (c !== r) {
    c !== 0 && (t = t.slice(c)), _ = n(_, r, r = c + t.length * 3, 1) >>> 0;
    let u = S().subarray(_ + c, _ + r), b = j.encodeInto(t, u);
    c += b.written, _ = n(_, r, c, 1) >>> 0;
  }
  return w = c, _;
}
__name(F, "F");
var H = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
H.decode();
function oe(t, e) {
  return H.decode(S().subarray(t, t + e));
}
__name(oe, "oe");
var j = new TextEncoder();
"encodeInto" in j || (j.encodeInto = function(t, e) {
  let n = j.encode(t);
  return e.set(n), { read: t.length, written: n.length };
});
var w = 0;
var ce = new WebAssembly.Instance(q, J());
var i = ce.exports;
i.__wbindgen_start();
Error.stackTraceLimit = 100;
var k = false;
function B() {
  T && T(function(t) {
    let e = new Error("Rust panic: " + t);
    console.error("Critical", e), k = true;
  });
}
__name(B, "B");
B();
var P = 0;
function C() {
  k && (console.log("Reinitializing Wasm application"), V(), k = false, B(), P++);
}
__name(C, "C");
addEventListener("error", (t) => {
  U(t.error);
});
function U(t) {
  t instanceof WebAssembly.RuntimeError && (console.error("Critical", t), k = true);
}
__name(U, "U");
var z = class extends fe {
  static {
    __name(this, "z");
  }
};
z.prototype.fetch = function(e) {
  return D.call(this, e, this.env, this.ctx);
};
var ae = { set: /* @__PURE__ */ __name((t, e, n, r) => Reflect.set(t.instance, e, n, r), "set"), has: /* @__PURE__ */ __name((t, e) => Reflect.has(t.instance, e), "has"), deleteProperty: /* @__PURE__ */ __name((t, e) => Reflect.deleteProperty(t.instance, e), "deleteProperty"), apply: /* @__PURE__ */ __name((t, e, n) => Reflect.apply(t.instance, e, n), "apply"), construct: /* @__PURE__ */ __name((t, e, n) => Reflect.construct(t.instance, e, n), "construct"), getPrototypeOf: /* @__PURE__ */ __name((t) => Reflect.getPrototypeOf(t.instance), "getPrototypeOf"), setPrototypeOf: /* @__PURE__ */ __name((t, e) => Reflect.setPrototypeOf(t.instance, e), "setPrototypeOf"), isExtensible: /* @__PURE__ */ __name((t) => Reflect.isExtensible(t.instance), "isExtensible"), preventExtensions: /* @__PURE__ */ __name((t) => Reflect.preventExtensions(t.instance), "preventExtensions"), getOwnPropertyDescriptor: /* @__PURE__ */ __name((t, e) => Reflect.getOwnPropertyDescriptor(t.instance, e), "getOwnPropertyDescriptor"), defineProperty: /* @__PURE__ */ __name((t, e, n) => Reflect.defineProperty(t.instance, e, n), "defineProperty"), ownKeys: /* @__PURE__ */ __name((t) => Reflect.ownKeys(t.instance), "ownKeys") };
var h = { construct(t, e, n) {
  try {
    C();
    let r = { instance: Reflect.construct(t, e, n), instanceId: P, ctor: t, args: e, newTarget: n };
    return new Proxy(r, { ...ae, get(_, o, c) {
      _.instanceId !== P && (_.instance = Reflect.construct(_.ctor, _.args, _.newTarget), _.instanceId = P);
      let u = Reflect.get(_.instance, o, c);
      return typeof u != "function" ? u : u.constructor === Function ? new Proxy(u, { apply(b, O, A) {
        C();
        try {
          return b.apply(O, A);
        } catch (R) {
          throw U(R), R;
        }
      } }) : new Proxy(u, { async apply(b, O, A) {
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
var we = new Proxy(z, h);
var de = new Proxy(y, h);
var le = new Proxy(m, h);
var pe = new Proxy(v, h);
var he = new Proxy(x, h);
var ye = new Proxy(I, h);
var me = new Proxy(E, h);

// ../../../../root/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
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

// ../../../../root/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
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

// .wrangler/tmp/bundle-5phkHn/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = we;

// ../../../../root/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
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

// .wrangler/tmp/bundle-5phkHn/middleware-loader.entry.ts
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
  de as ContainerStartupOptions,
  le as IntoUnderlyingByteSource,
  pe as IntoUnderlyingSink,
  he as IntoUnderlyingSource,
  ye as MinifyConfig,
  me as R2Range,
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=shim.js.map
