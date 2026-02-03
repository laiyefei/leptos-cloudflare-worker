to_client:
  wasm-pack build frontend --target web --out-dir ../worker/static_pkg

deploy:
  wasm-pack build frontend --target web --out-dir ../worker/static_pkg
  npx wrangler deploy