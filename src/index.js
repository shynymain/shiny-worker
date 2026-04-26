export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 動作確認
    if (url.pathname === "/api/health") {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Worker OK");
  }
};
