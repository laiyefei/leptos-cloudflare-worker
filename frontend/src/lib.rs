use app::App;
use leptos::*;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn hydrate() {
    _ = console_error_panic_hook::set_once();
    mount_to_body(App);
}
