use leptos::*;
use leptos_router::*;

#[component]
pub fn App(#[prop(optional)] path: String) -> impl IntoView {
    // 关键点：我们不在 App 内部做复杂的 if/else 逻辑
    // 而是让父级（Worker 或 Frontend）来决定是否包裹 Router
    view! {
        <main style="font-family: sans-serif; text-align: center; padding: 2rem;">
            <h1>"Leptos x Clo123123udflare"</h1>
            <HomePage />
        </main>
    }
}

#[component]
fn HomePage() -> impl IntoView {
    let (count, set_count) = create_signal(0);
    view! {
        <p>"Status: Optimized Workspace"</p>
        <button on:click=move |_| set_count.update(|n| *n += 1)>
            "Counter: " {count}
        </button>
    }
}
