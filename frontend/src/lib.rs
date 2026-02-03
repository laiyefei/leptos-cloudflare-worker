use app::App;
use leptos::*;
use wasm_bindgen::prelude::wasm_bindgen;
use leptos::wasm_bindgen::JsCast;

#[wasm_bindgen]
pub fn hydrate() {
    // 1. 依然保留求救信号
    console_error_panic_hook::set_once();
    _ = console_log::init_with_level(log::Level::Debug);

    log::info!("水合尝试中...");

    // 2. 获取当前路径，确保和 SSR 渲染参数对齐
    let path = crate::window()
        .location()
        .pathname()
        .unwrap_or_else(|_| "/".to_string());

    // 3. 找到那个 id="app" 的坑位
    let el = crate::document()
        .get_element_by_id("app")
        .expect("找不到 id 为 app 的 div 标签，请检查 HTML 模板");

    // 4. 使用 mount_to，它在 hydrate 特性开启时会自动进行水合
    leptos::mount_to(el.unchecked_into(), move || view! { <App path=path.clone() /> });
}