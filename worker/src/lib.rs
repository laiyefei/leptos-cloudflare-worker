use worker::*;
use leptos::*;
// 这里甚至不需要引入 leptos_router
use app::App;

#[event(fetch)]
pub async fn main(req: Request, _env: Env, _ctx: Context) -> Result<Response> {
    let url = req.url()?;
    let path = url.path().to_string();

    // 在服务端，我们直接根据 path 渲染，不使用 Router 组件
    let content = leptos::ssr::render_to_string(move || {
        view! { <App path=path /> }
    });

    let html = format!(
        r#"<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="data:,">
                <script type="module">
                    // 导入构建生成的初始化函数
                    import init, {{ hydrate }} from "/frontend.js";

                    async function run() {{
                        try {{
                            // 2. 显式初始化。对于大多数 wasm-pack 生成的胶水代码，
                            // 传入路径字符串其实是最高效的，如果 fetch 报 MIME 错，再换成 buffer。
                            await init("/frontend_bg.wasm");
                            
                            // 3. 直接调用从模块导出的 hydrate 函数
                            // 注意：确保你的 frontend/src/lib.rs 里有 #[wasm_bindgen] pub fn hydrate()
                            hydrate();
                            
                            console.log("Leptos 成功激活");
                        }} catch (e) {{
                            console.error("Leptos 激活失败:", e);
                        }}
                    }}

                    run();
                </script>
            </head>
            <body>{}</body>
        </html>"#,
        content
    );

    Response::from_html(html)
}