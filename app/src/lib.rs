use leptos::*;
use leptos_router::*;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Router>
            <main style="font-family: sans-serif; text-align: center; padding: 2rem;">
                <h1>"Leptos x Cloudflare"</h1>
                <Routes>
                    <Route path="" view=HomePage/>
                </Routes>
            </main>
        </Router>
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
