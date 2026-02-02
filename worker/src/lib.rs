use worker::*;
use leptos::*;
use app::App;

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: Context) -> Result<Response> {
    let content = leptos::ssr::render_to_string(move || {
        view! { <App /> }
    });

    let html = format!(
        r#"<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <script type="module">
                    import init from "/pkg/frontend.js";
                    init("/pkg/frontend_bg.wasm").then(m => m.hydrate());
                </script>
            </head>
            <body>{}</body>
        </html>"#,
        content
    );

    Response::from_html(html)
}
