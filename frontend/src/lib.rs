use app::App;
use leptos::*;
use wasm_bindgen::prelude::wasm_bindgen;


#[wasm_bindgen]
pub fn hydrate() {
    // 1. 把 Rust 的 Panic 转发到浏览器的 Console
    console_error_panic_hook::set_once();
    
    // 2. 初始化日志（这样你就能看到 Leptos 的内部运行细节）
    _ = console_log::init_with_level(log::Level::Debug);

    log::info!("水合开始..."); // 手动打个日志，看能不能在控制台看到

    leptos::mount_to_body(|| view! { <App /> });
}