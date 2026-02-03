use app::App;
use leptos::*;
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn hydrate() {
    console_error_panic_hook::set_once();
    // 使用 hydrate_articulated (如果是 Leptos 0.6) 或显式指定 ID
    leptos::mount_to_body(|| view! { <App /> }); 
}